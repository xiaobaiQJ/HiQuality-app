/**
* @author bai tao
* @date 2019/6/25 0025
* @Description:添加工序组件
*/
<template>
  <div class="con">
    <header>
      <div class="nav">

          <el-select v-model="tableTypeId" placeholder="请选择" size="mini">
            <el-option
              size="mini"
              v-for="item in downList"
              :key="item.id"
              :label="item.typeCode"
              :value="item.id">
            </el-option>
          </el-select>

         <!-- <el-button size="smail" @click="selectAll">全选</el-button>-->
       <!-- <div class="nav-box">

          <div class="nav-right-warp">

            <div class="nav-right hover" @click="moveUP">
              <i class="iconfont icons">&#xe633;</i>
              上移
            </div>
            <div class="nav-right hover" @click="moveDown">
              <i class="iconfont icons">&#xe62a;</i>
              下移
            </div>

          </div>
        </div>-->



      </div>
    </header>
    <main>
      <div class="list-warp">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="list scroll-bar" :style="{height : $store.state.deviceStyle-260+'px'}">
              <div class="list-item" v-for="(item,index) in businessList" :key="index">
                <div class="list-item-left">
                  {{item.tableNo}}
                </div>
                <div class="list-item-center">
                  {{item.tableName}}
                </div>
                <div class="list-item-right">
                  <div class="list-checkbox">
                    <el-checkbox fill="#409EFF" v-model="businessControlList[index]"></el-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <span class="submit-btn btn-hover" @click="saveProcessList">添加到工序列表</span>
          </el-col>
          <el-col :span="12">
            <div class="list scroll-bar" :style="{height : $store.state.deviceStyle-260+'px'}">
              <div class="list-item" v-for="(item,index) in list" :key="index">
                <div class="list-item-left">
                  {{item.tableNo}}
                </div>
                <div class="list-item-center">
                  {{item.tableName}}
                </div>
                <div class="list-item-right">
                  <i class="iconfont hover-icon" @click="removeList(index)">&#xe6b0;</i>
                </div>
              </div>
            </div>
            <span class="submit-btn btn-hover" @click="returnData">确定</span>
          </el-col>
        </el-row>
      </div>

    </main>
  </div>
</template>

<script>

  import {swapItems} from "../../../../utils/utils";
  export default {
    name: "Add_Process_List",
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    created() {
      this.tableList = this.list;
      this.getDownMenu();
    },
    mounted() {

    },
    watch: {
      tableTypeId: function (id) {
        console.log(id)
        this.findByTableTypeId(id);
      },
      /**
       * 去除用户重复添加的数据
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      controlList: function () {
        const res = new Map();
        this.tableList = this.controlList.filter((arr) => !res.has(arr.tableId) && res.set(arr.tableId, 1));
      }
    },
    data() {
      return {
        tableList: [],
        downList: [],//顶部业务下拉菜单
        businessList: [],//业务数据
        businessControlList: [],//业务选中控制
        tableTypeId: '',//当前选中业务表id
        checked: true,
        controlList: []//控制集合

      }
    },
    methods: {
      //全选
      selectAll(){
        this.businessControlList.forEach((item,index)=>{
          this.$set(this.businessControlList,index,true)
        })
      },
      //上移
      moveUP() {
        if (this.currentIndex == 0) {
          this.$message({
            message: '别点了。。。已经到头了！',
            type: 'warning'
          });
          return false
        }

        swapItems(this.processList, this.currentIndex, this.currentIndex - 1);
        this.currentIndex -= 1;


      },
      //下移
      moveDown() {
        if (this.currentIndex == this.processList.length - 1) {
          this.$message({
            message: '我是有底线的！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.processList, this.currentIndex, this.currentIndex + 1);
        this.currentIndex += 1;
      },
      //置顶
      onClickTop() {
        if (this.currentIndex == 9999) {
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.processList, this.currentIndex, 0, 'up');
        this.currentIndex = 0;
      },
      //置底
      onClickDown() {
        if (this.currentIndex == 9999) {
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }

        swapItems(this.processList, this.currentIndex, this.processList.length - 1, 'down');
        this.currentIndex = this.processList.length - 1;
      },
      //给编辑页面返回添加后的工序列表
      returnData() {
        /*this.$emit('getAddList', this.list)*/

        var params = new URLSearchParams();
        let arr = [];
        this.list.forEach((item)=>{
          var obj ={
            tableId:item.tableId,
            tableName:item.tableName,
            tableNo:item.tableNo
          }
          arr.push(obj)
        })
        console.log(arr)
        params.append('stdProjectId', this.$route.query.id);
        params.append('stdPorj', JSON.stringify(arr));
        this.axios.post("/HiQuality/stdProc/addStdProj", params).then((res) => {
          console.log(res)
          if (res.data.msg == "success") {
            this.$router.push({
              path: "/set/process-list/index",
              query:{
                id:this.$route.query.id
              }
            })
          }
        })
      },
      //点击确定将数据发送到右侧列表中
      saveProcessList() {
        this.businessControlList.forEach((item, index) => {
          if (item == true) {
            let obj = {
              tableId: this.businessList[index].id,
              tableNo: this.businessList[index].tableNo,
              tableName: this.businessList[index].tableName
            }
            this.tableList.push(obj);
          }
        })
        console.log(this.tableList)
        this.controlList = this.tableList;
        this.businessControlList.forEach((item,index)=>{
          this.$set(this.businessControlList,index,false)
          this.businessControlList[index] = false;
        })

      },
      //初始化业务菜单控制器
      initBusiness() {
        let arr = [];
        this.businessList.forEach((item) => {
          arr.push(false);
        })
        this.businessControlList = arr;
      },
      //删除该下标数据
      removeList(index) {
        this.list.splice(index, 1);
      },
      /**
       * 方法描述
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      findByTableTypeId(id) {
        this.axios.get('/HiQuality/table/findByTableTypeId', {
          params: {
            tableTypeId: this.tableTypeId
          }
        }).then((res) => {
          this.businessList = res.data.data;
          this.initBusiness();
        })
      },
      //获取下拉菜单信息
      getDownMenu() {
        this.axios.get('/HiQuality/tableType/findAll').then((res) => {
          this.downList = res.data.data;
          this.tableTypeId = this.downList[0].id;
        })
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
  }

  .nav{
    height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .nav-box {
    flex: 1;
  }

  .nav-right-warp {
    text-align: right;
  }

  .nav-right {
    padding-left: 20px;

    text-align: right;
  }

  .nav-right {
    padding-left: 20px;
    display: inline-block;
    text-align: right;
  }

  i {
    font-size: 16px;
  }

  .nav-right:hover {
    color: #ff996d;
  }

  .nav-right:hover i {

    color: #ff996d;
  }

</style>
