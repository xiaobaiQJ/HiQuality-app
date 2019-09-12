<template>
  <div class="aside">
    <div class="search-warp">
      <el-autocomplete
        v-model="search"
        style="width: 100%"
        size="mini"
        suffix-icon="el-icon-search"
        :fetch-suggestions="querySearchAsync"
        placeholder="输入标准分项工程名称，按Enter键进行搜索"
        @select="handleSelect"
      ></el-autocomplete>
<!--      <el-input

        placeholder="输入标准分项工程名称，按Enter键进行搜索"
        size="mini"
        suffix-icon="el-icon-search"
        v-model="search">
      </el-input>-->
    </div>
    <div class="asideMenu">
      <el-menu
        disabled
        :style="{height:deviceHeight -210 +'px'}"
        :default-active="currentIndex"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @select="showProcessList"
        @close="handleClose">
        <!-- 单位工程 -->
        <template v-for="item in select_ProcessList">
          <el-submenu v-if="item.child && item.child.length" :index="item.id.toString()" :key="item.id">
            <template slot="title"><i :class="item.icon"></i><span>{{item.projectName}}</span>
            </template>
            <!--   分部工程-->
            <template v-for="itemChild in item.child">
              <el-submenu
                v-if="itemChild.child && itemChild.child.length"
                :index="itemChild.id.toString()"
                :key="itemChild.id">
                <template slot="title">
                  <i :class="itemChild.icon"></i><span>{{itemChild.projectName}}</span>
                </template>
                <!--分项 -->
                <template v-for="itemChild_Child in itemChild.child">
                  <el-submenu
                    v-if="itemChild_Child.child && itemChild_Child.child.length"
                    :index="itemChild_Child.id.toString()"
                    :key="itemChild_Child.id">
                    <template slot="title">
                      <span>{{itemChild_Child.projectName}}</span>
                    </template>
                    <!--子分项-->
                    <el-menu-item v-for="subItem in itemChild_Child.child" :index="subItem.id.toString()"
                                  :key="subItem.id">
                      <i :class="itemChild_Child.icon"></i><span
                      slot="title">{{subItem.projectName}}</span>
                    </el-menu-item>
                  </el-submenu>
                </template>


              </el-submenu>
              <el-menu-item v-else :index="itemChild.path" :key="itemChild.path"><i
                :class="itemChild.icon"></i><span slot="title">{{itemChild.name}}</span></el-menu-item>
            </template>


          </el-submenu>

          <el-menu-item v-else :index="item.path" :key="item.path"><i :class="item.icon"></i><span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>

      </el-menu>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SidebarMenu",
    data() {
      return {
        restaurants: [],
        timeout:  null,
        navIndex: 99,//当前下标
        deviceHeight: 0,
        currentIndex:"1",
        search: '',
        processList: [],
        select_ProcessList: [],//工程菜单
        //导航条
        navList: [
          {
            path: "/set/sys/user",
            label: "系统用户"
          },
          {
            path: "/set/unit-message",
            label: "单位信息"
          },
          {
            path: "/set/process-list",
            label: "工序列表"
          },
          {
            path: "/set/project_divide",
            label: "工程划分"
          },
          {
            path: "/set/standard-engineering",
            label: "标准工程"
          },
          {
            path: "/set/evaluation-standard",
            label: "评定标准"
          }]
      }
    },
    created() {
    },
    watch:{
      search:function (v) {
        if(v==''){
          this.select_ProcessList = this.cache;
        }
      }
    },
    mounted() {

      this.getData();
      //获取设备高度。并监听窗口变化时更新耕读
      this.deviceHeight = this.$store.state.deviceStyle;
      let that = this;
      window.onresize = function () {
        that.deviceHeight = that.$store.state.deviceStyle;
        console.log(that.deviceHeight)
      }
    },
    methods: {
      //获取数据
      getData(){
        //获取导航菜单列表
        this.axios.get("/HiQuality/stdDiv/getStdDivByUnitId").then((res) => {
          console.log(this.select_ProcessList)
          this.select_ProcessList = res.data.data;
          this.cache = res.data.data;
          this.restaurants =  res.data.data;
          let arr = [];
          console.log('-----------------')
          this.restaurants.forEach((item)=>{
            let obj = item;
            obj.value = item.projectName;
            arr.push(obj)
          })
          this.restaurants = arr;
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 100 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      //选中搜索
      handleSelect(item) {
        console.log(item)
        this.select_ProcessList=[];
        this.select_ProcessList.push(item);
      },
      //显示工序列表
      showProcessList(key, keyPath) {
        if (keyPath.length > 2) {
          this.stdProjectId = keyPath[3];
          this.axios.get("/HiQuality/stdProc/getByStdProjectId", {
            params: {
              stdProjectId: this.stdProjectId
            }
          }).then((res) => {
            let obj = {
              list: res.data.data,
              id: this.stdProjectId
            }
            this.$store.commit('setProcess',obj,);
          })
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
  .asideMenu {
    padding: 10px 0px;
  }

  .aside {
    width: 280px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
    text-align: left;
  }

  .el-menu {
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #cccccc;
  }
</style>
<style>
  .el-submenu__title,.el-menu-item{
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
</style>
