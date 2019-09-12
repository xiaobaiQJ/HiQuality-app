<template>
    <div class="AQ-03 text-center">
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>分包单位登记表</h3>
      <div class="t-right margin-auto width-623">
        <p>编号：<input type="text" v-model="rec.recNo"></p>
      </div>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel" width="630">
        <tr>
          <td width="67"><p align="center">单位 <br />名称 </p></td>
          <td width="204" colspan="2"><input type="text" v-model="headerInfo.unitName" disabled></td>
          <td width="107"><p align="center">项目名称 </p></td>
          <td width="193" colspan="2"><input type="text" v-model="obj.m4"></td>
        </tr>
        <tr>
          <td width="67"><p align="center">分包单位编号 </p></td>
          <td width="122"><p align="center">分包单 <br />
            位名称 </p></td>
          <td width="82"><p align="center">资质      等级 </p></td>
          <td width="107"><p align="center">分包 <br />
            项目 </p></td>
          <td width="68"><p align="center">负责人 </p></td>
          <td width="124"><p align="center">电话 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="67"><p align="center">{{index+1}}</p></td>
          <td width="122" valign="top"><p><input type="text" v-model="val.s1"></p></td>
          <td width="82" valign="top"><p><input type="text" v-model="val.s2"></p></td>
          <td width="107" valign="top"><p><input type="text" v-model="val.s3"></p></td>
          <td width="68" valign="top"><p><input type="text" v-model="val.s4"></p></td>
          <td width="124" valign="top"><p><input type="text" v-model="val.s5"></p></td>
        </tr>
        <tr>
          <td width="571" colspan="6" valign="top">
            <p align="left">专业监理工程师审查意见： </p>
            <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight">专业监理工程师：<input type="text" class="" v-model="nameList1[1].fullName"
                                                             disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
        </tr>
        <tr>
          <td width="571" colspan="6" valign="top">
            <p align="left">驻地办驻地监理工程师审核意见：</p>
            <textarea name="" cols="30" rows="4" v-model="nameList2[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight">驻地办驻地监理工程师签名：<input type="text" class="" v-model="nameList2[1].fullName"
                                                                disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
        </tr>
      </table>
      <div class="bot-hint-p width-623 dateDiv">负责人：<input type="text" v-model="obj.m1" class="input-140">填报人：<input type="text" v-model="obj.m2" class="input-140">
        <div class="block display-lnl">
          <span class="demonstration">日期：</span>
          <el-date-picker class="input-80"
                          size="mini"
                          v-model="obj.m3" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
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
        name: "AQ-03",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          //rec表
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
          auditTypeIdArr: [38, 25],
          nameList: [],
          nameList1: [{}, {}],
          nameList2: [{}, {}],
          id: 0     //主表id

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
      mounted() {
        this.setSubObj();
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
      methods: {
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/aq03/findById', {
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
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length > 0) {
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;

            }
          })
        },
        //新增
        addData() {
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq03/save',this.$qs.stringify({
            bBtAq03M:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
            console.log("新增接口")
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq03/update', this.$qs.stringify({
            bBtAq03M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/aq03/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
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

</style>
