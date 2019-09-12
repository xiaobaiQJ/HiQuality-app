<template>
    <div class="text-center main-jl">
      <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>危险源监控台账</h3>
      <table cellspacing="0" cellpadding="0" width="668" class="public-tabel">
        <tr>
          <td width="72">序号 </td>
          <td width="164">作业/活动/设施/场所</td>
          <td width="72">危险源</td>
          <td width="72">重大</td>
          <td width="72"> 一般</td>
          <td width="72">检查记录</td>
          <td width="72"> 检查日期</td>
          <td width="72"> 备注</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td ><input type="text" v-model="val.s1"></td>
          <td ><input type="text" v-model="val.s2"></td>
          <td ><input type="text" v-model="val.s3"></td>
          <td ><input type="text" v-model="val.s4"></td>
          <td ><input type="text" v-model="val.s5"></td>
          <td ><input type="text" v-model="val.s6"></td>
          <td ><input type="text" v-model="val.s7"></td>
          <td ><input type="text" v-model="val.s8"></td>
        </tr>
      </table>
      <div class="btn">
        <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
        <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
        <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
        <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "JL-06",
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
          id: 0,
          pageNo:1
        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
      },
      mounted() {
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i=0;i<24;i++){
            let subObj = {'pageNo':this.pageNo};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL06/findJL06ById', {
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
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
                this.controlArr = arr;
              }else {
                this.setSubObj()
              }
            }

          })
        },
        //插入
        addData() {
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/JL06/saveJL06", this.$qs.stringify({
            jl06:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
              console.log("插入接口")
              console.log(res);
              if (res.data.status == 200) {
                this.id = res.data.id;
                this.isAdd = false;
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },

        //修改
        updateData() {
          this.axios.post('/HiQuality/JL06/updateJL06', this.$qs.stringify({
            jl06:JSON.stringify(this.obj),
          }))
            .then(res => {
              console.log("修改接口")
              console.log(res)
              if (res.data.status == 200) {
                this.$tost.edit();
                this.$skip.skipProcess();
                this.getData();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/JL06/deleteJL06', {
            params: {
              id: this.id,
              pageNo:this.pageNo
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.controlArr = [];
              this.obj = {subList:[]}
              this.isAdd = true;
              this.setSubObj();
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
