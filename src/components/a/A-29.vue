<template>
    <div class="A29 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-623">A-29</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>承包人每周工作计划</h3>
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
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-30">
          <tr >
            <td width="229" colspan="3" rowspan="2" >
              <p align="top">工作计划日期：</p>
              <input type="text" v-model="obj.m1">
            </td>
            <td width="165" >
              <p >承包人递交日期： </p>
              <div class="block">
                <el-date-picker v-model="obj.m2" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
            <td width="209" colspan="3" >
              <p >监理收到日期：</p>
              <input type="text" v-model="nameList1[0].auditTime" class="input-120" disabled>
            </td>
          </tr>
          <tr >
            <td width="165" ><p >签字：<input type="text" v-model="obj.m3" class="input-120"></p></td>
            <td width="209" colspan="3" >
              <p >签字：<input type="text" v-model="nameList1[1].fullName" class="input-120"></p>
            </td>
          </tr>
          <tr >
            <td width="229" valign="center" colspan="3" ><p align="center" >计划施工项目 </p></td>
            <td width="165" valign="center" rowspan="2" ><p >施工项目说明 </p></td>
            <td width="209" valign="center" colspan="3" ><p align="center" >申请监理安排 </p></td>
          </tr>
          <tr >
            <td width="71" ><p align="center" >桩 号 </p></td>
            <td width="71" ><p align="center" >部 位 </p></td>
            <td width="59" ><p align="center" >日期 </p></td>
            <td width="82" ><p align="center" >检 查 </p></td>
            <td width="71" valign="center" ><p align="center" >试 验 </p></td>
            <td width="55" valign="center" ><p align="center" >测 量 </p></td>
          </tr>
          <tr  v-for="(val,index) in controlArr" :key="index">
            <td width="71" >
              <p><input type="text" v-model="val.s1"></p>
            </td>
            <td width="71" >
              <p align="center"><input type="text" v-model="val.s2"></p>
            </td>
            <td width="59" >
              <p align="center"><input type="text" v-model="val.s3"></p>
            </td>
            <td width="165" >
              <p align="center"><input type="text" v-model="val.s4"></p>
            </td>
            <td width="82" >
              <p align="center"><input type="text" v-model="val.s5"></p>
            </td>
            <td width="71" >
              <p align="center"><input type="text" v-model="val.s6"></p>
            </td>
            <td width="55" >
              <p align="center"><input type="text" v-model="val.s7"></p>
            </td>
          </tr>
          <tr >
            <td width="576" colspan="7" >
              <p >监理工程师意见：
                <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
              </p>
              <p align="center" >签字：<input type="text" class="input-120" v-model="nameList1[1].fullName" disabled> 日期：<input type="text" v-model="nameList1[0].auditTime" disabled> </p>
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
    name: "A-29",
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
          operUserId:1
        },
        headerInfo:{}, //表头信息
        auditTypeIdArr:[39,26],
        nameList:[],
        nameList1:[{},{}],
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
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==26){
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
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i=0;i<14;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A29/findA29ById', {
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
        this.axios.post("/HiQuality/A29/saveA29", this.$qs.stringify({
          a29:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A29/updateA29', this.$qs.stringify({
          a29:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A29/deleteA29', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr = [];
            this.obj = {subList:[]}
            this.setSubObj();
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
