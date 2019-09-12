<template>
    <div class="Ab03 text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-608">A-补03 </p>
      <p>贵州省高速公路建设项目 </p>
      <p> 黔西南州兴义环城高速公路 </p>
      <h3>首件工程开工批复单</h3>
      <div class="text-left">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="0" cellspacing="0" >
          <tr >
            <td width="608" valign="top" colspan="3" ><br/><br/>
             <p> 致：驻地监理工程师   <input type="text" v-model="obj.m1" class="title-input input-175">:  </p><br/><br/>
              <p style="text-indent: 30px;">根据合同文件要求，本合同段已做好<input type="text" v-model="obj.m2" class="title-input input-80">开工前的一切准备工作，特申请正式开工，请予批准。 </p><br/><br/>
              <div class="dateDiv mar-left-30px">
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">计划开工日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m3" type="date"
                                  placeholder="2015年6月9日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
              <div class="dateDiv mar-left-30px">
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">计划完工日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m4" type="date"
                                  placeholder="2015年6月9日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
              <br/><br/><br/>
              <p >&#160;附件:首件工程开工报告 </p>
              <p >&nbsp;</p><br/><br/><br/><br/><br/><br/><br/>
              <div class="dateDiv mar-left-35">项目经理：<input type="text" v-model="obj.m5" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m6" type="date"
                                  placeholder=" 年    月    日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
          </tr>
          <tr >
            <td width="608" valign="top" colspan="3" >
              <p >专业监理工程师：
                <textarea name="" cols="30" rows="13" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
              <p class="t-right mar-right-15">
                签字：<input type="text" class="height-25 input-80" v-model="nameList1[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr1[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr1[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr1[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="225" valign="top" >
              <p >驻地监理工程师意见：
                <textarea name="" cols="30" rows="8" v-model="nameList2[0].auditOpinion" disabled></textarea>
              </p>
              <p class="t-right">
                签字: <input type="text" class="height-25 input-80" v-model="nameList2[1].fullName" disabled>
              </p>
              <p class="t-right"><input type="text" v-model="nameListDataArr2[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr2[1]" disabled class="input-20">月
                <input type="text" v-model="nameListDataArr2[2]" disabled class="input-20">日
              </p>
            </td>
            <td width="194" valign="top" >
              <p >总监意见：
                <textarea name="" cols="30" rows="8" v-model="nameList3[0].auditOpinion" disabled></textarea>
              </p>
              <p class="t-right">
                签字: <input type="text" class="height-25 input-80" v-model="nameList3[1].fullName" disabled>
              </p>
              <p class="t-right"><input type="text" v-model="nameListDataArr3[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr3[1]" disabled class="input-20">月
                <input type="text" v-model="nameListDataArr3[2]" disabled class="input-20">日
              </p>
            </td>
            <td width="189" valign="top" >
              <p >项目公司意见：
                <textarea name="" cols="30" rows="8" v-model="nameList4[0].auditOpinion" disabled></textarea>
              </p>
              <p class="t-right">
                签字: <input type="text" class="height-25 input-80" v-model="nameList4[1].fullName" disabled>
              </p>
              <p class="t-right"><input type="text" v-model="nameListDataArr4[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr4[1]" disabled class="input-20">月
                <input type="text" v-model="nameListDataArr4[2]" disabled class="input-20">日
              </p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-608">注：专业监理工程师包括试验与测量工程师，如无测量、试验专业监理工程师签署的工程项目，只由驻地专业监理签署即可；若总监办与业主办为同一人员，仅总监签字即可。 </p>
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
        name: "A-B03",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {

          },
          //rec
          rec:{
            recNo:'',
            tableId:1,
            contractId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          id: '',
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
          dateArr:[]
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
        this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
        //获取监理等流程人签字栏数据
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
        };
        this.$publicFun.getRecInfo()

      },
      computed: {
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
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
          this.axios.get('/HiQuality/A03B/findA03BById', {
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
          this.axios.post("/HiQuality/A03B/saveA03B", this.$qs.stringify({
            a03b:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A03B/updateA03B', this.$qs.stringify({
            a03b:JSON.stringify(this.obj)
          }))
            .then(res => {
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
          this.axios.get('/HiQuality/A03B/deleteA03B', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {};
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
