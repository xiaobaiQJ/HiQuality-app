<template>
  <div class="AQ-01 text-center main-aq table-padding5px">
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>施工单位安全生产资质材料审查表</h3>
    <div class="t-right margin-auto width-623">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" width="630">
      <tr class="public-tabel">
        <td width="80"><p align="center">单位名称</p></td>
        <td width="203" colspan="2"><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="72"><p >项目名称 </p></td>
        <td width="185" colspan="2"><input type="text" v-model="obj.m4"></td>
      </tr>
      <tr>
        <td width="540" colspan="6"><p align="left">&nbsp;</p>
          <p align="left" class="p-lineheight">致<input type="text" class="title-input input-230 text-center" v-model="obj.m14" >(监理单位)： </p><br/>
          <p class="t-left p-lineheight" style="text-indent: 50px;">我方已根据监理计划的有关规定完成了安全生产资质材料的编制，请予以审查.
            如企业资质和人员资格发生变化，另将补报调整资料.</p><br/>
        </td>
      </tr>
      <tr class="public-tabel">
        <td width="188" colspan="2"><p align="center">注册资本 </p></td>
        <td width="189" colspan="3"><p align="center">资质类别和等级 </p></td>
        <td width="163"><p align="center">安全生产许可证有效期 </p></td>
      </tr>
      <tr class="public-tabel">
        <td width="188" colspan="2"><p><input type="text" v-model="obj.m1"></p></td>
        <td width="189" colspan="3"><p><input type="text" v-model="obj.m2"></p></td>
        <td width="163"><p><input type="text" v-model="obj.m3"></p></td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <div class="flex-r p-lineheight-40">
            <p class="t-left">附：</p>
            <div class="t-left mar-left-30px aq-checkDiv">
              <p class="float-left">①项目施工中标通知书</p>
              <p class="float-right padding-12px aq-checkbox">
                <van-checkbox v-model="obj.m5"></van-checkbox>
              </p>
              <div class="myClear"></div>
            </div>
          </div>
          <div class="t-left mar-left-55px p-lineheight-40 aq-checkDiv">
            <p class="float-left">②企业营业执照、资质证书、安全生产许可证</p>
            <p class="float-right padding-12px aq-checkbox">
              <van-checkbox v-model="obj.m6"></van-checkbox>
            </p>
            <div class="myClear"></div>
          </div>
          <div class="t-left mar-left-55px p-lineheight-40 aq-checkDiv">
            <p class="float-left">③企业法定代表人岗位证书、安全生产考核合格证书</p>
            <p class="float-right padding-12px aq-checkbox">
              <van-checkbox v-model="obj.m7"></van-checkbox>
            </p>
            <div class="myClear"></div>
          </div>
          <div class="t-left mar-left-55px p-lineheight-40 aq-checkDiv">
            <p class="float-left">④项目经理岗位证书、安全生产考核合格证书</p>
            <p class="float-right padding-12px aq-checkbox">
              <van-checkbox v-model="obj.m8"></van-checkbox>
            </p>
            <div class="myClear"></div>
          </div>
          <div class="t-left mar-left-55px p-lineheight-40 aq-checkDiv">
            <p class="float-left">⑤专职安全生产管理人员安全生产考核合格证书</p>
            <p class="float-right padding-12px aq-checkbox">
              <van-checkbox v-model="obj.m9"></van-checkbox>
            </p>
            <div class="myClear"></div>
          </div>
          <p class="t-left mar-left-55px p-lineheight-40">⑥其他：<input type="text" v-model="obj.m10"></p>
          <br/><br/><br/>
          <p class="t-right p-lineheight">施工单位签章：<input type="text" v-model="obj.m11"></p>
          <p class="t-right p-lineheight">项目经理：<input type="text" v-model="obj.m12"></p>
          <div class="dateDiv t-right p-lineheight">
            <div class="block display-lnl">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-120"
                              size="mini"
                              v-model="obj.m13" type="date"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <p align="left">专业监理工程师审查意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">专业监理工程师签名：<input type="text" class="" v-model="nameList1[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <p align="left">驻地办驻地监理工程师审核意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">驻地办驻地监理工程师签章：<input type="text" class="" v-model="nameList2[1].fullName"
                                                              disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
    </table>
    <p>&nbsp;</p>
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
    name: "AQ-01",
    data() {
      return {
        isAdd: true,
        obj: {},
        rec: {
          recNo: ' ',
          tableId: 4,
          contracId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        headerInfo: {}, //表头信息
        auditTypeIdArr: [38, 25],
        nameList: [],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        id: 0,

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
        this.obj.m14 = this.headerInfo.unitName2;
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
      obj: function (old,newobj) {
        this.obj.m5 = this.obj.m5 ? 1 : 0;
        this.obj.m6 = this.obj.m5 ? 1 : 0;
        this.obj.m7 = this.obj.m5 ? 1 : 0;
        this.obj.m8 = this.obj.m5 ? 1 : 0;
        this.obj.m9 = this.obj.m5 ? 1 : 0;
      },
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
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/aq01/findById', {
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
        //this.obj.m1 = this.headerInfo.unitName2;
        this.axios.post('/HiQuality/aq01/save', this.$qs.stringify({
          bBtAq01M: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
        }))
          .then(res => {
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
        //this.obj.m1 = this.headerInfo.unitName2;
        this.axios.post('/HiQuality/aq01/update', this.$qs.stringify({
          bBtAq01M: JSON.stringify(this.obj)
        }))
          .then(res => {
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
        this.axios.get('/HiQuality/aq01/deleteById', {
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
  .mar-left {
    margin-left: 32px;
  }
</style>
