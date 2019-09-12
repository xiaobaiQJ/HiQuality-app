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
              <div class="list-item" v-for="(item,index) in tableList" :key="index">
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

  export default {
    name: "Add_Process_List",

    created() {
      this.stdProjectId = this.$route.query.id;
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
        this.tableList = this.controlList.filter((arr) => !res.has(arr.tableNo) && res.set(arr.tableNo, 1))
      }
    },
    data() {
      return {
        tableList: [],
        stdProjectId: '',//单位工程id
        downList: [],//顶部业务下拉菜单
        businessList: [],//业务数据
        businessControlList: [],//业务选中控制
        tableTypeId: '',//当前选中业务表id
        checked: true,
        controlList: []//控制集合
      }
    },
    methods: {
      //给编辑页面返回添加后的工序列表
      returnData() {
        var params = new URLSearchParams();

        params.append('stdProjectId', this.stdProjectId);
        params.append('stdPorj', JSON.stringify(this.tableList));
        this.axios.post("/HiQuality/stdProc/addStdProj", params).then((res) => {
          if (res.data.msg == "success") {
            this.$router.push({
              path: "/set/process-list/index",
              query: {
                id: this.stdProjectId
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
              tab: this.businessList[index].id,
              tableNo: this.businessList[index].tableNo,
              tableName: this.businessList[index].tableName
            }
            this.tableList.push(obj);

          }
        })
        this.controlList = this.tableList

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
        this.tableList.splice(index, 1);
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
    width: 100%;
    display: block;
  }

  .nav {
    height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .list {
    height: 520px;
  }

</style>
