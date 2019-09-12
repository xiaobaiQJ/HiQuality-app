<template>
    <div class="A38 text-center main-a lengthways-a ad-textarea table-padding5px">
      <p class="top-name-p width-559">A-38</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>工程索赔时间/金额审批表</h3>
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
            <td width="567"colspan="2" ><p>索赔项目：</p>
              <textarea name="" cols="30" rows="20" v-model="obj.m1"></textarea>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="281" valign="center" >
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">上报日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m2" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
            </td>
            <td width="285" valign="center" >
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">收受日期：</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m3" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="281" valign="center" >
              <p class="t-left">申报延期天数：<input type="text" v-model="obj.m4" class="input-140"></p>
            </td>
            <td width="285" valign="center" >
              <p class="t-left">申请索赔金额：<input type="text" v-model="obj.m5" class="input-140"></p>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="281" valign="center" >
              <p class="t-left">批准延期天数：<input type="text" v-model="obj.m6" class="input-140"></p>
            </td>
            <td width="285" valign="center" >
              <p class="t-left">申请索赔金额：<input type="text" v-model="obj.m7" class="input-140"></p>
            </td>
          </tr>
          <tr >
            <td width="567"colspan="2" ><p >索赔金额和延期累计： </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p style="margin-left: 7%;"><span>截止目前索赔累计</span><span style="margin-left: 21%;">此项索赔</span><span style="margin-left: 26%;">所有索赔累计</span> </p>
              <table border="1" cellspacing="0" style="width: 90%;" class="small-table public-tabel">
                <tr >
                  <td width="127" valign="center" ><p>
                    金额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天数 </p></td>
                  <td width="32"rowspan="2" ><p >&nbsp;</p>
                    <p >+ </p></td>
                  <td width="119" valign="center" ><p align="center" >金额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天数 </p></td>
                  <td width="32"rowspan="2" ><p >&nbsp;</p>
                    <p >= </p></td>
                  <td width="127" valign="center" ><p align="center" >金额&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天数 </p></td>
                </tr>
                <tr >
                  <td width="127">
                    <p>
                      <input type="text" v-model="obj.m8" class="price-width">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" v-model="obj.m9" class="price-width">
                    </p>
                  </td>
                  <td width="127">
                    <p>
                      <input type="text" v-model="obj.m10" class="price-width">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" v-model="obj.m11" class="price-width">
                    </p>
                  </td>
                  <td width="127">
                    <p>
                      <input type="text" v-model="obj.m12" class="price-width">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input type="text" v-model="obj.m13" class="price-width">
                    </p>
                  </td>
                </tr>
              </table><br></td>
          </tr>
          <tr >
            <td width="567"colspan="2" >
              <p >监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled></p>
              <p >&nbsp;</p><br><br>
            </td>
          </tr>
          <tr >
            <td width="567"colspan="2" ><p >项目公司：<input type="text" v-model="nameList2[1].fullName" disabled></p>
              <p >&nbsp;</p><br><br>
            </td>
          </tr>
          <tr >
            <td width="567"colspan="2" >
              <p >附件： </p>
              <p>&nbsp;</p><br><br>
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
    name: "A-38",
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
        auditTypeIdArr:[26,1],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==26){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==13){
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
        this.axios.get('/HiQuality/A38/findA38ById', {
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
        this.axios.post("/HiQuality/A38/saveA38", this.$qs.stringify({
          a38:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A38/updateA38', this.$qs.stringify({
          a38:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A38/deleteA38', {
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
.price-width{
  width: 40px;
  height: 30px;
}
  .small-table td{
    padding: 0!important;
  }
</style>
