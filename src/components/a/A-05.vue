<template>
    <div class="A-05 text-center main-a lengthways-a">
      <p class="top-name-p width-623">A-05</p>
      <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>监理日志</h3>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel ad-textarea">
        <tr>
          <td width="87"><p align="center">监理机构</p> </td>
          <td width="240"><input type="text" v-model="obj.m1"></td>
          <td width="85"><p align="center">合同段 </p></td>
          <td width="210">
            <el-select v-model="obj.m2" placeholder="请选择合同段" @change="setUnit">
              <el-option
                v-for="(item,index) in supervisorTableInfo.unitInfos"
                :key="index"
                :label="item.contractCode"
                :value="item">
              </el-option>
            </el-select>
          </td>
        </tr>
        <tr>
          <td width="87"><p align="center">记录人 </p></td>
          <td width="240"><input type="text" v-model="obj.m3"></td>
          <td width="85"><p align="center">日期 </p></td>
          <td width="210">
            <div class="block">
              <el-date-picker v-model="obj.m4" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="87"><p align="center">审核人总监或驻地监理工程师） </p></td>
          <td width="209"><input type="text" v-model="obj.m5"></td>
          <td width="85"><p align="center">天气 </p></td>
          <td width="174">
            <textarea cols="30" rows="3" v-model="obj.m6" placeholder="日气象晴、阴、雨、雪、冰冻）、温度（℃）（最高 x、最低 x）温度、风向、风级等"></textarea>
          </td>
        </tr>
        <tr>
          <td width="87"><p align="center">主要<br/>施工<br />情况 </p></td>
          <td width="468" colspan="3" valign="top">
            <textarea cols="30" rows="15" placeholder="记录当天各合同段施工情况，包含当天施工项目情况，现场施工机械和劳动力投入情况，主要材料的进出场情况等
 包括以下方面：
 1、各合同段当天主要施工项目
 2、各合同段当天投入的施工人员、主要作业机械统计，主要材料的进出场情况。" v-model="obj.m7" ></textarea>
          </td>
        </tr>
        <tr>
          <td width="87"><p align="center">监理<br/>主要<br />工作 </p></td>
          <td width="468" colspan="3" valign="top">
            <textarea cols="30" rows="16" placeholder="记录当天监理工作，包括会议、审查、批复、巡视、旁站、抽检或验收、下发监理指令单等。
 1、会议：可以是工地会议、专题会议，或参加业主及相关单位主持的会议
 2、审查、批复：变更、开工申请、工程联系单
 3、巡视：派出几个监理工程师（专监）巡视及巡视范围
 4、旁站：派出几个监理人员旁站及旁站项目
 5、抽检或验收情况：现场抽检或工序及隐蔽工程验收
 6、下发监理指令单：份数及编号。" v-model="obj.m8"></textarea>
          </td>
        </tr>
        <tr>
          <td width="87"><p align="center">问题及<br/>处理<br />情况 </p></td>
          <td width="468" colspan="3" valign="top">
            <textarea cols="30" rows="18" placeholder="包括安全文明施工检查情况，工地停工情况及来访检查情况、合理化建议等
    主要包含：
    1、监理巡视检查中发现的问题和隐患及处理情况；
    2、停工情况应注明停工原因、停工范围、起止时间等；
    3、相关单位检查情况：上级部门检查、建设部门检查，有关单位参观来访等；
    4、设计变更现场处理情况；
    5、当日发生并已及时处理的问题、当日处理的此前遗留问题、当日发生而未及时处理、计划日后处理的问题
    6、就有关问题与建设单位、施工单位等进行澄清情况等简述。" v-model="obj.m9"></textarea>
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
    export default {
        name: "A-05",
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
            projPartsId:'',
            curStatus:0,
            operUserId:1
          },
          //主表
          obj: {},
          supervisorTableInfo:{}, //监理用表表头信息
          id: 0
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        this.$publicFun.getSupervisorTableInfo()
        this.supervisorTableInfo = this.$store.state.supervisorTableInfo;
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
          this.obj.m1 = this.supervisorTableInfo.unitName2;
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
          this.obj.m2 = item.contractCode;
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/A05/findA05ById', {
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
          this.axios.post("/HiQuality/A05/saveA05",this.$qs.stringify({
            a05:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A05/updateA05', this.$qs.stringify({
            a05:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/A05/deleteA05', {
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
