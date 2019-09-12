<template>
  <div class="AKG-04 text-center lengthways-a">
    <p class="top-name-p width-623">AKG-04</p>
    <p align="center" >贵州省黔西南州兴义环城高速公路建设项目</p>
    <h3>进 场 材 料 检 验 单</h3>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="84"><p align="center">合同段</p></td>
        <td width="42"><input type="text" v-model="headerInfo.contractCode" disabled></td>
        <td width="84" colspan="2"><p align="center">施工单位 </p></td>
        <td width="133" colspan="5"><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="70" colspan="2"><p align="center">编号 </p></td>
        <td width="70" colspan="3"><input type="text" v-model="rec.recNo"></td>
        <td width="140" colspan="2"><p align="center">第  页共  页 </p></td>
      </tr>
      <tr>
        <td width="84"><p align="center">材料 <br />
          名称 </p></td>
        <td width="126" colspan="3"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="56" colspan="2"><p align="center">规格 </p></td>
        <td width="147" colspan="5"><p align="center"><input type="text" v-model="obj.m2"></p></td>
        <td width="70" colspan="3"><p align="center">数量 </p></td>
        <td width="140" colspan="2"><p align="center"><input type="text" v-model="obj.m3"></p></td>
      </tr>
      <tr>
        <td width="84"><p align="center">拟用 <br />
          何处 </p></td>
        <td width="182" colspan="5"><p align="center"><input type="text" v-model="obj.m4"></p></td>
        <td width="147" colspan="5"><p align="center">产地及厂(场)家 </p></td>
        <td width="210" colspan="5"><p align="center"><input type="text" v-model="obj.m5"></p></td>
      </tr>
      <tr>
        <td width="84"><p align="center">进场 <br />
          日期 </p></td>
        <td width="224" colspan="7">
          <div class="block">
            <el-date-picker v-model="obj.m6" type="date" size="mini"  value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
        <td width="84" colspan="2"><p align="center">检查日期 </p></td>
        <td width="231" colspan="6">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m7"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="84"><p align="center">装运卸 <br />
          情  况 </p></td>
        <td width="539" colspan="15" valign="top">
          <textarea v-model="obj.m8"></textarea>
        </td>
      </tr>
      <tr>
        <td width="84"><p align="center">堆  放 <br />
          储  存 <br />
          情  况 </p></td>
        <td width="539" colspan="15" valign="top">
          <textarea v-model="obj.m9"></textarea>
        </td>
      </tr>
      <tr>
        <td width="84"><p align="center">抽样数 </p></td>
        <td width="539" colspan="15"><p align="center"><input type="text" v-model="obj.m10"></p></td>
      </tr>
      <tr>
        <td width="84"><p align="center">抽样方法 </p></td>
        <td width="539" colspan="15"><p align="center"><input type="text" v-model="obj.m11"></p></td>
      </tr>
      <tr>
        <td width="84" rowspan="3"><p align="center">主要质量 <br />
          指标 </p></td>
        <td width="88" colspan="2"><p align="center">试验项目 </p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m21"></p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m22"></p></td>
        <td width="48" colspan="2"><p align="center"><input type="text" v-model="obj.m23"></p></td>
        <td width="75" colspan="3"><p align="center"><input type="text" v-model="obj.m24"></p></td>
        <td width="55"><p align="center"><input type="text" v-model="obj.m25"></p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m26"></p></td>
        <td width="89"><p align="center"><input type="text" v-model="obj.m27"></p></td>
      </tr>
      <tr>
        <td width="88" colspan="2"><p align="center">规定指标 </p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m28"></p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m29"></p></td>
        <td width="48" colspan="2"><p align="center"><input type="text" v-model="obj.m30"></p></td>
        <td width="75" colspan="3"><p align="center"><input type="text" v-model="obj.m31"></p></td>
        <td width="55"><p align="center"><input type="text" v-model="obj.m32"></p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m33"></p></td>
        <td width="89"><p align="center"><input type="text" v-model="obj.m34"></p></td>
      </tr>
      <tr>
        <td width="88" colspan="2"><p align="center">试验值 </p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m35"></p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m36"></p></td>
        <td width="48" colspan="2"><p align="center"><input type="text" v-model="obj.m37"></p></td>
        <td width="75" colspan="3"><p align="center"><input type="text" v-model="obj.m38"></p></td>
        <td width="55"><p align="center"><input type="text" v-model="obj.m39"></p></td>
        <td width="61" colspan="2"><p align="center"><input type="text" v-model="obj.m40"></p></td>
        <td width="89"><p align="center"><input type="text" v-model="obj.m41"></p></td>
      </tr>
      <tr>
        <td width="84"><p align="center">自检意见 <br />
          及签名 </p></td>
        <td width="539" colspan="15" valign="top">
          <textarea v-model="obj.m12"></textarea>
        </td>
      </tr>
      <tr>
        <td width="84"><p align="center">监理工程师意见及签名 </p></td>
        <td width="539" colspan="15" valign="top">
          <textarea v-model="nameList1[0].auditOpinion" disabled></textarea>
          <p align="right"><input type="text" v-model="nameList1[1],fullName" disabled></p>
        </td>
      </tr>
      <tr>
        <td width="84"><p align="center">附件 </p></td>
        <td width="539" colspan="15"><ol>
          <li>材料出厂合格证。 </li>
          <li>材料抽样试验报告单。 </li>
          <li>…………..</li>
        </ol></td>
      </tr>
      <tr>
        <td width="623" colspan="16">
          <p>
            填表:<input type="text" v-model="obj.m15">                                
             工地主管:<input v-model="obj.m16">
          </p>
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
    name: "AKG-04",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {},
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
        headerInfo: {}, //表头信息
        nameList: [],
        nameList1: [{}, {}],
        id: '7'    //主表id
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
    watch:{
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item, index) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 29) {
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
        this.axios.get('/HiQuality/kg04/findByRecId', {
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
      //新增
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post('/HiQuality/kg04/saveKg04', this.$qs.stringify({
          kg04:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/kg04/updateKg04', this.$qs.stringify({
          kg04:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.delete('/HiQuality/kg01/deleteById', {
          params: {
            id: this.id,
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
