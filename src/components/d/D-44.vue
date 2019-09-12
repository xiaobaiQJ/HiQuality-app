<template>
  <div class="D-44 text-center">
    <p class="top-name-p width-968">D-44</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>预应力张拉记录汇总表</strong><strong> </strong></h3>
    <div class="public-tilte flex-r margin-auto width-968">
      <div>
        <p>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></p>
        <p>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></p>
      </div>
      <div>
        <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></p>
        <p>桥梁名称：<input type="text" v-model="obj.m1"></p>
      </div>
      <div>
        <p>编号：<input type="text" v-model="rec.recNo"></p>
        <p>桩号：<input type="text" v-model="obj.m2"></p>
      </div>
    </div>
    <table border="1" cellspacing="0" class="public-tabel">
      <tr >
        <td width="45" valign="center" rowspan="2" ><br />
          序号 </td>
        <td width="104" valign="center" rowspan="2" ><p align="center" >张拉端断 <br />
          面 号 </p></td>
        <td width="103" valign="center" rowspan="2" ><p align="center" >锚固端断 <br />
          面 号 </p></td>
        <td width="124" valign="center" rowspan="2" ><p align="center" >张拉端锚固 <br />
          型 式 </p></td>
        <td width="94" valign="center" rowspan="2" ><p align="center" >锚固端锚固型 式 </p></td>
        <td width="94" valign="center" rowspan="2" ><p align="center" >钢丝束 <br />
          编 号 </p></td>
        <td width="94" valign="center" rowspan="2" ><p align="center" >控制张拉力（KN） </p></td>
        <td width="130" valign="center" colspan="2" ><p align="center" >断滑丝数量 </p></td>
        <td width="153" valign="center" rowspan="2" ><p align="center" >备    注 </p></td>
      </tr>
      <tr >
        <td width="64" valign="center" ><p align="center" >断 丝 </p></td>
        <td width="66" valign="center" ><p align="center" >滑 丝 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="45" valign="top" ><p><input type="text" v-model="val.s1"></p></td>
        <td width="104" valign="top" ><p><input type="text" v-model="val.s2"></p></td>
        <td width="103" valign="top" ><p><input type="text" v-model="val.s3"></p></td>
        <td width="124" valign="top" ><p><input type="text" v-model="val.s4"></p></td>
        <td width="94" valign="top" ><p><input type="text" v-model="val.s5"></p></td>
        <td width="94" valign="top" ><p><input type="text" v-model="val.s6"></p></td>
        <td width="94" valign="top" ><p><input type="text" v-model="val.s7"></p></td>
        <td width="64" valign="top" ><p><input type="text" v-model="val.s8"></p></td>
        <td width="66" valign="top" ><p><input type="text" v-model="val.s9"></p></td>
        <td width="153" valign="top" ><p><input type="text" v-model="val.s10"></p></td>
      </tr>
    </table>
  <p class="bot-hint-p width-968">施工单位技术负责人：<input type="text" v-model="obj.m3" class="input-140">制表：<input type="text" v-model="obj.m4" class="input-140"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-140">
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
        name: "D-44",
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
          dateArr: [],
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
          for(var i= 0; i<12;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d44/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.dateArr = splitDate(this.obj.m6,'-');
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
          this.axios.post('/HiQuality/d44/save',this.$qs.stringify({
            BBtD44M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d44/update',this.$qs.stringify({
            BBtD44M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d44/deleteById', {
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
