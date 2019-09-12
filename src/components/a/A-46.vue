<template>
    <div class="A46 text-center main-a crosswise">
      <p class="top-name-p width-968">A-46</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>施工单位人员岗位登记表</h3>
      <p class="top-name-p width-949">责查表-02 </p>
      <p class="bot-hint-p"> 施工单位：<input type="text" v-model="headerInfo.unitName" disabled class="longinput">  监理单位：<input type="text" v-model="headerInfo.unitName2" disabled class="longinput">  合同号：<input type="text" v-model="headerInfo.contractCode" disabled class="longinput"> 第 <input type="text" class="date-input"> 页 共<input type="text" class="date-input">页
       </p>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-35" >
          <tr >
            <td width="49" valign="center" ><p align="center">序号</p> </td>
            <td width="80" valign="center" ><p align="center" >姓名 </p></td>
            <td width="116" valign="center" ><p align="center" >居民身份证号码 </p></td>
            <td width="126" valign="center" ><p align="center" >学历及学习专业 </p></td>
            <td width="119" valign="center" ><p align="center" >技术资格 </p></td>
            <td width="154" valign="center" ><p align="center" >证件名称及编号 </p></td>
            <td width="167" valign="center" ><p align="center" >岗位及职责范围 </p></td>
            <td width="119" valign="center" ><p align="center" >起止时间 </p></td>
          </tr>
          <tr  v-for="(val,index) in controlArr" :key="index">
            <td width="49" valign="center" ><p align="center"><input type="text" v-model="val.s1"></p></td>
            <td width="80" valign="center" ><p align="center"><input type="text" v-model="val.s2"></p></td>
            <td width="116" valign="center" ><p align="center"><input type="text" v-model="val.s3"></p></td>
            <td width="126" valign="center" ><p align="center"><input type="text" v-model="val.s4"></p></td>
            <td width="119" valign="center" ><p align="center"><input type="text" v-model="val.s5"></p></td>
            <td width="154" valign="center" ><p align="center"><input type="text" v-model="val.s6"></p></td>
            <td width="167" valign="center" ><p align="center"><input type="text" v-model="val.s7"></p></td>
            <td width="119" valign="center" >
              <div class="block">
                <el-date-picker v-model="val.s8" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-949">证件查验：<input type="text" v-model="obj.m1" class="input-230"> 复核：<input type="text" v-model="obj.m2" class="input-230">监理工程师：<input type="text" v-model="obj.m3" class="input-230">
        <input type="text" v-model="listDateArr1[0]" disabled class="date-input">年
        <input type="text" v-model="listDateArr1[1]" disabled class="date-input">月
        <input type="text" v-model="listDateArr1[2]" disabled class="date-input">日
      </p>
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
    name: "A-46",
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
        auditTypeIdArr:[1],
        nameList:[],
        nameList1:[{},{}],
        listDateArr1:[],

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
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
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
                this.listDateArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
            }
          })
        }
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
        this.axios.get('/HiQuality/A46/findA46ById', {
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
        this.axios.post("/HiQuality/A46/saveA46", this.$qs.stringify({
          a46:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A46/updateA46', this.$qs.stringify({
          a46:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A46/deleteA46', {
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
  .date-input{
    width: 30px;
  }
</style>
