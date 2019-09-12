<template>

  <div class="nav-panel">
    <main>
      <div class="content">
        <!-- <div class="top-label">
           路基工程 双击选择标准的分项工程，确定响应的工序
         </div>-->
        <div class="split-line"></div>
        <div class="layout" :style="{height:menuH -70  +'px'}">
          <div class="views" v-if="processList.length">
            <div class="list" :style="{height:menuH -160 +'px'}">
              <div class="list-item" v-for="(item,index) in processList" :key="index"
              >
                <div class="list-item-left">
                  {{item.tableNo}}
                </div>
                <div class="list-item-center">
                  {{item.tableName}}
                </div>

              </div>
            </div>
            <span class="submit-btn btn-hover" @click="saveProcessList">确定</span>
          </div>
          <div class="aside">

            <div class="search-warp">
              <el-input
                placeholder="输入标准分项工程名称，按Enter键进行搜索"
                size="mini"
                suffix-icon="el-icon-search"
                v-model="input21">
              </el-input>
            </div>
            <el-menu
              :style="{height:menuH -110 +'px'}"
              default-active="1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @select="showProcessList"
              @close="handleClose">
              <!-- 单位工程 -->
              <template v-for="item in select_ProcessList">
                <el-submenu class="menu-title" v-if="item.child && item.child.length" :index="item.id.toString()" :key="item.id">
                  <template slot="title"><!--<i :class="item.icon"></i>--><span>{{item.projectName}}</span></template>
                  <!-- 分部工程 -->
                  <template v-for="itemChild in item.child">
                    <el-submenu
                      v-if="itemChild.child && itemChild.child.length"
                      :index="itemChild.id.toString()"
                      :key="itemChild.id">
                      <template slot="title">
                        <!--<i :class="itemChild.icon"></i>--><span>{{itemChild.projectName}}</span></template>
                      <!--分项  -->
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
                            <!--  <i :class="itemChild_Child.icon"></i>--><span
                            slot="title">{{subItem.projectName}}</span>
                          </el-menu-item>
                        </el-submenu>
                      </template>


                    </el-submenu>
                    <el-menu-item v-else :index="itemChild.path" :key="itemChild.path"><i
                      :class="itemChild.icon"></i><span slot="title">{{itemChild.name}}</span></el-menu-item>
                  </template>


                </el-submenu>
                <el-menu-item  class="menu-title"  v-else :index="item.path" :key="item.path">
                  <i :class="item.icon"></i><span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>

            </el-menu>
          </div>

        </div>

      </div>

    </main>
  </div>


</template>

<script>
  export default {
    name: "Select_Process",
    props: ['select_ProcessList', 'unitId'],
    created() {
      this.menuH = document.documentElement.clientHeight - 100;
      console.log('-----')
      console.log(this.select_ProcessList)
    },
    data() {
      return {
        showClose:false,
        dialogVisible: true,
        menuH: '',
        navIndex: 99,//当前下标
        input21: '',
        stdProjectId: '',//标准工程id
        processList: [],//工序列表
      }
    },
    methods: {

      handleClose(done) {
        this.dialogVisible = false;
      },
      /**
       * 点击确定按钮保存指定工序到工程部位
       * @method saveProcessList
       * @param {id} 单位工程id
       * @param {stdProjectId} 标准工程id
       * @return {无}
       */
      saveProcessList() {
        console.log('保存功能')
        this.axios.get("/HiQuality/pmDiv/addStdProjectId", {
          params: {
            id: this.unitId,
            stdProjectId: this.stdProjectId
          }
        }).then((res) => {
          console.log(res)
          if (res.data.msg == "success") {
            this.$router.push({
              path: '/procedure_control/process_list/index',
              query: {
                id: this.unitId
              }
            })
          }

        })
      },
      /**
       * 点击菜单叶结点时传入子分项id查询对应工序列表
       * @method showProcessList
       * @param {keyPath}导航默认返回当前点击项  包含他的父级数组
       * @return {无}
       */
      showProcessList(key, keyPath) {
        if (keyPath.length > 2) {
          this.stdProjectId = keyPath[3];
          this.axios.get("/HiQuality/stdProc/getByStdProjectId", {
            params: {
              stdProjectId: this.stdProjectId
            }
          }).then((res) => {
            this.processList = res.data.data;
          })
        }
      },
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      //切换当前激活项
      tabNav(index, route) {
        this.navIndex = index;
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>
  .nav-panel {
    position: fixed;
    right: 0px;
    top: 110px;
    z-index: 3000;
    overflow: auto;
  }


  .content {
    padding: 0px 10px 10px 10px;
    border: 1px solid #cccccc;
    background: white;
    overflow: auto;
  }

  .aside {
    width: 280px;
  }


  .el-menu {
    text-align: left;
    overflow: auto !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #ccc
  }

  .search-warp {
    margin-bottom: 10px;
  }

  .views {
    padding: 40px 20px 20px 20px;
    width: 400px;
  }




  .submit-btn {
    width: 120px;
    margin: 0 auto;
    margin-top: 15px;
    height: 30px;
    display: inline-block;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(187, 187, 187, 1);
  }

  .btn-hover:hover {
    background: #146D8E;
    color: white;
    cursor: pointer;
  }

  .split-line {
    height: 1px;
    background: #cccccc;
    margin-bottom: 10px;
  }

  .layout {
    display: flex;
  }

  .top-label {
    height: 30px;
    display: flex;
    align-items: center;
  }

  .list-item-active {
    background: #146D8E;
    color: white;
  }

  .menu-title{
    color: #000;

  }

</style>
