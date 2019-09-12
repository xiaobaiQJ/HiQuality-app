<template>
    <div class="A54 text-center main-a crosswise-a crosswise">
      <p class="top-name-p width-1043">A-54</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>承包人上岗主要人员一览表</h3>
      <div class="tabel-title-A flex-r width-1043">
        <p>合同号：<input type="text" class="title-input" v-model="headerInfo.contractCode" disabled></p>
        <p align="center">责查表-10 </p>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-30">
          <tr >
            <td width="31" valign="center" ><p align="center">序号</p> </td>
            <td width="84" valign="center" ><p align="center" >姓名 </p></td>
            <td width="36" valign="center" ><p align="center" >性别 </p></td>
            <td width="36" valign="center" ><p align="center" >年龄 </p></td>
            <td width="92" valign="center" ><p align="center" >在项目中<br/>担任职务 </p></td>
            <td width="103" valign="center" ><p align="center" >工作岗位及<br/>工作内容 </p></td>
            <td width="84" valign="center" ><p align="center" >岗位资格 </p></td>
            <td width="98" valign="center" ><p align="center" >证书及编号 </p></td>
            <td width="82" valign="center" ><p align="center" >专业技术<br/>职称资格 </p></td>
            <td width="92" valign="center" ><p align="center" >技术资格<br/>证书号 </p></td>
            <td width="92" valign="center" ><p align="center" >身份证号 </p></td>
            <td width="92" valign="center" ><p align="center" >上岗证号 </p></td>
            <td width="84" valign="center" ><p align="center" >备注 </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="31" valign="top" ><p align="center"><input type="text" v-model="val.s1"></p></td>
            <td width="84" valign="top" ><p align="center"><input type="text" v-model="val.s2"></p></td>
            <td width="36" valign="top" ><p align="center"><input type="text" v-model="val.s3"></p></td>
            <td width="36" valign="top" ><p align="center"><input type="text" v-model="val.s4"></p></td>
            <td width="92" valign="top" ><p align="center"><input type="text" v-model="val.s5"></p></td>
            <td width="103" valign="top"><p align="center"><input type="text" v-model="val.s6"></p></td>
            <td width="84" valign="top" ><p align="center"><input type="text" v-model="val.s7"></p></td>
            <td width="98" valign="top" ><p align="center"><input type="text" v-model="val.s8"></p></td>
            <td width="82" valign="top" ><p align="center"><input type="text" v-model="val.s9"></p></td>
            <td width="92" valign="top" ><p align="center"><input type="text" v-model="val.s10"></p></td>
            <td width="92" valign="top" ><p align="center"><input type="text" v-model="val.s11"></p></td>
            <td width="92" valign="top" ><p align="center"><input type="text" v-model="val.s12"></p></td>
            <td width="84" valign="top" ><p align="center"><input type="text" v-model="val.s13"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-1043">表注：&#9312;本表人员须与合同和驻地办批准的变动人员相一致。&#9313;如上岗监理人员需作变动，应向总监理工程师办公室提出申请，并附上变动人员的主要监理工作经历、专业技术资格证书、学历证明、监理工程师证书、上岗证，以及身份证复印件各一份。经驻地办监理工程师办公室批准后方可变动。未经批准更换的视为缺岗。 </p>
      <br/>
      <p class="bot-hint-p width-991">
        项目公司质安部：<input type="text" v-model="nameList1[1].fullName" disabled>
        <input type="text" v-model="nameDateArr1[0]" class="date-input" disabled>年
        <input type="text" v-model="nameDateArr1[1]" class="date-input" disabled>月
        <input type="text" v-model="nameDateArr1[2]" class="date-input" disabled>日
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
    name: "A-54",
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
        auditTypeIdArr:[15],
        nameList:[],
        nameList1:[{},{}],
        nameDateArr1:[],
       dateArr:[]
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
              if(item[1].auditTypeId==15){
                this.nameList1 = item;
                this.nameDateArr1 = splitDate(this.nameList1[0].auditTime,'-');
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
        for(var i=0;i<14;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A54/findA54ById', {
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
        this.axios.post("/HiQuality/A54/saveA54", this.$qs.stringify({
          a54:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A54/updateA54', this.$qs.stringify({
          a54:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A54/deleteA54', {
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
