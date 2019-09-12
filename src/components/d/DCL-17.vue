<template>
    <div class="text-center main-d lengthways-a">
      <p class="top-name-p width-663">DCL-17</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔 西 南 州 兴 义 环 城 高 速 公 路</p>
      <h3><strong>附合/闭合水准高差闭合差调整表</strong></h3>
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
      <table cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td>测点</td>
          <td>测段长度</td>
          <td width="79">实测高差（m）</td>
          <td width="102">高差改正数（m）</td>
          <td width="89">改正后高差（m)</td>
          <td width="95">高程（m）</td>
          <td>备注</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td><input type="text" v-model="val.s1"></td>
          <td><input type="text" v-model="val.s2"></td>
          <td><input type="text" v-model="val.s3"></td>
          <td><input type="text" v-model="val.s4"></td>
          <td><input type="text" v-model="val.s5"></td>
          <td><input type="text" v-model="val.s6"></td>
          <td rowspan="18" v-if="index==0"><textarea cols="30" rows="46" v-model="obj.m1"></textarea></td>
        </tr>
        <tr>
          <td >∑</td>
          <td ><input type="text" v-model="obj.m2"></td>
          <td ><input type="text" v-model="obj.m3"></td>
          <td ><input type="text" v-model="obj.m4"></td>
          <td ><input type="text" v-model="obj.m5"></td>
          <td ><input type="text" v-model="obj.m6"></td>
        </tr>
      </table>
      <p class="bot-hint-p width-663">
        计算：<input type="text" v-model="obj.m7" class="input-175">
        复核：<input type="text" v-model="obj.m8" class="input-175">
        监理：<input type="text" v-model="nameList1[1].fullName" disabled class="input-140">
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
        name: "DCL-17",
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
          dateArr: [],
          id: '1'     //主表id
        }
      },
      created() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
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
          for (var i = 0; i < 17; i++) {
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl17/findById', {
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
          this.axios.post('/HiQuality/dcl17/save',this.$qs.stringify({
            BBtDcl17M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl17/update',this.$qs.stringify({
            BBtDcl17M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl17/deleteById', {
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
