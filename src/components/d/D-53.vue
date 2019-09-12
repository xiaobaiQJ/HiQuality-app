<template>
    <div class="D-53 text-center">
      <p class="top-name-p width-734">D-53</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>地 基 处 理 原 始 记 录</strong><strong> </strong></h3>
      <div class="text-left width-734">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-734">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" class="public-tabel" >
        <tr>
          <td width="112" valign="center" ><p align="center">工程名称 </p></td>
          <td width="245" valign="center" colspan="7" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="84" valign="center" colspan="4" ><p align="center" >施工时间 </p></td>
          <td width="171" valign="center" colspan="6" >
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd">
            </el-date-picker>
          </td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >桩号及部位 </p></td>
          <td width="245" valign="center" colspan="7" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="84" valign="center" colspan="4" ><p align="center" >检验时间 </p></td>
          <td width="171" valign="center" colspan="6" >
            <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-120"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
          </td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >处理办法 </p></td>
          <td width="500" valign="center" colspan="17" ><p><input type="text" v-model="obj.m5"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >级配或含量 </p></td>
          <td width="500" valign="center" colspan="17" ><p><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >处理范围 </p></td>
          <td width="62" valign="center" ><p align="center" >长度  度 </p></td>
          <td width="81" valign="center" colspan="2" ><p><input type="text" v-model="obj.m7"></p></td>
          <td width="81" valign="center" colspan="3" ><p align="center" >宽度 </p></td>
          <td width="96" valign="center" colspan="4" ><p><input type="text" v-model="obj.m8"></p></td>
          <td width="60" valign="center" colspan="5" ><p align="center" >厚度 </p></td>
          <td width="120" valign="center" colspan="2" ><p><input type="text" v-model="obj.m9"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >分层厚度（cm） </p></td>
          <td width="62" valign="center" ><p align="center" >松铺 铺 </p></td>
          <td width="162" valign="center" colspan="5" ><p><input type="text" v-model="obj.m10"></p></td>
          <td width="60" valign="center" colspan="3" ><p align="center" >压实 </p></td>
          <td width="216" valign="center" colspan="8" ><p><input type="text" v-model="obj.m11"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >底面高程偏差 </p></td>
          <td width="62" valign="center" ><p align="center" >允许值 </p></td>
          <td width="81" valign="center" colspan="2" ><p align="center" >左  前 </p></td>
          <td width="81" valign="center" colspan="3" ><p align="center" >左  后 </p></td>
          <td width="132" valign="center" colspan="7" ><p align="center" >右  前 </p></td>
          <td width="144" valign="center" colspan="4" ><p align="center" >右  后 </p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >（mm） </p></td>
          <td width="62" valign="center" ><p><input type="text" v-model="obj.m12"></p></td>
          <td width="81" valign="center" colspan="2" ><p><input type="text" v-model="obj.m13"></p></td>
          <td width="81" valign="center" colspan="3" ><p><input type="text" v-model="obj.m14"></p></td>
          <td width="132" valign="center" colspan="7" ><p><input type="text" v-model="obj.m15"></p></td>
          <td width="144" valign="center" colspan="4" ><p><input type="text" v-model="obj.m16"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" rowspan="6" ><p align="center" >密实度或强度 </p></td>
          <td width="62" valign="center" ><p align="center" >项 次 目 </p></td>
          <td width="337" valign="center" colspan="15" ><p align="center" >试 样 密 实 度 或 强 度 </p></td>
          <td width="101" valign="center" ><p align="center" >合格率(%) </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="62" valign="center" ><p align="center" >{{layerArr[index]}}</p></td>
          <td width="67" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="67" valign="center" colspan="3" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="67" valign="center" colspan="3" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="67" valign="center" colspan="4" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="67" valign="center" colspan="4" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="101" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >顶面高程偏差 </p></td>
          <td width="62" valign="center" ><p align="center" >允许值 </p></td>
          <td width="101" valign="center" colspan="3" ><p align="center" >左  前 </p></td>
          <td width="101" valign="center" colspan="4" ><p align="center" >左  后 </p></td>
          <td width="112" valign="center" colspan="6" ><p align="center" >右 前 </p></td>
          <td width="123" valign="center" colspan="3" ><p align="center" >右 后 </p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >（mm） </p></td>
          <td width="62" valign="center" ><p><input type="text" v-model="obj.m17"></p></td>
          <td width="101" valign="center" colspan="3" ><p><input type="text" v-model="obj.m18"></p></td>
          <td width="101" valign="center" colspan="4" ><p><input type="text" v-model="obj.m19"></p></td>
          <td width="112" valign="center" colspan="6" ><p><input type="text" v-model="obj.m20"></p></td>
          <td width="123" valign="center" colspan="3" ><p><input type="text" v-model="obj.m21"></p></td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >备     注 </p></td>
          <td width="500" valign="center" colspan="17" >
            <p><textarea name="" cols="30" rows="2" v-model="obj.m22"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >自检意见及 <br />
            签名 </p>
          </td>
          <td width="500" valign="center" colspan="17" >
            <p><textarea name="" cols="30" rows="2" v-model="obj.m23"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="112" valign="center" ><p align="center" >监理意见及 <br />
            签名 </p>
          </td>
          <td width="500" valign="center" colspan="17" >
            <p><textarea name="" cols="30" rows="2" v-model="nameList1[0].auditOpinion" disabled></textarea></p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-734">施工单位技术负责人：<input type="text" v-model="obj.m25" class="input-120">记录：<input type="text" v-model="obj.m26" class="input-120">复核：<input type="text" v-model="obj.m27" class="input-120">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-120">
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
        name: "D-53",
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
          layerArr:['第一层','第二层','第三层','第四层','第五层'],
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
            let val={};
            this.controlArr.push(val);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d53/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
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
          this.axios.post('/HiQuality/d53/save',this.$qs.stringify({
            BBtD53M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d53/update',this.$qs.stringify({
            BBtD53M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d53/deleteById', {
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

</style>

