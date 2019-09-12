<template>
    <div class="D-64 text-center">
      <p class="top-name-p width-1191">D-64</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3><strong>波形梁板外观尺寸检查记录表</strong><strong> </strong></h3>
      <div class="text-left width-1191">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1191">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table width="1242" border="1" cellspacing="0" class="public-tabel">
        <tr>
          <th colspan="2" rowspan="3" scope="row"><p align="center" >外形 <br />
            尺寸</p></th>
          <td colspan="2"> 1</td>
          <td colspan="3"><p >长&#215;宽&#215;波高&#215;厚（设计值)</p></td>
          <td colspan="4"><input type="text" v-model="obj.m1"></td>
          <td width="96"><p >实测值</p></td>
          <td colspan="3"><input type="text" v-model="obj.m2"></td>
        </tr>
        <tr>
          <td colspan="2">2</td>
          <td colspan="3">长&#215;宽&#215;波高&#215;厚（设计值)</td>
          <td colspan="4"><input type="text" v-model="obj.m3"></td>
          <td><p >实测值</p></td>
          <td colspan="3"><input type="text" v-model="obj.m4"></td>
        </tr>
        <tr>
          <td colspan="2">3 </td>
          <td colspan="3">长&#215;宽&#215;波高&#215;厚（设计值)</td>
          <td colspan="4"><input type="text" v-model="obj.m5"></td>
          <td><p >实测值</p></td>
          <td colspan="3"><input type="text" v-model="obj.m6"></td>
        </tr>
        <tr>
          <th colspan="2" rowspan="6" scope="row"><p >连接螺孔及孔位尺寸</p></th>
          <td colspan="2" rowspan="3"><p >梁前端设计值</p></td>
          <td width="68">1</td>
          <td width="103"><p >a&#215;b</p></td>
          <td width="115"><input type="text" v-model="obj.m7"></td>
          <td width="101"><p ><em>X</em><em>前</em></p></td>
          <td width="94"><input type="text" v-model="obj.m8"></td>
          <td width="108"><p >实测</p></td>
          <td width="57">1</td>
          <td><p >a&#215;b</p></td>
          <td width="100"><input type="text" v-model="obj.m9"></td>
          <td width="107"><p ><em>X</em><em>前</em></p></td>
          <td width="89"><input type="text" v-model="obj.m10"></td>
        </tr>
        <tr>
          <td>2</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m11"></td>
          <td><p ><em>X</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m12"></td>
          <td><p >实测</p></td>
          <td>2</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m13"></td>
          <td><p ><em>X</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m14"></td>
        </tr>
        <tr>
          <td>3</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m15"></td>
          <td><p ><em>X</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m16"></td>
          <td><p >实测</p></td>
          <td>3</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m17"></td>
          <td><p ><em>X</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m18"></td>
        </tr>
        <tr>
          <td colspan="2" rowspan="3"><p >梁后端设计值</p></td>
          <td>1</td>
          <td>a&#215;b</td>
          <td><input type="text" v-model="obj.m19"></td>
          <td><p ><em>X</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m20"></td>
          <td><p >实测</p></td>
          <td>1</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m21"></td>
          <td><p ><em>X</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m22"></td>
        </tr>
        <tr>
          <td>2</td>
          <td>a&#215;b</td>
          <td><input type="text" v-model="obj.m23"></td>
          <td><p ><em>X</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m24"></td>
          <td><p >实测</p></td>
          <td>2</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m25"></td>
          <td><p ><em>X</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m26"></td>
        </tr>
        <tr>
          <td>3</td>
          <td>a&#215;b</td>
          <td><input type="text" v-model="obj.m27"></td>
          <td><p ><em>X</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m28"></td>
          <td><p >实测</p></td>
          <td>3</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m29"></td>
          <td><p ><em>X</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m30"></td>
        </tr>
        <tr>
          <th colspan="2" rowspan="6" scope="row"><p >拼接螺孔及孔位尺寸</p></th>
          <td colspan="2" rowspan="3"><p >梁前端设计值</p></td>
          <td>1</td>
          <td><p ><em>Y</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m31"></td>
          <td><p ><em>Y</em><em>1前</em></p></td>
          <td><input type="text" v-model="obj.m32"></td>
          <td><p >实测</p></td>
          <td>1</td>
          <td><p ><em>Y</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m33"></td>
          <td><p ><em>Y</em><em>1前</em></p></td>
          <td><input type="text" v-model="obj.m34"></td>
        </tr>
        <tr>
          <td>2</td>
          <td><p ><em>Y</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m35"></td>
          <td><p ><em>Y</em><em>1前</em></p></td>
          <td><input type="text" v-model="obj.m36"></td>
          <td><p >实测</p></td>
          <td>2</td>
          <td><p ><em>Y</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m37"></td>
          <td><p ><em>Y</em><em>1前</em></p></td>
          <td><input type="text" v-model="obj.m38"></td>
        </tr>
        <tr>
          <td height="25">3</td>
          <td><p ><em>Y</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m39"></td>
          <td><p ><em>Y</em><em>1前</em></p></td>
          <td><input type="text" v-model="obj.m40"></td>
          <td><p >实测</p></td>
          <td>3</td>
          <td><p ><em>Y</em><em>前</em></p></td>
          <td><input type="text" v-model="obj.m41"></td>
          <td><p ><em>Y</em><em>1前</em></p></td>
          <td><input type="text" v-model="obj.m42"></td>
        </tr>
        <tr>
          <td colspan="2" rowspan="3"><p >梁后端设计值</p></td>
          <td>1</td>
          <td><p ><em>Y</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m43"></td>
          <td><p ><em>Y</em><em>1后</em></p></td>
          <td><input type="text" v-model="obj.m44"></td>
          <td><p >实测</p></td>
          <td>1</td>
          <td><p ><em>Y</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m45"></td>
          <td><p ><em>Y</em><em>1后</em></p></td>
          <td><input type="text" v-model="obj.m46"></td>
        </tr>
        <tr>
          <td>2</td>
          <td><p ><em>Y</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m47"></td>
          <td><p ><em>Y</em><em>1后</em></p></td>
          <td><input type="text" v-model="obj.m48"></td>
          <td><p >实测</p></td>
          <td>2</td>
          <td><p ><em>Y</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m49"></td>
          <td><p ><em>Y</em><em>1后</em></p></td>
          <td><input type="text" v-model="obj.m50"></td>
        </tr>
        <tr>
          <td>3</td>
          <td><p ><em>Y</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m51"></td>
          <td><p ><em>Y</em><em>1后</em></p></td>
          <td><input type="text" v-model="obj.m52"></td>
          <td><p >实测</p></td>
          <td>3</td>
          <td><p ><em>Y</em><em>后</em></p></td>
          <td><input type="text" v-model="obj.m53"></td>
          <td><p ><em>Y</em><em>1后</em></p></td>
          <td><input type="text" v-model="obj.m54"></td>
        </tr>
        <tr>
          <th colspan="2" rowspan="8" scope="row"><p >接接螺孔尺寸</p></th>
          <td colspan="2" rowspan="4"><p >梁板前端设计值</p></td>
          <td rowspan="4">1</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m55"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m56"></td>
          <td><p >实测</p></td>
          <td rowspan="4">1</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m57"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m58"></td>
        </tr>
        <tr>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m59"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m60"></td>
          <td><p >实测</p></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m61"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m62"></td>
        </tr>
        <tr>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m63"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m64"></td>
          <td><p >实测</p></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m65"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m66"></td>
        </tr>
        <tr>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m67"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m68"></td>
          <td><p >实测</p></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m69"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m70"></td>
        </tr>
        <tr>
          <td colspan="2" rowspan="4"><p >梁板后端设计值</p></td>
          <td rowspan="4">1</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m71"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m72"></td>
          <td><p >实测</p></td>
          <td rowspan="4">1</td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m73"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m74"></td>
        </tr>
        <tr>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m75"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m76"></td>
          <td><p >实测</p></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m77"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m78"></td>
        </tr>
        <tr>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m79"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m80"></td>
          <td><p >实测</p></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m81"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m82"></td>
        </tr>
        <tr>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m83"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m84"></td>
          <td><p >实测</p></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m85"></td>
          <td><p >a&#215;b</p></td>
          <td><input type="text" v-model="obj.m86"></td>
        </tr>
      </table>
      <p class="bot-hint-p width-1191">施工单位负责人: <input type="text" v-model="obj.m87"> 记录: <input type="text"  v-model="obj.m88"> 复核: <input type="text"  v-model="obj.m89"> 监理员:<input type="text" v-model="nameList1[1].fullName" disabled><br clear="all" />
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
        name: "D-64",
      data(){
        return{
          isAdd:true,
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
          this.axios.get('/HiQuality/d64/findById',{
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
          this.axios.post('/HiQuality/d64/save',this.$qs.stringify({
            BBtD64M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d64/update',this.$qs.stringify({
            BBtD64M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/d64/deleteById',{
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
