<template>
  <div class="AKG-report text-center lengthways-a">
    <p align="center"><strong>贵州黔西南州兴义环城高速公路建设项目 </strong></p>
    <p align="center"><strong>分部(分项)工程开工报告 </strong><br />
      <strong>( </strong><strong>编号:</strong><input type="text" v-model="obj.m1"  placeholder="XYHG-XX- XX"> <strong>)</strong></p>
    <p><strong>工    程   名   称：</strong><input type="text" class="title-input" v-model="obj.m2"></p>
    <p><strong>桩号或部位：</strong><input type="text" class="title-input" v-model="obj.m3"></p>
    <p><strong>承  包 单 位：<u>贵州省公路工程集团有限公司 </u></strong></p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>申  报 日 期：</strong>
      <el-date-picker class="title-input input-100"
                      size="mini"
                      v-model="obj.m5"
                      type="date"
                      placeholder="年   月   日"
                      format="yyyy年MM月dd日"
                      value-format="yyyy-MM-dd">
      </el-date-picker>
    </p>
    <p><strong>监 理 单 位：</strong><u><input type="text" class="title-input" v-model="obj.m6"></u></p>
    <p><strong>批 复 日 期： </strong>    
      <el-date-picker class="title-input input-100"
                      size="mini"
                      v-model="obj.m7"
                      type="date"
                      placeholder="年   月   日"
                      format="yyyy年MM月dd日"
                      value-format="yyyy-MM-dd">
      </el-date-picker>
    </p>
    <p><strong>黔西南州兴义环城高速公路第<input type="text"  v-model="obj.m8">合同段项目经理部 </strong></p>
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
    name: "AKG-report",
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
        this.axios.get('/HiQuality/kgReport/findByRecId', {
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
        this.axios.post('/HiQuality/kgReport/saveKgReport', this.$qs.stringify({
          kgReport:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/kgReport/updateKgReport', this.$qs.stringify({
          kgReport:JSON.stringify(this.obj)
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
        this.axios.delete('/HiQuality/kgReport/deleteById', {
          params: {
            id: this.id,
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            /*this.obj = {subList:[]};
            this.controlArr = [];*/
            this.isAdd = true;
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
