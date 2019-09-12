<template>
  <div class="AQ-09 text-center">
    <p class="p-lineheight">
      <img width="30" height="30" src="../../assets/files/imgs/aq/clip_image002.jpg" class="logo-img"/>
      贵州省公路工程集团有限公司
    </p>
    <p class="p-lineheight">XX高速公路XX合同段项目部</p>
    <h3>安 全 检 查 记 录</h3>
    <div class="t-left margin-auto width-623">
      <p>资料编号：<input type="text" v-model="obj.m9"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel" width="630">
      <tr>
        <td width="138"><p align="center">检查部门/单位</p> </td>
        <td width="187"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="138"><p align="center">受检项目/部位 </p></td>
        <td width="179"><p align="center"><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="138"><p align="center">检查时间 </p></td>
        <td width="187">
          <div class="block">
            <el-date-picker v-model="obj.m3" type="date" size="mini" value-format="yyyy-MM-dd" class="input-100"></el-date-picker>
          </div>
        </td>
        <td width="138"><p align="center">检查方式 </p></td>
        <td width="179"><p align="center"><input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr>
        <td width="138"><p align="center">检查人员 </p></td>
        <td width="504" colspan="3"><p align="center"><input type="text" v-model="obj.m5"></p></td>
      </tr>
      <tr>
        <td width="643" colspan="4" valign="top">
          <p align="left">检查内容：
            <textarea name="" cols="30" rows="22" v-model="obj.m6"></textarea>
          </p>
        </td>
      </tr>
      <tr>
        <td width="643" colspan="4" valign="top">
          <p align="left">存在问题整改要求及整改时限：
            <textarea name="" cols="30" rows="22" v-model="obj.m7"></textarea>
          </p>
          <p align="right">整改责任人：<input type="text" v-model="obj.m8" class="height-25 input-80"></p>
          <br/>
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-623">备注：本表用于项目部内部检查，检查人员、整改责任人需为本人签字。 </p>
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
    name: "AQ-09",
    data(){
      return{
        isAdd: true,
        obj:{},
        rec: {
          recNo:' ',
          tableId:4,
          contracId:0,
          constDate:'',
          testDate:'',
          projPartsId:'1',
          curStatus:0,
          operUserId:1
        },
        id:'1'
      }

    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
    },
    mounted(){
      this.getData();
    },
    methods:{
      //查询
      getData() {
        this.axios.get('/HiQuality/aq09/findById', {
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
      //新增
      addData(){
        this.axios.post('/HiQuality/aq09/save',this.$qs.stringify({
          bBtAq09M:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
        .then(res=>{
          console.log("新增接口")
          console.log(res);
          if(res.data.status==200){
            this.isAdd = false;
            this.$tost.add();
            this.$skip.skipProcess();
          }
        })
      },
      //修改
      updateData(){
        this.axios.post('/HiQuality/aq09/update',this.$qs.stringify({
          bBtAq09M:JSON.stringify(this.obj)
        }))
        .then(res=>{
          console.log("修改接口")
          console.log(res);
          if(res.data.status==200){
            this.isAdd = false;
            this.$tost.edit();
            this.$skip.skipProcess();
          }
        })
      },
      //删除
      deleteData(){
        this.axios.get('/HiQuality/aq09/deleteById',{
          params:{
            id:this.id
          }
        }).then(res=>{
          console.log("删除接口")
          console.log(res);
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
