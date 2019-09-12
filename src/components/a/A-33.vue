<template>
    <div class="A33 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-33</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>索 赔 审 核 单</h3>
      <div class="text-left width-623">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr class="public-tabel table-tr-height-30">
            <td width="636" colspan="2" >
              <p class="t-left">索赔项目名称：<input type="text" v-model="obj.m1" class="input-140"></p>
            </td>
          </tr>
          <tr >
            <td width="636" valign="center" colspan="2" >
              <p >索赔理由简述：</p>
              <p><textarea name="" cols="30" rows="2" v-model="obj.m2"></textarea></p>
              <div align="right" class="dateDiv">承包人：<input type="text" v-model="obj.m3" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m4" type="date"
                                  placeholder="年  月  日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
          </tr>
          <tr >
            <td width="54" valign="center" rowspan="3" ><p align="center" >监理<br/>工程<br/>师办<br/>公室<br/>意见 </p></td>
            <td width="581" valign="center" >
              <p >工程科审核意见：
                <textarea name="" cols="30" rows="2" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList1[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr1[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr1[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr1[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="581" valign="center" >
              <p >合同科审核意见：
                <textarea name="" cols="30" rows="2" v-model="nameList2[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList2[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr2[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr2[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr2[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="581" valign="center" >
              <p >驻地办驻地监理工程师意见：
                <textarea name="" cols="30" rows="2" v-model="nameList3[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList3[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr3[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr3[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr3[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="54" valign="center" rowspan="2" >
              <p align="center" >总监<br/>办意<br/>见 </p></td>
            <td width="581" valign="center" >
              <p >合同计量工程师意见：
                <textarea name="" cols="30" rows="2" v-model="nameList4[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList4[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr4[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr4[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr4[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="581" valign="center" >
              <p >总监办总监理工程师意见：
                <textarea name="" cols="30" rows="2" v-model="nameList5[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList5[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr5[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr5[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr5[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="54" valign="center" rowspan="3" ><p align="center" >项目<br/>公司<br/>审核<br/>意见 </p></td>
            <td width="581" valign="center" >
              <p >工程质保部审核意见：
                <textarea name="" cols="30" rows="2" v-model="nameList6[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList6[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr6[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr6[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr6[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="581" valign="center" >
              <p >计合部审核意见：
                <textarea name="" cols="30" rows="2" v-model="nameList7[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                审核人：<input type="text" class="height-25 " v-model="nameList7[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr7[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr7[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr7[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="581" valign="center" >
              <p >总经理意见：
                <textarea name="" cols="30" rows="2" v-model="nameList8[0].auditOpinion" disabled></textarea>
              </p>
              <p class="text-center">
                签字：<input type="text" class="height-25 " v-model="nameList8[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr8[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr8[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr8[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
        </table>
      </div>
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

  export default {
    name: "A-33",
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
        headerInfo:{}, //表头信息
        auditTypeIdArr:[26,37,25,23,21,15,10,6],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameList5:[{},{}],
        nameList6:[{},{}],
        nameList7:[{},{}],
        nameList8:[{},{}],
        nameListDataArr1:[],
        nameListDataArr2:[],
        nameListDataArr3:[],
        nameListDataArr4:[],
        nameListDataArr5:[],
        nameListDataArr6:[],
        nameListDataArr7:[],
        nameListDataArr8:[],
        id: '3',

      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if(obj.data!='' && obj.data!=null && obj.data!=undefined){
        this.headerInfo = obj.data;
      }
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
              if(item[1].auditTypeId==26){
                this.nameList1 = item;
                this.nameListDataArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==37){
                this.nameList2 = item;
                this.nameListDataArr2 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if(item[1].auditTypeId==25){
                this.nameList3 = item;
                this.nameListDataArr3 = splitDate(this.nameList3[0].auditTime,'-');
              }
              if(item[1].auditTypeId==23){
                this.nameList4 = item;
                this.nameListDataArr4 = splitDate(this.nameList4[0].auditTime,'-');
              }
              if(item[1].auditTypeId==21){
                this.nameList5 = item;
                this.nameListDataArr5= splitDate(this.nameList5[0].auditTime,'-');
              }
              if(item[1].auditTypeId==15){
                this.nameList6 = item;
                this.nameListDataArr6 = splitDate(this.nameList6[0].auditTime,'-');
              }
              if(item[1].auditTypeId==10){
                this.nameList7 = item;
                this.nameListDataArr7 = splitDate(this.nameList7[0].auditTime,'-');
              }
              if(item[1].auditTypeId==6){
                this.nameList8 = item;
                this.nameListDataArr8 = splitDate(this.nameList8[0].auditTime,'-');
              }

            }
          })
        }
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
        this.axios.get('/HiQuality/A33/findA33ById', {
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
        this.axios.post("/HiQuality/A33/saveA33", this.$qs.stringify({
          a33:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A33/updateA33', this.$qs.stringify({
          a33:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
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
        this.axios.get('/HiQuality/A33/deleteA33', {
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
