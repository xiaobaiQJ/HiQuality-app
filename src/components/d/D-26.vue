<template>
  <div class="D-26 text-center ">
    <p class="top-name-p width-654 ">D-26</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>梁（板）封端检查记录</strong><strong> </strong></h3>
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
  <table border="1" cellspacing="0" class="public-tabel">
    <tr >
      <td width="135" valign="center" colspan="2" ><p align="center">项目名称</p> </td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m1"></p></td>
      <td width="156" valign="center" colspan="2" ><p align="center" >梁 (板) 编 号 </p></td>
      <td width="120" valign="center" ><p><input type="text" v-model="obj.m2"></p></td>
    </tr>
    <tr >
      <td width="135" valign="center" colspan="2" ><p align="center" >端    头 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m3"></p></td>
      <td width="156" valign="center" colspan="2" ><p align="center" >混凝土强度(MPa) </p></td>
      <td width="120" valign="center" ><p><input type="text" v-model="obj.m4"></p></td>
    </tr>
    <tr class="date-tr">
      <td width="135" valign="center" colspan="2" ><p align="center" >封端日期 </p></td>
      <td width="212" valign="center" >
        <div class="block">
          <el-date-picker
                          size="mini"
                          v-model="obj.m5"
                          type="date"
                          placeholder="年    月    日"
                          format="yyyy年MM月dd日"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </td>
      <td width="276" valign="center" colspan="3" >
        <div class="block">
          <el-date-picker
            size="mini"
            v-model="obj.m6"
            type="date"
            placeholder="年    月    日"
            format="yyyy年MM月dd日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </td>
    </tr>
    <tr >
      <td width="64" valign="center" rowspan="2" ><p align="center" >端头 <br />
        钢筋 </p></td>
      <td width="71" valign="center" ><p align="center" >数量 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m7"></p></td>
      <td width="276" valign="center" colspan="3" ><p><input type="text" v-model="obj.m8"></p></td>
    </tr>
    <tr >
      <td width="71" valign="center" ><p align="center" >位置 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m9"></p></td>
      <td width="276" valign="center" colspan="3" ><p><input type="text" v-model="obj.m10"></p></td>
    </tr>
    <tr >
      <td width="64" valign="center" rowspan="2" ><p align="center" >端头混凝土 </p></td>
      <td width="71" valign="center" ><p align="center" >数量 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m11"></p></td>
      <td width="276" valign="center" colspan="3" ><p><input type="text" v-model="obj.m12"></p></td>
    </tr>
    <tr >
      <td width="71" valign="center" ><p align="center" >位置 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m13"></p></td>
      <td width="276" valign="center" colspan="3" ><p><input type="text" v-model="obj.m14"></p></td>
    </tr>
    <tr >
      <td width="135" valign="center" colspan="2" ><p align="center" >尺  寸 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m15"></p></td>
      <td width="276" valign="center" colspan="3" ><p><input type="text" v-model="obj.m16"></p></td>
    </tr>
    <tr>
      <td width="135" valign="center" colspan="2" ><p align="center" >混凝土配合比 </p></td>
      <td width="212" valign="center" ><p><input type="text" v-model="obj.m17"></p></td>
      <td width="144" valign="center" ><p align="center" >坍落度(cm) </p></td>
      <td width="132" valign="center" colspan="2" ><p><input type="text" v-model="obj.m18"></p></td>
    </tr>
    <tr >
      <td width="135" valign="center" colspan="2" ><p align="center" >蜂窝、麻面、空洞、掉角等质量缺陷及处理情况记录 </p></td>
      <td width="488" valign="center" colspan="4" >
        <p align="center" >
          <textarea name="" cols="30" rows="10" v-model="obj.m19"></textarea>
        </p>
      </td>
    </tr>
    <tr >
      <td width="135" valign="center" colspan="2" ><p align="center" >备  注 </p></td>
      <td width="488" valign="center" colspan="4" >
        <p align="center" >
          <textarea name="" cols="30" rows="10" v-model="obj.m20"></textarea>
        </p>
      </td>
    </tr>
    <tr >
      <td width="135" valign="center" colspan="2" ><p align="center" >检查意见 </p></td>
      <td width="488" valign="center" colspan="4" >
        <p align="center" >
          <textarea name="" cols="30" rows="10" v-model="obj.m21"></textarea>
        </p>
      </td>
    </tr>
  </table>
  <p class="bot-hint-p width-654">施工单位技术负责人：<input type="text" v-model="obj.m22" class="input-120">记录：<input type="text" v-model="obj.m23" class="input-120">复核：<input type="text" v-model="obj.m24" class="input-120"></p>
    <p class="bot-hint-p width-654">
      监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-160">日期：
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
        name: "D-26",
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
          id:'',
          m5DateArr:[],
          m6DateArr:[]
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
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/d26/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;

            }
          })
        },
        //新增
        addData() {
          this.axios.post('/HiQuality/d26/save', this.$qs.stringify({
            BBtD26M:JSON.stringify(this.obj),
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
        updateData() {
          this.axios.post('/HiQuality/d26/update', this.$qs.stringify({
            BBtD26M:JSON.stringify(this.obj)
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
        deleteData() {
          this.axios.get('/HiQuality/d26/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
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
.date-tr input{
  width: 20px;
  height: auto;
}
.date-tr td input:nth-child(1){
  width: 50px;
}
</style>
