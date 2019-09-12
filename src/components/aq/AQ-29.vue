<template>
  <div class="AQ-29 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全生产费用支付证书</h3>
    <div class="text-left width-1023">
      <span>施工单位：贵州省公路工程集团有限公司</span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-1023">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table class="public-tabel" width="1036">
      <tr>
        <td width="89">支付日期</td>
        <td width="135">合同总价（元）</td>
        <td width="153">本合同安全措施费（元）</td>
        <td width="155">调整后安全措施费用（元）</td>
        <td width="157">到上期末累计支付金额（元）</td>
        <td width="169">本期支付金额（元）</td>
        <td width="178">本期末累计支付金额（元）</td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="89">
          <div class="block">
            <el-date-picker v-model="val.s1" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
<!--          <input type="text" v-model="val.s1">-->
        </td>
        <td width="135"><input type="text" v-model="val.s2"></td>
        <td width="153"><input type="text" v-model="val.s3"></td>
        <td width="155"><input type="text" v-model="val.s4"></td>
        <td width="157"><input type="text" v-model="val.s5"></td>
        <td width="169"><input type="text" v-model="val.s6"></td>
        <td width="178"><input type="text" v-model="val.s7"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-1023">项目经理：<input type="text" v-model="obj.m1">驻地办驻地监理工程师：<input type="text" v-model="obj.m2">总监办总监理工程师：<input type="text" v-model="obj.m3"></p>
    <p class="bot-hint-p width-1023">项目公司安全负责人：<input type="text" v-model="obj.m4">项目公司分管领导：<input type="text" v-model="obj.m5"></p>
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
    export default {
        name: "AQ-29",
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
        this.setSubObj();
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
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/aq29/findById',{
            params:{
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq29/save',this.$qs.stringify({
            aq29:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq29/update',this.$qs.stringify({
            aq29:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/aq29/deleteById',{
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

</style>
