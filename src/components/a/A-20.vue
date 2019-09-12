<template>
    <div class="A20 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-20</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>工程质量事故处理报告单</h3>
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
            <td width="580"  >
              <P>工程名称：<input type="text" v-model="obj.m1" class="input-400 height-25"></P><br>
              <div class="dateDiv">时 间：
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m2" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div><br>
              <P>桩 号：<input type="text" v-model="obj.m3" class="input-400 height-25"></P><br/>
              <P class="t-left">原 因：</P>
              <textarea name="" cols="30" rows="3"v-model="obj.m4"></textarea>
            </td>
          </tr>
          <tr >
            <td width="580"  >
              <p >性质： </p>
              <p ><textarea name="" cols="30" rows="4" v-model="obj.m5"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="580"  >
              <p >造成损失： </p>
              <p ><textarea name="" cols="30" rows="4" v-model="obj.m6"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="580"  >
              <p >应急措施 ： </p>
              <p ><textarea name="" cols="30" rows="4" v-model="obj.m7"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="580"  >
              <p >处理意见： </p>
              <p ><textarea name="" cols="30" rows="4" v-model="obj.m8"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="580" valign="center" >
              <p >&nbsp;</p><br/>
              <div class="dateDiv t-right">承包人：<input type="text" v-model="obj.m9" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m10"
                                  type="date"
                                  placeholder="年  月  日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div><br/>
            </td>
          </tr>
          <tr >
            <td width="580" valign="center" >
              <p >驻地办意见：
                <textarea name="" cols="30" rows="2" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
              <p >&nbsp;</p>
              <p align="right" style="padding-right: 30px;">驻地监理工程师：<input type="text" class="input-120" v-model="nameList1[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr1[0]" disabled>年
                <input type="text"  class="date-input" v-model="listDateArr1[1]" disabled>月
                <input type="text" class="date-input" v-model="listDateArr1[2]" disabled>日
              </p>
            </td>
          </tr>
          <tr >
            <td width="580" valign="center" >
              <p >总监办意见：
              <textarea name="" cols="30" rows="2" v-model="nameList2[0].auditOpinion" disabled></textarea>
            </p>
              <p align="right" style="padding-right: 30px;">总监理工程师：<input type="text" class="input-120" v-model="nameList2[1].fullName" disabled>
                <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>年
                <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>月
                <input type="text" class="date-input" v-model="listDateArr2[0]" disabled>日 </p>
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
    name: "A-20",
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
        auditTypeIdArr:[26,21],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        listDateArr1:[],
        listDateArr2:[]
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
              if(item[1].auditTypeId==21){
                this.nameList2 = item;
                this.listDateArr2 = splitDate(this.nameList2[0].auditTime,'-')
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
        this.axios.get('/HiQuality/A20/findA20ById', {
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
        this.axios.post("/HiQuality/A20/saveA20", this.$qs.stringify({
          a20:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A20/updateA20', this.$qs.stringify({
          a20:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A20/deleteA20', {
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
