<template>
  <div class="A45 text-center main-a crosswise-a crosswise">
    <p class="top-name-p width-968">A-45</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>监理单位人员岗位登记表</h3>
    <p class="top-name-p width-968">责查表-45 </p>
    <p class="bot-hint-p width-968" style="padding-left: 10px;"> 业主单位：{{yzName}} 监理单位：<input type="text" v-model="obj.m6" disabled class="input-230"> 监理合同号：<input type="text" v-model="obj.m7" disabled class="input-200">第<input type="text" class="date-input">页 共<input type="text" class="date-input">页</p>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel">
        <tr>
          <td width="49" valign="center"><p align="center">序号</p></td>
          <td width="80" valign="center"><p align="center">姓名 </p></td>
          <td width="116" valign="center"><p align="center">居民身份证号码 </p></td>
          <td width="82" valign="top"><p align="center">学历及学习专业 </p></td>
          <td width="82" valign="center"><p align="center">技术资格 </p></td>
          <td width="141" valign="center"><p align="center">监理证件名称及编号 </p></td>
          <td width="147" valign="center"><p align="center">监理证规定监理范围 </p></td>
          <td width="119" valign="center"><p align="center">岗位及职责范围 </p></td>
          <td width="119" valign="center"><p align="center">起止时间 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="49" valign="center"><p align="center"><input type="text" v-model="val.s1"></p></td>
          <td width="80" valign="center"><p align="center"><input type="text" v-model="val.s2"></p></td>
          <td width="116" valign="center"><p align="center"><input type="text" v-model="val.s3"></p></td>
          <td width="82" valign="top"><p align="center"><input type="text" v-model="val.s4"></p></td>
          <td width="82" valign="center"><p align="center"><input type="text" v-model="val.s5"></p></td>
          <td width="141" valign="center"><p align="center"><input type="text" v-model="val.s6"></p></td>
          <td width="147" valign="center"><p align="center"><input type="text" v-model="val.s7"></p></td>
          <td width="119" valign="center"><p align="center"><input type="text" v-model="val.s8"></p></td>
          <td width="119" valign="center">
            <div class="block">
              <el-date-picker v-model="val.s9" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-968">证件查验：<input type="text" v-model="obj.m1" class="input-200">
        复核：<input type="text" v-model="obj.m2" class="input-200">
        业 主：<input type="text" v-model="nameList1[1].fullName" disabled class="input-200">
        <input type="text" v-model="listDateArr1[0]" disabled class="date-input">年
        <input type="text" v-model="listDateArr1[1]" disabled class="date-input">月
        <input type="text" v-model="listDateArr1[2]" disabled class="date-input">日
      </p>
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
    name: "A-45",
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
        yzName:'贵州兴义环城高速公路有限公司',//业主单位
        supervisorTableInfo:{}, //监理用表表头信息
        auditTypeIdArr:[1],
        nameList:[],
        nameList1:[{},{}],
        listDateArr1:[],
        id: '1',

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
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
      },
      getTableInfoList: function () {
        return this.$store.state.supervisorTableInfo
      }
    },
    watch: {
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==10){
                this.nameList1 = item;
                this.listDateArr1 = splitDate(this.nameList1[0].auditTime,'-');
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
        //获取监理合同号信息赋值给主表对象
        this.obj.m7 = this.supervisorTableInfo.contractCode2;
      }
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i=0;i<12;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A45/findA45ById', {
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
        this.axios.post("/HiQuality/A45/saveA45", this.$qs.stringify({
          a45:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A45/updateA45', this.$qs.stringify({
          a45:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A45/deleteA45', {
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
  .date-input {
    width: 30px;
  }
</style>
