<template>
    <div class="text-center main-d crosswise-a">
      <p class="top-name-p width-663">DCL-10</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>水准测量成果表</strong></h3>
      <div class="text-left width-663">
        <span>承建单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-663">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span></span>
        <div class="myClear"></div>
      </div>
      <table cellspacing="0" cellpadding="0" class="public-tabel table-tr-height-22">
        <tr>
          <td>点号</td>
          <td>高程</td>
          <td>位置</td>
          <td rowspan="19" width="5"></td>
          <td>点号</td>
          <td>高程</td>
          <td>位置</td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[0].s1"></td>
          <td><input type="text" v-model="controlArr[0].s2"></td>
          <td><input type="text" v-model="controlArr[0].s3"></td>
          <td><input type="text" v-model="controlArr[18].s1"></td>
          <td><input type="text" v-model="controlArr[18].s2"></td>
          <td><input type="text" v-model="controlArr[18].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[1].s1"></td>
          <td><input type="text" v-model="controlArr[1].s2"></td>
          <td><input type="text" v-model="controlArr[1].s3"></td>
          <td><input type="text" v-model="controlArr[19].s1"></td>
          <td><input type="text" v-model="controlArr[19].s2"></td>
          <td><input type="text" v-model="controlArr[19].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[2].s1"></td>
          <td><input type="text" v-model="controlArr[2].s2"></td>
          <td><input type="text" v-model="controlArr[2].s3"></td>
          <td><input type="text" v-model="controlArr[20].s1"></td>
          <td><input type="text" v-model="controlArr[20].s2"></td>
          <td><input type="text" v-model="controlArr[20].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[3].s1"></td>
          <td><input type="text" v-model="controlArr[3].s2"></td>
          <td><input type="text" v-model="controlArr[3].s3"></td>
          <td><input type="text" v-model="controlArr[21].s1"></td>
          <td><input type="text" v-model="controlArr[21].s2"></td>
          <td><input type="text" v-model="controlArr[21].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[4].s1"></td>
          <td><input type="text" v-model="controlArr[4].s2"></td>
          <td><input type="text" v-model="controlArr[4].s3"></td>
          <td><input type="text" v-model="controlArr[22].s1"></td>
          <td><input type="text" v-model="controlArr[22].s2"></td>
          <td><input type="text" v-model="controlArr[22].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[5].s1"></td>
          <td><input type="text" v-model="controlArr[5].s2"></td>
          <td><input type="text" v-model="controlArr[5].s3"></td>
          <td><input type="text" v-model="controlArr[23].s1"></td>
          <td><input type="text" v-model="controlArr[23].s2"></td>
          <td><input type="text" v-model="controlArr[23].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[6].s1"></td>
          <td><input type="text" v-model="controlArr[6].s2"></td>
          <td><input type="text" v-model="controlArr[6].s3"></td>
          <td><input type="text" v-model="controlArr[24].s1"></td>
          <td><input type="text" v-model="controlArr[24].s2"></td>
          <td><input type="text" v-model="controlArr[24].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[7].s1"></td>
          <td><input type="text" v-model="controlArr[7].s2"></td>
          <td><input type="text" v-model="controlArr[7].s3"></td>
          <td><input type="text" v-model="controlArr[25].s1"></td>
          <td><input type="text" v-model="controlArr[25].s2"></td>
          <td><input type="text" v-model="controlArr[25].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[8].s1"></td>
          <td><input type="text" v-model="controlArr[8].s2"></td>
          <td><input type="text" v-model="controlArr[8].s3"></td>
          <td><input type="text" v-model="controlArr[26].s1"></td>
          <td><input type="text" v-model="controlArr[26].s2"></td>
          <td><input type="text" v-model="controlArr[26].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[9].s1"></td>
          <td><input type="text" v-model="controlArr[9].s2"></td>
          <td><input type="text" v-model="controlArr[9].s3"></td>
          <td><input type="text" v-model="controlArr[27].s1"></td>
          <td><input type="text" v-model="controlArr[27].s2"></td>
          <td><input type="text" v-model="controlArr[27].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[10].s1"></td>
          <td><input type="text" v-model="controlArr[10].s2"></td>
          <td><input type="text" v-model="controlArr[10].s3"></td>
          <td><input type="text" v-model="controlArr[28].s1"></td>
          <td><input type="text" v-model="controlArr[28].s2"></td>
          <td><input type="text" v-model="controlArr[28].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[11].s1"></td>
          <td><input type="text" v-model="controlArr[11].s2"></td>
          <td><input type="text" v-model="controlArr[11].s3"></td>
          <td><input type="text" v-model="controlArr[29].s1"></td>
          <td><input type="text" v-model="controlArr[29].s2"></td>
          <td><input type="text" v-model="controlArr[29].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[12].s1"></td>
          <td><input type="text" v-model="controlArr[12].s2"></td>
          <td><input type="text" v-model="controlArr[12].s3"></td>
          <td><input type="text" v-model="controlArr[30].s1"></td>
          <td><input type="text" v-model="controlArr[30].s2"></td>
          <td><input type="text" v-model="controlArr[30].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[13].s1"></td>
          <td><input type="text" v-model="controlArr[13].s2"></td>
          <td><input type="text" v-model="controlArr[13].s3"></td>
          <td><input type="text" v-model="controlArr[31].s1"></td>
          <td><input type="text" v-model="controlArr[31].s2"></td>
          <td><input type="text" v-model="controlArr[31].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[14].s1"></td>
          <td><input type="text" v-model="controlArr[14].s2"></td>
          <td><input type="text" v-model="controlArr[14].s3"></td>
          <td><input type="text" v-model="controlArr[32].s1"></td>
          <td><input type="text" v-model="controlArr[32].s2"></td>
          <td><input type="text" v-model="controlArr[32].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[15].s1"></td>
          <td><input type="text" v-model="controlArr[15].s2"></td>
          <td><input type="text" v-model="controlArr[15].s3"></td>
          <td><input type="text" v-model="controlArr[33].s1"></td>
          <td><input type="text" v-model="controlArr[33].s2"></td>
          <td><input type="text" v-model="controlArr[33].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[16].s1"></td>
          <td><input type="text" v-model="controlArr[16].s2"></td>
          <td><input type="text" v-model="controlArr[16].s3"></td>
          <td><input type="text" v-model="controlArr[34].s1"></td>
          <td><input type="text" v-model="controlArr[34].s2"></td>
          <td><input type="text" v-model="controlArr[34].s3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[17].s1"></td>
          <td><input type="text" v-model="controlArr[17].s2"></td>
          <td><input type="text" v-model="controlArr[17].s3"></td>
          <td><input type="text" v-model="controlArr[35].s1"></td>
          <td><input type="text" v-model="controlArr[35].s2"></td>
          <td><input type="text" v-model="controlArr[35].s3"></td>
        </tr>
      </table>
      <div class="bot-hint-p width-663">
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
        name: "DCL-10",
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
          for (var i = 0; i < 36; i++) {
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl10/findById', {
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
          this.axios.post('/HiQuality/dcl10/save',this.$qs.stringify({
            BBtDcl10M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl10/update',this.$qs.stringify({
            BBtDcl10M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl10/deleteById', {
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
