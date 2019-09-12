<template>
    <div class="D-70 text-center main-d lengthways-a ">
      <p class="top-name-p width-734">D-70</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>隧道成洞净空检查记录表</strong><strong> </strong></h3>
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
      <table border="1" cellspacing="0" class="public-tabel" width="746">
        <tr >
          <td width="79" valign="center" colspan="2" ><p align="center">起讫桩号</p> </td>
          <td width="186" valign="center" colspan="5" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="72" valign="center" colspan="2" ><p >施工时间 </p></td>
          <td width="115" valign="center" colspan="3" >          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
          <td width="71" valign="center" colspan="2" ><p align="center" >检验时间 </p></td>
          <td width="110" valign="center" colspan="3" >          <div class="block">
            <el-date-picker v-model="obj.m3" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="29" valign="center" rowspan="2" ><p align="center" >顺次 </p></td>
          <td width="124" valign="center" colspan="3" rowspan="2" ><p align="center" >检验部位 </p></td>
          <td width="70" valign="center" rowspan="2" ><p align="center" >允许值 </p></td>
          <td width="76" valign="center" colspan="3" ><p align="center" >K </p></td>
          <td width="76" valign="center" colspan="2" ><p align="center" >K </p></td>
          <td width="76" valign="center" colspan="2" ><p align="center" >K </p></td>
          <td width="76" valign="center" colspan="3" ><p align="center" >K </p></td>
          <td width="48" valign="center" rowspan="2" ><p align="center" >检查频率 </p></td>
          <td width="56" valign="center" rowspan="2" ><p align="center" >备注 </p></td>
        </tr>
        <tr >
          <td width="38" valign="center" ><p align="center" >设计 </p></td>
          <td width="38" valign="center" colspan="2" ><p align="center" >实测 </p></td>
          <td width="38" valign="center" ><p align="center" >设计 </p></td>
          <td width="38" valign="center" ><p align="center" >实测 </p></td>
          <td width="38" valign="center" ><p align="center" >设计 </p></td>
          <td width="38" valign="center" ><p align="center" >实测 </p></td>
          <td width="38" valign="center" ><p align="center" >设计 </p></td>
          <td width="38" valign="center" colspan="2" ><p align="center" >实测 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="29" valign="center" ><p align="center" v-if="index<10">{{index+1}}</p></td>
          <td width="124" valign="center" colspan="3" ><p>{{titleName[index]}}</p></td>
          <td width="70" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="38" valign="center" colspan="2" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="val.s8"></p></td>
          <td width="38" valign="center" colspan="2" ><p><input type="text" v-model="val.s9"></p></td>
          <td width="48" valign="center" rowspan="12" v-if="index===0">
            <p align="center" >直线每40ｍ曲线每20ｍ检查一次
              <textarea cols="30" rows="20" v-model="obj.m4"></textarea>
            </p>
          </td>
          <td width="56" valign="center" rowspan="12" v-if="index===0">
            <textarea cols="30" rows="40" v-model="obj.m5"></textarea>
          </td>
        </tr>
        <tr >
          <td width="29" valign="center" rowspan="2" ><p align="center" >11 </p></td>
          <td width="66" valign="center" colspan="2" rowspan="2" ><p align="center" >侧沟底高程 </p></td>
          <td width="57" valign="center" ><p align="center" >左侧 </p></td>
          <td width="70" valign="center" >
            <p><input type="text" v-model="lastSub[0].s1"></p>
          </td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[0].s2"></p></td>
          <td width="38" valign="center" colspan="2" ><p><input type="text" v-model="lastSub[0].s3"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[0].s4"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[0].s5"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[0].s6"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[0].s7"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[0].s8"></p></td>
          <td width="38" valign="center" colspan="2" ><p><input type="text" v-model="lastSub[0].s9"></p></td>
        </tr>
        <tr >
          <td width="57" valign="center" ><p align="center" >右侧 </p></td>
          <td width="70" valign="center" >
            <p><input type="text" v-model="lastSub[1].s1" ></p>
          </td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[1].s2"></p></td>
          <td width="38" valign="center" colspan="2" ><p><input type="text" v-model="lastSub[1].s3"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[1].s4"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[1].s5"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[1].s6"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[1].s7"></p></td>
          <td width="38" valign="center" ><p><input type="text" v-model="lastSub[1].s8"></p></td>
          <td width="38" valign="center" colspan="2" ><p><input type="text" v-model="lastSub[1].s9"></p></td>
        </tr>
        <tr >
          <td width="636" valign="center" colspan="17" >
            <p align="center" ><img width="570" height="2" src="../../assets/files/imgs/D/D-69_wps1.png"></p>
          </td>
        </tr>
        <tr class="ad-textarea table-padding5px">
          <td width="636" valign="top" colspan="17" >
            <p style="text-align: left;">施工情况描述：
              <textarea name="" cols="30" rows="4" v-model="obj.m6"></textarea>
            </p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-734">施工单位技术负责人：<input type="text" v-model="obj.m7" class="input-80">记录：<input type="text" v-model="obj.m8" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">         
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
  import {splitDate,joinDate} from '../../utils/utils'
    export default {
      name: "D-70",
    data() {
      return {
        isAdd: true,
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
        titleName:['1点（拱顶高程）','2点','2&#8217;点','3点','3&#8217;点','4点','4&#8217;点','5点','5&#8217;点','6点（路面设计标高）'],
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        lastSub:[],
        id: '1'    //主表id
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
        this.$publicFun.getRecInfo()
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
    mounted() {
      for(var i= 0; i<12;i++){
        let subObj={};
        if(i<10){
          this.controlArr.push(subObj);
        }
        if(i>=10){
          this.lastSub.push(subObj);
        }
      }
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/d70/findById', {
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
            let arr = []
            let arr2 = []
            if (this.obj.subList != undefined && this.obj.subList.length >0){
              this.obj.subList.forEach((item,index) => {
                if(index<10){
                  arr.push(item)
                }else {
                  arr2.push(item)
                }

              })
            }
            this.controlArr = arr;
            this.lastSub = arr2;
            this.isAdd = false;
          }
        })
      },
      //插入
      addData() {
        if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.subObj) == '{}') {
          return
        }
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.obj.subList.push(this.lastSub[0]);
        this.obj.subList.push(this.lastSub[1]);
        this.axios.post("/HiQuality/d70/save", this.$qs.stringify({
          BBtD70M:JSON.stringify(this.obj),
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
        this.obj.subList = this.controlArr;
        this.obj.subList.push(this.lastSub[0]);
        this.obj.subList.push(this.lastSub[1]);
        this.axios.post('/HiQuality/d70/update', this.$qs.stringify({
          BBtD70M:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d70/deleteById', {
          params: {
            id: this.id
          }
        }).then(res => {
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
