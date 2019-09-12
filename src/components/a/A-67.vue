<template>
    <div class="A67 text-center main-a lengthways-a table-padding5px">
      <p class="top-name-p width-654">A-67</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>公路工程重大质量事故快报</h3>
      <p class="title-p-right margin-auto width-654">责查表-23</p>
      <div class="public-tilte flex-r margin-auto width-654">
        <div>
          <p>施工单位：<el-select v-model="obj.m18" placeholder="请选择施工单位" @change="setUnit" class="title-select">
              <el-option
                v-for="(item,index) in ownerTableInfo"
                :key="index"
                :label="item.contractName"
                :value="item">
              </el-option>
            </el-select>
          </p>
          <p>监理单位：<input type="text" v-model="obj.m20"></p>
        </div>
        <div>
          <p>施工合同号：<input type="text" v-model="obj.m19" class="input-230"></p>
          <p>监理合同号：<input type="text" v-model="obj.m21" class="input-230"></p>
        </div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" class="public-tabel table-tr-height-45">
          <tr >
            <td width="80" valign="center" ><p align="center">工程名称</p></td>
            <td width="240" valign="center" ><p align="center" ><input type="text" v-model="obj.m1"></p></td>
            <td width="80" valign="center" ><p align="center" >发生时间 </p></td>
            <td width="120" valign="center" >
              <div class="block">
                <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-120" value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </td>
          </tr>
          <tr >
            <td width="80" valign="center" ><p align="center" >发生地点 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m3"></p></td>
            <td width="100" valign="center" ><p align="center" >实物工作量 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m4"></p></td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >结构类型 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m5"></p></td>
            <td width="160" valign="center" ><p align="center" >伤亡情况 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m6"></p></td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >直接经济损失 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m7"></p></td>
            <td width="160" valign="center" ><p align="center" >建设单位 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m8"></p></td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >设计单位名称<br/>及资质等级 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m9"></p></td>
            <td width="160" valign="center" ><p align="center" >施工单位名称<br/>及资质等级 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m10"></p></td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >监理单位名称<br/>及资质等级 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m11"></p></td>
            <td width="160" valign="center" ><p align="center" >监督单位名称 </p></td>
            <td width="160" valign="center" ><p align="center" ><input type="text" v-model="obj.m12"></p></td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >事故经过及<br/>初步原因分析 </p></td>
            <td width="481" valign="center" colspan="3" >
              <p align="center" ><textarea name="" cols="30" rows="16" v-model="obj.m13"></textarea></p>
            </td>
          </tr>
          <tr >
            <td width="160" valign="center" ><p align="center" >采取措施 </p></td>
            <td width="481" valign="center" colspan="3" >
              <p align="center" ><textarea name="" cols="30" rows="16" v-model="obj.m14"></textarea></p>
            </td>
          </tr>
        </table>
      </div>
      <div class="bot-hint-p width-710">填报单位： （盖章）<input type="text" v-model="obj.m15" class="input-160">  报告人：<input type="text" v-model="obj.m16" class="input-160">
        <div class="block display-lnl height-25">
          <el-date-picker class="input-80"
                          size="mini"
                          v-model="obj.m17" type="date"
                          format="yyyy年MM月dd日"
                          value-format="yyyy-MM-dd"
                          placeholder="年   月   日">
          </el-date-picker>
        </div>
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
    name: "A-67",
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
        //主表对象
        obj: {

        },
        ownerTableInfo:{}, //总监办用表表头信息
        id:'',
        dateArr:[]
      }
    },
    created(){
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取总监办和业主用表表头信息
      this.$publicFun.getOwnerTableInfo()
    },
    computed: {
      getTableInfoList: function () {
        return this.$store.state.ownerTableInfo
      }
    },
    watch: {
      //获取总监办和业主用表表头信息数据
      getTableInfoList: function () {
        this.ownerTableInfo = this.$store.state.ownerTableInfo;
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
        //获取施工单位信息赋值给主表对象
        this.obj.m18 = item.unitName;
        //获取施工合同号信息赋值给主表对象
        this.obj.m19 = item.contractCode;
        //获取监理单位信息赋值给主表对象
        this.obj.m20 = item.unitName2;
        //获取监理合同号信息赋值给主表对象
        this.obj.m21 = item.contractCode2;
      },
      getData() {
        this.axios.get('/HiQuality/A67/findA67ById', {
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
        this.axios.post("/HiQuality/A67/saveA67", this.$qs.stringify({
          a67:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A67/updateA67', this.$qs.stringify({
          a67:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A67/deleteA67', {
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
