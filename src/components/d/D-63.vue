<template>
    <div class="D-63 text-center">
      <p class="top-name-p width-1191">D-63</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>生物防护路堑边坡现场施工记录</strong><strong> </strong></h3>
      <div class="text-left width-1191">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1191">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" width="1191" class="public-tabel">
        <tr >
          <td width="137" valign="center" colspan="2" ><p align="center">工程名称</p> </td>
          <td width="238" valign="center" colspan="2" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="173" valign="center" ><p align="center" >桩号及部位 </p></td>
          <td width="374" valign="center" colspan="2" ><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr >
          <td width="137" valign="center" colspan="2" ><p align="center" >施工部位 </p></td>
          <td width="238" valign="center" colspan="2" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="173" valign="center" ><p align="center" >日  期 </p></td>
          <td width="374" valign="center" colspan="2" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="50" valign="center" ><p align="center" >项次 </p></td>
          <td width="177" valign="center" colspan="2" ><p align="center" >项  目 </p></td>
          <td width="489" valign="center" colspan="3" ><p align="center" >施 工 检 查 记 录 </p></td>
          <td width="206" valign="center" ><p align="center" >备 注 </p></td>
        </tr>
        <tr >
          <td width="50" valign="center" ><p align="center" >1 </p></td>
          <td width="177" valign="center" colspan="2" ><p align="center" >施肥量(g/m2) </p></td>
          <td width="489" valign="center" colspan="3" ><p><input type="text" v-model="obj.m5"></p></td>
          <td width="206" valign="center" ><p >按技术规范第703要求施工 </p></td>
        </tr>
        <tr >
          <td width="50" valign="center" ><p align="center" >2 </p></td>
          <td width="177" valign="center" colspan="2" ><p align="center" >保　水　剂 </p></td>
          <td width="489" valign="center" colspan="3" ><p><input type="text" v-model="obj.m6"></p></td>
          <td width="206" valign="center" ><p >注明类型及掺量 </p></td>
        </tr>
        <tr >
          <td width="50" valign="center" ><p align="center" >3 </p></td>
          <td width="177" valign="center" colspan="2" ><p align="center" >土壤有机质含量(%) </p></td>
          <td width="489" valign="center" colspan="3" ><p><input type="text" v-model="obj.m7"></p></td>
          <td width="206" valign="center" ><p >按土壤试验报告填写 </p></td>
        </tr>
        <tr >
          <td width="50" valign="center" ><p align="center" >4 </p></td>
          <td width="177" valign="center" colspan="2" ><p align="center" >客土配合比 </p></td>
          <td width="489" valign="center" colspan="3" ><p><input type="text" v-model="obj.m8"></p></td>
          <td width="206" valign="center" ><p >按设计成分根据实际配合比填写 </p></td>
        </tr>
        <tr >
          <td width="50" valign="center" ><p align="center" >5 </p></td>
          <td width="177" valign="center" colspan="2" ><p align="center" >植物种籽撒(喷)播量(g/m2) </p></td>
          <td width="489" valign="center" colspan="3" ><p><input type="text" v-model="obj.m9"></p></td>
          <td width="206" valign="center" ><p >按技术规范第703要求施工 </p></td>
        </tr>
      </table>
      <p class="bot-hint-p width-1191">施工单位技术负责人：<input type="text" v-model="obj.m10"> 记录：<input type="text" v-model="obj.m11">复核：<input type="text" v-model="obj.m12">监理员：<input type="text" v-model="nameList1[1].fullName" disabled>
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
    export default {
        name: "D-63",
     data(){
      return{
        isAdd:true,
        obj:{},
        rec: {
          recNo:' ',
          tableId:4,
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
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/d63/findById',{
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
          this.axios.post('/HiQuality/d63/save',this.$qs.stringify({
            BBtD63M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d63/update',this.$qs.stringify({
            BBtD63M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d63/deleteById',{
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
