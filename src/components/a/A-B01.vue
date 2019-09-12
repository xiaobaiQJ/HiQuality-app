<template>
    <div class="Ab01 text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-598">A-补01 </p>
      <p>贵州省高速公路建设项目 </p>
      <p> 黔西南州兴义环城高速公路 </p>
      <h3>首件工程施工总结认可申报批复单</h3>
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
      <table border="0" cellspacing="0">
        <tr >
          <td width="605" valign="top" colspan="2" >
            <p class="t-left">致（驻地监理工程师）<input type="text" v-model="obj.m1"class="title-input">：</p>
            <br />
            <p>本合同段**首件工程已完成且达到**（优良、合格）首件工程标准，特申请进行认可，请予批准！</p><br />
            <br /><br /><br /><br />
            <div class="t-right">
              <div class="block display-lnl height-25 input-100">
                <span class="demonstration">开工时间：</span>
                <el-date-picker class="input-100"
                                size="mini"
                                v-model="obj.m2" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
              <div class="block display-lnl height-25 input-100">
                <span class="demonstration">完工时间：</span>
                <el-date-picker class="input-100"
                                size="mini"
                                v-model="obj.m3" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div><br /><br />
            <p class="t-left">附件：**首件工程施工总结 </p><br />
          </td>
        </tr>
        <tr >
          <td width="143" valign="center" ><p align="center" >施工单位评价 </p></td>
          <td width="462" valign="center" >
            <p class="t-left">评价：</p>
            <textarea name="" cols="30" rows="10" v-model="obj.m4"></textarea>
            <div align="right">
              项目经理：<input type="text" class="input-80" v-model="obj.m5">
              <div class="block display-lnl height-25 input-80">
                <span class="demonstration">日期：</span>
                <el-date-picker class="input-80"
                                size="mini"
                                v-model="obj.m6" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
            <br />
          </td>
        </tr>
        <tr >
          <td width="143" valign="center" ><p align="center" >驻地驻地办评分 </p></td>
          <td width="462" valign="center" >
            <p class="t-left">评价：</p>
            <textarea name="" cols="30" rows="10" v-model="nameList1[0].auditOpinion" disabled></textarea>
            <p align="right">
              驻地高监：<input type="text" class="height-25 input-80" v-model="nameList1[1].fullName" disabled> 日期：<input type="text" v-model="nameList1[0].auditTime" class="height-25 input-80" disabled>
            </p>
          </td>
        </tr>
        <tr >
          <td width="143" valign="center" ><p align="center" >总监办意见 </p></td>
          <td width="462" valign="center" >
            <textarea name="" cols="30" rows="4" v-model="nameList2[0].auditOpinion" disabled></textarea>
            <p align="right">
              总 监：<input type="text" class="height-25 input-80" v-model="nameList2[1].fullName" disabled> 日期：<input type="text" v-model="nameList2[0].auditTime" class="height-25 input-80" disabled>
            </p>
          </td>
        </tr>
        <tr >
          <td width="143" valign="center" ><p align="center" >项目公司意见 </p></td>
          <td width="462" valign="center" >
            <textarea name="" cols="30" rows="4" v-model="nameList3[0].auditOpinion" disabled></textarea>
            <p align="right">
              签字：<input type="text" class="height-25 input-80" v-model="nameList3[1].fullName" disabled> 日期：<input type="text" v-model="nameList3[0].auditTime" class="height-25 input-80" disabled>
            </p>
            <br />
          </td>
        </tr>
        <tr class="tr-height">
          <td width="605" valign="center" colspan="2" ><p >注：若总监办与业主办为同一人员，仅总监签字即可。 </p></td>
        </tr>
      </table>
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
        name: "A-B01",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {

          },
          //rec
          rec:{
            recNo:'',
            tableId:1,
            contractId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          headerInfo:{}, //表头信息
          auditTypeIdArr:[25,21,13],
          nameList:[],
          nameList1:[{},{}],
          nameList2:[{},{}],
          nameList3:[{},{}],
          nameListDataArr1:[],
          nameListDataArr2:[],
          nameListDataArr3:[],
          id: '1'
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
        this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==25){
                this.nameList1 = item;
                this.nameListDataArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==21){
                this.nameList2 = item;
                this.nameListDataArr2 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if(item[1].auditTypeId==13){
                this.nameList3 = item;
                this.nameListDataArr3 = splitDate(this.nameList3[0].auditTime,'-');
              }

            }
          })
        };
        this.$publicFun.getRecInfo()

      },
      computed: {
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
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
          this.axios.get('/HiQuality/A01B/findA01BById', {
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
          this.axios.post("/HiQuality/A01B/saveA01B", this.$qs.stringify({
            a01b:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A01B/updateA01B', this.$qs.stringify({
            a01b:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/A01B/deleteA01B', {
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
