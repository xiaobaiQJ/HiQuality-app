<template>
  <div class="DCL-04 text-center">
      <p class="top-name-p width-968">DCL-04</p>
      <p> 贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p> 黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
      <p>  <strong>施工加密导线测量记录表</strong></p>
      <div class="public-tilte flex-r margin-auto width-968">
        <div>
          <p>承包单位：<input type="text" v-model="headerInfo.unitName" class="input-400" disabled></p>
          <p>监理单位：<input type="text" v-model="headerInfo.unitName2" class="input-400" disabled></p>
        </div>
        <div>
          <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" class="input-60" disabled></p>
          <p>测量范围或桩号：<input type="text" class="input-105" v-model="obj.m1"></p>
        </div>
        <div>
          <p>编号：<input type="text" class="input-60" v-model="rec.recNo"></p>
          <p>&nbsp;</p>
        </div>
      </div>
    <div align="center">
      <table border="1" cellspacing="0" width="968" class="parent" >
        <tr width="968">
          <td colspan="10" rowspan="10">
            <table frame="void" border="1" cellspacing="0" style="float: left;" width="484" class="child1-table public-tabel">
              <tr >
                <td width="157" valign="center"  ><br />
                  点 号 </td>
                <td width="158" valign="center" ><p align="center" >左角角度(&#946;) <br />
                  (&#176;&#8242;&#8243;) </p></td>
                <td width="157" valign="center" ><p align="center" >平距(D) <br />
                  (m) </p>
                </td>
              </tr>
              <tr v-for="(val,index) in controlArr1" :key="'sub1'+index">
                <td width="157" valign="top"  ><p><input type="text" v-model="val.s1"></p></td>
                <td width="158" valign="top" ><p><input type="text" v-model="val.s2"></p></td>
                <td width="157" valign="top" ><p><input type="text" v-model="val.s3"></p></td>
              </tr>
            </table>
          </td>
          <td colspan="10" rowspan="10">
            <table border="1" frame="void" cellspacing="0" style="float: left;" width="484" class="child2-table public-tabel">
              <tr >
                 <td width="472" valign="center" colspan="3" ><p align="center" >已知点成果 </p></td>
              </tr>
              <tr >
                <td width="157" valign="center" rowspan="2" ><p align="center" >点号 </p></td>
                <td width="314" valign="center" colspan="2" ><p align="center" >坐      标 </p></td>
              </tr>
              <tr >
                <td width="157" valign="top" ><p align="center" >X </p></td>
                <td width="157" valign="top" ><p align="center" >Y </p></td>
              </tr>
              <tr v-for="(val,index) in controlArr2" :key="'sub2'+index">
                <td width="157" valign="top"  ><p><input type="text" v-model="val.s1"></p></td>
                <td width="157" valign="top" ><p><input type="text" v-model="val.s2"></p></td>
                <td width="157" valign="top" ><p><input type="text" v-model="val.s3"></p></td>
              </tr>
              <tr >
                <td width="471" valign="top" colspan="3" rowspan="2" >
                  <p class="t-left">附件：1.导线观测略图（附后）；<input type="text" v-model="obj.m2" class="input-80 height-25"> <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.导线平差计算表（附后）<input type="text" v-model="obj.m3" class="input-80 height-25">
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-968">测 量：<input type="text" v-model="obj.m3" class="input-80">计 算：<input type="text" v-model="obj.m4" class="input-80">复 核：<input type="text" v-model="obj.m5" class="input-80">监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled class="input-60">
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
  import {splitDate,joinDate} from '../../utils/utils'
    export default {
        name: "DCL-04",
      data(){
        return{
          isAdd: true,
          controlArr1: [],
          controlArr2: [],
          //主表
          obj: {
            subList1: [],
            subList2: [],
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
          auditTypeIdArr:[26],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          m7DateArr:[],
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
          for(var i= 0; i<9;i++){
            let subObj1={};
            this.controlArr1.push(subObj1);
            if(i<6){
              let subobj={};
              this.controlArr2.push(subobj);
            }
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/dcl4/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data.main;
              this.m7DateArr = splitDate(this.obj.m7,'-');
              this.obj.subList1 = res.data.data.sub1;
              this.obj.subList2 = res.data.data.sub2;
              this.isAdd = false;
              let arr1 = []
              let arr2 = []
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
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.m7 = joinDate(this.m7DateArr,'-');
          this.obj.subList1 = this.controlArr1;
          this.obj.subList2 = this.controlArr2;
          this.axios.post('/HiQuality/dcl4/save',this.$qs.stringify({
            BBtDcl4M:JSON.stringify(this.obj),
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
          this.obj.subList1 = this.controlArr1;
          this.obj.subList2 = this.controlArr2;
          this.axios.post('/HiQuality/dcl4/update',this.$qs.stringify({
            BBtDcl4M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
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
          this.axios.get('/HiQuality/dcl4/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.controlArr1 = [];
              this.controlArr2 = [];
              this.obj = {subList1:[],subList2:[]}
              this.isAdd = true;
              this.setSubObj();
            }

          })
        }

      }
    }
</script>

<style scoped>
.height-30{
  width: 80px;
  height: 30px;
}
/*table {border-collapse:collapse;}*/
.parent{
  border:1px solid #616161;
}
.child1-table>tr{
  border-left: none;
}
.child2-table>tr{
  border-left: none;
}
/*.parent>th,.parent>tr,.parent>tr>td{border:none;}*/
</style>
