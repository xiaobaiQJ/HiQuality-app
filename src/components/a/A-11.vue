<template>
    <div class="A11 text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-623">A-11</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h4>黔西南州兴义环城高速公路</h4>
      <h3>监理指令回复单</h3>
      <div class="text-left width-623">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0">
          <tr class="public-tabel">
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
              <p style="text-indent: 40px;" class="p-lineheight">根据<input type="text" v-model="obj.m4" class="title-input">号《监理指令》的要求，我部已经严格按照相关指令内容进行了整改，具体整改情况如下： <br>
                （按照指令要求对具体整改措施、整改结果进行详细阐述、整改照片等） </p>
              <textarea name="" cols="30" rows="38" v-model="obj.m5"></textarea>
            </td>
          </tr>
          <tr >
            <td width="583" valign="top" colspan="4" ><p >监理工程师意见： </p>
              <p >&nbsp;</p>
              <p >&nbsp;</p>
              <p>
                <span>
                  <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意该整改结果
                </span>
                <span class="mar-left-30px">
                  <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意整改结果，整改后重新回复
                </span>
              </p>
              <br/><br/>
                <p align="right">签字：<input type="text" v-model="nameList1[1].fullName" class="height-25" disabled>
                  <input type="text" v-model="dateArr[0]" class="date-input">年<input type="text" v-model="dateArr[1]" class="date-input">月<input type="text" v-model="dateArr[2]" class="date-input">日 </p><br>
            </td>
          </tr>
        </table>
      </div>
      <div class="bot-hint-p width-623">注：这里的&#8220;监理工程师&#8221;指签发监理指令的人</div>
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
    name: "A-11",
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
        auditTypeIdArr:[26],
        nameList1:[{},{}],
        dateArr:[],
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
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      this.$publicFun.getRecInfo()
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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0) {
          this.nameList.forEach((item) => {
            if(item!='' && item!=undefined){
              if (item[1].auditTypeId == 26) {
                this.nameList1 = item;
                this.dateArr = splitDate(this.nameList1[0].auditTime,'-');
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
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/A11/findA11ById', {
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
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A11/saveA11", this.$qs.stringify({
          a11:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A11/updateA11',this.$qs.stringify({
          a11:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
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
        this.axios.get('/HiQuality/A11/deleteA11', {
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
