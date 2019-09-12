<template>
    <div class="A35 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-559">A-35</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>工程索赔申请单</h3>
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
        <table border="1" cellspacing="0" >
          <tr >
            <td width="561" colspan="2" ><p>索赔项目：</p>
              <p><textarea name="" cols="30" rows="5" v-model="obj.m1"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="561" colspan="2" ><p>申请依据： </p>
              <p><textarea name="" cols="30" rows="9" v-model="obj.m2"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="561" colspan="2" ><p >证明文件： </p>
              <p><textarea name="" cols="30" rows="5" v-model="obj.m3"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="561" colspan="2" ><p >索赔金额和工期： </p>
              <table border="1" cellspacing="0" style="width: 300px;">
                <tr >
                  <td width="120" valign="center" ><p >金额（元） </p></td>
                  <td width="96" valign="center" ><p >&nbsp;</p></td>
                  <td width="108" valign="center" ><p >工期（天） </p></td>
                </tr>
                <tr class="public-tabel">
                  <td width="120" valign="center" ><p><input type="text" v-model="obj.m4"></p></td>
                  <td width="96" valign="center" ><p >&nbsp;</p></td>
                  <td width="108" valign="center" ><p><input type="text" v-model="obj.m5"></p></td>
                </tr>
              </table></td>
          </tr>
          <tr >
            <td width="561" colspan="2" >
              <div class="dateDiv">承包人递交日期：
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m6" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
              <p >&nbsp;</p><br><br>
              <div class="dateDiv">签字：<input type="text" v-model="obj.m7">
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m8" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
             </td>
          </tr>
          <tr >
            <td width="561" colspan="2" >
              <p >驻地办审核意见：
                <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
              <p >签字：<input type="text" class="input-140" v-model="nameList1[0].fullName" disabled> 日期：<input type="text" class="input-80" v-model="nameList1[0].auditTime" disabled></p>
            </td>
          </tr>
          <tr >
            <td width="276" >
              <p >总监理工程师办公室意见：
                <textarea name="" cols="30" rows="4" v-model="nameList2[0].auditOpinion" disabled></textarea>
              </p>
              <p >签字：<input type="text" class="input-140" v-model="nameList2[0].fullName" disabled> 日期：<input type="text" class="input-80" v-model="nameList2[0].auditTime" disabled></p>
            </td>
            <td width="285" >
              <p >项目公司意见：
                <textarea name="" cols="30" rows="4" v-model="nameList3[0].auditOpinion" disabled></textarea>
              </p>
              <p >签字：<input type="text" class="input-140" v-model="nameList3[0].fullName" disabled> 日期：<input type="text" class="input-80" v-model="nameList3[0].auditTime" disabled></p>
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
    name: "A-35",
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
        auditTypeIdArr:[25,21,1],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        id: '3'
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
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 25) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 21) {
                this.nameList2 = item;
              }
              if (item[1].auditTypeId == 13) {
                this.nameList3 = item;
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
        this.axios.get('/HiQuality/A35/findA35ById', {
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
        this.axios.post("/HiQuality/A35/saveA35", this.$qs.stringify({
          a35:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A35/updateA35', this.$qs.stringify({
          a35:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A35/deleteA35', {
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
