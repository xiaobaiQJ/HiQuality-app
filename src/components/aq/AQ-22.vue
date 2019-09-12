<template>
  <div class="AQ-22 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>岗前教育培训记录表</h3>
    <div class="t-right margin-auto width-623">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr class="public-tabel">
        <td width="120"><p align="center">单位名称</p> </td>
        <td width="194" colspan="3"><p align="center"><input type="text" v-model="headerInfo.unitName" disabled></p></td>
        <td width="99"><p align="center">项目名称 </p></td>
        <td width="204" colspan="2"><input type="text" v-model="obj.m13"></td>
      </tr>
      <tr class="public-tabel">
        <td width="120"><p align="center">作业人员姓名 </p></td>
        <td width="126"><p align="center"><input type="text" v-model="obj.m1"></p></td>
        <td width="68" colspan="2"><p align="center">工种 </p></td>
        <td width="99"><p align="center"><input type="text" v-model="obj.m2"></p></td>
        <td width="80"><p align="center">进场时间 </p></td>
        <td width="124" valign="center">
          <div class="block">
            <el-date-picker class="input-120"
                            size="mini"
                            v-model="obj.m3"
                            type="datetime"
                            value-format="yyyy-MM-dd HH:mm">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr class="public-tabel">
        <td width="120"><p align="center">所属作业单位 </p></td>
        <td width="194" colspan="3"><p><input type="text" v-model="obj.m4"></p></td>
        <td width="99"><p align="center">作业单位 负责人 </p></td>
        <td width="204" colspan="2" valign="top"><p align="center"><input type="text" v-model="obj.m5"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="120"><p align="center">作业位置 </p></td>
        <td width="194" colspan="3"><p align="center"><input type="text" v-model="obj.m6"></p></td>
        <td width="99"><p align="center">作业内容 </p></td>
        <td width="204" colspan="2" valign="top"><p><input type="text" v-model="obj.m7"></p></td>
      </tr>
      <tr>
        <td width="617" colspan="7" valign="top"><p align="left">岗前教育培训内容： </p>
          <textarea rows="10" v-model="obj.m8"></textarea>
        </td>
      </tr>
      <tr>
        <td width="300" colspan="3" valign="top">
          <p align="left">接受培训人签字：<input type="text" v-model="obj.m9"> </p>
          <p>&nbsp;</p>
          <br/>
          <div align="right">接受培训时间：
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m10"
                            type="date"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
        <td width="317" colspan="4" valign="top">
          <p align="left">培训人签字：<input type="text" v-model="obj.m11"> </p>
          <p>&nbsp;</p>
          <br/>
          <div align="right">培训时间：
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m12"
                            type="date"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
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
        name: "AQ-22",
      data(){
        return{
          isAdd:true,
          //主表对象
          obj:{},
          id:'',
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
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        };
        this.$publicFun.getRecInfo()
      },
      mounted() {
        this.getData();
      },
      computed: {
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/Aq22/findById',{
            params: {
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res =>{
            console.log("查询接口");
            console.log(res);
            if(res.data.status == 200){
              this.obj = res.data.data;
              this.isAdd = false;
            }
          })
        },
        //插入
        addData(){
          if(!this.isAdd){
            return false;
          }
          this.axios.post("/HiQuality/Aq22/saveAq22", this.$qs.stringify({
            aq22:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
          .then(res => {
              console.log("插入接口")
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },
        //修改
        updateData() {
          this.axios.post('/HiQuality/Aq22/updateAq22', this.$qs.stringify({
            aq22:JSON.stringify(this.obj)
          }))
            .then(res => {
              console.log("修改接口");
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.$tost.edit();
                this.$skip.skipProcess();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.delete('/HiQuality/Aq22/deleteAq22', {
            params: {
              id: this.id
            }
          }).then(res => {
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
