<template>
  <div class="D-37 text-center">
  <p class="top-name-p width-991">D-37</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>真空吸水检查记录</strong><strong> </strong></h3>
    <div class="text-left width-991">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-991">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center" >
    <table border="1" cellspacing="0" class="public-tabel" >
      <tr >
        <td width="101" valign="center" rowspan="3" ><p align="center">起讫桩号</p> </td>
        <td width="51" valign="center" rowspan="3" ><p align="center" >施工日期 </p></td>
        <td width="52" valign="center" rowspan="3" ><p align="center" >构件日期 </p></td>
        <td width="132" valign="center" rowspan="3" ><p align="center" >构件尺寸 <br />
          长&#215;宽&#215;高 <br />
          （m） </p></td>
        <td width="83" valign="center" rowspan="3" ><p align="center" >原始加 <br />
          水 量 <br />
          （Kg） </p></td>
        <td width="332" valign="center" colspan="8" ><p align="center" >吸 水 时 间（min） </p></td>
        <td width="56" valign="center" rowspan="3" ><p align="center" >吸 <br />
          水 <br />
          率 <br />
          （%） </p></td>
        <td width="134" valign="center" rowspan="3" ><p align="center" >备  注 </p></td>
      </tr>
      <tr >
        <td width="332" valign="center" colspan="8" ><p align="center" >真空度（mHg）/吸水量（kg） </p></td>
      </tr>
      <tr >
        <td width="41" valign="center" ><p align="center" >5 </p></td>
        <td width="41" valign="center" ><p align="center" >10 </p></td>
        <td width="41" valign="center" ><p align="center" >15 </p></td>
        <td width="41" valign="center" ><p align="center" >20 </p></td>
        <td width="41" valign="center" ><p align="center" >25 </p></td>
        <td width="41" valign="center" ><p align="center" >30 </p></td>
        <td width="41" valign="center" ><p align="center" >35 </p></td>
        <td width="41" valign="center" ><p align="center" >40 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="101" valign="center" ><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="51" valign="center" >          <div class="block">
          <el-date-picker v-model="val.s2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="52" valign="center" >          <div class="block">
          <el-date-picker v-model="val.s3" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="132" valign="center" ><p><input type="text" class="td-input" v-model="val.s4"></p></td>
        <td width="83" valign="center" ><p><input type="text" class="td-input" v-model="val.s5"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s6"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s7"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s8"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s9"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s10"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s11"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s12"></p></td>
        <td width="41" valign="center" ><p><input type="text" class="td-input" v-model="val.s13"></p></td>
        <td width="56" valign="center" ><p><input type="text" class="td-input" v-model="val.s14"></p></td>
        <td width="134" valign="center" ><p><input type="text" class="td-input" v-model="val.s15"></p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-991">施工单位技术负责人：<input type="text" v-model="obj.m1">记录：<input type="text" v-model="obj.m2">监理员：<input type="text" v-model="nameList1[1].fullName" disabled><br clear="all" />
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
        name: "D-37",
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
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id: '1'     //主表id
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
                if (item[1].auditTypeId == 39) {
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
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d37/findById', {
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
          this.axios.post("/HiQuality/d37/save", this.$qs.stringify({
            BBtD37M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d37/update', this.$qs.stringify({
            BBtD37M:JSON.stringify(this.obj)
          })).then(res=>{
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
          this.axios.get('/HiQuality/d37/deleteById', {
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

</style>
