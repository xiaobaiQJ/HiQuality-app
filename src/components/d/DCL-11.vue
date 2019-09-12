<template>
    <div class="text-center main-d crosswise-a">
      <p class="top-name-p width-663">DCL-11</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>附合/闭合导线计算表</strong></h3>
      <div class="text-left width-663">
        <span>承建单位：<input type="text" v-model="headerInfo.unitName"></span>
        <span></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-663">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2"></span>
        <span></span>
        <div class="myClear"></div>
      </div>
      <table cellspacing="0" cellpadding="0" class="public-tabel table-tr-height-22">
        <tr>
          <td rowspan="2">点号</td>
          <td>角度观测值</td>
          <td>改正后角度</td>
          <td>方位角</td>
          <td>水平距离</td>
          <td colspan="2">坐标增量</td>
          <td colspan="2">改正后增量</td>
          <td colspan="2">坐标</td>
        </tr>
        <tr>
          <td>º     '    &quot; </td>
          <td>º     '       &quot; </td>
          <td>º     '       &quot; </td>
          <td>/ m</td>
          <td>Δx/m</td>
          <td>Δy/m</td>
          <td>Δx/m</td>
          <td>Δy/m</td>
          <td>x/m</td>
          <td>y/m</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
        </tr>
        <tr  v-for="(val,index) in controlArr" :key="index">
          <td><input type="text" v-model="val.s1"></td>
          <td><input type="text" v-model="val.s2"></td>
          <td><input type="text" v-model="val.s3"></td>
          <td><input type="text" v-model="val.s4"></td>
          <td><input type="text" v-model="val.s5"></td>
          <td><input type="text" v-model="val.s6"></td>
          <td><input type="text" v-model="val.s7"></td>
          <td><input type="text" v-model="val.s8"></td>
          <td><input type="text" v-model="val.s9"></td>
          <td><input type="text" v-model="val.s10"></td>
          <td><input type="text" v-model="val.s11"></td>
        </tr>
      </table>
      <div class="bot-hint-p">
        计算：<input type="text" v-model="obj.m1" class="input-200">
        复核：<input type="text" v-model="obj.m2" class="input-200">
        监理：<input type="text" v-model="nameList1[1].fullName" disabled class="input-200">
        日期：<input type="text" class="input-200" v-model="nameList1[0].auditTime" disabled>
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
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "DCL-11",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
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
          auditTypeIdArr: [26],
          nameList: [],
          nameList1: [{}, {}],
          headerInfo: {}, //表头信息
          id: '1'     //主表id
        }
      },
      created() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
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
                if (item[1].auditTypeId == 26) {
                  this.nameList1 = item;
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
        setSubObj() {
          for (var i = 0; i < 14; i++) {
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl11/findById', {
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
              this.isAdd = false;
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
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
          this.axios.post('/HiQuality/dcl11/save',this.$qs.stringify({
            BBtDcl11M:JSON.stringify(this.obj),
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
        updateData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dcl11/update',this.$qs.stringify({
            BBtDcl11M:JSON.stringify(this.obj)
          })).then(res=>{
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
              this.getData();
            }
          })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/dcl11/deleteById', {
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

</style>
