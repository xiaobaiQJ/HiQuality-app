<template>
  <div class="aside">
    <div class="search-warp">
      <div>
        <el-input

          placeholder="输入工程部位名称，按Enter键进行搜索"
          size="mini"
          suffix-icon="el-icon-search"
          v-model="input21">
        </el-input>
      </div>
      <div class="ht-5"></div>
      <div>
        <el-input

          placeholder="输入工程部位编码，按Enter键进行搜索"
          size="mini"
          suffix-icon="el-icon-search"
          v-model="input21">
        </el-input>
      </div>
    </div>
    <div class="asideMenu">
      <el-menu
        disabled
        :style="{height:deviceHeight -200 +'px'}"
        default-active="1"
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
        navIndex: 99,//当前下标
        deviceHeight: 0,
        input21: '',
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
    mounted() {
      //获取导航菜单列表
      this.axios.get("/HiQuality/stdDiv/getStdDivByUnitId").then((res) => {
        console.log(this.select_ProcessList)
        this.select_ProcessList = res.data.data;
      })
      //获取设备高度。并监听窗口变化时更新耕读
      this.deviceHeight = this.$store.state.deviceStyle;
      let that = this;
      window.onresize = function () {
        that.deviceHeight = that.$store.state.deviceStyle;
        console.log(that.deviceHeight)
      }
    },
    methods: {
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
    width: 100%;
    padding: 10px 0px 0px 0px ;
  }

  .aside {
    margin-right: 20px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
    text-align: left;
  }

  .el-menu {
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #cccccc;

    width: 280px;
  }

  .ht-5{
    height: 5px;
  }

</style>
<style>
  .el-submenu__title,.el-menu-item{
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
</style>
