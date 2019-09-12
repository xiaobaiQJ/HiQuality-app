<template>
  <div class="AKG-inform text-center lengthways-a">

    <p align="center">单项工程开工通知 </p>
    <p>编号（NO.）: <input type="text" class="title-input" v-model="obj.m1"></p>
    <p align="left"><input type="text" class="title-input" v-model="obj.m2">：</p>
     <p > NO.<input type="text" class="title-input" v-model="obj.m3">报告收悉,同意K
       <input type="text" class="title-input" v-model="obj.m4">+<input type="text" class="title-input" v-model="obj.m5"> 至K
       <input type="text" class="title-input" v-model="obj.m6">+ <input type="text" class="title-input" v-model="obj.m7">
       <input type="text" class="title-input" v-model="obj.m8">工程于
       <el-date-picker class="title-input input-100"
                       size="mini"
                       v-model="obj.m9"
                       type="date"
                       placeholder="年   月   日"
                       format="yyyy年MM月dd日"
                       value-format="yyyy-MM-dd">
       </el-date-picker>
       开工,兹委派<input type="text" class="title-input" v-model="obj.m10"> 先生为该项目驻地工程师,
       <input type="text" class="title-input" v-model="obj.m11">先生为该项目工程师助理。 </p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p align="center">贵州省黔西南州兴义环城高速公路建设项目第<input type="text" class="title-input" v-model="obj.m12">合同段 </p>
    <p>                 驻地办高监：<u>（签字)</u><input type="text" class="title-input" v-model="obj.m13"></p>
    <div class="block">
      <el-date-picker class="title-input input-100"
                      size="mini"
                      v-model="obj.m14"
                      type="date"
                      placeholder="年   月   日"
                      format="yyyy年MM月dd日"
                      value-format="yyyy-MM-dd">
      </el-date-picker>
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
    name: "AKG-inform",
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
        this.axios.get('/HiQuality/kgNotice/findByRecId', {
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
        this.axios.post('/HiQuality/kgNotice/saveKgNotice', this.$qs.stringify({
          kgNotice:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/kgNotice/updateKgNotice', this.$qs.stringify({
          kgNotice:JSON.stringify(this.obj)
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
        this.axios.delete('/HiQuality/kgNotice/deleteById', {
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
