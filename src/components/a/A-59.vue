<template>
    <div class="A59 text-center main-a lengthways-a">
      <p class="top-name-p width-663">A-59</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>承包人现场劳动力核查汇总表</h3>
      <p class="title-p-right margin-auto width-663">责查表-15</p>
      <div class="public-tilte flex-r margin-auto width-663">
        <div>
          <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></p>
        </div>
        <div>
          <p>核查日期：
            <el-date-picker v-model="obj.m1" type="date" size="mini"
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
            <td width="120" valign="center" ><p align="center" >工作岗位 </p></td>
            <td width="478" valign="center" ><p align="center" >在岗劳动力人数 </p></td>
          </tr>
          <tr v-for="(val,index) in controlArr" :key="index">
            <td width="59" valign="center" ><p align="center"><input type="text" v-model="val.s1"></p></td>
            <td width="120" valign="center" ><p align="center"><input type="text" v-model="val.s2"></p></td>
            <td width="478" valign="center" ><p align="center"><input type="text" v-model="val.s3"></p></td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-663">注：汇总责查表-13。驻地办每月应核查不少于2次，并及时送项目公司备案，监理核查还应进入监理月报。 <br /><br />
        监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-120">  监理工程师：<input type="text" v-model="nameList2[1].fullName" disabled class="input-120">  承包人现场负责人：<input type="text" v-model="obj.m3" class="input-120">
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
    name: "A-59",
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
        dateArr:[]
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if(obj.data!='' && obj.data!=null && obj.data!=undefined){
        this.headerInfo = obj.data;
      }
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
        this.axios.get('/HiQuality/A59/findA59ById', {
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
        this.axios.post("/HiQuality/A59/saveA59", this.$qs.stringify({
          a59:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A59/updateA59', this.$qs.stringify({
          a59:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A59/deleteA59', {
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
