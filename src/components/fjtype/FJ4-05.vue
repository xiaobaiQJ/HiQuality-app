<template>
    <div class="text-center main-fj3 lengthways-a">
      <p >贵州高速公路建设项目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <p>房建项目建筑物垂直度、标高观测记录 </p>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="84" colspan="2"><p align="center">工程名称 </p></td>
          <td width="331" colspan="6"><p><input type="text" v-model="obj.m1"></p></td>
          <td width="64" colspan="2"><p>编 号 </p></td>
          <td width="86"><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr>
          <td width="84" colspan="2"><p>施工阶段 </p></td>
          <td width="331" colspan="6"><p><input type="text" v-model="obj.m3"></p></td>
          <td width="64" colspan="2"><p>观 测 <br />
            日 期 </p></td>
          <td width="86" valign="top">
            <div class="block">
              <el-date-picker v-model="obj.m4" type="date" size="mini"  value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="565" colspan="11" valign="top"><p>观测说明（附观测示意图）： </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><input type="text" v-model="obj.m5"></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p></td>
        </tr>
        <tr>
          <td width="293" colspan="6" valign="top"><p align="center">垂直度测量（全高） </p></td>
          <td width="272" colspan="5" valign="top"><p align="center">标高测量（全高） </p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p align="center">观测部位 </p></td>
          <td width="140" colspan="2" valign="top"><p align="center">实测偏差（㎜） </p></td>
          <td width="129" colspan="3" valign="top"><p align="center">观测部位 </p></td>
          <td width="144" colspan="2" valign="top"><p align="center">实测偏差（㎜） </p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[0].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[0].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[0].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[0].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[1].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[1].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[1].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[1].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[2].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[2].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[2].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[2].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[3].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[3].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[3].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[3].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[4].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[4].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[4].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[4].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[5].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[5].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[5].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[5].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[6].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[6].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[6].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[6].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[7].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[7].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[7].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[7].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[8].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[8].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[8].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[8].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[9].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[9].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[9].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[9].s4" ></p></td>
        </tr>
        <tr>
          <td width="153" colspan="4" valign="top"><p><input type="text" v-model="controlArr[10].s1" ></p></td>
          <td width="140" colspan="2" valign="top"><p><input type="text" v-model="controlArr[10].s2" ></p></td>
          <td width="129" colspan="3" valign="top"><p><input type="text" v-model="controlArr[10].s3" ></p></td>
          <td width="144" colspan="2" valign="top"><p><input type="text" v-model="controlArr[10].s4" ></p></td>
        </tr>
        <tr>
          <td width="565" colspan="11" valign="top"><p>结论：<input type="text" v-model="obj.m6"> </p></td>
        </tr>
        <tr>
          <td width="28" rowspan="2"><p>签字栏 </p></td>
          <td width="110" colspan="2"><p align="center">施测人 </p></td>
          <td width="124" colspan="2"><p align="center">专业质检员 </p></td>
          <td width="127" colspan="2"><p align="center">专业技术负责人 </p></td>
          <td width="176" colspan="4"><p align="center">驻地监理工程师 </p></td>
        </tr>
        <tr>
          <td width="110" colspan="2" valign="top"><p><input type="text" v-model="obj.m7"></p></td>
          <td width="124" colspan="2" valign="top"><p><input type="text" v-model="obj.m8"></p></td>
          <td width="127" colspan="2" valign="top"><p><input type="text" v-model="obj.m9"></p></td>
          <td width="176" colspan="4" valign="top"><p><input type="text" class="input-120"v-model="nameList1[1].fullName" disabled></p></td>
        </tr>
      </table>
      <p>本表由建设单位、监理单位、施工单位各保存一份。 </p>
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
        name: "FJ4-05",
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
          auditTypeIdArr:[39,26],
          nameList:[],
          nameList1:[{},{}],
          nameList2:[{},{}],
          /* headerInfo:{}, //表头信息
           id: 0,     //主表id
           pageNo: '1'   //当前页数*/
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        /*  let obj = this.$store.state.unitTable;
          if(obj.data!='' && obj.data!=null && obj.data!=undefined){
            this.headerInfo = obj.data;
          }*/
        //获取rec记录信息
        this.$publicFun.getRecInfo()
        //调用获取监理等流程人签字栏数据接口
        this.getSignName( );
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;

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
          if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
            this.nameList.forEach((item,index)=>{
              if(item!='' && item!=undefined){
                if(item[1].auditTypeId==39){
                  this.nameList1 = item;
                }
                if(item[1].auditTypeId==26){
                  this.nameList2 = item;
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
      mounted() {
        this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<12;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/fj406/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item)
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
          this.axios.post('/HiQuality/fj406/save',this.$qs.stringify({
            fj406:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res=>{
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/fj406/update',this.$qs.stringify({
            fj406:JSON.stringify(this.obj)
          }))
            .then(res=>{
              console.log("修改接口")
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },
        //删除
        deleteData(){
          this.axios.get('/HiQuality/fj406/deleteById',{
            params:{
              id:this.id,

            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {subList:[]};
              this.controlArr = [];
              this.setSubObj();
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
