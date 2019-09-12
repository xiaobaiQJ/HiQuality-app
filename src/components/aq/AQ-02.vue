<template>
    <div class="AQ-02 text-center">
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>施工分包单位安全生产资质材料审查表</h3>
      <div class="t-right margin-auto width-623">
        <p>编号：<input type="text" v-model="rec.recNo"></p>
      </div>
      <table border="1" cellspacing="0" cellpadding="0" width="630">
        <tr class="public-tabel">
          <td width="79" valign="top"><p>单位名称</p> </td>
          <td width="216" colspan="3"><input type="text" v-model="headerInfo.unitName" disabled></td>
          <td width="72" colspan="2" valign="top"><p>项目名称 </p></td>
          <td width="207" colspan="2" ><input type="text" v-model="obj.m10"></td>
        </tr>
        <tr>
          <td width="574" colspan="8" valign="top"><p>&nbsp;</p>
            <p align="left" class="p-lineheight">致 <input type="text" class="title-input" v-model="obj.m17">（监理单位）： </p>
            <p align="left" style="text-indent: 50px;" class="p-lineheight">我方已根据监理计划的有关规定完成了项目分包单位安全生产资质材料的编制，经我单位审查，拟选择的<input type="text" class="title-input" v-model="obj.m1">（分包单位）具有承担下列工程的施工资质和施工能力，其项目经理和专职安全生产管理人员配备符合要求，可以保证工程项目按合同的规定进行施工。分包后，我方仍承担总包单位的全部责任。请予以审查。 </p></td>
        </tr>
        <tr class="public-tabel">
          <td width="130" colspan="2" valign="top"><p>分包工程名称 </p></td>
          <td width="116" valign="top"><p>分包类别 </p></td>
          <td width="114" colspan="2" valign="top"><p>分包工程数量 </p></td>
          <td width="100" colspan="2" valign="top"><p>分包工程规模 </p></td>
          <td width="114" valign="top"><p>分包工程造价 </p></td>
        </tr>
        <tr class="public-tabel">
          <td width="130" colspan="2" ><p><input type="text" v-model="obj.m2" ></p></td>
          <td width="116" ><p><input type="text" v-model="obj.m3"></p></td>
          <td width="114" colspan="2" ><p><input type="text" v-model="obj.m4" ></p></td>
          <td width="100" colspan="2" ><p><input type="text" v-model="obj.m5" ></p></td>
          <td width="114" valign="top"><p><input type="text" v-model="obj.m6" ></p></td>
        </tr>
        <tr class="public-tabel">
          <td width="110" colspan="2" valign="top"><p>注册资本 </p></td>
          <td width="250" colspan="3" valign="top"><p align="center">资质类别和等级 </p></td>
          <td width="214" colspan="3" valign="top"><p align="center">安全生产许可证有效期 </p></td>
        </tr>
        <tr class="public-tabel">
          <td width="110" colspan="2" ><p><input type="text" v-model="obj.m7" ></p></td>
          <td width="250" colspan="3" ><p><input type="text"  v-model="obj.m8" ></p></td>
          <td width="214" colspan="3" ><p><input type="text" v-model="obj.m9" ></p></td>
        </tr>
        <tr>
          <td width="574" colspan="8" >
            <div class="flex-r p-lineheight-40">
              <p class="t-left">附：</p>
              <div class="t-left mar-left-30px aq-checkDiv">
                <p class="float-left">①企业营业执照、资质证书、安全生产许可证</p>
                <p class="float-right padding-12px">
                  <van-checkbox v-model="obj.m11"></van-checkbox>
                </p>
                <div class="myClear"></div>
              </div>
            </div>
            <div class="t-left mar-left-55px p-lineheight-40 aq-checkDiv">
              <p class="float-left">②项目经理岗位证书、安全生产考核合格证书</p>
              <p class="float-right padding-12px">
                <van-checkbox v-model="obj.m12"></van-checkbox>
              </p>
              <div class="myClear"></div>
            </div>
            <div class="t-left mar-left-55px p-lineheight-40 aq-checkDiv">
              <p class="float-left">③专职安全生产管理人员安全生产考核合格证书</p>
              <p class="float-right padding-12px">
                <van-checkbox v-model="obj.m13"></van-checkbox>
              </p>
              <div class="myClear"></div>
            </div>
            <br /><br /><br />
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
          <td width="574" colspan="8" valign="top">
            <p align="left">专业监理工程师审查意见：</p>
            <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight">专业监理工程师签名：<input type="text" class="" v-model="nameList1[1].fullName"
                                                             disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
        </tr>
        <tr>
          <td width="574" colspan="8" valign="top">
            <p align="left">驻地办驻地监理工程师审核意见： </p>
            <textarea name="" cols="30" rows="4"  v-model="nameList2[0].auditOpinion" disabled></textarea>
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
        name: "AQ-02",
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
          id:0,
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
          this.obj.m17 = this.headerInfo.unitName2;
        }
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
          this.axios.get('/HiQuality/aq02/findById',{
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
          this.axios.post('/HiQuality/aq02/save',this.$qs.stringify({
            bBtAq02M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/aq02/update',this.$qs.stringify({
            bBtAq02M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/aq02/deleteById',{
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
.p-lineheight{
  line-height: 25px;
}
  .mar-left{
    margin-left: 32px;
  }
</style>
