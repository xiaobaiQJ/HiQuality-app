<template>
  <div class="D-20 text-center">
    <p class="top-name-p width-663">D-20</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>锚 座 施 工 记 录</strong><strong> </strong></h3>
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
    <table border="1" cellspacing="0" class="public-tabel" >
      <tr>
        <td width="43" valign="center" rowspan="2" ><p align="center">编号</p> </td>
        <td width="60" valign="center" rowspan="2" ><p align="center" >施工日期 </p></td>
        <td width="132" valign="center" rowspan="2" ><p align="center" >配合比 </p></td>
        <td width="38" valign="center" ><p align="center" >水泥 </p></td>
        <td width="30" valign="center" ><p align="center" >砂 </p></td>
        <td width="30" valign="center" ><p align="center" >碎石 </p></td>
        <td width="30" valign="center" ><p align="center" >外掺剂 </p></td>
        <td width="30" valign="center" ><p align="center" >水质 </p></td>
        <td width="44" valign="center" rowspan="2" ><p align="center" >拆模日期 </p></td>
        <td width="77" valign="center" rowspan="2" ><p align="center" >配筋及 <br />
          尺寸 </p></td>
        <td width="60" valign="center" rowspan="2" ><p align="center" >挖方 </p></td>
        <td width="41" valign="center" rowspan="2" ><p align="center" >附注 </p></td>
      </tr>
      <tr>
        <td width="38" valign="center" ><p align="center" >强度等级 </p></td>
        <td width="30" valign="center" ><p align="center" >类型 </p></td>
        <td width="30" valign="center" ><p align="center" >岩性 </p></td>
        <td width="30" valign="center" ><p align="center" >类型 </p></td>
        <td width="30" valign="center" ><p align="center" >类型 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="43" valign="center" ><input type="text" v-model="val.s1"></td>
        <td width="60" valign="center" >          <div class="block">
          <el-date-picker v-model="val.s2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="132" valign="center" ><input type="text" v-model="val.s3"></td>
        <td width="38" valign="center" ><input type="text" v-model="val.s4"></td>
        <td width="30" valign="center" ><input type="text" v-model="val.s5"></td>
        <td width="30" valign="center" ><input type="text" v-model="val.s6"></td>
        <td width="30" valign="center" ><input type="text" v-model="val.s7"></td>
        <td width="30" valign="center" ><input type="text" v-model="val.s8"></td>
        <td width="44" valign="center" >          <div class="block">
          <el-date-picker v-model="val.s9" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="77" valign="center" ><input type="text" v-model="val.s10"></td>
        <td width="60" valign="center" ><input type="text" v-model="val.s11"></td>
        <td width="41" valign="center" ><input type="text" v-model="val.s12"></td>
      </tr>
      <tr >
        <td width="619" valign="top" colspan="12" ><p >质量评定：<textarea name="" cols="50" rows="5" v-model="obj.m1"></textarea></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-663">施工单位技术负责人：<input type="text" v-model="obj.m2" class="input-60">记 录：<input type="text" v-model="obj.m3" class="input-60">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-60">日期：
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
        name: "D-20",
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
        this.setSubObj();
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<16;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/d20/findById',{
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
          this.axios.post('/HiQuality/d20/save',this.$qs.stringify({
            BBtD20M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d20/update',this.$qs.stringify({
            BBtD20M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d20/deleteById',{
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
