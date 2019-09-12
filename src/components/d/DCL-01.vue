<template>
    <div class="DCL-01 text-center">
      <p class="top-name-p width-1023">DCL-01</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <p><strong>路线导线测量（复测）表</strong></p>
      <div class="text-left width-1023">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1023">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel" >
          <tr >
            <td width="84" valign="center" ><p align="center">项目名称</p> </td>
            <td width="377" valign="center" colspan="6" ><p><input type="text" v-model="obj.m1"></p></td>
            <td width="102" valign="center" colspan="3" ><p align="center" >桩号及部位 </p></td>
            <td width="410" valign="center" colspan="6" ><p><input type="text" v-model="obj.m2"></p></td>
          </tr>
          <tr >
            <td width="84" valign="center" rowspan="2" ><p align="center" >导线点 <br />
              编  号 </p></td>
            <td width="136" valign="center" colspan="2" ><p align="center" >设计坐标 </p></td>
            <td width="133" valign="center" colspan="2" ><p align="center" >实测坐标 </p></td>
            <td width="126" valign="center" colspan="4" ><p align="center" >坐标差 </p></td>
            <td width="84" valign="center" rowspan="2" ><p align="center" >设计距离 <br />
              (m) </p></td>
            <td width="84" valign="center" rowspan="2" ><p align="center" >实测距离 <br />
              (m) </p></td>
            <td width="84" valign="center" rowspan="2" ><p align="center" >距离偏差(m) </p></td>
            <td width="77" valign="center" colspan="2" rowspan="2" ><p align="center" >设 计 <br />
              夹 角 <br />
              (&#176;&#8242;&#8243;) </p></td>
            <td width="79" valign="center" rowspan="2" ><p align="center" >实 测 <br />
              夹 角 <br />
              (&#176;&#8242;&#8243;) </p></td>
            <td width="86" valign="center" rowspan="2" ><p align="center" >角度偏差(&#8243;) </p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >X </p></td>
            <td width="70" valign="center" ><p align="center" >Y </p></td>
            <td width="62" valign="center" ><p align="center" >X </p></td>
            <td width="70" valign="center" ><p align="center" >Y </p></td>
            <td width="63" valign="center" ><p align="center" >&#9651;X <br />
              (mm) </p></td>
            <td width="63" valign="center" colspan="3" ><p align="center" >&#9651;Y <br />
              (mm) </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="84" valign="center" ><input type="text" v-model="val.s1"></td>
            <td width="66" valign="center" ><input type="text" v-model="val.s2"></td>
            <td width="70" valign="center" ><input type="text" v-model="val.s3"></td>
            <td width="62" valign="center" ><input type="text" v-model="val.s4"></td>
            <td width="70" valign="center" ><input type="text" v-model="val.s5"></td>
            <td width="63" valign="center" ><input type="text" v-model="val.s6"></td>
            <td width="62" valign="center" colspan="2" ><input type="text" v-model="val.s7"></td>
            <td width="84" valign="center" colspan="2" ><input type="text" v-model="val.s8"></td>
            <td width="84" valign="center" ><input type="text" v-model="val.s9"></td>
            <td width="84" valign="center" ><input type="text" v-model="val.s10"></td>
            <td width="76" valign="center" ><input type="text" v-model="val.s11"></td>
            <td width="79" valign="center" colspan="2" ><input type="text" v-model="val.s12"></td>
            <td width="86" valign="center" ><input type="text" v-model="val.s13"></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-1023">测 量：<input type="text" v-model="obj.m3">复 核：<input type="text" v-model="obj.m4">监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled>日 期：
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
        name: "DCL-01",
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
      mounted(){
        this.setSubObj()
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<10;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/dcl1/findById',{
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
          this.axios.post('/HiQuality/dcl1/save',this.$qs.stringify({
            BBtDcl1M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl1/update',this.$qs.stringify({
            BBtDcl1M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl1/deleteById',{
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
