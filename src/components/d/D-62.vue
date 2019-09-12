<template>
    <div class="D-62 text-center main-d crosswise-a">
      <p class="top-name-p width-1125">D-62</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>圆管涵管节预制检查记录表</strong><strong> </strong></h3>
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
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-35">
          <tr >
            <td width="78" valign="center" colspan="2" ><p align="center">工程名称</p> </td>
            <td width="120" valign="center" colspan="2" ><p><input type="text" v-model="obj.m1" ></p></td>
            <td width="89" valign="center" ><p >桩 号 </p></td>
            <td width="150" valign="center" ><p><input type="text" v-model="obj.m2" ></p></td>
            <td width="58" valign="center" ><p align="center" >编号 </p></td>
            <td width="108" valign="center" ><p><input type="text" v-model="obj.m3"></p></td>
            <td width="95" valign="center" colspan="2" ><p >填土高度 </p></td>
            <td width="60" valign="center" ><p><input type="text" v-model="obj.m4"></p></td>
            <td width="93" valign="center" ><p align="center">施工时间 </p></td>
            <td width="110" valign="center" >          <div class="block">
              <el-date-picker v-model="obj.m5" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >序号 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" >项  目 </p></td>
            <td width="454" valign="center" colspan="5" ><p align="center" >检 查 记 录 </p></td>
            <td width="107" valign="top" colspan="2" ><p > </p></td>
            <td width="93" valign="top" ><p > </p></td>
            <td width="110" valign="top" ><p > </p></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >1 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" > 混凝土强度（MPa） </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m6"></p></td>
            <td width="107" valign="top" colspan="2" rowspan="11" >
              <p >外观检查：
                <textarea name="" cols="50" rows="25" v-model="obj.m17"></textarea>
              </p>
            </td>
            <td width="93" valign="top" rowspan="11" >
              <p >自检意见：
                <textarea name="" cols="50" rows="23" v-model="obj.m18"></textarea> </p>
              <p> 质检人员：<input type="text" v-model="obj.m19" class="input-50 height-30 t-left"></p>
              <div class="block display-lnl">
                <span class="demonstration">日期：</span>
                <el-date-picker
                  class="input-50"
                  size="mini"
                  v-model="obj.m20" type="date"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>

            </td>
            <td width="110" valign="top" rowspan="11" >
              <p >检查意见：
                <textarea name="" cols="50" rows="23" v-model="nameList1[0].auditOpinion" disabled ></textarea>
                <br/>监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50 height-30 t-left">
                <br/>日期：<input type="text" v-model="nameList1[0].auditTime" disabled class="input-50 height-30 t-left">
              </p>
            </td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >2 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" > 内  径（mm） </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m7"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >3 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" >  管节长度（mm） </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m8"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >4 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" >顺 直 度 </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m9"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >5 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" >管壁厚度（mm） </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m10"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" rowspan="2" ><p align="center" >6 </p></td>
            <td width="97" valign="center" colspan="2" rowspan="2" ><p align="center" >纵向筋间距 <br />
              （mm） </p></td>
            <td width="48" valign="center" ><p align="center" >内 </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m11"></p></td>
          </tr>
          <tr >
            <td width="48" valign="center" ><p align="center" >外 </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m12"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" rowspan="2" ><p align="center" >7 </p></td>
            <td width="97" valign="center" colspan="2" rowspan="2" ><p align="center" >箍筋间距 <br />
              （mm） </p></td>
            <td width="48" valign="center" ><p align="center" >内 </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m13"></p></td>
          </tr>
          <tr >
            <td width="48" valign="center" ><p align="center" >外 </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m14"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >8 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" >钢筋骨架尺寸（mm） <br />
              （纵筋长） </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m15"></p></td>
          </tr>
          <tr >
            <td width="52" valign="center" ><p align="center" >9 </p></td>
            <td width="145" valign="center" colspan="3" ><p align="center" >保护层厚度（mm） </p></td>
            <td width="454" valign="center" colspan="5" ><p><input type="text" v-model="obj.m16"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-1125">施工单位技术负责人：<input type="text" v-model="obj.m24" class="input-140">记录：<input type="text" v-model="obj.m25" class="input-140">复核：<input type="text" v-model="obj.m26" class="input-140">监理员：<input type="text" v-model="nameList2[1].fullName" disabled class="input-140">日期：
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
        name: "D-62",
      data(){
        return{
          obj:{},
          isAdd:true,
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
          auditTypeIdArr:[26,39],
          nameList:[],
          nameList1:[{},{}],
          nameList2:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id:''
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
                if(item[1].auditTypeId==26){
                  this.nameList1 = item;
                }
                if (item[1].auditTypeId == 39) {
                  this.nameList2 = item;
                  this.m15DataArr = splitDate(this.nameList2[0].auditTime, '-');
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
          this.axios.get('/HiQuality/d62/findById',{
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
          this.axios.post('/HiQuality/d62/save',this.$qs.stringify({
            BBtD62M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d62/update',this.$qs.stringify({
            BBtD62M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d62/deleteById',{
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
.height-30{
  box-sizing: border-box;
  padding-left: 10px;
  height: 30px;
}
</style>
