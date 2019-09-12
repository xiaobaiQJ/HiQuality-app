<template>
  <div class="A16 text-center">
    <p class="top-name-p width-598">A-16</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <h4>黔西南州兴义环城高速公路</h4>
    <h3>中 间 交 工 证 书</h3>
    <div class="text-left width-598">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-598">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel ad-textarea">
        <tr >
          <td width="73" valign="center" ><p align="center">中间交<br/>工内容</p> </td>
          <td width="523" valign="top" colspan="3" >
            <textarea name="" cols="30" rows="10" v-model="obj.m1"></textarea>
          </td>
        </tr>
        <tr >
          <td width="73" valign="center" ><p align="center" >施工单<br/>位签字 </p></td>
          <td width="236" valign="center" ><p align="center" ><input type="text" v-model="obj.m2" placeholder="（项目经理签字） "></p></td>
          <td width="100" valign="center" ><p align="center" >申请日期 </p></td>
          <td width="185" valign="center" ><div class="block display-lnl height-25 input-160">
            <el-date-picker class="input-140"
                            size="mini"
                            v-model="obj.m3" type="date"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="73" valign="center" ><p align="center" >监 理 <br>接收人 </p></td>
          <td width="236" valign="center" >
            <input type="text" v-model="nameList1[1].fullName" placeholder="总监办或驻地办指定人" disabled>
          </td>
          <td width="100" valign="center" ><p align="center" >接收日期 </p></td>
          <td width="185" valign="center" ><input type="text" v-model="nameList1[0].auditTime" disabled class="input-140"></td>
        </tr>
        <tr >
          <td width="73" valign="center" ><p align="center" >监理机构对施工单位中间交工申请的评述意见及其结论 </p></td>
          <td width="523" valign="top" colspan="3" ><p align="left"></p>
            <textarea cols="30" rows="32" v-model="nameList2[0].auditOpinion" placeholder="（监理工程师签认）" disabled ></textarea></td>
        </tr>
        <tr >
          <td width="73" valign="center" ><p align="center" >监理机<br/>构签字 </p></td>
          <td width="236" valign="center" ><p align="center" ><input type="text" v-model="nameList2[1].fullName" placeholder="（监理工程师签字）" disabled> </p></td>
          <td width="100" valign="center" ><p align="center" >日期 </p></td>
          <td width="185" valign="center" ><input type="text" v-model="nameList2[0].auditTime" disabled></td>
        </tr>
        <tr >
          <td width="73" valign="center" ><p align="center" >施工单<br/>位签字 </p></td>
          <td width="236" valign="center" ><p align="center" ><input type="text" v-model="nameList3[1].fullName" placeholder="（资料接收人员签字）" disabled> </p></td>
          <td width="100" valign="center" ><p align="center" >日期 </p></td>
          <td width="185" valign="center" ><input type="text" v-model="nameList3[0].auditTime" disabled></td>
        </tr>
      </table>
    </div>
    <p align="center" ><br clear="all">
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
    name: "A-16",
    data() {
      return {
        isOk: false,//新增字段  用于判断recId为空时 是否可以CRUD
        isAdd: true,
        //rec
        rec: {
          id: '',
          recNo: '',
          tableId: 31,
          contractId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1,
        },
        auditTypeIdArr: [26, 25, 66],
        nameList: [],
        nameList1: [{}, {}],
        nameList2: [{}, {}],
        nameList3: [{}, {}],
        dateArr1: [],
        //主表
        obj: {},
        headerInfo: {}, //表头信息
        id: 0,

      }
    },
    created() {
      console.log(this.$store.state.recId + '-------')
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //this.rec.id = this.$store.state.recId
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if (obj.data != '' && obj.data != null && obj.data != undefined) {
        this.headerInfo = obj.data;
      }
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
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item) => {
            if (item != '' && item != undefined) {
              //更改判断值auditTypeId   白涛 2019年8月11日23:59:31
              if (item[1].auditTypeId == 26) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 25) {
                this.nameList2 = item;
                this.dateArr1 = splitDate(this.nameList2[0].auditTime,'-');
              }
              if (item[1].auditTypeId == 66) {
                this.nameList3 = item;
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
      this.rec.id = this.$store.state.recId;
      this.getData();
    },
    methods: {
      /*      //分项分部单位工程的信息调取接口
            getA16Projects() {
              this.axios.get('/HiQuality/tbInfo/tbA16', {
                params: {
                  projPartsId: this.rec.projPartsId
                }
              }).then(res => {
                console.log("A-16分项分部单位工程的信息调取查询接口");
                console.log(res);
                if (res.data.status == 200) {
                  this.projectObj = res.data.data;
                  this.obj.m1 = this.projectObj.projectName;
                  this.obj.m2 = this.projectObj.projectName2;
                  this.obj.m3 = this.projectObj.projectName3;
                }
              })
            },*/
      //查询
      getData() {
        this.axios.get('/HiQuality/A16/findA16ById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口");
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
          }
          /*         if (res.data.status != 200) {
                     this.getA16Projects();
                   }*/
        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.axios.post("/HiQuality/A16/saveA16", this.$qs.stringify({
          a16: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
            console.log(res);
            if (res.data.status == 200) {
              this.id = res.data.id;
              this.$tost.add();
              this.$skip.skipProcess();
            }

          })

      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.axios.post("/HiQuality/A16/saveA16", this.$qs.stringify({
          a16: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
            console.log(res);
            if (res.data.status == 200) {
              this.id = res.data.id;
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
      },

      //修改
      updateData() {
        this.axios.post('/HiQuality/A16/updateA16', this.$qs.stringify({
          a16: JSON.stringify(this.obj)
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/A16/deleteA16', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
        })
      }
    }

  }
</script>

<style scoped>

</style>
