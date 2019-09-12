<template>
    <div class="A31 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-31</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>分 包 申 请 报 告 单</h3>
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
        <table border="1" cellspacing="0">
          <tr >
            <td width="564" valign="top" colspan="7" >
              <p class="t-left">分包理由：<input type="text" v-model="obj.m1" class="height-25 input-140"></p>
              <p>&nbsp;</p>
              <p >附件： <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分包人资质、经验、能力（财务能力、生产能力）、信誉、设备、在建工程数量及规模、主要人员经历等资料纳入附件。 </p>
              <br/>
              <div align="right" class="dateDiv">承包人：<input type="text" v-model="obj.m2" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m3" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="276" valign="center" colspan="3" >
              <p >分包单位名称：<input type="text" v-model="obj.m4" class="input-140"></p>
            </td>
            <td width="288" valign="center" colspan="4" >
              <p >分包单位负责人：<input type="text" v-model="obj.m5" class="input-140"></p>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="84" valign="center" ><p align="center" >项目号 </p></td>
            <td width="132" valign="center" ><p align="center" >分包工程名称 </p></td>
            <td width="60" valign="center" ><p align="center" >单位 </p></td>
            <td width="72" valign="center" ><p align="center" >数量 </p></td>
            <td width="60" valign="center" ><p align="center" >单价(元) </p></td>
            <td width="84" valign="center" ><p align="center" >分包金额(元) </p></td>
            <td width="72" valign="center" ><p align="center" >占合同<br/>总金额 <br>
              的比例（%） </p></td>
          </tr>
          <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
            <td width="84" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
            <td width="132" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
            <td width="72" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
            <td width="84" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
            <td width="72" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
          </tr>
          <tr  class="public-tabel">
            <td width="408" valign="center" colspan="5" >
              <p align="center" >合&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计 </p>
            </td>
            <td width="84" valign="top" ><p><input type="text" v-model="obj.m6"></p></td>
            <td width="72" valign="top" ><p><input type="text" v-model="obj.m7"></p></td>
          </tr>
          <tr  class="public-tabel">
            <td width="564" valign="top" colspan="7" >
              <div class="block">
                <span class="demonstration">分包工程开工日期：</span>
                <el-date-picker v-model="obj.m8" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
          <tr  class="public-tabel">
            <td width="564" valign="top" colspan="7" >
              <div class="block">
                <span class="demonstration">分包工程竣工日期：</span>
                <el-date-picker v-model="obj.m9" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
          <tr >
            <td width="564" valign="top" colspan="7" ><p >驻地办驻地监理工程师审查意见：<input type="text" class="height-25" v-model="nameList1[1].fullName" disabled> </p><br/>
              <p align="right">日期：<input type="text" v-model="nameList1[0].auditTime" disabled></p>
            </td>
          </tr>
          <tr>
            <td width="564" valign="top" colspan="7" ><p >总监办总监理工程师审查意见：<input type="text" class="height-25" v-model="nameList2[1].fullName" disabled> </p><br/>
              <p align="right">日期：<input type="text" v-model="nameList2[0].auditTime" disabled></p></td>
          </tr>
          <tr  >
            <td width="564" valign="top" colspan="7" ><p >项目公司代表审批意见：<input type="text" class="height-25" v-model="nameList3[1].fullName" disabled> </p><br/>
              <p align="right">日期：<input type="text" v-model="nameList3[0].auditTime" disabled></p></td>
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
    name: "A-31",
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
        headerInfo:{}, //表头信息
        auditTypeIdArr: [25,21,1],
        nameList:[],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        nameList3: [{}, {}],
        id: '1'

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
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 25) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 21) {
                this.nameList2 = item;
              }
              if (item[1].auditTypeId == 6) {
                this.nameList3 = item;
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
        for(var i=0;i<5;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A31/findA31ById', {
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
        this.axios.post("/HiQuality/A31/saveA31", this.$qs.stringify({
          a31:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A31/updateA31', this.$qs.stringify({
          a31:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A31/deleteA31', {
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

</style>
