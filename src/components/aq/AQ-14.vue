<template>
  <div class="AQ-14 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>项目重大危险源识别汇总表</h3>
    <div class="t-right margin-auto width-623">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td width="79" valign="top"><p align="center">单位<br />名称</p> </td>
        <td width="200" valign="top"><p align="center"><input type="text" v-model="headerInfo.unitName" disabled></p></td>
        <td width="71" valign="top"><p align="center">项目<br />名称 </p></td>
        <td width="213" colspan="2" ><input type="text" v-model="obj.m6"></td>
      </tr>
      <tr>
        <td width="79" valign="top"><p align="center">编号 </p></td>
        <td width="200" valign="top"><p align="center">危险源名称、场所 </p></td>
        <td width="71" valign="top"><p align="center">风险等级 </p></td>
        <td width="213" colspan="2" valign="top"><p align="center">控制措施要点 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="79" valign="top"><p align="center">{{index+1}}</p></td>
        <td width="200" valign="top"><p align="center"><input type="text" v-model="val.s1"></p></td>
        <td width="71" valign="top"><p align="center"><input type="text" v-model="val.s2"></p></td>
        <td width="213" colspan="2" valign="top"><p ><input type="text" v-model="val.s3"></p></td>
      </tr>
      <tr>
        <td width="79" valign="top"><p>项目经理 </p></td>
        <td width="200" valign="top"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="148" colspan="2" valign="top"><p align="center">项目技术负责人 </p></td>
        <td width="137" valign="top"><p align="center"><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="79" valign="top"><p align="center">填报人 </p></td>
        <td width="200" valign="top"><p align="center"><input type="text" v-model="obj.m3"></p></td>
        <td width="148" colspan="2" valign="top"><p align="center">日期 </p></td>
        <td width="137" valign="top"><div class="block height-30 t-left display-lnl">
          <el-date-picker class="input-140"
                          size="mini"
                          v-model="obj.m4" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div></td>
      </tr>
    </table>
    <p class="bot-hint-p width-623">注：本表由施工单位填写，建设单位、监理单位、施工单位各存一份。 </p>
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
    name: "AQ-14",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //从表
        subObj: {},
        //主表
        obj: {
          subList: []
        },
        id: '1',
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
      };
      this.$publicFun.getRecInfo()
    },
    mounted() {
      for(var i=0;i<7;i++){
        let subObj = {};
        this.controlArr.push(subObj);
      }
      this.getData();
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
    methods: {

      //查询
      getData() {
        this.axios.get('/HiQuality/Aq14/findAq14ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            let arr = []
            this.obj.subList.forEach((item) => {
              arr.push(item)
            })
            this.controlArr = arr;
            console.log(this.controlArr)
            this.isAdd = false;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/Aq14/saveAq14", this.$qs.stringify({
          aq14:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
      },

      //修改
      updateData() {
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/Aq14/updateAq14', this.$qs.stringify({
          aq14:JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            this.getData();
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/Aq14/deleteAq14', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
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
