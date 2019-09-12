<template>
  <div class="AQ-08 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>采购与租赁供应商登记表</h3>
    <div class="t-right margin-auto width-623">
      <p>编号：<input type="text" v-model="rec.recNo"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="table-tr-height-30 public-tabel" width="630">
      <tr>
        <td width="78" colspan="2" valign="top"><P align="center">单位名称 </P></td>
        <td width="162" colspan="2" valign="top"><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="72" valign="top"><p align="center">项目名称 </p></td>
        <td width="240" colspan="3" ><input type="text" v-model="obj.m4"></td>
      </tr>
      <tr>
        <td width="36" valign="top"><p align="center">序号 </p></td>
        <td width="132" colspan="2" valign="top"><p align="center">供应商单位名称 </p></td>
        <td width="72" valign="top"><p align="center">企业性质 </p></td>
        <td width="72" valign="top"><p align="center">起始日期 </p></td>
        <td width="72" valign="top"><p align="center">产品种类 </p></td>
        <td width="60" valign="top"><p align="center">联系人 </p></td>
        <td width="108" valign="top"><p align="center">电话 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="36" valign="top"><p align="center">{{index+1}}</p></td>
        <td width="132" colspan="2" valign="top"><p align="left"><input type="text" v-model="val.s1"></p></td>
        <td width="72" valign="top"><p align="left"><input type="text" v-model="val.s2"></p></td>
        <td width="72" valign="top"><p align="left"><input type="text" v-model="val.s3"></p></td>
        <td width="72" valign="top"><p align="left"><input type="text" v-model="val.s4"></p></td>
        <td width="60" valign="top"><p align="left"><input type="text" v-model="val.s5"></p></td>
        <td width="108" valign="top"><p align="left"><input type="text" v-model="val.s6"></p></td>
      </tr>
      <tr>
        <td width="36" valign="top"><p align="left">&nbsp;</p></td>
        <td width="132" colspan="2" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="60" valign="top"><p align="left">&nbsp;</p></td>
        <td width="108" valign="top"><p align="left">&nbsp;</p></td>
      </tr>
      <tr>
        <td width="36" valign="top"><p align="left">&nbsp;</p></td>
        <td width="132" colspan="2" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="60" valign="top"><p align="left">&nbsp;</p></td>
        <td width="108" valign="top"><p align="left">&nbsp;</p></td>
      </tr>
      <tr>
        <td width="36" valign="top"><p align="left">&nbsp;</p></td>
        <td width="132" colspan="2" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="72" valign="top"><p align="left">&nbsp;</p></td>
        <td width="60" valign="top"><p align="left">&nbsp;</p></td>
        <td width="108" valign="top"><p align="left">&nbsp;</p></td>
      </tr>
    </table>
    <div class="bot-hint-p width-623 dateDiv">项目负责人：<input type="text" v-model="obj.m1" class="input-120">填报人：<input type="text" v-model="obj.m2" class="input-120">
      <div class="block display-lnl">
        <span class="demonstration">日期：</span>
        <el-date-picker class="input-120"
                        size="mini"
                        v-model="obj.m3" type="date"
                        value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
    </div>
    <p class="bot-hint-p width-623">
      <span>注：1、包括材料、设备和用品供应商； </span><br/>
      <span style="margin-left: 22px;">2、应提供材料、设备和用品供应商的生产证与合格证作为附件支撑。</span>
    </p>
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
        name: "AQ-08",
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
        for(var i= 0; i<21;i++){
          let subObj = {};
          this.controlArr.push(subObj);
        }
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<21;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        getData() {
          this.axios.get('/HiQuality/aq08/findById', {
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
          this.axios.post('/HiQuality/aq08/save', this.$qs.stringify({
            bBtAq08M:JSON.stringify(this.obj),
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
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/aq08/update', this.$qs.stringify({
            bBtAq08M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/aq08/deleteById', {
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
