<template>
  <div class="A21 text-center main-a lengthways-a">
    <p class="top-name-p width-623">A-21</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>工 程 交 工 证 书</h3>
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
      <table border="1" cellspacing="0" class="public-tabel table-tr-height-30">
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">本证书包括的工程：<textarea name="" cols="30" rows="2" v-model="obj.m1"></textarea></p>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">本证书未包括的工程：<textarea name="" cols="30" rows="2" v-model="obj.m2"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="584" valign="center" colspan="4"><p align="center">检 查 人 </p></td>
        </tr>
        <tr >
          <td width="167" valign="center"><p align="center">姓名 </p></td>
          <td width="169" valign="center"><p align="center">单位 </p></td>
          <td width="167" valign="center"><p align="center">职务及职称 </p></td>
          <td width="124" valign="center"><p align="center">备注 </p></td>
        </tr>
        <tr  v-for="(val,index) in controlArr" :key="index">
          <td width="167" valign="center">
            <p><input type="text" v-model="val.s1"></p>
          </td>
          <td width="169" valign="center">
            <p><input type="text" v-model="val.s2"></p>
          </td>
          <td width="167" valign="center">
            <p><input type="text" v-model="val.s3"></p>
          </td>
          <td width="124" valign="center">
            <p><input type="text" v-model="val.s4"></p>
          </td>
        </tr>
        <tr >
          <td width="167" valign="center"><p align="center">合同交接日期 </p></td>
          <td width="169" valign="center">
            <div class="block">
              <el-date-picker
                              size="mini"
                              v-model="obj.m3"
                              type="date"
                              placeholder="年  月  日"
                              format="yyyy年MM月dd日"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
          <td width="167" valign="center"><p align="center">实际交接日期 </p></td>
          <td width="124" valign="center">
            <div class="block">
              <el-date-picker
                size="mini"
                v-model="obj.m4"
                type="date"
                placeholder="年  月  日"
                format="yyyy年MM月dd日"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584" valign="center" colspan="4" >
            <p class="t-left">我们保证在缺陷责任期内按经批准的计划，完成本证书附件所列全部工作。 </p><br/>
            <div class="dateDiv">承包人：<input type="text" v-model="obj.m5" class="input-200">
              <div class="block display-lnl height-25 input-160">
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m6" type="date"
                                placeholder="年  月  日"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">驻地办驻地监理工程师意见：
              <textarea name="" cols="30" rows="2" v-model="nameList1[0].auditOpinion" disabled></textarea>
          </p>
            <p>&nbsp;</p>
            <p style="margin-left: 25%;">签字：<input type="text" class="input-120" v-model="nameList1[1].fullName" disabled>
              <input type="text" class="date-input" v-model="listDateArr1[0]" disabled>年
              <input type="text"  class="date-input" v-model="listDateArr1[1]" disabled>月
              <input type="text" class="date-input" v-model="listDateArr1[2]" disabled>日
            </p>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">设计单位代表意见：
              <textarea name="" cols="30" rows="2" v-model="nameList2[0].auditOpinion" disabled></textarea>
            </p>
            <p>&nbsp;</p>
            <p style="margin-left: 25%;">签字：<input type="text" class="input-120" v-model="nameList2[1].fullName" disabled>
              <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>年
              <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>月
              <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>日
            </p>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">总监办意见：
              <textarea name="" cols="30" rows="2" v-model="nameList3[0].auditOpinion" disabled></textarea>
            </p>
            <p align="right">签字：<input type="text" class="input-120" v-model="nameList3[1].fullName" disabled>
              <input type="text" class="date-input" v-model="listDateArr3[0]" disabled>年
              <input type="text" class="date-input" v-model="listDateArr3[0]" disabled>月
              <input type="text" class="date-input" v-model="listDateArr3[0]" disabled>日
            </p>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">项目公司意见：
              <textarea name="" cols="30" rows="2" v-model="nameList4[0].auditOpinion" disabled></textarea>
            </p>
            <p>&nbsp;</p>
            <p style="margin-left: 25%;">签字：<input type="text" class="input-120" v-model="nameList4[1].fullName" disabled>
              <input type="text" class="date-input" v-model="listDateArr4[0]" disabled>年
              <input type="text" class="date-input" v-model="listDateArr4[0]" disabled>月
              <input type="text" class="date-input" v-model="listDateArr4[0]" disabled>日
            </p>
          </td>
        </tr>
        <tr class="table-padding5px">
          <td width="584"  colspan="4">
            <p class="t-left">质量监督单位意见：<textarea name="" cols="30" rows="2" v-model="nameList5[0].auditOpinion" disabled></textarea></p>
            <p>&nbsp;</p>
            <p style="margin-left: 25%;">签字：<input type="text" class="input-120" v-model="nameList5[1].fullName" disabled>
              <input type="text" class="date-input" v-model="listDateArr5[0]" disabled>年
              <input type="text" class="date-input" v-model="listDateArr5[0]" disabled>月
              <input type="text" class="date-input" v-model="listDateArr5[0]" disabled>日
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
  import {splitDate,joinDate} from '../../utils/utils'
  export default {
    name: "A-21",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {
          subList: []
        },
        controlArr:[],
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
        id: '1',
        headerInfo:{}, //表头信息
        auditTypeIdArr:[25,63,21,13,64],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameList5:[{},{}],
        listDateArr1:[],
        listDateArr2:[],
        listDateArr3:[],
        listDateArr4:[],
        listDateArr5:[],

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
          this.nameList.forEach((item)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==25){
                this.nameList1 = item;
                this.listDateArr1 = splitDate(this.nameList1[0].auditTime,'-')
              }
              if(item[1].auditTypeId==63){
                this.nameList2 = item;
                this.listDateArr2 = splitDate(this.nameList2[0].auditTime,'-')
              }
              if(item[1].auditTypeId==21){
                this.nameList3 = item;
                this.listDateArr3 = splitDate(this.nameList3[0].auditTime,'-')
              }
              if(item[1].auditTypeId==13){
                this.nameList4 = item;
                this.listDateArr4 = splitDate(this.nameList4[0].auditTime,'-')
              }
              if(item[1].auditTypeId==64){
                this.nameList5 = item;
                this.listDateArr5 = splitDate(this.nameList5[0].auditTime,'-')
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
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i=0;i<6;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A21/findA21ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = false;
            this.obj = res.data.data;
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length >0){
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/A21/saveA21", this.$qs.stringify({
          a21:JSON.stringify(this.obj),
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/A21/updateA21',this.$qs.stringify({
          a21:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A21/deleteA21', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr = [];
            this.obj = {subList:[]}
            this.setSubObj();
          }
        })
      }

    }
  }
</script>

<style scoped>
  .date-width {
    width: 25px;
  }
</style>
