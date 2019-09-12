<template>
  <div class="D-40 text-center">
    <p class="top-name-p width-1043">D-40</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>水下混凝土灌注记录</strong><strong> </strong></h3>
  <p > 承包单位：<input type="text" v-model="headerInfo.unitName" class="input-140" disabled>监理单位：<input type="text" v-model="headerInfo.unitName2" class="input-140" disabled>合同号：<input type="text" v-model="headerInfo.contractCode" class="input-80" disabled>第<input type="text" class="width-30">页 共<input type="text" class="width-30">页        编号：<input type="text" v-model="rec.recNo"> </p>
  <div align="center" >
    <table border="1" cellspacing="0" >
      <tr  class="public-tabel">
        <td width="72" valign="center" >
          <a name="xxqqWholeArea2" id="xxqqWholeArea2" >桥  名</a></td>
        <td width="92" valign="center" ><p><input type="text" v-model="obj.m1"></p></td>
        <td width="147" valign="center" colspan="2" ><p >砼设计强度等级 </p></td>
        <td width="108" valign="center" colspan="2" ><p><input type="text" v-model="obj.m2"></p></td>
        <td width="176" valign="center" colspan="4" ><p >首批砼初凝时间(h) </p></td>
        <td width="96" valign="center" colspan="2" ><p><input type="text" v-model="obj.m3"></p></td>
        <td width="168" valign="center" colspan="3" ><p >灌注过程总时间(h) </p></td>
        <td width="106" valign="center" colspan="2" ><p><input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr  class="public-tabel">
        <td width="72" valign="center" ><p >桩  号 </p></td>
        <td width="92" valign="center" ><p><input type="text" v-model="obj.m5"></p></td>
        <td width="147" valign="center" colspan="2" ><p >坍落度 </p></td>
        <td width="108" valign="center" colspan="2" ><p><input type="text" v-model="obj.m6"></p></td>
        <td width="176" valign="center" colspan="4" ><p >设计桩顶标高（m） </p></td>
        <td width="96" valign="center" colspan="2" ><p><input type="text" v-model="obj.m7"></p></td>
        <td width="168" valign="center" colspan="3" ><p >计算砼浇筑数量（m3） </p></td>
        <td width="106" valign="center" colspan="2" ><p><input type="text" v-model="obj.m8"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="72" valign="center" ><p >墩台号 </p></td>
        <td width="92" valign="center" ><p><input type="text" v-model="obj.m9"></p></td>
        <td width="147" valign="center" colspan="2" ><p >外加剂 </p></td>
        <td width="108" valign="center" colspan="2" ><p><input type="text" v-model="obj.m10"></p></td>
        <td width="176" valign="center" colspan="4" ><p >灌注前孔底标高（m） </p></td>
        <td width="96" valign="center" colspan="2" ><p><input type="text" v-model="obj.m11"></p></td>
        <td width="168" valign="center" colspan="3" ><p >每盘砼数量（m3） </p></td>
        <td width="106" valign="center" colspan="2" ><p><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr  class="public-tabel">
        <td width="72" valign="center" ><p >桩基号 </p></td>
        <td width="92" valign="center" ><p><input type="text" v-model="obj.m13"></p></td>
        <td width="147" valign="center" colspan="2" ><p >水泥厂牌名及标号 </p></td>
        <td width="108" valign="center" colspan="2" ><p><input type="text" v-model="obj.m14"></p></td>
        <td width="176" valign="center" colspan="4" ><p >钢筋骨架底面标高（m） </p></td>
        <td width="96" valign="center" colspan="2" ><p><input type="text" v-model="obj.m15"></p></td>
        <td width="168" valign="center" colspan="3" ><p >基准面至孔底深H(m) </p></td>
        <td width="106" valign="center" colspan="2" ><p><input type="text" v-model="obj.m16"></p></td>
      </tr>
      <tr  class="public-tabel">
        <td width="72" valign="center" ><p >桩  径 </p></td>
        <td width="92" valign="center" ><p><input type="text" v-model="obj.m17"></p></td>
        <td width="147" valign="center" colspan="2" ><p >护筒顶面标高(m) </p></td>
        <td width="108" valign="center" colspan="2" ><p><input type="text" v-model="obj.m18"></p></td>
        <td width="176" valign="center" colspan="4" ><p >计算首批砼数量(m3) </p></td>
        <td width="96" valign="center" colspan="2" ><p><input type="text" v-model="obj.m19"></p></td>
        <td width="168" valign="center" colspan="3" ><p >实际首批砼数量(m3) </p></td>
        <td width="106" valign="center" colspan="2" ><p><input type="text" v-model="obj.m20"></p></td>
      </tr>
      <tr >
        <td width="72" valign="center" rowspan="3" ><p align="center" >时  间 </p></td>
        <td width="92" valign="center" rowspan="3" ><p align="center" >测深hx <br />
          (基准面至砼顶面m)<strong> </strong> </p></td>
        <td width="48" valign="center" rowspan="3" ><p align="center" >砼厚度 <br />
          H-hx </p></td>
        <td width="240" valign="center" colspan="4" ><p align="center" >导管长度(m)           </p></td>
        <td width="84" valign="center" colspan="2" rowspan="3" ><p align="center" >导管埋深（m） <br />
          L2-hx </p></td>
        <td width="156" valign="center" colspan="3" rowspan="2" ><p align="center" >导管拆除数量 </p></td>
        <td width="168" valign="center" colspan="3" rowspan="2" ><p align="center" >实际砼数量 </p></td>
        <td width="106" valign="center" colspan="2" rowspan="3" ><p align="center" >备注 </p></td>
      </tr>
      <tr >
        <td width="99" valign="center" rowspan="2" ><p align="center" >基准面至导管顶口L1 </p></td>
        <td width="68" valign="center" rowspan="2" ><p align="center" >基准面至导管底口L2 </p></td>
        <td width="72" valign="center" colspan="2" rowspan="2" ><p align="center" >导管 <br />
          总长L=L1+L2 </p></td>
      </tr>
      <tr >
        <td width="72" valign="center" colspan="2" ><p align="center" >节数 </p></td>
        <td width="84" valign="center" ><p align="center" >长度 </p></td>
        <td width="48" valign="center" ><p align="center" >盘数 </p></td>
        <td width="60" valign="center" ><p align="center" >数量（m3） </p></td>
        <td width="60" valign="center" ><p >累计数量（m3） </p></td>
      </tr>
      <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
        <td width="72" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s1"></p>
        </td>
        <td width="92" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s2"></p>
        </td>
        <td width="48" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s3"></p>
        </td>
        <td width="99" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s4"></p>
        </td>
        <td width="68" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s5"></p>
        </td>
        <td width="72" valign="center" colspan="2" >
          <p align="center"><input type="text" class="td-input" v-model="val.s6"></p>
        </td>
        <td width="84" valign="center" colspan="2" >
          <p align="center"><input type="text" class="td-input" v-model="val.s7"></p>
        </td>
        <td width="72" valign="center" colspan="2" >
          <p align="center"><input type="text" class="td-input" v-model="val.s8"></p>
        </td>
        <td width="84" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s9"></p>
        </td>
        <td width="48" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s10"></p>
        </td>
        <td width="60" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s11"></p>
        </td>
        <td width="60" valign="center" colspan="2" >
          <p align="center"><input type="text" class="td-input" v-model="val.s12"></p>
        </td>
        <td width="105" valign="center" >
          <p align="center"><input type="text" class="td-input" v-model="val.s13"></p>
        </td>
      </tr>
      <tr >
        <td width="488" valign="top" colspan="8" ><p >自检说明：<input type="text" v-model="obj.m21"><br/>
          <br/>
                        质检人员: <input type="text" v-model="obj.m22" class="input-140">                 
          <input type="text" v-model="m23DateArr[0]" class="date-input"> 年   
          <input type="text" v-model="m23DateArr[1]" class="date-input"> 月     
          <input type="text" v-model="m23DateArr[2]" class="date-input">日</p>
        </td>
        <td width="478" valign="top" colspan="9" ><p >监理评语：<input type="text" v-model="nameList1[0].auditOpinion" disabled> <br />
                                            
          <br />
                 
          监理员：<input type="text" v-model="nameList1[1].fullName" disabled> 
          <input type="text" v-model="m15DataArr[0]" class="date-input" disabled> 年   
          <input type="text" v-model="m15DataArr[1]" class="date-input" disabled> 月     
          <input type="text" v-model="m15DataArr[2]" class="date-input" disabled>日 </p>
        </td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-1043">施工单位技术负责人：<input type="text" v-model="obj.m27" class="input-80">记录：<input type="text" v-model="obj.m28" class="input-80">复核：<input type="text" v-model="obj.m29" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
    <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
    <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日<br clear="all" />
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
        name: "D-40",
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
          m23DateArr: [],
          m26DateArr: [],
          m31DateArr: [],
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
      mounted() {
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d40/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.m23DateArr = splitDate(this.obj.m23,'-');
              //this.m26DateArr = splitDate(this.obj.m26,'-');
              this.m31DateArr = splitDate(this.obj.m31,'-')
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
          if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.val) == '{}') {
            return
          }
          if (!this.isAdd) {
            return false;
          }
          this.obj.m23 = joinDate(this.m23DateArr,'-');
          //this.obj.m26 = joinDate(this.m26DateArr,'-');
          this.obj.m31 = joinDate(this.m31DateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/d40/save", this.$qs.stringify({
            BBtD40M:JSON.stringify(this.obj),
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
          this.obj.m23 = joinDate(this.m23DateArr,'-');
          //this.obj.m26 = joinDate(this.m26DateArr,'-');
          this.obj.m31 = joinDate(this.m31DateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d40/update', this.$qs.stringify({
            BBtD40M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d40/deleteById', {
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
