<template>
  <div class="D-16 text-center">
    <p class="top-name-p width-654">D-16</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
    <h3 align="center"><strong>锚杆（或小导管）钻孔记录</strong><strong> </strong></h3>
    <div class="text-left width-654">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-654">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0"  width="654" class="public-tabel">
      <tr>
        <td width="178" valign="center" colspan="3" ><p align="center">设计钻孔深度（m）</p></td>
        <td width="74" valign="center" ><input type="text" v-model="obj.m1"></td>
        <td width="200" valign="center" colspan="3" ><p align="center">设计钻孔直径（mm）</p></td>
        <td width="73" valign="center" ><input type="text" v-model="obj.m2"></td>
        <td width="93" valign="center" rowspan="2" ><p align="center" >备注 </p></td>
      </tr>
      <tr>
        <td width="52" valign="center" ><p align="center" >锚杆<br />(钢管)编号 </p></td>
        <td width="52" valign="center" ><p align="center" >地层类别 </p></td>
        <td width="74" valign="center" ><p align="center" >钻孔直径（cm） </p></td>
        <td width="74" valign="center" ><p align="center" >套管外径（cm） </p></td>
        <td width="52" valign="center" ><p align="center" >钻孔时间 </p></td>
        <td width="74" valign="center" ><p align="center" >钻孔深度（cm） </p></td>
        <td width="74" valign="center" ><p align="center" >套管长度（cm） </p></td>
        <td width="73" valign="center" ><p align="center" >钻孔 <br />
          倾角 <br />
          （&#176;&#8242;） </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr.slice((pageNo-1)*pageSize,pageNo*pageSize)"
          :key="index">
        <td width="52" valign="center" ><p><input type="text" v-model="val.s1"></p></td>
        <td width="52" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
        <td width="74" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
        <td width="74" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
        <td width="52" valign="center" >
          <el-date-picker class="input-80"
                          size="mini"
                          v-model="val.s5" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </td>
        <td width="74" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
        <td width="74" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
        <td width="73" valign="center" ><p><input type="text" v-model="val.s8"></p></td>
        <td width="93" valign="center" ><p><input type="text" v-model="val.s9"></p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-654">施工单位技术负责人：<input type="text" v-model="obj.m3" class="input-80">记 录：<input type="text" v-model="obj.m4" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">日期：
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
    <input type="text" class="input-20 height-25" v-model="m15DataArr[1]" disabled>月
    <input type="text" class="input-20 height-25" v-model="m15DataArr[2]" disabled>日
  </p>
    <div class="paging bot-hint-p width-654">
      <el-pagination
        :page-sizes="[pageSize]"
        :current-page.sync="pageNo"
        :pager-count="5"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataSum">
      </el-pagination>
    </div>
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
      <div class="addPage-btn sub-btn"  @click="addPage">下一页</div>
    </div>
  </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "D-16",
      data(){
        return{
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          subSum:0,
          sub:[],
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
          id: '1',
          dataSum: 18,   //数据总条数
          totalPage: 0,
          pageNo: 1, //当前页码数
          pageSize: 18, //每页显示条数

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
        this.$publicFun.getRecInfo();
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        },
        getRecObj: function () {
          return this.$store.state.recInfo
        },
        /*getPage:function () {
          return this.controlArr.slice((this.pageNo-1)*this.pageSize,this.pageNo*this.pageSize);
        }*/
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
                  this.m15DataArr = splitDate(this.nameList1[0].auditTime, '-');
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
        this.setSubObj()
        this.getData();
      },
      methods:{
        addPage(){
          this.dataSum+=18;
          this.pageNo+=1;
          this.sub = [];
          this.setSub()
          this.sub.forEach((item)=>{
            this.controlArr.push(item)
          })
          if(this.$store.state.currentType==1){

          }else {
           this.addSub();
          }

        },
        //新增从表
        addSub(){
          this.sub.forEach((item)=>{
            item.mid = this.id;
          })
          //console.log("从表新增数据：***********"+JSON.stringify(this.sub))
          this.axios.post('/HiQuality/d16/sub/save',this.$qs.stringify({
            bBtD16S:JSON.stringify(this.sub),
          })).then(res=>{
            console.log("从表新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.getData();
            }
          })
        },
        setSubObj(){
          for(var i= 0; i<18;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        setSub(){
          for(var i= 0; i<18;i++){
            let subObj={};
            this.sub.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/d16/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.totalPage = res.data.data.totalPage;
              this.dataSum = res.data.data.size;
              this.obj = res.data.data.main;
              this.id = this.obj.id;
              this.obj.subList = res.data.data.sub;
              this.isAdd = false
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d16/save',this.$qs.stringify({
            BBtD16M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d16/update',this.$qs.stringify({
            BBtD16M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d16/deleteById',{
            params:{
              id:this.id
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.controlArr = [];
              this.obj = {subList:[]}
              this.isAdd = true;
              this.setSubObj();
            }

          })
        }

      }
    }
</script>

<style scoped>

</style>
