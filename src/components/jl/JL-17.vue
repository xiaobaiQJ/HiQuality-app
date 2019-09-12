<template>
  <div class="text-center main-jl">
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>施工单位人员机械考核汇总表</h3>
    <P class="width-834 margin-auto t-left">
      <input type="text" class="date-input" v-model="m1DataArr[0]">年
      <input type="text" class="date-input" v-model="m1DataArr[1]">月
    </P>
    <table cellspacing="0" cellpadding="0" class="public-tabel" width="1013">
      <tr>
        <td align="left" valign="top" rowspan="2">
          <img src="../../assets/files/imgs/jl/clip_image002_0003.jpg" alt="IMG" width="131" height="80" />
        </td>
        <td colspan="3">I标</td>
        <td colspan="3">II标</td>
        <td colspan="3">III标</td>
        <td colspan="3">IV标</td>
        <td colspan="3">V标</td>
        <td colspan="3">VI标</td>
      </tr>
      <tr>
        <td width="49">合同规定</td>
        <td width="49">实际单位</td>
        <td width="49">到位天数</td>
        <td width="49">合同规定</td>
        <td width="49">实际单位</td>
        <td width="49">到位天数</td>
        <td width="49">合同规定</td>
        <td width="49">实际单位</td>
        <td width="49">到位天数</td>
        <td width="49">合同规定</td>
        <td width="49">实际单位</td>
        <td width="49">到位天数</td>
        <td width="49">合同规定</td>
        <td width="49">实际单位</td>
        <td width="49">到位天数</td>
        <td width="49">合同规定</td>
        <td width="49">实际单位</td>
        <td width="49">到位天数</td>
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
      </tr>
    </table>
    <p class="bot-hint-p width-1013">合同监理工程师：<input type="text" class="input-300" v-model="obj.m2"> 驻地监理工程师（总监）：<input type="text" class="input-300" v-model="obj.m3"></p>
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
        name: "JL-17",
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
          let managerValue = ['项目经理','技术负责人（总工）','质检负责人','试验负责人','试验员（填人数）','工地总人数','挖掘机','推土机','装载机','……'];
          for(var i=0;i<10;i++){
            let subObj = {'pageNo':this.pageNo,'s1':managerValue[i]};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL17/findJL17ById', {
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
          this.axios.post("/HiQuality/JL17/saveJL17", this.$qs.stringify({
            jl17:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/JL17/updateJL17', this.$qs.stringify({
            jl17:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/JL17/deleteJL17', {
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
