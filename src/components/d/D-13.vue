<template>
  <div class="D-13 text-center main-d lengthways-a ad-textarea">
    <p class="top-name-p width-618">D-13</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>混 凝 土 施 工 记 录</strong><strong> </strong></h3>
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
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel table-tr-height-35">
      <tr>
        <td width="167" valign="center" colspan="2" ><p align="center">混凝土浇筑日期</p> </td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <div class="block">
            <el-date-picker v-model="subObj.s1Arr[index]" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >工程项目及部位 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s2Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >混凝土标号 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s3Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >施工配合比 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s4Arr[index]">
        </td>
       <!-- <td width="144" valign="center" ><p align="center" >&nbsp;</p></td>
        <td width="144" valign="center" ><p align="center" >&nbsp;</p></td>-->
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >混凝土水灰比 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s5Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >水泥用量（kg/m3） </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s6Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="83" valign="center" rowspan="5" ><p align="center" >原材料<br />规格及<br />用 量 </p></td>
        <td width="83" valign="center" ><p align="center" >水泥 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s7Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="83" valign="center" ><p align="center" >粉煤灰 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s20Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="83" valign="center" ><p align="center" >砂 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s8Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="83" valign="center" ><p align="center" >碎石 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s9Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="83" valign="center" ><p align="center" >水 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s10Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >外加剂种类及用量 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s11Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >坍 落 度（cm） </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s12Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >拌和及捣实方法 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s13Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >气  温 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s14Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >天  气 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s15Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >试 件 编 号 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s16Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >试件强度MPa </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s17Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >养 护 情 况 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s18Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >成 品 编 号 </p></td>
        <td width="144" valign="center" v-for="(val,index) in 3" :key="index">
          <input type="text" v-model="subObj.s19Arr[index]">
        </td>
      </tr>
      <tr >
        <td width="167" valign="center" colspan="2" ><p align="center" >监理意见 </p></td>
        <td width="432" valign="center" colspan="3" >
          <textarea name="" cols="30" rows="6" v-model="nameList1[0].auditOpinion" disabled></textarea>
        </td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-618">施工单位技术负责人：<input type="text" v-model="obj.m2" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">日期：<input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
        name: "D-13",
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
          //从表
          subObj: {
            s1Arr:[],
            s2Arr:[],
            s3Arr:[],
            s4Arr:[],
            s5Arr:[],
            s6Arr:[],
            s7Arr:[],
            s8Arr:[],
            s9Arr:[],
            s10Arr:[],
            s11Arr:[],
            s12Arr:[],
            s13Arr:[],
            s14Arr:[],
            s15Arr:[],
            s16Arr:[],
            s17Arr:[],
            s18Arr:[],
            s19Arr:[],
            s20Arr:[]
          },
          //主表
          obj: {
            subList: []
          },
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
        this.getData();
      },
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/d13/findById', {
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
              this.obj.subList.forEach((item,index)=>{
                this.subObj.s1Arr.push(item.s1);
                this.subObj.s2Arr.push(item.s2);
                this.subObj.s3Arr.push(item.s3);
                this.subObj.s4Arr.push(item.s4);
                this.subObj.s5Arr.push(item.s5);
                this.subObj.s6Arr.push(item.s6);
                this.subObj.s7Arr.push(item.s7);
                this.subObj.s8Arr.push(item.s8);
                this.subObj.s9Arr.push(item.s9);
                this.subObj.s10Arr.push(item.s10);
                this.subObj.s11Arr.push(item.s11);
                this.subObj.s12Arr.push(item.s12);
                this.subObj.s13Arr.push(item.s13);
                this.subObj.s14Arr.push(item.s14);
                this.subObj.s15Arr.push(item.s15);
                this.subObj.s16Arr.push(item.s16);
                this.subObj.s17Arr.push(item.s17);
                this.subObj.s18Arr.push(item.s18);
                this.subObj.s19Arr.push(item.s19);
                this.subObj.s20Arr.push(item.s20);
              })
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
          for(var i = 0; i<3; i++){
            let sub = {};
            sub.s1 = this.subObj.s1Arr[i];
            sub.s2 = this.subObj.s2Arr[i];
            sub.s3 = this.subObj.s3Arr[i];
            sub.s4 = this.subObj.s4Arr[i];
            sub.s5 = this.subObj.s5Arr[i];
            sub.s6 = this.subObj.s6Arr[i];
            sub.s7 = this.subObj.s7Arr[i];
            sub.s8 = this.subObj.s8Arr[i];
            sub.s9 = this.subObj.s9Arr[i];
            sub.s10 = this.subObj.s10Arr[i];
            sub.s11 = this.subObj.s11Arr[i];
            sub.s12 = this.subObj.s12Arr[i];
            sub.s13 = this.subObj.s13Arr[i];
            sub.s14 = this.subObj.s14Arr[i];
            sub.s15 = this.subObj.s15Arr[i];
            sub.s16 = this.subObj.s16Arr[i];
            sub.s17 = this.subObj.s17Arr[i];
            sub.s18 = this.subObj.s18Arr[i];
            sub.s19 = this.subObj.s19Arr[i];
            sub.s20 = this.subObj.s20Arr[i];
            this.obj.subList.push(sub);
          }
          this.axios.post("/HiQuality/d13/save",this.$qs.stringify({
            BBtD13M:JSON.stringify(this.obj),
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
          this.obj.subList = this.subObj;
          this.axios.post('/HiQuality/d13/update',this.$qs.stringify({
            BBtD13M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d13/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.obj = {subList:[]}
              this.isAdd = true;

            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
