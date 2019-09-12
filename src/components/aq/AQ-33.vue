<template>
  <div class="AQ-33 text-center main-aq">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>建设工程安全事故报告单</h3>
    <div class="t-right margin-auto width-623 aq-top-input">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" width="630">
      <tr>
        <td width="55" valign="top"><p align="center">单位<br />名称 </p></td>
        <td width="180" ><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="36" valign="top"><p align="center">地<br />点 </p></td>
        <td width="178" ><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="62" valign="top"><p align="center">项目<br />名称 </p></td>
        <td width="163" ><input type="text" v-model="obj.m2"></td>
      </tr>
      <tr>
        <td width="674" colspan="6" valign="top">
          <p class="t-left" >致<input type="text" class="title-input" v-model="obj.m3">（建设单位、监理单位）：</p><br/>
          <div class="t-left" style="text-indent: 10px;">
            <div class="block display-lnl">
              <el-date-picker size="mini" class="input-200"
                              v-model="obj.m4" type="datetime"
                              format="yyyy年MM月dd日 HH时mm分"
                              value-format="yyyy-MM-dd HH:mm"
                              placeholder="年    月    日    时     分">
              </el-date-picker>
            </div>    ，在<input type="text" placeholder="（地点）" v-model="obj.m5" class="title-input input-300">
            发生<input type="text" placeholder="（安全事故类型）" v-model="obj.m6" class="title-input input-300">的工程安全事故，报告如下：
          <textarea rows="48"  v-model="obj.m7"></textarea>
          </div>
            <p class="t-right">施工单位（章）：<input type="text" class="title-input input-175"><br /><br />
          <div align="right" class="dateDiv">项目经理：<input type="text" v-model="obj.m8" class="input-80">
            <div class="block display-lnl height-25 ">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-80"
                              size="mini"
                              v-model="obj.m9" type="date"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
          <br/>
          <br/>
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-623"><span>注：1、工程安全事故报告应接国家规定的程序和要求上报；</span><br />
      <span style="margin-left: 25px;"> 2、本表由施工单位填写，报送的单位、时效、份数与内容应符合国家有关规定和要求。</span>
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
        name: "AQ-33",
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
      mounted() {
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq33/findById',{
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
          this.axios.get('/HiQuality/aq33/save',{
            params:{
              aq33:this.obj,
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
          this.axios.get('/HiQuality/aq33/update',{
            params:{
              aq33:this.obj
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
          this.axios.get('/HiQuality/aq33/deleteById',{
            params:{
              id:this.id,
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
.input-90{
  width: 90px;
}
</style>
