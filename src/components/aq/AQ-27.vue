<template>
  <div class="AQ-27 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全生产费用计量报审表</h3>
    <div class="text-left width-710">
      <span>施工单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-710">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table cellspacing="0" cellpadding="0">
      <tr>
        <td colspan="4" width="723" align="left">
          <p> 致<input type="text" v-model="headerInfo.unitName2" class="title-input">驻地监理工程师：</p>
          <br/>
          <p style="text-indent: 50px;">兹申报 
            <el-date-picker v-model="obj.m2" type="date" size="mini"
                            class="input-100"  placeholder="年  月"
                            format="yyyy年MM月"
                            value-format="yyyy-MM">
            </el-date-picker>
            完成的安全生产技术措施工程量统计报表，请予核验审定!
          </p>
          <p >附件： 1、安全生产费用统计报表；</p>
          <p style="text-indent: 50px;"> 2、经过审批的《安全生产费用使用计划表》；</p>
          <p style="text-indent: 50px;">  3、《安全生产费用使用记录表》；</p>
          <p style="text-indent: 50px;"> 4、专项安全资金使用有效证明资料。</p>
          <br/>
          <p class="t-right p-lineheight">施工单位（章）：<input type="text" v-model="obj.m3"></p>
          <p class="t-right p-lineheight">项目经理：<input type="text" v-model="obj.m4"></p>
          <div class="dateDiv t-right p-lineheight">
            <div class="block display-lnl">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-120"
                              size="mini"
                              v-model="obj.m5" type="date"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <p align="left">驻地办安全专业监理工程师意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">签名：<input type="text" class="" v-model="nameList1[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <p align="left">驻地办驻地监理工程师意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">签名：<input type="text" class="" v-model="nameList2[1].fullName"
                                                              disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <p align="left">总监办意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList3[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">签名：<input type="text" class="" v-model="nameList3[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList3[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="540" colspan="6">
          <p align="left">项目公司(质安部部长）意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList4[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">签名：<input type="text" class="" v-model="nameList4[1].fullName"
                                                              disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList4[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <!--<tr>
        <td colspan="2" width="723">
          <p align="left">驻地办安全专业监理工程师意见：</p>
          <br />
          <br />
          <br />
          <p align="right">签字：<input type="text">日期：<input type="text"></p>
        </td>
      </tr>-->
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
  import {splitDate,joinDate} from '../../utils/utils'
    export default {
        name: "AQ-27",
      data(){
        return{
          isAdd:true,
          //主表对象
          obj:{},
          id:'',
          dateArr:[],
          rec: {
            recNo:'',
            tableId:'',
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          headerInfo: {}, //表头信息
          auditTypeIdArr: [38,25,21,15],
          nameList: [],
          nameList1: [{}, {}],
          nameList2: [{}, {}],
          nameList3: [{}, {}],
          nameList4: [{}, {}]

        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
          this.obj.m1 = this.headerInfo.unitName2;
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
      watch:{
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 38) {
                  this.nameList1 = item;
                }
                if (item[1].auditTypeId == 25) {
                  this.nameList2 = item;
                }
                if (item[1].auditTypeId == 21) {
                  this.nameList3 = item;
                }
                if (item[1].auditTypeId == 15) {
                  this.nameList4 = item;
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
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/Aq27/findById',{
            params:{
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res =>{
            console.log("查询接口");
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
              this.isAdd = false;
              //this.dateArr = splitDate(this.obj.m2,'-');
            }
          })
        },
        //插入
        addData(){
          if(!this.isAdd){
            return false;
          }
          //this.obj.m2 = joinDate(this.dateArr,'-');
          this.axios.post("/HiQuality/Aq27/saveAq27", this.$qs.stringify({
            aq27:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
              console.log("插入接口")
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },
        //修改
        updateData() {
          //this.obj.m2 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/Aq27/updateAq27',this.$qs.stringify({
            aq27:JSON.stringify(this.obj)
          }))
            .then(res => {
              console.log("修改接口");
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                this.$tost.edit();
                this.$skip.skipProcess();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.delete('/HiQuality/Aq27/deleteAq27', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
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
