<template>
    <div class="A48 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-654">A-48</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>施工人员（岗位）变更申请批复单</h3>
      <p class="top-name-p width-654">责查表-04</p>
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
        <table border="1" cellspacing="0" >
          <tr >
            <td width="641" valign="top" >
              <p>至：<input type="text" v-model="obj.m1"></p><br/><br/>
              <p style="text-indent: 30px;">由于下述原因，特申请变更，请求批准为谢。变更理由及内容简述：</p>
              <p><textarea name="" cols="30" rows="4" v-model="obj.m2"></textarea></p>
              <p >[ ]项目经理<input type="text" v-model="obj.m3" class="input-80"> [ ]施工单位法定代表人：<input type="text" v-model="obj.m4" class="input-80">
                <input type="text" v-model="m5DateArr[0]" class="date-input">年
                <input type="text" v-model="m5DateArr[1]" class="date-input">月
                <input type="text" v-model="m5DateArr[2]" class="date-input">日
              </p><br/>
            </td>
          </tr>
          <tr >
            <td width="641" valign="top">
              <p style="padding: 10px 0;">总监办批复意见： </p><br>
              <div style="margin-left: 20px;">
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意变更
                </p><br>
                <p>
                  [ ] 同意其中一部分，其余不同意变更，具体意见如下：
                </p><br>
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList1[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意变更，具体意见如下：
                </p><br>
              </div><br><br>
              <p align="right" style="margin-right: 50px;"> 签字：<input type="text" v-model="nameList1[1].fullName" disabled class="input-120">
                <input type="text" v-model="nameListDataArr1[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr1[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr1[2]" disabled class="date-input">日
              </p><br>
            </td>
          </tr>
          <tr >
            <td width="641" valign="top">
              <p style="padding: 10px 0;">驻地办批复意见： </p><br>
              <div style="margin-left: 20px;">
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList2[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意变更
                </p><br>
                <p>
                  [ ] 同意其中一部分，其余不同意变更，具体意见如下：
                </p><br>
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList2[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意变更，具体意见如下：
                </p><br>
              </div><br><br>
              <p align="right" style="margin-right: 50px;"> 驻地办：<input type="text" v-model="nameList2[1].fullName" disabled class="input-120">
                <input type="text" v-model="nameListDataArr2[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr2[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr2[2]" disabled class="date-input">日
              </p><br>
            </td>
          </tr>
          <tr >
            <td width="641" valign="top">
              <p style="padding: 10px 0;">项目公司批复意见： </p><br>
              <div style="margin-left: 20px;">
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList3[0].auditStatus===2" class="input-25">
                   <input type="text" value="[ ]" disabled v-else class="input-25">同意变更
                </p><br>
                <p>
                  [ ] 同意其中一部分，其余不同意变更，具体意见如下：
                </p><br>
                <p>
                  <input type="text" value="[√]" disabled v-if="nameList3[0].auditStatus===1" class="input-25">
                  <input type="text" value="[ ]" disabled v-else class="input-25">不同意变更，具体意见如下：
                </p><br>
              </div><br><br>
              <p align="right" style="margin-right: 50px;"> 项目公司：<input type="text" v-model="nameList3[1].fullName" disabled class="input-120">
                <input type="text" v-model="nameListDataArr3[0]" disabled class="date-input">年
                <input type="text" v-model="nameListDataArr3[1]" disabled class="date-input">月
                <input type="text" v-model="nameListDataArr3[2]" disabled class="date-input">日
              </p><br>
            </td>
          </tr>
        </table>
      </div>
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
  import {splitDate,joinDate} from '../../utils/utils'
  export default {
    name: "A-48",
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
        auditTypeIdArr:[25,21,1],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        nameList3:[{},{}],
        nameListDataArr1:[],
        nameListDataArr2:[],
        nameListDataArr3:[],
        id: '3',
        m5DateArr:[]
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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==25){
                this.nameList1 = item;
                this.nameListDataArr1 = splitDate(this.nameList1[0].auditTime,'-');
              }
              if(item[1].auditTypeId==21){
                this.nameList2 = item;
                this.nameListDataArr2 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if(item[1].auditTypeId==10){
                this.nameList3 = item;
                this.nameListDataArr3 = splitDate(this.nameList3[0].auditTime,'-');
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
        this.axios.get('/HiQuality/A48/findA48ById', {
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
        this.axios.post("/HiQuality/A48/saveA48", this.$qs.stringify({
          a48:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A48/updateA48', this.$qs.stringify({
          a48:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A48/deleteA48', {
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

</style>
