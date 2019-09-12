<template>
  <div class="text-center main-jl">
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3 >总监理工程师办公室监理机构人员考勤表 <span style="margin-left: 30%;">
      <input type="text" class="date-input" v-model="m1DataArr[0]">年
      <input type="text" class="date-input" v-model="m1DataArr[1]">月</span>
    </h3>
    <table cellspacing="0" cellpadding="0" class="public-tabel" width="1100">
      <tr>
        <td align="left" rowspan="2" width="72">
          <img src="../../assets/files/imgs/jl/clip_image002_0002.jpg" width="69" height="70"/>
        </td>
        <td rowspan="2" width="30">1</td>
        <td rowspan="2" width="30">2</td>
        <td rowspan="2" width="30">3</td>
        <td rowspan="2" width="30">4</td>
        <td rowspan="2" width="30">5</td>
        <td rowspan="2" width="30">6</td>
        <td rowspan="2" width="30">7</td>
        <td rowspan="2" width="30">8</td>
        <td rowspan="2" width="30">9</td>
        <td rowspan="2" width="30">10</td>
        <td rowspan="2" width="30">11</td>
        <td rowspan="2" width="30">12</td>
        <td rowspan="2" width="30">13</td>
        <td rowspan="2" width="30">14</td>
        <td rowspan="2" width="30">15</td>
        <td rowspan="2" width="30">16</td>
        <td rowspan="2" width="30">17</td>
        <td rowspan="2" width="30">18</td>
        <td rowspan="2" width="30">19</td>
        <td rowspan="2" width="30">20</td>
        <td rowspan="2" width="30">21</td>
        <td rowspan="2" width="30">22</td>
        <td rowspan="2" width="30">23</td>
        <td rowspan="2" width="30">24</td>
        <td rowspan="2" width="30">25</td>
        <td rowspan="2" width="30">26</td>
        <td rowspan="2" width="30">27</td>
        <td rowspan="2" width="30">28</td>
        <td rowspan="2" width="30">29</td>
        <td rowspan="2" width="30">30</td>
        <td rowspan="2" width="30">31</td>
        <td rowspan="2" width="72">合计</td>
      </tr>
      <tr>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
        <td class="place"></td>
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
        <td><input type="text" v-model="val.s9"></td>
        <td><input type="text" v-model="val.s10"></td>
        <td><input type="text" v-model="val.s11"></td>
        <td><input type="text" v-model="val.s12"></td>
        <td><input type="text" v-model="val.s13"></td>
        <td><input type="text" v-model="val.s14"></td>
        <td><input type="text" v-model="val.s15"></td>
        <td><input type="text" v-model="val.s16"></td>
        <td><input type="text" v-model="val.s17"></td>
        <td><input type="text" v-model="val.s18"></td>
        <td><input type="text" v-model="val.s19"></td>
        <td><input type="text" v-model="val.s20"></td>
        <td><input type="text" v-model="val.s21"></td>
        <td><input type="text" v-model="val.s22"></td>
        <td><input type="text" v-model="val.s23"></td>
        <td><input type="text" v-model="val.s24"></td>
        <td><input type="text" v-model="val.s25"></td>
        <td><input type="text" v-model="val.s26"></td>
        <td><input type="text" v-model="val.s27"></td>
        <td><input type="text" v-model="val.s28"></td>
        <td><input type="text" v-model="val.s29"></td>
        <td><input type="text" v-model="val.s30"></td>
        <td><input type="text" v-model="val.s31"></td>
        <td><input type="text" v-model="val.s32"></td>
        <td><input type="text" v-model="val.s33"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-1086">考勤：<input type="text" v-model="obj.m2" class="input-300"> 复核：<input type="text" v-model="obj.m3" class="input-300">审批：<input type="text" v-model="obj.m4"></p>
    <p class="bot-hint-p width-1086">注：出勤√      事假S  旷工K  公差∆      休息O  休假J</p>
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
        name: "JL-16",
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
          for(var i=0;i<21;i++){
            let subObj = {'pageNo':this.pageNo};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL16/findJL16ById', {
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
          this.m1DataArr.push('00');
          this.obj.m1 = joinDate(this.m1DataArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/JL16/saveJL16", this.$qs.stringify({
            jl16:JSON.stringify(this.obj),
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
          this.m1DataArr.push('00');
          this.obj.m1 = joinDate(this.m1DataArr,'-');
          this.axios.post('/HiQuality/JL16/updateJL16', this.$qs.stringify({
            jl16:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/JL16/deleteJL16', {
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
.place{
  border: none;
}
</style>
