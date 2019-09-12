
<template>
    <div class="DZ-06-1 text-center main-dz crosswise">
      <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <h3>小型预制构件钢筋安装检验表 </h3>
      <p class="bot-hint-p">项目名称： <input type="text" v-model="obj.m1" class="input-300"></p>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="224" colspan="3"><p align="center">小型预制构件名称</p></td>
          <td width="337" colspan="4"><p align="center"><input type="text" v-model="obj.m2"></p></td>
          <td width="161"><p align="center">钢筋工程量 </p></td>
          <td width="268" colspan="3"><p align="center"><input type="text" v-model="obj.m3"></p></td>
        </tr>
        <tr>
          <td width="224" colspan="3"><p align="center">施工单位 </p></td>
          <td width="337" colspan="4"><p align="center"><input type="text" v-model="obj.m4"></p></td>
          <td width="161"><p align="center">检验日期 </p></td>
          <td width="268" colspan="3">
            <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m5"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
          </td>
        </tr>
        <tr>
          <td width="54"><p align="center">项次 </p></td>
          <td width="270" colspan="2"><p align="center">检查项目 </p></td>
          <td width="152"><p align="center">规定值或允许偏差 </p></td>
          <td width="246" colspan="4"><p align="center">施工单位实测值 </p></td>
          <td width="95" ><p align="center">合格点数 </p></td>
          <td width="85"><p align="center">合格率（%） </p></td>
          <td width="89"><p align="center">监理单位检验记录 </p></td>
        </tr>
        <tr>
          <td width="54"><p align="center">1</p></td>
          <td width="170" colspan="2"><p align="center">受力钢筋间距（mm） </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[0].allowValue" ></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[0].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[0].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[0].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[0].s4"></p></td>
        </tr>
        <tr>
          <td width="54" rowspan="2"><p align="center">2</p></td>
          <td width="104" rowspan="2"><p align="center">箍筋、横向水平钢筋间距(mm) </p></td>
          <td width="66"><p align="center">绑扎 </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[1].allowValue" disabled></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[1].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[1].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[1].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[1].s4"></p></td>
        </tr>
        <tr>
          <td width="66"><p align="center">焊接 </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[2].allowValue" disabled></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[2].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[2].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[2].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[2].s4"></p></td>
        </tr>
        <tr>
          <td width="54" rowspan="2"><p align="center">3</p></td>
          <td width="104" rowspan="2"><p align="center">钢筋骨架尺寸(mm) </p></td>
          <td width="66"><p align="center">长 </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[3].allowValue" disabled></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[3].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[3].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[3].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[3].s4"></p></td>
        </tr>
        <tr>
          <td width="66"><p align="center">宽或高 </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[4].allowValue" disabled></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[4].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[4].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[4].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[4].s4"></p></td>
        </tr>
        <tr>
          <td width="54" rowspan="2"><p align="center">4</p></td>
          <td width="104" rowspan="2"><p align="center">保护层厚度（mm） </p></td>
          <td width="66"><p align="center">距表面 </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[5].allowValue" disabled></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[5].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[5].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[5].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[5].s4"></p></td>
        </tr>
        <tr>
          <td width="66"><p align="center">距底面 </p></td>
          <td width="152"><p align="center"><input type="text" v-model="controlArr[6].allowValue" disabled></p></td>
          <td width="246" colspan="4"><p align="center"><input type="text" v-model="controlArr[6].s1"></p></td>
          <td width="95" ><p align="center"><input type="text" v-model="controlArr[6].s2"></p></td>
          <td width="85"><p align="center"><input type="text" v-model="controlArr[6].s3"></p></td>
          <td width="189"><p align="center"><input type="text" v-model="controlArr[6].s4"></p></td>
        </tr>
        <tr>
          <td width="158" colspan="2"><p align="center">检验结果 </p></td>
          <td width="832" colspan="9"><p align="center">共检测<input type="text" v-model="obj.m6" class="input-80">点，
            共合格<input type="text" v-model="obj.m7" class="input-80">点，合格率<input type="text" v-model="obj.m8" class="input-80">％</p></td>
        </tr>
        <tr>
          <td width="158" colspan="2"><p align="center">评定意见 </p></td>
          <td width="832" colspan="9"><p align="center"><input type="text" v-model="obj.m9"></p></td>
        </tr>
        <tr>
          <td width="158" colspan="2"><p align="center">施工单位 </p></td>
          <td width="375" colspan="3">    
            <div class="block display-lnl ">
              检验人：<input type="text" class="input-60"  v-model="obj.m10" >
              <el-date-picker class="input-95"
                              size="mini"
                              v-model="obj.m11"
                              type="date"
                              placeholder="年   月   日"
                              format="yyyy年MM月dd日"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>

          <td width="233" colspan="3"><p align="center">监理单位 </p></td>
          <td width="324" colspan="3">              
            <div class="block display-lnl">
              检验人：<input type="text" v-model="obj.m12" class="input-80">
              <el-date-picker class="input-100"
                              size="mini"
                              v-model="obj.m13"
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
      name: "DZ-06-1",
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
            projPartsId: '',
            curStatus: 0,
            operUserId: 1
          },
          auditTypeIdArr: [39],
          nameList: [],
          nameList1: [{}, {}],
          m15DataArr: [],
       /*   headerInfo: {}, //表头信息*/
          id: ''
        }
      },
      created() {
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        /*//获取表头信息
        let obj = this.$store.state.unitTable;
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
          let allowValue = ["±3","±3","±2","±10","±5","±3","±5"];
          for(var i= 0; i<7;i++){
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
              console.log("------------*********88"+JSON.stringify(this.controlArr))
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
