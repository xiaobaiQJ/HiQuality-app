<template>
  <div class="AQ-32 text-center main-aq crosswise">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>伤亡事故单位工程分类月报表</h3>
    <div class="t-right margin-auto width-1053 aq-top-input">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel table-tr-height-22" width="1053">
        <tr class="height-90">
          <td width="81" rowspan="2"  class="height-115">
            <img width="83" height="115" src="../../assets/files/imgs/aq/wps1.png" />
          </td>
          <td width="85" colspan="3" >
            <p>路基工程 </p></td>
          <td width="85" colspan="3" >
            <p>路面工程 </p></td>
          <td width="85" colspan="3" >
            <p>桥梁工程 </p></td>
          <td width="98" colspan="3" >
            <p>互通立交工程 </p></td>
          <td width="85" colspan="3" >
            <p>隧道工程 </p></td>
          <td width="85" colspan="3" >
            <p>环保工程 </p></td>
          <td width="98" colspan="3" >
            <p>交通安全设施 </p></td>
          <td width="85" colspan="3" >
            <p>机电工程 </p></td>
          <td width="98" colspan="3" >
            <p>房屋建筑工程 </p></td>
        </tr>
        <tr>
          <td width="28" ><p>死 </p></td>
          <td width="28" ><p>重 </p></td>
          <td width="28" ><p>轻 </p></td>
          <td width="28" ><p>死 </p></td>
          <td width="28" ><p>重 </p></td>
          <td width="28" ><p>轻 </p></td>
          <td width="28" ><p>死 </p></td>
          <td width="28" ><p>重 </p></td>
          <td width="28" ><p>轻 </p></td>
          <td width="33" ><p>死 </p></td>
          <td width="33" ><p>重 </p></td>
          <td width="33" ><p>轻 </p></td>
          <td width="28" ><p>死 </p></td>
          <td width="28" ><p>重 </p></td>
          <td width="28" ><p>轻 </p></td>
          <td width="28" ><p>死 </p></td>
          <td width="28" ><p>重 </p></td>
          <td width="28" ><p>轻 </p></td>
          <td width="33" ><p>死 </p></td>
          <td width="33" ><p>重 </p></td>
          <td width="33" ><p>轻 </p></td>
          <td width="28" ><p>死 </p></td>
          <td width="28" ><p>重 </p></td>
          <td width="28" ><p>轻 </p></td>
          <td width="33" ><p>死 </p></td>
          <td width="33" ><p>重 </p></td>
          <td width="33" ><p>轻 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="81" ><p ><!--物体打击-->{{val.type}} </p></td>
          <td width="28" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s7"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s8"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s9"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s10"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s11"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s12"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s13"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s14"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s15"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s16"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s17"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s18"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s19"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s20"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s21"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s22"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s23"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s24"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s25"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s26"></p></td>
          <td width="28" ><p><input type="text" v-model="val.s27"></p></td>
        </tr>
        <tr>
          <td width="81" ><p>总计 </p></td>
          <td width="806" colspan="27" ><p class="t-left">死亡：<input type="text" class="input-175" v-model="obj.m1">重伤：<input type="text" class="input-300" v-model="obj.m2">轻伤：<input type="text" class="input-175" v-model="obj.m3"></p>
          </td>
        </tr>
      </table>
    </div>
    <div class="bot-hint-p width-1053">填报单位：<input type="text" v-model="obj.m4" class="input-200">单位负责人：<input type="text" v-model="obj.m5" class="input-200">制表人：<input type="text" v-model="obj.m6" class="input-200">
    <div class="block display-lnl height-25 input-160">
      <el-date-picker class="input-140"
                      size="mini"
                      v-model="obj.m7" type="date"
                      format="yyyy年MM月dd日"
                      value-format="yyyy-MM-dd"
                      placeholder="年   月   日">
      </el-date-picker>
    </div>
    </div>
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
        name: "AQ-32",
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
          dateArr:[],
          id: '1',     //主表id
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
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
        let type = ["物体打击","车辆伤害","机械伤害","起重伤害","触电","淹溺","灼烫","火灾","高处坠落","坍塌","放炮","火药爆炸","物理爆炸","化学爆炸","中毒、窒息","其他伤害"];
        for(var i= 0; i<16;i++){
          let testItemNos = {"type":type[i]};
          this.controlArr.push(testItemNos);
        }
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq32/findById',{
            params:{
              id:this.id,
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.dateArr = splitDate(this.obj.m7,'-');
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item);
                })
              }
              this.controlArr = arr;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.m7 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq32/save',this.$qs.stringify({
            aq32:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res=>{
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
          this.obj.m7 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq32/update',this.$qs.stringify({
            aq32:JSON.stringify(this.obj)
          }))
          .then(res=>{
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
          this.axios.get('/HiQuality/aq32/deleteById',{
            params:{
              id:this.id,
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {subList:[]};
              this.controlArr = [];
              this.isAdd = true;
            }
          })
        }
      }
    }
</script>

<style scoped>
.height-115{
  height: 115px;
}
  .height-90{
    height: 90px;
  }
</style>
