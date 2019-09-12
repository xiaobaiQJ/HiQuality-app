<template>
  <div class="D-43 text-center">
    <p class="top-name-p width-1125">D-43</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3><strong>预应力张拉记录（两端张拉）</strong><strong> </strong></h3>
    <div class="public-tilte flex-r margin-auto width-1043">
      <div>
        <p>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></p>
        <p>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></p>
      </div>
      <div>
        <p>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></p>
        <p>构件名称：<input type="text" v-model="obj.m2"></p>
      </div>
      <div>
        <p>张拉混凝土强度：<input type="text" class="input-80" v-model="obj.m1"></p>
        <div class="dateDiv t-right">张拉日期：
          <div class="block display-lnl height-25 input-80">
            <el-date-picker class="input-140"
                            size="mini"
                            v-model="obj.m3"
                            type="date"
                            format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div>
        <p>编号：<input type="text" v-model="rec.recNo"></p>
      </div>
    </div>
  <table border="1" cellspacing="0" class="public-tabel">
    <tr >
      <td width="73" valign="center" colspan="2" ><br />
        千斤顶 <br />
        编 号 </td>
      <td width="56" valign="center" colspan="2" ><p align="center" >标 定 <br />
        日 期 </p></td>
      <td width="66" valign="center" colspan="2" ><p align="center" >摩 擦 <br />
        系 数 </p></td>
      <td width="75" valign="center" ><p align="center" >油压表编 号 </p></td>
      <td width="66" valign="center" colspan="2" ><p align="center" >初应力读 数 </p></td>
      <td width="113" valign="center" colspan="3" ><p align="center" >超张拉油表 <br />
        读 数 </p></td>
      <td width="85" valign="bottom" colspan="2" ><p align="center" >安装油表 <br />
        读 数 </p></td>
      <td width="122" valign="center" colspan="3" ><p align="center" >顶塞油表读数 </p></td>
      <td width="311" valign="center" colspan="4" ><p align="center" >张拉部位及直、弯束示意图 </p></td>
    </tr>
    <tr >
      <td width="73" valign="top" colspan="2" ><p><input type="text" v-model="obj.m4"></p></td>
      <td width="56" valign="top" colspan="2" ><div class="block">
        <el-date-picker v-model="obj.m5" type="date" size="mini" class="input-80" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
      </div></td>
      <td width="66" valign="top" colspan="2" ><p><input type="text" v-model="obj.m6"></p></td>
      <td width="75" valign="top" ><p><input type="text" v-model="obj.m7"></p></td>
      <td width="66" valign="top" colspan="2" ><p><input type="text" v-model="obj.m8"></p></td>
      <td width="113" valign="top" colspan="3" ><p><input type="text" v-model="obj.m9"></p></td>
      <td width="85" valign="top" colspan="2" ><p><input type="text" v-model="obj.m10"></p></td>
      <td width="122" valign="top" colspan="3" ><p><input type="text" v-model="obj.m11"></p></td>
      <td width="311" valign="top" colspan="4" rowspan="2" ><p><input type="text" v-model="obj.m12"></p></td>
    </tr>
    <tr >
      <td width="73" valign="top" colspan="2" ><p><input type="text" v-model="obj.m13"></p></td>
      <td width="56" valign="top" colspan="2" ><div class="block">
        <el-date-picker v-model="obj.m14" type="date" size="mini" class="input-80" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
      </div></td>
      <td width="66" valign="top" colspan="2" ><p><input type="text" v-model="obj.m15"></p></td>
      <td width="75" valign="top" ><p><input type="text" v-model="obj.m16"></p></td>
      <td width="66" valign="top" colspan="2" ><p><input type="text" v-model="obj.m17"></p></td>
      <td width="113" valign="top" colspan="3" ><p><input type="text" v-model="obj.m18"></p></td>
      <td width="85" valign="top" colspan="2" ><p><input type="text" v-model="obj.m19"></p></td>
      <td width="122" valign="top" colspan="3" ><p><input type="text" v-model="obj.m20"></p></td>
    </tr>
    <tr >
      <td width="54" valign="center" rowspan="2" ><p align="center" >钢束 <br />
        编号 </p></td>
      <td width="66" valign="center" colspan="2" rowspan="2" ><p align="center" >张拉断 <br />
        面编号 </p></td>
      <td width="66" valign="center" colspan="2" rowspan="2" ><p align="center" >千斤顶编  号 </p></td>
      <td width="85" valign="center" colspan="2" rowspan="2" ><p align="center" >记录 <br />
        项目 </p></td>
      <td width="371" valign="center" colspan="9" ><p align="center" >张         拉 </p></td>
      <td width="108" valign="center" colspan="2" rowspan="2" ><p align="center" >小缸读数 <br />
        锚塞回缩 </p></td>
      <td width="72" valign="center" rowspan="2" ><p align="center" >总伸 <br />
        长量 <br />
        （mm） </p></td>
      <td width="90" valign="center" rowspan="2" ><p align="center" >滑、断 <br />
        丝(钢筋) <br />
        情  况 </p></td>
      <td width="56" valign="center" rowspan="2" ><p align="center" >处理 <br />
        情况 </p></td>
    </tr>
    <tr >
      <td width="65" valign="center" ><p align="center" >初读数 </p></td>
      <td width="57" valign="center" colspan="2" ><p align="center" >第一 <br />
        行程 </p></td>
      <td width="47" valign="center" ><p align="center" >第二行程 </p></td>
      <td width="75" valign="center" colspan="2" ><p align="center" >超张拉 </p></td>
      <td width="53" valign="center" colspan="2" ><p align="center" >回油 </p></td>
      <td width="72" valign="center" ><p align="center" >安装 <br />
        应力 </p></td>
    </tr>
    <tr >
      <td width="54" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[0].s1"></p></td>
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[0].s21"></p>
      </td>
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[0].s31"></p>
      </td>
      <td width="85" valign="center" colspan="2" ><p align="center" >油表读数 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s41"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[0].s51"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s61"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s71"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s81"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[0].s91"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >小缸 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[0].s101"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[0].s111"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[0].s121"></p></td>
    </tr>
    <tr >
      <td width="85" valign="center" colspan="2" ><p align="center" >伸长量 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s42"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[0].s52"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s62"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s72"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s82"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[0].s92"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >回缩 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[0].s102"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[0].s112"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[0].s122"></p></td>
    </tr>
    <tr >
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[0].s22"></p>
      </td>
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[0].s32"></p>
      </td>
      <td width="85" valign="center" colspan="2" ><p align="center" >油表读数 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s43"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[0].s53"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s63"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s73"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s83"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[0].s93"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >小缸 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[0].s103"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[0].s113"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[0].s123"></p></td>
    </tr>
    <tr >
      <td width="85" valign="center" colspan="2" ><p align="center" >伸长量 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s44"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[0].s54"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s64"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s74"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s84"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[0].s94"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >回缩 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[0].s104"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[0].s114"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[0].s124"></p></td>
    </tr>
    <tr >
      <td width="54" valign="center" rowspan="4" ><p><input type="text" v-model="controlArr[1].s1"></p></td>
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[1].s21"></p>
      </td>
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[1].s31"></p>
      </td>
      <td width="85" valign="center" colspan="2" ><p align="center" >油表读数 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s41"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[1].s51"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s61"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s71"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s81"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[1].s91"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >小缸 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[1].s101"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[1].s111"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[1].s121"></p></td>
    </tr>
    <tr >
      <td width="85" valign="center" colspan="2" ><p align="center" >伸长量 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s42"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[1].s52"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s62"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s72"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s82"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[1].s92"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >回缩 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[1].s102"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[1].s112"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[1].s122"></p></td>
    </tr>
    <tr >
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[1].s22"></p>
      </td>
      <td width="66" valign="center" colspan="2" rowspan="2" >
        <p><input type="text" v-model="controlArr[1].s32"></p>
      </td>
      <td width="85" valign="center" colspan="2" ><p align="center" >油表读数 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s43"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[1].s53"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s63"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s73"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s83"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[1].s93"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >小缸 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[1].s103"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[1].s113"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[1].s123"></p></td>
    </tr>
    <tr >
      <td width="85" valign="center" colspan="2" ><p align="center" >伸长量 </p></td>
      <td width="66" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s44"></p></td>
      <td width="56" valign="center" ><p><input type="text" v-model="controlArr[1].s54"></p></td>
      <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s64"></p></td>
      <td width="75" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s74"></p></td>
      <td width="53" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s84"></p></td>
      <td width="72" valign="center" ><p><input type="text" v-model="controlArr[1].s94"></p></td>
      <td width="108" valign="center" colspan="2" ><p align="center" >回缩 </p></td>
      <td width="72" valign="top" ><p><input type="text" v-model="controlArr[1].s104"></p></td>
      <td width="90" valign="top" ><p><input type="text" v-model="controlArr[1].s114"></p></td>
      <td width="56" valign="top" ><p><input type="text" v-model="controlArr[1].s124"></p></td>
    </tr>
  </table>
  <p class="bot-hint-p width-1125">张拉负责人：<input type="text" v-model="obj.m21"> 油泵操作员：<input type="text" v-model="obj.m22"> 记录：<input type="text" v-model="obj.m23">监理员：<input type="text" v-model="nameList1[1].fullName" disabled>
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
        name: "D-43",
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id: '1'     //主表id
        }
      },
      created() {
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
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<2;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d43/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList = res.data.data.sub;
              this.isAdd = false;
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
        //插入
        addData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d43/save',this.$qs.stringify({
            BBtD43M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d43/update',this.$qs.stringify({
            BBtD43M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d43/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
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
