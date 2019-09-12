<template>
    <div class="A41 text-center main-a lengthways-a table-padding5px ad-textarea">
      <p class="top-name-p width-559">A-41</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>索 赔 审 查 报 告</h3>
      <div class="text-left">
        <span>承包单位：
          <el-select v-model="obj.m4" placeholder="请选择承包单位" @change="setUnit">
            <el-option
              v-for="(item,index) in ownerTableInfo"
              :key="index"
              :label="item.contractName"
              :value="item">
            </el-option>
          </el-select>
        </span>
        <span>合 同 号：<input type="text" v-model="obj.m5" ></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left">
        <span>监理单位：<input type="text" v-model="obj.m6" ></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <div align="center">
        <table border="1" cellspacing="0" >
          <tr >
            <td width="576" valign="top" >
              <p><textarea name="" cols="30" rows="58" v-model="obj.m1"></textarea></p>
            </td>
          </tr>
        </table>
      </div>
      <p class="bot-hint-p width-559">审核单位：<input type="text" v-model="obj.m2">  审查人：<input type="text" v-model="obj.m3"> <br>
        此表由监理工程师、驻地办（项目部）或项目公司分别填写。 </p>
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
    name: "A-41",
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
        ownerTableInfo:{}, //总监办用表表头信息
        id: '3'
      }
    },
    created(){
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取总监办和业主用表表头信息
      this.$publicFun.getOwnerTableInfo();
      this.$publicFun.getRecInfo()
    },
    computed: {
      getTableInfoList: function () {
        return this.$store.state.ownerTableInfo
      },
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch: {
      //获取总监办和业主用表表头信息数据
      getTableInfoList: function () {
        this.ownerTableInfo = this.$store.state.ownerTableInfo;
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
        //获取施工单位信息赋值给主表对象
        this.obj.m4 = item.unitName;
        //获取施工合同号信息赋值给主表对象
        this.obj.m5 = item.contractCode;
        //获取监理单位信息赋值给主表对象
        this.obj.m6 = item.unitName2;
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A41/findA41ById', {
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
        this.axios.post("/HiQuality/A41/saveA41", this.$qs.stringify({
          a41:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/A41/updateA41', this.$qs.stringify({
          a41:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A41/deleteA41', {
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
