<template>
  <div class="AQ-16 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>危险性较大的分部分项工程确认报审表</h3>
    <div class="t-right margin-auto width-559">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="568" colspan="5" valign="top"><p>&nbsp;</p>
          <p align="left" class="p-lineheight">致<input type="text" class="title-input" v-model="obj.m1">（监理单位）： </p>
          <p align="left" style="text-indent: 40px;" class="p-lineheight">根据设计文件和施工组织设计（方案），现将我单位确认的下列危险性较大工程和需经专家组论证审查的危险性较大工程上报，请予以审查。如实际情况发生变化，另将补报调整的危险性较大工程清单。 </p>
        </td>
      </tr>
      <tr >
        <td width="151"><p align="center">危险性较大工程名称 </p></td>
        <td width="108"><p align="center">工程规模/数量 </p></td>
        <td width="72"><p align="center">部位 </p></td>
        <td width="108"><p align="center">计划施工日期 </p></td>
        <td width="129" valign="top"><p align="center">是否需要专家组论证审查 </p></td>
      </tr>
      <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
        <td width="151" valign="top"><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="108" valign="top"><p><input type="text" class="td-input" v-model="val.s2"></p></td>
        <td width="72" valign="top"><p><input type="text" class="td-input" v-model="val.s3"></p></td>
        <td width="108" valign="top"><p><input type="text" class="td-input" v-model="val.s4"></p></td>
        <td width="129">
          <p align="center">是 <input type="radio" class="radio-input">否 <input type="radio" class="radio-input"></p>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="5" valign="top"><p>&nbsp;</p>
          <p class="t-right p-lineheight">施工单位签章：<input type="text" v-model="obj.m3"></p>
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
        <td width="568" colspan="5" valign="top">
          <p align="left">专业监理工程师审查意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">专业监理工程师签名：<input type="text" class="" v-model="nameList1[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>

        <td width="568" colspan="5" valign="top">
          <p align="left">驻地办驻地监理工程师审核意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList2[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">驻地办驻地监理工程师签章： <input type="text" class="" v-model="nameList2[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                    class="height-25"></p>
        </td>
      </tr>
      <tr>
        <td width="568" colspan="5" valign="top">
          <p align="left">总监办总监理工程师审核意见：</p>
          <textarea name="" cols="30" rows="5" v-model="nameList3[0].auditOpinion" disabled></textarea>
          <p class="t-right p-lineheight">总监办总监理工程师签章： <input type="text" class="" v-model="nameList3[1].fullName"
                                                           disabled></p>
          <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList3[0].auditTime" disabled
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
    name: "AQ-16",
    data() {
      return {
        isAdd: true,
        controlArr:[],
        //主表
        obj: {
          subList: []
        },
        //rec表
        rec: {
          recNo: '',
          tableId: '',
          contracId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        id: '1',
        headerInfo: {}, //表头信息
        auditTypeIdArr: [38, 25, 21],
        nameList: [],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        nameList3: [{}, {}],
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
      for(var i=0;i<5;i++){
        let subObj = {};
        this.controlArr.push(subObj);
      }
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq16/findAq16ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            let arr = []
            this.obj.subList.forEach((item) => {
              arr.push(item)
            })
            this.controlArr = arr;
            this.isAdd = false;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/Aq16/saveAq16", this.$qs.stringify({
          aq16:JSON.stringify(this.obj),
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/Aq16/updateAq16', this.$qs.stringify({
          aq16:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
              if (res.data.status == 200) {
                this.isAdd = false;
                this.$tost.edit();
                this.$skip.skipProcess();
              }
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/Aq16/deleteAq16', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.obj = {subList:[]};
            this.controlArr = [];
            this.isAdd = true;
          }
        })
      }

    }
  }
</script>

<style scoped>

.radio-input{
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #616161;
}
</style>
