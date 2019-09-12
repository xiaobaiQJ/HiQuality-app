<template>
  <div class="D-14-02 text-center main-d lengthways-a ad-textarea">
    <p class="top-name-p width-618">D-14-02</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>隧道锚喷支护施工记录(二)</strong><strong> </strong></h3>
    <div class="text-left width-618">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-618">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel">
      <tr >
        <td width="154" valign="center" ><p align="center">工程名称</p> </td>
        <td width="174" valign="center" >
          <textarea cols="30" rows="2" v-model="obj.m1"></textarea>
        </td>
        <td width="112" valign="center" ><p align="center" >施工及记录 <br />
          时间 </p></td>
        <td width="171" valign="center" >
          <textarea cols="30" rows="2" v-model="obj.m2"></textarea>
        </td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >施工断面桩号 </p></td>
        <td width="174" valign="center" >
          <textarea cols="30" rows="2" v-model="obj.m3" placeholder="（填写当日作业面起止桩号）"></textarea>
        </td>
        <td width="112" valign="center" ><p align="center" >施工部位 </p></td>
        <td width="171" valign="center" >
          <textarea cols="30" rows="2" v-model="obj.m4"></textarea>
        </td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >作业面有无超 <br />
          挖及欠挖现象 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
        <td width="112" valign="center" ><p align="center" >作业面浮石浮尘土是否清除 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m6"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >锚杆类型及规格 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m7"></p></td>
        <td width="112" valign="center" ><p align="center" >锚杆间距 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m8" ></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >钢筋网钢筋直径及间距（mm） </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m9"></p></td>
        <td width="112" valign="center" ><p align="center" >喷射混凝土 <br />
          喷射类型 </p></td>
        <td width="171" valign="center" >
          <p><input type="text" v-model="obj.m10" placeholder="干/潮"></p>
        </td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >水泥厂家名称、 <br />
          批号及强度等级 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m11"></p></td>
        <td width="112" valign="center" ><p align="center" >速凝剂厂家 <br />
          名称及型号 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >喷射混凝土设备 <br />
          型  号 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m13"></p></td>
        <td width="112" valign="center" ><p align="center" >喷射混凝土设备作业情况 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m14"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >喷射混凝土配合比（重量比） </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m15"></p></td>
        <td width="112" valign="center" ><p align="center" >速凝剂牌号及掺量 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m16"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >胶骨比 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m17"></p></td>
        <td width="112" valign="center" ><p align="center" >含砂率 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m18"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >工作风压 <br />
          （Mpa） </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m19"></p></td>
        <td width="112" valign="center" ><p align="center" >工作水压（Mpa） </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m20"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >喷射厚度控制方法 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m21"></p></td>
        <td width="112" valign="center" ><p align="center" >喷射均匀程度 </p></td>
        <td width="171" valign="center" ><p align="center" ><input type="text" v-model="obj.m22"></p></td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >施喷方式 </p></td>
        <td width="174" valign="center" ><p align="center" ><input type="text" v-model="obj.m23"></p></td>
        <td width="112" valign="center" ><p align="center" >取样时间 </p></td>
        <td width="171" valign="center" >
          <div class="block">
            <el-date-picker v-model="obj.m24" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="154" valign="center" ><p align="center" >取样部位 </p></td>
        <td width="174" valign="center" >
          <textarea cols="30" rows="2" v-model="obj.m25"></textarea>
        </td>
        <td width="112" valign="center" ><p align="center" >试样编号 </p></td>
        <td width="171" valign="center" >
          <textarea cols="30" rows="2" v-model="obj.m26"></textarea>
        </td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-618">施工单位技术负责人：<input type="text" v-model="obj.m27" class="input-80">测量：<input type="text" v-model="obj.m28" class="input-80">记录：<input type="text" v-model="obj.m29" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
  </p>
    <div class="btn">
      <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
      <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
      <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
      <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "D-14-02",
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
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/d14b/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
            }
          })
        },
        //新增
        addData(){
          this.axios.post('/HiQuality/d14b/save',this.$qs.stringify({
            BBtD14BM:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d14b/update',this.$qs.stringify({
            BBtD14BM:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d14b/deleteById',{
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
