<template>
  <div class="A66 text-center main-a lengthways-a">
    <p class="top-name-p width-734">A-66</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>承包人施工设备退场申报审批汇总表</h3>
    <p class="title-p-right margin-auto width-734">责查表-22</p>
    <div class="public-tilte flex-r margin-auto width-734">
      <div>
        <p>合 同 号：<input type="text" v-model="obj.m2"></p>
      </div>
      <div>
        <p>申报日期：
          <el-date-picker v-model="obj.m3" type="date" size="mini"
                          class="input-80" placeholder="年  月  日"
                          format="yyyy年MM月dd日"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </p>
      </div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel">
        <tr>
          <td width="44" valign="center"><p align="center">序号</p></td>
          <td width="82" valign="center"><p align="center">设备名称 </p></td>
          <td width="48" valign="center"><p align="center">出厂年月 </p></td>
          <td width="58" valign="center"><p align="center">型号 </p></td>
          <td width="60" valign="center"><p align="center">生产 效率 </p></td>
          <td width="82" valign="center"><p align="center">保留设备台数 </p></td>
          <td width="82" valign="center"><p align="center">保留设备完好情况 </p></td>
          <td width="59" valign="center"><p align="center">退场时间 </p></td>
          <td width="82" valign="center"><p align="center">退场设备台数 </p></td>
          <td width="82" valign="center"><p align="center">退场设备完好情况 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="44" valign="center"><p align="center"><input type="text" v-model="val.s1"></p></td>
          <td width="82" valign="center"><p align="center"><input type="text" v-model="val.s2"></p></td>
          <td width="48" valign="center">
            <div class="block">
              <el-date-picker v-model="val.s3" type="date" size="mini"
                              class="input-80"
                              value-format="yyyy-MM" format="yyyy年MM月">
              </el-date-picker>
            </div>
          </td>
          <td width="58" valign="top"><p align="center"><input type="text" v-model="val.s4"></p></td>
          <td width="60" valign="center"><p align="center"><input type="text" v-model="val.s5"></p></td>
          <td width="82" valign="center"><p align="center"><input type="text" v-model="val.s6"></p></td>
          <td width="59" valign="center"><p align="center"><input type="text" v-model="val.s7"></p></td>
          <td width="80" valign="top">
            <div class="block">
              <el-date-picker v-model="val.s8" type="date" size="mini"
                              class="input-80"
                              value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
          <td width="82" valign="top"><p align="center"><input type="text" v-model="val.s9"></p></td>
          <td width="82" valign="top"><p align="center"><input type="text" v-model="val.s10"></p></td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-734">注：汇总责查表-21，并与责查表-21一并报总监办备案。并编入工程月报。 </p>
    <br/>
    <p class="bot-hint-p width-734">承包人：<input type="text" v-model="obj.m1" class="input-140"> 监理工程师： <input type="text"
                                                                                                             v-model="nameList1[1].fullName"
                                                                                                             disabled
                                                                                                             class="input-80">
      日期：
      <input type="text" v-model="nameDateArr1[0]" class="date-input" disabled>年
      <input type="text" v-model="nameDateArr1[1]" class="date-input" disabled>月
      <input type="text" v-model="nameDateArr1[2]" class="date-input" disabled>日
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
    name: "A-66",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {
          subList: []
        },
        controlArr: [],
        //rec
        rec: {
          recNo: '',
          tableId: 4,
          contractId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        auditTypeIdArr: [26],
        nameList: [],
        nameList1: [{}, {}],
        nameDateArr1: [],
        id: '',
        dateArr: [],

      }
    },
    created() {
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
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
                this.nameDateArr1 = splitDate(this.nameList1[0].auditTime, '-');
              }
            }
          })
        }
      }
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj() {
        for (var i = 0; i < 19; i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A66/findA66ById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;
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
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/A66/saveA66", this.$qs.stringify({
          a66: JSON.stringify(this.obj),
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/A66/updateA66', this.$qs.stringify({
          a66: JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/A66/deleteA66', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr = [];
            this.obj = {subList: []}
            this.setSubObj();
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
