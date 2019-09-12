<template>
    <div class="text-center main-fj3 lengthways-a">
      <p >贵州高速公路建设项目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <p>房建项目建筑物垂直度、标高观测记录 </p>
      <p align="center">建（构）筑物沉降观测记录</p>

      <table border="1" cellspacing="0" cellpadding="0"  class="public-tabel">
        <tr>
          <td width="118" colspan="2" rowspan="3"><p align="center">工程名称 </p></td>
          <td width="177" colspan="3" rowspan="3"><p align="center"><input type="text" v-model="obj.m1"></p></td>
          <td width="204" colspan="5"><p align="center">编   号 </p></td>
          <td width="99" colspan="2" valign="top"><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr>
          <td width="204" colspan="5"><p align="center">基础中心最终沉降量计算值 </p></td>
          <td width="99" colspan="2" valign="top"><p><input type="text" v-model="obj.m3"></p></td>
        </tr>
        <tr>
          <td width="124" colspan="3"><p align="center">偏心距 </p></td>
          <td width="179" colspan="4" valign="top"><p><input type="text" v-model="obj.m4"></p></td>
        </tr>
        <tr>
          <td width="118" colspan="2"><p align="center">仪哭规格 </p></td>
          <td width="177" colspan="3"><p align="center"><input type="text" v-model="obj.m5"></p></td>
          <td width="124" colspan="3"><p align="center">结构形式 </p></td>
          <td width="179" colspan="4" valign="top"><p><input type="text" v-model="obj.m6"></p></td>
        </tr>
        <tr>
          <td width="118" colspan="2"><p align="center">水准点号及高程 </p></td>
          <td width="177" colspan="3"><p align="center"><input type="text" v-model="obj.m7"></p></td>
          <td width="124" colspan="3"><p align="center">结构层数 </p></td>
          <td width="179" colspan="4" valign="top"><p><input type="text" v-model="obj.m8"></p></td>
        </tr>
        <tr>
          <td width="44" rowspan="2"><p align="center">测 <br />
            点 </p></td>
          <td width="75" valign="top"><p>&nbsp;</p></td>
          <td width="129" colspan="2" valign="top"><p>&nbsp;</p></td>
          <td width="171" colspan="4" valign="top"><p>&nbsp;</p></td>
          <td width="179" colspan="4" valign="top"><p>&nbsp;</p></td>
        </tr>
        <tr>
          <td width="75"><p align="center">初次高程 <br />
            (m)</p></td>
          <td width="66"><p align="center">高程（m） </p></td>
          <td width="63"><p align="center">本次 <br />
            下沉 <br />
            （㎜） </p></td>
          <td width="57" colspan="2"><p align="center">高程（m） </p></td>
          <td width="58"><p align="center">本次 <br />
            下沉 <br />
            （㎜） </p></td>
          <td width="56"><p align="center">高程（m） </p></td>
          <td width="63"><p align="center">高程（m） </p></td>
          <td width="58" colspan="2"><p align="center">本次 <br />
            下沉 <br />
            （㎜） </p></td>
          <td width="58"><p align="center">高程（m） </p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">1</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[0].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[0].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[0].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[0].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[0].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[0].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[0].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[0].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[0].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">2</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[1].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[1].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[1].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[1].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[1].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[1].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[1].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[1].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[1].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">3</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[2].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[2].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[2].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[2].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[2].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[2].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[2].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[2].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[2].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">4</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[3].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[3].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[3].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[3].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[3].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[3].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[3].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[3].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[3].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">5</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[4].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[4].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[4].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[4].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[4].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[4].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[4].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[4].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[4].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">6</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[5].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[5].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[5].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[5].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[5].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[5].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[5].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model=controlArr[5].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[5].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">7</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[6].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[6].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[6].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[6].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[6].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[6].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[6].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[6].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[6].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">8</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[7].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[7].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[7].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[7].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[7].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[7].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[7].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[7].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[7].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">9</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[8].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[8].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[8].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[8].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[8].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[8].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[8].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[8].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[8].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">10</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[9].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[9].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[9].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[9].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[9].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[9].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[9].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[9].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[9].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">11</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[10].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[10].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[10].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[10].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[10].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[10].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[10].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[10].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[10].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">12</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[11].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[11].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[11].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[11].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[11].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[11].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[11].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[11].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[11].s9"></p></td>
        </tr>
        <tr>
          <td width="44"><p align="center">13</p></td>
          <td width="75" valign="top"><p><input type="text" v-model="controlArr[12].s1"></p></td>
          <td width="66" valign="top"><p><input type="text" v-model="controlArr[12].s2"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[12].s3"></p></td>
          <td width="57" colspan="2" valign="top"><p><input type="text" v-model="controlArr[12].s4"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[12].s5"></p></td>
          <td width="56" valign="top"><p><input type="text" v-model="controlArr[12].s6"></p></td>
          <td width="63" valign="top"><p><input type="text" v-model="controlArr[12].s7"></p></td>
          <td width="58" colspan="2" valign="top"><p><input type="text" v-model="controlArr[12].s8"></p></td>
          <td width="58" valign="top"><p><input type="text" v-model="controlArr[12].s9"></p></td>
        </tr>
        <tr>
          <td width="44" valign="top"><p>施工 <br />
            进度 </p></td>
          <td width="75"><p align="center"><input type="text" v-model="obj.m9"></p></td>
          <td width="129" colspan="2"><p align="center"><input type="text" v-model="obj.m10"></p></td>
          <td width="171" colspan="4"><p align="center"><input type="text" v-model="obj.m11"></p></td>
          <td width="179" colspan="4"><p align="center"><input type="text" v-model="obj.m12"></p></td>
        </tr>
        <tr>
          <td width="44" valign="top"><p>施工 <br />
            单位 <br />
            观测 <br />
            人员 <br />
            签字 </p></td>
          <td width="75"><p align="center"><input type="text" v-model="obj.m13"></p></td>
          <td width="129" colspan="2"><p align="center"><input type="text" v-model="obj.m14"></p></td>
          <td width="171" colspan="4"><p align="center"><input type="text" v-model="obj.m15"></p></td>
          <td width="179" colspan="4"><p align="center"><input type="text" v-model="obj.m16"></p></td>
        </tr>
        <tr>
          <td width="44" valign="top"><p>监理 <br />
            单位 <br />
            检查 <br />
            人员 <br />
            签字 </p></td>
          <td width="75"><p align="center"><input type="text" v-model="obj.m17"></p></td>
          <td width="129" colspan="2"><p align="center"><input type="text" v-model="obj.m18"></p></td>
          <td width="171" colspan="4"><p align="center"><input type="text" v-model="obj.m19"></p></td>
          <td width="179" colspan="4"><p align="center"><input type="text" v-model="obj.m20"></p></td>
        </tr>
      </table>
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

        name: "FJ4-07",
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
          for(var i= 0; i<13;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/fj407/findById',{
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
          this.axios.post('/HiQuality/fj407/save',this.$qs.stringify({
            fj407:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/fj407/update',this.$qs.stringify({
            fj407:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/fj407/deleteById',{
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
