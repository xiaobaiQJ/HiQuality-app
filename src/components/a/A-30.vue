<template>
    <div class="A30 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-30</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>变更设计问题处理意见备忘录</h3>
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
        <table border="1" cellspacing="0" class="public-tabel">
          <tr >
            <td width="124" valign="center" colspan="2" ><p>工程地点及桩号</p></td>
            <td width="230" valign="center" >
              <p><input type="text" v-model="obj.m1"></p>
            </td>
            <td width="62" valign="center" ><p align="center" >时 间 </p></td>
            <td width="154" valign="center" >
              <div class="block">
                <el-date-picker v-model="obj.m2" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
          <tr >
            <td width="124" valign="center" colspan="2" ><p align="center" >具 体 部 位 </p></td>
            <td width="230" valign="center" >
              <p><input type="text" v-model="obj.m3"></p>
            </td>
            <td width="62" valign="center" ><p align="center" >原图号 </p></td>
            <td width="154" valign="center" >
              <p><input type="text" v-model="obj.m4"></p>
            </td>
          </tr>
          <tr >
            <td width="30" valign="center" ><p align="center" >问<br/>题 </p></td>
            <td width="541" valign="top" colspan="4" >
              <p><textarea name="" cols="30" rows="9" v-model="obj.m5"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="30" valign="center" ><p align="center" >原<br/>因 </p></td>
            <td width="541" valign="top" colspan="4" >
              <p><textarea name="" cols="30" rows="8" v-model="obj.m6"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="30" valign="center" ><p align="center" >处<br/>理<br/>意<br/>见 </p></td>
            <td width="541" valign="top" colspan="4" >
              <p style="height: auto;"><textarea name="" cols="30" rows="9" v-model="obj.m7"></textarea></p>
              <p align="right" style="height: auto;">意见签署人：
                <input type="text" v-model="obj.m8" class="height-25 input-140">
              </p>
            </td>
          </tr>
          <tr >
            <td width="572" valign="center" colspan="5" >
              <p class="t-left">承包人：<input type="text" v-model="obj.m9" class="height-25 input-400"></p>
            </td>
          </tr>
          <tr >
            <td width="572" valign="center" colspan="5" >
              <p class="t-left">设计代表：<input type="text" v-model="nameList1[1].fullName" class="height-30 input-400" disabled> </p>
            </td>
          </tr>
          <tr >
            <td width="572" valign="center" colspan="5" >
              <p class="t-left">驻地办：<input type="text" v-model="nameList2[1].fullName" class="height-30 input-400" disabled> </p>
            </td>
          </tr>
          <tr >
            <td width="572" valign="center" colspan="5" >
              <p class="t-left">总监办：<input type="text" v-model="nameList3[1].fullName" class="height-30 input-400" disabled> </p>
            </td>
          </tr>
          <tr >
            <td width="572" valign="center" colspan="5" >
              <p class="t-left">项目公司：<input type="text" v-model="nameList4[1].fullName" class="height-30 input-400" disabled> </p>
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
    name: "A-30",
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
        headerInfo:{}, //表头信息
        auditTypeIdArr: [63,25,21,1],
        nameList:[],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        nameList3: [{}, {}],
        nameList4: [{}, {}],
        id: '3'
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
      this.getSignName(this.auditTypeIdArr, this.rec.id, this.rec.tableId);
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
        this.nameList.forEach((item) => {
          if (item != '' && item != undefined) {
            if (item[1].auditTypeId == 63) {
              this.nameList1 = item;
            }
            if (item[1].auditTypeId == 25) {
              this.nameList2 = item;
            }
            if (item[1].auditTypeId == 21) {
              this.nameList3 = item;
            }
            if (item[1].auditTypeId == 8) {
              this.nameList4 = item;
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
        this.axios.get('/HiQuality/A30/findA30ById', {
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
        this.axios.post("/HiQuality/A30/saveA30", this.$qs.stringify({
          a30:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A30/updateA30', this.$qs.stringify({
          a30:JSON.stringify(this.obj),
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
        this.axios.get('/HiQuality/A30/deleteA30', {
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
