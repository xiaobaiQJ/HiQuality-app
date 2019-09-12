<template>

  <div class="nav-panel">
    <main>
      <div class="content">
        <!-- <div class="top-label">
           路基工程 双击选择标准的分项工程，确定响应的工序
         </div>-->
        <!--   <div class="split-line"></div>-->
        <div class="layout" :style="{height:menuH -60  +'px'}">
          <!--          <div class="views" v-if="processList.length">
                      <div class="list" :style="{height:menuH -160 +'px'}">
                        <div class="list-item" v-for="(item,index) in processList" :key="index"
                        >
                          <div class="list-item-left">
                            {{item.tableNo}}
                          </div>
                          <div class="list-item-center">
                            {{item.tableName}}
                          </div>
                          <div class="list-item-right">
                            <div><i class="iconfont">&#xe717;</i></div>
                          </div>
                        </div>
                      </div>
                      <span class="submit-btn btn-hover" @click="saveProcessList">确定</span>
                    </div>-->
          <div class="aside">
            <!--
                          <div class="search-warp">
                            <el-input
                              placeholder="输入标准分项工程名称，按Enter键进行搜索"
                              size="mini"
                              suffix-icon="el-icon-search"
                              v-model="input21">
                            </el-input>
                          </div>-->

            <el-menu
              v-if="Ok==false"
              :style="{height:menuH -110 +'px'}"
              default-active="1"
              class="el-menu-vertical-demo"
              @select="showProcessList"
            >
              <!-- 单位工程 -->
              <template v-for="item in select_DevList">
                <el-submenu class="menu-title" v-if="item.children && item.children.length" :index="item.id.toString()"
                            :key="item.id">
                  <template slot="title"><!--<i :class="item.icon"></i>--><span>{{item.projectName}}</span></template>
                  <!-- 分部工程 -->
                  <template v-for="itemchildren in item.children">
                    <el-submenu
                      v-if="itemchildren.children && itemchildren.children.length"
                      :index="itemchildren.id.toString()"
                      :key="itemchildren.id">
                      <template slot="title">
                        <!--<i :class="itemchildren.icon"></i>--><span>{{itemchildren.projectName}}</span>
                      </template>
                      <!--分项  -->
                      <template v-for="itemchildren_children in itemchildren.children">

                        <el-submenu
                          v-if="itemchildren_children.children && itemchildren_children.children.length"
                          :index="itemchildren_children.id.toString()"
                          :key="itemchildren_children.id">
                          <template slot="title">
                            <span>{{itemchildren_children.projectName}}</span>
                          </template>
                          <!--子分项-->
                          <el-menu-item v-for="subItem in itemchildren_children.children" :index="subItem.id.toString()"
                                        :key="subItem.id">
                            <!--  <i :class="itemchildren_children.icon"></i>--><span
                            slot="title">{{subItem.projectName}}</span>
                          </el-menu-item>
                        </el-submenu>
                        <el-menu-item
                          v-else
                          :index="itemchildren_children.id.toString()"
                          :key="itemchildren_children.id">
                          <!--  <i :class="itemchildren_children.icon"></i>-->
                          <span
                          slot="title">{{itemchildren_children.projectName}}</span>
                        </el-menu-item>
                      </template>


                    </el-submenu>
                    <el-menu-item v-else :index="itemchildren.id.toString()" :key="itemchildren.id.toString()"><i
                      :class="itemchildren.icon"></i><span slot="title">{{itemchildren.projectName}}</span>
                    </el-menu-item>
                  </template>


                </el-submenu>

                <el-menu-item class="menu-title" v-else :index="item.id.toString()" :key="item.id">
                  <i :class="item.icon"></i><span slot="title">{{item.projectName}}</span>
                </el-menu-item>
              </template>

            </el-menu>
            <el-menu v-else
                     :style="{height:menuH -110 +'px'}"
                     default-active="1"
                     class="el-menu-vertical-demo"
                     @select="showProcessList"
            >
              <!-- 单位工程 -->
              <template v-for="item in select_DevList">
                <el-submenu class="menu-title" v-if="item.child && item.child.length" :index="item.id.toString()"
                            :key="item.id">
                  <template slot="title"><!--<i :class="item.icon"></i>--><span>{{item.projectName}}</span></template>
                  <!-- 分部工程 -->
                  <template v-for="itemchild in item.child">
                    <el-submenu
                      v-if="itemchild.child && itemchild.child.length"
                      :index="itemchild.id.toString()"
                      :key="itemchild.id">
                      <template slot="title">
                        <!--<i :class="itemchild.icon"></i>--><span>{{itemchild.projectName}}</span>
                      </template>
                      <!--分项  -->
                      <template v-for="itemchild_child in itemchild.child">
                        <el-submenu
                          v-if="itemchild_child.child && itemchild_child.child.length"
                          :index="itemchild_child.id.toString()"
                          :key="itemchild_child.id">
                          <template slot="title">
                            <span>{{itemchild_child.projectName}}</span>
                          </template>
                          <!--子分项-->
                          <el-menu-item v-for="subItem in itemchild_child.child" :index="subItem.id.toString()"
                                        :key="subItem.id">
                            <!--  <i :class="itemchild_child.icon"></i>--><span
                            slot="title">{{subItem.projectName}}</span>
                          </el-menu-item>
                        </el-submenu>
                      </template>
                    </el-submenu>
                    <el-menu-item v-else :index="itemchild.id.toString()" :key="itemchild.id.toString()"><i
                      :class="itemchild.icon"></i><span slot="title">{{itemchild.projectName}}</span>
                    </el-menu-item>
                  </template>
                </el-submenu>

                <el-menu-item class="menu-title" v-else :index="item.path" :key="item.path">
                  <i :class="item.icon"></i><span slot="title">{{item.name}}</span>
                </el-menu-item>
              </template>

            </el-menu>
            <span class="submit-btn btn-hover" @click="saveProcessList" v-show="stdProjectId!=''">确定</span>
          </div>

        </div>

      </div>

    </main>
  </div>


</template>

<script>
  export default {
    name: "Select_Process",
    props: ['select_DevList', 'unitId', 'isOk'],
    created() {
      this.Ok = this.isOk;
      this.menuH = document.documentElement.clientHeight - 100;
      console.log('-----')
      console.log(this.select_DevList)
    },
    data() {
      return {
        showClose: false,
        dialogVisible: true,
        menuH: '',
        navIndex: 99,//当前下标
        input21: '',
        Ok: false,
        stdProjectId: '',//标准工程id
        processList: [],//工序列表
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
          }

        ]
      }
    },
    methods: {
      goK02() {
        this.axios.get("/HiQuality/tbInfo/tbk02", {
          params: {
            id: this.unitId
          }
        }).then((res) => {
          console.log("获取k02")
          console.log(res)
          this.$store.commit('setK02', res.data.data)
          this.$store.commit("setModuleType", 4);
          this.axios.get("/HiQuality/rec/getRecInfoByTableId", {
            params: {
              tableId: 489,
              projPartsId: this.$store.state.projPartsId
            }
          }).then((response) => {

            console.log("================")
            console.log(response.data)
            if (response.data.data == null) {
              this.$store.commit("setCurrentType", 1)
            } else {
              this.$store.commit("setCurrentType", 2)
            }
            this.$store.commit("setTableId", 489)
            this.$router.push({
              path: '/subProjectEvaluate',
              query: {
                title: "分部工程质量检验评定表"
              }
            });
          })

        })
      },
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
        console.log(this.stdProjectId);
        console.log('保存功能11111')
        this.$store.commit("setCurrentType", 1)
        this.axios.get("/HiQuality/pmDiv/addStdProjectId", {
          params: {
            id: this.unitId,
            stdProjectId: this.stdProjectId
          }
        }).then((res) => {
          console.log(res)
          console.log(this.ok)
          if (this.ok == true) {
            this.getK01();
          } else {
            this.goK02();
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
        this.stdProjectId = keyPath[keyPath.length - 1];
        /* this.axios.get("/HiQuality/tbInfo/tbk02", {
           params: {
             id: this.stdProjectId
           }
         }).then((res) => {
           console.log("获取k02")
           console.log(res)
           this.$store.commit('setK02', res.data.data)
           if (ok == 1) {
             return false
           }
           this.$store.commit("setModuleType",4);
           this.$router.push({
             path:'/subProjectEvaluate',
             query:{
               title:"分部工程质量检验评定表"
             }
           })
         });*/
        /*  this.axios.get("/HiQuality/stdProc/getByStdProjectId", {
            params: {
              stdProjectId: this.stdProjectId
            }
          }).then((res) => {
            this.processList = res.data.data;
          })*/
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
    padding: 10px 10px 10px 10px;
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

  .menu-title {
    color: #000;

  }

</style>
