<template>
    <div class="D-55 text-center">
      <p class="top-name-p width-618">D-55</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>喷射植被混凝土基材施工记录</strong><strong> </strong></h3>
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
      <table border="1" cellspacing="0" class="public-tabel">
        <tr >
          <td width="132" valign="center" ><p align="center">工程名称</p> </td>
          <td width="216" valign="center" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="84" valign="center" ><p align="center" >施工时间 </p></td>
          <td width="174" valign="center" ><p>          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >桩号及部位 </p></td>
          <td width="216" valign="center" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="84" valign="center" ><p align="center" >检查时间 </p></td>
          <td width="174" valign="center" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >土质情况 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m5"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >水   泥 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >腐 殖 质 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m7"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >无 纺 布 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m8"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >绿化添加剂 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m9"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >植被混凝土 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m10"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >种   子 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m11"></p></td>
        </tr>
        <tr >
          <td width="132" valign="center" ><p align="center" >保水剂 </p></td>
          <td width="474" valign="center" colspan="3" ><p><input type="text" v-model="obj.m12"></p></td>
        </tr>
        <tr >
          <td width="606" valign="center" colspan="4" >
            <p style="text-align: left;">备注：
            <textarea name="" cols="30" rows="10" v-model="obj.m13"></textarea>
            </p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-618">施工单位技术负责人：<input type="text" v-model="obj.m14" class="input-80">记录：<input type="text" v-model="obj.m15" class="input-80">复核：<input type="text" v-model="obj.m16" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
      </p>
      <br clear="all" />
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
        name: "D-55",
      data(){
        return{
          isAdd: true,
          obj:{},
          id:'',
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
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/d55/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
            }
          })
        },
        //新增
        addData() {
          this.axios.post('/HiQuality/d55/save',this.$qs.stringify({
            BBtD55M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d55/update',this.$qs.stringify({
            BBtD55M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d55/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
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
