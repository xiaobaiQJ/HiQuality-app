
<template>
  <div class=" A-16 text-center main-a">
    <p class="top-name-p width-623">A-16</p>
    <p>贵 州 省 高 速 公 路 建 设 项{{obj.m1}} 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>分项工程（中间）交工证书</h3>
    <table border="1" cellspacing="0" cellpadding="0" width="630" class="public-tabel table-tr-height-40 ad-textarea">
      <tr>
        <td width="117"><p align="center">施工单位 </p></td>
        <td width="209" colspan="2"><input type="text" v-model="headerInfo.unitName" placeholder="施工单位名称" disabled></td>
        <td width="85"><p align="center">合同段 </p></td>
        <td width="174" colspan="2"><input type="text" v-model="headerInfo.contractCode" placeholder="施工合同号" disabled>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">监理机构 </p></td>
        <td width="468" colspan="5">
          <input type="text" v-model="headerInfo.unitName2" placeholder="总监办或驻地办名称" disabled>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">分项工程 </p></td>
        <td width="209" colspan="2"><input type="text" v-model="obj.m1" placeholder="分项工程名称"></td>
        <td width="103" colspan="2"><p align="center"> 单位、分部工程 </p></td>
        <td width="156" style="height: 50px;padding: 5px 0px">
          <input type="text" class="height-20" v-model="obj.m2" placeholder="单位工程名称">
          <input type="text" class="height-20" v-model="obj.m3" placeholder="分部工程名称">
        </td>
      </tr>

      <tr>
        <td width="117"><p align="center">中间交工内容及<br/>
          工程数量等</p></td>
        <td width="468" colspan="5">
          <textarea cols="30" rows="2" v-model="obj.m4" placeholder="该分项工程交工内容及工程数量"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">施工自检结果 </p></td>
        <td width="468" colspan="5"><input type="text" v-model="obj.m5" placeholder="自检合格"></td>
      </tr>
      <tr>
        <td width="117"><p align="center">施工单位负责人 </p></td>
        <td width="156">
          <input type="text" v-model="obj.m8" placeholder="项目经理姓名">
        </td>
        <td width="156" colspan="3"><p align="center"> 申请日期</p></td>
        <td width="156">
          <div class="block">
            <el-date-picker v-model="obj.m7" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">监理接收人</p></td>
        <td width="156">
          <input type="text" v-model="nameList1[1].fullName" placeholder="总监办或驻地办指定人" disabled>
        </td>
        <td width="156" colspan="3"><p align="center">接收日期</p></td>
        <td width="156"><input type="text" v-model="nameList1[0].auditTime" disabled></td>
      </tr>
      <tr>
        <td width="117"><p align="center">质量保证资料及<br/>
          检评资料情况</p></td>
        <td width="468" colspan="5">
          <textarea cols="30" rows="2" v-model="obj.m12" placeholder="经审查，质量保证资料及检评资料齐全或不齐全。"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">监理抽检情况及<br/>
          评述意见和结论</p></td>
        <td width="468" colspan="5">
          <textarea cols="30" rows="32" v-model="nameList1[0].auditOpinion" placeholder="监理抽检情况：
原材料名称：规格，1 组，检测项目，合格；若没有抽此项，就不填；
混合料名称：规格，1 组，检测项目，合格；若没有抽此项，就不填；
关键项目：合格；
结构主要尺寸：满足设计要求；
结论：检验合格，同意该分项工程交工" disabled ></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">监理工程师</p></td>
        <td width="156">
          <input type="text" v-model="nameList2[1].fullName" placeholder="总监或驻地监理工程师签名" disabled>
        </td>
        <td width="136" colspan="3"><p>批准日期</p></td>
        <td width="176">
          <input type="text" class="date-input height-25" v-model="dateArr1[0]" disabled>年
          <input type="text"
                 class="date-input height-25"
                 v-model="dateArr1[1]"
                 disabled>月<input
          type="text" class="date-input height-25" v-model="dateArr1[2]" disabled>日
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">施工负责人</p></td>
        <td width="156"><input type="text" v-model="obj.m16" placeholder="项目经理签名"></td>
        <td width="136" colspan="3"><p align="center">日期</p></td>
        <td width="176">
          <div class="block">
            <el-date-picker
              v-model="obj.m10" type="date"
              format="yyyy年MM月dd日"
              value-format="yyyy-MM-dd"
              placeholder="年     月     日">
            </el-date-picker>
          </div>
        </td>
      </tr>
    </table>
    <div class="btn">
      <div class="add-btn sub-btn" :class="$store.state.recId=='' ? '' : 'disabled-btn' " @click="addData">添加</div>
      <div class="add-btn sub-btn" @click="getData">刷新</div>
      <div class="update-btn sub-btn" :class="$store.state.recId=='' ? 'disabled-btn' : '' " @click="updateData">修改
      </div>
      <div class="delete-btn sub-btn" :class="$store.state.recId=='' ? 'disabled-btn' : '' " @click="deleteData">删除
      </div>
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
      this.rec.id = this.$store.state.recId
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if (obj.data != '' && obj.data != null && obj.data != undefined) {
        this.headerInfo = obj.data;
      }
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
      }
    },
    watch: {
      //获取监理等流程人签字栏数据
      getNameList: function () {
        this.nameList = this.$store.state.nameList;
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          console.log("获取")
          console.log(this.nameList)
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
            }
          })
        }
      }
    },
    mounted() {
      this.rec.id = this.$store.state.recId;
      this.getData();
    },
    methods: {
      //分项分部单位工程的信息调取接口
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
      },
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
          if (res.data.status != 200) {
            this.getA16Projects();
          }
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
