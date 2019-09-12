<template>
    <div class="text-center main-jl">
      <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>工程变更台账</h3>
      <table cellspacing="0" cellpadding="0" class="public-tabel" width="1003">
        <tr>
          <td rowspan="2" width="83">变更令<br />
            号<br /></td>
          <td rowspan="2" width="72">批准文<br />
            号</td>
          <td rowspan="2" width="85">清单编<br />
            号<br /></td>
          <td rowspan="2" width="72">项目名<br />
            称</td>
          <td rowspan="2" width="72">单位</td>
          <td colspan="3" width="216">原合同清单</td>
          <td colspan="3" width="229">变更后清单</td>
          <td rowspan="2" width="80">变更<br />
            金额增减</td>
          <td rowspan="2" width="94">累计金<br />
            额增减</td>
        </tr>
        <tr>
          <td width="72">单价  </td>
          <td width="72">数量 </td>
          <td width="72">金额</td>
          <td width="72">单价  </td>
          <td width="72">数量 </td>
          <td width="85">金额</td>
        </tr>
        <tr>
          <td rowspan="3" width="83"><input type="text" v-model="controlArr[0].s1"></td>
          <td rowspan="3" width="72"><input type="text" v-model="controlArr[0].s2"></td>
          <td width="85"><input type="text" v-model="controlArr[0].s3"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s4"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s5"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s6"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s7"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s8"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s9"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s10"></td>
          <td width="85"><input type="text" v-model="controlArr[0].s11"></td>
          <td width="80"><input type="text" v-model="controlArr[0].s12"></td>
          <td width="94"><input type="text" v-model="controlArr[0].s13"></td>
        </tr>
        <tr>
          <td width="85"><input type="text" v-model="controlArr[0].s14"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s15"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s16"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s17"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s18"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s19"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s20"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s21"></td>
          <td width="85"><input type="text" v-model="controlArr[0].s22"></td>
          <td width="80"><input type="text" v-model="controlArr[0].s23"></td>
          <td width="94"><input type="text" v-model="controlArr[0].s24"></td>
        </tr>
        <tr>
          <td width="85">合计</td>
          <td width="72"><input type="text" v-model="controlArr[0].s25"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s26"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s27"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s28"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s29"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s30"></td>
          <td width="72"><input type="text" v-model="controlArr[0].s31"></td>
          <td width="85"><input type="text" v-model="controlArr[0].s32"></td>
          <td width="80"><input type="text" v-model="controlArr[0].s33"></td>
          <td width="94"><input type="text" v-model="controlArr[0].s34"></td>
        </tr>
        <tr>
          <td rowspan="3" width="83"><input type="text" v-model="controlArr[1].s1"></td>
          <td rowspan="3" width="72"><input type="text" v-model="controlArr[1].s2"></td>
          <td width="85"><input type="text" v-model="controlArr[1].s3"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s4"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s5"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s6"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s7"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s8"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s9"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s10"></td>
          <td width="85"><input type="text" v-model="controlArr[1].s11"></td>
          <td width="80"><input type="text" v-model="controlArr[1].s12"></td>
          <td width="94"><input type="text" v-model="controlArr[1].s13"></td>
        </tr>
        <tr>
          <td width="85"><input type="text" v-model="controlArr[1].s14"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s15"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s16"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s17"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s18"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s19"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s20"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s21"></td>
          <td width="85"><input type="text" v-model="controlArr[1].s22"></td>
          <td width="80"><input type="text" v-model="controlArr[1].s23"></td>
          <td width="94"><input type="text" v-model="controlArr[1].s24"></td>
        </tr>
        <tr>
          <td width="85">合计</td>
          <td width="72"><input type="text" v-model="controlArr[1].s25"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s26"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s27"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s28"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s29"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s30"></td>
          <td width="72"><input type="text" v-model="controlArr[1].s31"></td>
          <td width="85"><input type="text" v-model="controlArr[1].s32"></td>
          <td width="80"><input type="text" v-model="controlArr[1].s33"></td>
          <td width="94"><input type="text" v-model="controlArr[1].s34"></td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
        </tr>
        <tr>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
          <td>　</td>
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
        name: "JL-11",
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
          for(var i=0;i<2;i++){
            let subObj = {'pageNo':this.pageNo};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL11/findJL11ById', {
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
          this.axios.post("/HiQuality/JL11/saveJL11", this.$qs.stringify({
            jl11:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/JL11/updateJL11', this.$qs.stringify({
            jl11:JSON.stringify(this.obj),
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
          this.axios.get('/HiQuality/JL11/deleteJL11', {
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
