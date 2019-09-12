<template>
  <div class="A-10 text-center main-a lengthways-a">
    <p class="top-name-p width-623">A-10</p>
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>监理指令单</h3>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td width="117"><p align="center">施工单位 </p></td>
        <td width="309" colspan="2"> <el-select v-model="obj.m1" placeholder="请选择施工单位" @change="setUnit">
          <el-option
            v-for="(item,index) in supervisorTableInfo.unitInfos"
            :key="index"
            :label="item.contractName"
            :value="item">
          </el-option>
        </el-select>
        </td>
        <td width="85"><p align="center">合同段 </p></td>
        <td width="174" colspan="2"><input type="text" v-model="obj.m2"></td>
      </tr>
      <tr>
        <td width="117"><p align="center">监理机构 </p></td>
        <td width="468" colspan="5">
          <input type="text" v-model="obj.m3" placeholder="总监办或驻地办名称" disabled>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">签发人 </p></td>
        <td width="209" colspan="2">
          <input type="text" v-model="nameList1[1].fullName" disabled placeholder="总监或驻地监理工程师签名">
        </td>
        <td width="103" colspan="2"><p align="center">日期 </p></td>
        <td width="156"><input type="text" v-model="nameList1[0].auditTime" disabled></td>
      </tr>
      <tr>
        <td width="585" colspan="6" >
          <p class="t-left padding-top5px">致某合同段项目经理部：<input type="text" v-model="obj.m6" class="input-200"></p>
          <p >（说明监理指令的依据、施工单位不符合规定的事实及整改要求等内容）
          <textarea cols="30" rows="42" v-model="obj.m7"></textarea>
        </p><br/>
          <div class="t-left" style="margin-left: 30px;">请于
            <div class="block display-lnl height-25 input-160">
              <span class="demonstration">日期：</span>
              <el-date-picker class="input-140"
                              size="mini"
                              v-model="obj.m7" type="date"
                              format="yyyy年MM月dd日"
                              value-format="yyyy-MM-dd"
                              placeholder="年   月   日">
              </el-date-picker>
            </div>前回复。 <br />
            抄送：<input type="text" class="height-25" v-model="obj.m8">
          </div><br/>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">签收人 </p></td>
        <td width="156" >
          <input type="text" v-model="obj.m9">
        </td>
        <td width="156" colspan="3"><p align="center">日期 </p></td>
        <td width="156">
          <div class="block">
            <el-date-picker v-model="obj.m10" type="date" size="mini"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            placeholder="年   月   日">
            </el-date-picker>
          </div>
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
        name: "A-10",
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
          m7DataArr:[],
          m10DataArr:[],
          //主表
          obj: {},
          supervisorTableInfo:{}, //监理用表表头信息
          auditTypeIdArr:[21],
          nameList:[],
          nameList1:[{},{}],
          id: 0
        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取监理用表表头信息
        this.$publicFun.getSupervisorTableInfo()
        //调用获取监理等流程人签字栏数据接口
        this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;

      },
      computed: {
        getTableInfoList: function () {
          return this.$store.state.supervisorTableInfo
        }
      },
      watch: {
        //获取监理用表表头信息数据
        getTableInfoList: function () {
          this.supervisorTableInfo = this.$store.state.supervisorTableInfo;
          //获取监理单位信息赋值给主表对象
          this.obj.m3 = this.supervisorTableInfo.unitName2;
        },
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
            this.nameList.forEach((item,index)=>{
              if(item!='' && item!=undefined){
                if(item[1].auditTypeId==21){
                  this.nameList1 = item;
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
        /**
         * 当施工单位改变时保存至主表，并取到相对应的合同段值
         * @method setUnit
         * @param {无} 无 参数说明
         * @return {返回值类型} 返回值说明
         */
        setUnit(item) {
          this.obj.m1 = item.unitName;
          this.obj.m2 = item.contractCode;
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/A10/findA10ById', {
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
          this.axios.post("/HiQuality/A10/saveA10",this.$qs.stringify({
            a10:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A10/updateA10', this.$qs.stringify({
            a10:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/A10/deleteA10', {
            params: {
              id: this.id
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
