<template>
    <div class="A42 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-559">A-42</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>返还保留金申请书</h3>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr >
            <td width="552" ><p >&nbsp;</p>
              <p >致<u>监理工程师</u>（全称） </p><br/>
              <div style="text-indent: 40px;" class="p-lineheight">承包人<input type="text" v-model="obj.m1" class="title-input">承包的XX&#8212;XX公路K<input type="text" v-model="obj.m2" class="title-input input-width">+<input type="text" v-model="obj.m3" class="title-input input-width">--K<input type="text" v-model="obj.m4" class="title-input input-width">+的第<input type="text" v-model="obj.m5" class="title-input input-width">合同段，自
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m6" type="date"
                                  placeholder="年  月  日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
                <div class="display-lnl mar-left-38px">起开工至</div>
              <div class="block display-lnl height-25 input-160">
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m7" type="date"
                                placeholder="年  月  日"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
                <div class="display-lnl mar-left-38px">交工，现已完成合内的全部工程及履行缺陷修复责任，（或提交了全部竣工资料）根据合同第
                  <input type="text" v-model="obj.m8" class="input-width">条第<input type="text" v-model="obj.m9" class="input-width"> 款本期申请返还已扣保留金金额￥<input type="text" v-model="obj.m10" class="title-input">元（大写人民币<input type="text" v-model="obj.m11" class="title-input">元）的 <input type="text" v-model="obj.m12" class="title-input input-width">% 即 ￥<input type="text" v-model="obj.m13" class="title-input">元（大写人民币<input type="text" v-model="obj.m14" class="title-input">元），累计已返还￥<input type="text" v-model="obj.m15" class="title-input">元（大写人民币<input type="text" v-model="obj.m16" class="title-input">元）<u> </u><br></div>
              </div><br>
              <p class="mar-left-25">请予支付</p><br><br><br><br><br><br><br>
              <p align="right"> 项目经理：（签字）<input type="text" v-model="obj.m17" class="input-80"> </p><br/>
              <div class="block height-25 t-right" style="margin-right: 60px;">
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m18" type="date"
                                placeholder="年    月    日"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div><br>
            </td>
          </tr>
          <tr >
            <td width="552" ><p >&nbsp;</p>
              <p >监理工程师意见 </p><br>
              <div class="mar-left-30px">
                <p>1、根据合同第 <input type="text" v-model="obj.m19" class="input-width">条第 <input type="text" v-model="obj.m20" class="input-width"> 款要求，本合同段已扣保留金金额￥<input type="text" v-model="obj.m21" class="title-input">元（大写人民币<input type="text" v-model="obj.m22" class="title-input">元） </p><br>

                <p>2、承包人已完成合同内的全部工程和履行缺陷修复责任，（或提交了全部竣工资料） </p><br>
                <p>3、同意本期返还保留金金额￥<input type="text" v-model="obj.m23" class="title-input">元（大写人民币元）。累计已返还￥<input type="text" v-model="obj.m24" class="title-input">元 <br>
                  （大写人民币<input type="text" v-model="obj.m25" class="title-input">元）。 </p><br>

                <p>4、&#8230;&#8230; </p><br><br>
              </div><br><br><br><br>

              <p align="right"> 监理工程师：（签字）<input type="text" v-model="nameList1[1].fullName" class="input-80"></p><br>
               <p style="padding-right: 100px;text-align: right;">
                 <input type="text" class="date-input" v-model="listDateArr1[0]" disabled>年
                 <input type="text"  class="input-20" v-model="listDateArr1[1]" disabled>月
                 <input type="text" class="input-20" v-model="listDateArr1[2]" disabled>日
              </p><br>
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
    name: "A-42",
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
        id: '3',
        auditTypeIdArr:[26],
        nameList:[],
        nameList1:[{},{}],
        listDateArr1:[],

      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
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
                this.listDateArr1 = splitDate(this.nameList1[0].auditTime,'-')
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
        this.axios.get('/HiQuality/A42/findA42ById', {
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
        this.axios.post("/HiQuality/A42/saveA42",this.$qs.stringify({
          a42:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A42/updateA42', this.$qs.stringify({
          a42:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A42/deleteA42', {
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
.input-width{
  width: 30px;
}
</style>
