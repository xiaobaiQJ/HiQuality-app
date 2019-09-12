<template>
  <div class="AKG-01 text-center lengthways-a">
    <p class="top-name-p width-623">AKG-01</p>
    <p align="center" >贵州省黔西南州兴义环城高速公路建设项目</p>
    <h3>单项工程工程量批复单</h3>
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
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="84" valign="top"><p align="center">工程名称</p></td>
        <td width="189" colspan="2" valign="top"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="134" colspan="2" valign="top"><p align="center">里程 </p></td>
        <td width="230" colspan="2" valign="top"><p align="center"><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="84" valign="top"><p align="center">支付编号 </p></td>
        <td width="119" valign="top"><p align="center">项目名称 </p></td>
        <td width="70" valign="top"><p align="center">单位 </p></td>
        <td width="134" colspan="2" valign="top"><p align="center">原工程量清单 </p></td>
        <td width="118" valign="top"><p align="center">申报数量 </p></td>
        <td width="112" valign="top"><p align="center">批复数量 </p></td>
      </tr>
      <tr v-for="(item,index) in controlArr" :key="index">
        <td width="84" valign="top"><p><input type="text" v-model="item.s1"></p></td>
        <td width="119" valign="top"><p><input type="text" v-model="item.s2"></p></td>
        <td width="70" valign="top"><p><input type="text" v-model="item.s3"></p></td>
        <td width="134" colspan="2" valign="top"><p><input type="text" v-model="item.s4"></p></td>
        <td width="118" valign="top"><p><input type="text" v-model="item.s5"></p></td>
        <td width="112" valign="top"><p><input type="text" v-model="item.s6"></p></td>
      </tr>
      <tr>
        <td width="637" colspan="7" valign="top"><p>申报（承包人）：<input type="text" class="input-80" v-model="obj.m3"> </p></td>
      </tr>
      <tr>
        <td width="288" colspan="4" valign="top"><p>审查（专项工程师）：<input type="text" class="input-80" v-model="obj.m4"> </p></td>
        <td width="349" colspan="3" valign="top"><p>审批（驻地办）：<input type="text" class="input-80" v-model="nameList1[1].fullName" disabled></p></td>
      </tr>
    </table>
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
    name: "AKG-01",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        //rec表
        rec: {
          recNo: '',
          tableId: '',
          contracId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        headerInfo: {}, //表头信息
        nameList: [],
        nameList1: [{}, {}],
        id: '7'    //主表id
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if (obj.data != '' && obj.data != null && obj.data != undefined) {
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
    watch:{
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item, index) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 38) {
                this.nameList1 = item;
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
        for(var i= 0; i<22;i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/kg01/findByRecId', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length > 0) {
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
            this.isAdd = false;

          }
        })
      },
      //新增
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/kg01/saveKg01', this.$qs.stringify({
          kg01:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("新增接口")
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
        this.axios.post('/HiQuality/kg01/updateKg01', this.$qs.stringify({
          kg01:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.delete('/HiQuality/kg01/deleteById', {
          params: {
            id: this.id,
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = {subList:[]};
            this.controlArr = [];
            this.isAdd = true;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
