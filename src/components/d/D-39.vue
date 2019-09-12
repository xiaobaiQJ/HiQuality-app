<template>
  <div class="D-39 text-center">
  <p class="top-name-p width-1023">D-39</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>沉 井 下 沉 施 工 记 录</strong><strong> </strong></h3>
    <div class="public-tilte flex-r margin-auto width-1023">
      <div>
        <p>承包单位：<input type="text" v-model="headerInfo.unitName" class="input-80" disabled></p>
        <p>监理单位：<input type="text" v-model="headerInfo.unitName2" class="input-80" disabled></p>
      </div>
      <div>
        <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" class="input-80" disabled></p>
        <p>沉井材料：<input type="text" class="input-80" v-model="obj.m4"></p>
      </div>
      <div>
        <p>沉井名称：<input type="text" class="input-80" v-model="obj.m1"></p>
        <p>沉井式样：<input type="text" class="input-80" v-model="obj.m5"></p>
      </div>
      <div>
        <p>沉井高度：<input type="text" class="input-80" v-model="obj.m2"></p>
        <p>抽水情况：<input type="text" class="input-80" v-model="obj.m6"></p>
      </div>
      <div>
        <p>除土方法：<input type="text" class="input-80" v-model="obj.m3"></p>
        <p>围墙情况及材料：<input type="text" class="input-80" v-model="obj.m7"></p>
      </div>
      <div>
        <p>编号：<input type="text" class="input-80" v-model="rec.recNo"></p>
      </div>
    </div>
    <table border="1" cellspacing="0" class="public-tabel" >
      <tr >
        <td width="120" valign="center" colspan="4" ><br />
          下沉时间 </td>
        <td width="47" valign="center" rowspan="2" ><p align="center" >起讫 </p></td>
        <td width="37" valign="center" rowspan="2" ><p align="center" >下沉情况 </p></td>
        <td width="47" valign="center" rowspan="2" ><p align="center" >地层描述 </p></td>
        <td width="94" valign="center" colspan="2" ><p align="center" >下沉量(cm) </p></td>
        <td width="75" valign="center" rowspan="2" ><p align="center" >刃脚底面平均标高 <br />
          (m) </p></td>
        <td width="75" valign="center" colspan="2" ><p align="center" >沉井标高(m) </p></td>
        <td width="94" valign="center" colspan="2" ><p align="center" >水面标高(m) </p></td>
        <td width="202" valign="center" colspan="3" ><p align="center" >倾  斜 </p></td>
        <td width="159" valign="center" colspan="2" ><p align="center" >位 移(cm) </p></td>
      </tr>
      <tr >
        <td width="35" valign="center" ><p align="center" >月 </p></td>
        <td width="28" valign="center" ><p align="center" >日 </p></td>
        <td width="28" valign="center" ><p align="center" >时 </p></td>
        <td width="28" valign="center" ><p align="center" >分 </p></td>
        <td width="47" valign="center" ><p align="center" >本次 </p></td>
        <td width="47" valign="center" ><p align="center" >累计 </p></td>
        <td width="37" valign="center" ><p align="center" >最高点 </p></td>
        <td width="37" valign="center" ><p align="center" >最低点 </p></td>
        <td width="47" valign="center" ><p align="center" >井内 </p></td>
        <td width="47" valign="center" ><p align="center" >井外 </p></td>
        <td width="66" valign="center" ><p align="center" >上下游高差（cm） </p></td>
        <td width="66" valign="center" ><p align="center" >左右向高 差（cm） </p></td>
        <td width="70" valign="center" ><p align="center" >最大倾斜 度（%） </p></td>
        <td width="74" valign="center" ><p align="center" >顶 面 <br />
          中 心 </p></td>
        <td width="84" valign="center" ><p align="center" >底 面 <br />
          中 心 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="35" valign="top" ><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="28" valign="top" ><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="28" valign="top" ><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="28" valign="top" ><p><input type="text" class="td-input" v-model="val.s1"></p></td>
        <td width="47" valign="top" ><p><input type="text" class="td-input" v-model="val.s2"></p></td>
        <td width="37" valign="top" ><p><input type="text" class="td-input" v-model="val.s3"></p></td>
        <td width="47" valign="top" ><p><input type="text" class="td-input" v-model="val.s4"></p></td>
        <td width="47" valign="top" ><p><input type="text" class="td-input" v-model="val.s5"></p></td>
        <td width="47" valign="top" ><p><input type="text" class="td-input" v-model="val.s6"></p></td>
        <td width="75" valign="top" ><p><input type="text" class="td-input" v-model="val.s7"></p></td>
        <td width="37" valign="top" ><p><input type="text" class="td-input" v-model="val.s8"></p></td>
        <td width="37" valign="top" ><p><input type="text" class="td-input" v-model="val.s9"></p></td>
        <td width="47" valign="top" ><p><input type="text" class="td-input" v-model="val.s10"></p></td>
        <td width="47" valign="top" ><p><input type="text" class="td-input" v-model="val.s11"></p></td>
        <td width="66" valign="top" ><p><input type="text" class="td-input" v-model="val.s12"></p></td>
        <td width="66" valign="top" ><p><input type="text" class="td-input" v-model="val.s13"></p></td>
        <td width="70" valign="top" ><p><input type="text" class="td-input" v-model="val.s14"></p></td>
        <td width="74" valign="top" ><p><input type="text" class="td-input" v-model="val.s15"></p></td>
        <td width="84" valign="top" ><p><input type="text" class="td-input" v-model="val.s16"></p></td>
      </tr>
    </table>
  <p class="bot-hint-p width-1023">施工单位技术负责人：<input type="text" v-model="obj.m8">记录：<input type="text" v-model="obj.m9">监理员：<input type="text" v-model="nameList1[1].fullName" disabled></p>
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
        name: "D-39",
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id: '1'     //主表id
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
        //获取rec记录信息
        this.$publicFun.getRecInfo();
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
                if (item[1].auditTypeId == 39) {
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
          for(var i= 0; i<9;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d39/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList = res.data.data.sub;
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
          if (JSON.stringify(this.obj) == '{}' || JSON.stringify(this.val) == '{}') {
            return
          }
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/d39/save", this.$qs.stringify({
            BBtD39M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
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
          this.axios.post('/HiQuality/d39/update', this.$qs.stringify({
            BBtD39M:JSON.stringify(this.obj)
          })).then(res=>{
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
        deleteData()
        {
          this.axios.get('/HiQuality/d39/deleteById', {
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
