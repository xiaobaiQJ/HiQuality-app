<template>
    <div class="text-center main-fj3 lengthways-a">
      <p >贵州高速公路建设项目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <p>房建项目基槽验线记录 </p>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="141" colspan="2" rowspan="2"><p align="center">工程名称 </p></td>
          <td width="283" colspan="3" rowspan="2" valign="top"><input type="text" v-model="obj.m1"></td>
          <td width="65" colspan="2"><p>编 号 </p></td>
          <td width="88" valign="top"><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr>
          <td width="65" colspan="2"><p>日 期 </p></td>
          <td width="88" valign="top">
            <div class="block">
              <el-date-picker v-model="obj.m3" type="date" size="mini"  value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="577" colspan="8" valign="top"><p>验线依据及内容： </p>
            <p><input type="text" v-model="obj.m4"></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p></td>
        </tr>
        <tr>
          <td width="577" colspan="8"><p align="center">&nbsp;</p>
            <p align="center">&nbsp;</p>
            <p align="center">&nbsp;</p>
            <p align="center">&nbsp;<input type="text" v-model="obj.m5"></p>
            <p align="center">&nbsp;</p>
            <p align="center">&nbsp;</p>
            <p align="center">&nbsp;</p>
            <p align="center">    驻地监理工程师： <input type="text" v-model="obj.m6" class="input-120"></p></td>
        </tr>
        <tr>
          <td width="577" colspan="8" valign="top"><p>检查意见： <input type="text" v-model="obj.m7"></p>
            <p>&nbsp;</p></td>
        </tr>
        <tr>
          <td width="28" rowspan="2"><p>签字栏 </p></td>
          <td width="137" colspan="2"><p align="center">施测人 </p></td>
          <td width="137"><p align="center">专业质检员 </p></td>
          <td width="137" colspan="2"><p align="center">专业技术负责人 </p></td>
          <td width="137" colspan="2"><p align="center">驻地监理工程师 </p></td>
        </tr>
        <tr>
          <td width="137" colspan="2" valign="top"><p><input type="text" v-model="obj.m8"></p></td>
          <td width="137" valign="top"><p><input type="text" v-model="obj.m9"></p></td>
          <td width="137" colspan="2" valign="top"><p><input type="text" v-model="obj.m10"></p></td>
          <td width="137" colspan="2" valign="top"><p><input type="text" v-model="obj.m11"></p></td>
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
        name: "FJ4-03",
      data() {
        return {
          isAdd: true,
          obj: {},
          //rec表
          rec: {
            recNo: '',
            tableId: '',
            contracId: 0,
            constDate: '',
            testDate: '',
            projPartsId: '1',
            curStatus: 0,
            operUserId: 1
          },
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
        /*  m15DataArr:[],
          headerInfo:{}, //表头信息*/
          id:''
        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
       /* //获取表头信息
        let obj = this.$store.state.unitTable;
        if(obj.data!='' && obj.data!=null && obj.data!=undefined){
          this.headerInfo = obj.data;
        }*/
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        this.$publicFun.getRecInfo()
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
                  this.m15DataArr = splitDate(this.nameList1[0].auditTime,'-');
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
      methods: {
        //查询
        getData(){
          this.axios.get('/HiQuality/fj403/findFj403ById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=> {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
              this.isAdd = false
            }
          })
        },

        //新增
        addData() {
          this.axios.post('/HiQuality/fj403/saveFj403',
            this.$qs.stringify({
              fj403: JSON.stringify(this.obj),
              rec: JSON.stringify(this.rec)
            })).then(res => {
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
        },
        //修改
        updateData() {
          this.axios.post('/HiQuality/fj403/updateFj403', this.$qs.stringify({
            fj403: JSON.stringify(this.obj)
          })).then(res => {
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
        deleteData() {
          this.axios.get('/HiQuality/fj403/deleteFj403', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
          })
        }

      }
    }
</script>

<style scoped>

</style>
