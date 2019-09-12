<template>
  <div class="D-45 text-center">
    <p class="top-name-p width-991">D-45</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>构 件 压 浆 记 录</strong><strong> </strong></h3>
    <div class="public-tilte flex-r margin-auto width-991">
      <div>
        <p>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></p>
        <p>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></p>
      </div>
      <div>
        <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></p>
        <p>构件名称及编号：<input type="text" v-model="obj.m1"></p>
      </div>
      <div>
        <p>编号：<input type="text" v-model="rec.recNo"></p>
        <p>压浆断面编号：<input type="text" v-model="obj.m2"></p>
      </div>
    </div>
    <table border="1" cellspacing="0">
      <tr >
        <td width="37" valign="center" rowspan="3" ><br />
          孔道编号 </td>
        <td width="283" valign="center" colspan="5" ><p align="center" >第一次压浆 </p></td>
        <td width="75" valign="center" rowspan="3" ><p align="center" >停留 <br />
          时间（min） </p></td>
        <td width="567" valign="center" colspan="11" ><p align="center" >第二次压浆 </p></td>
      </tr>
      <tr >
        <td width="47" valign="center" rowspan="2" ><p align="center" >压浆方向 </p></td>
        <td width="47" valign="center" rowspan="2" ><p align="center" >时间起止 </p></td>
        <td width="85" valign="center" rowspan="2" ><p align="center" >压 力 <br />
          （MPa） </p></td>
        <td width="56" valign="center" rowspan="2" ><p align="center" >通 过 </p></td>
        <td width="47" valign="center" rowspan="2" ><p align="center" >冒浆情况 </p></td>
        <td width="56" valign="center" colspan="2" rowspan="2" ><p align="center" >压浆方向 </p></td>
        <td width="47" valign="center" rowspan="2" ><p align="center" >时间起止 </p></td>
        <td width="85" valign="center" rowspan="2" ><p align="center" >压 力（MPa） </p></td>
        <td width="47" valign="center" rowspan="2" ><p align="center" >通过 </p></td>
        <td width="56" valign="center" rowspan="2" ><p align="center" >冒浆情况 </p></td>
        <td width="274" valign="center" colspan="5" ><p align="center" >处理意见 </p></td>
      </tr>
      <tr >
        <td width="54" valign="top" ><p >压浆情 况 </p></td>
        <td width="54" valign="top" ><p >净压时 间 </p></td>
        <td width="54" valign="center" ><p align="center" >压力 </p></td>
        <td width="54" valign="center" ><p align="center" >通 过 </p></td>
        <td width="54" valign="center" ><p align="center" >冒浆情况 </p></td>
      </tr>
      <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
        <td width="37" valign="top" ><p><input type="text" v-model="val.s1"></p></td>
        <td width="47" valign="top" ><p><input type="text" v-model="val.s2"></p></td>
        <td width="47" valign="top" ><p><input type="text" v-model="val.s3"></p></td>
        <td width="85" valign="top" ><p><input type="text" v-model="val.s4"></p></td>
        <td width="56" valign="top" ><p><input type="text" v-model="val.s5"></p></td>
        <td width="47" valign="top" ><p><input type="text" v-model="val.s6"></p></td>
        <td width="75" valign="top" ><p><input type="text" v-model="val.s7"></p></td>
        <td width="56" valign="top" colspan="2" ><p><input type="text" v-model="val.s8"></p></td>
        <td width="47" valign="top" ><p><input type="text" v-model="val.s9"></p></td>
        <td width="85" valign="top" ><p><input type="text" v-model="val.s10"></p></td>
        <td width="47" valign="top" ><p><input type="text" v-model="val.s11"></p></td>
        <td width="56" valign="top" ><p><input type="text" v-model="val.s12"></p></td>
        <td width="54" valign="top" ><p><input type="text" v-model="val.s13"></p></td>
        <td width="54" valign="top" ><p><input type="text" v-model="val.s14"></p></td>
        <td width="54" valign="top" ><p><input type="text" v-model="val.s15"></p></td>
        <td width="54" valign="top" ><p><input type="text" v-model="val.s16"></p></td>
        <td width="54" valign="top" ><p><input type="text" v-model="val.s17"></p></td>
      </tr>
      <tr >
        <td width="417" valign="top" colspan="8" ><p style="text-align: left;">水泥名称及编号：<input type="text" v-model="obj.m3" class="input-80">空气温度：<input type="text" v-model="obj.m4" class="width-30">（&#186;C） <br />
          剂量名称及剂量：<input type="text" v-model="obj.m5" class="input-80"> 水灰比：<input type="text" v-model="obj.m6" class="input-80"><br />
          水泥流动度：<input type="text" v-model="obj.m7" class="width-30">  m/s   水温：<input type="text" v-model="obj.m8" class="width-30">（&#186;C） 水率：<input type="text" v-model="obj.m9" class="width-30"> <br />
          压浆温度：<input type="text" v-model="obj.m10" class="width-30">（&#186;C）  构件水泥（压浆）用量：<input type="text" v-model="obj.m11" class="width-30"> Kg </p>
        </td>
        <td width="35" valign="center" ><p align="center" >备 </p>
          <p align="center" >注 </p></td>
        <td width="510" valign="top" colspan="9" ><p >压浆顺序草图： </p>
          <p ><textarea name="" cols="30" rows="3" v-model="obj.m12"></textarea></p>
        </td>
      </tr>
    </table>
  <p class="bot-hint-p width-991">施工单位技术负责人：<input type="text" v-model="obj.m13" class="input-80">压浆负责人：<input type="text" v-model="obj.m14" class="input-80">记录：<input type ="text" v-model="obj.m15" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
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
        name: "D-45",
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          dateArr: [],
          id: '1'     //主表id
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
          this.axios.get('/HiQuality/d45/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.dateArr = splitDate(this.obj.m17,'-');
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d45/save',this.$qs.stringify({
            BBtD45M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d45/update',this.$qs.stringify({
            BBtD45M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d45/deleteById', {
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
