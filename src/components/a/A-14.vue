<template>
  <div class="A14 text-center main-a lengthways-a ad-textarea">
    <p class="top-name-p width-663">A-14</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <h4>黔西南州兴义环城高速公路</h4>
    <h3>工程变更申请表</h3>
    <div class="text-left width-663">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-663">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel table-tr-height-30" width="680">
        <tr >
          <td width="82" valign="center" colspan="2"><p>变更等级 </p></td>
          <td width="322" valign="center" colspan="5"><p>重大变更[ ]较大变更 [ ]一般变更[ ] </p></td>
          <td width="96" valign="center" colspan="2"><p align="center">报告日期 </p></td>
          <td width="90" valign="center">
            <div class="block">
              <el-date-picker v-model="obj.m2" type="date" size="mini"
                              value-format="yyyy-MM-dd" class="input-80">
              </el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="82" valign="center" colspan="2"><p>变更设计桩号、内容 </p></td>
          <td width="508" valign="center" colspan="8">
            <p><textarea name="" cols="30" rows="10" v-model="obj.m3"></textarea></p>
          </td>
        </tr>
        <tr>
          <td width="82" valign="center" colspan="2" rowspan="10"><p align="center">变更设计前后工程数量及主要技术指 标 </p></td>
          <td width="141" valign="center" colspan="2"><p align="center">工程项目 </p></td>
          <td width="60" valign="center"><p align="center">单位 </p></td>
          <td width="48" valign="center"><p align="center">单价 </p></td>
          <td width="72" valign="center"><p align="center">原设计<br/>数 量 </p></td>
          <td width="83" valign="center"><p align="center">变更后 <br/>
            数 量 </p>
          </td>
          <td width="102" valign="center" colspan="2"><p align="center">估计变更 <br/>
            费 用 </p>
          </td>
        </tr>
        <tr  v-for="(val,index) in controlArr" :key="index">
          <td width="141" valign="center" colspan="2">
            <p><input type="text" class="td-input" v-model="val.s1"></p>
          </td>
          <td width="60" valign="center">
            <p><input type="text" class="td-input" v-model="val.s2"></p>
          </td>
          <td width="48" valign="center">
            <p><input type="text" class="td-input" v-model="val.s3"></p>
          </td>
          <td width="72" valign="center">
            <p><input type="text" class="td-input" v-model="val.s4"></p>
          </td>
          <td width="83" valign="center">
            <p><input type="text" class="td-input" v-model="val.s5"></p>
          </td>
          <td width="102" valign="center" colspan="2">
            <p><input type="text" class="td-input" v-model="val.s6"></p>
          </td>
        </tr>
        <tr >
          <td width="223" valign="center" colspan="3"><p align="center">变更设计情况（估计费用</p></td>
          <td width="60" valign="center">
            <p><input type="text" v-model="obj.m4"></p>
          </td>
          <td width="307" valign="center" colspan="6">
            <p><input type="text" v-model="obj.m5"></p>
          </td>
        </tr>
        <tr >
          <td width="223" valign="center" colspan="4"><p align="center">征地、拆迁数量/土地性质 </p></td>
          <td width="367" valign="center" colspan="6">
            <p><input type="text" v-model="obj.m6"></p>
          </td>
        </tr>
        <tr>
          <td width="591" valign="center" colspan="10"><p>附件： </p></td>
        </tr>
        <tr>
          <td width="172" valign="center" colspan="3"><p align="center">变更提出单位意见 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="obj.m7"> </p>
          </td>
        </tr>
        <tr>
          <td width="172" valign="center" colspan="3"><p align="center">设计代表意见 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList1[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="54" valign="center" rowspan="3"><p align="center">驻地<br/>办意<br/>见 </p></td>
          <td width="118" valign="center" colspan="2"><p align="center">工程科 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList2[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="118" valign="center" colspan="2"><p align="center">合同科 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList2[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="118" valign="center" colspan="2"><p align="center">高监 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList3[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="54" valign="center" rowspan="2"><p align="center">总监<br/>办意<br/>见 </p></td>
          <td width="118" valign="center" colspan="2"><p align="center">计量工程师 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList4[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="118" valign="center" colspan="2"><p align="center">总监 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList5[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="54" valign="center" rowspan="3"><p align="center">项目<br/>公司<br/>意见 </p></td>
          <td width="118" valign="center" colspan="2"><p align="center">工程质保部 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList6[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="118" valign="center" colspan="2"><p align="center">计合部 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList7[1].fullName" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="118" valign="center" colspan="2"><p align="center">总经理 </p></td>
          <td width="418" valign="bottom" colspan="7">
            <p align="right">签字：<input type="text" class="input-140 height-25" v-model="nameList8[1].fullName" disabled></p>
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
    name: "A-14",
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
        auditTypeIdArr:[63,24,25,23,21,15,10,6],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameList5:[{},{}],
        nameList6:[{},{}],
        nameList7:[{},{}],
        nameList8:[{},{}],
        id: 0

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
              if(item[1].auditTypeId==63){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==24){
                this.nameList2 = item;
              }
              if(item[1].auditTypeId==25){
                this.nameList3 = item;
              }
              if(item[1].auditTypeId==23){
                this.nameList4 = item;
              }
              if(item[1].auditTypeId==21){
                this.nameList5 = item;
              }
              if(item[1].auditTypeId==15){
                this.nameList6 = item;
              }
              if(item[1].auditTypeId==10){
                this.nameList7 = item;
              }
              if(item[1].auditTypeId==6){
                this.nameList8 = item;
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
        for(var i=0;i<9;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A14/findA14ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
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
        this.axios.post("/HiQuality/A14/saveA14", this.$qs.stringify({
          a14:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A14/updateA14', this.$qs.stringify({
          a14:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A14/deleteA14', {
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
