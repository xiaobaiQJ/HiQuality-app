<template>
  <div class="AKG-02 text-center lengthways-a main-a">
    <p class="top-name-p width-623">AKG-02</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目</p>
    <p align="center" >黔西南州兴义环城高速公路</p>
    <h3>主要进场人员一览表</h3>
    <div align="center">
      <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <td width="58"><p align="center">序号</p></td>
          <td width="99"><p align="center">姓名 </p></td>
          <td width="87"><p align="center">年龄 </p></td>
          <td width="173"><p align="center">在本项目中担任的职务 </p></td>
          <td width="121"><p align="center">备注 </p></td>
        </tr>
        <tr>
          <td width="58"><p align="center">1</p></td>
          <td width="99"><input type="text" v-model="controlArr[0].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[0].s3"></td>
          <td width="173"><p align="center">项目经理 </p></td>
          <td width="121"><input type="text" v-model="controlArr[0].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">2</p></td>
          <td width="99"><input type="text" v-model="controlArr[1].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[1].s3"></td>
          <td width="173"><p align="center">总工程师 </p></td>
          <td width="121"><input type="text" v-model="controlArr[1].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">3</p></td>
          <td width="99"><input type="text" v-model="controlArr[2].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[2].s3"></td>
          <td width="173"><p align="center">常务副经理 </p></td>
          <td width="121"><input type="text" v-model="controlArr[2].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">4</p></td>
          <td width="99"><input type="text" v-model="controlArr[3].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[3].s3"></td>
          <td width="173"><p align="center">副总工 </p></td>
          <td width="121"><input type="text" v-model="controlArr[3].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">5</p></td>
          <td width="99"><input type="text" v-model="controlArr[4].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[4].s3"></td>
          <td width="173"><p align="center">质检科科长 </p></td>
          <td width="121"><input type="text" v-model="controlArr[4].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">6</p></td>
          <td width="99"><input type="text" v-model="controlArr[5].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[5].s3"></td>
          <td width="173"><p align="center">安全科科长 </p></td>
          <td width="121"><input type="text" v-model="controlArr[5].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">7</p></td>
          <td width="99"><input type="text" v-model="controlArr[6].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[6].s3"></td>
          <td width="173"><p align="center">办公室主任 </p></td>
          <td width="121"><input type="text" v-model="controlArr[6].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">8</p></td>
          <td width="99"><input type="text" v-model="controlArr[7].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[7].s3"></td>
          <td width="173"><p align="center">工程科科长 </p></td>
          <td width="121"><input type="text" v-model="controlArr[7].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">9</p></td>
          <td width="99"><input type="text" v-model="controlArr[8].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[8].s3"></td>
          <td width="173"><p align="center">合同计量科科长 </p></td>
          <td width="121"><input type="text" v-model="controlArr[8].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">10</p></td>
          <td width="99"><input type="text" v-model="controlArr[9].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[9].s3"></td>
          <td width="173"><p align="center">测量负责人 </p></td>
          <td width="121"><input type="text" v-model="controlArr[9].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">11</p></td>
          <td width="99"><input type="text" v-model="controlArr[10].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[10].s3"></td>
          <td width="173"><p align="center">设备物资科负责人 </p></td>
          <td width="121"><input type="text" v-model="controlArr[10].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">12</p></td>
          <td width="99"><input type="text" v-model="controlArr[11].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[11].s3"></td>
          <td width="173"><p align="center">桥梁技术员 </p></td>
          <td width="121"><input type="text" v-model="controlArr[11].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">13</p></td>
          <td width="99"><input type="text" v-model="controlArr[12].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[12].s3"></td>
          <td width="173"><p align="center">桥梁技术员 </p></td>
          <td width="121"><input type="text" v-model="controlArr[12].s5"></td>
        </tr>
        <tr>
          <td width="58"><p align="center">14</p></td>
          <td width="99"><input type="text" v-model="controlArr[13].s2"></td>
          <td width="87"><input type="text" v-model="controlArr[13].s3"></td>
          <td width="173"><p align="center">试验员 </p></td>
          <td width="121"><input type="text" v-model="controlArr[13].s5"></td>
        </tr>
      </table>
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
    name: "AKG-02",
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
        id: '7'    //主表id
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
    },
    computed: {
      getRecObj: function () {
        return this.$store.state.recInfo
      }
    },
    watch:{
      //获取rec信息数据
      getRecObj: function () {
        this.rec = this.$store.state.recInfo;
      }
    },
    mounted() {
      this.setSubObj();
      this.getData();
    },
    methods: {
      setSubObj(){
        for(var i= 0; i<14;i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/kg02/findByRecId', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length > 0) {
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
            this.isAdd = false;

          }
        })
      },
      //新增
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/kg02/saveKg02', this.$qs.stringify({
          kg02:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/kg02/updateKg02', this.$qs.stringify({
          kg02:JSON.stringify(this.obj)
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
        this.axios.delete('/HiQuality/kg02/deleteById', {
          params: {
            id: this.id,
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
