<template>
    <div class="text-center main-jl">
      <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>专项安全施工方案、施工机械、安全施工、安全交底验收情况表</h3>
      <table cellspacing="0" cellpadding="0" width="760" class="public-tabel">
        <tr>
          <td width="42">序号 </td>
          <td width="181">安全监理</td>
          <td width="135">方案审批手续（完整√不完整×）</td>
          <td width="114">施工机械验收手续（有√无×）</td>
          <td width="115">安全设施验收手续（有√无×）</td>
          <td width="95">安全交底（有√无×）</td>
          <td width="78"> 备注（检查日期）</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td align="right"><input type="text" v-model="val.s1"></td>
          <td width="111"><input type="text" v-model="val.s2"></td>
          <td><input type="text" v-model="val.s3"></td>
          <td><input type="text" v-model="val.s4"></td>
          <td><input type="text" v-model="val.s5"></td>
          <td><input type="text" v-model="val.s6"></td>
          <td><input type="text" v-model="val.s7"></td>
        </tr>
      </table>

    </div>
</template>

<script>
    export default {
        name: "JL-05",
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
          let supervisorValue = ['对分包单位进行安全总交底','地下工程','模板工程','吊装工程','施工用电','脚手架','塔式起重机','施工升降机','井架、龙门架','其他机械','防护棚搭设','临边洞口维护','坍塌、高处坠落','电梯井防护','施工安全应急'];
          for(var i=0;i<20;i++){
            let subObj = {'pageNo':this.pageNo,'s1':i<18?i+1:'','s2':supervisorValue[i]};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/A01/findA01ById', {
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
          this.axios.post("/HiQuality/A01/saveA01", this.$qs.stringify({
            a01:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A01/updateA01', this.$qs.stringify({
            a01:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/A01/deleteA01', {
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
