<template>
    <div class="D-48 text-center">
      <p class="top-name-p width-1070">D-48</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>隧道开挖断面施工检查记录</strong><strong> </strong></h3>
      <div class="text-left width-1125">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1125">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center" >
        <table border="1" cellspacing="0" class="public-tabel">
          <tr >
            <td width="180" valign="center" colspan="2" ><p align="center">工程名称</p> </td>
            <td width="378" valign="center" colspan="2" ><p><input type="text" v-model="obj.m1"></p></td>
            <td width="101" valign="center" ><p align="center" >施工时间 </p></td>
            <td width="296" valign="center" colspan="2" >          <div class="block">
              <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="180" valign="center" colspan="2" ><p align="center" >桩号及部位 </p></td>
            <td width="378" valign="center" colspan="2" ><p><input type="text" v-model="obj.m3"></p></td>
            <td width="101" valign="center" ><p align="center" >检验时间 </p></td>
            <td width="296" valign="center" colspan="2" >          <div class="block">
              <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >项次 </p></td>
            <td width="114" valign="center" ><p align="center" >检 验 项 目 </p></td>
            <td width="378" valign="center" colspan="2" ><p><input type="text" v-model="obj.m5"></p></td>
            <td width="275" valign="center" colspan="2" ><p align="center" >检验结果 </p></td>
            <td width="121" valign="center" ><p align="center" >备注 </p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >1 </p></td>
            <td width="114" valign="center" ><p align="center" >1点 </p></td>
            <td width="378" valign="top" colspan="2" rowspan="11" >
              <p >草图
              <textarea name="" id="" cols="30" rows="22" v-model="obj.m6"></textarea></p>
            </td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m7"></p></td>
            <td width="121" valign="center" rowspan="13" ><p >5～10m检查一次, 拱墙以上1m内断面应无欠挖。其他部位在岩层完整,抗压强度大于30Mpa时,局部岩石突出部分每平方米内不大于0.1㎡,侵入断面不大于3cm </p>
            </td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >2 </p></td>
            <td width="114" valign="center" ><p align="center" >2点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m8"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >3 </p></td>
            <td width="114" valign="center" ><p align="center" >2&#8217;点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m9"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >4 </p></td>
            <td width="114" valign="center" ><p align="center" >3点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m10"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >5 </p></td>
            <td width="114" valign="center" ><p align="center" >3&#8217;点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m11"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >6 </p></td>
            <td width="114" valign="center" ><p align="center" >4点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m12"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >7 </p></td>
            <td width="114" valign="center" ><p align="center" >4&#8217;点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m13"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >8 </p></td>
            <td width="114" valign="center" ><p align="center" >5点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m14"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >9 </p></td>
            <td width="114" valign="center" ><p align="center" >5&#8217;点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m15"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >10 </p></td>
            <td width="114" valign="center" ><p align="center" >6点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m16"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >11 </p></td>
            <td width="114" valign="center" ><p align="center" >6&#8217;点 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m17"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >12 </p></td>
            <td width="114" valign="center" rowspan="2" ><p align="center" >边墙底标高(mm) </p></td>
            <td width="276" valign="center" ><p align="center" >左侧 </p></td>
            <td width="101" valign="center" ><p align="center" >+50，-100 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m18"></p></td>
          </tr>
          <tr >
            <td width="66" valign="center" ><p align="center" >13 </p></td>
            <td width="276" valign="center" ><p align="center" >右侧 </p></td>
            <td width="101" valign="center" ><p align="center" >+50，-100 </p></td>
            <td width="275" valign="center" colspan="2" ><p><input type="text" v-model="obj.m19"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-1125">施工单位技术负责人: <input type="text" v-model="obj.m20">检测: <input type="text" v-model="obj.m21">复核:<input type="text" v-model="obj.m22"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled>日期：
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
        name: "D-48",
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
          this.axios.get('/HiQuality/d48/findById',{
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
          this.axios.post('/HiQuality/d48/save',this.$qs.stringify({
            BBtD48M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d48/update',this.$qs.stringify({
            BBtD48M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d48/deleteById',{
            params:{
              id:''
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
