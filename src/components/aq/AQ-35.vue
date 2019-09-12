<template>
  <div class="AQ-35 text-center main-aq">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全施工日志</h3>
    <div class="t-right margin-auto width-623">
      <div class="block">
        <el-date-picker v-model="obj.m1" type="date" size="mini"
                        format="yyyy年MM月dd日"
                        value-format="yyyy-MM-dd"
                        placeholder="年   月   日">
        </el-date-picker>
      </div>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel " width="630">
      <tr>
        <td width="127" valign="top"><p align="center">单位名称</p> </td>
        <td width="192" ><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="96" valign="top"><p>项目名称 </p></td>
        <td width="187" colspan="2" ><input type="text" v-model="obj.m2"></td>
      </tr>
      <tr>
        <td width="127" valign="top"><p>工程项目名称 </p></td>
        <td width="192" valign="top"><p align="center"><input type="text" v-model="obj.m3"></p></td>
        <td width="96" valign="top"><p>施工部位 </p></td>
        <td width="187" colspan="2" valign="top"><p><input type="text" v-model="obj.m4"></p></td>
      </tr>
      <tr>
        <td width="127" valign="top"><p>项目负责人 </p></td>
        <td width="192" ><p><input type="text" v-model="obj.m5"></p></td>
        <td width="96" colspan="2" valign="top"><p>气象情况 </p></td>
        <td width="187" ><p><input type="text" v-model="obj.m6"></p></td>
      </tr>
      <tr>
        <td width="127"><p align="center">安全<br />施工<br />工作</p></td>
        <td width="475" colspan="4" >
          <textarea rows="18" v-model="obj.m7"></textarea>
        </td>
      </tr>
      <tr>
        <td width="127"><p align="center">施工<br />现场<br />安全<br />状况 </p></td>
        <td width="475" colspan="4" valign="top">
          <textarea rows="18" v-model="obj.m8"></textarea>
        </td>
      </tr>
      <tr>
        <td width="127"><p align="center">处<br />理<br />意<br />见</p></td>
        <td width="475" colspan="4" valign="top">
          <textarea rows="20" v-model="obj.m9"></textarea>
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-608">安全员：<input type="text" v-model="obj.m10" class="title-input input-200">   安全负责人：<input type="text" v-model="obj.m11" class="title-input input-200"></p>
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
        name: "AQ-35",
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
          headerInfo: {}, //表头信息
          id: '1',     //主表id
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        }
      },
      mounted() {
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq35/findById',{
            params:{
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.axios.get('/HiQuality/aq35/save',{
            params:{
              aq35:this.obj,
              rec:this.rec
            }
          }).then(res=>{
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
        },
        //修改
        updateData(){
          this.axios.get('/HiQuality/aq35/update',{
            params:{
              aq35:this.obj,
              rec:this.rec
            }
          }).then(res=>{
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
        },
        //删除
        deleteData(){
          this.axios.get('/HiQuality/aq35/deleteById',{
            params:{
              id:this.id
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
