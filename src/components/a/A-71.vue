<template>
    <div class="A71 text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-559">A-71</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>《整改通知书》回复函</h3>
      <div class="text-left width-559">
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr >
            <td width="595" valign="top" ><br />
              致（项目公司\驻地办）：<input type="text" v-model="obj.m1"><br /><br />
              根据下发的<input type="text" v-model="obj.m2" class="width-30">号整改通知书&#8230;&#8230;
              <p >&nbsp;</p><br /><br /><br /><br /><br />
              <p >附件：相关照片 </p>
              <div class="t-right">现场负责人：<input type="text" v-model="obj.m3">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140 t-right"
                                  size="mini"
                                  v-model="obj.m4" type="date"
                                  placeholder="年       月       日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
          </tr>
          <tr >
            <td width="595" valign="top" >
              <p >施工单位项目总工意见：
                <textarea name="" cols="30" rows="7" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
              <p align="right">
                签字：<input type="text" class="height-25" v-model="nameList1[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr1[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr1[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr1[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="595" valign="top" >
              <p >驻地驻地办意见：
                <textarea name="" cols="30" rows="7" v-model="nameList2[0].auditOpinion" disabled></textarea>
              </p>
              <p align="right">
                签字：<input type="text" class="height-25 " v-model="nameList2[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr2[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr2[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr2[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="595" valign="top" >
              <p >总监办意见：
                <textarea name="" cols="30" rows="7" v-model="nameList3[0].auditOpinion" disabled></textarea>
              </p>
              <p align="right">
                签字：<input type="text" class="height-25 " v-model="nameList3[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr3[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr3[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr3[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="595" valign="top" >
              <p >项目公司意见：
                <textarea name="" cols="30" rows="7" v-model="nameList4[0].auditOpinion" disabled></textarea>
              </p>
              <p align="right">
                负责人：<input type="text" class="height-25 " v-model="nameList4[1].fullName" disabled>
                <input type="text" v-model="nameListDataArr4[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr4[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr4[2]" disabled class="date-input">日
              </p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-559">注：如果驻地办下发的整改通知减少总监办、项目公司意见两行；总监办下发的整改通知书，回复时减少一行项目公司意见 </p>
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
    name: "A-71",
    data(){
      return{
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
        //主表对象
        obj:{

        },
        id:'',
        headerInfo:{}, //表头信息
        auditTypeIdArr:[1,25,21,10],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameList4:[{},{}],
        nameListDataArr1:[],
        nameListDataArr2:[],
        nameListDataArr3:[],
        nameListDataArr4:[],

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
            if(item[1].auditTypeId==1){
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
            if(item[1].auditTypeId==10){
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
      getData() {
        this.axios.get('/HiQuality/A71/findA71ById', {
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
        this.axios.post("/HiQuality/A71/saveA71", this.$qs.stringify({
          a71:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A71/updateA71', this.$qs.stringify({
          a71:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口");
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
        this.axios.get('/HiQuality/A71/deleteA71', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
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
