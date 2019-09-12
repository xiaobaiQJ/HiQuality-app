<template>
  <div class="AQ-10 text-center">
    <p class="p-lineheight">
      <img width="30" height="30" src="../../assets/files/imgs/aq/clip_image002.jpg" class="logo-img"/>
      贵州省公路工程集团有限公司
    </p>
    <p class="p-lineheight">XX高速公路XX合同段项目部</p>
    <h3>安全隐患整改通知单</h3>
    <div class="t-left margin-auto width-852">
      <p>资料编号：<input type="text" v-model="obj.m9"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr class="public-tabel">
        <td width="100"><P align="center">检查单位 </P></td>
        <td width="156" colspan="2"><p><input type="text" class="name-input" v-model="obj.m1"></p></td>
        <td width="147" colspan="2"><p align="center">受检项目/部位 </p></td>
        <td width="256" colspan="2"><p ><input type="text" class="name-input" v-model="obj.m2"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="100"><p align="center">检查时间 </p></td>
        <td width="156" colspan="2">
          <div class="block">
            <el-date-picker v-model="obj.m3" type="date" size="mini" value-format="yyyy-MM-dd" class="input-100"></el-date-picker>
          </div>
        </td>
        <td width="147" colspan="2"><p align="center">检查人员 </p></td>
        <td width="256" colspan="2"><p><input type="text" class="name-input" v-model="obj.m4"></p></td>
      </tr>
      <tr>
        <td width="660" colspan="7" valign="top"><p align="left">存在问题： </p>
          <p><textarea name="" cols="30" rows="10" v-model="obj.m5"></textarea></p>
        </td>
      </tr>
      <tr>
        <td width="660" colspan="7" valign="top"><p align="left">整改要求： </p>
          <p><textarea name="" cols="30" rows="10" v-model="obj.m6"></textarea></p>
        </td>
      </tr>
      <tr class="public-tabel">
        <td width="120" colspan="2"><p align="center">整改责任人 </p></td>
        <td width="178" colspan="2"><p><input type="text" class="name-input" v-model="obj.m7"></p></td>
        <td width="127" colspan="2"><p align="center">整改期限 </p></td>
        <td width="235"><p ><input type="text" class="name-input" v-model="obj.m8"></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-852">备注：本表用于项目部内部检查下发的整改通知，检查人员、整改责任人需为本人签认。</p>
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
    name: "AQ-10",
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
        id: '3'
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
    },
    mounted() {
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq10/findAq10ById', {
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
        this.axios.post("/HiQuality/Aq10/saveAq10", this.$qs.stringify({
          aq10:JSON.stringify(this.obj),
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
        this.axios.get('/HiQuality/Aq10/updateAq10', this.$qs.stringify({
          aq10:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/Aq10/deleteAq10', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if(res.data.status==200){
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
