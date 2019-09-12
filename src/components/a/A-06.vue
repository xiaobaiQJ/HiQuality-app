<template>
  <div class="A-06 text-center main-a lengthways-a ad-textarea">
    <p class="top-name-p width-623">A-06</p>
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>巡视记录</h3>
    <p class="top-name-p width-623">编  号：<input type="text" v-model="rec.recNo"></p>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td width="117"><p align="center">施工单位 </p></td>
        <td width="209">
          <el-select v-model="obj.m1" placeholder="请选择施工单位" @change="setUnit">
            <el-option
              v-for="(item,index) in supervisorTableInfo.unitInfos"
              :key="index"
              :label="item.contractName"
              :value="item">
            </el-option>
          </el-select>
        </td>
        <td width="85"><p align="center">合同段 </p></td>
        <td width="174"><input type="text" v-model="obj.m2" disabled></td>
      </tr>
      <tr>
        <td width="117"><p align="center">巡视人 </p></td>
        <td width="209"><input type="text" v-model="obj.m3" placeholder="专监签名"></td>
        <td width="85"><p align="center">巡视时间 </p></td>
        <td width="174">
          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini"
                            class="input-80" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">审核人 </p></td>
        <td width="209"><input type="text" v-model="obj.m5" placeholder="高监（总监）"></td>
        <td width="85"><p align="center">日期 </p></td>
        <td width="174">
          <div class="block">
            <el-date-picker v-model="obj.m6" type="date" size="mini"
                            class="input-80" value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">巡视范围 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="10" placeholder="巡视项目（某大桥或隧道）或路基工程里程桩号范围" v-model="obj.m7"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">主要施工情况 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="12" placeholder="1、巡视范围主要施工项目
2、主要施工项目或关键部位施工现场管理人员，特别是质量、安全管理人员是否到位，特种作业人员是否持证上岗。
3、使用的原材料或混合料、构配件和主要施工机械设备是否与批准的一致。
4、是否按技术、工程设计文件、批准的施工组织设计和方案施工" v-model="obj.m8"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">质量、安全<br/>环保等情况 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="10" placeholder="质量、安全、环保和施工标准化等措施是否落实，施工自检和工序交接是否符合规定；当日巡视范围质量、安全、环保状况。" v-model="obj.m9"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">发现的问题<br/>及处理意见 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="16" placeholder="填写巡视发现问题及处理意见，包括：
1、监理巡视检查发现问题的处理
1）发现施工企业违规操作，应责令其整改，并及时发出监理指令单；
2）发现危及工程质量、施工安全的，应立即向总监或驻地监理工程师报告，由总监或驻地监理工程师采取应急措施，并迅速发出监理指令单，责令其整改；
3）发现对后续施工或其他专业工程产生质量或安全隐患的，应责令施工单位整改，并发出监理指令单。
2、重大问题及时报告
1）不能有效制止施工企业违规行为时，应将情况上报业主；
2）凡报告政府有关主管部门的事项，应同时报告监理公司" v-model="obj.m10"></textarea>
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
        name: "A-06",
      data() {
        return {
          isAdd: true,
          //rec
          rec:{
            recNo:'',
            tableId:'',
            contractId:'',
            constDate:'',
            testDate:'',
            projPartsId:'',
            curStatus:'',
            operUserId:'1'
          },
          //主表
          obj: {},
          supervisorTableInfo:{}, //监理用表表头信息
          id: 0,
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取监理用表表头信息
        this.$publicFun.getSupervisorTableInfo()
        //获取rec记录信息
        this.$publicFun.getRecInfo()
      },
      computed: {
        getTableInfoList: function () {
          return this.$store.state.supervisorTableInfo
        },
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取监理用表表头信息数据
        getTableInfoList: function () {
          this.supervisorTableInfo = this.$store.state.supervisorTableInfo;
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

        /**
         * 当施工单位改变时保存至主表，并取到相对应的合同段值
         * @method setUnit
         * @param {无} 无 参数说明
         * @return {返回值类型} 返回值说明
         */
        setUnit(item) {
          //console.log("当施工单位改变时**********"+JSON.stringify(item))
          this.obj.m1 = item.unitName;
          this.obj.m2 = item.contractCode;
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/A06/findA06ById', {
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
          this.axios.post("/HiQuality/A06/saveA06",this.$qs.stringify({
            a06:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A06/updateA06', this.$qs.stringify({
            a06:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/A06/deleteA06', {
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
