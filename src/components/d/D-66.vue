<template>
    <div class="D-66 text-center">
      <p class="top-name-p width-710">D-66</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>隧道超前导洞开挖工程记录表</strong><strong> </strong></h3>
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
      <table border="1" cellspacing="0" class="public-tabel">
        <tr >
          <td width="92" valign="center" colspan="4" ><p align="center">工程名称 </p></td>
          <td width="207" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
          <td width="92" valign="center" colspan="2" ><p align="center" >施工时间 </p></td>
          <td width="219" valign="center" colspan="3" >          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="92" valign="center" colspan="4" ><p align="center" >桩号及部位 </p></td>
          <td width="207" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m3"></p></td>
          <td width="92" valign="center" colspan="2" ><p align="center" >检验时间 </p></td>
          <td width="219" valign="center" colspan="3" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="24" valign="center" rowspan="2" ><p align="center" >序号 </p></td>
          <td width="130" valign="center" colspan="4" rowspan="2" ><p align="center" >检测项目 </p></td>
          <td width="146" valign="center" rowspan="2" ><p align="center" >规定值或允许偏差 </p></td>
          <td width="70" valign="center" rowspan="2" ><p align="center" >检验方法（频率） </p></td>
          <td width="157" valign="center" colspan="3" ><p align="center" >实测数据 </p></td>
          <td width="84" valign="center" rowspan="2" ><p align="center" >备注 </p></td>
        </tr>
        <tr >
          <td width="73" valign="center" colspan="2" ><p align="center" >自检 </p></td>
          <td width="84" valign="center" ><p align="center" >监理 </p></td>
        </tr>
        <tr >
          <td width="24" valign="center" rowspan="3" ><p align="center" >1 </p></td>
          <td width="54" valign="center" colspan="2" rowspan="3" ><p align="center" >拱部 <br />
            超挖（mm） </p></td>
          <td width="75" valign="center" colspan="2" ><p align="center" >&#8544;，&#8545;类围岩 </p></td>
          <td width="146" valign="center" ><p align="center" >平均100，最大150 </p></td>
          <td width="70" valign="center" rowspan="3" ><p align="center" >每20m用尺量1个断面 </p></td>
          <td width="73" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m6"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m7"></p></td>
        </tr>
        <tr >
          <td width="75" valign="center" colspan="2" ><p align="center" >&#8546;~&#8548;类围岩 </p></td>
          <td width="146" valign="center" ><p align="center" >平均100，最大200 </p></td>
          <td width="73" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m8"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m9"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m10"></p></td>
        </tr>
        <tr>
          <td width="75" valign="center" colspan="2" ><p align="center" >&#8549;类围岩 </p></td>
          <td width="146" valign="center" ><p align="center" >平均100，最大200 </p></td>
          <td width="73" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m11"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m12"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m13"></p></td>
        </tr>
        <tr >
          <td width="24" valign="center" rowspan="2" ><p align="center" >2 </p></td>
          <td width="54" valign="center" colspan="2" rowspan="2" ><p align="center" >宽度（mm） </p></td>
          <td width="75" valign="center" colspan="2" ><p align="center" >每侧 </p></td>
          <td width="146" valign="center" ><p align="center" >＋100，－0 </p></td>
          <td width="70" valign="center" rowspan="2" ><p align="center" >每20m用尺量，每侧1处 </p></td>
          <td width="73" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m14"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m15"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m16"></p></td>
        </tr>
        <tr>
          <td width="75" valign="center" colspan="2" ><p align="center" >全宽 </p></td>
          <td width="146" valign="center" ><p align="center" >＋200，－0 </p></td>
          <td width="73" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m17"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m18"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m19"></p></td>
        </tr>
        <tr>
          <td width="24" valign="center" ><p align="center" >3 </p></td>
          <td width="130" valign="center" colspan="4" ><p align="center" >边墙、墙角、仰拱连接处（mm）欠挖 </p></td>
          <td width="146" valign="center" ><p align="center" >+30 </p></td>
          <td width="70" valign="center" ><p align="center" ><input type="text" v-model="obj.m20"></p></td>
          <td width="73" valign="center" colspan="2" ><p><input type="text" v-model="obj.m21"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m22"></p></td>
          <td width="84" valign="center" ><p align="center" ><input type="text" v-model="obj.m23"></p></td>
        </tr>
        <tr >
          <td width="77" valign="center" colspan="2" ><p align="center" >基本要求 </p></td>
          <td width="535" valign="center" colspan="9" ><p >必须先探明隧道的工程地质和水文地质情况，才可能进行开挖。严格控制欠挖，侧墙墙角和以上部分严禁欠挖，临时支护部分以确保安全可靠来控制欠挖量。开挖轮廓要留支撑沉落量及变形量，以防止出现净空不够的情况。导洞开挖，必须清除大浮石，并按设计要求及时进行导洞临时或永久锚喷支护。 </p></td>
        </tr>
        <tr >
          <td width="612" valign="top" colspan="11" >
            <p class="t-left">开挖情况描述：
              <textarea name="" cols="50" rows="5" v-model="obj.m24"></textarea>
            </p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-734">施工单位技术负责人： <input type="text" v-model="obj.m25" class="input-50"> 记录：<input type="text"  v-model="obj.m26" class="input-50"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50"> 
        <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
        <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
        <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
        name: "D-66",
      data(){
        return{
          isAdd: true,
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
          dateArr:[],
          id: '1'     //主表id
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
          this.axios.get('/HiQuality/d66/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.dateArr = splitDate(this.obj.m28,'-')
            }
          })
        },
        //新增
        addData(){
          this.obj.m28 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/d66/save',this.$qs.stringify({
            BBtD66M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d66/update',this.$qs.stringify({
            BBtD66M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d66/deleteById',{
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
