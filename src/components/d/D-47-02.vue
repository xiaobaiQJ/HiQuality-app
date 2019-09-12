<template>
  <div class="D-47-02 text-center">
    <p class="top-name-p width-1070">D-47-02</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
    <h3><strong>隧道现场监控量测施工记录（二）</strong><strong> </strong></h3>
    <div class="public-tilte flex-r margin-auto width-1070">
      <div>
        <p>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></p>
        <p>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></p>
        <p>桩号：<input type="text" v-model="obj.m1"></p>
      </div>
      <div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>距洞口距离：<input type="text" v-model="obj.m2"></p>
      </div>
      <div>
        <p>合同号：<input type="text" v-model="headerInfo.contractCode" disabled></p>
        <p>编  号：<input type="text" v-model="rec.recNo"></p>
        <p>量测断面编号：<input type="text" v-model="obj.m3"></p>
      </div>
    </div>
    <table border="1" cellspacing="0" class="public-tabel">
      <tr>
        <td width="62" valign="center" rowspan="3"><br/>
          测线测点编号
        </td>
        <td width="139" valign="center" colspan="4"><p align="center">量测时间 </p></td>
        <td width="264" valign="center" colspan="7"><p align="center">观测值 </p></td>
        <td width="49" valign="center" rowspan="2"><p align="center">温度修正值 </p></td>
        <td width="60" valign="center" rowspan="2"><p align="center">修正后观测值 </p></td>
        <td width="72" valign="center" colspan="2" rowspan="2"><p align="center">相对第一次收敛  值 </p></td>
        <td width="60" valign="center" rowspan="2"><p align="center">相对上一次收敛值 </p></td>
        <td width="48" valign="center" rowspan="2"><p align="center">间隔时间 </p></td>
        <td width="48" valign="center" rowspan="2"><p align="center">收敛 <br/>
          速度 </p></td>
        <td width="191" valign="center" rowspan="2"><p align="center">备     注 </p></td>
      </tr>
      <tr>
        <td width="50" valign="center" rowspan="2"><p align="center">年<strong> </strong></p></td>
        <td width="34" valign="center" rowspan="2"><p align="center">月<strong> </strong></p></td>
        <td width="34" valign="center" rowspan="2"><p align="center">日<strong> </strong></p></td>
        <td width="35" valign="center" rowspan="2"><p align="center">时<strong> </strong></p></td>
        <td width="39" valign="center"><p align="center">温度 </p></td>
        <td width="80" valign="center" colspan="2"><p align="center">&#8544; </p></td>
        <td width="72" valign="center" colspan="2"><p align="center">&#8545; </p></td>
        <td width="72" valign="center" colspan="2"><p align="center">平均值 </p></td>
      </tr>
      <tr>
        <td width="39" valign="center"><p align="center">&#8451; </p></td>
        <td width="40" valign="center"><p align="center">m </p></td>
        <td width="40" valign="center"><p align="center">mm </p></td>
        <td width="36" valign="center"><p align="center">m </p></td>
        <td width="36" valign="center"><p align="center">mm </p></td>
        <td width="36" valign="center"><p align="center">m </p></td>
        <td width="36" valign="center"><p align="center">mm </p></td>
        <td width="49" valign="center"><p align="center">mm </p></td>
        <td width="60" valign="center"><p align="center">m </p></td>
        <td width="36" valign="center"><p align="center">mm </p></td>
        <td width="36" valign="center"><p align="center">mm </p></td>
        <td width="60" valign="center"><p align="center">mm </p></td>
        <td width="48" valign="center"><p align="center">d </p></td>
        <td width="48" valign="center"><p align="center">mm/d </p></td>
        <td width="191" valign="center"><p align="center">&nbsp;</p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="62" valign="center"><p><input type="text" v-model="val.s1"></p></td>
        <td width="34" valign="center"><p><input type="text" v-model="yearArr[index]"></p></td>
        <td width="34" valign="center"><p><input type="text" v-model="monthArr[index]"></p></td>
        <td width="34" valign="center"><p><input type="text" v-model="dayArr[index]"></p></td>
        <td width="35" valign="center"><p><input type="text" v-model="hourArr[index]"></p></td>
        <td width="39" valign="center"><p><input type="text" v-model="val.s3"></p></td>
        <td width="40" valign="center"><p><input type="text" v-model="val.s4"></p></td>
        <td width="40" valign="center"><p><input type="text" v-model="val.s5"></p></td>
        <td width="36" valign="center"><p><input type="text" v-model="val.s6"></p></td>
        <td width="36" valign="center"><p><input type="text" v-model="val.s7"></p></td>
        <td width="36" valign="center"><p><input type="text" v-model="val.s8"></p></td>
        <td width="36" valign="center"><p><input type="text" v-model="val.s9"></p></td>
        <td width="49" valign="center"><p><input type="text" v-model="val.s10"></p></td>
        <td width="60" valign="center"><p><input type="text" v-model="val.s11"></p></td>
        <td width="36" valign="center"><p><input type="text" v-model="val.s12"></p></td>
        <td width="36" valign="center"><p><input type="text" v-model="val.s13"></p></td>
        <td width="60" valign="center"><p><input type="text" v-model="val.s14"></p></td>
        <td width="48" valign="center"><p><input type="text" v-model="val.s15"></p></td>
        <td width="48" valign="center"><p><input type="text" v-model="val.s16"></p></td>
        <td width="191"   valign="top" rowspan="8" style="padding: 10px" v-if="index===0">

          双洞观测点数按技术规范高限加倍。量测频率：每单洞每断面周边位移：不少于5个对测点；围岩内部位移及地表沉降：不少于11个测点；拱顶下沉：不少于1点。 <br/>
          量测初始值应在开挖后2小时读出。 <br/>
          附件： <br/>
          1、观测断面及观测点位置图 <br/>
          2、观测记录资料 <br/>
          3、纪录情况分析
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-1070">施工单位技术负责人：<input type="text" v-model="obj.m4" class="input-140"> 量测：<input type="text" v-model="obj.m5" class="input-140">计算： <input type="text" v-model="obj.m6" class="input-140">复核：<input type="text" v-model="obj.m7" class="input-140">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
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
    name: "D-47-02",
    data() {
      return {
        isAdd: true,
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
        auditTypeIdArr:[39],
        nameList:[],
        nameList1:[{},{}],
        m15DataArr:[],
        headerInfo:{}, //表头信息
        controlArr:[],
        id: '5',     //主表id
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
        for(var i= 0; i<8;i++){
          let subObj={};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/d47b/findById', {
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
        if (JSON.stringify(this.obj) == '{}'||JSON.stringify(this.addObj) == '{}') {
          return
        }
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/d47b/save", this.$qs.stringify({
          BBtD47BM:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/d47b/update',this.$qs.stringify({
          BBtD47BM:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d47b/deleteById', {
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
