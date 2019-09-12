<template>
  <div class="A47 text-center main-a lengthways-a table-padding5px ad-textarea">
    <p class="top-name-p width-623">A-47</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>监理人员（岗位）变更申请批复单</h3>
    <p class="top-name-p width-623">责查表-03</p>
    <div class="text-left">
      <span>监理单位：<input type="text" v-model="obj.m6" disabled></span>
      <span>合 同 号：<input type="text" v-model="obj.m7" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left">
      <span>业主单位：{{yzName}}</span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0">
        <tr>
          <td width="641" valign="top"><br>
            至独平公司：<input type="text" v-model="obj.m1"> <br>
            由于下述原因，特申请变更，请求批准为谢。变更理由及内容简述：
            <p><textarea name="" cols="30" rows="22" v-model="obj.m2"></textarea></p>
            <p align="right">[ ]驻地办 <input type="text" v-model="nameList1[1].fullName" disabled class="input-80"> [ ]监理单位负责人：<input type="text" v-model="nameList2[1].fullName" disabled class="input-80">
              <input type="text" v-model="nameListDataArr2[0]" disabled class="date-input">年
              <input type="text" v-model="nameListDataArr2[1]" disabled class="date-input">月
              <input type="text" v-model="nameListDataArr2[2]" disabled class="date-input">日
            </p>
          </td>
        </tr>
        <tr>
          <td width="641" valign="top">
            <p style="padding: 10px 0;">总监办批复意见： </p><br>
            <div style="margin-left: 20px;">
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList3[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意变更
                </p><br>
                <p>
                  [ ] 同意其中一部分，其余不同意变更，具体意见如下：
                </p><br>
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList3[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意变更，具体意见如下：
                </p><br>
            </div><br><br>
            <p align="right" style="margin-right: 50px;"> 签字：<input type="text" v-model="nameList3[1].fullName" disabled class="input-120">
              <input type="text" v-model="nameListDataArr3[0]" disabled class="date-input">年
              <input type="text" v-model="nameListDataArr3[1]" disabled class="date-input">月
              <input type="text" v-model="nameListDataArr3[2]" disabled class="date-input">日
            </p><br><br><br>
          </td>
        </tr>
        <tr>
          <td width="641" valign="top">
            <p style="padding: 10px 0;">项目公司批复意见： </p><br>
            <div style="margin-left: 20px;">
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList4[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意变更
                </p><br>
              <p>
                  [ ] 同意其中一部分，其余不同意变更，具体意见如下：
                </p><br>
              <p>
                  <input type="text" value="[√]" disabled v-if="nameList4[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意变更，具体意见如下：
                </p><br>
            </div><br><br><br>
            <p align="right" style="margin-right: 50px;"> 项目公司：<input type="text" v-model="nameList4[1].fullName" disabled class="input-120">
              <input type="text" v-model="nameListDataArr4[0]" disabled class="date-input">年
              <input type="text" v-model="nameListDataArr4[1]" disabled class="date-input">月
              <input type="text" v-model="nameListDataArr4[2]" disabled class="date-input">日
            </p>
          </td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-623">注：更换专业工程师，可由驻地办驻地监理工程师申请；更换驻地办驻地监理工程师应由监理单位负责人申请。正件至少一式二份，加盖单位公章。 </p>
    <div class="btn">
      <div class="add-btn sub-btn"
           :class="isAdd ? '' : 'disabled-btn' " @click="addData">
        添加
      </div>
      <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' "
           @click="getData">
        刷新
      </div>
      <div class="update-btn sub-btn"
           :class="!isAdd ? '' : 'disabled-btn' "
           @click="updateData">修改
      </div>
      <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
    </div>
  </div>
</template>

<script>
  import {splitDate,joinDate} from '../../utils/utils'
  export default {
    name: "A-47",
    data() {
      return {
        isAdd: true,
        //rec
        rec:{
          recNo:'',
          tableId:4,
          contractId:0,
          constDate:'',
          testDate:'',
          projPartsId:'1',
          curStatus:0,
          operUserId:1
        },
        //主表
        obj: {},
        yzName:'贵州兴义环城高速公路有限公司',//业主单位
        supervisorTableInfo:{}, //监理用表表头信息
        auditTypeIdArr:[25,26,21,1],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameListDataArr2:[],
        nameListDataArr3:[],
        nameListDataArr4:[],
        id: '3',

      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取监理用表表头信息
      this.$publicFun.getSupervisorTableInfo()
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      this.$publicFun.getRecInfo()
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
      },
      getTableInfoList: function () {
        return this.$store.state.supervisorTableInfo
      },
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch: {
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==25){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==26){
                this.nameList1 = item;
                this.nameListDataArr2 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==21){
                this.nameList2 = item;
                this.nameListDataArr3 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if(item[1].auditTypeId==10){
                this.nameList2 = item;
                this.nameListDataArr4 = splitDate(this.nameList2[0].auditTime,'-');
              }
            }
          })
        }
      },
      //获取监理用表表头信息数据
      getTableInfoList: function () {
        this.supervisorTableInfo = this.$store.state.supervisorTableInfo;
        //获取监理单位信息赋值给主表对象
        this.obj.m6 = this.supervisorTableInfo.unitName2;
      },
      //获取rec信息数据
      getRecObj: function () {
        this.rec = this.$store.state.recInfo;
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/A47/findA47ById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId:this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A47/saveA47", this.$qs.stringify({
          a47:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
      },

      //修改
      updateData() {
        this.axios.post('/HiQuality/A47/updateA47', this.$qs.stringify({
          a47:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/A47/deleteA47', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.obj = {};
          }
        })
      }

    }
  }


</script>

<style scoped>

</style>
