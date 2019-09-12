<template>
  <div class="D-42 text-center">
    <p class="top-name-p width-968">D-42</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>预应力张拉(后张法)记录</strong><strong> </strong></h3>
    <div class="text-left width-968">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-968">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-968">
      <span>构件名称：<input type="text" v-model="obj.m1"></span>
      <div class="myClear"></div>
    </div>
    <table border="1" cellspacing="0">
      <tr >
        <td width="944" valign="top" colspan="10" class="td-p">
          <p> 张拉端面号：<input type="text" v-model="obj.m2" class="input-80">张拉端锚固型式：<input type="text" v-model="obj.m3" class="input-80">拉伸机编号：<input type="text" v-model="obj.m4" class="input-80">钢丝束长度：<input type="text" v-model="obj.m5" class="input-80">（m） </p>
          <p> 锚固端断面号：<input type="text" v-model="obj.m6" class="input-60"> 锚固端锚固型式：<input type="text" v-model="obj.m7" class="input-80">油压表编号：<input type="text" v-model="obj.m8" class="input-80">摩阻系数：<input type="text" v-model="obj.m9" class="input-80"> </p>
          <p> 钢丝强度：<input type="text" v-model="obj.m10" class="input-95">设计控制应力MPa：<input type="text" v-model="obj.m11" class="input-65">计算伸长值：<input type="text" v-model="obj.m12" class="width-30">（cm） 超张拉油表读 <input type="text" v-model="obj.m13" class="input-80">MPa </p>
          <p>  钢丝束规格：<input type="text" v-model="obj.m14" class="input-80">超张拉应力% <input type="text" v-model="obj.m15" class="input-105"> 安装油表读数 <input type="text" v-model="obj.m16" class="input-80"> MPa </p>
        </td>
      </tr>
      <tr >
        <td width="94" valign="center" rowspan="2" ><p align="center" >钢丝束编号 </p></td>
        <td width="73" valign="center" rowspan="2" ><p align="center" >初读数 </p></td>
        <td width="236" valign="center" colspan="3" ><p align="center" >超张拉% </p></td>
        <td width="160" valign="center" colspan="2" ><p align="center" >安装 </p></td>
        <td width="113" valign="center" rowspan="2" ><p >滑丝 <br />
                  
          情况 <br />
          断丝 </p></td>
        <td width="132" valign="center" rowspan="2" ><p align="center" >墩头检查情况 </p></td>
        <td width="134" valign="center" rowspan="2" ><p align="center" >备注 </p></td>
      </tr>
      <tr >
        <td width="75" valign="center" ><p align="center" >读 数 </p></td>
        <td width="75" valign="center" ><p align="center" >伸长值 </p></td>
        <td width="85" valign="center" ><p align="center" >持压时间 </p></td>
        <td width="85" valign="center" ><p align="center" >读 数 </p></td>
        <td width="75" valign="center" ><p align="center" >伸长值 </p></td>
      </tr>
      <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
        <td width="94" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
        <td width="73" valign="center" ><p><input type="text"  v-model="val.s2"></p></td>
        <td width="75" valign="center" ><p><input type="text"  v-model="val.s3"></p></td>
        <td width="75" valign="center" ><p><input type="text"  v-model="val.s4"></p></td>
        <td width="85" valign="center" ><p><input type="text"  v-model="val.s5"></p></td>
        <td width="85" valign="center" ><p><input type="text"  v-model="val.s6"></p></td>
        <td width="75" valign="center" ><p><input type="text"  v-model="val.s7"></p></td>
        <td width="113" valign="center" ><p><input type="text"  v-model="val.s8"></p></td>
        <td width="132" valign="center" ><p><input type="text"  v-model="val.s9"></p></td>
        <td width="134" valign="center" ><p><input type="text"  v-model="val.s10"></p></td>
      </tr>
      <tr >
        <td width="944" valign="top" colspan="10" >
          <div class="tu-main">
            <p class="tu-left">编号示意图</p>
            <div class="tu-cen">
              <p>顶</p>
              <p>腹</p>
              <p>底</p>
            </div>
            <div class="tu-right">板</div>
            <div class="input-div">
              <p><input type="text" v-model="obj.m17"></p>
              <p><input type="text" v-model="obj.m18"></p>
              <p><input type="text" v-model="obj.m19"></p>
            </div>
          </div>
                                                                            
          <p> 张拉日期           
            <input type="text" v-model="m20DateArr[0]" class="date-input"> 年   
            <input type="text" v-model="m20DateArr[1]" class="date-input"> 月     
            <input type="text" v-model="m20DateArr[2]" class="date-input">日        </p>
        </td>
      </tr>
    </table>
  <p >张拉负责人：<input type="text" v-model="obj.m21">油泵操作员：<input type="text" v-model="obj.m22">记录：<input type="text" v-model="obj.m23">监理员：<input type="text" v-model="nameList1[1].fullName" disabled><br clear="all" />
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
        name: "D-42",
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
          m20DateArr: [],
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
          for(var i= 0; i<5;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d42/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.m20DateArr = splitDate(this.obj.m20,'-');
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
          this.axios.post('/HiQuality/d42/save',this.$qs.stringify({
            BBtD42M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d42/update',this.$qs.stringify({
            BBtD42M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d42/deleteById', {
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
.td-p p{
  padding-left: 10px;
  text-align: left;
}
  .tu-main{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100px;
  }
.tu-left{
  height: 100%;
  line-height: 100px;
  margin: 0 80px 0 20px;
}
  .tu-cen{
    height: 100%;
    margin-right: 80px;
    box-sizing: border-box;
    padding-top: 20px;
  }
.tu-cen>p{
  height: 20px;
}
  .tu-right{
    height: 100%;
    line-height: 100px;
  }
.input-div{
  box-sizing: border-box;
  padding-top: 20px;
}
  .input-div>p{
    height: 20px;
  }
</style>
