<template>
    <div class="A58 text-center main-a lengthways-a">
      <p class="top-name-p ">A-58</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>承包人现场施工设备核查表</h3>
      <p class="title-p-right margin-auto ">责查表-14</p>
      <div class="public-tilte flex-r margin-auto ">
        <div>
          <p>合 同 号：<input type="text" v-model="obj.m1"></p>
          <p>起迄桩号：<input type="text" v-model="obj.m2"></p>
        </div>
        <div>
          <p>核查工点：<input type="text" class="input-200" v-model="obj.m3"></p>
          <p>核查日期：
            <el-date-picker v-model="obj.m4" type="date" size="mini"
                            class="input-80"  placeholder="年  月  日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </p>
        </div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel">
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
      <p class="bot-hint-p width-663">注：填写核查当日各种施工设备台数，并对施工设备作照相记录。驻地办每月应核查不少于2次，并及时送项目公司备案，监理核查还应进入监理月报。 <br /><br />
        监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">  监理工程师：<input type="text" v-model="nameList2[1].fullName" disabled class="input-80">  承包人现场负责人：<input type="text" v-model="obj.m3" class="input-80">
      </p>
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
    name: "A-58",
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
        auditTypeIdArr:[39,26],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        id: '1',
       dataArr:[]
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
      }
    },
    watch: {
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==39){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==26){
                this.nameList2 = item;
              }
            }
          })
        }
      }
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i=0;i<18;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A58/findA58ById', {
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
        this.axios.post("/HiQuality/A58/saveA58", this.$qs.stringify({
          a58:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A58/updateA58', this.$qs.stringify({
          a58:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A58/deleteA58', {
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
