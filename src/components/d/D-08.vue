<template>
  <div class="D-08 text-center main-d lengthways-a ad-textarea">
    <p class="top-name-p width-803">D-08</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center" ><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center" ><strong>钻(挖)孔桩终孔后灌注混凝土前检查记录</strong><strong> </strong></h3>
    <div class="text-left width-803">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-803">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel">
      <tr >
        <td width="108" valign="center" colspan="2" ><p align="center">墩（台）号</p> </td>
        <td width="192" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
        <td width="144" valign="center" colspan="3" ><p align="center" >桩  号 </p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr >
        <td width="108" valign="center" colspan="2" ><p align="center" >桩 基 编 号 </p></td>
        <td width="192" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m3"></p></td>
        <td width="144" valign="center" colspan="3" ><p align="center" >孔底沉淀厚度（mm） </p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr >
        <td width="108" valign="center" colspan="2" ><p align="center" >护筒（壁）顶标高（m） </p></td>
        <td width="192" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
        <td width="144" valign="center" colspan="3" ><p align="center" >护筒（壁）长度（m） </p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m6"></p></td>
      </tr>
      <tr >
        <td width="82" valign="center" ><p align="center" >设 计 <br />
          直 径 <br />
          （m） </p></td>
        <td width="113" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m7"></p></td>
        <td width="103" valign="center" colspan="2" ><p align="center" >终 孔 <br />
          直 径 <br />
          （m） </p></td>
        <td width="108" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m8"></p></td>
        <td width="96" valign="center" colspan="3" ><p align="center" >孔 位 <br />
          偏 差 <br />
          （m） </p></td>
        <td width="108" valign="center" ><p align="center" ><input type="text" v-model="obj.m9"></p></td>
      </tr>
      <tr >
        <td width="82" valign="center" ><p align="center" >设 计 孔 底 标 高（m） </p></td>
        <td width="113" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m10"></p></td>
        <td width="103" valign="center" colspan="2" ><p align="center" >终孔孔 <br />
          底标高 <br />
          （m） </p></td>
        <td width="108" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m11"></p></td>
        <td width="96" valign="center" colspan="3" ><p align="center" >灌注前孔 <br />
          底 标 高（m） </p></td>
        <td width="108" valign="center" ><p align="center" ><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr >
        <td width="82" valign="center" ><p align="center" >钻（挖）孔中出现的问题处理 方 法 </p></td>
        <td width="529" valign="center" colspan="10" ><p align="center" ><textarea name="" cols="50" rows="7" v-model="obj.m13"></textarea></p></td>
      </tr>
      <tr >
        <td width="82" valign="center" rowspan="2" ><p align="center" >钢 筋 笼<br />骨  架 </p></td>
        <td width="120" valign="center" colspan="3" ><p align="center" >骨架总长 <br />
          （m） </p></td>
        <td width="126" colspan="2" ><p ><input type="text" v-model="obj.m14"></p></td>
        <td width="127" valign="center" colspan="3" ><p align="center" >骨架底面标高（m） </p></td>
        <td width="155" colspan="2" ><p ><input type="text" v-model="obj.m15"></p></td>
      </tr>
      <tr >
        <td width="120" valign="center" colspan="3" ><p align="center" >骨架每节长度（m） </p></td>
        <td width="126" colspan="2" ><p align="center" ><input type="text" v-model="obj.m16"></p></td>
        <td width="127" valign="center" colspan="3" ><p align="center" >焊接情况 </p></td>
        <td width="155" colspan="2" ><p align="center" ><input type="text" v-model="obj.m17"></p></td>
      </tr>
      <tr >
        <td width="82" valign="center" ><p align="center" >检 查<br />
          意 见 </p></td>
        <td width="529" colspan="10" ><p align="center" ><textarea name="" cols="50" rows="6" v-model="obj.m18"></textarea></p></td>
      </tr>
    </table>
  </div>
    <p class="bot-hint-p width-803"> 施工单位技术负责人：<input type="text" v-model="obj.m19" class="input-80"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">    
      <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
        name: "D-08",
      data(){
        return{
          isAdd:true,
          obj:{},
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
          //日期参数
          dateArr: [],
          id:''
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
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/d8/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.isAdd = false

            }
          })
        },
        //新增
        addData(){
          this.obj.m21 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/d8/save',this.$qs.stringify({
            BBtD8M:JSON.stringify(this.obj),
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
          this.obj.m21 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/d8/update',this.$qs.stringify({
            BBtD8M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d8/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {}
              this.isAdd = true;
            }
          })
        }

      }
    }
</script>

<style scoped>

</style>
