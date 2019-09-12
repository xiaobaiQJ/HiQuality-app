<template>
    <div class="A68 text-center main-a crosswise-a crosswise">
      <p class="top-name-p width-991">A-68</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>公路工程质量事故月报表</h3>
        <div class="tabel-title-A flex-r">
          <p>报告单位：<input type="text" class="title-input" v-model="obj.m4"></p>
          <div >
              <div class="block display-lnl height-25 input-160">
                <el-date-picker class="input-140"
                                size="mini"
                                v-model="obj.m5"
                                type="date"
                                placeholder="年  月"
                                format="yyyy年MM月"
                                value-format="yyyy-MM">
                </el-date-picker>
              </div>
              <span style="display: inline-block; width: 50px;"></span>   责查表-24
          </div>
        </div>
        <div align="center">
          <table border="1" cellspacing="0" class="public-tabel table-tr-height-55">
            <tr >
              <td width="120" valign="center" ><p align="center">工程名称</p> </td>
              <td width="80" valign="center" ><p align="center" >发生日期 </p></td>
              <td width="80" valign="center" ><p align="center" >上报日期 </p></td>
              <td width="120" valign="center" ><p align="center" >事故性质 </p></td>
              <td width="113" valign="center" ><p align="center" >直接经济损失 </p></td>
              <td width="120" valign="center" ><p align="center" >事故处理情况 </p></td>
              <td width="120" valign="center" ><p align="center" >建设单位 </p></td>
              <td width="120" valign="center" ><p align="center" >设计单位 </p></td>
              <td width="120" valign="center" ><p align="center" >监理单位 </p></td>
              <td width="120" valign="center" ><p align="center" >施工单位 </p></td>
            </tr>
            <tr v-for="(val,index) in controlArr" :key="index">
              <td width="97" valign="center" >
                <textarea cols="30" rows="2" v-model="val.s1"></textarea>
              </td>
              <td width="80" valign="center" >
                <div class="block">
                  <el-date-picker class="input-80"
                                  v-model="val.s2" type="date" size="mini"
                                  value-format="yyyy-MM-dd">
                  </el-date-picker>
                </div>
              </td>
              <td width="80" valign="center" >
                <div class="block">
                  <el-date-picker class="input-80"
                                  v-model="val.s3" type="date" size="mini"
                                  value-format="yyyy-MM-dd">

                  </el-date-picker>
                </div>
              </td>
              <td width="81" valign="center" >
                <textarea cols="30" rows="2" v-model="val.s4"></textarea>
              </td>
              <td width="113" valign="center" ><p align="center"><input type="text" v-model="val.s5"></p></td>
              <td width="110" valign="center" >
                <textarea cols="30" rows="2" v-model="val.s6"></textarea>
              </td>
              <td width="84" valign="center" >
                <textarea cols="30" rows="2" v-model="val.s7"></textarea>
              </td>
              <td width="97" valign="center" >
                <textarea cols="30" rows="2" v-model="val.s8"></textarea>
              </td>
              <td width="97" valign="center" ><p align="center"><input type="text" v-model="val.s9"></p></td>
              <td width="97" valign="center" >
                <el-select v-model="val.s10" placeholder="请选择施工单位"
                           @visible-change="getIndex(index)"
                           @change="setUnit">
                  <el-option
                    v-for="(item,index) in ownerTableInfo"
                    :key="index"
                    :label="item.contractName"
                    :value="item">
                  </el-option>
                </el-select>
              </td>
            </tr>
          </table>
      </div>
      <div class="bot-hint-p width-991">填报单位： （盖章）<input type="text" v-model="obj.m1" class="input-300">  填报人：<input type="text" v-model="obj.m2" class="input-300">
        <div class="block display-lnl height-25 input-160 t-right">
          <span class="demonstration">填报日期：</span>
          <el-date-picker class="input-140"
                          size="mini"
                          v-model="obj.m3" type="date"
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
    name: "A-68",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {
          subList: []
        },
        controlArr:[],
        lastIndex:"",//最后一次选中下标
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
        ownerTableInfo:{}, //总监办用表表头信息
        id:'',

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
      this.setSubObj();
      this.getData();
    },
    methods: {
      //获取下拉框选中的下标
      getIndex(index){
        this.lastIndex = index;
      },
      /**
       * 当施工单位改变时保存至主表，并取到相对应的合同段值
       * @method setUnit
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      setUnit(item) {
        //获取施工单位信息赋值给主表对象
        console.log(item)
        this.$set(this.controlArr[this.lastIndex],'s10', item.unitName)
        this.$set(this.controlArr[this.lastIndex],'s9', item.unitName2)
      },
      setSubObj(){
       var yzName = '贵州兴义环城高速公路有限公司';//业主单位
        for(var i=0;i<8;i++){
          let subObj = {'s7':yzName};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/A68/findA68ById', {
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
        this.axios.post("/HiQuality/A68/saveA68", this.$qs.stringify({
          a68:JSON.stringify(this.obj),
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/A68/updateA68', this.$qs.stringify({
          a68:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/A68/deleteA68', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr = [];
            this.obj = {subList:[]}
            this.setSubObj();
          }
        })
      }
    }
  }
</script>

<style scoped>
td{
  height: 40px;
}
</style>
