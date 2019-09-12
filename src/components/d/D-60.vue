m<template>
    <div class="D-60 text-center">
      <p class="top-name-p width-734">D-60</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>水泥混凝土路面传力杆检查记录表</strong><strong> </strong></h3>
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
          <td width="171" valign="center" ><p align="center">项目名称</p> </td>
          <td width="204" valign="center" colspan="3" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="144" valign="center" colspan="3" ><p align="center" >施工日期 </p></td>
          <td width="144" valign="center" colspan="2" >          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >桩号及及部位 </p></td>
          <td width="204" valign="center" colspan="3" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="144" valign="center" colspan="3" ><p align="center" >检查日期 </p></td>
          <td width="144" valign="center" colspan="2" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >横向缩（胀）缝位置及类  型 </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m5"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >缩（胀）缝间距(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >传力杆直径(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m7"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >传力杆长度(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m8"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >传力杆间距(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m9"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >活动端防护及充填 <br />
            情  况 </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m10"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >纵缝位置及类型 </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m11"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >纵缝间距(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m12"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >拉杆直径(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m13"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >拉杆长度(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m14"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >拉杆间距(mm) </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m15"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >纵缝填缝情况 </p></td>
          <td width="492" valign="center" colspan="8" ><p><input type="text" v-model="obj.m16"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >板角补强钢筋 </p></td>
          <td width="68" valign="center" ><p align="center" >长度(mm) </p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="obj.m17"></p></td>
          <td width="72" valign="center" colspan="2" ><p align="center" >角度 </p></td>
          <td width="84" valign="center" ><p><input type="text" v-model="obj.m18"></p></td>
          <td width="84" valign="center" colspan="2" ><p align="center" >数量(kg) </p></td>
          <td width="99" valign="center" ><p><input type="text" v-model="obj.m19"></p></td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >备  注 </p></td>
          <td width="492" valign="center" colspan="8" >
            <p><textarea name="" cols="30" rows="4" v-model="obj.m20"></textarea></p>
          </td>
        </tr>
        <tr >
          <td width="171" valign="center" ><p align="center" >检查意见 </p></td>
          <td width="492" valign="center" colspan="8" >
            <p><textarea name="" cols="30" rows="6" v-model="obj.m21"></textarea></p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-734"> 施工单位技术负责人：<input type="text" v-model="obj.m22" class="input-80">记录：<input type="text" v-model="obj.m23" class="input-80"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80"> 日期：
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
        name: "D-60",
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
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/d60/findById',{
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
          this.axios.post('/HiQuality/d60/save',this.$qs.stringify({
            BBtD60M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d60/update',this.$qs.stringify({
            BBtD60M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d60/deleteById',{
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
