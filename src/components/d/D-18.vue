<template>
  <div class="D-18 text-center">
    <p class="top-name-p width-663">D-18</p>
  <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>锚索钻孔施工记录</strong><strong> </strong></h3>
    <div class="text-left width-663">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-663">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel" >
      <tr>
        <td width="134" valign="center" colspan="4"><p align="center">钻孔编号</p></td>
        <td width="151" valign="center" colspan="4"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="132" valign="center" colspan="4"><p align="center">工程名称 </p></td>
        <td width="194" valign="center" colspan="3"><p align="center"><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="134" valign="center" colspan="4"><p align="center">设计钻孔深度（m） </p></td>
        <td width="151" valign="center" colspan="4"><p align="center"><input type="text" v-model="obj.m3"></p></td>
        <td width="132" valign="center" colspan="4"><p align="center">实际钻孔深度 <br/>
          （m） </p></td>
        <td width="194" valign="center" colspan="3"><p align="center"><input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr>
        <td width="134" valign="center" colspan="4"><p align="center">钻孔倾角 </p></td>
        <td width="151" valign="center" colspan="4"><p align="center"><input type="text" v-model="obj.m5"></p></td>
        <td width="132" valign="center" colspan="4"><p align="center">锚固段长度（m） </p></td>
        <td width="194" valign="center" colspan="3"><p align="center"><input type="text" v-model="obj.m6"></p></td>
      </tr>
      <tr>
        <td width="134" valign="center" colspan="4"><p align="center">开工日期 </p></td>
        <td width="151" valign="center" colspan="4">          <div class="block">
          <el-date-picker v-model="obj.m7" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="132" valign="center" colspan="4"><p align="center">完工日期 </p></td>
        <td width="194" valign="center" colspan="3">          <div class="block">
          <el-date-picker v-model="obj.m8" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
      </tr>
      <tr>
        <td width="108" valign="center" colspan="3"><p align="center">时间 </p></td>
        <td width="142" valign="center" colspan="4"><p align="center">工程项目 </p></td>
        <td width="47" valign="center" colspan="2"><p align="center">钻头 </p></td>
        <td width="142" valign="center" colspan="4"><p align="center">钻进深度 </p></td>
        <td width="135" valign="center" rowspan="2"><p align="center">地层描述 </p></td>
        <td width="36" valign="center" rowspan="2"><p align="center">附注 </p></td>
      </tr>
      <tr>
        <td width="61" valign="center"><p align="center">月日 </p></td>
        <td width="47" valign="center" colspan="2"><p align="center">时分 </p></td>
        <td width="47" valign="center" colspan="2"><p align="center">纯钻 </p></td>
        <td width="47" valign="center"><p align="center">辅钻 </p></td>
        <td width="47" valign="center"><p align="center">故障 </p></td>
        <td width="47" valign="center" colspan="2"><p align="center">直径类型长度 </p></td>
        <td width="47" valign="center"><p align="center">由(米) </p></td>
        <td width="47" valign="center"><p align="center">至 <br/>
          (米) </p></td>
        <td width="47" valign="center" colspan="2"><p align="center">合计(米) </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="61" valign="center"> <div class="block">
          <el-date-picker v-model="val.s1" type="date" size="mini" class="input-80" format="MM-dd" value-format="MM-dd"></el-date-picker>
        </div></td>
        <td width="47" valign="center" colspan="2"> <input type="text" v-model="val.s2"></td>
        <td width="47" valign="center" colspan="2"><input type="text" v-model="val.s3"></td>
        <td width="47" valign="center"><input type="text" v-model="val.s4"></td>
        <td width="47" valign="center"><input type="text" v-model="val.s5"></td>
        <td width="47" valign="center" colspan="2"><input type="text" v-model="val.s6"></td>
        <td width="47" valign="center"><input type="text" v-model="val.s7"></td>
        <td width="47" valign="center"><input type="text" v-model="val.s8"></td>
        <td width="47" valign="center" colspan="2"><input type="text" v-model="val.s9"></td>
        <td v-if="index===0" width="135" valign="center" rowspan="8" >
          <textarea name="" cols="50" rows="17" v-model="obj.m9"></textarea>
        </td>
        <td v-if="index===0" width="36" valign="center" rowspan="8">
          <textarea name="" cols="50" rows="17" v-model="obj.m10"></textarea>
        </td>
      </tr>
      <tr>
        <td width="96" valign="center" colspan="2">
          <p align="center">检 查 <br/>意 见 </p>
        </td>
        <td width="515" valign="center" colspan="13"><p align="center">
          <textarea name="" cols="50" rows="5 " v-model="obj.m11"></textarea>
        </p></td>
      </tr>
    </table>

  </div>
    <p class="bot-hint-p width-663">施工单位技术负责人：<input type="text" v-model="obj.m12" class="input-60">记 录：<input type="text" v-model="obj.m13" class="input-60">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-60">日期：
      <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
      <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
      <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
    name: "D-18",
    data(){
      return{
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
    mounted(){
      this.setSubObj()
      this.getData();
    },
    methods:{
      setSubObj(){
        for(var i= 0; i<8;i++){
          let subObj={};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData(){
        this.axios.get('/HiQuality/d18/findById',{
          params:{
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res=>{
          console.log("查询接口")
          console.log(res);
          if(res.data.status==200){
            this.obj = res.data.data.main;
            this.obj.subList = res.data.data.sub;
            this.isAdd = false
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
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/d18/save',this.$qs.stringify({
          BBtD18M:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/d18/update',this.$qs.stringify({
          BBtD18M:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d18/deleteById',{
          params:{
            id:this.id
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
