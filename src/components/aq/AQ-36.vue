<template>
  <div class="AQ-36 text-center main-aq">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>报审表</h3>
    <div class="t-right margin-auto width-623 aq-top-input">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="padding-5px" width="630">
      <tr class="public-tabel">
        <td width="91" valign="top"><p align="center">单位名称</p> </td>
        <td width="193" ><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="83" valign="top"><p align="center">项目名称 </p></td>
        <td width="201" ><input type="text" v-model="obj.m1"></td>
      </tr>
      <tr>
        <td width="568" colspan="4" ><p>&nbsp;</p>
          <p class="t-left p-lineheight">致<input type="text" class="title-input" v-model="obj.m2">（监理单位）： </p>
          <p style="text-indent: 50px;" class="t-left p-lineheight">我方已根据监理计划和监理实施细则的有关规定完成了<input type="text" class="title-input input-105" v-model="obj.m3">，并经我单位项目负责人/技术负责人审查批准，请予以审查。 </p>
           <p style="text-indent: 50px;" class="t-left p-lineheight"> 附； </p>
          <br /><br /><br /><br /><br /><br /><br /><br />
          <p class="t-right p-lineheight">施工单位签章：<input type="text" ></p>
          <p class="t-right p-lineheight">项目经理：<input type="text" v-model="obj.m4"></p>
          <div class="dateDiv t-right p-lineheight">
            <div class="block display-lnl">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-120"
                              size="mini"
                              v-model="obj.m5" type="date"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="4" >
          <p align="left">驻地办专业监理工程师审查意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">专业监理工程师签名：<input type="text" class="" v-model="nameList1[1].fullName" disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="4" >
          <p align="left">驻地办驻地监理工程师审核意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">驻地办高级监理工程师签章：<input type="text" class="" v-model="nameList2[1].fullName" disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="4" >
          <p align="left">总监办总监理工程师审核意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList3[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">总监办总监理工程师签章：<input type="text" class="" v-model="nameList3[1].fullName" disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList3[0].auditTime" disabled class="height-25"></p>
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
    export default {
        name: "AQ-36",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {},
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
          headerInfo: {}, //表头信息
          auditTypeIdArr: [26,25,21],
          nameList: [],
          nameList1: [{}, {}],
          nameList2: [{}, {}],
          nameList3: [{}, {}],
          id: '1',     //主表id
        }
      },
      created() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        }
        //调用获取监理等流程人签字栏数据接口
        this.getSignName(this.auditTypeIdArr, this.rec.id, this.rec.tableId);
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item, index) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 26) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 25) {
                this.nameList2 = item;
              }
              if (item[1].auditTypeId == 21) {
                this.nameList3 = item;
              }
            }
          })
        };
        this.$publicFun.getRecInfo()

      },
      mounted() {
        this.getData();
      },
      computed: {
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq36/findById',{
            params:{
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.axios.get('/HiQuality/aq36/save',{
            params:{
              aq36:this.obj,
              rec:this.rec
            }
          }).then(res=>{
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
          this.axios.get('/HiQuality/aq36/update',{
            params:{
              aq36:this.obj
            }
          }).then(res=>{
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
          this.axios.get('/HiQuality/aq36/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
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
