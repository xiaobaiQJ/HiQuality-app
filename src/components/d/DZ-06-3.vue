<template>
    <div class="DZ-06-3 text-center main-dz crosswise">
      <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <h3>隧道电缆沟盖析中间检验表 </h3>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="183" colspan="2"><p align="center">施工单位 </p></td>
          <td width="251" colspan="2"><p align="center"><input type="text" v-model="obj.m1"></p></td>
          <td width="293" colspan="2"><p align="center">检验日期 </p></td>
          <td width="197">
            <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m2"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
          </td>
        </tr>
        <tr>
          <td width="183" colspan="2"><p align="center">生产批次 </p></td>
          <td width="251" colspan="2"><p align="center"><input type="text" v-model="obj.m3"></p></td>
          <td width="293" colspan="2"><p align="center">生产日期 </p></td>
          <td width="197">
            <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m4"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
          </td>
        </tr>
        <tr>
          <td width="51"><p align="center">项次 </p></td>
          <td width="132"><p align="center">检查项目 </p></td>
          <td width="151"><p align="center">规定值或允许偏差 </p></td>
          <td width="315" colspan="2"><p align="center">施工单位实测值 </p></td>
          <td width="274" colspan="2"><p align="center">监理单位检验记录 </p></td>
        </tr>
        <tr>
          <td width="51"><p align="center">1</p></td>
          <td width="132"><p align="center">混凝土强度（MPa） </p></td>
          <td width="151"><p align="center"><input type="text" v-model="controlArr[0].allowValue" disabled></p></td>
          <td width="315" colspan="2"><p align="center"><input type="text" v-model="controlArr[0].s1"></p></td>
          <td width="274" colspan="2"><p align="center"><input type="text" v-model="controlArr[0].s2"></p></td>
        </tr>
        <tr>
          <td width="51"><p align="center">2</p></td>
          <td width="132"><p align="center">边长(mm)</p></td>
          <td width="151"><p align="center"><input type="text" v-model="controlArr[1].allowValue" disabled></p></td>
          <td width="315" colspan="2"><p align="center"><input type="text" v-model="controlArr[1].s1"></p></td>
          <td width="274" colspan="2"><p align="center"><input type="text" v-model="controlArr[1].s2"></p></td>
        </tr>
        <tr>
          <td width="51"><p align="center">3</p></td>
          <td width="132"><p align="center">厚度(mm)</p></td>
          <td width="151"><p align="center"><input type="text" v-model="controlArr[2].allowValue" disabled></p></td>
          <td width="315" colspan="2"><p align="center"><input type="text" v-model="controlArr[2].s1"></p></td>
          <td width="274" colspan="2"><p align="center"><input type="text" v-model="controlArr[2].s2"></p></td>
        </tr>
        <tr>
          <td width="51"><p align="center">4</p></td>
          <td width="132"><p align="center">对角线差(mm)</p></td>
          <td width="151"><p align="center"><input type="text" v-model="controlArr[3].allowValue" disabled></p></td>
          <td width="315" colspan="2"><p align="center"><input type="text" v-model="controlArr[3].s1"></p></td>
          <td width="274" colspan="2"><p align="center"><input type="text" v-model="controlArr[3].s2"></p></td>
        </tr>
        <tr>
          <td width="51"><p align="center">5</p></td>
          <td width="132"><p align="center">表面平整度（mm） </p></td>
          <td width="151"><p align="center"><input type="text" v-model="controlArr[4].allowValue" disabled></p></td>
          <td width="315" colspan="2"><p align="center"><input type="text" v-model="controlArr[4].s1"></p></td>
          <td width="274" colspan="2"><p align="center"><input type="text" v-model="controlArr[4].s2"></p></td>
        </tr>
        <tr>
          <td width="334" colspan="3"><p align="center">外观鉴定 </p></td>
          <td width="315" colspan="2"><p align="center"><input type="text" v-model="controlArr[5].s1"></p></td>
          <td width="274" colspan="2"><p align="center"><input type="text" v-model="controlArr[5].s2"></p></td>
        </tr>
        <tr>
          <td width="183" colspan="2"><p align="center">施工单位检验评定结果 </p></td>
          <td width="741" colspan="5"><p align="center"><input type="text" v-model="obj.m5"></p>
          检验人：    <input type="text" v-model="obj.m6">  
                <div class="block">
              <el-date-picker class="input-100"
                              size="mini"
                              v-model="obj.m7"
                              type="date"
                              placeholder="年   月   日"
                              format="yyyy年MM月dd日"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
        </tr>
        <tr>
          <td width="183" colspan="2"><p align="center">监理单位检验评定结论 </p></td>
          <td width="741" colspan="5"><p align="center">
            <input type="text" v-model="obj.m8"></p>
          检验人：   <input type="text" v-model="obj.m9">    
                <div class="block">
              <el-date-picker class="input-100"
                              size="mini"
                              v-model="obj.m10"
                              type="date"
                              placeholder="年   月   日"
                              format="yyyy年MM月dd日"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
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
  import {splitDate} from '../../utils/utils'
    export default {
        name: "DZ-06-3",
      data() {
        return {
          isAdd: true,
          obj: {
            subList: []
          },
          controlArr:[],
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
          auditTypeIdArr: [39],
          nameList: [],
          nameList1: [{}, {}],
          m15DataArr: [],
         /* headerInfo: {}, //表头信息*/
          id: ''
        }
      },
      created() {
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        //获取表头信息
     /*   let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        }*/
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        },
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 39) {
                  this.nameList1 = item;
                  this.m15DataArr = splitDate(this.nameList1[0].auditTime, '-');
                }
              }
            })
          }
        }
      },
      mounted() {
        this.getData();
      },
      methods: {
        setSubObj(){
          let allowValue = ["在合格标准内","+3  -2","±3","±2","2"];
          for(var i= 0; i<6;i++){
            let subObj = {"allowValue": allowValue[i]};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dz06/findById', {
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
              if (this.obj.subList != undefined && this.obj.subList.length >0) {
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;
            }
          })
        },

        //新增
        addData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dz06/save',
            this.$qs.stringify({
              dz06: JSON.stringify(this.obj),
              rec: JSON.stringify(this.rec)
            })).then(res => {
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
        },
        //修改
        updateData() {
          this.axios.post('/HiQuality/dz06/update', this.$qs.stringify({
            dz06: JSON.stringify(this.obj)
          })).then(res => {
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/dz06/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
          })
        }

      }

    }
</script>

<style scoped>

</style>
