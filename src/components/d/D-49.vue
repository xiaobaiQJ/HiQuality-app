<template>
    <div class="D-49 text-center">
      <p class="top-name-p width-1086">D-49</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>钻孔灌注桩施工原始记录</strong><strong> </strong></h3>
      <div class="text-left width-1086">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1086">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" class="public-tabel" width="1086">
        <tr>
          <td width="126" valign="center" colspan="4" ><p align="center">工程名称 </p></td>
          <td width="180" valign="center" colspan="5" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="96" valign="center" colspan="5" ><p align="center" >桩号及部位 </p></td>
          <td width="158" valign="center" colspan="7" ><p><input type="text" v-model="obj.m2"></p></td>
          <td width="96" valign="center" colspan="5" ><p align="center" >桩径(cm) </p></td>
          <td width="108" valign="center" colspan="4" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="84" valign="center" colspan="5" ><p align="center" >开钻日期 </p></td>
          <td width="104" valign="center" colspan="3" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr>
          <td width="126" valign="center" colspan="4" ><p align="center" >护筒长度(m) </p></td>
          <td width="84" valign="center" colspan="2" ><p><input type="text" v-model="obj.m5"></p></td>
          <td width="96" valign="center" colspan="3" ><p align="center" >护筒顶标高(m) </p></td>
          <td width="95" valign="center" colspan="4" ><p><input type="text" v-model="obj.m6"></p></td>
          <td width="124" valign="center" colspan="5" ><p align="center" >护筒埋置深度(m) </p></td>
          <td width="131" valign="center" colspan="8" ><p><input type="text" v-model="obj.m7"></p></td>
          <td width="145" valign="center" colspan="6" ><p align="center" >钻头形式和直径(m) </p></td>
          <td width="151" valign="center" colspan="6" ><p><input type="text" v-model="obj.m8"></p></td>
        </tr>
        <tr class="public-tabel date-tr">
          <td width="126" valign="center" colspan="4" ><p align="center" >上班交班时进尺(m) </p></td>
          <td width="84" valign="center" colspan="2" ><p><input type="text" v-model="obj.m9"></p></td>
          <td width="96" valign="center" colspan="3" ><p align="center" >本班进尺(m) </p></td>
          <td width="95" valign="center" colspan="4" ><p><input type="text" v-model="obj.m10"></p></td>
          <td width="124" valign="center" colspan="5" ><p align="center" >累计进尺（m） </p></td>
          <td width="119" valign="center" colspan="7" ><p><input type="text" v-model="obj.m11"></p></td>
          <td width="308" valign="center" colspan="13" >
            <div>
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">由</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m12" type="datetime"
                                placeholder="月  日  时  分"
                                format="MM月dd日 HH时mm分"
                                value-format="MM月dd日 HH时mm分">
                </el-date-picker>
              </div>
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">至</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m13" type="datetime"
                                placeholder="月  日  时  分"
                                format="MM月dd日 HH时mm分"
                                value-format="MM月dd日 HH时mm分">
                </el-date-picker>
              </div>
            </div>
          </td>
        </tr>
        <tr >
          <td width="211" valign="center" colspan="6" ><p align="center" >起止时间 </p></td>
          <td width="60" valign="center" colspan="2" ><p align="center" >共计 </p></td>
          <td width="59" valign="center" colspan="2" rowspan="2" ><p align="center" >工作项目 </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >冲程 </p></td>
          <td width="87" valign="center" colspan="4" rowspan="2" ><p align="center" >冲击次数(次/分) </p></td>
          <td width="129" valign="center" colspan="7" ><p align="center" >钻进深度(m) </p></td>
          <td width="51" valign="center" colspan="2" rowspan="2" ><p align="center" >检孔深度 </p></td>
          <td width="57" valign="center" colspan="3" rowspan="2" ><p align="center" >孔底标高 </p></td>
          <td width="63" valign="center" colspan="2" rowspan="2" ><p align="center" >孔内 <br />
            水位 </p></td>
          <td width="60" valign="center" colspan="3" rowspan="2" ><p align="center" >地质情况 </p></td>
          <td width="60" valign="center" colspan="3" rowspan="2" ><p align="center" >泥浆比重 </p></td>
          <td width="68" valign="center" colspan="2" rowspan="2" ><p align="center" >备注 </p></td>
        </tr>
        <tr >
          <td width="52" valign="center" ><p align="center" >h </p></td>
          <td width="52" valign="center" colspan="2" ><p align="center" >min </p></td>
          <td width="52" valign="center" colspan="2" ><p align="center" >h </p></td>
          <td width="52" valign="center" ><p align="center" >min </p></td>
          <td width="60" valign="center" colspan="2" ><p align="center" >h </p></td>
          <td width="72" valign="center" colspan="4" ><p align="center" >本次 </p></td>
          <td width="57" valign="center" colspan="3" ><p align="center" >累计 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr1" :key="'sub1'+index">
          <td width="52" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="52" valign="center" colspan="2" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="52" valign="center" colspan="2" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="52" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="60" valign="center" colspan="2" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="59" valign="center" colspan="2" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="87" valign="center" colspan="4" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="72" valign="center" colspan="4" ><p><input type="text" v-model="val.s7"></p></td>
          <td width="57" valign="center" colspan="3" ><p><input type="text" v-model="val.s8"></p></td>
          <td width="51" valign="center" colspan="2" ><p><input type="text" v-model="val.s9"></p></td>
          <td width="57" valign="center" colspan="3" ><p><input type="text" v-model="val.s10"></p></td>
          <td width="63" valign="center" colspan="2" ><p><input type="text" v-model="val.s11"></p></td>
          <td width="60" valign="center" colspan="3" ><p><input type="text" v-model="val.s12"></p></td>
          <td width="60" valign="center" colspan="3" ><p><input type="text" v-model="val.s13"></p></td>
          <td width="68" valign="center" colspan="2" ><p><input type="text" v-model="val.s14"></p></td>
        </tr>
        <tr >
          <td width="103" valign="center" colspan="2" rowspan="3" ><p align="center" >时间 <br />
            统计 </p></td>
          <td width="108" valign="center" colspan="4" rowspan="2" ><p align="center" >纯钻时间 </p></td>
          <td width="420" valign="center" colspan="18" ><p align="center" >辅助生产时间(h) </p></td>
          <td width="264" valign="center" colspan="13" ><p >非生产时间(h) </p></td>
          <td width="60" valign="center" rowspan="2" ><p align="center" >合计时间 </p></td>
        </tr>
        <tr >
          <td width="59" valign="center" ><p align="center" >取渣 </p></td>
          <td width="36" valign="center" colspan="2" ><p align="center" >检孔 </p></td>
          <td width="59" valign="center" colspan="2" ><p align="center" >检钻 </p></td>
          <td width="48" valign="center" colspan="4" ><p align="center" >查具 </p></td>
          <td width="72" valign="center" colspan="2" ><p align="center" >接换的 <br />
            丝  绳 </p></td>
          <td width="48" valign="center" colspan="2" ><p align="center" >投石 </p></td>
          <td width="48" valign="center" colspan="3" ><p align="center" >投土 </p></td>
          <td width="48" valign="center" colspan="2" ><p align="center" >小计 </p></td>
          <td width="54" valign="center" colspan="3" ><p align="center" >孔内 <br />
            事故 </p></td>
          <td width="54" valign="center" colspan="2" ><p align="center" >机械 <br />
            事故 </p></td>
          <td width="54" valign="center" colspan="2" ><p align="center" >待料 </p></td>
          <td width="54" valign="center" colspan="3" ><p align="center" >停电 </p></td>
          <td width="48" valign="center" colspan="3" ><p align="center" >小计 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr2" :key="'sub2'+index">
          <td width="108" valign="center" colspan="4" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="59" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="36" valign="center" colspan="2" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="59" valign="center" colspan="2" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="48" valign="center" colspan="4" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="72" valign="center" colspan="2" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="48" valign="center" colspan="2" ><p><input type="text" v-model="val.s7"></p></td>
          <td width="48" valign="center" colspan="3" ><p><input type="text" v-model="val.s8"></p></td>
          <td width="48" valign="center" colspan="2" ><p><input type="text" v-model="val.s9"></p></td>
          <td width="54" valign="center" colspan="3" ><p><input type="text" v-model="val.s10"></p></td>
          <td width="54" valign="center" colspan="2" ><p><input type="text" v-model="val.s11"></p></td>
          <td width="54" valign="center" colspan="2" ><p><input type="text" v-model="val.s12"></p></td>
          <td width="54" valign="center" colspan="3" ><p><input type="text" v-model="val.s13"></p></td>
          <td width="48" valign="center" colspan="3" ><p><input type="text" v-model="val.s14"></p></td>
          <td width="60" valign="center" ><p><input type="text" v-model="val.s15"></p></td>
        </tr>
      </table>
      <p class="bot-hint-p width-1086">施工单位技术负责人：<input type="text" v-model="obj.m14">记录：<input type="text" v-model="obj.m15">复核：<input type="text" v-model="obj.m16">监理员：<input type="text" v-model="nameList1[1].fullName" disabled> </p>
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
        name: "D-49",
      data() {
        return {
          isAdd: true,
          controlArr1: [],
          controlArr2: [],
          val:{},
          //主表
          obj: {
            subList1: [],
            subList2: []
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
          m12DateArr:[],
          m13DateArr:[],
          m12TimeArr:[],
          m13TimeArr:[],
          id: '1'     //主表id
        }
      },
      created() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        var obj = this.$store.state.unitTable;
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
          for(var i= 0; i<4;i++){
            var subObj1={};
            var subObj2={};
            if(i<1){
              this.controlArr2.push(subObj2);
            }
            this.controlArr1.push(subObj1);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d49/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList1 = res.data.data.sub1;
              this.val = res.data.data.val[0];
              this.obj.subList = res.data.data.sub;
              this.isAdd = false;
              var arr1 = []
              var arr2 = []
              if (this.obj.subList1 != undefined && this.obj.subList1.length >0){
                this.obj.subList1.forEach((item) => {
                  arr1.push(item)
                })
                this.controlArr1 = arr1;
              }
              if (this.obj.subList2 != undefined && this.obj.subList2.length >0){
                this.obj.subList2.forEach((item) => {
                  arr2.push(item)
                })
                this.controlArr2 = arr2;
              }

            }
          })
        },
        //插入
        addData() {
          if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.val) == '{}') {
            return
          }
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList1 = this.controlArr1;
          this.obj.subList2 = this.controlArr2
          this.axios.post("/HiQuality/d49/save",this.$qs.stringify({
            BBtD49M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
              console.log("插入接口")
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
          this.obj.subList1 = this.controlArr1;
          this.obj.subList2 = this.controlArr2
          this.axios.post('/HiQuality/d49/update', this.$qs.stringify({
            BBtD49M:JSON.stringify(this.obj)
          })).then(res=>{
              console.log("修改接口")
              console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();

            }

            })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/d49/devareById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.controlArr1 = [];
              this.controlArr2 = [];
              this.obj = {subList1:[],subList2:[]}
              this.isAdd = true;
              this.setSubObj();
            }

          })
        }
      }

    }
</script>

<style scoped>
  .date-tr input{
    width: 20px;
    height: auto;
  }
  /*.date-tr td input:nth-child(1){
    width: 50px;
  }*/
</style>
