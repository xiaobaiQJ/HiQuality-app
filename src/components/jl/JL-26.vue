<template>
  <div class="text-center main-jl crosswise">
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>试验检测情况汇总表</h3>
    <div class="text-left width-1004">
      <span>监理单位：
        <el-select v-model="obj.m4" placeholder="请选择监理单位" @change="setUnit">
            <el-option
              v-for="(item,index) in supervisorList"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
      </span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table cellspacing="0" cellpadding="0" class="public-tabel table-tr-height-35" width="1010">
      <tr>
        <td align="left" valign="top" rowspan="4" >
          <span style="position: relative;top: 30px;">合同段</span>
          <span style="float: left; position: relative;left:10px;top: 100px;">试验检测种类</span>
          <img src="../../assets/files/imgs/jl/kq.jpg" width="105" height="106"/>
        </td>
        <td colspan="6">（施工合同段） </td>
        <td colspan="6">（施工合同段） </td>
        <td colspan="6">（施工合同段） </td>
      </tr>
      <tr>
        <td colspan="3">本月</td>
        <td colspan="3">累计</td>
        <td colspan="3">本月</td>
        <td colspan="3">累计</td>
        <td colspan="3">本月</td>
        <td colspan="3">累计</td>
      </tr>
      <tr>
        <td colspan="2" width="95">试验<br />次数</td>
        <td rowspan="2" width="55">不合格<br />次数</td>
        <td colspan="2" width="93">试验<br />次数</td>
        <td rowspan="2" width="53">不合格<br />次数</td>
        <td colspan="2" width="86">试验<br />次数</td>
        <td rowspan="2" width="54">不合格<br />次数</td>
        <td colspan="2" width="97">试验<br />次数</td>
        <td rowspan="2" width="61">不合格<br/>次数</td>
        <td colspan="2" width="102">试验<br />次数</td>
        <td rowspan="2" width="53">不合格<br />次数</td>
        <td colspan="2" width="99">试验<br />次数</td>
        <td rowspan="2" width="52">不合格<br />次数</td>
      </tr>
      <tr>
        <td width="48">自<br />检</td>
        <td width="47">抽<br />检</td>
        <td width="49">自<br />检</td>
        <td width="44">抽<br />检</td>
        <td width="41">自<br />检</td>
        <td width="45">抽<br />检</td>
        <td width="51">自<br />检</td>
        <td width="46">抽<br />检</td>
        <td width="48">自<br />检</td>
        <td width="54">抽<br />检</td>
        <td width="48">自<br />检</td>
        <td width="51">抽<br />检</td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td><input type="text" v-model="val.s1"></td>
        <td><input type="text" v-model="val.s2"></td>
        <td><input type="text" v-model="val.s3"></td>
        <td><input type="text" v-model="val.s4"></td>
        <td><input type="text" v-model="val.s5"></td>
        <td><input type="text" v-model="val.s6"></td>
        <td><input type="text" v-model="val.s7"></td>
        <td><input type="text" v-model="val.s8"></td>
        <td><input type="text" v-model="val.s9"></td>
        <td><input type="text" v-model="val.s10"></td>
        <td><input type="text" v-model="val.s11"></td>
        <td><input type="text" v-model="val.s12"></td>
        <td><input type="text" v-model="val.s13"></td>
        <td><input type="text" v-model="val.s14"></td>
        <td><input type="text" v-model="val.s15"></td>
        <td><input type="text" v-model="val.s16"></td>
        <td><input type="text" v-model="val.s17"></td>
        <td><input type="text" v-model="val.s18"></td>
        <td><input type="text" v-model="val.s19"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-1004">制表：<input type="text" class="input-300" v-model="obj.m1">试验监理工程师：<input type="text" v-model="obj.m2" class="input-200">总监理工程师：<input type="text" class="input-200" v-model="obj.m3"></p>
    <div class="btn">
      <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
      <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
      <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
      <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "JL-26",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {
            subList: []
          },
          controlArr:[],
          //rec
          rec:{
            recNo:'',
            tableId:4,
            contractId:'',
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          //监理单位列表
          supervisorList:['贵州陆通工程管理咨询有限责任公司','安徽省科兴交通建设工程监理有限公司'],
          id: 0,

        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.$publicFun.getRecInfo();
      },
      computed: {
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      mounted() {
        this.setSubObj();
        this.getData();
      },
      methods: {
        /**
         * 当施工单位改变时保存至主表，并取到相对应的合同段值
         * @method setUnit
         * @param {无} 无 参数说明
         * @return {返回值类型} 返回值说明
         */
        setUnit(item) {
          //获取监理单位信息赋值给主表对象
          this.obj.m4 = item;
        },
        setSubObj(){
          let testTypesValue = ['水泥','土','砂','沥青','碎石','片石','块石','石屑','台背回填','钢筋原料','钢筋焊接','混凝土配合比','砂浆配合比'];
          for(var i=0;i<testTypesValue.length;i++){
            let subObj = {'s1':testTypesValue[i]};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL26/findJL26ById', {
            params: {
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
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
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/JL26/saveJL26", this.$qs.stringify({
            jl26:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
              console.log("插入接口")
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
          this.axios.post('/HiQuality/JL26/updateJL26', this.$qs.stringify({
            jl26:JSON.stringify(this.obj),
          }))
            .then(res => {
              console.log("修改接口")
              console.log(res)
              if (res.data.status == 200) {
                this.isAdd = false;
                this.$tost.edit();
                this.$skip.skipProcess();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/JL26/deleteJL26', {
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
