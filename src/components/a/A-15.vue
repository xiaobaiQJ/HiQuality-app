<template>
    <div class="A15 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-15</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h4>黔西南州兴义环城高速公路</h4>
      <h3>工 地 会 议 纪 要</h3>
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
            <td width="215" valign="top" colspan="2" ><br>
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">时间：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m1" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div><br>
              <p class="p-lineheight-20">地点：<input type="text" v-model="obj.m2" class="input-200"></p>
              <p class="p-lineheight-20">主持人：<input type="text" v-model="obj.m3"></p>
            </td>
            <td width="56" valign="center" ><p align="center" >纪要<br/>内容<br/>提要 </p></td>
            <td width="287" valign="top" colspan="2" >
              <textarea name="" cols="30" rows="5" class="height-textarea" v-model="obj.m4"></textarea>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="559" valign="center" colspan="5" ><p >参 加 人 员 </p></td>
          </tr>
          <tr class="public-tabel">
            <td width="177" valign="center" ><p align="center" >项目公司 </p></td>
            <td width="189" valign="center" colspan="3" ><p align="center" >设计单位 </p></td>
            <td width="193" valign="center" ><p align="center" >监理单位 </p></td>
          </tr>
          <tr class="public-tabel">
            <td width="177" valign="center">
              <p align="center"><textarea name="" cols="30" rows="8"v-model="obj.m5"></textarea></p>
            </td>
            <td width="189" valign="center" colspan="3" >
              <p align="center"><textarea name="" cols="30" rows="8"v-model="obj.m6"></textarea></p>
            </td>
            <td width="193" valign="center" ><p align="center" >&nbsp;</p>
              <p align="center"><textarea name="" cols="30" rows="8"v-model="obj.m7"></textarea></p>
            </td>
          </tr>
          <tr class="public-tabel">
            <td width="177" valign="center" ><p align="center" >施工单位 </p></td>
            <td width="189" valign="center" colspan="3" ><p align="center" >政府部门 </p></td>
            <td width="193" valign="center" ><p align="center" >其他 </p></td>
          </tr>
          <tr class="public-tabel">
            <td width="177" valign="top" >
              <p align="center"><textarea name="" cols="30" rows="8"v-model="obj.m8"></textarea></p>
            </td>
            <td width="189" valign="top" colspan="3" >
              <p align="center"><textarea name="" cols="30" rows="8"v-model="obj.m9"></textarea></p>
            </td>
            <td width="193" valign="top" >
              <p align="center"><textarea name="" cols="30" rows="8"v-model="obj.m10"></textarea></p>
            </td>
          </tr>
          <tr class="tr-height">
            <td width="559" valign="center" colspan="5" ><p >记录整理人：<input type="text" v-model="obj.m11">
              本次会议纪要共<input type="text" v-model="obj.m12" class="date-input">页 </p></td>
          </tr>
          <tr >
            <td width="559" valign="top" colspan="5" >
              <p >抄送： </p>
              <textarea name="" cols="30" rows="14" v-model="obj.m13"></textarea>
            </td>
          </tr>
          <tr class="tr-height">
            <td width="559" valign="center" colspan="5" >
              <p >驻地办驻地监理工程师：<input type="text" class="input-300" v-model="nameList1[1].fullName" disabled>
              日期：<input type="text" class="input-120" v-model="nameList1[0].auditTime" disabled> </p>
            </td>
          </tr>
          <tr class="tr-height">
            <td width="559" valign="center" colspan="5" >
              <div class="dateDiv">合同段项目经理：<input type="text" v-model="obj.m14" class="input-300">
                <div class="block display-lnl height-25 input-140 mar-left-30px">
                  <span class="demonstration">日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m15" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
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
    name: "A-15",
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
        auditTypeIdArr:[25],
        nameList:[],
        nameList1:[{},{}],
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
              if(item[1].auditTypeId==25){
                this.nameList1 = item;
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
        this.axios.get('/HiQuality/A15/findA15ById', {
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
        this.axios.post("/HiQuality/A15/saveA15", this.$qs.stringify({
          a15:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A15/updateA15', this.$qs.stringify({
          a15:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A15/deleteA15', {
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
.tr-height{
  height: 40px;
}
</style>
