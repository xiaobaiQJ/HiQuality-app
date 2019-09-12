<template>
    <div class="A-72 text-center main-a lengthways-a">
      <p class="top-name-p width-623"></p>
      <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>钢筋骨架底面高程记录</h3>
      <div class="text-left width-623">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-623">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="92">工程名称</td>
          <td colspan="3" width="282"><input type="text" v-model="obj.m1"></td>
          <td width="94">施工日期</td>
          <td colspan="3" width="176"><el-date-picker class="input-140"
                                                                      size="mini"
                                                                      v-model="obj.m2" type="date"
                                                                      value-format="yyyy-MM-dd">
          </el-date-picker></td>
        </tr>
        <tr>
          <td width="92">桩号或部位</td>
          <td colspan="7" width="552"><input type="text" v-model="obj.m3"></td>
        </tr>
        <tr>
          <td rowspan="2" width="92">测点编号</td>
          <td rowspan="2" width="94">顶面高程（m）</td>
          <td rowspan="2" width="94">骨架长度（m）</td>
          <td rowspan="2" width="94">底面高程（m）</td>
          <td rowspan="2" width="94">设计高程（m）</td>
          <td colspan="2" width="104">高 差(mm)</td>
          <td rowspan="2" width="72">备 注</td>
        </tr>
        <tr>
          <td width="52">＋</td>
          <td width="52">－</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="92"><input type="text" v-model="val.s1"></td>
          <td width="94"><input type="text" v-model="val.s2"></td>
          <td width="94"><input type="text" v-model="val.s3"></td>
          <td width="94"><input type="text" v-model="val.s4"></td>
          <td width="94"><input type="text" v-model="val.s5"></td>
          <td width="52"><input type="text" v-model="val.s6"></td>
          <td width="52"><input type="text" v-model="val.s7"></td>
          <td width="72"><input type="text" v-model="val.s8"></td>
        </tr>
        <tr>
          <td width="92">　</td>
          <td width="94">　</td>
          <td width="94">　</td>
          <td width="94">　</td>
          <td width="94">　</td>
          <td width="52">　</td>
          <td width="52">　</td>
          <td width="72">　</td>
        </tr>
        <tr>
          <td colspan="8" width="644">监理工程师意见：<input type="text" v-model="obj.m4"></td>

        </tr>
        <tr>
          <td colspan="8">测量：<input type="text" v-model="obj.m5">计算：<input type="text" v-model="obj.m6">复核<input type="text" v-model="obj.m7">监理工程师：<input type="text" v-model="obj.m8">日期：<input type="text" v-model="obj.m9"></td>
        </tr>
      </table>
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
    name: "Dgjgj",
    data(){
      return{
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
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        headerInfo:{}, //表头信息
        id:''
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if(obj.data!='' && obj.data!=null && obj.data!=undefined){
        this.headerInfo = obj.data;
      };
      this.$publicFun.getRecInfo()
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
    mounted() {
      for(var i=0;i<16;i++){
        let subObj = {};
        this.controlArr.push(subObj);
      }
      this.getData();

    },
    methods: {
      getData() {
        this.axios.get('/HiQuality/Dgjgj/findDgjgjById', {
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
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length >0){
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
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
        this.axios.post("/HiQuality/Dgjgj/saveDgjgj", this.$qs.stringify({
          dgjgj:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/Dgjgj/updateDgjgj',this.$qs.stringify({
          dgjgj:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/Dgjgj/deleteDgjgj', {
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
