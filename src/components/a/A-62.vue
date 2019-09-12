<template>
    <div class="A62 text-center main-a lengthways-a">
      <p class="top-name-p width-663">A-62</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>承包人现场施工设备申报表</h3>
      <p class="title-p-right margin-auto width-663">责查表-18</p>
      <div class="public-tilte flex-r margin-auto width-663">
        <div>
          <p>合 同 号：<input type="text" v-model="obj.m3"></p>
          <p>起迄桩号：<input type="text" v-model="obj.m4"></p>
        </div>
        <div>
          <p>申报工点：<input type="text" v-model="obj.m5"></p>
          <p>申报日期：
            <el-date-picker v-model="obj.m6" type="date" size="mini"
                            class="input-80"  placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </p>
        </div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel" >
          <tr >
            <td width="59" valign="center" ><p align="center">序号</p> </td>
            <td width="103" valign="center" ><p align="center" >设备名称 </p></td>
            <td width="120" valign="center" ><p align="center" >出厂年月 </p></td>
            <td width="90" valign="center" ><p align="center" >型号 </p></td>
            <td width="90" valign="center" ><p align="center" >生产效率 </p></td>
            <td width="90" valign="center" ><p align="center" >完好情况 </p></td>
            <td width="91" valign="center" ><p align="center" >设备台数 </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="59" valign="center" ><p align="center"><input type="text" v-model="val.s1"></p></td>
            <td width="103" valign="center" ><p align="center"><input type="text" v-model="val.s2"></p></td>
            <td width="120" valign="center" ><p align="center"><input type="text" v-model="val.s3"></p></td>
            <td width="90" valign="center" ><p align="center"><input type="text" v-model="val.s4"></p></td>
            <td width="90" valign="center" ><p align="center"><input type="text" v-model="val.s5"></p></td>
            <td width="90" valign="center" ><p align="center"><input type="text" v-model="val.s6"></p></td>
            <td width="91" valign="center" ><p align="center"><input type="text" v-model="val.s7"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-663">注：编入工程月报，并汇总到A-64表，每月申报。 <br />
        现场负责人：<input type="text" v-model="obj.m1"> 承包人：<input type="text" v-model="obj.m2"> </p>
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
  import {splitDate,joinDate} from '../../utils/utils'
  export default {
    name: "A-62",
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
        id:'',
        dataArr:[]
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i=0;i<19;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A62/findA62ById', {
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
        this.axios.post("/HiQuality/A62/saveA62", this.$qs.stringify({
          a62:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A62/updateA62', this.$qs.stringify({
          a62:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A62/deleteA62', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr = [];
            this.obj = {subList:[]}
            this.setSubObj();
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
