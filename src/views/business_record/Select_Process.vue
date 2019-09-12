<template>

  <div class="nav-panel">
    <main>
      <div class="content">
        <!-- <div class="top-label">
           路基工程 双击选择标准的分项工程，确定响应的工序
         </div>-->
        <div class="split-line"></div>
        <div class="layout" :style="{height:menuH -60  +'px'}">
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
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @select="showProcessList"
              @close="handleClose">
              <!-- 单位工程 -->
              <template v-for="(item,index) in select_ProcessList">
                <el-submenu class="menu-title" v-if="item!=''" :index="item.id.toString()+'-'+index" >
                  <template slot="title"><!--<i :class="item.icon"></i>--><span>{{item.unitProjName}}</span></template>
                  <!--分部工程-->
                  <template v-for="(itemChild,childIndex) in item.child">
                    <el-submenu
                      v-if="itemChild.child && itemChild.child.length"
                      :index="itemChild.id.toString()+'-'+childIndex"
                      :key="childIndex">
                      <template slot="title">
                        <!--<i :class="itemChild.icon"></i>-->
                        <span>{{itemChild.projPartsName}}</span>
                      </template>
                      <!--分项  -->
                      <template v-for="(itemChild_Child,subChildIndex) in itemChild.child">
                        <el-submenu
                          v-if="itemChild_Child.child && itemChild_Child.child.length"
                          :index="itemChild_Child.id.toString()+'-'+subChildIndex"
                          :key="itemChild_Child.id">
                          <template slot="title">
                            <span>{{itemChild_Child.projPartsName}}</span>
                          </template>
                          <!--子分项-->
                          <el-menu-item
                            v-for="(subItem,subIndex) in itemChild_Child.child"
                            :index="subItem.id.toString()+'-'+subIndex"
                            :key="subItem.id">
                            <!--  <i :class="itemChild_Child.icon"></i>--><span
                            slot="title">{{subItem.projPartsName}}</span>
                          </el-menu-item>
                        </el-submenu>
                      </template>

                    </el-submenu>
                    <el-menu-item v-else :index="itemChild.id.toString()+'-'+childIndex" :key="itemChild.id"><i
                      :class="itemChild.icon"></i><span slot="title">{{itemChild.projPartsName}}</span></el-menu-item>
                  </template>
                </el-submenu>

                <el-menu-item class="menu-title" v-else :index="item.id.toString()+'-'+index" :key="item.id">
                  <i :class="item.icon"></i><span slot="title">{{item.unitProjName}}</span>
                </el-menu-item>
              </template>

            </el-menu>
          </div>

        </div>

      </div>

    </main>
    <!--滑出-->
    <article>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <div v-show="message" class="messge-box" @click.stop="goTable">
          该部位已存在记录！点击查看
          <i class="el-icon-close float-right" @click.stop="message=false"></i>
        </div>
      </transition>
    </article>
  </div>


</template>

<script>
  export default {
    name: "Select_Process",
    created() {
      this.menuH = document.documentElement.clientHeight - 100;
      console.log("sadsadsadsaa")
    },
    props: ['currentUrl', 'tableId', 'tableName'],
    mounted() {
      this.getData();
    },
    data() {
      return {
        showClose: false,
        message: false,
        dialogVisible: true,
        aduitStatus: "",//审核状态
        menuH: '',
        navIndex: 99,//当前下标
        input21: '',
        select_ProcessList: "",
        stdProjectId: '',//标准工程id
        processList: [],//工序列表
        branchList: "",
        process: ""//当前工序
      }
    },
    methods: {
      /**
       * 点击确定按钮保存指定工序到工程部位
       * @method saveProcessList
       * @param {id} 单位工程id
       * @param {stdProjectId} 标准工程id
       * @return {无}
       */
      saveProcessList(id, pro) {
        console.log('保存功能')
        /* this.axios.get("/HiQuality/pmDiv/addStdProjectId", {
           params: {
             id: Number(id.split('-')[0]),
             stdProjectId: pro
           }
         }).then((res) => {
           console.log(res)
           if (res.data.msg == "success") {
             /!*this.$router.push({
               path: '/procedure_control/process_list/index',
               query: {
                 id: this.unitId
               }
             })*!/
           }
         })*/
      },
      getId(id) {
        let str = id + ""
        return str;
      },
      handleClose(done) {

        this.dialogVisible = false;
      },
      getData() {
        console.log("获取单位工程")
        this.axios.get("/HiQuality/unit/getAllUnit").then(res => {
          console.log(res.data)
          this.select_ProcessList = res.data.data;
        })
      },
      //前往具体的table模块页
      goTable() {
        this.$store.commit("setProjPartsId", this.stdProjectId);
        this.$store.commit("setTableId", this.tableId);
        this.$store.commit("setModuleType", 2);
        this.$store.commit('setAuditorTypeIds',[])
        this.$store.commit("setCurrentType", 3);
        this.$router.push({
          path: this.currentUrl,
          query: {
            title: this.tableName
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
        let pro = key.split('-')[0]
        this.stdProjectId = pro;
        let indexs = [];
      /*  keyPath.forEach((item => {
          indexs.push(Number(item.split('-')[1]))
        }))
        let stdProject = this.select_ProcessList[indexs[0]].child[indexs[1]].child[indexs[2]].child[indexs[3]];*/
        this.$store.commit("setProjPartsId", pro);
        this.$store.commit("setTableId", this.tableId);
        this.$store.commit("setModuleType", 2);
        this.axios.get("/HiQuality/rec/getRecInfoByTableId", {
          params: {
            tableId: this.$store.state.tableId,
            projPartsId: pro
          }
        }).then((res) => {

          if (res.data.data == null) {
            this.$store.commit("setCurrentType", 1);
            console.log("暂无记录！新增")
            console.log(res)

            this.$store.commit('setAuditorTypeIds',[])
            this.$router.push({
              path: this.currentUrl,
              query: {
                title: this.tableName
              }
            })
          } else {
            console.log("已有记录！修改");

            this.$store.commit('setAuditorTypeIds',[])
            this.aduitStatus = this.process.aduitStatus;
            this.message = true;
            this.$store.commit("setCurrentType", 2);
          }

        })
        //this.saveProcessList(keyPath[0], pro)

    },
    handleOpen(key, keyPath) {
      if (keyPath.length > 1) {
        return false
      }
      let pro = key.split('-')[0]
      this.axios.get("/HiQuality/unit/getAllSub", {
        params: {
          id: pro
        }
      }).then((res) => {
        let arr = res.data.data;
        let currentIndex = 0;
        let obj = {};

        if (res.data.status == 200) {
          try {
            this.select_ProcessList.forEach((item, index) => {
              obj = item;
              obj.child = [];
              item = obj;
              if (item.id == pro) {
                currentIndex = index
                obj.child = arr;
                throw new Error()
              }
            })
          } catch (e) {
            this.$set(this.select_ProcessList, currentIndex, obj)
          }

        } else {
          this.branchList = [];
        }
      })
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
    top: 120px;
    overflow: auto;
  }


  .content {
    padding: 0px 10px 10px 10px;
    border: 1px solid #cccccc;
    background: white;
    overflow: auto;
  }

  .aside {
    width: 500px;
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

  .messge-box {
    background: white;
    padding: 0px 20px;
    position: fixed;
    font-size: 14px;
    width: 260px;
    right: 0px;
    top: 50px;

  }

  .messge-box i {
    line-height: 40px;

  }


  .messge-box:hover {
    cursor: pointer;
    background: #146D8E;
    color: white;
  }
</style>
