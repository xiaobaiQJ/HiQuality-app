<template>
    <div class="A50 text-center main-a lengthways-a">
      <p class="top-name-p width-775">A-50</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>桥涵、隧道工程责任备忘录</h3>
      <p class="top-name-p width-775">责查表-06</p>
      <div class="text-left width-775">
        <span>施工单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>施工合同号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-775">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span>监理合同号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-45">
          <tr >
            <td width="659" valign="center" colspan="7" ><p align="center">第一领导责任人</p> </td>
          </tr>
          <tr >
            <td width="86" valign="center" ><p align="center" >姓名 </p></td>
            <td width="165" valign="center" colspan="2" ><p align="center" >职 务 </p></td>
            <td width="407" valign="center" colspan="4" ><p align="center" >备 注 </p></td>
          </tr>
          <tr >
            <td width="85" valign="center" ><p><input type="text" v-model="obj.m1"></p></td>
            <td width="175" valign="center" colspan="2" ><p align="center" >施工单位项目经理 </p></td>
            <td width="391" valign="center" colspan="4" ><p><input type="text" v-model="obj.m2"></p></td>
          </tr>
          <tr >
            <td width="85" valign="center" ><p><input type="text" v-model="obj.m3"></p></td>
            <td width="175" valign="center" colspan="2" ><p align="center" >总经理工程师 </p></td>
            <td width="391" valign="center" colspan="4" ><p><input type="text" v-model="obj.m4"></p></td>
          </tr>
          <tr >
            <td width="85" valign="center" ><p ><input type="text" v-model="obj.m5"></p></td>
            <td width="175" valign="center" colspan="2" ><p align="center" >业主 </p></td>
            <td width="391" valign="center" colspan="4" ><p><input type="text" v-model="obj.m6"></p></td>
          </tr>
          <tr >
            <td width="85" valign="center" ><p><input type="text" v-model="obj.m7"></p></td>
            <td width="175" valign="center" colspan="2" ><p><input type="text" v-model="obj.m8"></p></td>
            <td width="391" valign="center" colspan="4" ><p><input type="text" v-model="obj.m9"></p></td>
          </tr>
          <tr >
            <td width="659" valign="center" colspan="7" ><p align="center" >现场直接责任人 </p></td>
          </tr>
          <tr >
            <td width="136" valign="center" colspan="2" ><p align="center" >起止桩号及部位 </p></td>
            <td width="126" valign="center" colspan="2" ><p align="center" >结构物名称及部位 </p></td>
            <td width="131" valign="center" ><p align="center" >施工单位责任人 </p></td>
            <td width="131" valign="center" ><p align="center" >监理单位责任人 </p></td>
            <td width="131" valign="center" ><p align="center" >备注 </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="136" valign="center" colspan="2" ><p><input type="text" v-model="val.s1"></p></td>
            <td width="126" valign="center" colspan="2"><p><input type="text" v-model="val.s2"></p></td>
            <td width="131" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
            <td width="131" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
            <td width="131" valign="center" ><p><input type="text" v-model="val.s5"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-775">注：其它责任人查阅A-45、A-46表<br clear="all">
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
    name: "A-50",
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
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i=0;i<10;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A50/findA50ById', {
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
        this.axios.post("/HiQuality/A50/saveA50", this.$qs.stringify({
          a50:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A50/updateA50', this.$qs.stringify({
          a50:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A50/deleteA50', {
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
