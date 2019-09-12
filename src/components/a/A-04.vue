<template>
    <div class="A04 text-center main-a lengthways-a">
      <p class="top-name-p width-623">A-04</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>施 工 日 志</h3>
      <div class="text-left width-623">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel table-padding table-tr-height-30" >
          <tr>
            <td width="305" valign="center" colspan="6" >
              <p>工程名称：<input type="text" v-model="obj.m1" class="input-200"></p>
            </td>
            <td width="271" valign="center" colspan="7"  >
              <p>气温（最高：<input type="text" class="date-input" v-model="obj.m2">&#8451;
                最低：<input type="text" class="date-input" v-model="obj.m3">&#8451;）
              </p>
            </td>
          </tr>
          <tr>
            <td width="305" valign="center" colspan="6" >
              <p >工程地点：<input type="text" v-model="obj.m4" class="input-200"></p>
            </td>
            <td width="271" valign="center" colspan="7" >
              <p align="left">气象：<input type="text" v-model="obj.m5" class="input-300"></p>
            </td>
          </tr>
          <tr >
            <td width="576"  colspan="13" >
              <p class="t-left padding-top5px">当日施工工程状况、持续时间及完成情况：</p>
              <textarea name="" cols="30" rows="14" v-model="obj.m6"></textarea>
            </td>
          </tr>
          <tr >
            <td width="66" valign="center" rowspan="6" ><p align="center" >人 </p>
              <p align="center" >&nbsp;</p>
              <p align="center" >员 </p></td>
            <td width="74" valign="center" colspan="2" rowspan="2" ><p align="center" >工种 </p></td>
            <td width="350"  colspan="8" ><p >工 地 分 段 </p></td>
            <td width="86" valign="center" colspan="2" rowspan="2" >
              <p align="center" >总数 </p>
            </td>
          </tr>
          <tr >
            <td width="106"  colspan="2" ><p align="center" >桩号 </p></td>
            <td width="71"  colspan="3" ><p align="center" >数量 </p></td>
            <td width="105"  colspan="2" ><p align="center" >桩号 </p></td>
            <td width="67"  ><p align="center" >数量 </p></td>
          </tr>
          <!--子表1数据列表-->
          <tr  v-for="(val,index) in controlArr1" :key="'con1'+index">
            <td width="74" valign="center" colspan="2" >
              <p align="center" ><input type="text" v-model="val.s1"></p>
            </td>
            <td width="106" valign="center" colspan="2" >
              <p align="center" ><input type="text" v-model="val.s2"></p>
            </td>
            <td width="71" valign="center" colspan="3" >
              <p align="center" ><input type="text" v-model="val.s3"></p>
            </td>
            <td width="105" valign="center" colspan="2" >
              <p align="center" ><input type="text" v-model="val.s4"></p>
            </td>
            <td width="67" valign="center" >
              <p align="center" ><input type="text" v-model="val.s5"></p>
            </td>
            <td width="86" valign="center" colspan="2" >
              <p align="center" ><input type="text" v-model="val.s6"></p>
            </td>
          </tr>
          <tr >
            <td width="140"  colspan="3" ><p align="center" >总计 </p></td>
            <td width="436"  colspan="10" >
              <p align="center" ><input type="text" v-model="obj.m7"></p></td>
          </tr>
          <tr >
            <td width="83"  colspan="2" ><p align="center" >设备名称 </p></td>
            <td width="56"  ><p align="center" >型号 </p></td>
            <td width="81"  ><p align="center" >在场数量 </p></td>
            <td width="90"  colspan="3" ><p align="center" >工作数量 </p></td>
            <td width="83"  colspan="2" ><p align="center" >停置数量 </p></td>
            <td width="113"  colspan="3" ><p align="center" >设备停置原因 </p></td>
            <td width="67"  ><p align="center" >备注 </p></td>
          </tr>
          <!--子表2数据列表-->
          <tr  v-for="(val,index) in controlArr2" :key="'con2'+index">
            <td width="83" valign="center" colspan="2" >
              <p align="center" ><input type="text" v-model="val.s1"></p>
            </td>
            <td width="56" valign="center" >
              <p align="center" ><input type="text" v-model="val.s2"></p>
            </td>
            <td width="81" valign="center" >
              <p align="center" ><input type="text" v-model="val.s3"></p>
            </td>
            <td width="90" valign="center" colspan="3" >
              <p align="center" ><input type="text" v-model="val.s4"></p>
            </td>
            <td width="83" valign="center" colspan="2" >
              <p align="center" ><input type="text" v-model="val.s5"></p>
            </td>
            <td width="113" valign="center" colspan="3" >
              <p align="center" ><input type="text" v-model="val.s6"></p>
            </td>
            <td width="67" valign="center" >
              <p align="center" ><input type="text" v-model="val.s7"></p>
            </td>
          </tr>

          <tr >
            <td width="312"  colspan="7" >
              <p class="t-left padding-top5px">检查和试验：</p><textarea name="" cols="30" rows="8" v-model="obj.m8"></textarea>
            </td>
            <td width="264"  colspan="6" >
              <p class="t-left padding-top5px">材料进场和储存：</p><textarea name="" cols="30" rows="8" v-model="obj.m9"></textarea>
            </td>
          </tr>
        </table>
      </div>
      <div class="bot-hint-p width-623">施工现场负责人：<input type="text" v-model="obj.m10" class="input-300">
        <div class="block display-lnl height-25 input-160">
          <span class="demonstration">日期：</span>
          <el-date-picker class="input-140"
                          size="mini"
                          v-model="obj.m11" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
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
  export default {
    name: "A-04",
    data() {
      return {
        isAdd: true,
        controlArr1: [],
        controlArr2: [],
        //主表
        obj: {
          subList1: [],
          subList2: []
        },
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
        headerInfo:{}, //表头信息
        id: '1'
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if(obj.data!='' && obj.data!=null && obj.data!=undefined){
        this.headerInfo = obj.data;
      };
      this.$publicFun.getRecInfo()

    },
    computed: {
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch: {
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
      setSubObj(){
        for(var i= 0; i<8;i++){
          if(i<4){
            let subObj1 ={};
            this.controlArr1.push(subObj1 );
          }
          let subObj2 ={};
          this.controlArr2.push(subObj2 );
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A04/findA04ById', {
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
            let arr1 = [];
            let arr2 = [];
            if (this.obj.subList1 != undefined && this.obj.subList1.length >0){
              this.obj.subList1.forEach((item) => {
                arr1.push(item)
              })
              this.controlArr1 = arr1;
            }
            if (this.obj.subList2 != undefined && this.obj.subList2.length >0){
              this.obj.subList2.forEach((item) => {
                arr2.push(item)
              })
              this.controlArr2 = arr2;
            }

          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList1 = this.controlArr1;
        this.obj.subList2 = this.controlArr2;
        this.axios.post("/HiQuality/A04/saveA04", this.$qs.stringify({
          a04:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
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
        this.obj.subList1 = this.controlArr1;
        this.obj.subList2 = this.controlArr2;
        this.axios.post('/HiQuality/A04/updateA04', this.$qs.stringify({
          a04:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A04/deleteA04', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr1 = [];
            this.controlArr2 = [];
            this.obj = {subList1:[],subList2:[]}
            this.setSubObj();
          }

        })
      }

    }
  }
</script>

<style scoped>

</style>
