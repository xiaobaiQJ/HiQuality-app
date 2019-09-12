<template>
    <div class="D-69 text-center">
      <p class="top-name-p width-734">D-69</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>隧道洞身开挖情况记录表</strong><strong> </strong></h3>
      <div class="text-left width-734">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-734">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" class="public-tabel">
        <tr >
          <td width="119" valign="center" ><p align="center">隧道名称</p> </td>
          <td width="200" valign="center" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
          <td width="132" valign="center" colspan="2" ><p align="center" >起讫桩号 </p></td>
          <td width="180" valign="center" ><p align="center" ><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >施工时间 </p></td>
          <td width="200" valign="center" >          <div class="block">
            <el-date-picker v-model="obj.m3" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
          <td width="132" valign="center" colspan="2" ><p align="center" >检验时间 </p></td>
          <td width="180" valign="center" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >检查段起讫桩号 </p></td>
          <td width="200" valign="center" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
          <td width="132" valign="center" colspan="2" ><p align="center" >开挖方法与设备 </p></td>
          <td width="180" valign="center" ><p align="center" ><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >调查项目 </p></td>
          <td width="248" valign="center" colspan="2" ><p align="center" >情况记录 </p></td>
          <td width="264" valign="center" colspan="2" ><p align="center" >处治结果记录 </p></td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >开挖面的地质条件（岩质、岩体状态等） </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m7"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m8"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >开挖面的涌水（涌水量、涌水压力及排水的水量、水温、混浊度、PH值、水的比值等） </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m9"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="8" v-model="obj.m10"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >开挖面后方区段的围岩及支护状态 </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="4" v-model="obj.m11"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="4" v-model="obj.m12"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >地表面、地面建筑物及洞口状况 </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="4" v-model="obj.m13"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="4" v-model="obj.m14"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >气象（天候、气温、气压、降雨量等）、地震等情况 </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m15"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m16"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >隧道附近的地表水及地下水情况（指对隧道施工质量有影响的） </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m17"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m18"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="119" valign="center" ><p align="center" >甲烷或其他可燃气体情况 </p></td>
          <td width="248" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="2" v-model="obj.m19"></textarea></p>
          </td>
          <td width="264" valign="center" colspan="2" >
            <p><textarea name="" cols="30" rows="2" v-model="obj.m20"></textarea></p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-734">施工单位技术负责人：<input type="text" class="input-50" v-model="obj.m21">记录：<input type="text" class="input-50" v-model="obj.m22">  监理员：<input type="text" class="input-50" v-model="nameList1[1].fullName" disabled>   
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
        name: "D-69",
    data(){
      return{
        isAdd:true,
        obj:{},
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
        dateArr:[],
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
      this.getData();
    },
    methods:{
      //查询
      getData(){
        this.axios.get('/HiQuality/d69/findById',{
          params:{
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res=>{
          console.log("查询接口")
          console.log(res);
          if(res.data.status==200){
            this.obj = res.data.data;
            this.dateArr = splitDate(this.obj.m24,'-');
          }
        })
      },
      //新增
      addData(){
        this.obj.m24 = joinDate(this.dateArr,'-');
        this.axios.post('/HiQuality/d69/save',this.$qs.stringify({
          BBtD69M:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/d69/update',this.$qs.stringify({
          BBtD69M:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d69/deleteById',{
          params:{
            id:this.id
          }
        }).then(res=>{
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = {}
            this.isAdd = true;
          }
        })
      }

    }
    }
</script>

<style scoped>

</style>
