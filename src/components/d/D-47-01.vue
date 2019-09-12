<template>
  <div class="D-47-01 text-center main-a crosswise crosswise-a">
    <p class="top-name-p width-1023">D-47-01</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center">兴 义 环 城 高 速 公 路</p>
    <h3 align="center"><strong>隧道现场监控量测施工记录（一）</strong></h3>
    <div class="public-tilte flex-r margin-auto width-1023">
      <div>
        <p>承包单位：<input type="text" v-model="headerInfo.unitName" class="width-600" disabled></p>
        <p>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></p>
        <p>隧道名称：<input type="text" v-model="obj.m1"></p>
        <p>量测项目：<input type="text" v-model="obj.m3"></p>
        <p>测点里程：<input type="text" v-model="obj.m5"></p>
      </div>
      <div>
        <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></p>
        <p>编&nbsp;&nbsp;号：<input type="text" v-model="rec.recNo"></p>
        <div>埋设日期：
          <div class="block display-lnl height-25">
            <el-date-picker class="input-300"
                            size="mini"
                            v-model="obj.m2"
                            type="date"
                            placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
        <div>开挖日期：
          <div class="block display-lnl height-25">
            <el-date-picker class="input-300"
                            size="mini"
                            v-model="obj.m4"
                            type="date"
                            placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
        <div>初读数时间：
          <div class="block display-lnl height-25">
            <el-date-picker class="input-300"
                            size="mini"
                            v-model="obj.m6"
                            type="datetime"
                            placeholder="年  月  日  时"
                            format="yyyy年MM月dd日 HH时"
                            value-format="yyyy-MM-dd HH">
            </el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <table border="1" cellspacing="0" class="public-tabel">
      <tr>
        <td width="208" valign="top" class="t-right">
          测点号
          <img width="204" height="27" src="../../assets/files/imgs/D/D-45_wps6.png" class="img1">
        </td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m7"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m8"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m9"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m10"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m11"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr>
        <td width="208" valign="top">
          <p align="right">
            纪要
            <img width="208" height="80" src="../../assets/files/imgs/D/D-45_wps5.png" class="img2">
          </p>
        </td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m13"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m14"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m15"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m16"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m17"></p></td>
        <td width="128" colspan="2"><p><input type="text" v-model="obj.m18"></p></td>
      </tr>
      <tr>
        <td width="208">
          <p>时期、时间         量测值
            <img width="150" height="100" src="../../assets/files/imgs/D/D-45_wps6.png" class="img3">
          </p>
        </td>
        <td width="64"><p>量测值 </p></td>
        <td width="64"><p>计算值 </p></td>
        <td width="64"><p>量测值 </p></td>
        <td width="64"><p>计算值 </p></td>
        <td width="64"><p>量测值 </p></td>
        <td width="64"><p>计算值 </p></td>
        <td width="64"><p>量测值 </p></td>
        <td width="64"><p>计算值 </p></td>
        <td width="64"><p>量测值 </p></td>
        <td width="64"><p>计算值 </p></td>
        <td width="64"><p>量测值 </p></td>
        <td width="64"><p>计算值 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="208" >
          <div class="block height-25">
            <el-date-picker class="input-120"
                            size="mini"
                            v-model="val.s1"
                            type="datetime"
                            placeholder="年  月  日  时"
                            format="yyyy年MM月dd日 HH时"
                            value-format="yyyy-MM-dd HH">
            </el-date-picker>
          </div>
        </td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s2"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s3"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s4"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s5"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s6"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s7"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s8"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s9"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s10"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s11"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s12"></p></td>
        <td width="64" valign="center"><p><input type="text" v-model="val.s13"></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-1023">施工单位技术负责人:<input type="text" v-model="obj.m19" class="input-140">量测： <input type="text" v-model="obj.m20" class="input-140">计算：<input type="text" v-model="obj.m21" class="input-160">复核：<input type="text" v-model="obj.m22" class="input-140">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-140">
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
  import {splitDate, joinDate} from '../../utils/utils'
  export default {
    name: "D-47-01",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        rec: {
          recNo: ' ',
          tableId: 4,
          contracId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        auditTypeIdArr:[39],
        nameList:[],
        nameList1:[{},{}],
        m15DataArr:[],
        headerInfo:{}, //表头信息
        id: '',
        m2DateArr: [],
        m4DateArr: [],
        m6DateArr: [],
        m6HourArr: [],
        yearArr: [],
        monthArr: [],
        dayArr: [],
        hourArr: []
      }
    },
    created() {
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
    mounted(){
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for (var i = 0; i < 7; i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //拼接日期时间
      joinDateTime() {
        this.controlArr.forEach((item, index) => {
          if (this.yearArr[index] != null || this.monthArr[index] != null || this.dayArr[index] != null || this.hourArr[index] != null) {
            let arr1 = [];
            let arr2 = [];
            arr1.push(this.yearArr[index]);
            arr1.push(this.monthArr[index]);
            arr1.push(this.dayArr[index]);
            arr2.push(this.hourArr[index]);
            arr2.push("00");
            arr2.push("00");
            let date = '';
            date = joinDate(arr1, '-');
            //console.log("年月日拼接：" + date);
            let time = '';
            time = joinDate(arr2, ':');
            //console.log("时分秒拼接：" + time);
            item.s1 = date + ' ' + time;
            //console.log("s1完整拼接：" + item.s1);
          }

        })

      },

      //查询
      getData() {
        this.axios.get('/HiQuality/d47a/findById', {
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
            var arr = []
            if (this.obj.subList != undefined && this.obj.subList.length >0){
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
          }

        })
      },
      //新增
      addData() {
        if (JSON.stringify(this.obj) == '{}'||JSON.stringify(this.addObj) == '{}') {
          return
        }
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/d47a/save',this.$qs.stringify({
          BBtD47AM:JSON.stringify(this.obj),
          BQcRecInfo:JSON.stringify(this.rec)
        })).then(res=>{
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
        this.axios.post('/HiQuality/d47a/update',this.$qs.stringify({
          BBtD47AM:JSON.stringify(this.obj)
        })).then(res=>{
          console.log("修改接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = false;
            this.$tost.edit();
            this.$skip.skipProcess();
            this.getData();
          }
        })
      },

      //删除
      deleteData() {
        this.axios.get('/HiQuality/d47a/deleteById', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
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
  table {
    position: relative;
  }

  .img1 {
    position: absolute;
    left: 0;
  }

  .img2 {
    position: absolute;
    left: 0;
    top: 0;
  }

  .img3 {
    position: absolute;
    left: 0;
    top: 0;
  }

  .t-right {
    text-align: right;
    height: 27px !important;
  }
  .input-45 {
    width: 45px;
  }
  .public-tilte>div:nth-child(1){
    padding-left: 30px;
    width: 60%;
  }
  .public-tilte>div:nth-child(1) input{
    width: 60%;
  }
  .public-tilte>div:nth-child(2)>div{
    margin: 3px 0;
  }
  .public-tilte>div:nth-child(2) input{
    width: 300px!important;
  }
</style>
