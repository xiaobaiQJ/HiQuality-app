<template>
  <div class="A03 text-center main-a lengthways-a">
    <p class="top-name-p width-623">A-03</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>工程分项开工申请批复单</h3>
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
      <table border="1" cellspacing="0" class="table-padding5px">
        <tr class="public-tabel">
          <td width="566" valign="top">
            <p align="left">开工项目：<input type="text" v-model="obj.m1"></p>
          </td>
        </tr>
        <tr class="public-tabel">
          <td width="566" valign="top"><p align="left">桩 号：<input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr class="public-tabel">
          <td width="566" valign="top">
            <div class="dateDiv t-left input-600">建议开工日期：
              <div class="block height-30 t-left input-400 display-lnl">
                <el-date-picker class="input-400"
                                size="mini"
                                v-model="obj.m3" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
          </td>
        </tr>
        <tr class="public-tabel">
          <td width="566" valign="top">
            <div class="dateDiv t-left input-600">计划完工日期：
              <div class="block height-30 t-left input-500 display-lnl">
                <el-date-picker class="input-400"
                                size="mini"
                                v-model="obj.m4" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
          </td>
        </tr>
        <tr class="public-tabel">
          <td width="566" valign="top">
            <p align="left">此项工程负责人：<input type="text" v-model="obj.m5"></p>
          </td>
        </tr>
        <tr>
          <td width="566" valign="top"><p>附件：</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p><br/><br/><br/><br/><br/>
            <div align="right" class="dateDiv">承包人：<input type="text" v-model="obj.m6" class="input-120">
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">日期：</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m7" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="566" valign="top">
            <p>专业监理工程师意见：</p><textarea name="" cols="30" rows="15" v-model="nameList1[0].auditOpinion" disabled></textarea>
          </td>
        </tr>
        <tr>
          <td width="566" valign="top">
            <p align="left">驻地办意见：</p><textarea  cols="30" rows="15" v-model="nameList2[0].auditOpinion" disabled></textarea>
            <p align="right">驻地监理工程师：<input type="text" class="input-140" v-model="nameList2[0].fullName" disabled>日期：<input type="text" class="input-80" v-model="nameList2[0].auditTime" disabled></p>
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

  export default {
    name: "A-03",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {},
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
        headerInfo:{}, //表头信息
        auditTypeIdArr:[26,25],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        id: '1'
      }
    },
    created(){
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
              }
              if(item[1].auditTypeId==25){
                this.nameList2 = item;
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
        this.axios.get('/HiQuality/A03/findA03ById', {
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
        this.axios.post("/HiQuality/A03/saveA03", this.$qs.stringify({
          a03:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A03/updateA03', this.$qs.stringify({
          a03:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A03/deleteA03', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
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
