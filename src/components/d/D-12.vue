<template>
  <div class="D-12 text-center main-d lengthways-a ad-textarea table-padding5px">
    <p class="top-name-p width-618">D-12</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>混凝土构件（产品）检验记录</strong><strong> </strong></h3>
    <div class="text-left width-618">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-618">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" >
      <tr >
        <td width="600" valign="top" colspan="5" ><br />
          构件名称：<input type="text" v-model="obj.m1">规格：<input type="text" v-model="obj.m2">
          <p >&nbsp;</p>
          <p >采用图名及图号：<input type="text" v-model="obj.m3">混凝土设计标号： <input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="94" valign="center" ><p align="center" >构件编号 </p></td>
        <td width="151" valign="center" ><p align="center" >外形几何尺寸 </p></td>
        <td width="141" valign="center" ><p align="center" >混凝土28d试件强度（MPa） </p></td>
        <td width="104" valign="center" ><p align="center" >质量评定 </p></td>
        <td width="108" valign="center" ><p align="center" >备  注 </p></td>
      </tr>
      <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
        <td width="94" valign="top" ><input type="text" v-model="val.s1"></td>
        <td width="151" valign="top" ><input type="text" v-model="val.s2"></td>
        <td width="141" valign="top" ><input type="text" v-model="val.s3"></td>
        <td width="104" valign="top" ><input type="text" v-model="val.s4"></td>
        <td width="108" valign="top" ><input type="text" v-model="val.s5"></td>
      </tr>
      <tr >
        <td width="387" valign="top" colspan="3" ><p >检查意见： </p>
          <p ><textarea name="" cols="50" rows="5" v-model="obj.m5"></textarea></p></td>
        <td width="212" valign="top" colspan="2" ><p >检查人员： </p>
          <p ><textarea name="" cols="50" rows="5" v-model="obj.m6"></textarea></p>
        </td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-618">施工单位技术负责人：<input type="text" v-model="obj.m7" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">  
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
        name: "D-12",
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id: '',
          //日期参数
          dateArr: []
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
          this.axios.get('/HiQuality/d12/findById',{
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
              this.isAdd = false
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
          this.obj.m9 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d12/save',this.$qs.stringify({
            BBtD12M:JSON.stringify(this.obj),
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
          this.obj.m9 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d12/update',this.$qs.stringify({
            BBtD12M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d12/deleteById',{
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
