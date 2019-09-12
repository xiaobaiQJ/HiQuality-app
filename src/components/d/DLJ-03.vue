<template>
    <div class="DLJ-03 text-center main-d lengthways-a">
      <p class="top-name-p width-623">DLJ-03</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>路基防护基础基底检查记录表</strong></h3>
      <div class="text-left width-623">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="0" cellspacing="0" class="public-tabel">
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center">工程部位或桩号</p> </td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
            <td width="127" valign="center" colspan="2" ><p align="center" >施工日期 </p></td>
            <td width="184" valign="center" >          <div class="block">
              <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center" >开挖方式 </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m3"> </p></td>
            <td width="127" valign="center" colspan="2" ><p align="center" >检查日期 </p></td>
            <td width="184" valign="center" >          <div class="block">
              <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
          </tr>
          <tr >
            <td width="54" valign="center" rowspan="2" ><p align="center" >地面标高 </p></td>
            <td width="72" valign="center" ><p align="center" >设计 </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m5"> </p></td>
            <td width="67" valign="center" rowspan="2" ><p align="center" >基 底 <br />
              标 高 </p></td>
            <td width="60" valign="center" ><p align="center" >设计 </p></td>
            <td width="184" valign="center" ><p align="center" ><input type="text" v-model="obj.m6"> </p></td>
          </tr>
          <tr >
            <td width="72" valign="center" ><p align="center" >实际 </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m7"> </p></td>
            <td width="60" valign="center" ><p align="center" >实际 </p></td>
            <td width="184" valign="center" ><p align="center" ><input type="text" v-model="obj.m8"> </p></td>
          </tr>
          <tr >
            <td width="54" valign="center" rowspan="2" ><p align="center" >基底地质情况 </p></td>
            <td width="72" valign="center" ><p align="center" >开挖前 </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m9"> </p></td>
            <td width="67" valign="center" rowspan="2" ><p align="center" >承载力（Mpa） </p></td>
            <td width="60" valign="center" ><p align="center" >设计 </p></td>
            <td width="184" valign="center" ><p align="center" ><input type="text" v-model="obj.m10"> </p></td>
          </tr>
          <tr >
            <td width="72" valign="center" ><p align="center" >开挖至设计高程  后 </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m11"> </p></td>
            <td width="60" valign="center" ><p align="center" >实际 </p></td>
            <td width="184" valign="center" ><p align="center" ><input type="text" v-model="obj.m12"> </p></td>
          </tr>
          <tr >
            <td width="127" valign="top" colspan="2" ><p align="center" >设计基底 <br />
              平面尺寸 </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m13"> </p></td>
            <td width="127" valign="top" colspan="2" ><p align="center" >实际基底 <br />
              平面尺寸 </p></td>
            <td width="184" valign="center" ><p align="center" ><input type="text" v-model="obj.m14"> </p></td>
          </tr>
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center" >最低地下水位（m） </p></td>
            <td width="173" valign="center" ><p align="center" ><input type="text" v-model="obj.m15"> </p></td>
            <td width="127" valign="center" colspan="2" ><p align="center" >其  它 </p></td>
            <td width="184" valign="center" ><p align="center" ><input type="text" v-model="obj.m16"> </p></td>
          </tr>
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center" >基底地质情况 <br />
              描 述 </p></td>
            <td width="484" valign="center" colspan="4" ><p><input type="text" v-model="obj.m17"> </p></td>
          </tr>
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center" >换 土 情 况 </p></td>
            <td width="484" valign="top" colspan="4" ><p><input type="text" v-model="obj.m18"> </p></td>
          </tr>
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center" >检<br />查<br />意<br />见 </p></td>
            <td width="484" valign="top" colspan="4" >
              <p ><textarea name="" cols="30" rows="6" v-model="obj.m19"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="127" valign="center" colspan="2" ><p align="center" >备  注 </p></td>
            <td width="484" valign="top" colspan="4" >
              <p ><textarea name="" cols="30" rows="6" v-model="obj.m20"></textarea></p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-623">施工单位技术负责人：<input type="text" v-model="obj.m21">监理员：<input type="text" v-model="nameList1[1].fullName" disabled>
      </p>
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
        name: "DLJ-03",
      data(){
        return{
          isAdd: true,
          obj:{},
          rec: {
            recNo:' ',
            tableId:4,
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id:''
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if(obj.data!='' && obj.data!=null && obj.data!=undefined){
          this.headerInfo = obj.data;
        }
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        //获取rec记录信息
        this.$publicFun.getRecInfo();
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        },
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 39) {
                  this.nameList1 = item;
                }
              }
            })
          }
        },
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      mounted(){
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/dlj3/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
            }
          })
        },
        //新增
        addData(){
          this.axios.post('/HiQuality/dlj3/save',this.$qs.stringify({
            BBtDlj3M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
          })).then(res=>{
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
          this.axios.post('/HiQuality/dlj3/update',this.$qs.stringify({
            BBtDlj3M:JSON.stringify(this.obj)
          })).then(res=>{
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();

            }
          })
        },
        //删除
        deleteData(){
          this.axios.get('/HiQuality/dlj3/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {}
              this.isAdd = true;

            }
          })
        }

      }
    }
</script>

<style scoped>

</style>
