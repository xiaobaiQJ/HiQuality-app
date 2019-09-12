<template>
    <div class="DLJ-02 text-center main-d crosswise-a">
      <p class="top-name-p width-991">DLJ-02</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>砂、碎石垫层施工原始记录</strong></h3>
      <div class="text-left width-991">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-991">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="0" cellspacing="0" class="public-tabel" >
          <tr >
            <td width="105" valign="center" rowspan="2" ><p align="center" >施工起讫 <br/>桩号及部位 </p></td>
            <td width="103" valign="center" rowspan="2" ><p align="center" >材料规格及<br/>质量情况 </p></td>
            <td width="73" valign="center" rowspan="2" ><p align="center" >垫层底<br/>土质 </p></td>
            <td width="73" valign="center" rowspan="2" ><p align="center" >垫层 <br />
              长度 </p></td>
            <td width="73" valign="center" rowspan="2" ><p align="center" >垫层 <br />
              宽度 </p></td>
            <td width="73" valign="center" rowspan="2" ><p align="center" >垫层 <br />
              厚度 </p></td>
            <td width="73" valign="center" rowspan="2" ><p align="center" >垫层护砌<br/>情况 </p></td>
            <td width="73" valign="center" rowspan="2" ><p align="center" >分层压实<br/>情况 </p></td>
            <td width="89" valign="center" rowspan="2" ><p align="center" >反滤层 <br />
              情况 </p></td>
            <td width="75" valign="center" rowspan="2" ><p align="center" >外观 <br />
              情况 </p></td>
            <td width="66" valign="center" rowspan="2" ><p align="center" >施 工<br />
              日 期 </p></td>
            <td width="66" valign="center" rowspan="2" ><p align="center" >备  注 </p></td>
          </tr>
          <tr ></tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="105"><p ><input type="text" v-model="val.s1"></p></td>
            <td width="103"><p ><input type="text" v-model="val.s2"></p></td>
            <td width="73"><p ><input type="text" v-model="val.s3"></p></td>
            <td width="73"><p ><input type="text" v-model="val.s4"></p></td>
            <td width="73" ><p ><input type="text" v-model="val.s5"></p></td>
            <td width="73"><p ><input type="text" v-model="val.s6"></p></td>
            <td width="73"><p ><input type="text" v-model="val.s7"></p></td>
            <td width="73"><p ><input type="text" v-model="val.s8"></p></td>
            <td width="89"><p ><input type="text" v-model="val.s9"></p></td>
            <td width="75"><p ><input type="text" v-model="val.s10"></p></td>
            <td width="66" >
              <div class="block">
                <el-date-picker v-model="val.s11" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
            <td width="66" ><p ><input type="text" v-model="val.s12"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-991">现场技术负责人：<input type="text" v-model="obj.m1" class="input-200">记录：<input type="text"  v-model="obj.m2" class="input-200">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-200"> 日期：<input type="text" v-model="nameList1[0].auditTime" disabled><br /><br />
        注：1、不大于200m的自然路段或200m施工段或坑(槽)为填表段落，分层压实时逐层填写于本表各行中。
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
        name: "DLJ-02",
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
          id: '15'

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
                  //this.m15DataArr = splitDate(this.nameList1[0].auditTime, '-');
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
        this.setSubObj()
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<12;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/dlj2/findById',{
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
          this.axios.post('/HiQuality/dlj2/save',this.$qs.stringify({
            BBtDlj2M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr
          this.axios.post('/HiQuality/dlj2/update',this.$qs.stringify({
            BBtDlj2M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dlj2/deleteById',{
            params:{
              id: this.id
            }
          }).then(res=>{
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
