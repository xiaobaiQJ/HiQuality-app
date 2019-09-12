<template>
  <div class="D-06 text-center">
    <p class="top-name-p width-696">D-06</p>
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>圬工砌体基础工程检查记录</strong><strong> </strong></h3>
    <div class="text-left width-696">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-696">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel">
      <tr>
        <td width="161" valign="center"><p align="center">工 程 类 别</p></td>
        <td width="214" valign="center" colspan="2"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="72" valign="center" colspan="3"><p align="center">桩  号 </p></td>
        <td width="154" valign="center"><p align="center"><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">施 工 部 位 </p></td>
        <td width="442" valign="center" colspan="6"><p align="center"><input type="text" v-model="obj.m3"></p></td>
      </tr>
      <tr>
        <td width="161"><p align="center">基底水文地质情况及承载力(MPa) </p></td>
        <td width="35" valign="center" rowspan="6"><p align="center">设 </p>
          <p align="center">&nbsp;</p>
          <p align="center">&nbsp;</p>
          <p align="center">计 </p></td>
        <td width="195" colspan="2"><p><input type="text" v-model="obj.m4"></p></td>
        <td width="28" valign="center" rowspan="6"><p>检 </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>查 </p></td>
        <td width="183" colspan="2"><p><input type="text" v-model="obj.m5"></p></td>
      </tr>
      <tr>
        <td width="161"><p align="center">基础埋置深度(m) </p></td>
        <td width="195" colspan="2"><p><input type="text" v-model="obj.m6"></p></td>
        <td width="183" colspan="2"><p><input type="text" v-model="obj.m7"></p></td>
      </tr>
      <tr>
        <td width="161" valign="center" rowspan="2"><p align="center">基础底面及顶面标高(m) </p></td>
        <td width="195" valign="center" colspan="2"><p>底：<input class="input-80" type="text" v-model="obj.m8"> </p></td>
        <td width="183" valign="center" colspan="2"><p>底：<input class="input-80" type="text" v-model="obj.m9"> </p></td>
      </tr>
      <tr>
        <td width="195" valign="center" colspan="2"><p>顶：<input class="input-80" type="text" v-model="obj.m10"> </p></td>
        <td width="183" valign="center" colspan="2"><p>顶：<input class="input-80" type="text" v-model="obj.m11"> </p></td>
      </tr>
      <tr>
        <td width="161"><p align="center">抽水前坑内水位标高(m) </p></td>
        <td width="195" colspan="2"><p><input type="text" v-model="obj.m12"></p></td>
        <td width="183" colspan="2"><p><input type="text" v-model="obj.m13"></p></td>
      </tr>
      <tr>
        <td width="161"><p align="center">抽水后坑内积水深度(m) </p></td>
        <td width="195" colspan="2"><p><input type="text" v-model="obj.m14"></p></td>
        <td width="183" colspan="2"><p><input type="text" v-model="obj.m15"></p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">地 质 情 况 </p></td>
        <td width="442" valign="center" colspan="6"><p>
          <textarea name="" cols="50" rows="3" v-model="obj.m16"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">各部尺寸是否符合 </p></td>
        <td width="442" valign="center" colspan="6"><p>
          <textarea name="" cols="50" rows="2" v-model="obj.m17"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">钢筋有无检查记录 </p></td>
        <td width="442" colspan="6"><p>
          <textarea name="" cols="50" rows="2" v-model="obj.m18"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">基础材料是否合格 </p></td>
        <td width="442" colspan="6"><p>
          <textarea name="" cols="50" rows="2" v-model="obj.m19"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">基 础 平 面 <br/>
          位 置 偏 差 </p></td>
        <td width="442" colspan="6"><p>
          <textarea name="" cols="50" rows="5" v-model="obj.m20"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">检 查 意 见 </p></td>
        <td width="442" colspan="6"><p>
          <textarea name="" cols="50" rows="2" v-model="obj.m21"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="161" valign="center"><p align="center">备   注 </p></td>
        <td width="442" colspan="6"><p>
          <textarea name="" cols="50" rows="2" v-model="obj.m22"></textarea>
        </p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-696">施工单位技术负责人：<input type="text" v-model="obj.m23" class="input-50"> 记录：<input type="text" v-model="obj.m24" class="input-50"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50" > 
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日<br/>
    注：1、该表用于各种圬工砌体； <br/>
      2、基础平面位置一栏应附草图； <br/>
      3、桥涵及大型构造物应附照片。 </p>
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
    name: "D-06",
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
        this.axios.get('/HiQuality/d6/findById',{
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
        this.obj.m26 = joinDate(this.dateArr,'-');
        this.axios.post('/HiQuality/d6/save',this.$qs.stringify({
          BBtD6M:JSON.stringify(this.obj),
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
        this.obj.m26 = joinDate(this.dateArr,'-');
        this.axios.post('/HiQuality/d6/update',this.$qs.stringify({
          BBtD6M:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d6/deleteById',{
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
