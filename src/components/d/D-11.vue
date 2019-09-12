<template>
  <div class="D-11 text-center main-d lengthways-a">
    <p class="top-name-p width-696">D-11</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>混凝土预制构件成品检查记录</strong><strong> </strong></h3>
    <div class="text-left width-696">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-696">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" class="public-tabel">
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center">构 件 名 称</p> </td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >构 件 编 号 </p></td>
        <td width="132" valign="center" ><p align="center" ><input type="text" v-model="obj.m2"></p></td>
      </tr>
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center" >浇 注 时 间 </p></td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><div class="block">
          <el-date-picker v-model="obj.m3" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >张 拉 日 期 </p></td>
        <td width="132" valign="center" ><p align="center" ><div class="block">
          <el-date-picker v-model="obj.m4" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
      </tr>
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center" >养 生 方 法 </p></td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >养 护 时 间 </p></td>
        <td width="132" valign="center" ><div class="block">
          <el-date-picker v-model="obj.m6" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
      </tr>
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center" >混凝土设计标号 </p></td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m7"></p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >混凝土R28强度 </p></td>
        <td width="132" valign="center" ><p align="center" ><input type="text" v-model="obj.m8"></p></td>
      </tr>
      <tr >
        <td width="164" valign="top" colspan="2" ><p align="center" >要求混凝土张拉强度 </p></td>
        <td width="147" valign="top" colspan="3" ><p align="center" ><input type="text" v-model="obj.m9"></p></td>
        <td width="168" valign="top" colspan="3" ><p align="center" >实际混凝土张拉强度 </p></td>
        <td width="132" valign="center" ><p align="center" ><input type="text" v-model="obj.m10"></p></td>
      </tr>
      <tr >
        <td width="164" valign="top" colspan="2" ><p align="center" >要求钢筋（丝）规格 </p></td>
        <td width="147" valign="top" colspan="3" ><p align="center" ><input type="text" v-model="obj.m11"></p></td>
        <td width="168" valign="top" colspan="3" ><p align="center" >实际钢筋（丝）规格 </p></td>
        <td width="132" valign="center" ><p align="center" ><input type="text" v-model="obj.m12"></p></td>
      </tr>
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center" >设计压浆标号 </p></td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m13"></p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >实际压浆标号 </p></td>
        <td width="132" valign="center" ><p align="center" ><input type="text" v-model="obj.m14"></p></td>
      </tr>
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center" >封头混凝土强度 </p></td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m15"></p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >封头日期 </p></td>
        <td width="132" valign="center" ><p align="center" ><div class="block">
          <el-date-picker v-model="obj.m16" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
        </div></td>
      </tr>
      <tr >
        <td width="164" valign="center" colspan="2" ><p align="center" >跨中上拱值 </p></td>
        <td width="147" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m17"></p></td>
        <td width="168" valign="center" colspan="3" ><p align="center" >构件压缩量（m） </p></td>
        <td width="132" valign="center" ><p align="center" ><input type="text" v-model="obj.m18"></p></td>
      </tr>
      <tr >
        <td width="108" valign="center" >
          <p align="center" >拆模后混凝土外观情况 </p></td>
        <td width="503" valign="center" colspan="8" ><p align="center" ><textarea name="" cols="50" rows="5" v-model="obj.m19"></textarea></p></td>
      </tr>
      <tr >
        <td width="108" valign="center" rowspan="7" ><p align="center" >成品外观 <br />
          尺   寸 </p></td>
        <td width="70" valign="center" colspan="2" ><p align="center" >部位 </p></td>
        <td width="119" valign="center" ><p align="center" >项 目 </p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" >设计 </p></td>
        <td width="77" valign="center" ><p align="center" >实际 </p></td>
        <td width="160" valign="center" colspan="2" ><p align="center" >检查意见 </p></td>
      </tr>
      <tr >
        <td width="70" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m20"></p></td>
        <td width="119" valign="center" ><p align="center" >长度(m) </p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m21"></p></td>
        <td width="77" valign="center" ><p align="center" ><input type="text" v-model="obj.m22"></p></td>
        <td width="160" valign="center" colspan="2" rowspan="8" >
          <p align="center" >
            <textarea name="" cols="50" rows="17" v-model="obj.m37"></textarea>
          </p>
        </td>
      </tr>
      <tr >
        <td width="70" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m23"></p></td>
        <td width="119" valign="center" ><p align="center" >高(厚)度(m) </p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m24"></p></td>
        <td width="77" valign="center" ><p align="center" ><input type="text" v-model="obj.m25"></p></td>
      </tr>
      <tr >
        <td width="70" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m26"></p></td>
        <td width="119" valign="center" ><p align="center" >宽度(m) </p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m27"></p></td>
        <td width="77" valign="center" ><p align="center" ><input type="text" v-model="obj.m28"></p></td>
      </tr>
      <tr >
        <td width="70" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m29"></p></td>
        <td width="119" valign="center" ><p align="center" >厚度(m) </p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m30"></p></td>
        <td width="77" valign="center" ><p align="center" ><input type="text" v-model="obj.m31"></p></td>
      </tr>
      <tr >
        <td width="70" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m32"></p></td>
        <td width="119" valign="center" ><p align="center" >对角线差(mm) </p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" ><input type="text" v-model="obj.m33"></p></td>
        <td width="77" valign="center" ><p align="center" ><input type="text" v-model="obj.m34"></p></td>
      </tr>
      <tr >
        <td width="70" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
        <td width="119" valign="center" ><p align="center" >&nbsp;</p></td>
        <td width="77" valign="center" colspan="2" ><p align="center" >&nbsp;</p></td>
        <td width="77" valign="center" ><p align="center" >&nbsp;</p></td>
      </tr>
      <tr >
        <td width="108" valign="center" rowspan="2" ><p align="center" >预埋件位置偏差情况 </p></td>
        <td width="189" valign="center" colspan="3" ><p align="center" >支座钢板 </p></td>
        <td width="154" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m35"></p></td>
      </tr>
      <tr >
        <td width="189" valign="center" colspan="3" ><p align="center" >连接钢板 </p></td>
        <td width="154" valign="center" colspan="3" ><p align="center" ><input type="text" v-model="obj.m36"></p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-696">施工单位技术负责人：<input type="text" v-model="obj.m38" class="input-80">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">  
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年<input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月<input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日<br />
    注： 1、该表对预应力混凝土及非预应力混凝土均适用，按实际发生的项目填写； <br />
         2、小型预制构件可按浇注时间分批检查。   </p>
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
        name: "D-11",
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
          this.axios.get('/HiQuality/d11/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.isAdd = false

            }
          })
        },
        //新增
        addData(){
          this.axios.post('/HiQuality/d11/save',this.$qs.stringify({
            BBtD11M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d11/update',this.$qs.stringify({
            BBtD11M:JSON.stringify(this.obj)
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
          this.axios.post('/HiQuality/d11/deleteById',{
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
