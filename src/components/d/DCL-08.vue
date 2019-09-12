<template>
    <div class="DCL-08 text-center">
      <p class="top-name-p width-663">DCL-08</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>四等水准测量观测记录表</strong></h3>
      <div class="text-left width-663">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-663">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span>测量范围：<input type="text" v-model="obj.m1"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel">
          <tr >
            <td width="43" valign="center" rowspan="4" ><p align="center">测站编号</p> </td>
            <td width="19" valign="center" rowspan="2" ><p align="center" >后尺 </p></td>
            <td width="46" valign="center" ><p align="center" >下丝 </p></td>
            <td width="23" valign="center" rowspan="2" ><p align="center" >前尺 </p></td>
            <td width="52" valign="center" ><p align="center" >下丝 </p></td>
            <td width="54" valign="center" rowspan="4" ><p align="center" >方向及尺号 </p></td>
            <td width="134" valign="center" colspan="2" rowspan="2" ><p align="center" >标尺读数 </p></td>
            <td width="60" valign="center" rowspan="4" ><p align="center" >K+黑减红 </p></td>
            <td width="84" valign="center" rowspan="4" ><p align="center" >高差中数 </p></td>
            <td width="111" valign="center" rowspan="4" ><p align="center" >备注 </p></td>
          </tr>
          <tr >
            <td width="46" valign="center" ><p align="center" >上丝 </p></td>
            <td width="52" valign="center" ><p align="center" >上丝 </p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p align="center" >后距 </p></td>
            <td width="75" valign="center" colspan="2" ><p align="center" >前距 </p></td>
            <td width="67" valign="center" rowspan="2" ><p align="center" >黑面 </p></td>
            <td width="67" valign="center" rowspan="2" ><p align="center" >红面 </p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p align="center" >视距差d </p></td>
            <td width="75" valign="center" colspan="2" ><p align="center" >&#8721;d </p></td>
          </tr>
          <tr >
            <td width="43" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[0].s1"></p></td>
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s21"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s31"></p></td>
            <td width="54" valign="center" ><p align="center" >后 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[0].s41"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[0].s51"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[0].s61"></p></td>
            <td width="84" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[0].s7"></p></td>
            <td width="111" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[0].s8"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s22"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s32"></p></td>
            <td width="54" valign="center" ><p align="center" >前 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[0].s42"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[0].s52"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[0].s62"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s23"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s33"></p></td>
            <td width="54" valign="center" rowspan="2" ><p align="center" >后－前 </p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[0].s43"></p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[0].s53"></p></td>
            <td width="60" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[0].s63"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s24"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s34"></p></td>
          </tr>
          <tr >
            <td width="43" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[1].s1"></p></td>
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s21"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s31"></p></td>
            <td width="54" valign="center" ><p align="center" >后 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[1].s41"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[1].s51"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[1].s61"></p></td>
            <td width="84" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[1].s7"></p></td>
            <td width="111" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[1].s8"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s22"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s32"></p></td>
            <td width="54" valign="center" ><p align="center" >前 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[1].s42"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[1].s52"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[1].s62"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s23"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s33"></p></td>
            <td width="54" valign="center" rowspan="2" ><p align="center" >后－前 </p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[1].s43"></p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[1].s53"></p></td>
            <td width="60" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[1].s63"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s24"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s34"></p></td>
          </tr>
          <tr >
            <td width="43" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[2].s1"></p></td>
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s21"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s31"></p></td>
            <td width="54" valign="center" ><p align="center" >后 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[2].s41"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[2].s51"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[2].s61"></p></td>
            <td width="84" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[2].s7"></p></td>
            <td width="111" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[2].s8"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s22"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s32"></p></td>
            <td width="54" valign="center" ><p align="center" >前 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[2].s42"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[2].s52"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[2].s62"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s23"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s33"></p></td>
            <td width="54" valign="center" rowspan="2" ><p align="center" >后－前 </p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[2].s43"></p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[2].s53"></p></td>
            <td width="60" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[2].s63"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s24"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s34"></p></td>
          </tr>
          <tr >
            <td width="43" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[3].s1"></p></td>
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s21"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s31"></p></td>
            <td width="54" valign="center" ><p align="center" >后 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[3].s41"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[3].s51"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[3].s61"></p></td>
            <td width="84" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[3].s7"></p></td>
            <td width="111" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[3].s8"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s22"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s32"></p></td>
            <td width="54" valign="center" ><p align="center" >前 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[3].s42"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[3].s52"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[3].s62"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s23"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s33"></p></td>
            <td width="54" valign="center" rowspan="2" ><p align="center" >后－前 </p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[3].s43"></p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[3].s53"></p></td>
            <td width="60" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[3].s63"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s24"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s34"></p></td>
          </tr>
          <tr >
            <td width="43" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[4].s1"></p></td>
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s21"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s31"></p></td>
            <td width="54" valign="center" ><p align="center" >后 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[4].s41"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[4].s51"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[4].s61"></p></td>
            <td width="84" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[4].s7"></p></td>
            <td width="111" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[4].s8"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s22"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s32"></p></td>
            <td width="54" valign="center" ><p align="center" >前 </p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[4].s42"></p></td>
            <td width="67" valign="center" ><p><input type="text" v-model="controlArr[4].s52"></p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="controlArr[4].s62"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s23"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s33"></p></td>
            <td width="54" valign="center" rowspan="2" ><p align="center" >后－前 </p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[4].s43"></p></td>
            <td width="67" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[4].s53"></p></td>
            <td width="60" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[4].s63"></p></td>
          </tr>
          <tr >
            <td width="65" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s24"></p></td>
            <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s34"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-663">测量：<input type="text" class="input-80" v-model="obj.m2">计算：<input type="text" class="input-80" v-model="obj.m3">复核：<input type="text" class="input-80" v-model="obj.m4">监理：<input type="text" class="input-80" v-model="nameList1[1].fullName" disabled>             
       <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
        <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
        <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
        name: "DCL-08",
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
          auditTypeIdArr:[26],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          dateArr:[],
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
                if (item[1].auditTypeId == 26) {
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
          for(var i= 0; i<5;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl8/findById', {
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
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/dcl8/save", this.$qs.stringify({
            BBtDcl8M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl8/update', this.$qs.stringify({
            BBtDcl8M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl8/deleteById', {
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

</style>
