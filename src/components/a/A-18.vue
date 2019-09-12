<template>
    <div class="A18 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-18</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>复 工 申 请 单</h3>
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
        <table border="1" cellspacing="0">
          <tr >
            <td width="597"  ><p >&nbsp;</p>
              <p >致(驻地办驻地监理工程师)<input type="text" class="title-input" v-model="obj.m1">: </p>
              <p style="margin: 20px 0;">鉴于<input type="text" class="title-input width-input" v-model="obj.m2"> (工程名称)</p>
              <p style="margin-bottom: 20px;">工程的停工因素已经消除，特报申请批准复工。 </p>
              <p >附件：具备复工条件的说明情况。 </p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/><br/><br/><br/><br/><br/><br/><br/>
              <div align="right" class="dateDiv">承包人：<input type="text" v-model="obj.m3" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  placeholder="年  月  日"
                                  v-model="obj.m4" type="date"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
          </tr>
          <tr >
            <td width="597"  ><p >&nbsp;</p>
              <p >驻地办驻地监理工程师的意见： </p>
              <p style="margin: 20px 0;">
                <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===2" class="input-25">
                <input type="text" value="[ ]" disabled v-else class="input-25">具备复工条件，另发复工指令
              </p>
              <p ><input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===1" class="input-25">
                <input type="text" value="[]" disabled v-else class="input-25">不具备复工条件，满足上述意见提出的条件后再报。
              </p>
              <p style="margin: 20px 0;">其 他： </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p >&nbsp;</p><br/><br/><br/><br/><br/><br/>
              <p align="center" >监理工程师：<input type="text" class="input-120" v-model="nameList1[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr1[0]" disabled>年
                <input type="text" class="date-input" v-model="listDateArr1[1]" disabled>月
                <input type="text" class="date-input" v-model="listDateArr1[2]" disabled>日
              </p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-623">注：申请被批准后，根据监理工程师签发的复工指令执行。 </p>
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
  import {splitDate} from "../../utils/utils";
  export default {
    name: "A-18",
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
        headerInfo:{}, //表头信息
        auditTypeIdArr:[25],
        nameList:[],
        nameList1:[{},{}],
        listDateArr1:[],

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
              if(item[1].auditTypeId==25){
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
        this.axios.get('/HiQuality/A18/findA18ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
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
        this.axios.post("/HiQuality/A18/saveA18", this.$qs.stringify({
          a18:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A18/updateA18', this.$qs.stringify({
          a18:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A18/deleteA18', {
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
.width-input{
  width: 480px;
}
</style>
