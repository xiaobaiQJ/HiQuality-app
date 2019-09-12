<template>
  <div class="A-07 text-center main-a lengthways-a ad-textarea">
    <p class="top-name-p width-623">A-07</p>
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>旁站记录</h3>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td width="117"><p align="center">施工单位 </p></td>
        <td width="209"><el-select v-model="obj.m1" placeholder="请选择施工单位" @change="setUnit">
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
        <td width="117"><p align="center">旁站人 </p></td>
        <td width="209"><input type="text" v-model="obj.m3"></td>
        <td width="85"><p align="center">旁站日期 </p></td>
        <td width="174">
          <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">旁站项目 </p></td>
        <td width="468" colspan="3">
          <textarea cols="30" rows="8" placeholder="按公路工程施工监理规范（JTG G10-2016）附录 A 监理旁站项目规定及旁站计划开展工艺过程旁站；此栏填写单位、分部、分项工程名称及旁站项目；分项工程与审核的承包人上报的单位、分部、分项工程划分一致。" v-model="obj.m5"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">施工过程 <br />
          简述 </p></td>
        <td width="468" colspan="3">
          <textarea cols="30" rows="10" placeholder="主要记录施工单位对该旁站项目的试验或施工过程：
1、旁站项目施工开始时间
2、旁站项目采用施工工艺、安全文明施工情况
3、主要施工机械、材料、人员和完成的工程数量
4、试验与检验。" v-model="obj.m6"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">旁站工作 <br />
          情况 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="11" placeholder="1、工前检查：对进场材料（水泥、砂石材料）、混合料配合比、模板、施工机具、技术人员及作业人员进行检查。
2、过程监督检查：采用的施工方案、工艺、过程控制措施是否与批准的一致；验证其合理性。
3、抽检情况：压实度、塌落度等。" v-model="obj.m7"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">主要数据 <br />
          记录 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="11" placeholder="1、现场检查实测实量数据（几何尺寸）；
2、现场技术员及作业人员数量；
3、作业机械设备数量；
4、试验数据。" v-model="obj.m8"></textarea>
        </td>
      </tr>
      <tr>
        <td width="117"><p align="center">发现问题 <br />
          及处理结 <br />
          果 </p></td>
        <td width="468" colspan="3" >
          <textarea cols="30" rows="12" placeholder="1、现场检查实测实量数据（几何尺寸）；施工或试验过程中若出现质量、安全或其他异常情况的，应如实填写有关处理情况。若一切正常，则应填写&ldquo;无&rdquo;。处理结果就是对问题的处理的跟踪记录，是问题处理后的最终结论记录，也就是对整个问题处理完后的&ldquo;闭合&rdquo; " v-model="obj.m9"></textarea>
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
        name: "A-07",
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
          supervisorTableInfo:{}, //监理用表表头信息
          id: 0
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取监理用表表头信息
        this.$publicFun.getSupervisorTableInfo()
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
        getData(){
          this.axios.get('/HiQuality/A07/findA07ById', {
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
          this.axios.post("/HiQuality/A07/saveA07",this.$qs.stringify({
            a07:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/A07/updateA07', this.$qs.stringify({
            a076:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/A07/deleteA07', {
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
