<template>
    <div class="text-center">
      <p align="center" >贵州兴义环城高速公路有限公司 </p>
      <h2 align="center" ><strong>检 查 整 改 通 知 单</strong></h2>
      <div class="text-left width-663">
        <span>(一页不够可另加附页）</span>
        <span>资料编号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <table class="public-tabel" width="664">
        <tr>
          <td>检查单位</td>
          <td><input type="text" v-model="obj.m1" placeholder="贵州兴义环城高速公路有限公司"></td>
          <td>检查人员</td>
          <td><input type="text" v-model="obj.m2"></td>
          <td>通知日期</td>
          <td><input type="text" v-model="obj.m3"></td>
        </tr>
        <tr>
          <td width="70">受检单位</td>
          <td width="192"><input type="text" v-model="obj.m4"></td>
          <td width="90">受检负责人</td>
          <td width="117"><input type="text" v-model="obj.m5"></td>
          <td width="87">整改负责人</td>
          <td width="108"><input type="text" v-model="obj.m6"></td>
        </tr>
        <tr>
          <td colspan="5" width="556">需要整改的问题</td>
          <td width="108">整改期限</td>
        </tr>
        <tr>
          <!--<td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[0].pageNo"></p></td>
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[0].testItemNo"></p></td>-->
          <td colspan="5" width="556">
            <textarea name="" cols="30" rows="10" v-model="controlArr[0].s1"></textarea>
          </td>
          <td width="108">
            <textarea name="" cols="30" rows="10" v-model="controlArr[0].s2"></textarea>
          </td>
        </tr>

        <tr>
          <td colspan="4" width="469">整改措施</td>
          <td colspan="2" width="195">整改结果</td>
        </tr>
        <tr>
          <td colspan="4" width="469">
            <textarea name="" cols="30" rows="10" v-model="controlArr[0].s3"></textarea>
          </td>
          <td colspan="2" width="195">
            <textarea name="" cols="30" rows="10" v-model="controlArr[0].s4"></textarea>
          </td>
        </tr>

        <tr>
          <td colspan="6" width="664">
            <p align="left">整改验证:<textarea rows="3" v-model="obj.m7"></textarea></p>
            <p align="right">验证人：<input type="text" v-model="obj.m8" class="input-80 height-25">
              验证日期：<input type="text" v-model="obj.m9" class="input-80 height-25">
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
    export default {
        name: "QualityImprove",
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
          id: '1'     //主表id
          /*pageNo: '1',   //当前页数
          testItemNo: "",   //当前行编号*/
        }
      },
      created(){
        this.id = this.$route.query.id;
      },
      /*created(){
        for(var i= 0; i<8;i++){
          let testItemNos = {"testItemNo": i+1,"pageNo": this.pageNo,"s1":'',"s2": '',"s3": '',"S4": ''};
          this.controlArr.push(testItemNos);
        };
      },*/
      mounted() {
        for(var i=0;i<1;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/inspect/improve/findById',{
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
          this.axios.post('/HiQuality/inspect/improve/save',this.$qs.stringify({
            BBtQualityimproveM:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/inspect/improve/update',this.$qs.stringify({
            BBtQualityimproveM:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/inspect/improve/deleteById',{
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

</style>
