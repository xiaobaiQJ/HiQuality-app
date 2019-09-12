<template>
  <div class="D-24 text-center">
    <p class="top-name-p width-710">D-24</p>
  <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>路基填筑厚度原始记录</strong><strong> </strong></h3>
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
    <table border="1" cellspacing="0" class="public-tabel">
      <tr >
        <td width="139" valign="center" colspan="2" ><p align="center">检查范围或桩号</p> </td>
        <td width="141" valign="center" colspan="2" ><input type="text" v-model="obj.m1"></td>
        <td width="101" valign="center" colspan="2" ><p align="center" >填筑材料 </p></td>
        <td width="83" valign="center" ><p align="center" ><input type="text" v-model="obj.m2"></p></td>
        <td width="83" valign="center" ><p align="center" >规定厚度 </p></td>
        <td width="83" valign="center" ><p align="center" ><input type="text" v-model="obj.m3"></p></td>
      </tr>
      <tr >
        <td width="93" valign="center" rowspan="2" ><p align="center" >实测松 <br />
          铺厚度 <br />
          (cm) </p></td>
        <td width="93" valign="center" colspan="2" rowspan="2" ><p align="center" >压实 <br />
          厚度 <br />
          (cm) </p></td>
        <td width="93" valign="center" rowspan="2" ><p align="center" >压缩量(cm) </p></td>
        <td width="101" valign="center" colspan="2" ><p align="center" >桩 号 </p></td>
        <td width="83" valign="center" rowspan="2" ><p align="center" >实测松 <br />
          铺厚度 <br />
          (cm) </p></td>
        <td width="83" valign="center" rowspan="2" ><p align="center" >压实 <br />
          厚度 <br />
          (cm) </p></td>
        <td width="83" valign="center" rowspan="2" ><p align="center" >压缩量(cm) </p></td>
      </tr>
      <tr >
        <td width="50" valign="center" ><p align="center" >左 </p></td>
        <td width="50" valign="center" ><p align="center" >右 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="93" valign="center" ><p align="center" ><input type="text" v-model="val.s1"></p></td>
        <td width="93" valign="center" colspan="2" ><p><input type="text" v-model="val.s2"></p></td>
        <td width="93" valign="center" ><p align="center" ><input type="text" v-model="val.s3"></p></td>
        <td width="101" valign="center" colspan="2" ><p><input type="text" v-model="val.s4"></p></td>
        <td width="83" valign="center" ><p align="center" ><input type="text" v-model="val.s5"></p></td>
        <td width="83" valign="center" ><p align="center" ><input type="text" v-model="val.s6"></p></td>
        <td width="83" valign="center" ><p align="center" ><input type="text" v-model="val.s7"></p></td>
      </tr>

      <tr >
        <td width="631" valign="center" colspan="9" >
          <p class="t-left">检查意见：</p>
          <textarea name="" cols="30" rows="10" v-model="obj.m4"></textarea>
         </td>
      </tr>
    </table>
    <p align="center">施工单位技术负责人：<input type="text" v-model="obj.m5" class="input-80">
      记录：<input type="text" v-model="obj.m6" class="input-80">
      监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80"> 
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
        name: "D-24",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          addObj:{
            subList: []
          },
          obj:{
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
          m15DataArr:[],
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
        this.setSubObj();
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<15;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/d24/findById',{
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
          this.axios.post('/HiQuality/d24/save',this.$qs.stringify({
            BBtD24M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d24/update',this.$qs.stringify({
            BBtD24M:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/d24/deleteById',{
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
