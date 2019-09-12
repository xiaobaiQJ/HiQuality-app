<template>
  <div class="text-center main-jl">
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>标准试验频率登记表</h3>
    <P class="width-623 margin-auto text-center">截止
      <input type="text" class="date-input" v-model="m1DataArr[0]">年
      <input type="text" class="date-input" v-model="m1DataArr[1]">月
      <input type="text" class="date-input" v-model="m1DataArr[2]">日
    </P>
    <table cellspacing="0" cellpadding="0" class="public-tabel" width="637">
      <tr>
        <td rowspan="2" width="140">标准试验项目</td>
        <td colspan="2">施工单位试验次数 </td>
        <td colspan="2">监理（独立试验室）抽检</td>
        <td rowspan="2">采用标准值</td>
        <td rowspan="2"> 备注</td>
      </tr>
      <tr>
        <td>本月 </td>
        <td>累计</td>
        <td>本月 </td>
        <td>累计</td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td><input type="text" v-model="val.s1"></td>
        <td><input type="text" v-model="val.s2"></td>
        <td><input type="text" v-model="val.s3"></td>
        <td><input type="text" v-model="val.s4"></td>
        <td><input type="text" v-model="val.s5"></td>
        <td><input type="text" v-model="val.s6"></td>
        <td><input type="text" v-model="val.s7"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-623">现场监理：<input type="text" class="input-200" v-model="obj.m2">试验监理工程师：<input type="text" v-model="obj.m3" class="input-200"></p>
    <div class="btn">
      <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
      <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
      <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
      <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
    </div>
  </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "JL-23",
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
          m1DataArr:[],
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
          let experimentalValue = ['最大干容量','综合毛体积密度','C7.5 砂浆配合比'];
          for(var i=0;i<21;i++){
            let subObj = {'pageNo':this.pageNo,'s1':i<3?experimentalValue[i]:''};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL23/findJL23ById', {
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
              this.m1DataArr = splitDate(this.obj.m1,'-');
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
          this.obj.m1 = joinDate(this.m1DataArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/JL23/saveJL23", this.$qs.stringify({
            jl23:JSON.stringify(this.obj),
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
          this.obj.m1 = joinDate(this.m1DataArr,'-');
          this.axios.post('/HiQuality/JL23/updateJL23', this.$qs.stringify({
            jl23:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/JL23/deleteJL23', {
            params: {
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
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
