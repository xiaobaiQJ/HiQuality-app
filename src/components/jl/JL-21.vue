<template>
  <div class="text-center main-jl">
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>本月计量统计表</h3>
    <P class="width-663 top-name-p">截止
      <input type="text" class="date-input" v-model="m1DataArr[0]">年
      <input type="text" class="date-input" v-model="m1DataArr[1]">月
      <input type="text" class="date-input" v-model="m1DataArr[2]">日
    </P>
    <table cellspacing="0" cellpadding="0" class="public-tabel" width="694">
      <tr>
        <td rowspan="2" width="46">合同号</td>
        <td rowspan="2" width="72">合同价<br />
          （万元）</td>
        <td colspan="4" width="288">本月计量支付</td>
        <td colspan="4" width="288">累计计量支付</td>
      </tr>
      <tr>
        <td width="72">计量金额</td>
        <td width="72">占合同价%</td>
        <td width="72">支付金额</td>
        <td width="72">占合同价%</td>
        <td width="72">计量金额</td>
        <td width="72">占合同价%</td>
        <td width="72">支付金额</td>
        <td width="72">占合同价%</td>
      </tr>
      <tr class="tr-height" v-for="(val,index) in controlArr" :key="index">
        <td width="46">{{contractNoValue[index]}}</td>
        <td width="72"><input type="text" v-model="val.s1"></td>
        <td width="72"><input type="text" v-model="val.s2"></td>
        <td width="72"><input type="text" v-model="val.s3"></td>
        <td width="72"><input type="text" v-model="val.s4"></td>
        <td width="72"><input type="text" v-model="val.s5"></td>
        <td width="72"><input type="text" v-model="val.s6"></td>
        <td width="72"><input type="text" v-model="val.s7"></td>
        <td width="72"><input type="text" v-model="val.s8"></td>
        <td width="72"><input type="text" v-model="val.s9"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-696">合同监理工程师：<input type="text" class="input-140" v-model="obj.m2"> 驻地监理工程师（总监）：<input type="text" class="input-140" v-model="obj.m3"></p>
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
        name: "JL-21",
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
          contractNoValue:['Ⅰ','Ⅱ','Ⅲ','IV','V','VI','','合计'],
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
          for(var i=0;i<8;i++){
            let subObj = {'pageNo':this.pageNo};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL21/findJL21ById', {
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
          this.axios.post("/HiQuality/JL21/saveJL21", this.$qs.stringify({
            jl21:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/JL21/updateJL21', this.$qs.stringify({
            jl21:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/JL21/deleteJL21', {
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
