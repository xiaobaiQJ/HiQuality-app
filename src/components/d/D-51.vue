<template>
    <div class="D-51 text-center">
      <p class="top-name-p width-1023">D-51</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>路基边坡坡度检查记录</strong><strong> </strong></h3>
      <div class="text-left width-1023">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1023">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" >
        <tr class="public-tabel">
          <td width="91" valign="center" ><p align="center">工程名称 </p></td>
          <td width="396" valign="center" colspan="9" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="96" valign="center" colspan="3" ><p align="center" >范 围 </p></td>
          <td width="360" valign="center" colspan="8" ><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr >
          <td width="91" valign="center" rowspan="3" ><p align="center" >桩号 </p></td>
          <td width="396" valign="center" colspan="9" >
            <p align="center" >左侧（允许偏差：  <input type="text" v-model="obj.m3" class="input-50">     ） </p>
          </td>
          <td width="396" valign="center" colspan="10" >
            <p align="center" >右侧（允许偏差：  <input type="text" v-model="obj.m4" class="input-50">     ） </p>
          </td>
          <td width="60" valign="center" rowspan="3" ><p align="center" >备注 </p></td>
        </tr>
        <tr >
          <td width="132" valign="center" colspan="3" ><p align="center" >设计值（%） </p></td>
          <td width="132" valign="center" colspan="3" ><p align="center" >实测值（%） </p></td>
          <td width="132" valign="center" colspan="3" ><p align="center" >偏差值（%） </p></td>
          <td width="132" valign="center" colspan="4" ><p align="center" >设计值（%） </p></td>
          <td width="132" valign="center" colspan="3" ><p align="center" >实测值（%） </p></td>
          <td width="132" valign="center" colspan="3" ><p align="center" >偏差值（%） </p></td>
        </tr>
        <tr >
          <td width="44" valign="center" ><p align="center" >1 </p></td>
          <td width="44" valign="center" ><p align="center" >2 </p></td>
          <td width="44" valign="center" ><p align="center" >3 </p></td>
          <td width="44" valign="center" ><p align="center" >1 </p></td>
          <td width="44" valign="center" ><p align="center" >2 </p></td>
          <td width="44" valign="center" ><p align="center" >3 </p></td>
          <td width="44" valign="center" ><p align="center" >1 </p></td>
          <td width="44" valign="center" ><p align="center" >2 </p></td>
          <td width="44" valign="center" ><p align="center" >3 </p></td>
          <td width="44" valign="center" ><p align="center" >1 </p></td>
          <td width="44" valign="center" ><p align="center" >2 </p></td>
          <td width="44" valign="center" colspan="2" ><p align="center" >3 </p></td>
          <td width="44" valign="center" ><p align="center" >1 </p></td>
          <td width="44" valign="center" ><p align="center" >2 </p></td>
          <td width="44" valign="center" ><p align="center" >3 </p></td>
          <td width="44" valign="center" ><p align="center" >1 </p></td>
          <td width="44" valign="center" ><p align="center" >2 </p></td>
          <td width="44" valign="center" ><p align="center" >3 </p></td>
        </tr>
        <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
          <td width="91" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s8"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s9"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s10"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s11"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s12"></p></td>
          <td width="44" valign="center" colspan="2" ><p><input type="text" v-model="val.s13"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s14"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s15"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s16"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s17"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s18"></p></td>
          <td width="44" valign="center" ><p><input type="text" v-model="val.s19"></p></td>
          <td width="60" valign="center" ><p><input type="text" v-model="val.s20"></p></td>
        </tr>
      </table>
      <p class="bot-hint-p width-1023">施工单位技术负责人：<input type="text" v-model="obj.m5" class="input-105"> 记录：<input type="text" v-model="obj.m6" class="input-105"> 复核：<input type="text" v-model="obj.m7" class="input-105">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-105"> 日期：
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
        name: "D-51",
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
      created() {
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
      methods: {
        setSubObj(){
          for(var i= 0; i<8;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d51/findById', {
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d51/save',this.$qs.stringify({
            BBtD51M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d51/update',this.$qs.stringify({
            BBtD51M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d51/deleteById', {
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
