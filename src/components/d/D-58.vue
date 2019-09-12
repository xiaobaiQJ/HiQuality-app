<template>
    <div class="D-58 text-center">
      <p class="top-name-p width-662">D-58</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>水泥混凝土路面纵缝、横缝顺直度检测记录表</strong><strong> </strong></h3>
      <div class="text-left width-662">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-662">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" class="public-tabel" >
        <tr >
          <td width="648" valign="center" colspan="7" ><br />
            纵 缝 顺 直 度 </td>
        </tr>
        <tr >
          <td width="108" valign="center" ><p align="center" >起讫桩号 </p></td>
          <td width="540" valign="center" colspan="6" ><p align="center" >实  测  值 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr1" :key="'contr1'+index">
          <td width="108" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
        </tr>

        <tr >
          <td width="648" valign="center" colspan="7" ><p align="center" >横 缝 顺 直 度 </p></td>
        </tr>
        <tr >
          <td width="108" valign="center" ><p align="center" >起讫桩号 </p></td>
          <td width="540" valign="center" colspan="6" ><p align="center" >实  测  值 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr2" :key="'contr2'+index">
          <td width="108" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="90" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
        </tr>
      </table>
      <p class="bot-hint-p width-662">施工单位技术负责人：<input type="text" v-model="obj.m1" class="input-80"> 测量：<input type="text" v-model="obj.m2" class="input-80">记录：<input type="text" v-model="obj.m3" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50">
      </p>
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
        name: "D-58",
      data() {
        return {
          isAdd: true,
          controlArr1: [],
          controlArr2: [],
          //主表
          obj: {
            subList1: [],
            subList2: []
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
      created() {
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
      mounted(){
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<10;i++){
            let subObj1={};
            let subObj2={};
            if(i<9){
              this.controlArr2.push(subObj2);
            }
            this.controlArr1.push(subObj1);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d58/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList1 = res.data.data.sub1;
              this.obj.subList2 = res.data.data.sub2;
              this.isAdd = false;
              let arr1 = []
              let arr2 = []
              if (this.obj.subList1 != undefined && this.obj.subList1.length >0){
                this.obj.subList1.forEach((item) => {
                  arr1.push(item)
                })
                this.controlArr1 = arr1;
              }
              if (this.obj.subList2 != undefined && this.obj.subList2.length >0){
                this.obj.subList2.forEach((item) => {
                  arr2.push(item)
                })
                this.controlArr2 = arr2;
              }
            }
          })
        },
        //插入
        addData() {
          this.obj.subList1 = this.controlArr1;
          this.obj.subList2 = this.controlArr2;
          this.axios.post('/HiQuality/d58/save',this.$qs.stringify({
            BBtD58M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
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
          this.obj.subList1 = this.controlArr1;
          this.obj.subList2 = this.controlArr2;
          this.axios.post('/HiQuality/d58/update',this.$qs.stringify({
            BBtD58M:JSON.stringify(this.obj)
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
        deleteData() {
          this.axios.get('/HiQuality/d58/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.controlArr1 = [];
              this.controlArr2 = [];
              this.obj = {subList1:[],subList2:[]}
              this.isAdd = true;
              this.setSubObj();
            }

          })
        }
      }

    }
</script>

<style scoped>
.sub-btn{

}
</style>
