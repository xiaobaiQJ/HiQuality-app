<template>
    <div class="A43 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-559">A43</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>返还保留金通知书</h3>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr >
            <td width="552" valign="top" ><p >&nbsp;</p>
              <p >致<u>监理工程师</u>（全称） </p><br>
              <p style="text-indent: 20px;" class="p-lineheight">承包人<input type="text" v-model="obj.m1" class="title-input">根据XX&#8212;XX公路第<input type="text" v-model="obj.m2" class="title-input input-width">合同段项目经理部关于返还保留金的申请及监理合同段监理工程师所签署意见，同意<input type="text" v-model="obj.m3" class="title-input input-width">期返还已扣保留金金额人民币￥<input type="text" v-model="obj.m4" class="title-input">元（大写人民币<input type="text" v-model="obj.m5" class="title-input">元）的<input type="text" v-model="obj.m6" class="title-input input-width">%即人民币 ￥<input type="text" v-model="obj.m7" class="title-input">元（大写人民币<input type="text" v-model="obj.m8" class="title-input">元），累计已返还￥<input type="text" v-model="obj.m9" class="title-input">元（大写人民币<input type="text" v-model="obj.m10" class="title-input">元）<u> </u><br>
              </p><br>
               <p class="mar-left-10"> 即可办理返还事宜 </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p >&nbsp;</p><p >&nbsp;</p><br><br><br><br><br><br><br><br><br><br><br><br>
              <p class="mar-left-10 p-lineheight">驻地办合同计量科（签字）<input type="text" v-model="nameList1[1].fullName" class="title-input input-115" disabled>
                <input type="text" v-model="nameListDataArr1[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr1[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr1[2]" class="date-input" disabled>日<br>
                驻地办高级理工程师（签字）<input type="text" v-model="nameList2[1].fullName" class="title-input name-input" disabled>
                <input type="text" v-model="nameListDataArr2[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr2[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr2[2]" class="date-input" disabled>日 <br>
                总监办合同计量科（签字）<input type="text" v-model="nameList3[1].fullName" class="title-input input-115" disabled>
                <input type="text" v-model="nameListDataArr3[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr3[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr3[2]" class="date-input" disabled>日 <br>
                总监办总监理工程师（签字）<input type="text" v-model="nameList4[1].fullName" class="title-input name-input" disabled>
                <input type="text" v-model="nameListDataArr4[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr4[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr4[1]" class="date-input" disabled>日 <br>
                项目公司计合部（签字）<input type="text" v-model="nameList5[1].fullName" class="title-input input-122" disabled>
                <input type="text" v-model="nameListDataArr5[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr5[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr5[2]" class="date-input" disabled>日 <br>
                项目公司工程质保部（签字）<input type="text" v-model="nameList6[1].fullName" class="title-input name-input" disabled>
                <input type="text" v-model="nameListDataArr6[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr6[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr6[2]" class="date-input" disabled>日 <br>
                项目公司财务部（签字）<input type="text" v-model="nameList7[1].fullName" class="title-input input-122" disabled>
                <input type="text" v-model="nameListDataArr7[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr7[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr7[2]" class="date-input" disabled>日 <br>
                项目法人受权代表（签字）<input type="text" v-model="nameList8[1].fullName" class="title-input input-115" disabled>
                <input type="text" v-model="nameListDataArr8[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr8[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr8[2]" class="date-input" disabled>日 <br>
                项目法人代表（签字）<input type="text" v-model="nameList9[1].fullName" class="title-input input-146" disabled>
                <input type="text" v-model="nameListDataArr9[0]" class="date-input" disabled>年
                <input type="text" v-model="nameListDataArr9[1]" class="date-input" disabled>月
                <input type="text" v-model="nameListDataArr9[2]" class="date-input" disabled>日
              </p><br/><br/><br/><br/><br/><br><br>
            </td>
          </tr>
        </table>
      </div>
      <p align="center" >&nbsp;</p>
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
    name: "A-43",
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
        auditTypeIdArr:[37,25,23,21,10,15,18,7,6],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameList5:[{},{}],
        nameList6:[{},{}],
        nameList7:[{},{}],
        nameList8:[{},{}],
        nameList9:[{},{}],
        nameListDataArr1:[],
        nameListDataArr2:[],
        nameListDataArr3:[],
        nameListDataArr4:[],
        nameListDataArr5:[],
        nameListDataArr6:[],
        nameListDataArr7:[],
        nameListDataArr8:[],
        nameListDataArr9:[],
        id: '3',

      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
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
              if(item[1].auditTypeId==37){
                this.nameList1 = item;
                this.nameListDataArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==25){
                this.nameList2 = item;
                this.nameListDataArr2 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if(item[1].auditTypeId==23){
                this.nameList3 = item;
                this.nameListDataArr3 = splitDate(this.nameList3[0].auditTime,'-');
              }
              if(item[1].auditTypeId==21){
                this.nameList4 = item;
                this.nameListDataArr4 = splitDate(this.nameList4[0].auditTime,'-');
              }
              if(item[1].auditTypeId==10){
                this.nameList5 = item;
                this.nameListDataArr5 = splitDate(this.nameList5[0].auditTime,'-');
              }
              if(item[1].auditTypeId==15){
                this.nameList6 = item;
                this.nameListDataArr6 = splitDate(this.nameList6[0].auditTime,'-');
              }if(item[1].auditTypeId==18){
                this.nameList7 = item;
                this.nameListDataArr7 = splitDate(this.nameList7[0].auditTime,'-');
              }
              if(item[1].auditTypeId==7){
                this.nameList8 = item;
                this.nameListDataArr8 = splitDate(this.nameList8[0].auditTime,'-');
              }
              if(item[1].auditTypeId==6){
                this.nameList9 = item;
                this.nameListDataArr9 = splitDate(this.nameList9[0].auditTime,'-');
              }
            }
          })
        }
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/A43/findA43ById', {
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
        this.axios.post("/HiQuality/A43/saveA43", this.$qs.stringify({
          a43:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A43/updateA43', this.$qs.stringify({
          a43:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A43/deleteA43', {
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
  .input-width{
    width: 30px;
  }
  .name-input{
    width: 100px;
    height: 25px;
  }
  .input-115{
    width: 115px;
  }
  .input-122{
    width: 122px;
    height: 20px;
  }
  .input-146{
    width: 139px;
  }
</style>
