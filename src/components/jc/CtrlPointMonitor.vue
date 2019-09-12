<template>
    <div class="monitoringChecklist text-center">
      <p align="center" >贵州兴义环城高速公路有限公司 </p>
      <h2 align="center" >重要质量控制点监控检查表</h2>
      <div class="text-left width-1043">
        <span>项目名称：<input type="text"></span>
        <span>资料编号：<input type="text"></span>
        <div class="myClear"></div>
      </div>
      <table width="1062" class="public-tabel">
        <tr>
          <td colspan="2">工程名称及部位</td>
          <td colspan="2" ><p><input type="text" v-model="obj.m1"></p></td>
          <td colspan="2" >质量控制点名称</td>
          <td colspan="2" ><input type="text" v-model="obj.m2"></td>
          <td width="100">检查人员</td>
          <td width="129"><input type="text" v-model="obj.m3"></td>
        </tr>
        <tr>
          <td colspan="2">检查单位/部门</td>
          <td colspan="2"><input type="text" v-model="obj.m4"></td>
          <td >检查日期</td>
          <td ><input type="text" v-model="obj.m5"></td>
          <td>施工天气</td>
          <td><input type="text" v-model="obj.m6"></td>
          <td>控制点分类</td>
          <td><input type="text" v-model="obj.m7" placeholder="Ⅰ类/Ⅱ类/Ⅲ类"></td>
        </tr>
        <tr >
          <td width="38">序号</td>
          <td colspan="2" width="177">控制项目</td>
          <td colspan="3" width="307">控制内容/指标</td>
          <td colspan="2" width="251">控制方案/方法</td>
          <td colspan="2" width="229">检查情况描述</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <!--<td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[0].pageNo"></p></td>
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[0].testItemNo"></p></td>-->
          <td width="38"><input type="text" v-model="val.s1"></td>
          <td colspan="2" width="177"><input type="text" v-model="val.s2"></td>
          <td colspan="3" width="307"><input type="text" v-model="val.s3"></td>
          <td colspan="2" width="251"><input type="text" v-model="val.s4"></td>
          <td colspan="2" width="229"><input type="text" v-model="val.s5"></td>
        </tr>
        <tr>
          <td colspan="10" >
            <p align="left">施工情况及检查结论简述：<textarea rows="6" v-model="obj.m8"></textarea></p>
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
        name: "CtrlPointMonitor",
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
          dateArr:[],
          id: '1'     //主表id
          /*pageNo: '1',   //当前页数
          testItemNo: "",   //当前行编号*/
        }
      },
      created(){
        this.id = this.$route.query.id;
      },
      /*created(){
        for(var i= 0; i<10;i++){
          let testItemNos = {"testItemNo": i+1,"pageNo": this.pageNo,"s1":'',"s2": '',"s3": '',"S4": '',"S5": ''};
          this.controlArr.push(testItemNos);
        };
      },*/
      mounted() {
        for(var i=0;i<10;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/monitor/findById',{
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
          this.axios.post('/HiQuality/monitor/save',this.$qs.stringify({
            BBtCtrlpointmonitorM:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/monitor/update',this.$qs.stringify({
            BBtCtrlpointmonitorM:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/monitor/deleteById',{
            params:{
              id:this.id
             /* pageNo: ''*/
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
