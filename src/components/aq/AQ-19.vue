<template>
  <div class="AQ-19 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全隐患整改复查申请书</h3>
    <div class="t-right margin-auto width-623">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr class="public-tabel">
        <td width="57" valign="top"><P align="center">单位</P> </td>
        <td width="133" valign="top"><p><input type="text" v-model="headerInfo.unitName" disabled></p></td>
        <td width="51" valign="top"><p>地点 </p></td>
        <td width="138" colspan="2" valign="top"><p><input type="text" v-model="obj.m1"></p></td>
        <td width="80" valign="top"><p>项目名称 </p></td>
        <td width="137" valign="top"><input type="text" v-model="obj.m4"></td>
      </tr>
      <tr>
        <td width="596" colspan="7" valign="top"><p>&nbsp;</p>
          <p align="left">致 <input type="text" class="title-input" v-model="headerInfo.unitName2">（监理单位）： </p>
          <div align="left" style="text-indent: 50px;">根据<el-date-picker v-model="obj.m2" type="date" size="mini"
                            class="input-105"  placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker><span style="margin-left: 60px;">收到的整改意见书，按要求对安全隐患进行整改，请予以复查。</span> <br />
            安全隐患整改情况如下： </div>
             <textarea rows="8" v-model="obj.m3"></textarea>
         </td>
      </tr>
      <tr>
        <td width="284" colspan="4" valign="top">
          <p align="left">施工单位（盖章）：<input type="text" v-model="obj.m5"> </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p align="left">项目经理：
            <el-date-picker v-model="obj.m6" type="date" size="mini"
                            class="input-100"  placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </p>
        </td>
        <td width="312" colspan="3" valign="top">
          <p align="left">整改负责人：<input type="text" v-model="obj.m7">  </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p align="right">
            <el-date-picker v-model="obj.m8" type="date" size="mini"
                            class="input-100"  placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </p>
        </td>
      </tr>
      <tr>
        <td width="284" colspan="4" valign="top">
          <p align="left">驻地办驻地监理工程师意见： </p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p align="right">签章：<input type="text" class="" v-model="nameList1[1].fullName"
                                     disabled></p>
          <p align="right">
            日期：  
            <input type="text" v-model="nameListDataArr1[0]" disabled class="date-input">年
            <input type="text" v-model="nameListDataArr1[1]" disabled class="date-input">月
            <input type="text" v-model="nameListDataArr1[2]" disabled class="date-input">日
          </p>
        </td>
        <td width="312" colspan="3" valign="top">
          <p align="left">专业监理工程师意见： </p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">签名：<input type="text" class="" v-model="nameList2[1].fullName"
                                                           disabled></p>
          <p align="right">
            日期：  
            <input type="text" v-model="nameListDataArr2[0]" disabled class="date-input">年
            <input type="text" v-model="nameListDataArr2[1]" disabled class="date-input">月
            <input type="text" v-model="nameListDataArr2[2]" disabled class="date-input">日
          </p>
        </td>
      </tr>
    </table>
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
        name: "AQ-19",
      data(){
         return{
           isAdd:true,
           //主表对象
           obj:{},
           id:'1',
           dateArr:[],
           dateArr1:[],
           dateArr2:[],
           nameListDataArr1:[],
           nameListDataArr2:[],
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
           headerInfo: {}, //表头信息
           auditTypeIdArr: [38, 25],
           nameList: [],
           nameList1: [{}, {}],
           nameList2: [{}, {}],
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
          this.obj.m9 = this.headerInfo.unitName2;
        }
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        this.$publicFun.getRecInfo()
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        },
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch:{
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 38) {
                  this.nameList1 = item;
                }
                if (item[1].auditTypeId == 25) {
                  this.nameList2 = item;
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
           this.getData();
      },
      methods:{
          //查询
          getData(){
            this.axios.get('/HiQuality/Aq19/findAq19ById',{
              params: {
                projPartsId: this.rec.projPartsId,
                tableId: this.rec.tableId
              }
            }).then(res =>{
              console.log("查询接口");
              console.log(res);
              if(res.data.status == 200){
                this.obj = res.data.data;
                //this.dateArr = splitDate(this.obj.m2,'-');
               // this.dateArr1 = splitDate(this.obj.m6,'-');
                //this.dateArr2 = splitDate(this.obj.m8,'-');
                this.isAdd = false;
              }
            })
          },
        //插入
        addData(){
          if(!this.isAdd){
            return false;
          }
          //this.obj.m2 = joinDate(this.dateArr,'-');
         // this.obj.m6 = joinDate(this.dateArr1,'-');
         // this.obj.m8 = joinDate(this.dateArr2,'-');
          this.axios.post("/HiQuality/Aq19/saveAq19", this.$qs.stringify({
            aq19:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
          .then(res => {
              console.log("插入接口")
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },
        //修改
        updateData() {
          //this.obj.m2 = joinDate(this.dateArr,'-');
          //this.obj.m6 = joinDate(this.dateArr1,'-');
          //this.obj.m8 = joinDate(this.dateArr2,'-');
          this.axios.post('/HiQuality/Aq19/updateAq19', this.$qs.stringify({
            aq19:JSON.stringify(this.obj)
          }))
          .then(res => {
              console.log("修改接口");
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                if (res.data.status == 200) {
                  this.isAdd = false;
                  this.$tost.edit();
                  this.$skip.skipProcess();
                }
              }
            })
        },
        //删除
        deleteData() {
          this.axios.delete('/HiQuality/Aq19/deleteAq19', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {};
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
