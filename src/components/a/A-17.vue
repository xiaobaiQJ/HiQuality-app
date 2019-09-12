<template>
    <div class="A17 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-17</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>工 程 暂 时 停 工 指 令</h3>
      <div class="text-left width-623">
        <span>承包单位：
         <el-select v-model="obj.m8" placeholder="请选择施工单位" @change="setUnit">
                <el-option
                  v-for="(item,index) in supervisorTableInfo.unitInfos"
                  :key="index"
                  :label="item.contractName"
                  :value="item">
                </el-option>
              </el-select>
        </span>
        <span>合 同 号：<input type="text" v-model="obj.m9" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="obj.m10" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr >
            <td width="571" valign="top" >
              <p >停工依据：</p>
              <textarea name="" cols="30" rows="4" v-model="obj.m1"></textarea>
            </td>
          </tr>
          <tr >
            <td width="571" valign="top" >
              <p >停工范围： </p>
              <textarea name="" cols="30" rows="4" v-model="obj.m2"></textarea>
            </td>
          </tr>
          <tr >
            <td width="571" valign="top" >
              <p >停工原因： </p>
              <textarea name="" cols="30" rows="4" v-model="obj.m3"></textarea>
            </td>
          </tr>
          <tr >
            <td width="571" valign="center" >
              <p >停工日期：  </p><br/>
              <div class="block t-right height-30">
                <el-date-picker
                  v-model="obj.m4"
                  type="datetime"
                  format="yyyy年MM月dd日 HH时"
                  value-format="yyyy-MM-dd HH"
                  placeholder="年  月  日  时">
                </el-date-picker>
              </div>
            </td>
          </tr>
          <tr >
            <td width="571" valign="top" >
              <p >停工后应做如下处理： </p>
              <textarea name="" cols="30" rows="20" v-model="obj.m5"></textarea>
            </td>
          </tr>
          <tr >
            <td width="571" valign="top" >
              <p >驻地办驻地监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled> </p>
              <br/><br/>
              <p align="right">日期：<input type="text" v-model="nameList1[0].auditTime" disabled> </p><br/>
            </td>
          </tr>
          <tr >
            <td width="571" valign="top" ><p >承包人：<input type="text" v-model="nameList2[1].fullName"> </p><br/><br/>
            <p align="right">日期：<input type="text" v-model="nameList2[0].auditTime" disabled> </p><br/>
             <!-- <div class="block t-right">
                <span class="demonstration">日期：</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m7" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>--><br/>
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
    name: "A-17",
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
        auditTypeIdArr:[25],
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
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      //获取监理用表表头信息
      this.$publicFun.getSupervisorTableInfo();
      //获取rec信息数据
      this.$publicFun.getRecInfo()
    },
    computed: {
      getTableInfoList: function () {
        return this.$store.state.supervisorTableInfo
      },
      getNameList: function () {
        return this.$store.state.nameList
      },
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch: {
      //获取监理用表表头信息数据
      getTableInfoList: function () {
        this.supervisorTableInfo = this.$store.state.supervisorTableInfo;
        //获取监理单位信息赋值给主表对象
        this.obj.m10 = this.supervisorTableInfo.unitName2;
      },
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==25){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==66){
                this.nameList2 = item;
              }
            }
          })
        }
      },
      //获取rec信息数据
      getRecObj: function () {
        this.rec = this.$store.state.recInfo;
        console.log("获取到的rec信息数据************"+JSON.stringify(this.rec))
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
        this.obj.m8 = item.unitName;
        this.obj.m9 = item.contractCode;
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A17/findA17ById', {
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
        this.axios.post("/HiQuality/A17/saveA17", this.$qs.stringify({
          a17:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A17/updateA17', this.$qs.stringify({
          a17:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A17/deleteA17', {
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
