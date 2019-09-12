<template>
    <div class="D-65 text-center">
      <p class="top-name-p width-710">D-65</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>隧道管棚安装检查记录表</strong><strong> </strong></h3>
      <div class="text-left width-710">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-710">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="1" cellspacing="0" class="public-tabel">
        <tr >
          <td width="108" valign="center" colspan="2" ><p align="center">工程名称</p> </td>
          <td width="168" valign="center" colspan="2" ><p><input type="text"  v-model="obj.m1"> </p></td>
          <td width="108" valign="center" ><p align="center" >施工时间 </p></td>
          <td width="240" valign="center" >          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="108" valign="center" colspan="2" ><p align="center" >桩号及部位 </p></td>
          <td width="168" valign="center" colspan="2" ><p><input type="text" v-model="obj.m3"> </p></td>
          <td width="108" valign="center" ><p align="center" >检验时间 </p></td>
          <td width="240" valign="center" >          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >序号 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >检验项目 </p></td>
          <td width="101" valign="center" ><p align="center" >规定值或允许偏差 </p></td>
          <td width="108" valign="center" ><p align="center" >检验方法和频率 </p></td>
          <td width="240" valign="center" ><p align="center" >实测数据 </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >1 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >管棚长度 </p></td>
          <td width="101" valign="center" ><p align="center" >符合设计 </p></td>
          <td width="108" valign="center" rowspan="7" ><p align="center" >每环检查一次 </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m5"> </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >2 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >管棚根数 </p></td>
          <td width="101" valign="center" ><p align="center" >符合设计 </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m6"> </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >3 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >管棚直径 </p></td>
          <td width="101" valign="center" ><p align="center" >符合设计 </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m7"> </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >4 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >管棚壁厚 </p></td>
          <td width="101" valign="center" ><p align="center" >符合设计 </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m8"> </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >5 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >管棚间距 </p></td>
          <td width="101" valign="center" ><p align="center" >&#177;10mm </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m9"> </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >6 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >外插角 </p></td>
          <td width="101" valign="center" ><p>符合设计 </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m10"> </p></td>
        </tr>
        <tr >
          <td width="42" valign="center" ><p align="center" >7 </p></td>
          <td width="133" valign="center" colspan="2" ><p align="center" >与上环搭接长度 </p></td>
          <td width="101" valign="center" ><p align="center" >符合设计 </p></td>
          <td width="240" valign="center" ><p><input type="text"  v-model="obj.m11"> </p></td>
        </tr>
        <tr >
          <td width="624" valign="top" colspan="6" >
            <p class="t-left">施工描述：
              <textarea name="" cols="50" rows="5" v-model="obj.m12"></textarea>
            </p>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-710">施工单位技术负责人：<input type="text"  v-model="obj.m13" class="input-50"> 记录：<input type="text" v-model="obj.m14" class="input-50"> 监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-50"> 
        <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
        <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
        <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
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
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "D-65",
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
          dateArr:[],
          id: '1'     //主表id
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
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/d65/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.dateArr = splitDate(this.obj.m16,'-');
            }
          })
        },
        //新增
        addData(){
          this.obj.m16 = joinDate(this.dateArr,'-');
          this.axios.post('/HiQuality/d65/save',this.$qs.stringify({
            BBtD65M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d65/update',this.$qs.stringify({
            BBtD65M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d65/deleteById',{
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
