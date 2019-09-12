<template>
  <div class="AKG-catalog text-center lengthways-a">
    <p align="center"><strong>目录</strong></p>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <td width="420"><p align="center">内    容 </p></td>
        <td width="182"><p align="center">页  数 </p></td>
      </tr>
      <tr>
        <td width="420"><p>单项工程开工通知书 </p></td>
        <td width="182"><p><input type="text" v-model="obj.m1"></p></td>
      </tr>
      <tr>
        <td width="420"><p>单项工程批复工程数量 </p></td>
        <td width="182"><p><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr>
        <td width="420"><p><a name="_Toc393461067" id="_Toc393461067">工程分项开工申请批复单</a>① </p></td>
        <td width="182"><p><input type="text" v-model="obj.m3"></p></td>
      </tr>
      <tr>
        <td width="420"><p>施工组织计划方案② </p></td>
        <td width="182"><p><input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr>
        <td width="420"><p>施工放样报验单③ </p></td>
        <td width="182"><p><input type="text" v-model="obj.m5"></p></td>
      </tr>
      <tr>
        <td width="420"><p>进场人员一览表④ </p></td>
        <td width="182"><p><input type="text" v-model="obj.m6"></p></td>
      </tr>
      <tr>
        <td width="420"><p>进场机械一览表 </p></td>
        <td width="182"><p><input type="text" v-model="obj.m7"></p></td>
      </tr>
      <tr>
        <td width="420"><p>进场材料一览表⑤ </p></td>
        <td width="182"><p><input type="text" v-model="obj.m8"></p></td>
      </tr>
      <tr>
        <td width="420"><p>材料试验一览表⑥ </p></td>
        <td width="182"><p><input type="text" v-model="obj.m9"></p></td>
      </tr>
      <tr>
        <td width="420"><p>进场材料监理抽检试验报告⑦ </p></td>
        <td width="182"><p><input type="text" v-model="obj.m10"></p></td>
      </tr>
      <tr>
        <td width="420"><p>进场材料承包人自检报告⑧ </p></td>
        <td width="182"><p><input type="text" v-model="obj.m11"></p></td>
      </tr>
      <tr>
        <td width="420"><p>标准试验批复 </p></td>
        <td width="182"><p><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr>
        <td width="420"><p>图纸 </p></td>
        <td width="182"><p><input type="text" v-model="obj.m13"></p></td>
      </tr>
    </table>
    <p>注：①详见《监表3  工程分项开工申请批复单》 <br />
      ②经项目公司审批、监理办审核的施工组织计划方案 <br />
      ③详见《监表1  施工放样报验单》 <br />
      ④合同段主要管理人员和施工班组主要人员 <br />
      ⑤表明需要的各种材料的规格、数量及相应的每批采购进场数量，以及来源、产地、厂家、进场时间或预计进场时间及其用途（使用在何工程或部位） <br />
      表明应进行的试验及其试验规程和标准； <br />
      ⑥包括抽检试验表 <br />
      ⑦包括自检试验表 </p>
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
    name: "AKG-catalog",
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
        id: '7'    //主表id
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      this.$publicFun.getRecInfo()
    },
    computed: {
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch:{
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
        this.axios.get('/HiQuality/kgCatalogue/findByRecId', {
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
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post('/HiQuality/kgCatalogue/saveKgCatalogue', this.$qs.stringify({
          kgCatalogue:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
          .then(res => {
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
        this.axios.post('/HiQuality/kgCatalogue/updateKgCatalogue', this.$qs.stringify({
          kgCatalogue:JSON.stringify(this.obj)
        }))
          .then(res => {
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
        this.axios.delete('/HiQuality/kgCatalogue/deleteById', {
          params: {
            id: this.id,
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
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
