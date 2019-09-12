/**
* @author bai tao
* @date 2019/6/15 0015
* @Description:工序列表
*/
<template>
  <div class="container">
    <header>
      <nav>
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">工序控制</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </nav>
      <nav>
        <div class="text-left">
          <strong>工程部位：</strong>{{title}}
        </div>
      </nav>
    </header>
    <main>
      <div class="list container">
        <div class="list-item" v-for="(item,index) in processList" :key="index" @click="getUnitInfo(item)">
          <div class="list-item-left">
            {{item.tableNo}}
          </div>
          <div class="list-item-center">
            {{item.tableName}}
          </div>
          <!--附件-->
          <!--v-if="item.attachmentNeed==1 &&"-->
          <div class="list-item-icon"
               v-if="$store.state.userLevel==5 && item.attachmentNeed!=0 | item.attachmentOnly!=0">
            <div @click.stop="goAuditProcess(item)">
              <i class="iconfont">&#xe61e;</i>
            </div>
          </div>
          <div class="list-item-icon"
               v-if="$store.state.userLevel<4 && item.attachmentNeed!=0 && item.attachmentOnly!=0">
            <div @click.stop="goAuditProcess(item)">
              <i class="iconfont">&#xe61e;</i>
            </div>
          </div>
          <!--       <div class="list-item-icon">
            <div @click="processList.splice(index,1)"><i class="iconfont">&#xe6b0;</i></div>
          </div>-->
          <!--新增-->
          <div class="list-item-icon" v-if="checkdata(item.attachmentNeed==0,item.attachmentOnly==1) && item.attachmentNeed!=1 | item.attachmentOnly!=1 && item.recId ===''
            && $store.state.userLevel==5" @click.stop="goModule(item,1)">
            <div><i class="iconfont">&#xe623;</i></div>
          </div>
          <!--编辑-->
          <div class="list-item-icon"
               v-if="item.recId!='' &&  $store.state.userLevel==5 &&
               item.aduitStatus.toString()==''
               && item.attachmentNeed!=1 | item.attachmentOnly!=1"
               @click.stop="goModule(item,2)">
            <div><i class="iconfont">&#xe707;</i></div>
          </div>

          <!--查看-->
          <div class="list-item-icon" v-if="item.recId!=''  &&  $store.state.userLevel==5"
               @click.stop="goModule(item,4)">
            <div><i class="iconfont">&#xe607;</i></div>
          </div>
          <!--查看-->
          <div class="list-item-icon" v-if="$store.state.userLevel<5"
               @click.stop="goModule(item,3)">
            <div><i class="iconfont">&#xe607;</i></div>
          </div>
          <!--提交-->
          <div class="list-item-icon"
               v-if="$store.state.userLevel==5 && item.attachmentNeed!=1 | item.attachmentOnly!=1">
            <div v-if="item.recId!='' && item.aduitStatus===''" @click.stop="showConfirm(item.tableId,item.recId,item)">
              <i class="iconfont" :class="item.aduitStatus===0 ? 'active-icon' : '' ">&#xe60d;</i>
            </div>
            <div v-else @click.stop="hintMessage(item)">
              <i class="iconfont"  :class="item.aduitStatus===0 ? 'active-icon' : '' ">&#xe60d;</i>
            </div>

          </div>


          <!--<div class="list-item-icon" >
            <div v-if="item.recId!=''"  @click.stop="showConfirmAudit(item.tableId,item.recId)">
              <i class="iconfont">&#xeb33;</i>
            </div>
            <div v-else @click.stop="hintMessage">
              <i class="iconfont" >&#xeb33;</i>
            </div>
          </div>-->
        </div>
      </div>
    </main>
    <!--提交-->
    <article>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <div v-show="submit" class="dialog-box">
          <div class="dialog-title">提交</div>
          <div class="dialog-content ">
            <div class="dialog-line">
              <span>提交日期：</span>
              <el-date-picker
                v-model="auditTime"
                type="datetime"
                size="mini"
                @change="changeTime"
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
            <div class="btns" @click="submitTable">取消</div>
            <div class="btns" @click="onTableSubmit">确定</div>
          </div>

        </div>
      </transition>

    </article>
    <!--审核-->
    <article>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight"
      >
        <div class="audit-box" v-if="audit">
          <div class="dialog-title"><strong>审核</strong></div>

          <div class="dialog-content ">
            <div class="dialog-line">
              <span>审核日期：</span>

              <el-date-picker
                v-model="auditTime1"
                size="mini"
                type="datetime"
                @change="changeTime"
                placeholder="选择日期"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
              >
              </el-date-picker>

            </div>
            <div class="submit-warp">
              <textarea placeholder="此工程部位的施工资料及现场施工质量，均满足质量要求，同意。" v-model="auditOpinion"></textarea>
            </div>
          </div>

          <div class="dialog-title"><strong>提交</strong></div>
          <div class="dialog-content">
            <div class="dialog-line">
              <span>提交日期：</span>

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
            <div class="dialog-line">
              <span>审核人：</span>
              <el-select
                v-model="value"
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
    <article>
      <div class="layer-box" v-show="audit | submit"></div>
    </article>
  </div>
</template>

<script>


  import {Radio, RadioGroup} from 'vant';
  import {getCurrentDate} from "../../../utils/utils";

  export default {
    name: "ProcessIndex",
    components: {
      [Radio.name]: Radio,
      [RadioGroup.name]: RadioGroup
    },
    data() {
      return {
        tableId: "",//
        radio: '1',
        checked: false,
        title: '',
        options: [],
        auditList: [],//
        auditUserId: '',
        auditOpinion: "",//审核意见
        auditTime1: "",//审核的日期
        submitTime: "",//提交日期
        flowType: 0,//次序
        audit: false,//是否显示审核
        value: '',
        recId: "",//业务记录id
        auditTime: "",//提交的默认日期
        porjDivId: '',//标准工程id
        submit: false,//是否显示提交页面
        timer: '',
        processList: []//工序列表集合
      }
    },
    created() {
      this.porjDivId = this.$store.state.projPartsId;
    },
    mounted() {
      this.getByPorjDivId();
    },
    methods: {

      checkdata(params1, params2) {
        console.log(params1, params2)
        if (params1 == true & params2 == true) {
          return false
        }
        return true
      },
      /**
       * 如果没有resId就提示用户
       * @method hintMessage
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      hintMessage(item) {
        if(item.aduitStatus===0){
          return
        }
        this.$message({
          message: '该工序暂无记录，无法进行提交操作!',
          type: 'warning'
        });
      },
      //提交审核
      onAuditSubmit() {
        this.axios.get('/HiQuality/audit/passAudit', {
          params: {
            recId: this.recId,
            tableId: this.tableId,
            auditTime: this.auditTime1,
            auditUserId: this.value,
            auditOpinion: this.auditOpinion
          }
        }).then((res) => {
          console.log("提交审核")
          console.log(res)
          this.audit = !this.audit;
          this.auditList = res.data.data
        })
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
          this.$tost.print("提交成功");
          this.getByPorjDivId();
          this.submit = !this.submit;
        })
      },
      //前往附件审核
      goAuditProcess(obj) {
        this.$router.push({
          path: "/procedure_control/accessory",
          query: {
            id: this.$route.query.id,
            tableId: obj.tableId,
            unitName: this.title
          }
        })
      },
      /**
       * 前往业务模块页 修改tableId和recId
       *
       * @method goModule
       * @param {obj} 当前点击对象
       * @return {返回值类型} 返回值说明
       */
      goModule(obj, type) {

        let url = obj.tableUrl;
        this.axios.get("/HiQuality/rec/updateContractId", {
          params: {
            contractId: obj.contract
          }
        }).then((res) => {
          console.log("修改全局contractId");
          console.log(res)
        })
        this.$store.commit("setTableId", obj.tableId);
        this.$store.commit("setRecId", obj.recId);
        this.$store.commit("setModuleType", 1);
        this.$store.commit("setCurrentType", type);
        this.$publicFun.getAuditorTypeIds(true);
        if (this.$store.state.userLevel < 5) {
          this.$store.commit("setCurrentType", 4);
        }
        this.getUnitInfo(obj)
        this.axios.get("/HiQuality/tbInfo/tbk01", {
          params: {
            id: this.$store.state.projPartsId
          }
        }).then((res) => {
          console.log("获取k01")
          console.log(res)
          this.$store.commit('setK01', res.data.data)
          this.$router.push({
            path: url,
            query: {
              id: '',
              title: obj.tableName
            }
          })

        })


        /*  switch (type) {
            case 1:
              console.log("进入新增页");
              break;
            case 2:
              console.log("进入编辑");
              break;
            case 3:
              console.log("进入查看");
              break;
          }*/
        /*

         if (obj.aduitStatus == 2 || obj.aduitStatus == 0) {
           this.$store.commit("setAduitStatus", obj.aduitStatus);
         }
         console.log(url)
        */
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
            /*this.$router.push({
              path: obj.tableUrl,
              query: {
                id: '',
                title: obj.tableName
              }
            })*/
          } else {
            this.$store.commit('setUnitTable', {});
          }
        })
      },
      //提交表格
      submitTable() {
        this.submit = false;
        this.audit = false;
      },
      //显示审核
      showAudit(id) {
        this.audit = !this.audit;
        this.tableId = id;
        /*  this.axios.get('/HiQuality/audit/passAudit', {
            params: {
              tableId: id,
              recId:1,
              auditUserId
            }
          }).then((res) => {
            console.log("查询审核人和次序")
            console.log(res)
            this.auditList = res.data.data
          })*/
      },
      //选择开始时间，清空结束时间
      changeTime(date) {
        /*this.timer = "";*/
      },
      showConfirmAudit(id, recId) {


        this.recId = recId;
        this.auditTime1 = getCurrentDate();
        this.submitTime = getCurrentDate();
        this.audit = !this.audit;
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
      },
      //显示提交
      showConfirm(id, recId, obj) {
        if (obj.aduitStatus.toString() == '') {
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
      //根据标准工程获取工序列表
      getByPorjDivId() {
        this.axios.get('/HiQuality/stdProc/getByPorjDivId', {
          params: {
            porjDivId: this.porjDivId
          }
        }).then((res) => {
          console.log("根据标准工程id获取工序列表")
          console.log(res)
          this.processList = res.data.data;
          this.title = res.data.unitName;
        })
      }
    },

  }
</script>

<style scoped>
  .container {
    width: 90%;
    margin: 0 auto;
  }

  nav {
    margin: 10px 0px 20px 0px;
  }

  .list {
    border: none;
    border-top: 1px solid #cccccc;
    margin-bottom: 20px;

  }

  .list-item {
    border: 1px solid #cccccc;
    height: 50px;
    line-height: 50px;
    border-bottom: none;
    display: flex;
    padding-right: 10px;

  }

  .list-item:hover div {
    color: #1d9ece !important;
    cursor: pointer;
  }

  .list-item:first-child {
    border-top: none;
  }

  .list-item:last-child {
    border-bottom: 1px solid #ccc;
  }

  .list-item-left {
    font-weight: bold;
    color: #4e4e4e;
    text-align: center;
    width: 100px;

  }

  .list-item-center {
    text-align: left;
    flex: 1;
  }

  .list-item-icon {
    width: 40px;
    text-align: center;
  }

  /* .list-item-right > div {
     display: inline-block;
     width: 40px;
     text-align: center;
   }
 */
  .list-item-right > div:hover i {
    color: #ee5f08;
  }

  /*  .list-item-right i:hover {
      color: #ee5f08;
    }*/

  .el-menu {
    overflow: auto;
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
    border-bottom: 1px solid #cccccc;
  }

  .dialog-content {
    padding: 0px 20px;
    line-height: 50px;
  }

  .dialog-line span {
    display: inline-block;
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

  .list-item-icon i {
    color: #147AB0;
  }

  .list-item-icon:hover i {
    color: #ee5f08;
  }


  .active-icon {
    color: #cccccc !important;
  }

  .active-icon:hover {
    cursor: default;
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
