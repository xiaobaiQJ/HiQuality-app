<template>
  <div class="AQ-18 text-center">
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>施工现场安全检查整改反馈书</h3>
    <div class="t-right margin-auto width-559">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="568" colspan="2" valign="top"><p>&nbsp;</p>
          <p align="left">致<u>                         </u>（监理单位）： </p>
          <p align="left" style="text-indent: 50px;">根据<input type="text" class="date-input" v-model="dataArr[0]">年
            <input type="text" class="date-input" v-model="dataArr[1]">月
            <input type="text" class="date-input" v-model="dataArr[2]">日 收到的整改意见书，按要求整改如下：
          </p>
          <p><textarea name="" cols="30" rows="10" v-model="obj.m4"></textarea></p>
          <p align="left" style="text-indent: 50px;">附件： </p>
          <p align="left" style="margin-left: 120px;"> 施工现场安全检查整改方案 <textarea name="" cols="30" rows="6"
                                                                              v-model="obj.m5"></textarea></p>
          <p class="t-right p-lineheight">施工单位（公章）：<input type="text" v-model="obj.m6"></p>
          <p class="t-right p-lineheight">项目经理：<input type="text" v-model="obj.m7"></p>
          <div class="dateDiv t-right p-lineheight">
            <div class="block display-lnl">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-120"
                              size="mini"
                              v-model="obj.m8" type="date"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="284" valign="top">
          <p align="left">整改完成人：<input type="text" v-model="obj.m9"></p>
          <br/>
          <br/>
          <p align="right">日期：<input type="text" v-model="obj.m10" class="input-80"></p>
        </td>
        <td width="284" valign="top">
          <p align="left">整改验收人：<input type="text" v-model="obj.m11"></p>
          <br/>
          <br/>
          <p align="right">日期：<input type="text" v-model="obj.m12" class="input-80"></p>
        </td>
      </tr>
      <tr>
        <td width="284" valign="top">
          <p align="left">整改完成时间：<input type="text" v-model="obj.m13"></p>
          <br/>
          <br/>
        </td>
        <td width="284" valign="top">
          <p align="left">整改负责人：<input type="text" v-model="obj.m14"></p>
          <br/>
          <br/>
          <p align="right">日期：<input type="text" class="input-80" v-model="obj.m15"></p>
        </td>
      </tr>
      <tr>
        <td width="284" valign="top">
          <p align="left">专业监理工程师意见： </p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p align="right">
            <input type="text" v-model="nameListDataArr1[0]" disabled class="date-input">年
            <input type="text" v-model="nameListDataArr1[1]" disabled class="date-input">月
            <input type="text" v-model="nameListDataArr1[2]" disabled class="date-input">日
          </p>
        </td>
        <td width="284" valign="top">
          <p align="left">驻地办驻地监理工程师意见： </p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p align="right">
            签章：        
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
  import {splitDate, joinDate} from '../../utils/utils'

  export default {
    name: "AQ-18",
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
        nameListDataArr1:[],
        nameListDataArr2:[],
        id: '3',
        dataArr: [],
        headerInfo: {}, //表头信息
        auditTypeIdArr: [38, 25],
        nameList: [],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
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
            if (item[1].auditTypeId == 38) {
              this.nameList1 = item;
            }
            if (item[1].auditTypeId == 25) {
              this.nameList2 = item;
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
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq18/findAq18ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.dataArr = splitDate(this.obj.m1, '-');
            this.isAdd = false;
          }
        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.m1 = joinDate(this.dataArr, '-');
        this.axios.post("/HiQuality/Aq18/saveAq18", this.$qs.stringify({
          aq18: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
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
        this.obj.m1 = joinDate(this.dataArr, '-');
        this.axios.post('/HiQuality/Aq18/updateAq18', this.$qs.stringify({
          aq18: JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
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
        this.axios.get('/HiQuality/Aq18/deleteAq18', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
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
