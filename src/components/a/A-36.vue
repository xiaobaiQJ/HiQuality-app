<template>
  <div class="A36 text-center main-a lengthways-a table-padding5px ad-textarea">
    <p class="top-name-p width-623">A-36</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>索赔费用详细计算书</h3>
    <div class="text-left">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel">
        <tr>
          <td width="111" valign="center"><p align="center">费用项目</p></td>
          <td width="292" valign="center"><p align="center">计算式 </p></td>
          <td width="103" valign="center"><p align="center">金额 </p></td>
          <td width="103" valign="center"><p align="center">备注 </p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>1．闲置人工费</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m1"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m2"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m3"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>2．闲置设备费</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m4"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m5"></p></td>
          <td width="103" valign="center" rowspan="6"><p align="center"><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>2.1</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m7"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m8"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>2.2</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m9"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m10"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>2.3</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m11"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m12"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>2.4</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m13"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m14"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>2.5</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m15"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m16"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>3．间接费</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m17"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m18"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m19"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>4．利 润</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m20"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m21"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m22"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>5．税 金</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m23"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m24"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m25"></p></td>
        </tr>
        <tr>
          <td width="111" valign="center"><p>6．其 它</p></td>
          <td width="292" valign="center"><p align="center"><input type="text" v-model="obj.m26"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m27"></p></td>
          <td width="103" valign="center"><p align="center"><input type="text" v-model="obj.m28"></p></td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-623">
      承包人计算：<input type="text" v-model="obj.m29" class="input-80"> 监理工程师复核：<input type="text" v-model="obj.m30" class="input-80"> 项目公司：<input type="text" v-model="obj.m31" class="input-80">
    </p>
    <p align="center">&nbsp;</p>
    <p class="bot-hint-p width-623">注：此表若填写不完或计算式过长，可增设附页详细填写计算过程。 </p>
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
    name: "A-36",
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
        id: '2'
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
        this.axios.get('/HiQuality/A36/findA36ById', {
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
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A36/saveA36", this.$qs.stringify({
          a36:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A36/updateA36',this.$qs.stringify({
          a36:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A36/deleteA36', {
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
td{
  height: 60px!important;
}
</style>
