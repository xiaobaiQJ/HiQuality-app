<template>
    <div class="D-50 text-center">
      <p class="top-name-p width-991">D-50</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>挖孔桩施工原始记录</strong><strong> </strong></h3>
      <div class="text-left width-991">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName"></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode"></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-991">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2"></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="0" cellspacing="0" class="public-tabel" >
        <tr >
          <td width="84" valign="center" ><p align="center">墩（台）号 </p></td>
          <td width="108" valign="center" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="97" valign="center" colspan="2" ><p align="center" >孔桩编号 </p></td>
          <td width="83" valign="center" ><p><input type="text" v-model="obj.m2"></p></td>
          <td width="120" valign="center" colspan="2" ><p align="center" >设计孔底标高（m） </p></td>
          <td width="108" valign="center" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="72" valign="center" ><p align="center" >桩径(m) </p></td>
          <td width="48" valign="center" ><p><input type="text" v-model="obj.m4"></p></td>
          <td width="72" valign="center" ><p align="center" >开挖 <br />
            日期 </p></td>
          <td width="168" valign="center" colspan="2" >
            <div class="block">
              <el-date-picker v-model="obj.m5" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
        <tr >
          <td width="84" valign="center" ><p align="center" >护壁长度（m） </p></td>
          <td width="108" valign="center" ><p><input type="text" v-model="obj.m6"></p></td>
          <td width="97" valign="center" colspan="2" ><p align="center" >护壁顶高程 <br />
            （m） </p></td>
          <td width="83" valign="center" ><p><input type="text" v-model="obj.m7"></p></td>
          <td width="120" valign="center" colspan="2" ><p align="center" >终孔孔底标高（m） </p></td>
          <td width="108" valign="center" ><p><input type="text" v-model="obj.m8"></p></td>
          <td width="120" valign="center" colspan="2" rowspan="2" ><p align="center" >挖孔中出现的问题及处理 <br />
            措施 </p></td>
          <td width="72" valign="center" rowspan="2" ><p align="center" >嵌岩 <br />
            深度 <br />
            （m） </p></td>
          <td width="168" valign="center" colspan="2" ><p align="center" >地质柱状示意图 </p></td>
        </tr>
        <tr >
          <td width="192" valign="center" colspan="2" ><p align="center" >起 止 时 间 </p></td>
          <td width="96" valign="center" ><p align="center" >挖孔深度（m） </p></td>
          <td width="96" valign="center" colspan="3" ><p align="center" >孔底标高（m） </p></td>
          <td width="108" valign="center" ><p align="center" >孔内水深（m） </p></td>
          <td width="108" valign="center" ><p align="center" >地质情况 <br />
            描述 </p></td>
          <td width="84" valign="center" ><p align="center" >设计 </p></td>
          <td width="84" valign="center" ><p align="center" >实际 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="192" colspan="2" >

            <div class="block display-lnl">
              <el-date-picker v-model="val.s1" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
            <p class="display-lnl" style="position: relative;top:5px;margin-right: 8px;">~</p>
            <div class="block display-lnl">
              <el-date-picker v-model="val.s2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
          <td width="96" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="96" valign="center" colspan="3" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="108" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="108" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="120" valign="center" colspan="2" rowspan="9" v-if="index===0">
            <p><textarea name="" cols="30" rows="22" v-model="obj.m9"></textarea></p>
          </td>
          <td width="72" valign="center" v-if="index<6"><p><input type="text" v-model="val.s7"></p></td>
          <td width="84" valign="center" rowspan="6" v-if="index===0">
            <p><textarea name="" cols="30" rows="16" v-model="obj.m10"></textarea></p>
          </td>
          <td width="84" valign="center" rowspan="6" v-if="index===0">
            <p><textarea name="" cols="30" rows="16" v-model="obj.m11"></textarea></p>
          </td>
          <td width="240" valign="top" colspan="3" rowspan="4" v-if="index===6"><p >检查意见：
            <textarea name="" cols="30" rows="10" v-model="obj.m12"></textarea></p></td>
        </tr>
      </table>
      <p class="bot-hint-p width-991">施工单位技术负责人：<input type="text" class="input-140" v-model="obj.m13"> 记录：<input type="text" class="input-140" v-model="obj.m14">复核：<input type="text" class="input-140" v-model="obj.m15">监理员：<input type="text" class="input-140" v-model="nameList1[1].fullName" disabled>
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
        name: "D-50",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
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
          id: '1'
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
        this.setSubObj();
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/d50/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList=res.data.data.sub;
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
        //新增
        addData(){
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d50/save',this.$qs.stringify({
            BBtD50M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d50/update',this.$qs.stringify({
            BBtD50M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d50/deleteById',{
            params:{
              id: this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
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

</style>
