<template>
  <div class="AQ-28 text-center">
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全生产费用支付申请表</h3>
    <div class="text-left width-696">
      <span>施工单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-696">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table cellspacing="0" cellpadding="0">
      <tr>
        <td colspan="2" width="708" align="left">致<input type="text" v-model="obj.m1" class="title-input input-80">（监理单位）：<br/>
          <br/>
          我方已完成了 本季度工程项目安全作业环境及安全生产 工作，按施工合同规定，项目公司应在
          <div class="block display-lnl height-25 input-160">
            <el-date-picker class="input-140"
                            size="mini"
                            v-model="obj.m2"
                            type="date"
                            placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
          前支付该项工程款共（大写）<input type="text" v-model="obj.m3" class="title-input input-80">，小写：（<input type="text" v-model="obj.m4" class="input-80">元），现报上<input type="text" v-model="obj.m5">工程付款申请表，请予以审查并开具工程款支付证书。
        </td>
      </tr>
      <tr>
        <td colspan="2" width="708">
          <p class="t-left">附件：1、安全技术措施费用计量报审表；  </p>
          <p class="t-left pad-left">2、计算方法； </p>
          <p class="t-left pad-left">3、其它相关证明资料；</p>
          <br/>
          <br/>
            <div align="right">施工单位（章）：<input type="text"><br/>
            项目经理：<input type="text" v-model="obj.m6"><br/>
            日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：
              <div class="block display-lnl">
                <el-date-picker v-model="obj.m7" type="date" size="mini" class="input-120" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </div>
        </td>
      </tr>
      <tr>
        <td colspan="2" width="708">
          <p class="t-left">驻地办安全专业监理工程师意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <br/>
          <br/>
          <br/>
          <p align="right"> 签字：<input type="text" class="input-105" v-model="nameList1[1].fullName" disabled>日期：<input type="text" class="input-105" v-model="nameList1[0].auditTime" disabled></p>
        </td>
      </tr>
      <tr>
        <td colspan="2" width="708">
          <p class="t-left">驻地办驻地监理工程师意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <br/>
          <br/>
          <br/>
          <p align="right"> 签字：<input type="text" class="input-105" v-model="nameList2[1].fullName" disabled>日期：<input type="text" class="input-105" v-model="nameList2[0].auditTime" disabled></p>
        </td>
      </tr>
      <tr>
        <td colspan="2" width="708">
          <p class="t-left">总监办意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList3[0].auditOpinion" disabled></textarea>
          <br/>
          <br/>
          <br/>
          <p align="right"> 签字：<input type="text" class="input-105" v-model="nameList3[1].fullName" disabled>日期：<input type="text" class="input-105" v-model="nameList3[0].auditTime" disabled></p>
        </td>
      </tr>
      <tr>
        <td width="341">
          <p class="t-left">项目公司质安环保部意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList4[0].auditOpinion" disabled></textarea>
          <br/>
          <br/>
          <br/>
          <br/>
          <p align="right"> 签字：<input type="text" class="input-105" v-model="nameList4[1].fullName" disabled>日期：<input type="text" class="input-105" v-model="nameList4[0].auditTime" disabled></p>
        </td>
        <td width="367">
          <p class="t-left">项目公司分管领导意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList5[0].auditOpinion" disabled></textarea>
          <br/>
          <br/>
          <br/>
          <br/>
          <p align="right"> 签字：<input type="text" class="input-105" v-model="nameList5[1].fullName" disabled>日期：<input type="text" class="input-105" v-model="nameList5[0].auditTime" disabled></p>
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-696">注：本表由承包单位填写，一式五份，施工单位、驻地办、总监办各一份，项目公司二份。</p>
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
    name: "AQ-28",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {},
        //rec表
        rec: {
          recNo: '',
          tableId: '',
          contracId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        headerInfo: {}, //表头信息
        auditTypeIdArr: [38, 25,21,15,6],
        nameList: [],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        nameList3: [{}, {}],
        nameList4: [{}, {}],
        nameList5: [{}, {}],
        id: '1',     //主表id
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
      this.getSignName(this.auditTypeIdArr, this.rec.id, this.rec.tableId);
      //获取监理等流程人签字栏数据
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
            if (item[1].auditTypeId == 21) {
              this.nameList3 = item;
            }
            if (item[1].auditTypeId == 15) {
              this.nameList4 = item;
            }if (item[1].auditTypeId == 6) {
              this.nameList5 = item;
            }

          }
        })
      };
      this.$publicFun.getRecInfo()
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
    mounted() {
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/aq28/findById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;
          }
        })
      },
      //新增
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.get('/HiQuality/aq28/save',{
          params:{
            aq28:this.obj,
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
      updateData() {
        this.obj.m2 = joinDate(this.dateArr, '-');
        this.axios.get('/HiQuality/aq28/update',{
          params:{
            aq28:this.obj
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
      deleteData() {
        this.axios.get('/HiQuality/aq28/deleteById',{
          params:{
            id:this.id,
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
  .pad-left {
    padding-left: 50px;
  }
</style>
