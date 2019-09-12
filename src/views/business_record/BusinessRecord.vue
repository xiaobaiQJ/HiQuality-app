/**
* @author bai tao
* @date 2019/6/28 0028
* @Description:业务记录
*/
<template>
  <div class="con">
    <main>
      <div class="container-warp">
        <div class="left-nav">
          <div class="nav">
            <el-select
              v-model="tableTypeId" placeholder="请选择"
              style="width: 100%" size="mini">
              <el-option
                size="mini"
                v-for="item in downList"
                :key="item.id"
                :label="getLabel(item)"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="list" :style="{height : $store.state.deviceStyle-160+'px'}">
            <div class="list-item hover" v-for="(item,index) in businessList" :key="index"
                 :class="currentIndex==index ?'active-item':''" @click="tabBusiness(item,index)">
              <div class="list-item-left">
                {{item.tableNo}}
              </div>
              <div class="list-item-center">
                {{item.tableName}}
              </div>
              <div class="list-item-right">
                <i class="iconfont" @click.stop="showAddMenu(item)">&#xe623;</i>
              </div>
            </div>
          </div>
        </div>
        <div class="right-box">

          <!--          <div class="right-box-top">
                      <span class="hover" @click="showAddMenu">
                        <i class="iconfont icons ">&#xe623;</i>新增
                      </span>
                    </div>-->

          <div class="list-warp">
            <div class="list scroll-bar" :style="{height : ($store.state.deviceStyle-200) +'px'}">
              <div class="line-box line-title">
                <div class="number">序号</div>
                <div class="coding">记录编号</div>
                <div class="line-item">工程部位</div>
                <div class="table-coding">记录时间</div>
                <div class="table-coding">提交时间</div>
                <div class="coding">操作</div>
              </div>
              <div class="line-box line-hover"
                   v-if="tableData.length>0"
                   style="border-bottom: none" v-for="(item,index) in tableData"
                   :key="index"
                   @click.stop="goBusinessTable(item)">
                <div class="number">{{index+1}}</div>
                <div class="coding">{{item.recNo}}</div>
                <div class="line-item">{{item.projPartsName}}</div>
                <div class="table-coding">{{item.testDate}}</div>
                <div class="table-coding">{{item.commitDate}}</div>
                <div class="coding">
                  <div style="display: inline-block;width: 40px"
                       v-if="$store.state.userLevel==5 & item.auditStatus==='' ">
                    <div>
                      <i class="iconfont" @click.stop="showConfirm(item.tableId,item.id,item)">&#xe60d;</i>
                    </div>
                  </div>
                  <!--       <div style="display: inline-block;width: 40px">
                           <i class="iconfont" v-show="item.auditStatus!=2" @click.stop="showConfirmAudit(item.id)">&#xeb33;</i>
                         </div>-->
                </div>
              </div>
              <div v-else class="error-box">
                暂无数据
              </div>

              <!--   <div class="list-item">
                   <div class="list-item-left">
                     工程编码
                   </div>
                   <div class="list-item-center">
                     工程名称
                   </div>
                   <div class="list-item-center">
                     起止桩号
                   </div>
                   <div class="list-item-right">
                     <div>操作</div>
                   </div>
                 </div>-->

            </div>
            <div class="block">
              <el-pagination
                :page-sizes="[10,15,20]"
                background
                @size-change="size_change"
                @current-change="current_change"
                :current-page.sync="currentPage"
                layout="total,prev, pager,next ,sizes "
                :total="total">
              </el-pagination>
            </div>
          </div>

        </div>
      </div>
    </main>
    <!--提交-->
    <article>
      <div class="layer-box" v-if="submit"></div>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <div v-show="submit" class="dialog-box">
          <div class="dialog-title">提交</div>
          <div class="dialog-content ">
            <!--     <div>
                   <strong>工程部位：</strong>
                   {{title}}
                 </div>-->
            <div class="dialog-line">
              <span>提交日期：</span>
              <el-date-picker
                v-model="auditTime"
                type="datetime"
                size="mini"


                placeholder="选择日期"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>
            </div>
            <div class="dialog-line">
              <span>审核人：</span>
              <el-select
                v-model="auditUserId"
                size="mini"
                placeholder="请选择">
                <el-option
                  v-for="(item,index) in auditList"
                  :key="index"
                  :label="item.fullName"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="button-confrim ">
            <div class="btns" @click="cancel">取消</div>
            <div class="btns" @click="onTableSubmit">确定</div>
          </div>

        </div>
      </transition>

    </article>
    <!--选择工程-->
    <article v-if="menu">
      <div class="layer-box" @click.stop="menu=false"></div>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <div v-show="menu" class="dialog-box">
          <Select_Process :tableId="tableId" :currentUrl="currentUrl" :tableName="tableName"></Select_Process>
        </div>
      </transition>
    </article>
    <!--审核-->
    <article>

      <div class="layer-box" v-if="audit"></div>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >

        <div class="audit-box" v-if="audit">
          <div class="dialog-title" v-if="flowType==1 || flowType==3"><strong>审核</strong></div>
          <div class="dialog-title" v-if="flowType==2 || flowType == 4"><strong>签收</strong></div>
          <div class="dialog-content ">
            <div class="dialog-line">
              <span v-if="flowType==2 || flowType == 4">签收日期：</span>
              <span v-else>审核日期：</span>
              <el-date-picker
                v-model="submitTime"
                type="datetime"
                size="mini"


                placeholder="选择日期"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>

            </div>
            <!-- <br>-->
            <div class="submit-warp" v-if="flowType!=2 || flowType == 4">
              <textarea placeholder="此工程部位的施工资料及现场施工质量，均满足质量要求，同意。" v-model="auditOpinion"></textarea>
            </div>
            <!--     <div class="checkbox-warp dialog-line">
                   <span>审核操作</span>
                   <van-radio name="1" v-model="radio" checked-color="#07c160">通过</van-radio>
                   <span class="split"></span>
                   <van-radio name="2" v-model="radio" checked-color="#E52F2A">不通过</van-radio>
                 </div>-->
          </div>

          <div class="dialog-title"><strong>提交</strong></div>
          <div class="dialog-content">
            <div class="dialog-line">
              <span>提交日期：</span>

              <el-date-picker
                v-model="auditTime1"
                type="datetime"

                size="mini"
                placeholder="选择日期"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>

            </div>
            <div class="dialog-line" v-if="flowType==1 || flowType==2">
              <span>审核人：</span>
              <el-select
                v-model="auditUserId"
                size="mini"
                placeholder="请选择">
                <el-option
                  v-for="(item,index) in auditList"
                  :key="index"
                  :label="item.fullName"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
            <div class="button-confrim ">
              <div class="btns" @click="cancel">取消</div>
              <div class="btns" @click="onAuditSubmit">确定</div>
            </div>
          </div>
        </div>
      </transition>
    </article>
  </div>
</template>

<script>
  import {Checkbox} from 'vant'
  import {getCurrentDate} from "../../utils/utils";
  import Select_Process from './Select_Process'

  export default {
    name: "BusinessRecord",
    components: {
      [Checkbox.name]: Checkbox,
      Select_Process
    },
    created() {
      this.stdProjectId = this.$route.query.id;
      this.getDownMenu();
    },
    mounted() {

    },
    watch: {
      tableTypeId: function (id) {
        console.log(id)
        this.findByTableTypeId(id);
      },

    },
    data() {
      return {
        tableList: [],//表格数据
        auditList: [],//审核人集合
        menu: false,
        checked: true,//是否通过
        audit: "",//是否显示审核
        auditTime: "",//审核时间
        submitTime: "",
        auditTime1: "",
        total: 0,//总条数
        auditOpinion: "",
        flowType: "",
        currentPage: 1, //当前页码数
        pageSize: 10, //每页显示条数
        submit: "",//是否显示提交模态框
        stdProjectId: '',//单位工程id
        currentIndex: 9999,
        recId: "",//业务记录id
        auditUserId: "",//审核人id
        downList: [],//顶部业务下拉菜单
        businessList: [],//业务数据
        tableData: [],//表格数据
        tableId: '',//当前tableId
        tableName: "",//当前name
        businessControlList: [],//业务选中控制
        tableTypeId: '',//当前选中业务表id
        currentUrl: "",//当前路径
        controlList: []//控制集合
      }
    },
    methods: {

      //显示标准工程菜单
      showAddMenu(obj) {
        this.$store.commit("setTableId", obj.id);
        this.$store.commit("setModuleType", 2);
        this.$store.commit("setCurrentType", 1);
        if(this.$store.state.userLevel<5){
          this.$store.commit("setRecId", '');
          console.log(obj)
          console.log("直接进入新增")
          console.log("点击表格进入到对应业务表")
          this.$store.commit('setAuditorTypeIds',[])
          this.$router.push({
            path: obj.tableUrl,
            query: {
              id: '',
              title: obj.tableName
            }
          })
          return
        }
        console.log(obj)
        this.tableId = obj.id;
        this.currentUrl = obj.tableUrl;
        this.tableName = obj.tableName;
        this.menu = true;
      },
      /**
       * 获取标签显示
       * @method getLabel
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getLabel(item) {
        let label = '   ' + item.typeCode + '         ' + item.typeName
        return label;
      },

      //显示提交
      showConfirm(id, recId, obj) {
        console.log("id"+id)
        console.log("recId"+recId)
        console.log(obj)
        if (obj.auditStatus == '') {
          this.recId = recId;
          this.auditTime = getCurrentDate();
          this.submitTime = getCurrentDate();
          this.submit = !this.submit;
          this.tableId = id;
          this.axios.get('/HiQuality/auditorType/auditorList', {
            params: {
              tableId: id,
              recId: this.recId
            }
          }).then((res) => {
            console.log("查询审核人和次序")
            console.log(res)
            this.auditList = res.data.data.auditorList;
          })
        } else {
          return
          //this.$tost.print("该工序已提交！","warning")
        }
      },
      //暂时被屏蔽掉了
      showConfirmAudit(recId) {
        this.recId = recId;
        this.audit = true;
        this.auditTime = getCurrentDate();
        /*this.submitTime = getCurrentDate();*/
        this.axios.get('/HiQuality/auditorType/auditorList', {
          params: {
            tableId: this.tableId,
            recId: this.recId
          }
        }).then((res) => {
          console.log("查询审核人和次序")
          console.log(res)
          if (res.data.status) {
            this.auditList = res.data.data.auditorList;
            this.flowType = res.data.data.flowType;
            /*  this.audit = !this.audit;*/
          } else {
            this.auditList = [];
          }
        })
      },
      //关闭所有模态框，清空当前选中tableId
      cancel() {
        this.submit = false;
        this.audit = false;
        this.tableId = undefined;
      },
      //表格提交
      onTableSubmit() {
        this.axios.get("/HiQuality/audit/toauditor", {
          params: {
            recId: this.recId,
            tableId: this.tableId,
            auditTime: this.auditTime,
            auditUserId: this.auditUserId,
            auditOpinion: this.auditOpinion
          }
        }).then((res) => {
          console.log("表格提交");
          console.log(res);
          if(res.data.status == 200){
            this.tableId = undefined;
            this.currentPage = 1;
            this.$tost.print("提交成功");
            this.submit = !this.submit;
            this.getTableData();
          }
        })
      },
      //提交审核
      onAuditSubmit() {
        this.axios.get('/HiQuality/audit/passAudit', {
          params: {
            recId: this.recId,
            tableId: this.tableId,
            auditTime: this.auditTime1,
            auditUserId: this.auditUserId,
            auditOpinion: this.auditOpinion,
            submitTime: this.submitTime
          }
        }).then((res) => {
          console.log("提交审核")
          console.log(res)
          this.audit = false;

          if (res.data.status == 200) {
            this.$tost.print("提交成功！")
            this.getData();

          }
          this.$store.commit("setRandom", Math.random());
        })
      },
      //条数发生改变时
      size_change(size_change) {
        this.pageSize = size_change;
        this.getTableData();
      },
      //改变当前页 并改变当前展示数据
      current_change(currentPage) {
        this.currentPage = currentPage;
        this.getTableData();
      },
      /**
       * 点击表格进入到对应业务表
       * @method goBusinessTable
       * @param {obj} 记录对象
       * @return {返回值类型} 返回值说明
       */
      goBusinessTable(obj) {
        let url = obj.tableUrl;
        console.log(obj)
        this.$store.commit("setTableId", obj.tableId);
        this.$store.commit("setProjPartsId", obj.projPartsId)
        this.$store.commit("setModuleType", 2);
        this.$store.commit("setRecId", obj.id);
        if(obj.auditStatus === 0){
          this.$store.commit("setCurrentType", 4)
        }else{
          this.$store.commit("setCurrentType", 3)
        }
        this.$publicFun.getAuditorTypeIds(true).then(res=>{
          console.log(obj)
          console.log("点击表格进入到对应业务表")
          this.$router.push({
            path: url,
            query: {
              id: '',
              title: obj.tableName
            }
          })
        });

      },
      /**
       * 点击左侧业务表查询数据
       * @method tabBusiness
       * @param {obj}
       * @return {返回值类型} 返回值说明
       */
      tabBusiness(obj, index) {
        this.currentIndex = index;
        this.tableId = obj.id;
        this.$store.commit("setTableId",obj.id);
        //this.tableId = obj.id
        this.getTableData();
      },
      /**
       * 获取右侧表格数据
       * @method 方法名
       * @param {obj} 当前点击业务表对象
       * @return {返回值类型} 返回值说明
       */
      getTableData(obj) {
        this.axios.get("/HiQuality/rec/getRecInfoListByTableId", {
          params: {
            tableId: this.tableId,
            pageSize: this.pageSize,
            pageNum: this.currentPage
          }
        }).then((res) => {
          console.log("获取右侧表格数据");
          console.log(res)
          if (res.data.data == null) {
            this.tableData = [];
            this.total = 0;
          } else {
            this.tableData = res.data.data;
            this.total = res.data.total
          }
        })
      },
      /**
       * 修改全局contractId
       * @method setContractId
       * @param {int} contractId 合同段id
       * @return {返回值类型} 无
       */
      setContractId(obj){
        this.axios.get("/HiQuality/rec/updateContractId",{
          params:{
            contractId:obj.contractId
          }
        }).then((res)=>{
          console.log("修改全局contractId");
          console.log(res)
          this.$publicFun.getAuditorTypeIds(true).then(res=>{
            this.$router.push({
              path:obj.tableUrl,
              query:{
                id:'',
                title:obj.tableName
              }
            })
          });

        })
      },
      /**
       * 根据表格类型查询对应数据
       * @method findByTableTypeId
       * @param {int} id 表格类型
       * @return {返回值类型} 返回值说明
       */
      findByTableTypeId(id) {
        this.currentIndex = 9999;
        this.axios.get('/HiQuality/table/findByContractId', {
          params: {
            tableTypeId: this.tableTypeId,
          }
        }).then((res) => {
          this.businessList = res.data.data;
        })
      },
      //获取下拉菜单信息
      getDownMenu() {
        this.axios.get('/HiQuality/tableType/findAll').then((res) => {
          this.downList = res.data.data;
          this.tableTypeId = this.downList[0].id;
          this.tableId = undefined;
          this.getTableData();
        })
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
    width: 90%;
    margin: 10px auto;
    display: block;
  }

  .nav {
    height: 30px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .left-nav {
    width: 400px;
  }

  .list-warp {
    padding: 0px 20px;
    flex: 1;
  }


  .list {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #cccccc;
  }

  .line-box {
    height: 40px !important;
    display: flex;
    border-bottom: 1px solid #cccccc;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
  }

  .line-box:last-child {
    border: none;
  }

  .line-hover:hover {
    background: #0eb1c0;
    cursor: pointer;
    color: white;
  }

  .active-item {
    background: #0eb1c0;
    cursor: pointer;
    color: white;
  }

  .line-item {
    flex: 1;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .container-warp {
    display: flex;
  }


  .right-box {
    flex: 1;
  }

  .block {
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .number {
    width: 50px !important;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 5px;
  }

  .coding {
    width: 100px;
    text-align: center;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table-coding {
    width: 120px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .right-box-top {
    height: 40px;
    line-height: 30px;
    padding-left: 20px;
  }

  .audit-box {
    position: fixed;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(187, 187, 187, 1);
    background: white;
    text-align: left;
    z-index: 2000;
    line-height: 40px;
    width: 400px;
  }


  textarea {
    border: 1px solid #cccccc;
    margin: 0;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    line-height: 20px;
    resize: none;
  }

  textarea:hover {
    /*box-sizing: border-box;*/
    border-bottom: 1px solid #cccccc;
  }

  .submit-warp {
    height: 200px;
  }



  .dialog-box {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 400px;
    line-height: 40px;
    text-align: center;
    /*border: 1px solid rgba(187, 187, 187, 1);*/
    background: white;
    text-align: left;
    z-index: 2000;
  }

  .dialog-title {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 20px;
    color: #444444;
    /*    border-bottom: 1px solid #cccccc;*/
  }

  .dialog-content {
    padding: 0px 20px;
    line-height: 50px;
  }

  .dialog-line span {
    display: inline-block;
    padding-left: 26px;
    width: 80px;
  }

  .button-confrim {
    display: flex;

    height: 30px;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 30px 0px;
  }

  .btns {
    width: 120px;
    height: 30px;
    line-height: 30px;
    color: rgba(16, 16, 16, 1);
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 20px;
    transition: .3s linear background-color;
  }

  .btns:hover {
    background: #147AB0;
    color: white;
    cursor: pointer;
  }



  .error-box {
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ccc;
  }

  .submit-warp {
    padding-left: 20px;
  }

  .line-title {
    font-weight: bold;
  }

  .list-item-center {
    padding-right: 10px;
  }

  .list-item-right {
    justify-content: center;
  }
</style>
<style>

  .el-picker-panel th, td {
    border: none;
  }

  .dialog-line .el-input__inner {
    width: 220px;
  }
</style>
