<template>
  <div class="D-15 text-center">
    <p class="top-name-p width-852">D-15</p>
  <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
  <h3 align="center"><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
  <h3 align="center"><strong>隧道施工观测记录</strong><strong> </strong></h3>
    <div class="text-left width-852">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-852">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
  <div align="center">
    <table border="1" cellspacing="0" >
      <tr class="public-tabel">
        <td width="116" valign="center" colspan="2" ><p align="center">工程名称</p> </td>
        <td width="500" valign="center" colspan="15" ><p><input type="text" v-model="obj.m1"></p></td>
      </tr>
      <tr class="public-tabel">
        <td width="116" valign="center" colspan="2" ><p align="center" >日 期 </p></td>
        <td width="163" valign="center" colspan="5" >
          <div class="block">
          <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
        <td width="128" valign="center" colspan="5" ><p align="center" >桩 号 </p></td>
        <td width="208" valign="center" colspan="5" ><p><input type="text" v-model="obj.m3"></p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >岩 性 </p></td>
        <td width="122" valign="center" colspan="3" ><p align="center" >岩浆岩 </p></td>
        <td width="120" valign="center" colspan="5" ><p align="center" >沉积岩 </p></td>
        <td width="128" valign="center" colspan="4" ><p align="center" >变质岩 </p></td>
        <td width="129" valign="center" colspan="3" ><p align="center" >特殊岩 </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >风化程度 </p></td>
        <td width="98" valign="center" colspan="2" ><p align="center" >未 </p></td>
        <td width="97" valign="center" colspan="4" ><p align="center" >微 </p></td>
        <td width="95" valign="center" colspan="3" ><p align="center" >弱 </p></td>
        <td width="106" valign="center" colspan="4" ><p align="center" >强 </p></td>
        <td width="102" valign="center" colspan="2" ><p align="center" >剧 </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >岩石抗压强度 </p></td>
        <td width="122" valign="center" colspan="3" ><p align="center" >硬岩 </p></td>
        <td width="120" valign="center" colspan="5" ><p align="center" >中硬 </p></td>
        <td width="128" valign="center" colspan="4" ><p align="center" >软岩 </p></td>
        <td width="129" valign="center" colspan="3" ><p align="center" >碎屑粘土 </p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="3" ><p align="center" >结构面性 </p></td>
        <td width="78" valign="center" ><p align="center" >间距（m） </p></td>
        <td width="122" valign="center" colspan="3" ><p align="center" >＞0.8 </p></td>
        <td width="120" valign="center" colspan="5" ><p align="center" >0.8～0.4 </p></td>
        <td width="128" valign="center" colspan="4" ><p align="center" >0.4～0.2 </p></td>
        <td width="129" valign="center" colspan="3" ><p align="center" >＜0.2 </p></td>
      </tr>
      <tr >
        <td width="78" valign="center" ><p align="center" >组  数 </p></td>
        <td width="122" valign="center" colspan="3" ><p align="center" >1～2 </p></td>
        <td width="120" valign="center" colspan="5" ><p align="center" >2～3 </p></td>
        <td width="128" valign="center" colspan="4" ><p align="center" >3～4 </p></td>
        <td width="129" valign="center" colspan="3" ><p align="center" >＞4 </p></td>
      </tr>
      <tr >
        <td width="78" valign="center" ><p align="center" >张开填 <br />
          充情况 <br />
          （mm） </p></td>
        <td width="82" valign="center" ><p >闭合无充填&lt;0.1～0.5 </p></td>
        <td width="81" valign="center" colspan="4" ><p >微张少有充填0.5～1 </p></td>
        <td width="79" valign="center" colspan="3" ><p align="center" >可见明显裂缝，缝充填岩屑 </p></td>
        <td width="49" valign="center" colspan="2" ><p align="center" >无充填彼此咬合 </p></td>
        <td width="112" valign="center" colspan="4" ><p >张开充填粘土软化＞2 </p></td>
        <td width="95" valign="center" ><p >呈分离体土夹石 </p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="4" ><p align="center" >围岩状态及产状 </p></td>
        <td width="78" valign="center" ><p align="center" >粗糙程度 </p></td>
        <td width="82" valign="center" ><p align="center" >台阶状 </p></td>
        <td width="81" valign="center" colspan="4" ><p align="center" >粗糙 </p></td>
        <td width="79" valign="center" colspan="3" ><p align="center" >波浪状 </p></td>
        <td width="49" valign="center" colspan="2" ><p align="center" >光滑 </p></td>
        <td width="112" valign="center" colspan="4" ><p align="center" >平整 </p></td>
        <td width="95" valign="center" ><p align="center" >夹泥 </p></td>
      </tr>
      <tr >
        <td width="78" valign="center" ><p align="center" >断层 </p></td>
        <td width="82" valign="center" ><p align="center" >无断层 </p></td>
        <td width="81" valign="center" colspan="4" ><p align="center" >张性 </p></td>
        <td width="79" valign="center" colspan="3" ><p align="center" >压扭 </p></td>
        <td width="49" valign="center" colspan="2" ><p align="center" >少有断层 </p></td>
        <td width="112" valign="center" colspan="4" ><p align="center" >断层较多 </p></td>
        <td width="95" valign="center" ><p >断层碎石带 </p></td>
      </tr>
      <tr >
        <td width="78" valign="center" ><p align="center" >危石 </p></td>
        <td width="98" valign="center" colspan="2" ><p align="center" >无危岩 </p></td>
        <td width="97" valign="center" colspan="4" ><p align="center" >少量危岩 </p></td>
        <td width="96" valign="center" colspan="4" ><p >少量坍方掉块 </p></td>
        <td width="106" valign="center" colspan="3" ><p >较多不稳定块体 </p></td>
        <td width="102" valign="center" colspan="2" ><p align="center" >呈分离块体 </p></td>
      </tr>
      <tr >
        <td width="78" valign="center" ><p align="center" >与轴线关系 </p></td>
        <td width="148" valign="center" colspan="4" ><p align="center" >平行 </p></td>
        <td width="145" valign="center" colspan="7" ><p align="center" >垂直 </p></td>
        <td width="205" valign="center" colspan="4" ><p align="center" >斜交及交角度数 <br />
          （<input type="text" v-model="obj.m14" class="height-25 input-20 "> &#176;<input type="text" v-model="obj.m15" class="height-25 input-20">&#8242;<input type="text" v-model="obj.m16" class="height-25 input-20">&#8243;） </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >地下水状态 </p></td>
        <td width="98" valign="center" colspan="2" ><p align="center" >无水 </p></td>
        <td width="97" valign="center" colspan="4" ><p align="center" >渗、漏水 </p></td>
        <td width="95" valign="center" colspan="3" ><p align="center" >滴水 </p></td>
        <td width="106" valign="center" colspan="4" ><p align="center" >涌水量 <br />
          （<input type="text" v-model="obj.m18" class="height-25 input-20">m3/min） </p></td>
        <td width="102" valign="center" colspan="2" ><p align="center" >流水量 <br />
          （<input type="text" v-model="obj.m19" class="height-25 input-20">m3/min） </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >毛洞稳定情况 </p></td>
        <td width="98" valign="center" colspan="2" ><p align="center" >无掉块 </p></td>
        <td width="97" valign="center" colspan="4" ><p >局部小块掉落 </p></td>
        <td width="95" valign="center" colspan="3" ><p align="center" >拱顶有较大坍塌底板隆起 </p></td>
        <td width="106" valign="center" colspan="4" ><p align="center" >拱顶坍塌侧壁失稳底板隆起 </p></td>
        <td width="102" valign="center" colspan="2" ><p align="center" >洞体失稳 </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >开挖后已支护段围岩动态 </p></td>
        <td width="98" valign="center" colspan="2" ><p align="center" >锚杆断裂 <br />
          （是/否） </p></td>
        <td width="123" valign="center" colspan="5" ><p align="center" >喷射混凝土裂隙/剥离/剪切破坏 </p></td>
        <td width="69" valign="center" colspan="2" ><p >拱架变形（是/否） </p></td>
        <td width="106" valign="center" colspan="4" ><p align="center" >拱顶喷层剥落（是/否） </p></td>
        <td width="102" valign="center" colspan="2" ><p align="center" >侧墙内移 <br />
          （是/否） </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >岩体出露状态 </p></td>
        <td width="82" valign="center" ><p align="center" >风化带 </p></td>
        <td width="81" valign="center" colspan="4" ><p align="center" >断层带 </p></td>
        <td width="79" valign="center" colspan="3" ><p >节理密集节 </p></td>
        <td width="49" valign="center" colspan="2" ><p align="center" >有侵入体 </p></td>
        <td width="112" valign="center" colspan="4" ><p align="center" >不整合面 </p></td>
        <td width="95" valign="center" ><p align="center" >堆积体 </p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >岩层产状 </p></td>
        <td width="163" valign="center" colspan="5" ><p><input type="text" v-model="obj.m27"></p></td>
        <td width="128" valign="center" colspan="5" ><p align="center" >支护破损情况 </p></td>
        <td width="208" valign="center" colspan="5" ><p><input type="text" v-model="obj.m28"></p></td>
      </tr>
      <tr >
        <td width="116" valign="center" colspan="2" ><p align="center" >其它特殊记事 </p></td>
        <td width="500" valign="center" colspan="15" ><p><input type="text" v-model="obj.m29"></p></td>
      </tr>
    </table>
  </div>
  <p class="bot-hint-p width-852">注：本表除空白处需采取填写方式外，其余采用在相应内容上打勾&#8220;&#8730;&#8221;。每次爆破后进行。 <br />
    施工单位技术负责人：<input type="text" v-model="obj.m30" class="input-65">测量：<input type="text" v-model="obj.m30" class="input-65">记录：<input type="text" v-model="obj.m31" class="input-65">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-65">
    <input type="text" class="date-input height-25" v-model="m15DataArr[0]" disabled>年
    <input type="text" class="date-input height-25" v-model="m15DataArr[1]" disabled>月
    <input type="text" class="date-input height-25" v-model="m15DataArr[2]" disabled>日
    <input type="text" class="date-input height-25" v-model="m15DataArr[3]" disabled>时
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
        name: "D-15",
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
          id:'1',
          dateArr:[],
          timeArr:[]
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
          this.axios.get('/HiQuality/d15/findById',{
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
          let arr = [];
          arr.push(joinDate(this.dateArr,'-'));
          this.timeArr.push("00");
          this.timeArr.push("00");
          arr.push(joinDate(this.timeArr,':'));
          this.obj.m33 = joinDate(arr,' ');
          console.log("要插入的数据：" + JSON.stringify(this.obj));
          this.axios.post('/HiQuality/d15/save',this.$qs.stringify({
            BBtD15M:JSON.stringify(this.obj),
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
          let arr = [];
          arr.push(joinDate(this.dateArr,'-'));
          this.timeArr.push("00");
          this.timeArr.push("00");
          arr.push(joinDate(this.timeArr,':'));
          this.obj.m33 = joinDate(arr,' ');
          this.axios.post('/HiQuality/d15/update',this.$qs.stringify({
            BBtD15M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d15/deleteById',{
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
