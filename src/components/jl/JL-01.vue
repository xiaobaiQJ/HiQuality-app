<template>
    <div class="JL-01 text-center main-jl">
      <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>抽检记录</h3>
      <p class="top-name-p width-559">编  号：<input type="text" v-model="rec.recNo"></p>
      <table border="1" cellspacing="0" cellpadding="0" width="585" class="public-tabel">
        <tr>
          <td width="117"><p align="center">施工单位 </p></td>
          <td width="209" colspan="2"><input type="text" v-model="headerInfo.unitName" disabled></td>
          <td width="85"><p align="center">合同段 </p></td>
          <td width="174" colspan="2"><input type="text" v-model="headerInfo.contractCode" disabled></td>
        </tr>
        <tr>
          <td width="117"><p align="center">抽检人 </p></td>
          <td width="209" colspan="2"><input type="text" placeholder=" 抽检监理姓名" v-model="obj.m3"></td>
          <td width="85"><p align="center">抽检时间 </p></td>
          <td width="174" colspan="2"><input type="text" v-model="obj.m4"></td>
        </tr>
        <tr>
          <td width="117"><p align="center">工程部位 </p></td>
          <td width="468" colspan="5">
            <input type="text" placeholder=" 填写单位、分部、分项工程名称" v-model="obj.m5">
          </td>
        </tr>
        <tr>
          <td width="117"><p align="center">抽检项目 </p></td>
          <td width="468" colspan="5" valign="top">
            <textarea name="" cols="30" rows="8" placeholder="填写原材料（如钢筋、水泥、沥青、石灰、碎石、砂）、混合料名称（如水泥砂浆、水泥混凝土、沥青混合料和无机结合料稳定材料等混合料）及检测项目，或分项工程中的关键项目（公路工程质量检验评定标准 JTG F80/1-2017 规定）和结构主要尺寸（长、宽、高）" v-model="obj.m6"></textarea>
          </td>
        </tr>
        <tr>
          <td width="117"><p align="center">检查结果 </p></td>
          <td width="468" colspan="5" valign="top">
            <textarea name="" cols="30" rows="8" placeholder="原材料及混合料抽检结果或
分项工程的关键项目抽检结果或
结构主要尺寸（长、宽、高）抽检结果" v-model="obj.m7"></textarea>
          </td>
        </tr>
        <tr>
          <td width="117"><p align="center">检查结论 </p></td>
          <td width="468" colspan="5" valign="top">
            <p><textarea name="" cols="30" rows="6" placeholder="经抽检，原材料及混合料检测项目（如水泥混凝土抗压强度）或
该分项工程的关键项目或
结构主要尺寸合格，或不合格。" v-model="obj.m8"></textarea>
             </p>
          </td>
        </tr>
        <tr>
          <td width="117"><p align="center"><strong>处理意见 </strong></p></td>
          <td width="468" colspan="5" valign="top">
            <p><textarea name="" cols="30" rows="10" placeholder="抽检结果合格，不需处理。若抽检发现不合格项，采取的处理措施1）不能有效制止施工企业违规行为时，应将情况上报业主；凡报告政府有关主管部门的事项，应同时报告监理公司" v-model="nameList1[0].auditOpinion" disabled></textarea>
            </p>
          </td>
        </tr>
        <tr>
          <td width="117"><p align="center"><strong>审核人   </strong></p></td>
          <td width="156" valign="center"><input type="text" placeholder="专监签名" v-model="nameList1[1].fullName" disabled></td>
          <td width="136" colspan="3" valign="top"><p><strong>审核日期 </strong></p></td>
          <td width="176" valign="center">
            <input type="text" class="date-input height-25" v-model="m11DataArr[0]" disabled>年
            <input type="text" class="date-input height-25" v-model="m11DataArr[1]" disabled>月
            <input type="text" class="date-input height-25" v-model="m11DataArr[2]" disabled>日
          </td>
        </tr>
      </table>
      <div class="btn">
        <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
        <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
        <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
        <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
      </div>
    </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "JL-01",
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
          m11DataArr:[],
          //主表
          obj: {},
          auditTypeIdArr:[26],
          nameList:[],
          nameList1:[{},{}],
          headerInfo:{}, //表头信息
          id: 0,
          pageNo:1
        }
      },
      created() {
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.rec.id = this.$store.state.recId
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        }
        //调用获取监理等流程人签字栏数据接口
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
          if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
            this.nameList.forEach((item)=>{
              if(item!='' && item!=undefined){
                if(item[1].auditTypeId==26){
                  this.nameList1 = item;
                  this.m11DataArr = splitDate(this.nameList1[0].auditTime,'-');
                }
              }
            })
          }
        }
      },
      mounted() {
        this.getData();
      },
      methods: {
        //查询
        getData() {
          this.axios.get('/HiQuality/JL01/findJL01ById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
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
          this.obj.m11 = joinDate(this.m11DataArr,'-');
          this.axios.post("/HiQuality/JL01/saveJL01",this.$qs.stringify({
            jl01:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
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
          //this.obj.m11 = joinDate(this.m11DataArr,'-');
          this.axios.post('/HiQuality/JL01/updateJL01', this.$qs.stringify({
            jl01:JSON.stringify(this.obj)
          }))
            .then(res => {
              console.log("修改接口")
              console.log(res)
              if (res.data.status == 200) {
                this.$tost.edit();
                this.$skip.skipProcess();
                this.getData();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/JL01/deleteJL01', {
            params: {
              id: this.id,
              pageNo:this.pageNo
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {}
            }
          })
        }
      }

    }
</script>

<style scoped>

</style>
