<template>
  <div class="AQ-17 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全生产报告单</h3>
    <div class="t-right margin-auto width-559">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr class="public-tabel">
        <td width="79" valign="top"><p>单位名称</p> </td>
        <td width="205" valign="top"><p><input type="text" v-model="headerInfo.unitName" disabled></p></td>
        <td width="71" valign="top"><p>项目名称 </p></td>
        <td width="213" valign="top"><input type="text" v-model="obj.m3"></td>
      </tr>
      <tr>
        <td width="568" colspan="4" valign="top">
          <p align="left">报告事由：
          <textarea name="" cols="30" rows="18" v-model="obj.m4"></textarea>
        </p>
          <p class="t-right p-lineheight">施工单位签章：<input type="text" v-model="obj.m5"></p>
          <p class="t-right p-lineheight">项目经理：<input type="text" v-model="obj.m6"></p>
          <div class="dateDiv t-right p-lineheight">
            <div class="block display-lnl">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-120"
                              size="mini"
                              v-model="obj.m7" type="date"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="4" valign="top">
          <p align="left">驻地办意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p align="right">监 理 机 构：（签章） <br />
          <p class="t-right p-lineheight">驻地监理工程师： <input type="text" class="" v-model="nameList1[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="4" valign="top">
          <p align="left">总监办意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p align="right">监 理 机 构：（签章） <br />
          <p class="t-right p-lineheight">总监理工程师： <input type="text" class="" v-model="nameList2[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="4" valign="top">
          <p align="left">建设单位意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList3[0].auditOpinion" disabled></textarea>
          <p align="right">建设单位：（签章） <br />
          <p class="t-right p-lineheight">负责人： <input type="text" class="" v-model="nameList3[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList3[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-559">说明；本表一式<input type="text" class="title-input input-50">份，由施工单位填写。监理机构、建设单位审签后，施工单位2份，监理机构、建设单位各1份。 </p>
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
    name: "AQ-17",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {},
        id: '3',
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
        auditTypeIdArr: [25, 21, 15],
        nameList: [],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        nameList3: [{}, {}],
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
    watch: {
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item, index) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 25) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 21) {
                this.nameList2 = item;
              }
              if (item[1].auditTypeId == 15) {
                this.nameList3 = item;
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
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq17/findAq17ById', {
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
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }

        this.axios.post("/HiQuality/Aq17/saveAq17", this.$qs.stringify({
          aq17:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/Aq17/updateAq17',this.$qs.stringify({
          aq17:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/Aq17/deleteAq17', {
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
