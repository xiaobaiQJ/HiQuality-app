<template>
    <div class="DCL-05 text-center main-d crosswise-a">
      <p class="top-name-p width-991">DCL-05 </p>
      <p> 贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p> 黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
      <p>  <strong>施工加密水准点测量记录表</strong></p>
      <div class="public-tilte flex-r margin-auto width-991">
        <div>
          <p>承包单位：<input type="text" v-model="headerInfo.unitName" class="input-300" disabled></p>
        </div>
        <div>
          <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled class="input-300"></p>
        </div>
        <div>
          <p>编号：<input type="text" v-model="rec.recNo"></p>
        </div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel" >
          <tr >
            <td width="281" valign="center" colspan="3" ><p align="center" >施工水准点BM&#8217;</p> </td>
            <td width="281" valign="center" colspan="3" ><p align="center" >引用设计时路线水准点BM </p></td>
            <td width="95" valign="center" rowspan="2" ><p align="center" >L(KM)或n(个) </p></td>
            <td width="95" valign="center" rowspan="2" ><p align="center" >&#9651;容(mm) </p></td>
            <td width="95" valign="center" rowspan="2" ><p align="center" >&#9651;测(mm) </p></td>
            <td width="95" valign="center" rowspan="2" ><p align="center" >说明 </p></td>
          </tr>
          <tr >
            <td width="93" valign="center" ><p align="center" >编号 </p></td>
            <td width="93" valign="center" ><p align="center" >位置 </p></td>
            <td width="93" valign="center" ><p align="center" >高程 </p></td>
            <td width="93" valign="center" ><p align="center" >编号 </p></td>
            <td width="93" valign="center" ><p align="center" >位置 </p></td>
            <td width="93" valign="center" ><p align="center" >高程 </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="93" valign="center" ><input type="text" v-model="val.s1"></td>
            <td width="93" valign="center" ><input type="text" v-model="val.s2"></td>
            <td width="93" valign="center" ><input type="text" v-model="val.s3"></td>
            <td width="93" valign="center" ><input type="text" v-model="val.s4"></td>
            <td width="93" valign="center" ><input type="text" v-model="val.s5"></td>
            <td width="93" valign="center" ><input type="text" v-model="val.s6"></td>
            <td width="95" valign="center" ><input type="text" v-model="val.s7"></td>
            <td width="95" valign="center" ><input type="text" v-model="val.s8"></td>
            <td width="95" valign="center" ><input type="text" v-model="val.s9"></td>
            <td width="95" valign="top" rowspan="9" v-if="index===0">
              <ol>
                <li>L及n为BM&#8217;BM间的测段距离或测站数; </li>
                <li>&#9651;容为容许闭合差,&#9651;测为实测的闭合差或附合差. </li>
              </ol>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-991">监理单位：<input type="text" v-model="headerInfo.unitName2" disabled class="input-400">测量范围或桩号：<input type="text" v-model="obj.m1" class="input-400">
      </p>
        <p class="bot-hint-p width-991">测量：<input type="text" v-model="obj.m2" class="input-160">计算：<input type="text" v-model="obj.m3" class="input-160">复核：<input type="text" v-model="obj.m4" class="input-160">监理：<input type="text" v-model="nameList1[1].fullName" disabled class="input-160">  
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
  import {splitDate,joinDate} from '../../utils/utils'
    export default {
        name: "DCL-05",
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
          id: '1',
          m6DateArr:[]
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
        this.setSubObj();
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/dcl5/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data.main;
              this.m6DateArr = splitDate(this.obj.m6,'-');
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
          this.obj.m6 = joinDate(this.m6DateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dcl5/save',this.$qs.stringify({
            BBtDcl5M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl5/update',this.$qs.stringify({
            BBtDcl5M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl5/deleteById',{
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
