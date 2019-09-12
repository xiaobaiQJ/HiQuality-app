<template>
    <div class="DCL-06 text-center main-d lengthways-a">
      <p class="top-name-p width-682">DCL-06</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>一般水准测量记录</strong></h3>
      <div class="text-left width-682">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-682">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel ad-textarea">
          <tr>
            <td width="100" valign="center" ><p align="center">工程名称</p> </td>
            <td width="276" valign="center" colspan="4" ><p><input type="text" v-model="obj.m1"></p></td>
            <td width="86" valign="center" ><p align="center" >施工日期 </p></td>
            <td width="180" valign="center" colspan="3" >          <div class="block">
              <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="100" valign="center" ><p align="center" >桩号或部位 </p></td>
            <td width="544" valign="center" colspan="8" ><p><input type="text" v-model="obj.m3"></p></td>
          </tr>
          <tr >
            <td width="100" valign="center" rowspan="2" ><p align="center" >测站编号 </p></td>
            <td width="150" valign="center" colspan="2" ><p align="center" >水准尺读数（m） </p></td>
            <td width="64" valign="center" rowspan="2" ><p align="center" >仪器高（m） </p></td>
            <td width="61" valign="center" rowspan="2" ><p align="center" >实际高程（m） </p></td>
            <td width="86" valign="center" rowspan="2" ><p align="center" >设计高程（m） </p></td>
            <td width="86" valign="center" colspan="2" ><p align="center" >高 差 <br />
              (mm) </p></td>
            <td width="93" valign="center" rowspan="2" ><p align="center" >备 注 </p></td>
          </tr>
          <tr >
            <td width="81" valign="center" ><p align="center" >后视 </p></td>
            <td width="68" valign="center" ><p align="center" >前视 </p></td>
            <td width="43"obj ><p align="center" >＋ </p></td>
            <td width="43"obj ><p align="center" >－ </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="100"obj ><input type="text" v-model="val.s1"></td>
            <td width="81"obj ><input type="text" v-model="val.s2"></td>
            <td width="68"obj ><input type="text" v-model="val.s3"></td>
            <td width="64"obj ><input type="text" v-model="val.s4"></td>
            <td width="61"obj ><input type="text" v-model="val.s5"></td>
            <td width="86"obj ><input type="text" v-model="val.s6"></td>
            <td width="43"obj ><input type="text" v-model="val.s7"></td>
            <td width="43"obj ><input type="text" v-model="val.s8"></td>
            <td width="93"obj ><input type="text" v-model="val.s9"></td>
          </tr>
          <tr class="table-padding5px">
            <td width="644"obj colspan="9" >
              <p class="t-left">测量简图或说明：<textarea name="" cols="50" rows="5" v-model="obj.m4"></textarea></p>
            </td>
          </tr>
          <tr class="table-padding5px">
            <td width="644"obj colspan="9" >
              <p class="t-left">闭合差（mm）：<input type="text" v-model="obj.m5" class="input-160">（H终-H始） x1000 =<input type="text" v-model="obj.m6" class="input-160"></p>
            </td>
          </tr>
          <tr class="table-padding5px">
            <td width="644"obj colspan="9" >
              <p class="t-left">允许误差计算（mm）：<input type="text" v-model="obj.m7" class="input-160">fh容=&#177;6&#8730;n =<input type="text" v-model="obj.m8" class="input-160"></p>
            </td>
          </tr>
          <tr class="table-padding5px">
            <td width="644"obj colspan="9" >
              <p class="t-left">监理意见：</p>
              <textarea name="" cols="50" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
            </td>
          </tr>
        </table>
      </div>
      <div class="bot-hint-p width-682">测量：<input type="text" v-model="obj.m10" class="input-200">记录：<input type="text" v-model="obj.m11" class="input-140">
        <div class="block display-lnl height-25 input-160">
          <span class="demonstration">日期：</span>
          <el-date-picker class="input-140"
                          size="mini"
                          v-model="obj.m12" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </div>
      <p class="bot-hint-p width-682"> 监理：<input type="text" v-model="nameList1[1].fullName" disabled class="input-200">日期：<input type="text" class="date-input height-25" v-model="nameList1[0].auditTime" disabled>
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
        name: "DCL-06",
      data(){
        return{
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
          auditTypeIdArr:[26],
          nameList:[],
          nameList1:[{},{}],
          headerInfo:{}, //表头信息
          id: '1'

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
          for(var i= 0; i<11;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/dcl6/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
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
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dcl6/save',this.$qs.stringify({
            BBtDcl6M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl6/update',this.$qs.stringify({
            BBtDcl6M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl6/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
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
