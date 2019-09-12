<template>
  <div class="AKG-03 text-center lengthways-a main-a">
    <p class="top-name-p width-623">AKG-03</p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目</p>
    <p align="center" >黔西南州兴义环城高速公路</p>
    <h3>主要进场设备一览表</h3>

    <div align="center">
      <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <td width="176"><p align="center">机械名称 </p></td>
          <td width="160"><p align="center">规格及型号 </p></td>
          <td width="72"><p align="center">单位 </p></td>
          <td width="56"><p align="center">数量 </p></td>
          <td width="132"><p align="center">备注 </p></td>
        </tr>
        <tr v-for="(item,index) in controlArr" :key="index">
          <td width="176"><p align="center"><input type="text" v-model="item.s1"></p></td>
          <td width="160"><p align="center"><input type="text" v-model="item.s2"></p></td>
          <td width="72"><p align="center"><input type="text" v-model="item.s3"></p></td>
          <td width="56"><p align="center"><input type="text" v-model="item.s4"></p></td>
          <td width="132"><p align="center"><input type="text" v-model="item.s5"></p></td>
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
    name: "AKG-03",
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
        for(var i= 0; i<26;i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/kg03/findByRecId', {
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
        this.axios.post('/HiQuality/kg03/saveKg03', this.$qs.stringify({
          kg03:JSON.stringify(this.obj),
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
        this.axios.post('/HiQuality/kg03/updateKg03', this.$qs.stringify({
          kg03:JSON.stringify(this.obj)
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
        this.axios.delete('/HiQuality/kg03/deleteById', {
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
