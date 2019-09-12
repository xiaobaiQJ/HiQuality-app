<template>
    <div class="A70 text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-734">A-70</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>整 改 通 知 书</h3>
      <div class="text-left width-734">
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr class="public-tabel">
            <td width="315">
              <p class="t-left">施工单位：<input type="text" v-model="headerInfo.unitName" class="input-200" disabled></p>
            </td>
            <td width="315" colspan="2" >
              <p class="t-left">施工桩号部位：<input type="text" v-model="obj.m2" class="input-200"></p>
            </td>
          </tr>
          <tr >
            <td width="645" valign="top" colspan="3" ><p >整改问题： </p>
              <textarea name="" cols="30" rows="23" v-model="obj.m3"></textarea>
              <p >附件：相关照片 </p>
            </td>
          </tr>
          <tr >
            <td width="645" valign="top" colspan="3" ><p >整改措施及意见： </p>
              <textarea name="" cols="30" rows="23" v-model="obj.m4"></textarea>
            </td>
          </tr>
          <tr >
            <td width="322" valign="top" colspan="2" >
              <p >签发人：<input type="text" v-model="obj.m5"></p>
              <p >&nbsp;</p><br /><br />
              <div align="right">
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m6" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
            </td>
            <td width="322" valign="top" >
              <p >签收人：<input type="text" v-model="obj.m7"> </p>
              <p >&nbsp;</p><br /><br />
              <div align="right">
                <div class="block display-lnl height-25 input-160">
                  <span class="demonstration">日期：</span>
                  <el-date-picker class="input-140"
                                  size="mini"
                                  v-model="obj.m8" type="date"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </div>
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
    name: "A-70",
    data(){
      return{
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
        //主表对象
        obj:{

        },
        headerInfo:{}, //表头信息
        id:''
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
      getData() {
        this.axios.get('/HiQuality/A70/findA70ById', {
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
            this.getData();
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A70/saveA70", this.$qs.stringify({
          a70:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A70/updateA70',this.$qs.stringify({
          a70:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A70/deleteA70', {
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
