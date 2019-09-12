<template>
    <div class="D-67 text-center">
      <p class="top-name-p width-820">D-67</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>隧道洞身开挖测量记录表</strong><strong> </strong></h3>
      <div class="text-left width-820">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-820">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" class="public-tabel">
        <tr >
          <td width="84" valign="center" colspan="3" ><p align="center">隧道名称 </p></td>
          <td width="133" valign="center" colspan="3" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="77" valign="center" colspan="4" ><p align="center" >施工时间 </p></td>
          <td width="91" valign="center" colspan="2" >          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
          <td width="77" valign="center" colspan="3" ><p align="center" >检验时间 </p></td>
          <td width="150" valign="center" colspan="2" >          <div class="block">
            <el-date-picker v-model="obj.m3" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="84" valign="center" colspan="3" ><p align="center" >起讫桩号 </p></td>
          <td width="182" valign="center" colspan="5" ><p><input type="text" v-model="obj.m4"></p></td>
          <td width="119" valign="center" colspan="4" ><p align="center" >开挖方法与设备 </p></td>
          <td width="227" valign="center" colspan="5" ><p><input type="text" v-model="obj.m5"></p></td>
        </tr>
        <tr >
          <td width="109" valign="center" colspan="4" rowspan="3" ><p align="center" >测点桩号 </p></td>
          <td width="174" valign="center" colspan="5" ><p align="center" >洞顶高程 </p></td>
          <td width="174" valign="center" colspan="5" ><p align="center" >宽度 </p></td>
          <td width="70" valign="center" colspan="2" ><p align="center" >路面基底高程 </p></td>
          <td width="84" valign="center" ><p align="center" >外观检查 </p></td>
        </tr>
        <tr >
          <td width="58" valign="center" ><p align="center" >左 </p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >中 </p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >右 </p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >左侧 </p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >右侧 </p></td>
          <td width="58" valign="center" ><p align="center" >全宽 </p></td>
          <td width="70" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
          <td width="84" valign="center" ><p align="center" >&nbsp;</p></td>
        </tr>
        <tr >
          <td width="174" valign="center" colspan="5" ><p align="center" >m </p></td>
          <td width="174" valign="center" colspan="5" ><p align="center" >m </p></td>
          <td width="70" valign="center" colspan="2" ><p align="center" >m </p></td>
          <td width="84" valign="center" ><p align="center" >&nbsp;</p></td>
        </tr>
        <tr>
          <td width="50" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[0].s1"></p></td>
          <td width="58" valign="center" colspan="3" ><p align="center">设计 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[0].s2"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s3"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s4"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s5"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s6"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[0].s7"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s8"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[0].s9"></p></td>
        </tr>
        <tr>
          <td width="58" valign="center" colspan="3" ><p align="center">实测 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[0].s10"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s11"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s12"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s13"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s14"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[0].s15"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s16"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[0].s17"></p></td>
        </tr>
        <tr>
          <td width="50" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[1].s1"></p></td>
          <td width="58" valign="center" colspan="3" ><p align="center">设计 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[1].s2"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s3"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s4"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s5"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s6"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[1].s7"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s8"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[1].s9"></p></td>
        </tr>
        <tr>
          <td width="58" valign="center" colspan="3" ><p align="center">实测 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[1].s10"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s11"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s12"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s13"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s14"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[1].s15"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s16"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[1].s17"></p></td>
        </tr>
        <tr>
          <td width="50" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[2].s1"></p></td>
          <td width="58" valign="center" colspan="3" ><p align="center">设计 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[2].s2"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s3"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s4"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s5"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s6"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[2].s7"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s8"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[2].s9"></p></td>
        </tr>
        <tr>
          <td width="58" valign="center" colspan="3" ><p align="center">实测 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[2].s10"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s11"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s12"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s13"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s14"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[2].s15"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s16"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[2].s17"></p></td>
        </tr>
        <tr>
          <td width="50" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[3].s1"></p></td>
          <td width="58" valign="center" colspan="3" ><p align="center">设计 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[3].s2"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s3"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s4"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s5"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s6"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[3].s7"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s8"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[3].s9"></p></td>
        </tr>
        <tr>
          <td width="58" valign="center" colspan="3" ><p align="center">实测 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[3].s10"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s11"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s12"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s13"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s14"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[3].s15"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[3].s16"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[3].s17"></p></td>
        </tr>
        <tr>
          <td width="50" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[4].s1"></p></td>
          <td width="58" valign="center" colspan="3" ><p align="center">设计 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[4].s2"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s3"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s4"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s5"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s6"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[4].s7"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s8"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[4].s9"></p></td>
        </tr>
        <tr>
          <td width="58" valign="center" colspan="3" ><p align="center">实测 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[4].s10"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s11"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s12"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s13"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s14"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[4].s15"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[4].s16"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[4].s17"></p></td>
        </tr>
        <tr>
          <td width="50" valign="center" rowspan="2" ><p><input type="text" v-model="controlArr[5].s1"></p></td>
          <td width="58" valign="center" colspan="3" ><p align="center">设计 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[5].s2"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s3"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s4"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s5"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s6"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[5].s7"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s8"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[5].s9"></p></td>
        </tr>
        <tr>
          <td width="58" valign="center" colspan="3" ><p align="center">实测 </p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[5].s10"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s11"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s12"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s13"></p></td>
          <td width="58" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s14"></p></td>
          <td width="58" valign="center" ><p><input type="text" v-model="controlArr[5].s15"></p></td>
          <td width="70" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[5].s16"></p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="controlArr[5].s17"></p></td>
        </tr>
        <tr >
          <td width="109" valign="center" colspan="4" ><p align="center" >合格率 </p></td>
          <td width="58" valign="center" ><p align="center" >&nbsp;</p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
          <td width="58" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
          <td width="58" valign="center" ><p align="center" >&nbsp;</p></td>
          <td width="70" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
          <td width="84" valign="center" ><p align="center" >&nbsp;</p></td>
        </tr>
        <tr >
          <td width="51" valign="center" colspan="2" ><p align="center" >超欠挖控制描述 </p></td>
          <td width="560" valign="top" colspan="15" >
            <p ><textarea name="" cols="30" rows="8" v-model="obj.m6"></textarea></p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-820">施工单位技术负责人：<input type="text" v-model="obj.m7" class="input-80">记录：<input type="text" v-model="obj.m8" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
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
        name: "D-67",
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
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          dateArr:[],
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
      mounted() {
        this.setSubObj()
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<6;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d67/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.dateArr = splitDate(this.obj.m10,'-');
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
          if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.subObj) == '{}') {
            return
          }
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/d67/save", this.$qs.stringify({
            BBtD67M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.add();
              this.$skip.skipProcess();
            }
            })
        },

        //修改
        updateData() {
          this.obj.subList = this.controlArr
          this.axios.post('/HiQuality/d67/update', this.$qs.stringify({
            BBtD67M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d67/deleteById', {
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
