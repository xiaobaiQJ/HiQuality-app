<template>
  <div class="D-02 text-center">
    <p class="top-name-p width-662">D-02</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 <br/>
      黔西南州兴义环城高速公路 </p>
    <h3 align="center">路基填方分层压实资料汇总表</h3>
    <div class="text-left width-618">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName"></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode"></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-618">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2"></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0">
        <tr>
          <td width="37" valign="center">
            <p align="center">填<br/>方<br/>示<br/>意 <br/>图</p></td>
          <td width="604" valign="top" colspan="9">
            <div class="parent">
              <p>H</p>
              <p><input type="text" v-model="obj.m1" class="width-30 height-25 title-input"></p>
              <p>O</p>
            </div>
            <img style="float: left;margin-top: 20px;" width="8" height="233"
                 src="../../assets/files/imgs/D/D-01-02_wps1_0000.png">
            <div style="clear: both"></div>
            <p style="margin: 0; position: relative;bottom: 40px;height: auto;">　　　　　　　　　　　　　　　　　　　　　　　　　　　Ｌ </p>
            <p style="margin: 0; position: relative;bottom: 40px;"><img width="520" height="8" src="../../assets/files/imgs/D/D-01-02_wps2_0000.png">
            </p>
          </td>
        </tr>
        <tr class="text-center">
          <td width="37" >序<br/>号</td>
          <td width="94" valign="center">起讫桩号</td>
          <td width="56" valign="center">宽度</td>
          <td width="56" valign="center">填筑<br/>厚度</td>
          <td width="56" valign="center">填料<br/>名称</td>
          <td width="74" valign="center">距路槽<br/>高&nbsp;&nbsp;&nbsp;&nbsp;度</td>
          <td width="66" valign="center">实测K<br/>或&nbsp;&nbsp;ni</td>
          <td width="75" valign="center">合格否</td>
          <td width="56" valign="center">检测<br/>日期</td>
          <td width="66" valign="center">检测<br/>人员</td>
        </tr>
        <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
          <td width="37" valign="top"><input type="text" v-model="val.s1"></td>
          <td width="94" valign="center">
            <input type="text" v-model="val.s2">
          </td>
          <td width="56" valign="center">
            <input type="text" v-model="val.s3">
          </td>
          <td width="56" valign="center">
            <input type="text" v-model="val.s4">
          </td>
          <td width="56" valign="center">
            <input type="text" v-model="val.s5">
          </td>
          <td width="74" valign="center">
            <input type="text" v-model="val.s6">
          </td>
          <td width="66" valign="center">
            <input type="text" v-model="val.s7">
          </td>
          <td width="75" valign="center">
            <input type="text" v-model="val.s8">
          </td>
          <td width="56" valign="center">
            <div class="block">
              <el-date-picker v-model="val.s9" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
          <td width="66" valign="center">
            <input type="text" v-model="val.s10">
          </td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-662">施工单位技术负责人：<input type="text" class="input-80" v-model="obj.m2">制表：<input type="text"
                                                                                                             class="input-80"
                                                                                                             v-model="obj.m3">监理员：<input
      type="text" class="input-80" v-model="nameList1[1].fullName" disabled>日期：<input type="text"
                                                                                      class="date-input height-25"
                                                                                      v-model="m15DataArr[0]" disabled>年<input
      type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text"
                                                                                        class="date-input height-25"
                                                                                        v-model="m15DataArr[2]"
                                                                                        disabled>日</p>
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
  import {splitDate} from '../../utils/utils'
  export default {
    name: "D-02",
    data() {
      return {
        isAdd: true,
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
        //主表
        obj: {
          subList: []
        },
        auditTypeIdArr: [39],
        nameList: [],
        nameList1: [{}, {}],
        m15DataArr: [],
        headerInfo: {}, //表头信息
        id: '17',
        controlArr: [],
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
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
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
    mounted() {
      this.setSubObj()
      this.getData();
    },
    methods: {
      setSubObj() {
        for (var i = 0; i < 15; i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/d2/findById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data.main;
            this.obj.subList = res.data.data.sub;
            this.isAdd = false
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length > 0) {
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
          }
        })
      },
      //新增
      addData() {
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/d2/save', this.$qs.stringify({
          BBtD2M: JSON.stringify(this.obj),
          BQcRecInfo: JSON.stringify(this.rec)
        })).then(res => {
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
        this.axios.post('/HiQuality/d2/update', this.$qs.stringify({
          BBtD2M: JSON.stringify(this.obj)
        })).then(res => {
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
        this.axios.get('/HiQuality/d2/deleteById', {
          params: {
            id: this.id
          }
        }).then(res => {
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
  .parent {
    float: left;
    position: relative;
    height: 230px;
  }

  p {
    height: auto;
  }

  .parent > p {
    text-align: center;
  }

  .parent > p > input {
    width: 50px;
    margin-top: 60px;
    padding: 0;
  }

  .parent > p:nth-child(3) {
    position: absolute;
    left: 20px;
    bottom: 0px;
  }

</style>
