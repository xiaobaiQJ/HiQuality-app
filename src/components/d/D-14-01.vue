<template>
  <div class="D-14-01 text-center main-d lengthways-a ad-textarea ">
    <p class="top-name-p width-820">D-14-01</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>隧道锚喷支护施工记录(一)</strong><strong> </strong></h3>
    <div class="text-left width-820">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-820">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel" width="820">
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center">工程名称</p> </td>
        <td width="182" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
        <td width="119" valign="center" colspan="2" ><p align="center" >围岩类别 </p></td>
        <td width="222" valign="center" colspan="5" ><p align="center" ><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr >
        <td width="84" valign="center" ><p align="center" >支护断面起止桩号 </p></td>
        <td width="182" valign="center" colspan="2" >
          <p><input type="text" v-model="obj.m3"></p>
        </td>
        <td width="119" valign="center" colspan="2" ><p align="center" >记录时间 </p></td>
        <td width="222" valign="center" colspan="5" >
          <div class="block">
            <el-date-picker class="input-120"
                            size="mini"
                            v-model="obj.m4"
                            type="date"
                            placeholder="年     月     日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="84" valign="center" ><p align="center" >工程部位 </p></td>
        <td width="182" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
        <td width="119" valign="center" colspan="2" ><p align="center" >锚喷部位开挖 <br />
          （放炮）时间 </p></td>
        <td width="222" valign="center" colspan="5" >
          <div class="block">
            <el-date-picker class="input-95"
                            size="mini"
                            v-model="obj.m6"
                            type="datetime"
                            placeholder="年  月  日  时"
                            format="yyyy年MM月dd日 HH时"
                            value-format="yyyy-MM-dd HH">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="84" valign="center" ><p align="center" >锚杆施工<br />作业时间 </p></td>
        <td width="182" valign="center" colspan="2" >
          <div class="block" style="margin-left: 10px;">
            <el-date-picker class="input-95"
                            size="mini"
                            v-model="obj.m7"
                            type="datetime"
                            placeholder="月   日  时"
                            format="MM月dd日 HH时"
                            value-format="MM-dd HH">
            </el-date-picker>起至
          </div>
          <div class="block">
            <el-date-picker class="input-95"
                            size="mini"
                            v-model="obj.m8"
                            type="datetime"
                            placeholder="月   日  时"
                            format="MM月dd日 HH时"
                            value-format="MM-dd HH">
            </el-date-picker>止
          </div>
        </td>
        <td width="119" valign="center" colspan="2" ><p align="center" >喷射混凝土施工作业时间 </p></td>
        <td width="222" valign="center" colspan="5" >
          <div class="block" style="margin-left: 10px;">
            <el-date-picker class="input-120"
                            size="mini"
                            v-model="obj.m9"
                            type="datetime"
                            placeholder="月     日    时"
                            format="MM月dd日 HH时"
                            value-format="MM-dd HH">
            </el-date-picker>起至
          </div>
          <div class="block">
            <el-date-picker class="input-120"
                            size="mini"
                            v-model="obj.m10"
                            type="datetime"
                            placeholder="月     日    时"
                            format="MM月dd日 HH时"
                            value-format="MM-dd HH">
            </el-date-picker>止
          </div>
        </td>
      </tr>
      <tr >
        <td width="607" valign="center" colspan="10" ><p align="center" >锚 喷 材 料 </p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p >材料名称 </p></td>
        <td width="238" valign="center" colspan="3" ><p align="center" >型号、产地 </p></td>
        <td width="285" valign="center" colspan="6" ><p align="center" >试验报告编号、品质 </p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >水泥 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m11"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >砂 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m13"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m14"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >碎石 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m15"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m16"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >速凝剂 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m17"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m18"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >水 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m19"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m20"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >外掺料 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m21"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m22"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="84" valign="center" ><p align="center" >钢 筋 </p></td>
        <td width="238" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m23"></p></td>
        <td width="285" valign="center" colspan="6" ><p ><input type="text" v-model="obj.m24"></p></td>
      </tr>
      <tr class="table-padding5px">
        <td width="161" valign="center" colspan="2" ><p align="center" >喷射混凝土配合比（水泥：砂：碎石） </p></td>
        <td width="161" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m25"></p></td>
        <td width="82" valign="center" colspan="2" ><p align="center" >速凝剂 <br />
          掺量 </p></td>
        <td width="82" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m26"></p></td>
        <td width="82" valign="center" ><p align="center" >外掺料 <br />
          掺量 </p></td>
        <td width="38" valign="center" ><p ><input type="text" v-model="obj.m27"></p></td>
      </tr>
      <tr class="table-padding5px">
        <td width="161" valign="center" colspan="2" ><p align="center" >锚杆注浆配合比 <br />
          （净浆） </p></td>
        <td width="161" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m28"></p></td>
        <td width="126" valign="center" colspan="3" ><p align="center" >水灰比 </p></td>
        <td width="159" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m29"></p></td>
      </tr>
      <tr class="table-padding5px">
        <td width="161" valign="center" colspan="2" ><p align="center" >喷层厚度及控制方法 </p></td>
        <td width="161" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m30"></p></td>
        <td width="126" valign="center" colspan="3" ><p align="center" >喷护面积（m2） </p></td>
        <td width="159" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m31"></p></td>
      </tr>
      <tr class="table-padding5px">
        <td width="161" valign="center" colspan="2" ><p align="center" >锚杆数量（根） </p></td>
        <td width="161" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m32"></p></td>
        <td width="126" valign="center" colspan="3" ><p align="center" >使用水泥（kg） </p></td>
        <td width="159" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m33"></p></td>
      </tr>
      <tr class="table-padding5px">
        <td width="607" colspan="10" >
          <p class="t-left">其它（包括围岩坍塌等事故的时间、地点、过程、原因分析；锚喷作业中发生机械故障、堵管等事故的次数、原因和排除方法，以及其它需要记录的事项）：
            <textarea name="" cols="50" rows="5" v-model="obj.m34"></textarea>
          </p>
          </td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-820">施工单位技术负责人：<input type="text" v-model="obj.m35" class="input-140">记录：<input type="text" v-model="obj.m36" class="input-140">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-140"> </p>
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
        name: "D-14-01",
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
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/d14a/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
            }
          })
        },
        //新增
        addData() {
          this.axios.post('/HiQuality/d14a/save', this.$qs.stringify({
            BBtD14AM: JSON.stringify(this.obj),
            BQcRecInfo: JSON.stringify(this.rec)
          })).then(res => {
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
          this.axios.post('/HiQuality/d14a/update', this.$qs.stringify({
            BBtD14AM: JSON.stringify(this.obj)
          })).then(res => {
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
          this.axios.get('/HiQuality/d14a/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {}
              this.isAdd = true;

            }
          })
        },

      }
    }
</script>

<style scoped>
.height-30{
  height: 30px;
  width: 40px;
}
.input-20{
  width: 20px;
  height: 30px;
}
</style>
