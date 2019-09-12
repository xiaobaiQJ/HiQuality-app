<template>
  <div class="D-28 text-center">
    <p class="top-name-p width-682">D-28</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>边坡防护锚杆施工记录</strong><strong> </strong></h3>
    <div class="text-left width-682">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-682">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <table border="0" cellspacing="0" class="public-tabel" width="682">
    <tr >
      <td width="144" valign="center" ><p align="center">项目名称</p> </td>
      <td width="216" valign="center" colspan="5" ><p><input type="text" v-model="obj.m1"></p></td>
      <td width="108" valign="center" colspan="3" ><p align="center" >施工日期 </p></td>
      <td width="180" valign="center" colspan="4" >          <div class="block">
        <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
      </div></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >桩号及及部位 </p></td>
      <td width="216" valign="center" colspan="5" ><p><input type="text" v-model="obj.m3"></p></td>
      <td width="108" valign="center" colspan="3" ><p align="center" >检查日期 </p></td>
      <td width="180" valign="center" colspan="4" >          <div class="block">
        <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
      </div></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >喷射砼面积(m2) </p></td>
      <td width="216" valign="center" colspan="5" ><p><input type="text" v-model="obj.m5"></p></td>
      <td width="108" valign="center" colspan="3" ><p align="center" >边坡坡比 </p></td>
      <td width="180" valign="center" colspan="4" ><p><input type="text" v-model="obj.m6"></p></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >边坡岩土质性状 </p></td>
      <td width="504" valign="center" colspan="12" ><p><input type="text" v-model="obj.m7"></p></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆布置形式 </p></td>
      <td width="504" valign="center" colspan="12" ><p><input type="text" v-model="obj.m8"></p></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆直径(mm) </p></td>
      <td width="50" valign="center" v-for="(val,index) in 10" :key="index">
        <input type="text" v-model="subObj.s1Arr[index]">
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆孔径(mm) </p></td>
      <td width="50" valign="center" v-for="(val,index) in 10" :key="index">
        <input type="text" v-model="subObj.s2Arr[index]">
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆长度(mm) </p></td>
      <td width="50" valign="center" v-for="(val,index) in 10" :key="index">
        <input type="text" v-model="subObj.s3Arr[index]">
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆孔深(mm) </p></td>
      <td width="50" valign="center" v-for="(val,index) in 10" :key="index">
        <input type="text" v-model="subObj.s4Arr[index]">
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆间距(mm) </p></td>
      <td width="50" valign="center" v-for="(val,index) in 10" :key="index">
        <input type="text" v-model="subObj.s5Arr[index]">
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆抗拔力(kN) </p></td>
      <td width="50" valign="center" v-for="(val,index) in 10" :key="index">
        <input type="text" v-model="subObj.s6Arr[index]">
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >砂浆配合比 <br />
        (水泥：砂) </p></td>
      <td width="504" valign="center" colspan="12" ><p><input type="text" v-model="obj.m9"></p></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >砂(水泥)浆水灰比 </p></td>
      <td width="504" valign="center" colspan="12" ><p><input type="text" v-model="obj.m10"></p></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >锚杆注浆情况 </p></td>
      <td width="504" valign="center" colspan="12" ><p><input type="text" v-model="obj.m11"></p></td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >备  注 </p></td>
      <td width="504" valign="top" colspan="12" >
        <textarea name="" cols="30" rows="4" v-model="obj.m12"></textarea>
      </td>
    </tr>
    <tr >
      <td width="144" valign="center" ><p align="center" >检查意见 </p></td>
      <td width="504" valign="center" colspan="12" >
        <textarea name="" cols="30" rows="6" v-model="obj.m13"></textarea>
      </td>
    </tr>
  </table>
  <p class="bot-hint-p width-682">施工单位技术负责人：<input type="text" v-model="obj.m14" class="input-80">记录：<input type="text" v-model="obj.m15" class="input-80">复核：<input type="text" v-model="obj.m16" class="input-80"> <br />
    监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-175">日期：
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
        name: "D-28",
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
            s6Arr:[]
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
        this.getData();
      },
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/d28/findById', {
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
          for(var i = 0; i<10; i++){
            let sub = {};
            sub.s1 = this.subObj.s1Arr[i];
            sub.s2 = this.subObj.s2Arr[i];
            sub.s3 = this.subObj.s3Arr[i];
            sub.s4 = this.subObj.s4Arr[i];
            sub.s5 = this.subObj.s5Arr[i];
            sub.s6 = this.subObj.s6Arr[i];
            this.obj.subList.push(sub);
          }
          this.axios.post("/HiQuality/d28/save", this.$qs.stringify({
            BBtD28M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d28/update', this.$qs.stringify({
            BBtD28M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d28/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = true;
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
