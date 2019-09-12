<template>
  <div class="D-09 text-center main-d lengthways-a ad-textarea">
    <p class="top-name-p width-710">D-09</p>
  <p align="center">贵 州 省 高 速 公 路 建 设 项 目 <br/>
    黔西南州兴义环城高速公路<strong> </strong></p>
  <h3 align="center"><strong>挖孔桩（墙）基础验收记录</strong><strong> </strong></h3>
    <div class="text-left width-710">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-710">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel">
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">工程类别</p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m1"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">施工部位 </p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m2"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">基础地质 <br/>
          情况简述 </p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m3"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">基桩平面超 <br/>
          偏差的根数 </p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m4"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">基础平面 <br/>
          位置偏差 </p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m5"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">钢筋有否 <br/>
          检查记录 </p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m6"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">基础使用材料 <br/>
          是否合格 </p></td>
        <td width="444" valign="center" colspan="3"><p align="center">
          <textarea name="" cols="50" rows="2" v-model="obj.m7"></textarea>
        </p></td>
      </tr>
      <tr>
        <td width="156" valign="center" colspan="2"><p align="center">基底设计标高（m） </p></td>
        <td width="125" valign="center"><p align="center"><input type="text" v-model="obj.m8"></p></td>
        <td width="140" valign="center"><p align="center">基底实际标高（m） </p></td>
        <td width="178" valign="center"><p align="center"><input type="text" v-model="obj.m9"></p></td>
      </tr>
      <tr>
        <td width="49" valign="center"><p align="center">附 </p>
          <p align="center">件 </p>
          <p align="center">照 </p>
          <p align="center">片 </p></td>
        <td width="550" valign="center" colspan="4">
          <p align="center"><textarea name="" cols="50" rows="8" v-model="obj.m10"></textarea></p></td>
      </tr>
      <tr>
        <td width="49" valign="center"><p align="center">检<br/>查<br/>意<br/>见 </p></td>
        <td width="550" valign="center" colspan="4">
          <p align="center"><textarea name="" cols="50" rows="8" v-model="obj.m11"></textarea></p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-710">施工单位技术负责人：<input type="text" v-model="obj.m12" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">  
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
    name: "D-09",
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
        //日期参数
        dateArr: [],
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
        this.axios.get('/HiQuality/d9/findById',{
          params:{
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res=>{
          console.log("查询接口")
          console.log(res);
          if(res.data.status==200){
            this.obj = res.data.data;
            this.isAdd = false

          }
        })
      },
      //新增
      addData(){
        this.obj.m14 = joinDate(this.dateArr,'-');
        this.axios.post('/HiQuality/d9/save',this.$qs.stringify({
          BBtD9M:JSON.stringify(this.obj),
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
        this.obj.m14 = joinDate(this.dateArr,'-');
        this.axios.post('/HiQuality/d9/update',this.$qs.stringify({
          BBtD9M:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/d9/deleteById',{
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
