<template>
    <div class="text-center">
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p align="center" >黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
      <p align="center" ><strong>工程违约处罚通知单</strong></p>
      <div class="text-left width-559">
        <span>业主单位:贵州兴义环城高速公路有限公司</span>
        <span>合 同 号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-559">
        <span>监理单位：<input type="text"></span>
        <span>编&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" cellpadding="0" width="565">
        <tr>
          <td width="565" valign="top"><p align="right">&nbsp;</p>
            <textarea rows="19" v-model="obj.m1"></textarea>
            <p>特此通知 </p>
            <br/>
            <br/>
            <p align="left" style="text-indent: 30px;">项 目 公 司 签 发：<input type="text" v-model="obj.m2"></p><br/>
            <p align="right"><input type="text" v-model="m3DateArr[0]" class="date-input">年
              <input type="text" v-model="m3DateArr[1]" class="date-input">月
              <input type="text" v-model="m3DateArr[2]" class="date-input">日
            </p><br/><br/>
            <p>签字： <input type="text" v-model="obj.m4"></p><br/><br/>
            <p align="right"><input type="text" v-model="m5DateArr[0]" class="date-input">年
              <input type="text" v-model="m5DateArr[1]" class="date-input">月
              <input type="text" v-model="m5DateArr[2]" class="date-input">日
            </p>
          </td>
        </tr>
      </table>
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
        name: "Penalty",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {},

          //rec表
          rec: {
            recNo:'',
            tableId:'',
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          m3DateArr:[],
          m5DateArr:[],
          id: '1',     //主表id
        }
      },
      created(){
        this.id = this.$route.query.id;
      },
      mounted() {
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/penalty/findById',{
            params:{
              id:this.id
             /* pageNo: this.pageNo*/
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.m3DateArr = splitDate(this.obj.m3,'-');
              this.m5DateArr = splitDate(this.obj.m5,'-');
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.m3 = joinDate(this.m3DateArr,'-');
          this.obj.m5 = joinDate(this.m5DateArr,'-');
          this.axios.post('/HiQuality/penalty/save',this.$qs.stringify({
            BBtPenalty:JSON.stringify(this.addObj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res=>{
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
            }
          })
        },
        //修改
        updateData(){
          this.obj.m3 = joinDate(this.m3DateArr,'-');
          this.obj.m5 = joinDate(this.m5DateArr,'-');
          this.axios.post('/HiQuality/penalty/update',this.$qs.stringify({
            BBtPenalty:JSON.stringify(this.addObj)
          }))
          .then(res=>{
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
            }
          })
        },
        //删除
        deleteData(){
          this.axios.get('/HiQuality/penalty/deleteById',{
            params:{
              id:this.id
              /*pageNo: ''*/
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {};
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
