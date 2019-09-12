<template>
  <div class="D-25 text-center">
    <p class="top-name-p width-696">D-25</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>预应力管道检查记录</strong><strong> </strong></h3>
    <div class="text-left width-696">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-696">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <table border="0" cellspacing="0" class="public-tabel">
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center">项目名称</p> </td>
      <td width="282" valign="center" colspan="5" ><p><input type="text" v-model="obj.m1"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >梁(板)号 </p></td>
      <td width="162" valign="center" colspan="3" ><p><input type="text" v-model="obj.m2"></p></td>
    </tr>
    <tr >
      <td width="48" valign="center" rowspan="4" ><p align="center" >管道坐标 <br />
        (mm) </p></td>
      <td width="60" valign="center" rowspan="2" ><p align="center" >梁长方向(mm) </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="60" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="60" valign="center" ><p align="center" >1/2截面 </p></td>
      <td width="54" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
    </tr>
    <tr >
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m3"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m4"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m5"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m6"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m7"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m8"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m9"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m10"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m11"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m12"></p></td>
    </tr>
    <tr >
      <td width="60" valign="center" rowspan="2" ><p align="center" >梁高方向(mm) </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="60" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="60" valign="center" ><p align="center" >1/2截面 </p></td>
      <td width="54" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
    </tr>
    <tr >
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m13"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m14"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m15"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m16"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m17"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m18"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m19"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m20"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m21"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m22"></p></td>
    </tr>
    <tr >
      <td width="48" valign="center" rowspan="4" ><p align="center" >管道间距 <br />
        (mm) </p></td>
      <td width="60" valign="center" rowspan="2" ><p align="center" >同 排 </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="60" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="60" valign="center" ><p align="center" >1/2截面 </p></td>
      <td width="54" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
    </tr>
    <tr >
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m23"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m24"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m25"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m26"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m27"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m28"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m29"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m30"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m31"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m32"></p></td>
    </tr>
    <tr >
      <td width="60" valign="center" rowspan="2" ><p align="center" >上下层 </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="60" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="60" valign="center" ><p align="center" >1/2截面 </p></td>
      <td width="54" valign="center" ><p align="center" >起弯点 </p></td>
      <td width="54" valign="center" ><p align="center" >弯止点 </p></td>
      <td width="54" valign="center" ><p align="center" >端点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
      <td width="54" valign="center" ><p align="center" >任抽点 </p></td>
    </tr>
    <tr >
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m33"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m34"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m35"></p></td>
      <td width="60" valign="center" ><p><input type="text" v-model="obj.m36"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m37"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m38"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m39"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m40"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m41"></p></td>
      <td width="54" valign="center" ><p><input type="text" v-model="obj.m42"></p></td>
    </tr>
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center" >管道线型 <br />
        圆滑情况 </p></td>
      <td width="552" valign="center" colspan="10" >
        <p><textarea name="" cols="30" rows="3" v-model="obj.m43"></textarea></p>
      </td>
    </tr>
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center" >管道固定 <br />
        措施及固<br />
        定 情 况 </p></td>
      <td width="552" valign="center" colspan="10" >
        <p><textarea name="" cols="30" rows="3" v-model="obj.m44"></textarea></p>
      </td>
    </tr>
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center" >锚具规格 <br />
        质量及固 <br />
        定 情 况 </p></td>
      <td width="552" valign="center" colspan="10" >
        <p><textarea name="" cols="30" rows="3" v-model="obj.m45"></textarea></p>
      </td>
    </tr>
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center" >锚具垫板 <br />
        与孔道垂 <br />
        直 情 况 </p></td>
      <td width="552" valign="center" colspan="10" >
        <p><textarea name="" cols="30" rows="3" v-model="obj.m46"></textarea></p>
      </td>
    </tr>
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center" >备  注 </p></td>
      <td width="552" valign="top" colspan="10" >
        <p >（管道座标注明钢绞线偏号，且每束钢绞线均需填写。）
        <textarea name="" cols="30" rows="3" v-model="obj.m47"></textarea>
        </p>
      </td>
    </tr>
    <tr >
      <td width="108" valign="center" colspan="2" ><p align="center" >检查意见 </p></td>
      <td width="552" valign="center" colspan="10" >
        <p><textarea name="" cols="30" rows="3" v-model="obj.m48"></textarea></p>
      </td>
    </tr>
  </table>
  <p class="bot-hint-p width-696">施工单位技术负责人：<input type="text" v-model="obj.m49" class="input-105">记录：<input type="text" v-model="obj.m50" class="input-105">复核：<input type="text" v-model="obj.m51" class="input-105">
  </p>   
   <p class="bot-hint-p width-696"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled>日期：
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
        name: "D-25",
      data(){
        return{
          isAdd:true,
          obj:{},
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
          id:'1',
          m54DateArr:[]
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
          this.axios.get('/HiQuality/d25/findById',{
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
          this.axios.post('/HiQuality/d25/save',this.$qs.stringify({
            BBtD25M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d25/update',this.$qs.stringify({
            BBtD25M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
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
          this.axios.get('/HiQuality/d25/deleteById',{
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
