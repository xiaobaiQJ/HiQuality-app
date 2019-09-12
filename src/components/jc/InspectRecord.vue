<template>
    <div class="inspectionRecord text-center">
      <p align="center" >贵州兴义环城高速公路有限公司 </p>
      <h2 align="center" ><strong>检  查     记  录</strong></h2>
      <div class="text-left width-663">
        <span>检查单位：<input type="text"></span>
        <span>资料编号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <table class="public-tabel">
        <tr>
          <td colspan="2">检查主题(事项)</td>
          <td colspan="4"><input type="text" v-model="obj.m1"></td>
        </tr>
        <tr>
          <td colspan="2" width="121">受检查单位</td>
          <td width="238"><input type="text" v-model="obj.m2"></td>
          <td width="74">检查日期</td>
          <td colspan="2" width="220"><input type="text" v-model="dateArr[0]" class="date-input">年<input type="text" v-model="dateArr[1]" class="date-input">月<input type="text" v-model="dateArr[2]" class="date-input">日</td>
        </tr>
        <tr>
          <td colspan="2" width="121">检查项目<br/>或工程部位名称</td>
          <td colspan="4" width="532"><input type="text" v-model="obj.m4"></td>
        </tr>
        <tr>
          <td colspan="2" width="121">参加检查人员</td>
          <td colspan="4" width="532"><input type="text" v-model="obj.m5"></td>
        </tr>
        <tr>
          <td colspan="6" width="653">
            <p align="left">检查记录：<textarea rows="16" v-model="obj.m6"></textarea></p></td>
        </tr>
        <tr>
          <td colspan="6" width="653">
            <p align="left">检查结论：<textarea rows="10" v-model="obj.m7"></textarea></p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-663">检查负责人：<input type="text" v-model="obj.m8">受检查单位签字：<input type="text" v-model="obj.m9"></p>
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
        name: "InspectionRecord",
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
          dateArr:[],
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
          this.axios.get('/HiQuality/inspect/record/findById',{
            params:{
              id:this.id
              /*pageNo: this.pageNo*/
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.dateArr = splitDate(this.obj.m3,'-');
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.m3 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/inspect/record/save', this.$qs.stringify({
              BBtInspectrecord:JSON.stringify(this.addObj),
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
          this.obj.m3 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/inspect/record/update',this.$qs.stringify({
            BBtInspectrecord:JSON.stringify(this.addObj)
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
          this.axios.get('/HiQuality/inspect/record/deleteById',{
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
