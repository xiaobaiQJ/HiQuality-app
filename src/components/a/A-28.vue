
<template>
  <div class="A28 text-center main-a table-padding5px ad-textarea">
    <p class="top-name-p width-682">A-28</p>
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>检 验 申 请 批 复 令</h3>
    <div class="text-left width-682">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-682">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" width="680">
        <tr class="public-tabel table-tr-height-30">
          <td width="137" valign="center"><p align="center">工程项目</p></td>
          <td width="426" valign="center" colspan="2">
            <p align="center"><input type="text" v-model="obj.m1"></p>
          </td>
        </tr>
        <tr class="public-tabel table-tr-height-30">
          <td width="137" valign="center"><p align="center">工程地点及桩号 </p></td>
          <td width="426" valign="center" colspan="2">
            <p align="center"><input type="text" v-model="obj.m2"></p>
          </td>
        </tr>
        <tr class="public-tabel table-tr-height-30">
          <td width="137" valign="center"><p align="center">具体部位 </p></td>
          <td width="426" valign="center" colspan="2">
            <p align="center"><input type="text" v-model="obj.m3"></p>
          </td>
        </tr>
        <tr class="public-tabel table-tr-height-30">
          <td width="137" valign="center"><p align="center">要求到现场检验<br/>时间 </p></td>
          <td width="426" valign="center" colspan="2">
            <div class="block">
              <el-date-picker v-model="obj.m4" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="564" colspan="3"><p>申报内容： </p>
            <textarea name="" cols="30" rows="11" v-model="obj.m5"></textarea>
            <p>质量证明附件：<textarea cols="30" rows="4" v-model="obj.m6"></textarea></p><br>
            <p align="right">承包人签字：<input type="text" v-model="obj.m7"></p><br/>
          </td>
        </tr>
        <tr class="public-tabel">
          <td width="564" colspan="3">
            <p align="left">监理员签收：<input type="text" class="height-25 input-200 t-left" v-model="nameList1[1].fullName" disabled> 日期：<input type="text" v-model="nameList1[0].auditTime" class="height-25 input-200 t-left" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="564" colspan="3">
            <p>批复内容：</p>
            <textarea name="" cols="30" rows="11" v-model="nameList2[0].auditOpinion" disabled></textarea>
            <br>
            <p>（由专业监理工程师填写） </p><br>
          </td>
        </tr>
        <tr>
          <td width="304" colspan="2">
            <p>专业监理工程师： </p>
            <p><input type="text" class="height-25 mar-left-25" v-model="nameList2[1].fullName" disabled></p>
            <br>
            <p style="margin-left: 20%;">（盖章） </p><br><br><br>
            <p style="">日期：<input type="text" v-model="nameList2[0].auditTime" class="height-25 input-120" disabled></p>
          </td>
          <td width="259"><p>承包人签字：<input type="text" v-model="obj.m9" class="height-25 mar-left-25"></p>
            <p>&nbsp;</p>
            <p></p><br><br><br><br>
            <p>收到日期：<input type="text" v-model="obj.m10" class="height-25"></p>
          </td>
        </tr>
      </table>

    </div>

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
  import {splitDate} from "../../utils/utils";
  export default {
    name: "A-28",
    data() {
      return {
        isAdd: true,
        //rec
        rec: {
          id: '',
          recNo: '',
          tableId: 31,
          contractId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1,
          signatory1: 0,
          signatory2: 0,
          signatory3: 0,
          signatory4: 0
        },
        auditTypeIdArr: [39, 26, 66],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        //主表
        obj: {},
        headerInfo: {}, //表头信息
        id: '3'
      }
    },
    created() {
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      if (this.$store.state.recId == '') {
        this.initData();
      } else {
        this.getData();
      };
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
          console.log("获取")
          console.log(this.nameList)
          this.nameList.forEach((item) => {
            if (item != '' && item != undefined) {
              //更改判断值auditTypeId   白涛 2019年8月11日23:59:31
              if (item[1].auditTypeId == 39) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 26) {
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
      let obj = this.$store.state.unitTable;
      if (obj.data != '' && obj.data != null && obj.data != undefined) {
        this.headerInfo = obj.data;
      }
      this.getData();
    },
    filters: {},
    methods: {
      /**
       * 无数据时初始化页面数据
       * @method initData
       * @param {projDivId} 子分项节点id(工程部位)
       * @return {返回值类型} 返回值说明
       */
      initData() {
        this.axios.get('/HiQuality/A28/getInitInfo', {
          params: {
            projDivId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("初始化数据")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;
            this.obj.m6 = this.obj.m6.replace(';', '\n')
          }
        })
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A28/findA28ById', {
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
        this.axios.post("/HiQuality/A28/saveA28", this.$qs.stringify({
          a28: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
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
        this.axios.post('/HiQuality/A28/updateA28', this.$qs.stringify({
          a28: JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.$tost.edit();
              this.$skip.skipProcess();
              this.getData();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/A28/deleteA28', {
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
