<template>
  <div class="AQ-12 text-center">
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>施工单位施工现场安全检查台帐表</h3>
    <div class="t-right margin-auto width-1125">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td colspan="2">单位名称</td>
        <td colspan="4"><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td>项目名称</td>
        <td colspan="4"><input type="text" v-model="obj.m2"></td>
      </tr>
      <tr>
        <td colspan="2">检查日期</td>
        <td>检查性质</td>
        <td>检查部位</td>
        <td>检查结果（存在隐患）</td>
        <td>检查负责人</td>
        <td colspan="2">整改要求(整改措施、时限)</td>
        <td>整改责任人</td>
        <td>整改完成时间</td>
        <td>备注</td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td>{{index+1}}</td>
        <td><div class="block height-30 t-left display-lnl">
          <el-date-picker class="input-140"
                          size="mini"
                          v-model="val.s1" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div></td>
        <td><input type="text" class="td-input" v-model="val.s2"></td>
        <td><input type="text" class="td-input" v-model="val.s3"></td>
        <td><input type="text" class="td-input" v-model="val.s4"></td>
        <td><input type="text" class="td-input" v-model="val.s5"></td>
        <td colspan="2"><input type="text" class="td-input" v-model="val.s6"></td>
        <td><input type="text" class="td-input" v-model="val.s7"></td>
        <td><input type="text" class="td-input" v-model="val.s8"></td>
        <td><input type="text" class="td-input" v-model="val.s9"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-1125">项目负责人：<input type="text" v-model="obj.m3">填报人：<input type="text" v-model="obj.m4">日期：
      <el-date-picker class="input-400"
                      size="mini"
                      v-model="obj.m5" type="date"
                      value-format="yyyy-MM-dd">
      </el-date-picker>
    </p>
    <p class="bot-hint-p width-1125">注：本台帐由安全人员填写，其支持文件为各类检查表。检查性质填&ldquo;日常检查/综合检查/专项检查&rdquo;，检查结果应对存在隐患进行简单描述。</p>
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
    name: "AQ-12",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        //rec表
        rec: {
          recNo: '',
          tableId: '',
          contracId: 0,
          constDate: '',
          testDate: '',
          projPartsId: '1',
          curStatus: 0,
          operUserId: 1
        },
        headerInfo: {}, //表头信息
        id: '1'

      }
    },
    created() {
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if (obj.data != '' && obj.data != null && obj.data != undefined) {
        this.headerInfo = obj.data;
      };
      this.$publicFun.getRecInfo()
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    computed: {
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch: {
      //获取rec信息数据
      getRecObj: function () {
        this.rec = this.$store.state.recInfo;
      }
    },
    methods: {
      setSubObj() {
        for (var i = 0; i < 15; i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq12/findAq12ById', {
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
            let arr = []
            this.obj.subList.forEach((item) => {
              arr.push(item)
            })
            this.controlArr = arr;

          }
        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/Aq12/saveAq12", this.$qs.stringify({
          aq12: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/Aq12/updateAq12', this.$qs.stringify({
          aq12: JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/Aq12/deleteAq12', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.obj = {subList: []};
            this.controlArr = [];
            this.isAdd = true;
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
