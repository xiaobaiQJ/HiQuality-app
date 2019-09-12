<template>
  <div class=" A-51 text-center main-a lengthways-a">
    <p class="top-name-p width-682">A-51</p>
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>监理工程师、监理员登记表</h3>
    <table cellspacing="0" cellpadding="0" class="public-tabel table-tr-height-30" width="699">
      <tr>
        <td width="40">序号</td>
        <td width="68">姓名</td>
        <td>性别</td>
        <td>年龄</td>
        <td>职务</td>
        <td>职称</td>
        <td width="103">安全、技术<br/>证件编号</td>
        <td width="100">监理内容</td>
        <td width="86">监理时间</td>
        <td> 备注</td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td><input type="text" v-model="val.s1"></td>
        <td><input type="text" v-model="val.s2"></td>
        <td><input type="text" v-model="val.s3"></td>
        <td><input type="text" v-model="val.s4"></td>
        <td><input type="text" v-model="val.s5"></td>
        <td><input type="text" v-model="val.s6"></td>
        <td><input type="text" v-model="val.s7"></td>
        <td><input type="text" v-model="val.s8"></td>
        <td>
          <div class="block">
            <el-date-picker v-model="val.s9" type="date" size="mini" value-format="yyyy-MM-dd" class="input-80"></el-date-picker>
          </div>
        </td>
        <td><input type="text" v-model="val.s10"></td>
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
        name: "A-51",
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
          id: 0
        }
      },
      mounted() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i=0;i<26;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/A51/findA51ById', {
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
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;
            }

          })
        },
        //插入
        addData() {
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/A51/saveA51", this.$qs.stringify({
            a51:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/A51/updateA51', this.$qs.stringify({
            a51:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/A51/deleteA51', {
            params: {
              id: this.id
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
