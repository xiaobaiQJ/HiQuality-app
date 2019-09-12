/**
* @author bai tao
* @date 2019/7/27 0028
* @Description:办理事项
*/
<template>
  <div class="con">
    <main>
      <div class="container-warp">
        <div class="left-nav">
          <div class="aside">
            <div class="aside-menu scroll-bar">
              <div class="menu-list" :style="{height:$store.state.deviceStyle -120 +'px'}">
                <div class="menu-list-item"
                     @click="getTableData(item.id,index)"
                     :class="currentIndex==index ? 'active-color' : '' "
                     v-for="(item,index) in navBox" :key="index">
                  <div class="item-left">
                    <div class="item-left-icon"><i class="iconfont">&#xe612</i></div>
                    <div class="item-left-name">{{item.typeCode}} {{item.typeName}}</div>
                  </div>
                  <div class="item-right">
                    <div class="item-left-icon">
                      <span class="pie-label">
                          {{item.count}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="right-box">
          <div class="tab-box">
            <div class="tab-item"
                 v-for="(item,index) in tabList"
                 @click="tabItem(index,item.type)"
                 :class="tabIndex == index ? 'tab-item-active' : '' ">
              {{item.lable}}
            </div>
          </div>
          <div class="list-warp">
            <div class="list scroll-bar" :style="{height : ($store.state.deviceStyle-180) +'px'}">
              <div class="line-box">
                <div class="number">序号</div>
                <!--   <div class="number">合同号</div>-->
                <div class="table-coding">记录编号</div>
                <div class="coding">表格编码</div>
                <div class="width-200">业务表名称</div>
                <div class="line-item">工程部位</div>
                <div class="table-coding">记录时间</div>
                <div class="table-coding">提交时间</div>
                <div class="number">操作</div>
              </div>
              <div v-if="tableList.length>0">
                <div>
                  <div class="line-box line-hover" v-for="(item,index) in tableList" :key="index"
                       @click="goBusinessTable(item,3)">
                    <div class="number">{{index+1}}</div>
                    <!--<div class="number">{{index+1}}</div>-->
                    <div class="table-coding">{{item.recNo}}</div>
                    <div class="coding">{{item.tableNo}}</div>
                    <div class="width-200">{{item.tableName}}</div>
                    <div class="line-item">{{item.projPartsName}}</div>
                    <div class="table-coding">{{item.testDate}}</div>
                    <div class="table-coding">{{item.auditTime}}</div>
                    <div class="number" v-if="$store.state.userLevel<4"> <!--v-if="$store.state.userLevel<4"-->
                      <div style="display: inline-block;width: 40px">

                        <i class="iconfont"
                           :class="item.auditStatus==2 ? 'active-icon' : '' "
                           @click.stop="showConfirmAudit(item.tableId,item.recId,item.auditStatus)">
                          &#xeb33;
                        </i>

                      </div>
                    </div>
                    <div class="number" v-if="$store.state.userLevel==5"> <!--v-if="$store.state.userLevel<4"-->
                      <div style="display: inline-block;width: 40px">

                        <i class="iconfont"
                           :class="item.auditStatus==2 ? 'active-icon' : '' "
                           @click.stop="showConfirmAudit(item.tableId,item.recId,item.auditStatus)">
                          &#xe618;
                        </i>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div v-else class="error-box">
                暂无数据
              </div>
              <!--
                            <div v-else>
                              <div class="line-box line-hover" v-for="(item,index) in tableList" :key="index"
                                  v-if="item.auditStatus==state"
                                   @click="goBusinessTable(item)">
                                <div class="number">{{index+1}}</div>
                                <div class="table-coding">{{item.recNo}}</div>
                                <div class="coding">{{item.tableNo}}</div>
                                <div class="width-200">{{item.tableName}}</div>
                                <div class="line-item">{{item.projPartsName}}</div>
                                <div class="table-coding">{{item.testDate}}</div>
                                <div class="table-coding">{{item.auditTime}}</div>
                                <div class="number">
                                  <div style="display: inline-block;width: 40px">
                                    <i class="iconfont" v-if="item.auditStatus!=2" @click.stop="showConfirmAudit(item.tableId,item.recId)">&#xeb33;</i>
                                  </div>
                                </div>
                              </div>
                            </div>-->
            </div>
            <div class="block">
              <el-pagination
                :page-sizes="[10,20,30]"
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

                @change="changeTime"
                placeholder="选择日期"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>

            </div>
            <!-- <br>-->
            <div class="submit-warp" v-if="flowType!=2 && flowType != 4">
              <textarea placeholder="此工程部位的施工资料及现场施工质量，均满足质量要求，同意。" v-model="auditOpinion"></textarea>
            </div>
            <div class="checkbox-warp dialog-line" v-if="flowType==1 || flowType==3">
              <span>审核操作</span>
              <van-radio name="1" v-model="radio" checked-color="#07c160">通过</van-radio>
              <span class="split"></span>
              <van-radio name="2" v-model="radio" checked-color="#E52F2A">不通过</van-radio>
            </div>
          </div>

          <div class="dialog-title" v-show="flowType!=4"><strong>提交</strong></div>
          <div class="dialog-content">
            <div class="dialog-line" v-show="flowType!=4">
              <span>提交日期：</span>

              <el-date-picker
                v-model="auditTime1"
                type="datetime"
                @change="changeTime"
                size="mini"
                placeholder="选择日期"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>

            </div>
            <div class="dialog-line" v-if="flowType==1 || flowType==2">
              <span>下一级审核人：</span>
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
              <div class="btns" @click="submitTable">取消</div>
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
  import {Radio, RadioGroup} from 'vant';

  export default {
    name: "Mission",
    components: {
      [Radio.name]: Radio,
      [RadioGroup.name]: RadioGroup,
      [Checkbox.name]: Checkbox
    },
    created() {
      this.stdProjectId = this.$route.query.id;

    },
    mounted() {
      this.init();
      /*this.tableList.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize);*/
    },
    watch: {
      tableTypeId: function (id) {
        this.getData();
      },
      /**
       * 去除用户重复添加的数据
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      controlList: function () {
        const res = new Map();
        this.tableList = this.controlList.filter((arr) => !res.has(arr.tableNo) && res.set(arr.tableNo, 1))
      }
    },
    data() {
      return {
        radio: "",
        //切换集合
        tabList: [
          {
            lable: "全部",
            type: undefined
          },
          {
            lable: "待办理",
            type: 0
          },
          {
            lable: "已办理",
            type: 1
          }
        ],
        total: 0,
        submitTime: "",
        state: 0,
        tabIndex: 1,//当前切换下标
        tableList: [],
        value: "",
        checked: true,
        currentPage: 1, //当前页码数
        pagesize: 10, //每页显示条数
        navBox: [],//
        stdProjectId: '',//单位工程id
        currentIndex: 9999,
        auditList: [],//
        auditUserId: '',
        auditOpinion: "",//审核意见
        auditTime1: "",//审核的日期
        audit: false,//是否显示审核
        downList: [],//顶部业务下拉菜单
        businessList: [],//业务数据
        businessControlList: [],//业务选中控制
        tableTypeId: undefined,//当前选中业务表id
        currentUrl: "",//当前路径
        flowType: 0,//次序
        controlList: []//控制集合
      }
    },
    methods: {
      init() {
        this.getDownMenu();
        this.getUnAuditByType();
        this.getData();
      },
      tabItem(index, obj) {
        this.tabIndex = index;
        this.state = obj;
        this.getData();
      },
      /**
       * 点击左侧列表切换当前业务表类型下的数据
       * @method getTableData
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getByTypeTableData() {
        this.axios.get("/HiQuality/rec/getAuditByUserId", {
          params: {
            typeId: this.tableTypeId,
            state: this.state
          }
        }).then((res) => {
          console.log("点击左侧列表切换当前业务表类型下的数据");
          console.log(res);
          this.tableList = res.data.data;
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
      //提交表格
      submitTable() {
        this.audit = false;
      },
      getTableData(type, index) {
        console.log(type + "-----")
        this.tableTypeId = type;
        this.currentIndex = index;
      },
      changeTime(date) {
      },

      //获取所有业务表记录
      getData() {
        this.axios.get("/HiQuality/rec/getAuditByUserId", {
          params: {
            state: this.state,
            typeId: this.tableTypeId,
            pageSize: this.pagesize,
            pageNum: this.currentPage
          }
        }).then((res) => {
          console.log("获取所有数据")
          console.log(res)
          if (res.data.status == 200) {
            if (res.data.data == null) {
              this.tableList = [];
              this.total = 0;
              /*this.tabIndex = 0;*/
            } else {
              this.tableList = res.data.data;
              /*   this.tabIndex = 1*/


            }
          }
        })
      },

      /**
       * 根据表格分类获取代办任务数量列表
       * @method getUnAuditByType
       * @param {无} 无 参数说明
       * @return {返回值类型} {
       */
      getUnAuditByType() {
        this.axios.get("/HiQuality/rec/getUnAuditByType").then((res) => {
          console.log("根据表格分类获取代办任务数量列表");
          console.log(res)
          this.navBox = res.data.data;
        })
      },
      showConfirmAudit(id, recId, isok) {
        console.log(isok + '=--------')
        if (isok == 2) {
          return false
        }
        this.recId = recId;
        this.auditTime1 = getCurrentDate();
        this.submitTime = getCurrentDate();
        this.tableId = id;
        this.axios.get('/HiQuality/auditorType/auditorList', {
          params: {
            tableId: id,
            recId: this.recId
          }
        }).then((res) => {
          console.log("查询审核人和次序")
          console.log(res)

          if (res.data.status == 200) {
            this.auditList = res.data.data.auditorList;
            this.flowType = res.data.data.flowType;

            this.audit = !this.audit;
          } else {
            this.auditList = [];
          }
        })
      },
      size_change(size_change) {
        this.pagesize = size_change;
        this.getData();
      },
      //改变当前页 并改变当前展示数据
      current_change(currentPage) {
        this.currentPage = currentPage;
        this.getData();
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

      /**
       * 点击表格进入到对应业务表
       * @method goBusinessTable
       * @param {obj} 记录对象
       * @return {返回值类型} 返回值说明
       */
      goBusinessTable(obj) {
        console.log("aaa")
        console.log("点击表格进入到对应业务表")
        this.$store.commit("setProjPartsId", obj.projPartsId)
        this.$store.commit("setTableId", obj.tableId);
        this.$publicFun.getAuditorTypeIds(true).then((res)=>{
          this.$store.commit("setModuleType", 3);
          this.$store.commit("setRecId", obj.recId)
          this.$store.commit("setCurrentType", 4)
          this.setContractId(obj)
        })


      },

      /**
       * 修改全局contractId
       * @method setContractId
       * @param {int} contractId 合同段id
       * @return {返回值类型} 无
       */
      setContractId(obj) {
        this.axios.get("/HiQuality/rec/updateContractId", {
          params: {
            contractId: obj.contractId
          }
        }).then((res) => {
          console.log("修改全局contractId");
          console.log(res)
          if (res.data.status == 200) {
            this.getUnitInfo(obj)


          }

        })
      },
      /**
       * 获取表头信息
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getUnitInfo(obj) {
        this.axios.get("/HiQuality/tbInfo/getUnitInfo").then((res) => {
          console.log("获取表头信息")
          console.log(res);
          if (res.data.status == 200) {
            this.$store.commit('setUnitTable', res.data);

            this.$publicFun.getAuditorTypeIds();
            this.$router.push({
              path: obj.tableUrl,
              query: {
                id: '',
                title: obj.tableName
              }
            })
          } else {
            this.$store.commit('setUnitTable', {});
          }
        })
      },
      /**
       * 点击左侧业务表查询数据
       * @method tabBusiness
       * @param {obj}
       * @return {返回值类型} 返回值说明
       */
      tabBusiness(obj, index) {
        this.currentIndex = index;
        this.currentUrl = obj.tableUrl;
      },
      goEdit() {
        this.$router.push({
          path: "/process_manage/conf",
          query: {
            id: 1
          }
        })
      },
      goAdd() {

      },
      /**
       * 方法描述
       * pageNum 当前页
       *  pageSize  每页条数
       *  返回 total 是总记录数
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      findByTableTypeId(id) {
        this.currentIndex = 9999;
        this.axios.get('/HiQuality/table/findByTableTypeId', {
          params: {
            tableTypeId: this.tableTypeId
          }
        }).then((res) => {
          this.businessList = res.data.data;
        })
      },
      //获取下拉菜单信息
      getDownMenu() {
        this.axios.get('/HiQuality/tableType/findAll').then((res) => {
          this.downList = res.data.data;
          /*this.tableTypeId = this.downList[0].id;*/
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

  .container-warp {
    display: flex;
  }


  .right-box {
    flex: 1;
  }

  .nav {
    height: 30px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    box-sizing: border-box;
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
  }


  .block {
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .aside {
    width: 220px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
    text-align: left;
  }


  .menu-list {
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #ccc;
    padding: 0px 0px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
  }

  .item-left, .item-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-left-icon {
    width: 50px;
    text-align: center;
  }

  .item-right {
    justify-content: flex-end;
  }

  .item-left-name {
    flex: 1;

  }

  .icons:hover {
    cursor: pointer;
    color: #ff9200;
  }

  .menu-list-item:hover {
    color: #ff9200;
    cursor: pointer;
  }

  .active-color {
    color: #ff9200;
  }

  .pie-label {
    display: inline-block;
    width: 26px;
    height: 26px;
    line-height: 24px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #cccccc;
  }

  .number {
    width: 50px !important;
    text-align: center;
  }

  .coding {
    width: 100px;
    text-align: center;
  }

  .table-coding {
    width: 120px;
    text-align: center;
  }


  .width-200 {
    width: 200px;
    text-align: center;
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

  .checkbox-warp {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .van-radio-group {
    flex: 1;
    width: 100%;
  }

  .split {

  }


  .dialog-box {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 400px;
    line-height: 40px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
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
    width: 90px;
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

  .tab-box {
    padding-left: 20px;
    margin-bottom: 10px;
  }

  .tab-item {
    display: inline-block;
    width: 60px;
    line-height: 28px;
    height: 28px;
    text-align: center;
  }

  .tab-item:hover {
    cursor: pointer;
    /*   background: #146d8e;*/
  }

  .tab-item-active {
    background: #146d8e;
    color: white;
  }


  .submit-warp {
    padding-left: 20px;
  }

  .active-icon {
    color: #00fe00;
  }


</style>
