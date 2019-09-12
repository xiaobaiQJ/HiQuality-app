<template>
    <div class="DLJ-04 text-center main-d crosswise-a">
      <p class="top-name-p width-1086">DLJ-04</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3>黔 西 南 州 兴 义 环 城 高 速 公 路</h3>
      <h3><strong>路基强夯施工原始记录表</strong></h3>
      <div class="text-left width-1086">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1086">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="0" cellspacing="0" class="public-tabel" >
        <tr >
          <td width="87" valign="center" colspan="2" ><p align="center" >工程名称 </p></td>
          <td width="200" valign="center" colspan="6" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="60" valign="center" colspan="2" ><p align="center" >桩号部位 </p></td>
          <td width="274" valign="center" colspan="7" ><p><input type="text" v-model="obj.m2"></p></td>
          <td width="61" valign="center" colspan="2" ><p align="center" >施工日期 </p></td>
          <td width="110" valign="center" colspan="3" >          <div class="block">
            <el-date-picker v-model="obj.m3" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
          <td width="68" valign="center" colspan="2" ><p align="center" >填料名称 </p></td>
          <td width="139" valign="center" ><p align="center" ><input type="text"  v-model="obj.m4"></p></td>
        </tr>
        <tr >
          <td width="87" valign="center" colspan="2" ><p align="center" >夯锤质量（t） </p></td>
          <td width="87" valign="center" colspan="3" ><p><input type="text"  v-model="obj.m5"></p></td>
          <td width="113" valign="center" colspan="3" ><p align="center" >锤底直径（m） </p></td>
          <td width="95" valign="center" colspan="3" ><p><input type="text"  v-model="obj.m6"></p></td>
          <td width="95" valign="center" colspan="3" ><p align="center" >夯锤落距（m） </p></td>
          <td width="143" valign="center" colspan="3" ><p><input type="text"  v-model="obj.m7"></p></td>
          <td width="61" valign="center" colspan="2" ><p align="center" >设备型号 </p></td>
          <td width="110" valign="center" colspan="3" ><p><input type="text"  v-model="obj.m8"></p></td>
          <td width="68" valign="center" colspan="2" ><p align="center" >夯击遍数 </p></td>
          <td width="139" valign="center" ><p><input type="text"  v-model="obj.m9"></p></td>
        </tr>
        <tr >
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击  编号 </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >夯击 次数 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯沉值（cm） </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >夯击  编号 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击 次数 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯沉值（cm） </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击  编号 </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >夯击 次数 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯沉值（cm） </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >夯击  编号 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击 次数 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯沉值（cm） </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击  编号 </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击 次数 </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >夯沉值（cm） </p></td>
          <td width="47" valign="center" rowspan="2" ><p align="center" >夯击  编号 </p></td>
          <td width="47" valign="center" colspan="2" rowspan="2" ><p align="center" >夯击 次数 </p></td>
          <td width="48" valign="center" rowspan="2" ><p align="center" >夯沉值（cm） </p></td>
          <td width="139" valign="top" rowspan="12" >
            <p align="center" class="size-12">
              夯点布置示意图<input type="text" v-model="obj.m10" class="height-25">
              <img src="../../assets/files/imgs/D/DLJ-04_wps51.jpg" alt="" width="107" height="94" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps34.png" alt="" width="15" height="15" />

              <img src="../../assets/files/imgs/D/DLJ-04_wps27.png" alt="" width="77" height="33" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps28.png" alt="" width="25" height="26" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps29.png" alt="" width="24" height="24" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps30.png" alt="" width="23" height="23" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps31.png" alt="" width="77" height="33" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps32.png" alt="" width="77" height="33" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps33.png" alt="" width="15" height="15" />

              <img src="../../assets/files/imgs/D/DLJ-04_wps35.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps36.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps37.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps38.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps39.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps40.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps41.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps42.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps43.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps44.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps45.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps46.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps47.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps48.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps49.png" alt="" width="15" height="15" />
              <img src="../../assets/files/imgs/D/DLJ-04_wps50.png" alt="" width="15" height="15" />
            </p>
          </td>
        </tr>
        <tr ></tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="47" valign="center" ><p align="center" >{{noArr1[index]}}</p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="val.s1"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s2"></p></td>
          <td width="47" valign="center" colspan="2" ><p align="center" >{{noArr2[index]}}</p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s3"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s4"></p></td>
          <td width="47" valign="center" ><p align="center" >{{noArr3[index]}}</p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="val.s5"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s6"></p></td>
          <td width="47" valign="center" colspan="2" ><p align="center" >{{noArr4[index]}}</p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s7"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s8"></p></td>
          <td width="47" valign="center" ><p align="center" >{{noArr5[index]}}</p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="val.s9"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="val.s10"></p></td>
          <td width="47" valign="center" ><p align="center" >{{noArr6[index]}}</p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="val.s11"></p></td>
          <td width="48" valign="center" ><p><input type="text" v-model="val.s12"></p></td>
        </tr>
        <tr >
          <td width="447" valign="top" colspan="13" >
            <p class="t-left">施工单位自检意见：<textarea name="" cols="30" rows="4" v-model="obj.m11"></textarea></p>
          </td>
          <td width="414" valign="top" colspan="11" >
            <p class="t-left">监理单位检查意见：<textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea></p>
          </td>
        </tr>
      </table>
      <p >施工单位现场负责人：<input type="text"  v-model="obj.m13">记录：<input type="text"  v-model="obj.m14">监理员：<input type="text" v-model="nameList1[1].fullName" disabled>日期：<input type="text" v-model="nameList1[0].auditTime" disabled><br /><br />
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
        name: "DLJ-04",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
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
          id: '15',
          noArr1:['1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9'],
          noArr2:['1-10','1-11','1-12','1-13','1-14','1-15','1-16','1-17','1-18'],
          noArr3:['1-19','1-20','1-21','1-22','1-23','1-24','1-25','1-26','1-27'],
          noArr4:['1-28','1-29','1-30','1-31','1-32','1-33','1-34','1-35','1-36'],
          noArr5:['1-37','1-38','1-39','1-40','1-41','1-42','1-43','1-44','1-45'],
          noArr6:['1-46','1-47','1-48','1-49','1-50','1-51','1-52','1-53','1-54']
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
                  //this.m15DataArr = splitDate(this.nameList1[0].auditTime, '-');
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
        setSubObj(){
          for(var i= 0; i<9;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData(){
          this.axios.get('/HiQuality/dlj4/findById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList=res.data.data.sub;
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
        //新增
        addData(){
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dlj4/save',this.$qs.stringify({
            BBtDlj4M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr
          this.axios.post('/HiQuality/dlj4/update',this.$qs.stringify({
            BBtDlj4M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/dlj4/deleteById',{
            params:{
              id: this.id
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
  .height-25{
    width: 30px;
    height: 25px;
  }
</style>
