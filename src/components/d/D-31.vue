<template>
  <div class="D-31 text-center">
    <p class="top-name-p width-1043">D-31</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
    <h3><strong>路槽施工原始记录</strong><strong> </strong></h3>
    <div class="text-left width-1043">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-1043">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel" width="1053">
        <tr>
          <td width="104" valign="center" rowspan="2"><p align="center">桩号</p></td>
          <td width="93" valign="center" rowspan="2"><p align="center">槽内压实度（%） </p></td>
          <td width="95" valign="center" rowspan="2"><p align="center">中桩标高（m） </p></td>
          <td width="132" valign="center" colspan="2"><p align="center">槽宽（m） </p></td>
          <td width="75" valign="center" rowspan="2"><p align="center">加宽值（m） </p></td>
          <td width="85" valign="center" rowspan="2"><p align="center">横 坡（%） </p></td>
          <td width="75" valign="center" rowspan="2"><p align="center">平整度 </p></td>
          <td width="75" valign="center" rowspan="2"><p align="center">检 查 <br/>
            意 见 </p></td>
          <td width="75" valign="center" rowspan="2"><p align="center">检查人 </p></td>
          <td width="66" valign="center" rowspan="2"><p align="center">检查 <br/>
            日期 </p></td>
          <td width="120" valign="center" rowspan="2"><p align="center">备  注 </p></td>
        </tr>
        <tr>
          <td width="66" valign="center"><p align="center">左 </p></td>
          <td width="66" valign="center"><p align="center">右 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="104" valign="top"><p><input type="text"  v-model="val.s1"></p></td>
          <td width="93" valign="top"><p><input type="text"  v-model="val.s2"></p></td>
          <td width="95" valign="top"><p><input type="text"  v-model="val.s3"></p></td>
          <td width="66" valign="top"><p><input type="text"  v-model="val.s4"></p></td>
          <td width="66" valign="top"><p><input type="text"  v-model="val.s5"></p></td>
          <td width="75" valign="top"><p><input type="text"  v-model="val.s6"></p></td>
          <td width="85" valign="top"><p><input type="text"  v-model="val.s7"></p></td>
          <td width="75" valign="top"><p><input type="text"  v-model="val.s8"></p></td>
          <td width="75" valign="top"><p><input type="text"  v-model="val.s9"></p></td>
          <td width="75" valign="top"><p><input type="text"  v-model="val.s10"></p></td>
          <td width="66" valign="top"><div class="block">
            <el-date-picker v-model="val.s11" type="date" size="mini" class="input-80" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
          <td width="120" valign="top"><p><input type="text"  v-model="val.s12"></p></td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-1043">施工单位技术负责人：<input type="text" v-model="obj.m1">记  录：<input type="text" v-model="obj.m2">监理员：<input type="text" v-model="nameList1[1].fullName" disabled>
      <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
      <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
      <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日<br clear="all"/>
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
    name: "D-31",
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
        auditTypeIdArr:[39],
        nameList:[],
        nameList1:[{},{}],
        m15DataArr:[],
        headerInfo:{}, //表头信息
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        dateArr: [],
        id: '1'     //主表id
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
      this.$publicFun.getRecInfo();    },
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
      this.setSubObj()
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
        this.axios.get('/HiQuality/d31/findById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data.main;
            this.dateArr = splitDate(this.obj.m4);
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
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/d31/save", this.$qs.stringify({
          BBtD31M:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/d31/update', this.$qs.stringify({
          BBtD31M:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d31/deleteById', {
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
