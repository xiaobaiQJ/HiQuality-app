<template>
    <div class="A23 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-23</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>工程联系单</h3>
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
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-30">
          <tr >
            <td width="89" valign="center" ><p align="center" >约定单位</p></td>
            <td width="215" valign="center" colspan="3" >
              <p align="center"><input type="text" v-model="obj.m1"></p>
            </td>
            <td width="86" valign="center" colspan="2" ><p align="center" >被约单位 </p></td>
            <td width="173" valign="center" >
              <p align="center"><input type="text" v-model="obj.m2"></p>
            </td>
          </tr>
          <tr >
            <td width="89" valign="center" ><p align="center" >路线名称 </p></td>
            <td width="215" valign="center" colspan="3" >
              <p align="center"><input type="text" v-model="obj.m3"></p>
            </td>
            <td width="86" valign="center" colspan="2" ><p align="center" >工程项目 </p></td>
            <td width="173" valign="center" >
              <p align="center"><input type="text" v-model="obj.m4"></p>
            </td>
          </tr>
          <tr>
            <td width="89" valign="center" ><p align="center" >桩 号 </p></td>
            <td width="215" valign="center" colspan="3" >
              <p align="center"><input type="text" v-model="obj.m5"></p>
            </td>
            <td width="86" valign="center" colspan="2" ><p align="center" >日 期 </p></td>
            <td width="173" valign="center" >
              <div class="block">
                <el-date-picker v-model="obj.m6" type="date" size="mini"
                                placeholder="年  月  日"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </td>
          </tr>
          <tr >
            <td width="564" valign="top" colspan="7" >
              <p class="t-left">联系内容： </p>
              <textarea name="" cols="30" rows="5" v-model="obj.m7"></textarea>
            </td>
          </tr>
          <tr >
            <td width="109" valign="center" colspan="2" ><p align="center" >签 发 </p></td>
            <td width="141" valign="center" >
              <p align="center"><input type="text" v-model="obj.m8"></p>
            </td>
            <td width="117" valign="center" colspan="2" ><p align="center" >递交日期 </p></td>
            <td width="197" valign="center" colspan="2" >
              <div class="block">
                <el-date-picker v-model="obj.m9" type="date" size="mini"
                                placeholder="年  月  日"
                                format="yyyy年MM月dd日"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </td>
          </tr>
        </table>
        <table border="1" cellspacing="0" width="630" style="margin-top: 10px;">
          <tr >
            <td width="692" valign="top" >
              <div >被约定单位：<input type="text" class="input-200"> 签收人：<input type="text">日期： </div><br>
              <p>处理意见：</p><textarea  cols="30" rows="4"></textarea>
              <p class="t-right">签字：<input type="text"> 日期： 年 月 日 </p>
            </td>
          </tr>
          <tr >
            <td width="692" valign="top" >
              <div >被约定单位：<input type="text" class="input-200"> 签收人：<input type="text" v-model="nameList1[1].fullName" disabled>日期：<input type="text" v-model="nameList1[0].auditTime" disabled> </div><br>
              <p>处理意见：</p><textarea  cols="30" rows="4"></textarea>
              <p class="t-right">签字：<input type="text" v-model="nameList1[1].fullName" disabled> 日期：<input type="text" v-model="nameList1[0].auditTime" disabled> <!--年 月 日--> </p>
            </td>
          </tr>
          <tr >
            <td width="692" valign="top" >
              <div >被约定单位：<input type="text" class="input-200"> 签收人：<input type="text" v-model="nameList2[1].fullName" disabled>日期：<input type="text" v-model="nameList2[0].auditTime" disabled> </div><br>
              <p>处理意见：</p><textarea  cols="30" rows="4"></textarea>
              <p class="t-right">签字：<input type="text" v-model="nameList2[1].fullName" disabled> 日期： <input type="text" v-model="nameList2[0].auditTime" disabled><!--年 月 日--> </p>
            </td>
          </tr>
          <tr >
            <td width="692" valign="top" >
              <div >被约定单位：<input type="text" class="input-200"> 签收人：<input type="text" v-model="nameList3[1].fullName" disabled>日期：<input type="text" v-model="nameList3[0].auditTime" disabled> </div><br>
              <p>处理意见：</p><textarea  cols="30" rows="4"></textarea>
              <p class="t-right">签字：<input type="text" v-model="nameList3[1].fullName" disabled>日期： <input type="text" v-model="nameList3[0].auditTime" disabled><!--年 月 日--> </p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-623">注：按照联系单内容及签批程序逐级签署意见，被约定单位可以采用笔签。联系单位数应根据联系单内容的签批程序一式多份（两页以上采用正反面打印），确保各签批单位有原件存档。 </p>
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
    name: "A-23",
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
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        listDateArr1:[],
        listDateArr2:[],
        listDateArr3:[]
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
              if(item[1].auditTypeId==14){
                this.nameList3 = item;
                this.listDateArr3 = splitDate(this.nameList3[0].auditTime,'-')
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
        this.axios.get('/HiQuality/A23/findA23ById', {
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
        this.axios.post("/HiQuality/A23/saveA23", this.$qs.stringify({
          a23:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A23/updateA23',this.$qs.stringify({
          a23:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A23/deleteA23', {
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
