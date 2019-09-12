<template>
  <div class="D-03 text-center main-a ">
    <p class="top-name-p width-696">D-03</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center" ><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center" ><strong>回弹弯沉值检测记录</strong><strong> </strong></h3>
    <div class="text-left width-696">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-696">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" width="696" class="public-tabel">
      <tr >
        <td width="203" valign="center" colspan="5" >路面状况：<input class="input-80" type="text" v-model="obj.m1"></td>
        <td width="216" valign="center" colspan="5" ><p >气候：<input  type="text" v-model="obj.m2" class="input-80"></p></td>
        <td width="232" valign="center" colspan="5" ><p >季节系数：<input class="input-80" type="text" v-model="obj.m3"> </p></td>
      </tr>
      <tr >
        <td width="203" valign="center" colspan="5" ><p >试验车型： <input class="input-80" type="text" v-model="obj.m4"></p></td>
        <td width="216" valign="center" colspan="5" >
          <p >路面湿度： <input type="text" v-model="obj.m5" class="input-80"></p>
        </td>
        <td width="232" valign="center" colspan="5" ><p >设计值：<input class="input-80" type="text" v-model="obj.m6"> </p></td>
      </tr>
      <tr class="public-tabel">
        <td width="129" valign="center" colspan="3" ><p align="center" >距中桩     (m) </p></td>
        <td width="130" valign="center" colspan="4" ><p align="center" >距中桩    (m) </p></td>
        <td width="108" valign="center" rowspan="2" ><p align="center" >左   右 <br />
          桩   号 </p></td>
        <td width="137" valign="center" colspan="4" ><p align="center" >距中桩      (m) </p></td>
        <td width="146" valign="center" colspan="3" ><p align="center" >距中桩       (m) </p></td>
      </tr>
      <tr class="public-tabel">
        <td width="43" valign="center" ><p align="center" >R1 </p></td>
        <td width="43" valign="center" ><p align="center" >R2 </p></td>
        <td width="43" valign="center" ><p align="center" >RI </p></td>
        <td width="43" valign="center" ><p align="center" >R1 </p></td>
        <td width="43" valign="center" colspan="2" ><p align="center" >R2 </p></td>
        <td width="43" valign="center" ><p align="center" >RI </p></td>
        <td width="47" valign="center" ><p align="center" >R1 </p></td>
        <td width="47" valign="center" colspan="2" ><p align="center" >R2 </p></td>
        <td width="42" valign="center" ><p align="center" >RI </p></td>
        <td width="51" valign="center" ><p align="center" >R1 </p></td>
        <td width="47" valign="center" ><p align="center" >R2 </p></td>
        <td width="47" valign="center" ><p align="center" >RI </p></td>
      </tr>
      <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
        <td width="43" valign="center" ><input type="text" v-model="val.s1"></td>
        <td width="43" valign="center" ><input type="text" v-model="val.s2"></td>
        <td width="43" valign="center" ><input type="text" v-model="val.s3"></td>
        <td width="43" valign="center" ><input type="text" v-model="val.s4"></td>
        <td width="43" valign="center" colspan="2" ><input type="text" v-model="val.s5"></td>
        <td width="43" valign="center" ><input type="text" v-model="val.s6"></td>
        <td width="108" valign="center" ><input type="text" v-model="val.s7"></td>
        <td width="47" valign="center" ><input type="text" v-model="val.s8"></td>
        <td width="47" valign="center" colspan="2" ><input type="text" v-model="val.s9"></td>
        <td width="42" valign="center" ><input type="text" v-model="val.s10"></td>
        <td width="51" valign="center" ><input type="text" v-model="val.s11"></td>
        <td width="47" valign="center" ><input type="text" v-model="val.s12"></td>
        <td width="47" valign="center" ><input type="text" v-model="val.s13"></td>
      </tr>
      <tr class="table-padding5px">
        <td width="652" valign="center" colspan="15" ><p class="t-left">资料计算： </p>
          <p ><textarea name="" cols="50" rows="5" v-model="obj.m7"></textarea></p>
          <p ></p></td>
      </tr>
      <tr class="table-padding5px">
        <td width="652" valign="center" colspan="15" ><p class="t-left">参检人员： </p>
          <p ><textarea name="" cols="50" rows="5" v-model="obj.m8"></textarea></p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-696">施工单位技术负责人：<input type="text" v-model="obj.m9" class="input-50"> 记录：<input type="text" v-model="obj.m10" class="input-50"> 计算：<input type="text" v-model="obj.m11" class="input-50"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50"> 日期：<input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日</p>
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
  import {splitDate} from '../../utils/utils'
    export default {
        name: "D-03",
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
          id: '1'

        }
      },

      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
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
          for(var i= 0; i<14;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/d3/findById',{
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d3/save',this.$qs.stringify({
            BBtD3M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d3/update',this.$qs.stringify({
            BBtD3M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d3/deleteById',{
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
