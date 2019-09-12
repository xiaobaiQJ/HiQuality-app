<template>
    <div class="text-center">
      <p align="center" >贵州兴义环城高速公路有限公司 </p>
      <h2 align="center" ><strong>整 改 验 证 委 托 书</strong></h2>
      <div class="text-left width-663">
        <span>资料编号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <table class="public-tabel" width="664">
        <tr>
          <td>检查单位</td>
          <td><input type="text" v-model="obj.m1"></td>
          <td>委托人员</td>
          <td><input type="text" v-model="obj.m2"></td>
          <td>委托日期</td>
          <td><input type="text" v-model="obj.m3"></td>
        </tr>
        <tr>
          <td width="70">合同段</td>
          <td width="192"><input type="text" v-model="obj.m4"></td>
          <td width="90">被委托人员</td>
          <td width="117"><input type="text" v-model="obj.m5"></td>
          <td width="87">验证日期</td>
          <td width="108"><input type="text" v-model="obj.m6"></td>
        </tr>
        <tr>
          <td colspan="6" width="664" align="left">
            <input type="text" v-model="obj.m7" class="title-input input-200 height-25" style="margin-bottom: 10px;">项目经理部：
          </td>
        </tr>
        <tr>
          <td colspan="6" width="664" style="padding: 10px 0;">    因工作原因，对你合同段在第<input type="text" v-model="obj.m8" class="title-input input-140 height-25">号《检查整改通知单》中所列问题的整改结果，不能到场进行验证，我司特委托（监理办或中心试验室）<input type="text" v-model="obj.m9" class="title-input input-140 height-25">（职务）代为验证，请根据《检查整改通知单》所述内容，对其整改结果进行验证，并填写以下验证检查结果（含整改图片）于 
            <input type="text" v-model="m10DateArr[0]" class="date-input height-25 title-input">年
            <input type="text" v-model="m10DateArr[1]" class="date-input height-25 title-input">月
            <input type="text" v-model="m10DateArr[2]" class="date-input height-25 title-input">日前上报我司<input type="text" v-model="obj.m11" class="input-80 height-25 title-input">处备案。
          </td>
        </tr>
        <tr>
          <td colspan="3" width="352">
            <textarea rows="3" v-model="obj.m12"></textarea>
          </td>
          <td colspan="3" width="312">
            委托人：<input type="text" v-model="obj.m13" class="input-140 height-25 title-input">
          </td>
        </tr>
        <tr>
          <td colspan="2" width="262">需整改的问题</td>
          <td colspan="2" width="207">整改措施</td>
          <td colspan="2" width="195">整改结果</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <!--<td v-show="false" width="32" valign="center" ><p><input type="text" v-model="val.pageNo"></p></td>
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="val.testItemNo"></p></td>-->
          <td colspan="2" width="262"><input type="text" v-model="val.s1"></td>
          <td colspan="2" width="207"><input type="text" v-model="val.s2"></td>
          <td colspan="2" width="195"><input type="text" v-model="val.s3"></td>
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
    export default {
        name: "VerifyConsign",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
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
          m10DateArr:[],
          id: '1'     //主表id
          /*pageNo: '1',   //当前页数
          testItemNo: "",   //当前行编号*/
        }
      },
      created(){
        this.id = this.$route.query.id;
      },
      /*created(){
        for(var i= 0; i<13;i++){
          let testItemNos = {"testItemNo": i+1,"pageNo": this.pageNo,"s1":'',"s2": '',"s3": ''};
          this.controlArr.push(testItemNos);
        };
      },*/
      mounted() {
        for(var i=0;i<13;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/inspect/verify/findById',{
            params:{
              id:this.id
              /*pageNo: this.pageNo*/
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data.main;
              this.obj.subList = res.data.data.sub;
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item);
                })
              }
              this.controlArr = arr;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/inspect/verify/save',this.$qs.stringify({
            BBtVerifyconsignM:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/inspect/verify/update',this.$qs.stringify({
            BBtVerifyconsignM:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/inspect/verify/deleteById',{
            params:{
              id:this.id
              /*pageNo: ''*/
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {subList:[]};
              this.controlArr = [];
              this.isAdd = true;
            }
          })
        }
      }
    }
</script>

<style scoped>
.input-200{
  width: 200px;
}
</style>
