<template>
  <div class="D21 text-center">
    <p class="top-name-p width-654">D-21</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>锚 索 灌 浆 记 录</strong><strong> </strong></h3>
    <div class="text-left width-654">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-654">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table border="1" cellspacing="0" class="public-tabel">
      <tr >
        <td width="49" valign="center" rowspan="2" >
          锚索<br />编号 </td>
        <td width="102" valign="center" rowspan="2" ><p align="center" >灌浆日期 </p></td>
        <td width="277" valign="center" colspan="5" ><p align="center" >灌浆 </p></td>
        <td width="86" valign="center" rowspan="2" ><p align="center" >灌浆 <br />
          情况 </p></td>
        <td width="48" valign="center" rowspan="2" ><p align="center" >质量评定 </p></td>
        <td width="48" valign="center" rowspan="2" ><p align="center" >备注 </p></td>
      </tr>
      <tr >
        <td width="59" valign="center" ><p align="center" >水泥（kg） </p></td>
        <td width="59" valign="center" ><p align="center" >砂 <br />
          （kg） </p></td>
        <td width="44" valign="center" ><p align="center" >水(kg) </p></td>
        <td width="53" valign="center" ><p align="center" >外掺剂(kg) </p></td>
        <td width="60" valign="center" ><p align="center" >灌浆 <br />
          压力(Kpa) </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="49" valign="center" ><p align="center" ><input type="text" v-model="val.s1"></p></td>
        <td width="102" valign="center" >
          <div class="block">
            <el-date-picker v-model="val.s2" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
        <td width="59" valign="center" ><p align="center" ><input type="text" v-model="val.s3"></p></td>
        <td width="59" valign="center" ><p align="center" ><input type="text" v-model="val.s4"></p></td>
        <td width="44" valign="center" ><p align="center" ><input type="text" v-model="val.s5"></p></td>
        <td width="53" valign="center" ><p align="center" ><input type="text" v-model="val.s6"></p></td>
        <td width="60" valign="center" ><p align="center" ><input type="text" v-model="val.s7"></p></td>
        <td width="86" valign="center" ><p align="center" ><input type="text" v-model="val.s8"></p></td>
        <td width="48" valign="center" ><p align="center" ><input type="text" v-model="val.s9"></p></td>
        <td width="48" valign="center" ><p align="center" ><input type="text" v-model="val.s10"></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-654">施工单位技术负责人:<input type="text" v-model="obj.m1" class="input-60">记录： <input type="text" v-model="obj.m2" class="input-60">    监理员： <input type="text" v-model="nameList1[1].fullName" disabled class="input-60">   日期：
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
      name: "D-21",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          rec: {
              recNo:' ',
            tableId:4,
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
          id: ''
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
      methods:{
        setSubObj(){
          for(var i= 0; i<17;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/d21/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList=res.data.data.sub;
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
        //新增
        addData(){
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d21/save',this.$qs.stringify({
            BBtD21M:JSON.stringify(this.obj),
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
        updateData(){
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d21/update',this.$qs.stringify({
            BBtD21M:JSON.stringify(this.obj)
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
        deleteData(){
          this.axios.get('/HiQuality/d21/deleteById',{
            params:{
              id: this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
              this.getData();
            }
          })
        }

      }
    }
</script>

<style scoped>

</style>
