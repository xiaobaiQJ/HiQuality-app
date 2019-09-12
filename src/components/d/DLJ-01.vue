<template>
    <div class="DLJ-01 text-center main-d crosswise-a">
      <p class="top-name-p width-1086">DLJ-01</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>填土(石)路堤现场检查记录</strong></h3>
      <div class="text-left width-1086">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1086">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="0" cellspacing="0" class="public-tabel">
          <tr >
            <td width="178" valign="center" ><p align="cneter">桩号段落</p> </td>
            <td width="277" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m1"></p></td>
            <td width="277" valign="center" colspan="4" ><p >检验桩号 </p></td>
            <td width="250" valign="center" ><p ><input type="text" v-model="obj.m2"></p></td>
          </tr>
          <tr >
            <td width="178" valign="center" >
              <p >第<input type="text" v-model="obj.m3" class="width-30">层/层底标高 </p>
            </td>
            <td width="350" valign="center" colspan="5" ><p ><input type="text" v-model="obj.m4"></p></td>
            <td width="180" valign="center" >
              <p >第<input type="text" v-model="obj.m5" class="width-30">层/层面标高 </p>
            </td>
            <td width="274" valign="center" colspan="2" ><p ><input type="text" v-model="obj.m6"> </p></td>
          </tr>
          <tr >
            <td width="179" valign="center" colspan="2" ><p >该层填料厚度(cm) </p></td>
            <td width="98" valign="center" ><p >松铺厚 </p></td>
            <td width="252" valign="center" colspan="3" ><p ><input type="text" v-model="obj.m7"> </p></td>
            <td width="180" valign="center" ><p >碾压厚 </p></td>
            <td width="274" valign="center" colspan="2" ><p ><input type="text" v-model="obj.m8"> </p></td>
          </tr>
          <tr >
            <td width="178" valign="center" ><p >填料最大尺寸(cm) </p></td>
            <td width="805" valign="center" colspan="8" ><p ><input type="text" v-model="obj.m9"> </p></td>
          </tr>
          <tr >
            <td width="178" valign="center" ><p >压实设备类型 </p></td>
            <td width="805" valign="center" colspan="8" ><p ><input type="text" v-model="obj.m10"> </p></td>
          </tr>
          <tr >
            <td width="178" valign="center" ><p >碾压遍数 </p></td>
            <td width="805" valign="center" colspan="8" ><p ><input type="text" v-model="obj.m11"> </p></td>
          </tr>
          <tr >
            <td width="178" valign="center" ><p >碾压速度 </p></td>
            <td width="805" valign="center" colspan="8" ><p ><input type="text" v-model="obj.m12"> </p></td>
          </tr>
          <tr >
            <td width="178" valign="center" ><p >压实情况 </p></td>
            <td width="805"  colspan="8" >
              <p class="t-left">填土：填写压实度值，填石：填写沉降差<input type="text" v-model="obj.m13" class="height-25"></p>
            </td>
          </tr>
          <tr >
            <td width="178" valign="center" ><p >表面状况 </p></td>
            <td width="805" valign="center" colspan="8" ><p ><input type="text" v-model="obj.m14"> </p></td>
          </tr>
          <tr class="table-padding5px ad-textarea">
            <td width="492" valign="top" colspan="5" >
              <p class="t-left">检查意见： <br />
                <textarea name="" cols="30" rows="4" v-model="obj.m15"></textarea>
              </p>
            </td>
            <td width="492" valign="top" colspan="4" >
              <p class="t-left">监理意见： <br />
                <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-1086">现场技术负责人：<input type="text" v-model="obj.m17"> 记录：<input type="text" v-model="obj.m18">监理员：<input type="text" v-model="nameList1[1].fullName" disabled>日期：<input type="text" v-model="nameList1[0].auditTime" disabled>
      </p>
      <div class="btn">
        <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
        <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
        <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
        <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
      </div>
    </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "DLJ-01",
      data(){
        return{
          isAdd: true,
          obj:{},
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
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
                if (item[1].auditTypeId == 39) {
                  this.nameList1 = item;
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
          this.axios.get('/HiQuality/dlj1/findById',{
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
          this.axios.post('/HiQuality/dlj1/save', this.$qs.stringify({
            BBtDlj1M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/dlj1/update',this.$qs.stringify({
            BBtDlj1M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dlj1/deleteById',{
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
.width-30{
  width: 30px;
  height: 25px;
}
  .height-25{
    height: 25px;
    width: 200px;
  }
</style>
