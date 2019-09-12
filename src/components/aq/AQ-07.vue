<template>
    <div class="AQ-07 text-center">
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>特种作业人员登记表</h3>
      <div class="t-right margin-auto width-1053">
        <p>编号：<input type="text" v-model="rec.recNo"></p>
      </div>
      <table cellspacing="0" cellpadding="0" class="crosswise-table" width="1053">
        <tr>
          <td colspan="3">单位名称</td>
          <td colspan="5"><input type="text" v-model="headerInfo.unitName" disabled></td>
          <td>项目名称</td>
          <td colspan="6"><input type="text" v-model="obj.m1"></td>
        </tr>
        <tr>
          <td colspan="15" width="961">
            <p align="left" class="p-lineheight">致 <input type="text" class="title-input input-140" v-model="obj.m2">（监理单位）：</p>
            <p align="left" style="text-indent: 50px;" class="p-lineheight">经我单位审查，下列特种作业人员的特种作业操作证齐全有效，请予以审核。</p>
          </td>
        </tr>
        <tr>
          <td width="40">序号</td>
          <td width="43">作业项目</td>
          <td>姓名</td>
          <td>性别</td>
          <td>年龄</td>
          <td>发证单位</td>
          <td >证件编号</td>
          <td>发证时间</td>
          <td>复审时间</td>
          <td>有效期限</td>
          <td width="72">操作设备编号（自编号）</td>
          <td>作业地点</td>
          <td>进场时间</td>
          <td>退场时间</td>
          <td width="70">备注</td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="val.pageNo"></p></td>
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="val.testItemNo"></p></td>
          <td><p><input type="text" v-model="val.s1"></p></td>
          <td><p><input type="text" v-model="val.s2"></p></td>
          <td><p><input type="text" v-model="val.s3"></p></td>
          <td><p><input type="text" v-model="val.s4"></p></td>
          <td><p><input type="text" v-model="val.s5"></p></td>
          <td><p><input type="text" v-model="val.s6"></p></td>
          <td><p><input type="text" v-model="val.s7"></p></td>
          <td width="80">
            <div class="block">
              <el-date-picker v-model="val.s8" type="date" size="mini"
                              class="input-80 height-30"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
          <td>
            <div class="block">
              <el-date-picker v-model="val.s9" type="date" size="mini"
                              class="input-80 height-30"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
          <td><p><input type="text" v-model="val.s10"></p></td>
          <td><p><input type="text" v-model="val.s11"></p></td>
          <td><p><input type="text" v-model="val.s12"></p></td>
          <td>
            <div class="block">
              <el-date-picker v-model="val.s13" type="date" size="mini"
                              class="input-80 height-30"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
          <td>
            <div class="block">
              <el-date-picker v-model="val.s14" type="date" size="mini"
                              class="input-80 height-30"
                              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </td>
          <td><p><input type="text" v-model="val.s15"></p></td>
        </tr>
        <tr>
          <td colspan="15">
            <p align="left">驻地办专业监理工程师审查意见：</p>
            <textarea name="" cols="30" rows="4" v-model="nameList1[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight">专业监理工程师签名：<input type="text" class="" v-model="nameList1[1].fullName"
                                                             disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList1[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
        </tr>
        <tr>
          <td colspan="15">
            <p align="left">驻地办驻地监理工程师审核意见： </p>
            <textarea name="" cols="30" rows="4" v-model="nameList2[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight"> 驻地办高级监理工程师签章：<input type="text" class="" v-model="nameList2[1].fullName"
                                                             disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList2[0].auditTime" disabled
                                                      class="height-25"></p>
          </td>
        </tr>
        <tr>
          <td colspan="15">
            <p align="left">总监办总监理工程师审核意见：</p>
            <textarea name="" cols="30" rows="4" v-model="nameList3[0].auditOpinion" disabled></textarea>
            <p class="t-right p-lineheight"> 总监办总监理工程师签章：<input type="text" class="" v-model="nameList3[1].fullName"
                                                                 disabled></p>
            <p class="t-right p-lineheight">日期：<input type="text" v-model="nameList3[0].auditTime" disabled
                                                      class="height-25"></p>
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
    export default {
        name: "AQ-07",
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
            recNo:'',
            tableId:'',
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          auditTypeIdArr:[26,25,21],
          nameList:[],
          nameList1:[{},{}],
          nameList2:[{},{}],
          nameList3:[{},{}],
          headerInfo:{}, //表头信息
          id: '1'     //主表id
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
          this.obj.m2 = this.headerInfo.unitName2;
        }
        //调用获取监理等流程人签字栏数据接口
        this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        this.$publicFun.getRecInfo()

      },
      mounted() {
        this.setSubObj();
        this.getData();
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        },
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
            this.nameList.forEach((item,index)=>{
              if(item!='' && item!=undefined){
                if(item[1].auditTypeId==26){
                  this.nameList1 = item;
                }
                if(item[1].auditTypeId==25){
                  this.nameList2 = item;
                }
                if(item[1].auditTypeId==21){
                  this.nameList3 = item;
                }
              }
            })
          }
        },
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<8;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        getData() {
          this.axios.get('/HiQuality/aq07/findById', {
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
              if (this.obj.subList != undefined && this.obj.subList.length > 0) {
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
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq07/save', this.$qs.stringify({
            bBtAq07M:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
            console.log("新增接口")
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
          this.axios.post('/HiQuality/aq07/update', this.$qs.stringify({
            bBtAq07M:JSON.stringify(this.obj)
          }))
            .then(res => {
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
          this.axios.get('/HiQuality/aq07/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {subList:[]};
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
