<template>
  <div class="AQ-11 text-center">
    <p class="p-lineheight">
      <img width="30" height="30" src="../../assets/files/imgs/aq/clip_image002.jpg" class="logo-img"/>
      贵州省公路工程集团有限公司
    </p>
    <p class="p-lineheight">XX高速公路XX合同段项目部</p>
    <h3>安全隐患整改回复单</h3>
    <div class="t-left margin-auto width-623">
      <p>资料编号：<input type="text" v-model="obj.m1"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" width="630">
      <tr class="public-tabel">
        <td width="120"><P align="center">检查单位 </P></td>
        <td width="192"><input type="text" v-model="headerInfo.unitName" disabled></td>
        <td width="192" colspan="2"><p align="center">项目处（部门）名称 </p></td>
        <td width="170"><input type="text" v-model="obj.m3"></td>
      </tr>
      <tr>
        <td width="674" colspan="5" valign="top">
          <p align="left" class="p-lineheight">致<input type="text" class="title-input" v-model="obj.m4">（检查单位）： </p>
        <p align="left" style="text-indent: 10px;">根据<el-date-picker v-model="obj.m5" type="date" size="mini"
                                                                                 class="input-80"  placeholder="年  月  日"
                                                                                 format="yyyy年MM月dd日"
                                                                                 value-format="yyyy-MM-dd">
        </el-date-picker>收到的<input type="text" class="name-input title-input" v-model="obj.m6">整改通知单，按要求整改如下： </p>
          <p><textarea name="" cols="30" rows="10" v-model="obj.m7"></textarea></p>
          <p align="left">附件：（整改前后照片对比和说明或整改方案） </p><br/><br/>
        </td>
      </tr>
      <tr class="public-tabel">
        <td width="120" valign="top"><p>整改责任人 </p></td>
        <td width="192" valign="top"><p><input type="text" class="name-input" v-model="obj.m9"></p></td>
        <td width="145" valign="top"><p>整改完成时间 </p></td>
        <td width="218" colspan="2" valign="top"><div class="block height-30 t-left input-400 display-lnl">
          <el-date-picker class="input-400"
                          size="mini"
                          v-model="obj.m10" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div></td>
      </tr>
      <tr>
        <td width="674" colspan="5" valign="top"><p align="left">整改情况验收记录： </p>
          <p><textarea name="" cols="30" rows="10" v-model="obj.m11"></textarea></p>
          </td>
      </tr>
      <tr class="public-tabel">
        <td width="120" valign="top"><p>整改验收人 </p></td>
        <td width="192" valign="top"><p><input type="text" class="name-input" v-model="obj.m12"></p></td>
        <td width="145" valign="top"><p>验收时间 </p></td>
        <td width="218" colspan="2" valign="top"><div class="block height-30 t-left input-400 display-lnl">
          <el-date-picker class="input-400"
                          size="mini"
                          v-model="obj.m13" type="date"
                          value-format="yyyy-MM-dd">
          </el-date-picker>
        </div></td>
      </tr>
    </table>
    <p class="bot-hint-p width-710">备注：本表用于项目部内部整改回复，整改完成人、整改情况验收记录、整改验收人需为本人签认。</p>
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
    name: "AQ-11",
    data() {
      return {
        isAdd: true,
        //主表
        obj: {},
        id: '3',
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
        headerInfo:{}, //表头信息
        dataArr:[]
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
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq11/findAq11ById', {
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
        this.axios.post("/HiQuality/Aq11/saveAq11",this.$qs.stringify({
          aq11:JSON.stringify(this.obj),
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
        this.axios.get('/HiQuality/Aq11/updateAq11', this.$qs.stringify({
          aq11:JSON.stringify(this.obj)
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
        this.axios.get('/HiQuality/Aq11/deleteAq11', {
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
