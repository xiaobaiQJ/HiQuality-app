<template>
    <div class="DQQT-01 text-center">
      <p class="top-name-p width-710">DQQT-01 </p>
      <p> 贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p> 黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
      <p>  <strong>挖孔桩终孔后桩底钎探原始记录</strong></p>
      <div class="text-left width-710">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-710">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel">
          <tr >
            <td width="148" valign="top" ><p align="cneter">桥梁名称</p> </td>
            <td width="226" valign="top" colspan="2" ><p><input type="text" v-model="obj.m1"></p></td>
            <td width="131" valign="top" ><p align="center" >桩基编号 </p></td>
            <td width="182" valign="top" colspan="2" ><p><input type="text" v-model="obj.m2"></p></td>
          </tr>
          <tr >
            <td width="148" valign="top" ><p align="center" >设计孔底标高（m） </p></td>
            <td width="226" valign="top" colspan="2" ><p><input type="text" v-model="obj.m3"></p></td>
            <td width="131" valign="top" ><p align="center" >终孔孔底标高（m） </p></td>
            <td width="182" valign="top" colspan="2" ><p><input type="text" v-model="obj.m4"></p></td>
          </tr>
          <tr >
            <td width="148" valign="top" ><p align="center" >设计孔径（m） </p></td>
            <td width="94" valign="top" ><p ><input type="text" v-model="obj.m5"></p></td>
            <td width="131" valign="top" ><p align="center" >实际孔径（m） </p></td>
            <td width="131" valign="top" ><p><input type="text" v-model="obj.m6"></p></td>
            <td width="77" valign="top" ><p align="center" >钎探日期 </p></td>
            <td width="104" valign="top" >          <div class="block">
              <el-date-picker v-model="obj.m7" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="374" valign="top" colspan="3" ><p align="center" >钎探点情况 </p></td>
            <td width="313" valign="top" colspan="3" rowspan="7" >
              <input type="text" v-model="obj.m8" class="height-25">
              <img style="position: relative;top: 50px;" src="../../assets/files/imgs/D/DQQT-01_wps53.png" width="150" height="150" />
            </td>
          </tr>
          <tr>
            <td width="148" valign="top" ><p align="center" >钎探点编号 </p></td>
            <td width="94" valign="top" ><p align="center" >钎探深度（m） </p></td>
            <td width="131" valign="top" ><p align="center" >钎探情况描述 </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="148" valign="top" ><p><input type="text" v-model="val.s1"></p></td>
            <td width="94" valign="top" ><p align="center" ><input type="text" v-model="val.s2"></p></td>
            <td width="131" valign="top" ><p align="center" ><input type="text" v-model="val.s3"></p></td>
          </tr>
          <tr>
            <td width="374" valign="top" colspan="3" >
              <p class="t-left">自检意见：
                <textarea name="" cols="30" rows="4" v-model="obj.m9"></textarea>
              </p>
            </td>
            <td width="313" valign="top" colspan="3" >
              <p class="t-left">监理意见：
                <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-710">施工现场技术负责人：<input type="text" v-model="obj.m11" class="input-50">钎探人：<input type="text" v-model="obj.m12" class="input-50">记录：<input type="text" v-model="obj.m13" class="input-50">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50">
        日期：<input type="text" v-model="nameList1[0].auditTime" disabled>
      </p>
      <p class="bot-hint-p width-710 t-left">填表说明：1、孔钎探点不低于设计要求点数，钎探深度按设计要求（或规范不低于5米） <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、验收要求照片必须能体现整体钎探孔位，且技术员、监理员同框孔底照片，并能突出局部检测已满足设计或规范深度） </p>
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
        name: "DQQT-01",
     data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        rec: {
          recNo:' ',
          tableId:4,
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
        id: '15'

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
    mounted(){
      this.setSubObj()
      this.getData();
    },
    methods:{
      setSubObj(){
        for(var i= 0; i<5;i++){
          let subObj={};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData(){
        this.axios.get('/HiQuality/dqqt1/findById',{
          params:{
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res=>{
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data.main;
            this.obj.subList=res.data.data.sub;
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
      addData(){
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/dqqt1/save',this.$qs.stringify({
          BBtDqqt1M:JSON.stringify(this.obj),
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
      updateData(){
       this.obj.subList = this.controlArr
        this.axios.post('/HiQuality/dqqt1/update',this.$qs.stringify({
          BBtDqqt1M:JSON.stringify(this.obj)
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
      deleteData(){
        this.axios.get('/HiQuality/dqqt1/deleteById',{
          params:{
            id: this.id
          }
        }).then(res=>{
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
