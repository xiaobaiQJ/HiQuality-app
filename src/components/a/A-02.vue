<template>
  <div class="A02 text-center main-a lengthways-a">
    <p class="top-name-p width-623">A-02</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>合同段工程开工申请批复单</h3>
    <div class="text-left width-623">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-623">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0"  class="table-padding5px">
        <tr>
          <td width="573" valign="top" colspan="2"><br>
            <p style="text-indent: 20px;" class="p-lineheight">致（驻地办驻地监理工程师）：<input type="text" v-model="nameList2[1].fullName" disabled class="title-input"></p>
            <p style="text-indent: 30px;" class="p-lineheight">根据合同要求，我们已经做好工程的开工前的一切准备工作，我们要求该项工作正式开工，请予批准。 </p>
            <div class="dateDiv mar-left-30px p-lineheight">
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">计划开工日期：</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m2" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">计划完工日期：</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m3" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
            <p style="margin-left: 20px;" class="p-lineheight">附件：1.承包人施工管理机构，劳务、机械设备、材料的进场情况，临时设施<br/><span style="margin-left: 50px;">的修建等说明 </span><br>
              <span class="mar-left-38px">2.总体施工组织设计报审表； </span><br>
              <span class="mar-left-38px">3.施工技术方案报审表； </span><br>
              <span class="mar-left-38px">4.施工放样报验单； </span><br>
              <span class="mar-left-38px">5.主要进场材料、设备报验单； </span><br>
              <span class="mar-left-38px">6.总体工程进度计划。</span><p><br>
            <div class="dateDiv t-right">项目经理：<input type="text" class="input-120" v-model="obj.m4">
              <div class="block display-lnl height-25 input-175">
                <el-date-picker class="input-160"
                  v-model="obj.m5" type="date"
                  format="yyyy年MM月dd日"
                  value-format="yyyy-MM-dd"
                  placeholder="年   月   日">
                </el-date-picker>
              </div>
            </div><br/>
          </td>
        </tr>
        <tr>
          <td width="573" valign="top" colspan="2">
            <p>专业监理工程师：<textarea name="" cols="30" rows="12" v-model="nameList1[0].auditOpinion" disabled></textarea></p>
            <p class="t-left float-left">签字：<input type="text" v-model="nameList1[1].fullName" disabled class="height-25"></p>
            <p class="t-right float-right mar-right-30"><input type="text" class="date-input height-25" v-model="nameListDataArr1[0]" disabled>年<input type="text" class="date-input height-25" v-model="nameListDataArr1[1]" disabled>月<input type="text" class="date-input height-25" v-model="nameListDataArr1[2]" disabled>日</p>
          </td>
        </tr>
        <tr>
          <td width="573" valign="top" colspan="2">
            <p>驻地监理工程师办公室：<textarea name="" cols="30" rows="12" v-model="nameList2[0].auditOpinion" disabled></textarea></p>
            <p class="t-left float-left">签字：<input type="text" v-model="nameList2[1].fullName" disabled class="height-25"></p>
            <p class="t-right float-right mar-right-30"><input type="text" class="date-input height-25" v-model="nameListDataArr2[0]" disabled>年<input type="text" class="date-input height-25" v-model="nameListDataArr2[1]" disabled>月<input type="text" class="date-input height-25" v-model="nameListDataArr2[2]" disabled>日</p>
          </td>
        </tr>
        <tr>
          <td width="276" valign="top">
            <p>总监理工程师办公室：<textarea name="" cols="30" rows="4" v-model="nameList3[0].auditOpinion" disabled></textarea></p>
            <p>签字：<input type="text" v-model="nameList3[1].fullName" disabled class="input-80"><input type="text" class="date-input height-25" v-model="nameListDataArr3[0]" disabled>年<input type="text" class="date-input height-25" v-model="nameListDataArr3[1]" disabled>月<input type="text" class="date-input height-25" v-model="nameListDataArr3[2]" disabled>日
            </p>
          </td>
          <td width="297" valign="top">
            <p>项目公司意见： <textarea name="" id="" cols="30" rows="4" v-model="nameList4[0].auditOpinion" disabled></textarea></p>
            <p>签字：<input type="text" v-model="nameList4[1].fullName" disabled class="input-80"><input type="text" class="date-input height-25" v-model="nameListDataArr4[0]" disabled>年<input type="text" class="date-input height-25" v-model="nameListDataArr4[1]" disabled>月<input type="text" class="date-input height-25" v-model="nameListDataArr4[2]" disabled>日
            </p>
          </td>
        </tr>
      </table>
    </div>
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
    name: "A-02",
    data() {
      return {
        isAdd: true,
        //rec
        rec:{
          recNo:'',
          tableId:4,
          contractId:0,
          constDate:'',
          testDate:'',
          projPartsId:'1',
          curStatus:0,
          operUserId:1
        },
        //主表
        obj: {},
        headerInfo:{}, //表头信息
        auditTypeIdArr:[26,25,21,13],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameListDataArr1:[],
        nameListDataArr2:[],
        nameListDataArr3:[],
        nameListDataArr4:[],
        id: 0

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
      this.$publicFun.getRecInfo()

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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==26){
                this.nameList1 = item;
                this.nameListDataArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==25){
                this.nameList2 = item;
                this.nameListDataArr2 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if(item[1].auditTypeId==21){
                this.nameList3 = item;
                this.nameListDataArr3 = splitDate(this.nameList3[0].auditTime,'-');
              }
              if(item[1].auditTypeId==13){
                this.nameList4 = item;
                this.nameListDataArr4 = splitDate(this.nameList4[0].auditTime,'-');
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
        this.axios.get('/HiQuality/A02/findA02ById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId:this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;

          }
        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A02/saveA02",this.$qs.stringify({
          a02:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
        .then(res => {
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
        this.axios.post('/HiQuality/A02/updateA02', this.$qs.stringify({
          a02:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/A02/deleteA02', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.obj = {}
          }
        })
      }
    }

  }
</script>

<style scoped>

</style>
