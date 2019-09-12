<template>
  <div class="AQ-25 text-center">
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全生产费用使用计划表</h3>
    <div class="text-left width-663">
      <span>施工单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-663">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td width="41" valign="top">
          编 <br/>
          号
        </td>
        <td width="143" valign="top"><p align="center">名称 </p></td>
        <td width="73" valign="top"><p align="center">规格 </p></td>
        <td width="66" valign="top"><p align="center">单位 </p></td>
        <td width="71" valign="top"><p align="center">数量 </p></td>
        <td width="58" valign="top"><p align="center">单价 </p></td>
        <td width="120" valign="top"><p align="center">用途 </p></td>
        <td width="90" valign="top"><p align="center">合计 </p></td>
      </tr>
      <tr v-for="(item,index) in controlArr" :key="index">
        <td width="41" valign="top"><p align="center">{{index+1}}</p></td>
        <td width="143" valign="top"><p align="left"><input type="text" v-model="item.s1"></p></td>
        <td width="73" valign="top"><p align="left"><input type="text" v-model="item.s2"></p></td>
        <td width="66" valign="top"><p align="left"><input type="text" v-model="item.s3"></p></td>
        <td width="71" valign="top"><p align="left"><input type="text" v-model="item.s4"></p></td>
        <td width="58" valign="top"><p align="left"><input type="text" v-model="item.s5"></p></td>
        <td width="120" valign="top"><p align="left"><input type="text" v-model="item.s6"></p></td>
        <td width="90" valign="top"><p align="left"><input type="text" v-model="item.s7"></p></td>
      </tr>
      <tr>
        <td width="184" colspan="2" valign="top">
          <p align="left">本页小计 <input type="text"></p></td>
        <td width="478" colspan="6" valign="top"><p align="left"><input type="text" v-model="obj.m1"></p></td>
      </tr>
      <tr>
        <td width="184" colspan="2" valign="top"><p align="left">费用总计 </p></td>
        <td width="478" colspan="6" valign="top"><p align="left"><input type="text" v-model="obj.m2"></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-663">单位负责人： <input type="text" v-model="obj.m3" class="input-50">安全负责人 (审核)：<input type="text" v-model="obj.m4" class="input-50">安全监理工程师：<input type="text" class="input-50" v-model="nameList1[1].fullName" disabled>时间：<input type="text" class="input-50" v-model="nameList1[0].auditTime" disabled></p>
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
    name: "AQ-25",
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
        auditTypeIdArr: [38],
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
        for(var i= 0; i<30;i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq25/findById', {
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
        this.axios.post('/HiQuality/Aq25/saveAaq25M', this.$qs.stringify({
          aq25:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/Aq25/updateAq25', this.$qs.stringify({
          aq25:JSON.stringify(this.obj)
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
        this.axios.delete('/HiQuality/Aq25/deleteAq25', {
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
