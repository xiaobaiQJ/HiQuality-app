<template>
    <div class="A11s text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-623">A-11增</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>监理指令回复单</h3>
      <div class="text-left">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" width="630">
          <tr class="tr-height">
            <td width="107" valign="center" ><p align="center">签发人</p></td>
            <td width="219" valign="center" >
              <p><input type="text" v-model="obj.m1"></p>
            </td>
            <td width="115" valign="center" ><p align="center" >日期 </p></td>
            <td width="140" valign="center" >
              <div class="block">
                <el-date-picker v-model="obj.m2" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
          <tr >
            <td width="583" valign="top" colspan="4" ><p >&nbsp;</p>
              <p >致（监理工程师）：<input type="text" v-model="nameList1[1].fullName" class="title-input" disabled></p><br>
               <p style="text-indent: 30px;" class="p-lineheight">根据<input type="text" v-model="obj.m4" class="title-input">号《监理指令》的要求，我部已经严格按照相关指令内容进行了整改，具体整改情况如下： <br>
                （按照指令要求对具体整改措施、整改结果进行详细阐述、整改照片等） </p>
              <textarea name="" cols="30" rows="26" v-model="obj.m5"></textarea>
            </td>
          </tr>
          <tr >
            <td width="583" valign="top" colspan="4" ><p >驻地办意见： </p><br/><br/><br/>
              <p>
                <span>
                  <input type="text" value="[√]" disabled v-if="nameList2[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意该整改结果
                </span>
                <span class="mar-left-30px">
                  <input type="text" value="[√]" disabled v-if="nameList2[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意整改结果，整改后重新回复
                </span>
              </p>
              <br/><br/><br/>
              <p style="margin-left: 15%;">驻地监理工程师：<input type="text" class="input-120" v-model="nameList2[1].fullName" disabled>
                <input type="text" class="date-input" v-model="dateArr2[0]">年
                <input type="text" class="date-input" v-model="dateArr2[1]">月
                <input type="text" class="date-input" v-model="dateArr2[2]">日
              </p>
            </td>
          </tr>
          <tr >
            <td width="583" valign="top" colspan="4" ><p >总监办意见： </p>
              <p >&nbsp;</p><br/>
              <p>
                <span>
                  <input type="text" value="[√]" disabled v-if="nameList3[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意该整改结果
                </span>
                <span class="mar-left-30px">
                  <input type="text" value="[√]" disabled v-if="nameList3[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意整改结果，整改后重新回复
                </span>
              </p>
              <br/><br/><br/>
              <p style="margin-left: 15%;">总监理工程师签字：<input type="text" class="input-120" v-model="nameList3[1].fullName"  disabled>
                <input type="text" class="date-input" v-model="dateArr3[0]">年
                <input type="text" class="date-input" v-model="dateArr3[1]">月
                <input type="text" class="date-input" v-model="dateArr3[2]">日
              </p>
            </td>
          </tr>
        </table>
      </div>
      <div class="bot-hint-p width-623">注：这里的&#8220;监理工程师&#8221;指签发监理指令的人，如果总监办下发的工作指令，回复时增加一行驻地办签字意见。</div>
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
  import {splitDate} from "../../utils/utils";
  export default {
    name: "A-11s",
    data() {
      return {
        isAdd: true,
        //rec
        rec:{
          recNo:'',
          tableId:4,
          contractId:0,
          constDate:'',
          testDate:'',
          projPartsId:'1',
          curStatus:0,
          operUserId:1
        },
        //主表
        obj: {},
        headerInfo:{}, //表头信息
        auditTypeIdArr:[26,25,21],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        dateArr2:[],
        dateArr3:[],
        id: '3'
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
      this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
        this.nameList.forEach((item,index)=>{
          if(item!='' && item!=undefined){
            if(item[1].auditTypeId==26){
              this.nameList1 = item;
            }
            if(item[1].auditTypeId==25){
              this.nameList2 = item;
              this.dateArr2 = splitDate(this.nameList2[0].auditTime,'-');
            }
            if(item[1].auditTypeId==21){
              this.nameList3 = item;
              this.dateArr3 = splitDate(this.nameList3[0].auditTime,'-');
            }
          }
        })
      };
      this.$publicFun.getRecInfo()

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
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/A11Z/findA11ZById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId:this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A11Z/saveA11Z", this.$qs.stringify({
          a11z:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A11Z/updateA11Z', this.$qs.stringify({
          a11z:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A11Z/deleteA11Z', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.obj = {};
          }
        })
      }

    }
  }
</script>

<style scoped>
  .bot-div{
    width: 591px;
  }
</style>
