<template>
    <div class="A55 text-center main-a crosswise-a crosswise">
      <p class="top-name-p width-1086">A-55</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>承包人主要人员考勤表</h3>
      <div class="tabel-title-A flex-r title-width-1091">
        <p>合同号：<input type="text" class="title-input" v-model="headerInfo.contractCode" disabled></p>
        <p align="center">
          <input type="text" v-model="dateArr[0]" class="date-input title-input">年
          <input type="text" v-model="dateArr[1]" class="date-input title-input">月
          <span style="display: inline-block; width: 50px;"></span>   责查表-11 
        </p>
      </div>
      <div align="center">
        <table width="1084" border="1" cellspacing="0" class="public-tabel table-tr-height-22">
          <tr>
            <td width="47" scope="col">序号</td>
            <td width="47" scope="col">姓名</td>
            <td width="91" scope="col">监理职务</td>
            <td width="29" scope="col">1</td>
            <td width="29" scope="col">2</td>
            <td width="29" scope="col">3</td>
            <td width="29" scope="col">4</td>
            <td width="29" scope="col">5</td>
            <td width="29" scope="col">6</td>
            <td width="29" scope="col">7</td>
            <td width="29" scope="col">8</td>
            <td width="29" scope="col">9</td>
            <td width="29" scope="col">10</td>
            <td width="29" scope="col">11</td>
            <td width="29" scope="col">12</td>
            <td width="29" scope="col">13</td>
            <td width="29" scope="col">14</td>
            <td width="29" scope="col">15</td>
            <td width="29" scope="col">29</td>
            <td width="29" scope="col">17</td>
            <td width="29" scope="col">18</td>
            <td width="29" scope="col">19</td>
            <td width="29" scope="col">20</td>
            <td width="29" scope="col">21</td>
            <td width="29" scope="col">22</td>
            <td width="29" scope="col">23</td>
            <td width="29" scope="col">24</td>
            <td width="29" scope="col">25</td>
            <td width="29" scope="col">26</td>
            <td width="29" scope="col">27</td>
            <td width="29" scope="col">28</td>
            <td width="29" scope="col">29</td>
            <td width="29" scope="col">30</td>
            <td width="29" scope="col">31</td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td><input type="text" v-model="val.s1"></td>
            <td><input type="text" v-model="val.s2"></td>
            <td><input type="text" v-model="val.s3"></td>
            <td><input type="text" v-model="val.s4"></td>
            <td><input type="text" v-model="val.s5"></td>
            <td><input type="text" v-model="val.s6"></td>
            <td><input type="text" v-model="val.s7"></td>
            <td><input type="text" v-model="val.s8"></td>
            <td><input type="text" v-model="val.s9"></td>
            <td><input type="text" v-model="val.s10"></td>
            <td><input type="text" v-model="val.s11"></td>
            <td><input type="text" v-model="val.s12"></td>
            <td><input type="text" v-model="val.s13"></td>
            <td><input type="text" v-model="val.s14"></td>
            <td><input type="text" v-model="val.s15"></td>
            <td><input type="text" v-model="val.s16"></td>
            <td><input type="text" v-model="val.s17"></td>
            <td><input type="text" v-model="val.s18"></td>
            <td><input type="text" v-model="val.s19"></td>
            <td><input type="text" v-model="val.s20"></td>
            <td><input type="text" v-model="val.s21"></td>
            <td><input type="text" v-model="val.s22"></td>
            <td><input type="text" v-model="val.s23"></td>
            <td><input type="text" v-model="val.s24"></td>
            <td><input type="text" v-model="val.s25"></td>
            <td><input type="text" v-model="val.s26"></td>
            <td><input type="text" v-model="val.s27"></td>
            <td><input type="text" v-model="val.s28"></td>
            <td><input type="text" v-model="val.s29"></td>
            <td><input type="text" v-model="val.s30"></td>
            <td><input type="text" v-model="val.s31"></td>
            <td><input type="text" v-model="val.s32"></td>
            <td><input type="text" v-model="val.s33"></td>
            <td><input type="text" v-model="val.s34"></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-1086">注：填写时以&#8220;&#9633;&#8221;代表缺岗，&#8220;&#9651;&#8221;代表脱岗，&#8220;&#9675;&#8221;代表病假， &#8220;&#8251;&#8221;代表事假，&#8220;&#9678;&#8221;代表轮休，&#8220;&#9632;&#8221;代表出勤。本表人员同一览表。
      </p>
      <br/>
      <p class="bot-hint-p width-1043">
        监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled>
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
    name: "A-55",
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
        auditTypeIdArr:[26],
        nameList:[],
        nameList1:[{},{}],
        nameDateArr1:[],
        dateArr:[],

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
        for(var i=0;i<20;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A55/findA55ById', {
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
        this.axios.post("/HiQuality/A55/saveA55", this.$qs.stringify({
          a55:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A55/updateA55', this.$qs.stringify({
          a55:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A55/deleteA55', {
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
