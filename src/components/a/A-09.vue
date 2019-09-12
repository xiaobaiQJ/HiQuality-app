<template>
  <div class="A09 text-center main-a lengthways-a ad-textarea">
    <p class="top-name-p width-623">A-09</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>安全监理巡视记录</h3>
    <div align="center">
      <table border="1" cellspacing="0" class="public-tabel">
        <tr>
          <td width="84" valign="center"><p align="center">施工单位 </p></td>
          <td width="234" valign="center">
            <p align="center"><el-select v-model="obj.m1" placeholder="请选择施工单位" @change="setUnit">
              <el-option
                v-for="(item,index) in supervisorTableInfo.unitInfos"
                :key="index"
                :label="item.contractName"
                :value="item">
              </el-option>
            </el-select>
            </p>
          </td>
          <td width="83" valign="center"><p align="center">合同号 </p></td>
          <td width="170" valign="center">
            <p align="center"><input type="text" v-model="obj.m2" disabled></p>
          </td>
        </tr>
        <tr>
          <td width="84" valign="center"><p align="center">巡视单位 </p></td>
          <td width="234" valign="center">
            <p align="center"><input type="text" v-model="obj.m3"></p>
          </td>
          <td width="83" valign="center"><p align="center">日 期 </p></td>
          <td width="170" valign="center">
            <div class="block">
              <el-date-picker v-model="obj.m4" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="84" valign="center"><p align="center" class="padding-tb">巡视范围与地点 </p></td>
          <td width="488" valign="top" colspan="3">
            <p><textarea name="" cols="30" rows="16" v-model="obj.m5"></textarea></p>
          </td>
        </tr>
        <tr>
          <td width="84" valign="center"><p align="center" class="padding-tb">巡视情况 </p></td>
          <td width="488" valign="top" colspan="3">
            <p><textarea name="" cols="30" rows="16" v-model="obj.m6"></textarea></p>
          </td>
        </tr>
        <tr>
          <td width="84" valign="center"><p align="center" class="padding-tb">发现的问题及处理意见 </p></td>
          <td width="488" valign="top" colspan="3">
            <p><textarea name="" cols="30" rows="18" v-model="obj.m7"></textarea></p>
          </td>
        </tr>
        <tr>
          <td width="573" valign="right" colspan="4">
            <p class="height-p">巡视人：<input type="text" v-model="obj.m8" class="input-140"></p>
            <div class="dateDiv height-p">
              <div class="block display-lnl height-25 input-160">
                <span class="demonstration">日期：</span>
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m9" type="date"
                                value-format="yyyy-MM-dd">
                </el-date-picker>
              </div>
            </div>
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
    name: "A-09",
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
        this.axios.get('/HiQuality/A09/findA09ById', {
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
        this.axios.post("/HiQuality/A09/saveA09", this.$qs.stringify({
          a09:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A09/updateA09', this.$qs.stringify({
          a09:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A09/deleteA09', {
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
  .height-p {
    height: auto;
    text-align: right;
  }

  .height-p input {
    width: 180px;
  }
</style>
