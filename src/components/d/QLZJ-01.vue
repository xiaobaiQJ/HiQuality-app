<template>
    <div class="text-center main-dz lengthways-a" >
      <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <h3>桥梁桩基成孔验收记录表</h3>
      <div class="text-left">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="114"><p align="center">桥梁名称</p></td>
          <td width="92"><p align="center"><input type="text" v-model="obj.m1"></p></td>
          <td width="103"><p align="center">桩基编号 </p></td>
          <td width="103"><p align="center"><input type="text" v-model="obj.m2"></p></td>
          <td width="103"><p align="center">成孔类型 </p></td>
          <td width="103"><p><input type="text" v-model="obj.m3"></p></td>
        </tr>
        <tr>
          <td width="114"><p>设计桩长（米） </p></td>
          <td width="92"><p><input type="text" v-model="obj.m4"></p></td>
          <td width="103"><p align="center">实际桩长 <br />
            （米） </p></td>
          <td width="103"><p><input type="text" v-model="obj.m5"></p></td>
          <td width="103"><p align="center">孔径（米） </p></td>
          <td width="103"><p><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">设计地质 <br />
            嵌岩情况 </p></td>
          <td width="196" colspan="2">
            <p align="center"><input type="text" v-model="obj.m7"></p></td>
          <td width="103"><p align="center">实际地质 <br />
            嵌岩情况 </p></td>
          <td width="206" colspan="2"><p><input type="text" v-model="obj.m8"></p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">设计地质 <br />
            描述情况 </p></td>
          <td width="196" colspan="2"><p><input type="text" v-model="obj.m9"></p></td>
          <td width="103"><p align="center">实际地质 <br />
            描述情况 </p></td>
          <td width="206" colspan="2"><p><input type="text" v-model="obj.m10"></p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">施工单位 <br />
            意见 </p></td>
          <td width="505" colspan="5"><p>
            <textarea name="" cols="50" rows="3" v-model="obj.m11"></textarea>
          </p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">监理办 <br />
            意见 </p></td>
          <td width="505" colspan="5"><p>
            <textarea name="" cols="50" rows="3" v-model="obj.m12"></textarea>
          </p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">设计院 <br />
            意见 </p></td>
          <td width="505" colspan="5"><p>
            <textarea name="" cols="50" rows="3" v-model="obj.m13"></textarea>
          </p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">项目公司意见 </p></td>
          <td width="505" colspan="5"><p>
            <textarea name="" cols="50" rows="3" v-model="obj.m14"></textarea>
          </p></td>
        </tr>
        <tr>
          <td width="114"><p align="center">备注 </p></td>
          <td width="505" colspan="5"><p>
            <textarea name="" cols="50" rows="3" v-model="obj.m15"></textarea>
          </p></td>
        </tr>
      </table>
      <p class="bot-hint-p">填表说明：1、本表由各参加桥梁桩基成孔验收单位代表填写； <br />
        2、填写时必须有明确意见。 </p>
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
        name: "QLZJ-01",
      data(){
        return{
          isAdd:true,
          obj:{},
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          //日期参数
          dateArr: [],
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
        // //调用获取监理等流程人签字栏数据接口
        // this.getSignName();
        // //获取监理等流程人签字栏数据
        // this.nameList = this.$store.state.nameList;
        this.$publicFun.getRecInfo();
      },
      computed: {
        // getNameList: function () {
        //   return this.$store.state.nameList
        // },
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        // getNameList: function () {
        //   this.nameList = this.$store.state.nameList;
        //   if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
        //     this.nameList.forEach((item, index) => {
        //       if (item != '' && item != undefined) {
        //         if (item[1].auditTypeId == 39) {
        //           this.nameList1 = item;
        //           this.m15DataArr = splitDate(this.nameList1[0].auditTime, '-');
        //         }
        //       }
        //     })
        //   }
        // },
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
          this.axios.get('/HiQuality/qlzj/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data.main;
              this.isAdd = false

            }
          })
        },
        //新增
        addData(){
          this.axios.post('/HiQuality/qlzj/save',this.$qs.stringify({
            qlzj:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
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
          this.axios.post('/HiQuality/qlzj/update',this.$qs.stringify({
            qlzj:JSON.stringify(this.obj)
          })).then(res=>{
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
          this.axios.get('/HiQuality/qlzj/deleteById',{
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
