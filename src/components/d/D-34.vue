<template>
  <div class="D-34 text-center">
    <p class="top-name-p width-968">D-34</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>路槽、路面基层、面层弯沉值检测汇总</strong><strong> </strong></h3>
    <div class="text-left width-968">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-968">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-968">
      <span>起讫桩号：<input type="text" v-model="obj.m1"></span>
      <div class="myClear"></div>
    </div>
    <table border="1" cellspacing="0" class="public-tabel" >
      <tr >
        <td width="45" valign="center" rowspan="2" ><br />
          序号 </td>
        <td width="151" valign="center" rowspan="2" ><p align="center" >地点及桩号 </p></td>
        <td width="118" valign="center" rowspan="2" ><p align="center" >检测位置 </p></td>
        <td width="105" valign="center" rowspan="2" ><p align="center" >结构形式 </p></td>
        <td width="154" valign="center" colspan="2" ><p align="center" >实测弯沉值 </p></td>
        <td width="104" valign="center" rowspan="2" ><p align="center" >规定弯沉值 </p></td>
        <td width="85" valign="center" rowspan="2" ><p align="center" >检测日期 </p></td>
        <td width="181" valign="center" rowspan="2" ><p align="center" >备注 </p></td>
      </tr>
      <tr >
        <td width="88" valign="center" ><p align="center" >测点个数 </p></td>
        <td width="66" valign="center" ><p align="center" >代表值 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="45" valign="center" ><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="151" valign="center" ><p><input type="text" class="td-input" v-model="val.s2"></p></td>
        <td width="118" valign="center" ><p><input type="text" class="td-input" v-model="val.s3"></p></td>
        <td width="105" valign="center" ><p><input type="text" class="td-input" v-model="val.s4"></p></td>
        <td width="88" valign="center" ><p><input type="text" class="td-input" v-model="val.s5"></p></td>
        <td width="66" valign="center" ><p><input type="text" class="td-input" v-model="val.s6"></p></td>
        <td width="104" valign="center" ><p><input type="text" class="td-input" v-model="val.s7"></p></td>
        <td width="85" valign="center" >          <div class="block">
          <el-date-picker v-model="val.s8" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="181" valign="center" ><p><input type="text" class="td-input" v-model="val.s9"></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-991">施工单位技术负责人：<input type="text" v-model="obj.m2" class="input-140">制表：<input type="text" v-model="obj.m3" class="input-140">监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled class="input-140">
      <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
      <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
      <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日<p />
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
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "D-34",
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
            recNo:'',
            tableId:'',
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          auditTypeIdArr:[39],//26-专业监理工程师
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          dateArr: [],
          id: '1'    //主表id

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
        //获取rec记录信息
        this.$publicFun.getRecInfo();
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
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 39) {
                  this.nameList1 = item;
                  this.m15DataArr = splitDate(this.nameList1[0].auditTime, '-');
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
          for(var i= 0; i<11;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d34/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList = res.data.data.sub;
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
          if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.subObj) == '{}') {
            return
          }
          if (!this.isAdd) {
            return false;
          }
          this.obj.m5 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/d34/save", this.$qs.stringify({
            BBtD34M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
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
          this.axios.post('/HiQuality/d34/update', this.$qs.stringify({
            BBtD34M:JSON.stringify(this.obj)
          })).then(res=>{
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
          this.axios.get('/HiQuality/d34/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.controlArr = [];
              this.obj = {subList:[]}
              this.isAdd = true;
              this.setSubObj();
            }
          })
        }

      }

    }
</script>

<style scoped>

</style>
