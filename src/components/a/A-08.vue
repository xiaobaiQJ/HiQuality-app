<template>
    <div class="A08 text-center main-a lengthways-a ad-textarea">
      <p class="top-name-p width-623">A-08</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>安全监理日志</h3>
      <div class="title-left width-623">监理单位：<input type="text" v-model="obj.m11" disabled></div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel table-padding">
          <tr >
            <td width="150" valign="center" ><p>施工单位</p></td>
            <td width="180" valign="center"  >
              <el-select v-model="obj.m1" placeholder="请选择施工单位" @change="setUnit">
                <el-option
                  v-for="(item,index) in supervisorTableInfo.unitInfos"
                  :key="index"
                  :label="item.contractName"
                  :value="item">
                </el-option>
              </el-select>
            </td>
            <td width="120" valign="center"  ><p align="center" >合同号 </p></td>
            <td width="180" valign="center" >
              <p align="center"><input type="text" v-model="obj.m2"></p>
            </td>
          </tr>
          <tr >
            <td width="150" valign="center" ><p align="center" >记录人 </p></td>
            <td width="180" valign="center" >
              <p align="center"><input type="text" v-model="obj.m3"></p>
            </td>
            <td width="120" valign="center"  ><p align="center" >审核人 </p></td>
            <td width="180" valign="center" >
              <p align="center"><input type="text" v-model="obj.m4"></p>
            </td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >日 期 </p></td>
            <td width="158" valign="center"  >
              <p align="center">
              <div class="block">
                <el-date-picker v-model="obj.m5" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
            <td width="140" valign="center"  ><p align="center" >天 气： </p></td>
            <td width="180" valign="center" >
              <p align="center"><input type="text" v-model="obj.m6"></p>
            </td>
          </tr>
          <tr >
            <td width="160" valign="center"  ><p align="center" >起始时间 </p></td>
            <td width="158" valign="center"  >
              <div class="block">
                <el-date-picker v-model="obj.m7" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
            <td width="140" valign="center" ><p align="center" >终止时间 </p></td>
            <td width="180" valign="center" >
              <div class="block">
                <el-date-picker v-model="obj.m8" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
          <tr class="tr-left table-padding5px">
            <td width="560" valign="top" colspan="6" >
              <p >检查情况（包括部位、工序、安全管理情况、现场安全执行情况、安全巡视时间）：
                <textarea name="" cols="30" rows="28" v-model="obj.m9"></textarea>
              </p>
            </td>
          </tr>
          <tr class="tr-left table-padding5px">
            <td width="560" valign="left" colspan="6" >
              <p class="t-left">处理意见：</p>
              <textarea name="" cols="30" rows="20" v-model="obj.m10"></textarea>
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

  export default {
    name: "A-08",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {},
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
        supervisorTableInfo:{}, //监理用表表头信息
        id: '3'
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
        //获取监理单位信息赋值给主表对象
        this.obj.m11 = this.supervisorTableInfo.unitName2;
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
        console.log("当施工单位改变时**********"+JSON.stringify(item))
        this.obj.m1 = item.unitName;
        this.obj.m2 = item.contractCode;
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A08/findA08ById', {
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
        this.axios.post("/HiQuality/A08/saveA08", this.$qs.stringify({
          a08:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A08/updateA08',this.$qs.stringify({
          a08:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A08/deleteA08', {
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
