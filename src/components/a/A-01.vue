<template>
  <div class="A01 text-center main-a lengthways-a">
    <p class="top-name-p width-623">A-01</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>施 工 放 样 报 验 单</h3>
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
      <table border="1" cellspacing="0" ref="table" class="table-padding">
        <tr>
          <td width="566"  colspan="4" contenteditable="true">
            <p class="padding-top5px">致（监理工程师）：<input type="text" v-model="nameList2[1].fullName" disabled></p><br/>
            <p style="text-indent: 30px;">根据合同要求，我们已完成<input type="text" class="title-input" v-model="obj.m2">放样作业，清单如下，请予审查。</p><br/><br/><br/><br/><br/><br/>
            <div class="dateDiv t-right"> 承包人： <input type="text" v-model="obj.m3">
              <div class="block height-25 display-lnl" >
                <span class="demonstration">日期：</span>
                <el-date-picker
                  v-model="obj.m4"
                  type="date" value-format="yyyy-MM-dd" class="input-140 height-25">
                </el-date-picker>
              </div>
            </div><br/>
          </td>
        </tr>
        <tr class="public-tabel">
          <td width="91" ><p>桩号或位置 </p></td>
          <td width="122" ><p>工程或部位名称 </p></td>
          <td width="284" ><p>放 样 内 容 </p></td>
          <td width="68" ><p>备 注 </p></td>
        </tr>
        <tr class="public-tabel" v-for="(val,index) in controlArr" :key="index">
          <td width="91" contenteditable="true">
            <p><input type="text" class="td-input" v-model="val.s1"></p>
          </td>
          <td width="122" >
            <p><input type="text" class="td-input" v-model="val.s2"></p>
          </td>
          <td width="284" >
            <p><input type="text" class="td-input" v-model="val.s3"></p>
          </td>
          <td width="68" >
            <p><input type="text" class="td-input" v-model="val.s4"></p>
          </td>
        </tr>

        <tr>
          <td width="566"  colspan="4">
            <p style="margin: 10px 0px 10px 70px;"><span>附件：1、测量及放样资料 </span><br>
              <span style="margin-left: 38px;">2、导线点、水准点调整一览表； </span><br>
              <span style="margin-left: 38px;">3、控制桩及控制点的护桩设置一览表及草图；</span>
            </p>
          </td>
        </tr>
        <tr>
          <td width="566"  colspan="4">
            <p class="padding-top5px">监理员意见：
              <textarea name="" cols="30" rows="11" v-model="nameList1[0].auditOpinion" disabled></textarea>
            </p>
            <p align="right">签 字：<input type="text" v-model="nameList1[1].fullName" disabled>日期：<input type="text" class="input-80" v-model="nameList1[0].auditTime" disabled></p><br/>
          </td>
        </tr>
        <tr>
          <td width="566"  colspan="4">
            <p class="padding-top5px">监理工程师结论：
                <textarea name="" cols="30" rows="11" v-model="nameList2[0].auditOpinion" disabled></textarea>
            </p>
            <p class="t-right padding-top5px">监理工程师 ： <input type="text" v-model="nameList2[1].fullName" disabled>日期： <input type="text" class="input-80" v-model="nameList2[0].auditTime" disabled></p><br/>
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
    name: "A-01",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {
          subList: []
        },
        controlArr:[],
        //rec
        rec:{
           recNo:'',
          tableId:4,
          contractId:0,
          constDate:'',
          testDate:'',
          projPartsId:'1',
          curStatus:0,
          operUserId:1,
          signatory1:'',
          signatory2:'',
          signatory3:'',
          signatory4:''
        },
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        headerInfo:{}, //表头信息
        id: 0,

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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==39){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==26){
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
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      //初始化页面从表方法
      setSubObj(){
        for(var i=0;i<4;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A01/findA01ById', {
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
            if (this.obj.subList != undefined && this.obj.subList.length >0){
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/A01/saveA01", this.$qs.stringify({
          a01:JSON.stringify(this.obj),
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/A01/updateA01', this.$qs.stringify({
          a01:JSON.stringify(this.obj),
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
        this.axios.get('/HiQuality/A01/deleteA01', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.controlArr = [];
            this.obj = {subList:[]}
            this.isAdd = true;
            this.setSubObj();
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
