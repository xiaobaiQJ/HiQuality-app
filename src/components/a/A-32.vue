<template>
    <div class="A32 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-32</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>监 理 通 用 函</h3>
      <div class="text-left width-623">
        <span>承包单位：
          <el-select v-model="obj.m6" placeholder="请选择承包单位" @change="setUnit">
            <el-option
              v-for="(item,index) in supervisorTableInfo.unitInfos"
              :key="index"
              :label="item.contractName"
              :value="item">
            </el-option>
          </el-select>
        </span>
        <span>合 同 号：<input type="text" v-model="obj.m7" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="obj.m8" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr >
            <td width="614" valign="top" >
              <p><textarea name="" cols="30" rows="38" v-model="obj.m1"></textarea></p>
              <div align="right" class="dateDiv">签 发 人：<input type="text" v-model="obj.m2" class="input-120">
                <div class="block display-lnl height-25 input-160">
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m3" type="date"
                                  placeholder="年  月  日"
                                  format="yyyy年MM月dd日"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
              <br/><br/>
            </td>
          </tr>
          <tr >
            <td width="614" valign="top" ><p > </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p >&nbsp;</p><br/><br/><br/><br/><br/><br/>
              <div align="right" class="dateDiv">承包人(或代签收人)：<input type="text" v-model="nameList2[1].fullName" class="input-120">
                <input type="text" class="date-input height-25" v-model="nameListDataArr2[0]" disabled>年<input type="text" class="date-input height-25" v-model="nameListDataArr2[1]" disabled>月<input type="text" class="date-input height-25" v-model="nameListDataArr2[2]" disabled>日
              </div><br/>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-623">注：本函适用于没有专用表格，而又必须书面传达至承包人的通知、同意、批准及其他意向的表示，也用于传达至项目公司的通知；由专业监理工程师及其以上人员签发（致项目公司的通知由驻地办高监签发） </p>
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
    name: "A-32",
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
        supervisorTableInfo:{}, //监理用表表头信息
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameListDataArr1:[],
        nameListDataArr2:[],
        id: '3',
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取监理用表表头信息
      this.$publicFun.getSupervisorTableInfo()
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
      getTableInfoList: function () {
        return this.$store.state.supervisorTableInfo
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
                this.nameListDataArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==66){
                this.nameList2 = item;
                this.nameListDataArr2 = splitDate(this.nameList2[0].auditTime,'-');
              }
            }
          })
        }
      },
      //获取监理用表表头信息数据
      getTableInfoList: function () {
        this.supervisorTableInfo = this.$store.state.supervisorTableInfo;
        //获取监理单位信息赋值给主表对象
        this.obj.m8 = this.supervisorTableInfo.unitName2;
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
      /**
       * 当施工单位改变时保存至主表，并取到相对应的合同段值
       * @method setUnit
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      setUnit(item) {
        this.obj.m6 = item.unitName;
        this.obj.m7 = item.contractCode;
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A32/findA32ById', {
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
        this.axios.post("/HiQuality/A32/saveA32", this.$qs.stringify({
          a32:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A32/updateA32', this.$qs.stringify({
          a32:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
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
        this.axios.get('/HiQuality/A32/deleteA32', {
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
