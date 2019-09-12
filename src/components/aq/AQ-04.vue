<template>
    <div class="AQ-04 text-center">
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>分包单位安全审查表</h3>
      <div class="t-right margin-auto width-623">
        <p>编号：<input type="text" v-model="rec.recNo"></p>
      </div>
      <table border="1" cellspacing="0" cellpadding="0" width="630">
        <tr class="public-tabel">
          <td width="71" valign="top"><p align="center">分包单<br />位名称</p></td>
          <td width="125" colspan="3" ><p><input type="text" v-model="obj.m1" ></p></td>
          <td width="63" colspan="2" ><p align="center">隶属<br />关系 </p></td>
          <td width="60" colspan="2" ><p><input type="text" v-model="obj.m2" ></p></td>
          <td width="72" valign="top"><p align="center">资质<br />等级 </p></td>
          <td width="60" colspan="2" ><p><input type="text" v-model="obj.m3" ></p></td>
          <td width="48" valign="top"><p align="center">安全<br />资质 </p></td>
          <td width="69" ><p><input type="text" v-model="obj.m4" ></p></td>
        </tr>
        <tr class="public-tabel">
          <td width="71" valign="top"><p align="center">所在地 </p></td>
          <td width="92" colspan="2" valign="top"><p><input type="text" v-model="obj.m5" ></p></td>
          <td width="72" colspan="2" valign="top"><p>安全机构<br/>设置 </p></td>
          <td width="84" colspan="3" valign="top"><p><input type="text" v-model="obj.m6" ></p></td>
          <td width="72" valign="top"><p align="center">注册<br/>资金 </p></td>
          <td width="60" colspan="2" valign="top"><p><input type="text" v-model="obj.m7" ></p></td>
          <td width="48" valign="top"><p align="center">法人<br/>代表 </p></td>
          <td width="69" valign="top"><p><input type="text" v-model="obj.m8" ></p></td>
        </tr>
        <tr >
          <td width="91" colspan="2" valign="top"><p align="center">主要安全<br/>设施 </p></td>
          <td width="477" colspan="11" valign="top">
            <p><textarea name="" cols="30" rows="2" v-model="obj.m9"></textarea></p>
          </td>
        </tr>
        <tr>
          <td width="91" colspan="2" valign="top"><p align="center">安全管理<br/>制度 </p></td>
          <td width="216" colspan="5" valign="top">
            <p><textarea name="" cols="30" rows="2" v-model="obj.m10"></textarea></p>
          </td>
          <td width="108" colspan="3" valign="top"><p>安全教育情况 </p></td>
          <td width="153" colspan="3" valign="top">
            <p><textarea name="" cols="30" rows="2" v-model="obj.m11"></textarea></p>
          </td>
        </tr>
        <tr>
          <td width="568" colspan="13" valign="top">
            <p align="left"><span>附件：1、安全管理人员名单及资料； </span><br />
                <span class="mar-left">2、特种作业人员名单及资料； </span><br />
                <span class="mar-left">3、主要施工机具设备及资料； </span><br />
                <span class="mar-left">4、分包合同与分包安全生产管理协议； </span>
            </p>
            <br/>
            <br/>
          </td>
        </tr>
        <tr>
          <td width="568" colspan="13" valign="top">
            <p align="left">总包单位意见：
              <textarea name="" cols="30" rows="4" v-model="obj.m13"></textarea>
            </p>
            <p class="t-right p-lineheight">施工单位签章：<input type="text" v-model="obj.m14"></p>
            <p class="t-right p-lineheight">项目经理：<input type="text" v-model="obj.m15"></p>
            <div class="dateDiv t-right p-lineheight">
              <div class="block display-lnl">
                <span class="demonstration">日期：</span>
                <el-date-picker class="input-120"
                                size="mini"
                                v-model="obj.m16" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td width="568" colspan="13" valign="top">
            <p align="left">专业监理工程师审查意见： </p>
              <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>

            <p class="t-right p-lineheight">专业监理工程师签名：<input type="text" class="" v-model="nameList1[1].fullName"
                                                             disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
        </tr>
        <tr>
          <td width="568" colspan="13" valign="top">
            <p align="left">驻地办驻地监理工程师审查意见： </p>
            <textarea name="" cols="30" rows="4" v-model="nameList2[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight">驻地办驻地监理工程师签章：<input type="text" class="" v-model="nameList2[1].fullName"
                                                                disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
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
        name: "AQ-04",
      data(){
        return{
          isAdd: true,
          obj:{},
          rec: {
            recNo:' ',
            tableId:4,
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          headerInfo: {}, //表头信息
          auditTypeIdArr: [38, 25],
          nameList: [],
          nameList1: [{}, {}],
          nameList2: [{}, {}],
          id:0
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
        this.$publicFun.getRecInfo()

      },
      mounted(){
        this.getData();
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
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 38) {
                  this.nameList1 = item;
                }
                if (item[1].auditTypeId == 25) {
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
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq04/findById',{
            params:{
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          this.axios.post('/HiQuality/aq04/save',this.$qs.stringify({
            bBtAq04M:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
          .then(res=>{
            console.log("新增接口")
            console.log(res);
            if(res.data.status==200){
              this.isAdd = false;
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
        },
        //修改
        updateData(){
          this.axios.get('/HiQuality/aq04/update',this.$qs.stringify({
            bBtAq04M:JSON.stringify(this.obj)
          }))
          .then(res=>{
            console.log("修改接口")
            console.log(res);
            if(res.data.status==200){
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
        },
        //删除
        deleteData(){
          this.axios.get('/HiQuality/aq04/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if(res.data.status==200){
              this.isAdd = true;
              this.obj = {};
            }
          })
        }

      }

    }
</script>

<style scoped>
  .mar-left{
    margin-left: 50px;
  }
</style>
