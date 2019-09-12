<template>
  <div class="AQ-30 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>伤亡人员登记表</h3>
    <div class="t-right margin-auto width-682">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" class="public-tabel" width="708">
      <tr >
        <td width="72" colspan="3" valign="top"><p align="center">单位 <br />名称 </p></td>
        <td width="251" colspan="8" valign="top"><p align="center">&nbsp;</p></td>
        <td width="49" colspan="3" valign="top"><p align="center">项目 <br />
          名称 </p></td>
        <td width="191" colspan="4" ><input type="text" v-model="obj.m32"></td>
      </tr>

      <tr>
        <td width="60" colspan="2" rowspan="2" valign="top"><p align="left">伤亡者 <br />
          姓名 </p></td>
        <td width="81" colspan="3" rowspan="2" valign="top"><p><input type="text" v-model="obj.m1"></p></td>
        <td width="101" colspan="2" valign="top" class="height-20"><p align="left">在册职工 </p></td>
        <td width="26" valign="top" class="height-20"><p align="left">&nbsp;</p></td>
        <td width="30" colspan="2" rowspan="2" valign="top"><p align="left">性 <br />
          别 </p></td>
        <td width="34" colspan="2" rowspan="2" valign="top"><p><input type="text" v-model="obj.m3"></p></td>
        <td width="28" rowspan="2" valign="top"><p align="left">年 <br />
          龄 </p></td>
        <td width="24" colspan="2" rowspan="2" valign="top"><p><input type="text" v-model="obj.m4"></p></td>
        <td width="64" rowspan="2" valign="top"><p align="left">出生日期 </p></td>
        <td width="115" colspan="2" rowspan="2" valign="top">
          <div class="block display-lnl height-25 input-160">
            <el-date-picker class="input-140"
                            size="mini"
                            v-model="obj.m5"
                            type="date"
                            placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="101" colspan="2" valign="top" class="height-20"><p align="left">非在册职工 </p></td>
        <td width="26" valign="top" class="height-20"><p align="left">&nbsp;</p></td>
      </tr>
      <tr >
        <td width="39" rowspan="2" valign="top"><p align="center">工 <br />
          种 </p></td>
        <td width="21" rowspan="2" valign="top"><p align="center"><input type="text" v-model="obj.m6"></p></td>
        <td width="43" colspan="2" rowspan="2" valign="top"><p align="center">工 <br />
          龄 </p></td>
        <td width="38" rowspan="2" valign="top"><p align="left"><input type="text" v-model="obj.m7"></p></td>
        <td width="101" colspan="2" valign="top"><p align="left">本工种工龄 </p></td>
        <td width="50" colspan="2" valign="top"><p align="left"><input type="text" v-model="obj.m8"></p></td>
        <td width="68" colspan="4" valign="top"><p align="left">技术级别 </p></td>
        <td width="24" colspan="2" valign="top"><p align="left"><input type="text" v-model="obj.m9"></p></td>
        <td width="132" colspan="2" valign="top" style="width: 132px;">应受过安全教育 </td>
        <td width="48" colspan="2" valign="top"><input type="text" v-model="obj.m10" ></td>
      </tr>
      <tr >
        <td width="101" colspan="2" valign="top"><p align="left">总工龄 </p></td>
        <td width="50" colspan="2" valign="top"><p align="left"><input type="text" v-model="obj.m11"></p></td>
        <td width="68" colspan="4" valign="top"><p align="left">文化程度 </p></td>
        <td width="24" colspan="2" valign="top"><p align="left"><input type="text" v-model="obj.m12"></p></td>
        <td width="132" colspan="2" valign="top"><p >应有安全作业证 </p></td>
        <td width="48" colspan="2" valign="top"><input type="text" v-model="obj.m13" ></td>
      </tr>
      <tr>
        <td width="229" colspan="6" valign="top"><div align="left">事故时间：
          <div class="block display-lnl height-25 input-160">
            <el-date-picker class="input-140"
                            size="mini"
                            v-model="obj.m14"
                            type="datetime"
                            placeholder="年  月  日  时"
                            format="yyyy年MM月dd日 HH时"
                            value-format="yyyy-MM-dd HH">
            </el-date-picker>
          </div>
        </div>
        </td>
        <td width="155" colspan="9" valign="top"><p align="left">事故地点：<input type="text" class="input-140" v-model="obj.m15"></p></td>
        <td width="179" colspan="3" valign="top"><p align="left">事故时生产状态：<input type="text" class="input-80" v-model="obj.m16"></p></td>
      </tr>
      <tr>
        <td width="229" colspan="6" valign="top"><p align="left">伤亡称度：<input type="text" class="input-140" v-model="obj.m17"></p></td>
        <td width="155" colspan="9" valign="top"><p align="left">受伤部位：<input type="text" class="input-140" v-model="obj.m18"></p></td>
        <td width="179" colspan="3" valign="top"><p align="left">同次事故死亡<input type="text" class="input-20 title-input" v-model="obj.m19">人,重伤<input type="text" class="input-20 title-input" v-model="obj.m20">人 </p>
        </td>
      </tr>
      <tr>
        <td width="229" colspan="6" valign="top"><p align="left">直接经济损失：<input type="text" class="input-105" v-model="obj.m21"></p></td>
        <td width="155" colspan="9" valign="top"><p align="left">间接经济损失：<input type="text" class="input-105" v-model="obj.m22"></p></td>
        <td width="179" colspan="3" valign="top"><p align="left">标准损失：<input type="text" class="input-105" v-model="obj.m23"></p></td>
      </tr>
      <tr>
        <td width="229" colspan="6" valign="top"><p align="left">事故类别：<input type="text" class="input-140" v-model="obj.m24"></p></td>
        <td width="155" colspan="9" valign="top"><p align="left">事故原因：<input type="text" class="input-140" v-model="obj.m25"></p></td>
        <td width="179" colspan="3" valign="top"><p align="left">医疗及善后处理费：<input type="text" class="input-50" v-model="obj.m26"></p></td>
      </tr>
      <tr>
        <td width="563" colspan="18" valign="top"><p align="left">事故经过及原因：<textarea rows="6" v-model="obj.m27"></textarea></p>
        </td>
      </tr>
      <tr>
        <td width="563" colspan="18" valign="top"><p align="left">事故处理情况：<textarea rows="10" v-model="obj.m28"></textarea></p>
        </td>
      </tr>
    </table>
    <div class="bot-hint-p width-696">
      项目负责人：<input type="text" v-model="obj.m29" class="input-140">
      填报人：<input type="text" v-model="obj.m30" class="input-140">
      日期：
      <div class="block display-lnl">
        <el-date-picker v-model="obj.m31" type="date" size="mini" class="input-120" value-format="yyyy-MM-dd"></el-date-picker>
      </div>
    </div>
     <p class="bot-hint-p width-696"> 注： 死亡、重伤人员一人一表。 </p>
    <div class="btn">
      <div class="add-btn sub-btn"
           :class="isAdd ? '' : 'disabled-btn' " @click="addData">
        添加
      </div>
      <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' "@click="getData">
        刷新
      </div>
      <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' "@click="updateData">
        修改
      </div>
      <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
    </div>
  </div>
</template>

<script>
  import {splitDate,joinDate} from '../../utils/utils'
    export default {
        name: "AQ-30",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {},
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
          headerInfo: {}, //表头信息
          id: '1',     //主表id
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        };
        this.$publicFun.getRecInfo()
      },
      mounted() {
        this.getData();
      },
      computed: {
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq30/findById',{
            params:{
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }

          this.axios.get('/HiQuality/aq30/save',{
            params:{
              aq30:this.obj,
              rec:this.rec
            }
          }).then(res=>{
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
          var params = new URLSearchParams();
          params.append("BBtAq30M",JSON.stringify(this.obj));
          this.axios.get('/HiQuality/aq30/update',{
            params:{
              aq30:this.obj
            }
          }).then(res=>{
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
          this.axios.get('/HiQuality/aq30/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {};
            }
          })
        }
      }
    }
</script>

<style scoped>
.height-20{
  height: 20px;
}
</style>
