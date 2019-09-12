<template>
    <div class="D-54 text-center">
      <p class="top-name-p width-905">D-54</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>涵洞完工检查记录表</strong><strong> </strong></h3>
      <div class="text-left width-905">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-905">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="0" cellspacing="0" class="public-tabel">
        <tr >
          <td width="119" valign="center" colspan="2" ><p align="center">涵名及桩号</p> </td>
          <td width="210" valign="center" colspan="10" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="110" valign="center" colspan="6" ><p align="center" >设计孔径 </p></td>
          <td width="195" valign="center" colspan="9" ><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" colspan="2" ><p align="center" >设计长度(m) </p></td>
          <td width="210" valign="center" colspan="10" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="110" valign="center" colspan="6" ><p align="center" >设计交角 </p></td>
          <td width="195" valign="center" colspan="9" ><p><input type="text" v-model="obj.m4"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" colspan="2" rowspan="2" ><p align="center" >长  度 </p></td>
          <td width="129" valign="center" colspan="4" ><p align="center" >允许偏差(mm) </p></td>
          <td width="278" valign="center" colspan="18" ><p align="center" >实测长度(m) </p></td>
          <td width="108" valign="center" colspan="3" ><p align="center" >实测偏差(mm) </p></td>
        </tr>
        <tr >
          <td width="129" valign="center" colspan="4" ><p><input type="text" v-model="obj.m5"></p></td>
          <td width="83" valign="center" colspan="7" ><p><input type="text" v-model="obj.m6"></p></td>
          <td width="108" valign="center" colspan="6" ><p><input type="text" v-model="obj.m7"></p></td>
          <td width="85" valign="center" colspan="5" ><p><input type="text" v-model="obj.m8"></p></td>
          <td width="108" valign="center" colspan="3" ><p><input type="text" v-model="obj.m9"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" colspan="2" rowspan="3" ><p align="center" >轴线偏位 </p></td>
          <td width="84" valign="center" colspan="3" rowspan="2" ><p align="center" >允许偏差(mm) </p></td>
          <td width="360" valign="center" colspan="20" ><p align="center" >实 测 (m) </p></td>
          <td width="71" valign="center" colspan="2" rowspan="2" ><p align="center" >实测偏差(mm) </p></td>
        </tr>
        <tr >
          <td width="90" valign="center" colspan="4" ><p align="center" >横轴左端 </p></td>
          <td width="90" valign="center" colspan="7" ><p align="center" >横轴右端 </p></td>
          <td width="90" valign="center" colspan="5" ><p align="center" >纵轴前端 </p></td>
          <td width="90" valign="center" colspan="4" ><p align="center" >纵轴后端 </p></td>
        </tr>
        <tr >
          <td width="84" valign="center" colspan="3" ><p><input type="text" v-model="obj.m10"></p></td>
          <td width="90" valign="center" colspan="4" ><p><input type="text" v-model="obj.m11"></p></td>
          <td width="90" valign="center" colspan="7" ><p><input type="text" v-model="obj.m12"></p></td>
          <td width="90" valign="center" colspan="5" ><p><input type="text" v-model="obj.m13"></p></td>
          <td width="90" valign="center" colspan="4" ><p><input type="text" v-model="obj.m14"></p></td>
          <td width="71" valign="center" colspan="2" ><p><input type="text" v-model="obj.m15"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" colspan="2" rowspan="2" ><p align="center" >流水面高程 </p></td>
          <td width="130" valign="center" colspan="5" ><p align="center" >允许偏差(mm) </p></td>
          <td width="265" valign="center" colspan="16" ><p align="center" >实测高程(m) </p></td>
          <td width="120" valign="center" colspan="4" ><p align="center" >实测偏差(mm) </p></td>
        </tr>
        <tr >
          <td width="130" valign="center" colspan="5" ><p><input type="text" v-model="obj.m16"></p></td>
          <td width="66" valign="center" colspan="4" ><p><input type="text" v-model="obj.m17"></p></td>
          <td width="66" valign="center" colspan="4" ><p><input type="text" v-model="obj.m18"></p></td>
          <td width="66" valign="center" colspan="5" ><p><input type="text" v-model="obj.m19"></p></td>
          <td width="66" valign="center" colspan="3" ><p><input type="text" v-model="obj.m20"></p></td>
          <td width="120" valign="center" colspan="4" ><p><input type="text" v-model="obj.m21"></p></td>
        </tr>
        <tr >
          <td width="119" valign="center" colspan="2" rowspan="2" ><p align="center" >顶面高程 </p></td>
          <td width="130" valign="center" colspan="5" ><p align="center" >允许偏差(mm) </p></td>
          <td width="265" valign="center" colspan="16" ><p align="center" >实测高程(m) </p></td>
          <td width="120" valign="center" colspan="4" ><p align="center" >实测偏差(mm) </p></td>
        </tr>
        <tr >
          <td width="130" valign="center" colspan="5" ><p><input type="text" v-model="obj.m22"></p></td>
          <td width="66" valign="center" colspan="4" ><p><input type="text" v-model="obj.m23"></p></td>
          <td width="66" valign="center" colspan="4" ><p><input type="text" v-model="obj.m24"></p></td>
          <td width="66" valign="center" colspan="5" ><p><input type="text" v-model="obj.m25"></p></td>
          <td width="66" valign="center" colspan="3" ><p><input type="text" v-model="obj.m26"></p></td>
          <td width="120" valign="center" colspan="4" ><p><input type="text" v-model="obj.m27"></p></td>
        </tr>
        <tr >
          <td width="47" valign="center" rowspan="3" ><p align="center" >混凝土强度或砂浆强度 </p></td>
          <td width="71" valign="center" ><p align="center" >部位 </p></td>
          <td width="59" valign="center" colspan="2" ><p align="center" >基础 </p></td>
          <td width="72" valign="center" colspan="4" ><p align="center" >支撑梁 </p></td>
          <td width="48" valign="center" colspan="2" ><p align="center" >涵身 </p></td>
          <td width="74" valign="center" colspan="4" ><p align="center" >盖板(拱圈) </p></td>
          <td width="60" valign="center" colspan="3" ><p align="center" >铺装 </p></td>
          <td width="60" valign="center" colspan="5" ><p align="center" >帽石 </p></td>
          <td width="84" valign="center" colspan="4" ><p align="center" >进出口 </p></td>
          <td width="56" valign="center" ><p align="center" >涵底铺砌 </p></td>
        </tr>
        <tr >
          <td width="71" valign="center" ><p align="center" >设计 </p></td>
          <td width="59" valign="center" colspan="2" ><p><input type="text" v-model="obj.m28"></p></td>
          <td width="72" valign="center" colspan="4" ><p><input type="text" v-model="obj.m291"></p></td>
          <td width="48" valign="center" colspan="2" ><p><input type="text" v-model="obj.m30"></p></td>
          <td width="74" valign="center" colspan="4" ><p><input type="text" v-model="obj.m31"></p></td>
          <td width="60" valign="center" colspan="3" ><p><input type="text" v-model="obj.m32"></p></td>
          <td width="60" valign="center" colspan="5" ><p><input type="text" v-model="obj.m33"></p></td>
          <td width="84" valign="center" colspan="4" ><p><input type="text" v-model="obj.m34"></p></td>
          <td width="56" valign="center" ><p><input type="text" v-model="obj.m35"></p></td>
        </tr>
        <tr >
          <td width="71" valign="center" ><p align="center" >实际R28 </p></td>
          <td width="59" valign="center" colspan="2" ><p><input type="text" v-model="obj.m36"></p></td>
          <td width="72" valign="center" colspan="4" ><p><input type="text" v-model="obj.m37"></p></td>
          <td width="48" valign="center" colspan="2" ><p><input type="text" v-model="obj.m38"></p></td>
          <td width="74" valign="center" colspan="4" ><p><input type="text" v-model="obj.m39"></p></td>
          <td width="60" valign="center" colspan="3" ><p><input type="text" v-model="obj.m40"></p></td>
          <td width="60" valign="center" colspan="5" ><p><input type="text" v-model="obj.m41"></p></td>
          <td width="84" valign="center" colspan="4" ><p><input type="text" v-model="obj.m42"></p></td>
          <td width="56" valign="center" ><p><input type="text" v-model="obj.m43"></p></td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >沉降缝填塞及防水层敷设情况 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m44"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >盖板(拱圈)安装 <br />
            座浆稳固情况 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m45"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >帽石及一字墙（或八字墙）线型情况 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m46"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >涵底铺砌情况 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m47"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >进出水口处理及 <br />
            接 渠 情 况 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m48"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >施工质量缺陷及处理情况记录 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m49"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="155" valign="center" colspan="3" ><p align="center" >检查意见 </p></td>
          <td width="480" valign="center" colspan="24" >
            <p><textarea name="" cols="30" rows="3" v-model="obj.m50"></textarea></p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-905"> 施工单位技术负责人：<input type="text" v-model="obj.m51" class="input-105">记录：<input type="text" v-model="obj.m52" class="input-105"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-105">日期：
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
        name: "D-54",
      data(){
        return{
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
          isAdd:true
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
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/d54/findById', {
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
          this.axios.post('/HiQuality/d54/save',this.$qs.stringify({
            BBtD54M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d54/update',this.$qs.stringify({
            BBtD54M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d54/deleteById', {
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
