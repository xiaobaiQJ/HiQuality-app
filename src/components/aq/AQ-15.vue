<template>
  <div class="AQ-15 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>项目重大危险源控制措施统计表</h3>
    <div class="t-right margin-auto width-696">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr class="public-tabel">
        <td width="67" valign="top"><p align="center">单位<br />名称</p> </td>
        <td width="217" colspan="2" valign="top"><p align="center"><input type="text" v-model="headerInfo.unitName" disabled></p></td>
        <td width="59" valign="top"><p align="center">项目<br />名称 </p></td>
        <td width="228" colspan="2" ><input type="text" v-model="obj.m10"></td>
      </tr>
      <tr class="public-tabel">
        <td width="67"><p>危险源<br />编号 </p></td>
        <td width="217" colspan="2" valign="top"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="59" valign="bottom"><p>危险源<br />名称</p></td>
        <td width="228" colspan="2" valign="top"><p align="center"><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="67"><p>危险源出现的场所与部位 </p></td>
        <td width="504" colspan="5"><p><textarea name="" cols="30" rows="4" v-model="obj.m3"></textarea></p></td>
      </tr>
      <tr>
        <td width="67"><p>危险源的控制措施 </p></td>
        <td width="504" colspan="5" valign="top">
          <p align="center"><textarea name="" cols="30" rows="20" v-model="obj.m4"></textarea></p>
        </td>
      </tr>
      <tr class="public-tabel">
        <td width="127" colspan="2" valign="top"><p align="center">项目经理 </p></td>
        <td width="157" valign="top"><p><input type="text" class="name-input" v-model="obj.m5"></p></td>
        <td width="124" colspan="2" valign="top"><p align="center">项目技术负责人 </p></td>
        <td width="163" valign="top"><p><input type="text" class="name-input" v-model="obj.m6"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="127" colspan="2" valign="top"><p align="center">填报人 </p></td>
        <td width="157" valign="top"><p><input type="text" class="name-input" v-model="obj.m7"></p></td>
        <td width="124" colspan="2" valign="top"><p align="center">日期 </p></td>
        <td width="163" valign="top"><div class="block height-30 t-left display-lnl">
          <el-date-picker class="input-140"
                          size="mini"
                          v-model="obj.m8" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div></td>
      </tr>
    </table>
    <p class="bot-hint-p width-696">注：本表由施工单位填写，建设单位、监理单位、施工单位各存一份。 </p>
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
  import {splitDate, joinDate} from '../../utils/utils'
  export default {
    name: "AQ-15",
    data() {
      return {
        isAdd: true,
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
        id: '3',
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
      },
    },
    methods: {

      //查询
      getData() {
        this.axios.get('/HiQuality/Aq15/findAq15ById', {
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
        this.axios.post("/HiQuality/Aq15/saveAq15", this.$qs.stringify({
          aq15:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/Aq15/updateAq15', this.$qs.stringify({
          aq15:JSON.stringify(this.obj)
        }))
        .then(res => {
            console.log("修改接口")
            console.log(res)
          if (res.data.status == 200) {
            this.isAdd = false;
            this.getData();
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/Aq15/deleteAq15', {
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
