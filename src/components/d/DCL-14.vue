<template>
    <div class="text-center main-d crosswise-a">
      <p class="top-name-p width-663">DCL-14</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔 西 南 州 兴 义 环 城 高 速 公 路</p>
      <h3><strong>方  向  观     测  手  薄</strong></h3>
      <div class="text-left width-663">
        <span>承建单位：<input type="text" v-model="headerInfo.unitName"></span>
        <span>仪器型号：<input type="text" v-model="obj.m1"></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-663">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2"></span>
        <span>天气：<input type="text" v-model="obj.m2"></span>
        <div class="myClear"></div>
      </div>
      <table cellspacing="0" cellpadding="0" class="public-tabel table-tr-height-22" width="1053">
        <tr>
          <td rowspan="3">测站</td>
          <td rowspan="3">测点</td>
          <td colspan="6">水      平      度      盘      读      数</td>
          <td rowspan="2" width="53">左－右（2C）</td>
          <td rowspan="2" width="66" align="left">（左+<br/>右）2</td>
          <td rowspan="2">方向值</td>
          <td rowspan="3">观测方向略图</td>
          <td rowspan="3">备注</td>
        </tr>
        <tr>
          <td colspan="3">盘左</td>
          <td colspan="3">盘右</td>
        </tr>
        <tr>
          <td>°</td>
          <td>′</td>
          <td>″</td>
          <td>°</td>
          <td>′</td>
          <td>″</td>
          <td>″</td>
          <td>″</td>
          <td>°′″</td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[0].s1"></td>
          <td><input type="text" v-model="controlArr[0].s21">　</td>
          <td><input type="text" v-model="controlArr[0].s31"></td>
          <td><input type="text" v-model="controlArr[0].s41"></td>
          <td><input type="text" v-model="controlArr[0].s51"></td>
          <td><input type="text" v-model="controlArr[0].s61"></td>
          <td><input type="text" v-model="controlArr[0].s71"></td>
          <td><input type="text" v-model="controlArr[0].s81"></td>
          <td><input type="text" v-model="controlArr[0].s91"></td>
          <td><input type="text" v-model="controlArr[0].s101"></td>
          <td><input type="text" v-model="controlArr[0].s111"></td>
          <td rowspan="16" width="169">
            <textarea cols="30" rows="20" v-model="obj.m3"></textarea>
          </td>
          <td rowspan="8"><textarea cols="15" rows="10" v-model="obj.m4"></textarea></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[0].s22"></td>
          <td><input type="text" v-model="controlArr[0].s32"></td>
          <td><input type="text" v-model="controlArr[0].s42"></td>
          <td><input type="text" v-model="controlArr[0].s52"></td>
          <td><input type="text" v-model="controlArr[0].s62"></td>
          <td><input type="text" v-model="controlArr[0].s72"></td>
          <td><input type="text" v-model="controlArr[0].s82"></td>
          <td><input type="text" v-model="controlArr[0].s92"></td>
          <td><input type="text" v-model="controlArr[0].s102"></td>
          <td><input type="text" v-model="controlArr[0].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[1].s1"></td>
          <td><input type="text" v-model="controlArr[1].s21"></td>
          <td><input type="text" v-model="controlArr[1].s31"></td>
          <td><input type="text" v-model="controlArr[1].s41"></td>
          <td><input type="text" v-model="controlArr[1].s51"></td>
          <td><input type="text" v-model="controlArr[1].s61"></td>
          <td><input type="text" v-model="controlArr[1].s71"></td>
          <td><input type="text" v-model="controlArr[1].s81"></td>
          <td><input type="text" v-model="controlArr[1].s91"></td>
          <td><input type="text" v-model="controlArr[1].s101"></td>
          <td><input type="text" v-model="controlArr[1].s111"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[1].s22"></td>
          <td><input type="text" v-model="controlArr[1].s32"></td>
          <td><input type="text" v-model="controlArr[1].s42"></td>
          <td><input type="text" v-model="controlArr[1].s52"></td>
          <td><input type="text" v-model="controlArr[1].s62"></td>
          <td><input type="text" v-model="controlArr[1].s72"></td>
          <td><input type="text" v-model="controlArr[1].s82"></td>
          <td><input type="text" v-model="controlArr[1].s92"></td>
          <td><input type="text" v-model="controlArr[1].s102"></td>
          <td><input type="text" v-model="controlArr[1].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[2].s1"></td>
          <td><input type="text" v-model="controlArr[2].s21"></td>
          <td><input type="text" v-model="controlArr[2].s31"></td>
          <td><input type="text" v-model="controlArr[2].s41"></td>
          <td><input type="text" v-model="controlArr[2].s51"></td>
          <td><input type="text" v-model="controlArr[2].s61"></td>
          <td><input type="text" v-model="controlArr[2].s71"></td>
          <td><input type="text" v-model="controlArr[2].s81"></td>
          <td><input type="text" v-model="controlArr[2].s91"></td>
          <td><input type="text" v-model="controlArr[2].s101"></td>
          <td><input type="text" v-model="controlArr[2].s111"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[2].s22"></td>
          <td><input type="text" v-model="controlArr[2].s32"></td>
          <td><input type="text" v-model="controlArr[2].s42"></td>
          <td><input type="text" v-model="controlArr[2].s52"></td>
          <td><input type="text" v-model="controlArr[2].s62"></td>
          <td><input type="text" v-model="controlArr[2].s72"></td>
          <td><input type="text" v-model="controlArr[2].s82"></td>
          <td><input type="text" v-model="controlArr[2].s92"></td>
          <td><input type="text" v-model="controlArr[2].s102"></td>
          <td><input type="text" v-model="controlArr[2].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[3].s1"></td>
          <td><input type="text" v-model="controlArr[3].s21"></td>
          <td><input type="text" v-model="controlArr[3].s31"></td>
          <td><input type="text" v-model="controlArr[3].s41"></td>
          <td><input type="text" v-model="controlArr[3].s51"></td>
          <td><input type="text" v-model="controlArr[3].s61"></td>
          <td><input type="text" v-model="controlArr[3].s71"></td>
          <td><input type="text" v-model="controlArr[3].s81"></td>
          <td><input type="text" v-model="controlArr[3].s91"></td>
          <td><input type="text" v-model="controlArr[3].s101"></td>
          <td><input type="text" v-model="controlArr[3].s111"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[3].s22"></td>
          <td><input type="text" v-model="controlArr[3].s32"></td>
          <td><input type="text" v-model="controlArr[3].s42"></td>
          <td><input type="text" v-model="controlArr[3].s52"></td>
          <td><input type="text" v-model="controlArr[3].s62"></td>
          <td><input type="text" v-model="controlArr[3].s72"></td>
          <td><input type="text" v-model="controlArr[3].s82"></td>
          <td><input type="text" v-model="controlArr[3].s92"></td>
          <td><input type="text" v-model="controlArr[3].s102"></td>
          <td><input type="text" v-model="controlArr[3].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[4].s1"></td>
          <td><input type="text" v-model="controlArr[4].s21"></td>
          <td><input type="text" v-model="controlArr[4].s31"></td>
          <td><input type="text" v-model="controlArr[4].s41"></td>
          <td><input type="text" v-model="controlArr[4].s51"></td>
          <td><input type="text" v-model="controlArr[4].s61"></td>
          <td><input type="text" v-model="controlArr[4].s71"></td>
          <td><input type="text" v-model="controlArr[4].s81"></td>
          <td><input type="text" v-model="controlArr[4].s91"></td>
          <td><input type="text" v-model="controlArr[4].s101"></td>
          <td><input type="text" v-model="controlArr[4].s111"></td>
          <td rowspan="8"><textarea cols="15" rows="10" v-model="obj.m5"></textarea></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[4].s22"></td>
          <td><input type="text" v-model="controlArr[4].s32"></td>
          <td><input type="text" v-model="controlArr[4].s42"></td>
          <td><input type="text" v-model="controlArr[4].s52"></td>
          <td><input type="text" v-model="controlArr[4].s62"></td>
          <td><input type="text" v-model="controlArr[4].s72"></td>
          <td><input type="text" v-model="controlArr[4].s82"></td>
          <td><input type="text" v-model="controlArr[4].s92"></td>
          <td><input type="text" v-model="controlArr[4].s102"></td>
          <td><input type="text" v-model="controlArr[4].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[5].s1"></td>
          <td><input type="text" v-model="controlArr[5].s21"></td>
          <td><input type="text" v-model="controlArr[5].s31"></td>
          <td><input type="text" v-model="controlArr[5].s41"></td>
          <td><input type="text" v-model="controlArr[5].s51"></td>
          <td><input type="text" v-model="controlArr[5].s61"></td>
          <td><input type="text" v-model="controlArr[5].s71"></td>
          <td><input type="text" v-model="controlArr[5].s81"></td>
          <td><input type="text" v-model="controlArr[5].s91"></td>
          <td><input type="text" v-model="controlArr[5].s101"></td>
          <td><input type="text" v-model="controlArr[5].s111"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[5].s22"></td>
          <td><input type="text" v-model="controlArr[5].s32"></td>
          <td><input type="text" v-model="controlArr[5].s42"></td>
          <td><input type="text" v-model="controlArr[5].s52"></td>
          <td><input type="text" v-model="controlArr[5].s62"></td>
          <td><input type="text" v-model="controlArr[5].s72"></td>
          <td><input type="text" v-model="controlArr[5].s82"></td>
          <td><input type="text" v-model="controlArr[5].s92"></td>
          <td><input type="text" v-model="controlArr[5].s102"></td>
          <td><input type="text" v-model="controlArr[5].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[6].s1"></td>
          <td><input type="text" v-model="controlArr[6].s21"></td>
          <td><input type="text" v-model="controlArr[6].s31"></td>
          <td><input type="text" v-model="controlArr[6].s41"></td>
          <td><input type="text" v-model="controlArr[6].s51"></td>
          <td><input type="text" v-model="controlArr[6].s61"></td>
          <td><input type="text" v-model="controlArr[6].s71"></td>
          <td><input type="text" v-model="controlArr[6].s81"></td>
          <td><input type="text" v-model="controlArr[6].s91"></td>
          <td><input type="text" v-model="controlArr[6].s101"></td>
          <td><input type="text" v-model="controlArr[6].s111"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[6].s22"></td>
          <td><input type="text" v-model="controlArr[6].s32"></td>
          <td><input type="text" v-model="controlArr[6].s42"></td>
          <td><input type="text" v-model="controlArr[6].s52"></td>
          <td><input type="text" v-model="controlArr[6].s62"></td>
          <td><input type="text" v-model="controlArr[6].s72"></td>
          <td><input type="text" v-model="controlArr[6].s82"></td>
          <td><input type="text" v-model="controlArr[6].s92"></td>
          <td><input type="text" v-model="controlArr[6].s102"></td>
          <td><input type="text" v-model="controlArr[6].s112"></td>
        </tr>
        <tr>
          <td rowspan="2"><input type="text" v-model="controlArr[7].s1"></td>
          <td><input type="text" v-model="controlArr[7].s21"></td>
          <td><input type="text" v-model="controlArr[7].s31"></td>
          <td><input type="text" v-model="controlArr[7].s41"></td>
          <td><input type="text" v-model="controlArr[7].s51"></td>
          <td><input type="text" v-model="controlArr[7].s61"></td>
          <td><input type="text" v-model="controlArr[7].s71"></td>
          <td><input type="text" v-model="controlArr[7].s81"></td>
          <td><input type="text" v-model="controlArr[7].s91"></td>
          <td><input type="text" v-model="controlArr[7].s101"></td>
          <td><input type="text" v-model="controlArr[7].s111"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[7].s22"></td>
          <td><input type="text" v-model="controlArr[7].s32"></td>
          <td><input type="text" v-model="controlArr[7].s42"></td>
          <td><input type="text" v-model="controlArr[7].s52"></td>
          <td><input type="text" v-model="controlArr[7].s62"></td>
          <td><input type="text" v-model="controlArr[7].s72"></td>
          <td><input type="text" v-model="controlArr[7].s82"></td>
          <td><input type="text" v-model="controlArr[7].s92"></td>
          <td><input type="text" v-model="controlArr[7].s102"></td>
          <td><input type="text" v-model="controlArr[7].s112"></td>
        </tr>

      </table>
      <div class="bot-hint-p width-663">
        测量: <input type="text" v-model="obj.m6" class="input-200">
        记录：<input type="text" v-model="obj.m7" class="input-200">
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
        name: "DCL-14",
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
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj() {
          for (var i = 0; i < 8; i++) {
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl14/findById', {
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
          this.axios.post('/HiQuality/dcl14/save',this.$qs.stringify({
            BBtDcl14M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dcl14/update',this.$qs.stringify({
            BBtDcl14M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dcl14/deleteById', {
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
