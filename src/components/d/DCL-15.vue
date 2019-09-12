<template>
    <div class="DCL-15 text-center main-d crosswise-a">
      <p class="top-name-p width-763">DCL-15</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>横 断 面 测 量 记 录 表</strong></h3>
      <div class="public-tilte flex-r margin-auto">
        <div>
          <p>承建单位：<input type="text" v-model="headerInfo.unitName"></p>
          <p>监理单位：<input type="text" v-model="headerInfo.unitName2"></p>
        </div>
        <div>
          <p>工程名称： <input type="text" v-model="obj.m1"></p>
          <p>测量范围：<input type="text" v-model="obj.m3"></p>
        </div>
        <div>
          <p>仪器型号： <input type="text" class="input-260" v-model="obj.m2"></p>
          <p>天气:<input type="text" class="input-260" v-model="obj.m4">第 <input type="text" class="width-30">页</p>
        </div>
      </div>
      <div align="center">
        <table border="0" cellspacing="0" class="public-tabel table-tr-height-22">
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" ><p align="center" >左  侧(以面向前进方向为准） </p></td>
            <td width="241" valign="center" nowrap="nowrap" colspan="2" ><p align="center" >测点桩号及高程 </p></td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" ><p align="center" >右  侧(以面向前进方向为准） </p></td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[0].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[0].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[0].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[0].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[0].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[0].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[1].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left">桩号：<input type="text" v-model="controlArr[1].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[1].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[1].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[1].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[1].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[2].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[2].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[2].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[2].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[2].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[2].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[3].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[3].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[3].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[3].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[3].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[3].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[4].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[4].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[4].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[4].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[4].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[4].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[5].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[5].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[5].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[5].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[5].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[5].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[6].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[6].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[6].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[6].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[6].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[6].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[7].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[7].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[7].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[7].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[7].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[7].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[8].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[8].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[8].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[8].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[8].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[8].s6"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[9].s1"></p>
            </td>
            <td width="141"  nowrap="nowrap" colspan="2" rowspan="2" >
              <p class="t-left ">桩号：<input type="text" v-model="controlArr[9].s3" class="height-25 input-160">高程：<input type="text" v-model="controlArr[9].s4" class="height-25 input-100">
              </p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[9].s5"></p>
            </td>
          </tr>
          <tr >
            <td width="241" valign="center" nowrap="nowrap" colspan="6" >
              <p><input type="text" v-model="controlArr[9].s2"></p>
            </td>
            <td width="259" valign="center" nowrap="nowrap" colspan="8" >
              <p><input type="text" v-model="controlArr[9].s6"></p>
            </td>
          </tr>
        </table>
      </div>
       <p class="bot-hint-p width-763">
         测量：<input type="text" class="input-200" v-model="obj.m5">记录：<input type="text" class="input-175" v-model="obj.m6">复核：<input type="text" class="input-175" v-model="obj.m7">监理工程师：<input type="text" class="input-160" v-model="nameList1[1].fullName" disabled>日期：<input type="text" class="input-105" v-model="nameList1[0].auditTime" disabled>
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
    export default {
        name: "DCL-15",
      data() {
        return {
          isAdd: true,
          //rec表
          rec: {
            recNo:'',
            tableId:'',
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          headerInfo:{}, //表头信息
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          id: '1'    //主表id
        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        let obj = this.$store.state.unitTable;
        if(obj.data!='' && obj.data!=null && obj.data!=undefined){
          this.headerInfo = obj.data;
        }
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        //获取rec记录信息
        this.$publicFun.getRecInfo();
      },
      mounted() {
        this.setSubObj();
        this.getData();
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
      methods: {
        setSubObj() {
          for(var i = 0; i<10; i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl15/findById', {
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
        //插入
        addData() {
          if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.subObj) == '{}') {
            return
          }
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/dcl15/save", this.$qs.stringify({
            BBtDcl15M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
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
          this.axios.post('/HiQuality/dcl15/update', this.$qs.stringify({
            BBtDcl15M:JSON.stringify(this.obj)
          })).then(res=>{
              console.log("修改接口")
              console.log(res)
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
          this.axios.get('/HiQuality/dcl15/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
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
  table {border-collapse:collapse;}
  th,td {border:1px solid #616161;}
.t-left{
  padding-left: 5px;
}
</style>
