<template>
    <div class="A27 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-27</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>重大（专项）施工技术方案申报批复单</h3>
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
        <table border="1" cellspacing="0" >
          <tr >
            <td width="561" valign="top" colspan="3" ><br>
              <p>致（驻地办驻地监理工程师）：<input type="text" v-model="obj.m1"></p><br>
              <p style="text-indent: 50px;" class="p-lineheight">现报上 <input type="text" v-model="obj.m2">工程的施工技术、工艺方案，方案详细说明和图表（见附件），请予审查和批准。 <br><br>
                附件：施工技术、工艺方案说明及图表。 </p><br><br><br><br><br>
              <div align="right" class="dateDiv">承包人：<input type="text" v-model="obj.m3" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m4" type="date"
                                  placeholder="年  月  日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
          </tr>
          <tr >
            <td width="99" valign="top" ><p >&nbsp;</p>
              <p >[ ]审定 </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p >[ ]转报 </p>
              <p >&nbsp;</p></td>
            <td width="461" valign="top" colspan="2" ><br/>
              <div >
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意 附言：
                </p><br/><br>
                <p>[ ] 修改后再报</p><br/><br>
                <p >
                  <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意
                </p><br/><br>
              </div>
              <p >&nbsp;</p>
              <p >&nbsp;</p><br>
              <p class="t-right mar-right-30">专业监理工程师：<input type="text" class="input-120" v-model="nameList1[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr1[0]" disabled>年
                <input type="text"  class="date-input" v-model="listDateArr1[1]" disabled>月
                <input type="text" class="date-input" v-model="listDateArr1[2]" disabled>日
              </p><br/>
            </td>
          </tr>
          <tr >
            <td width="99" valign="top" ><p >&nbsp;</p>
              <p >[ ]审定 </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p >[ ]转报 </p>
              <p >&nbsp;</p>
            </td>
            <td width="461" valign="top" colspan="2" ><br>
              <div >
              <p>
                <input type="text" value="[√]" disabled v-if="nameList2[0].auditStatus===2" class="input-25">
                <input type="text" value="[ ]" disabled v-else class="input-25">同意 附言：
              </p><br/><br>
              <p>[ ] 修改后再报</p><br/><br>
              <p >
                <input type="text" value="[√]" disabled v-if="nameList2[0].auditStatus===1" class="input-25">
                <input type="text" value="[ ]" disabled v-else class="input-25">不同意
              </p><br/><br>
            </div>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p class="t-right mar-right-30">驻地办驻地监理工程师：<input type="text" class="input-120" v-model="nameList2[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>年
                <input type="text"  class="date-input" v-model="listDateArr2[1]" disabled>月
                <input type="text" class="date-input" v-model="listDateArr2[2]" disabled>日
              </p><br/>
            </td>
          </tr>
          <tr >
            <td width="315" valign="top" colspan="2" >
              <p >总监办意见：
                <textarea name="" cols="30" rows="4" v-model="nameList3[0].auditOpinion" disabled></textarea>
              </p>
              <p >签 名：<input type="text" class="input-105" v-model="nameList3[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr3[0]" disabled>年
                <input type="text"  class="input-20" v-model="listDateArr3[1]" disabled>月
                <input type="text" class="input-20" v-model="listDateArr3[2]" disabled>日
              </p>
            </td>
            <td width="315" valign="top" >
              <p >项目公司意见：
                <textarea name="" cols="30" rows="4" v-model="nameList4[0].auditOpinion" disabled></textarea>
              </p>
              <p >签 名：<input type="text" class="input-120" v-model="nameList4[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr4[0]" disabled>年
                <input type="text"  class="input-20" v-model="listDateArr4[1]" disabled>月
                <input type="text" class="input-20" v-model="listDateArr4[2]" disabled>日
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
  import {splitDate,joinDate} from '../../utils/utils'
  export default {
    name: "A-27",
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
        auditTypeIdArr:[26,25,21,1],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        listDateArr1:[],
        listDateArr2:[],
        listDateArr3:[],
        listDateArr4:[],
        id: '3',

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
          this.nameList.forEach((item)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==26){
                this.nameList1 = item;
                this.listDateArr1 = splitDate(this.nameList1[0].auditTime,'-')
              }
              if(item[1].auditTypeId==25){
                this.nameList2 = item;
                this.listDateArr2 = splitDate(this.nameList2[0].auditTime,'-')
              }
              if(item[1].auditTypeId==21){
                this.nameList3 = item;
                this.listDateArr3 = splitDate(this.nameList3[0].auditTime,'-')
              }
              if(item[1].auditTypeId==1){
                this.nameList4 = item;
                this.listDateArr4 = splitDate(this.nameList4[0].auditTime,'-')
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
        this.axios.get('/HiQuality/A27/findA27ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.m4DateArr = splitDate(this.obj.m4,'-');
            this.isAdd = false;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A27/saveA27",this.$qs.stringify({
          a27:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A27/updateA27',this.$qs.stringify({
          a27:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A27/deleteA27', {
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
