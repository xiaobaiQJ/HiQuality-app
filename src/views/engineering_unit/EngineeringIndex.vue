/**
* @author bai tao
* @date 2019/6/13 0013
* @Description:项目菜单页
*/
<template>
  <div id="engineering" class="view-container ">

    <!--面包屑-->
    <header>
      <!-- <section>
         <div class="breadcrumb">
           <span class="unit-name">单位工程</span>
         </div>
       </section>-->
    </header>
    <!--导航区域-->
    <nav>
      <div class="nav-warp">
        <div :span="3" class="nav-item" v-for="(item,index) in navBox" :key="index" v-if="navBox.length">
          <span class="relative">
            <i class="iconfont hover" v-html="caseIcon(item.type_no)" @click.stop="tabProject(item.type_no)"
               :class="item.type_no == currentType ? 'active-icon' : '' "></i>
            <span class="pie-label" v-show="item.type_count>0">
              {{item.type_count}}
            </span>
          </span>
          <div :class="index+1 == currentType ? 'active-icon' : '' ">{{item.type_name}}</div>
        </div>
      </div>
    </nav>
    <main>
      <section>
        <div class="ht-20"></div>
        <el-row class="breadcrumb">
          <el-col :span="24">
            <span class="unit-name" @click.stop="tabType(1)">单位工程</span>
            <span class="unit-name active-unit" v-show="subType>1" @click.stop="tabType(2)">/分部工程</span>
            <span class="unit-name active-unit" v-show="subType>2" @click.stop="tabType(3)">/分项工程</span>
            <span class="unit-name active-unit" v-show="subType>3">/子分项工程</span>
          </el-col>

        </el-row>
        <div class="ultrafine-border "></div>
      </section>
      <!--单位工程-->
      <section>
        <transition
          enter-active-class="animated fadeIn"
        >
          <div class="list relative" v-if="subType==1">
            <div class="list-item"
                 v-for="(item,index) in this.unitProject.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)"
                 :key="index">
              <div class="list-item-line "
                   @click.stop="showBranch(2,item.id,item)">

                <div class="list-item-left-icon">
                  <i class="iconfont ">&#xe902;</i>
                </div>

                <div class="line-left">
                  {{item.unitProjName}}
                </div>
                <div class="code">{{item.unitProjCode}}</div>
                <div class="line-center">

                  {{item.stakeNo}}
                </div>
                <div class="line-right">
                  <div class="line-right-icon">
                    <i class="iconfont black-icon" @click.stop="setContractId(item,0)">&#xe609;</i>
                  </div>
                  <!--      <div class="line-right-icon">
                          <router-link :to="{path:'/procedure_control/accessory',query: {id: item.id}}" tag="div">
                            <i class="iconfont  black-icon">&#xe61e;</i>
                          </router-link>

                        </div>-->
                  <div class="line-right-icon">
                    <!-- <router-link :to="{path:'/procedure_control/process_list',query: {id: item.id}}" tag="div">
                         </router-link>-->
                    <i class="iconfont  black-icon ">&#xe602;</i>


                  </div>

                </div>
              </div>
            </div>
            <div class="ht-20"></div>
            <el-pagination
              :page-sizes="[10,20,30]"
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              layout="total, sizes, prev, pager, next, jumper"
              :total="unitProject.length">
            </el-pagination>
          </div>
        </transition>


      </section>
      <!--分部工程-->
      <section>
        <transition
          enter-active-class="animated fadeIn"
        >
          <div class="list relative" v-if="subType==2">
            <div class="list-item" v-for="(item,index) in branchList" :key="index"
                 v-if="branchList.length>0">
              <div class="list-item-line "
                   @click.stop="showSubentry(3,item.child,item.id)">
                <div class="list-item-left-icon">
                  <i class="iconfont ">&#xe902;</i>
                </div>

                <div class="line-center">
                  {{item.projPartsName}}
                </div>

                <div class="code">{{item.unitProjCode}}</div>
                <div class="line-left">
                  {{item.projPartsCode}}
                </div>

                <div class="line-right">
                  <div class="line-right-icon">
                    <i class="iconfont black-icon" @click.stop="showDev(item,2)">&#xe609;</i>
                  </div>
                  <!--
                   <div class="line-right-icon">
                     <router-link :to="{path:'/procedure_control/accessory',query: {name: item.id}}" tag="div">
                       <i class="iconfont  black-icon">&#xe61e;</i>
                     </router-link>

                   </div>-->
                  <div class="line-right-icon" v-show=" item.stdProject != ''  ">
                    <!--<router-link :to="{path:'/procedure_control/process_list',query: {id: item.id}}" tag="div">-->
                    <i class="iconfont  black-icon "
                       @click.stop="getProProject(item,2)">&#xe707;</i>
                    <!--</router-link>-->
                  </div>

                  <div class="line-right-icon">
                    <i class="iconfont  black-icon ">&#xe602;</i>
                    <!--      <router-link :to="{path:'/procedure_control/process_list',query: {id: item.id}}" tag="div">
                          </router-link>-->
                  </div>
                </div>
              </div>
            </div>
            <div v-if="branchList.length==0" class="error-box">
              暂无数据
            </div>
          </div>
        </transition>
      </section>
      <!--分项工程-->
      <section>
        <transition
          enter-active-class="animated fadeIn"
        >
          <div class="list relative" v-if="subType==3">

            <div class="list-item" v-for="(item,index) in subentryList" :key="index">
              <div class="list-item-line "
                   @click.stop="showSubentryList(4,item.child,item.id)">
                <div class="list-item-left-icon">
                  <i class="iconfont ">&#xe902;</i>
                </div>
                <div class="line-center">
                  {{item.projPartsName}}
                </div>
                <div class="line-left">
                  {{item.projPartsCode}}
                </div>
                <div class="line-right">
                  <div class="line-right-icon"
                       v-show="item.stdProject != '' & $store.state.userLevel >= 5 & item.child == undefined ">
                    <i class="iconfont  black-icon "
                       @click.stop="editMenu(item)">&#xe707;
                    </i>
                  </div>
                  <div class="line-right-icon">
                    <i class="iconfont  black-icon ">&#xe602;</i>
                    <!-- <router-link :to="{path:'/procedure_control/process_list',query: {id: item.id}}" tag="div">
                     </router-link>-->

                  </div>

                </div>
              </div>
            </div>
            <!--      <div class="list-item" v-if="subentryList.length<1">
                    暂无数据
                  </div>-->
          </div>
        </transition>
      </section>
      <!--子分项工程-->
      <section>
        <transition
          enter-active-class="animated fadeIn"
        >
          <div class="list relative" v-if="subType==4">

            <div class="list-item" v-for="(item,index) in subChildentryList" :key="index">
              <div class="list-item-line "
                   @click.stop="showMenu(item)"
              >
                <div class="list-item-left-icon">
                  <i class="iconfont ">&#xe902;</i>
                </div>
                <div class="line-center">
                  {{item.projPartsName}}
                </div>
                <div class="line-left">
                  {{item.projPartsCode}}
                </div>
                <div class="line-right">
                  <!--<div class="line-right-icon">
                    <i class="iconfont black-icon" @click.stop="showK01(item,2)">&#xe609;</i>
                  </div>-->
                  <!--      <div class="line-right-icon">
                          <router-link :to="{path:'/procedure_control/process_list/index',query: {name: item.id}}" tag="div">
                            <i class="iconfont black-icon">&#xe609;</i>
                          </router-link>
                        </div>
                        <div class="line-right-icon">
                          <router-link :to="{path:'/procedure_control/accessory',query: {name: item.id}}" tag="div">
                            <i class="iconfont  black-icon">&#xe61e;</i>
                          </router-link>
                        </div>-->

                  <div class="line-right-icon">
                    <!--<router-link :to="{path:'/procedure_control/process_list',query: {id: item.id}}" tag="div">-->
                    <i class="iconfont  black-icon "
                       v-show="item.stdProject != '' && $store.state.userLevel >= 5 && item.child == undefined "
                       @click.stop="editMenu(item)">&#xe707;
                    </i>
                    <!--</router-link>-->
                  </div>
                  <div class="line-right-icon">
                    <!--<router-link :to="{path:'/procedure_control/process_list',query: {id: item.id}}" tag="div">-->
                    <i class="iconfont  black-icon ">&#xe602;</i>
                    <!--</router-link>-->
                  </div>
                </div>
              </div>
            </div>
            <!--      <div class="list-item" v-if="subentryList.length<1">
                    暂无数据
                  </div>-->
          </div>
        </transition>
      </section>
    </main>
    <article>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <!--    <el-dialogq
              :visible.sync="show"
              width="0%"
              :show-close="showClose"
              :before-close="handleClose">

              <Select_Process v-if="show" :select_ProcessList="select_ProcessList" :unitId="unitId"></Select_Process>
            </el-dialogq>-->
      </transition>

    </article>

    <article>
      <div class="layer-box" @click="show=false" v-if="show"></div>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <Select_Process v-if="show" :select_ProcessList="select_ProcessList" :unitId="unitId"></Select_Process>

      </transition>

    </article>


    <article>
      <div class="layer-box" @click="dev=false" v-if="dev"></div>

      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <Select_dve v-if="dev" :select_DevList="select_DevList" :unitId="unitId" :isOk="isOk"></Select_dve>

      </transition>

    </article>
  </div>
</template>

<script>
  import Select_Process from './Select_Process'
  import Select_dve from './Select_dve'
  import Select_Subentry from './Select_Subentry'

  export default {
    name: "EngineeringIndex",
    components: {
      Select_Process,
      Select_dve
    },

    data() {
      return {
        isOk: false,
        showClose: false,
        currentPage: 1, //当前页码数
        pagesize: 10, //每页显示条数
        unitId: 0,//单位工程id
        //项目类型集合
        navBox: [],
        show: false,//是否显示工序配置
        dev: false,//是否显示工程划分
        //选择工序列表
        select_ProcessList: [],
        select_DevList: [],//工程划分集合
        subType: 1,//展示层级
        currentType: 0,  //当前展示单位工程类型
        unitProject: [],   //当前显示数据集
        subChildentryList: [],    //子分项集合
        branchList: [],//分部集合
        subentryList: [],//分项集合
        projectList: [],//缓存
        contractId: ''
      }
    },
    created() {
      this.getUnitInfo();
      this.getProjectCount();
      this.getAllUnit();
    },
    computed: {
      getSupervisor: function () {
        return this.$store.state.supervisor
      },
      getWorkArea: function () {
        return this.$store.state.workArea
      },
      getSection: function () {
        return this.$store.state.section
      }
    },
    watch: {
      //监听监理
      getSupervisor: function (old, val) {
        if (this.$store.state.userLevel < 4) {
          this.contractId = val;
          this.getAllUnit();
          this.getProjectCount();
        }
      },
      //监听标段
      getSection: function (old, val) {
        if (this.$store.state.userLevel < 4) {
          this.contractId = val;
          this.getAllUnit();
          this.getProjectCount();
        }
      },
      //监听工区
      getWorkArea: function (old, val) {
        this.contractId = val;
        this.getAllUnit();
        this.getProjectCount();
      },
      currentType: function () {
        this.setList();
      },
      projectList: function () {
        this.navBox.forEach((item, index) => {
          item.count = 0;
        })
        console.log('进入')
        this.projectList.forEach((item, index) => {
          this.caseType(item.unitProjType)
        })
      }
    },
    mounted() {

    },
    methods: {
      /**
       * 获取工区分类
       * @method getProjectCount
       * @param {无} 无
       * @return {返回值类型} 返回值说明
       */
      getProjectCount() {
        this.axios.get("/HiQuality/unit/getUnitProjCountByContId", {
          params: {
            contractId: this.contractId
          }
        }).then((res) => {
          console.log(res)
          console.log("contractId")
          this.navBox = res.data.data;
        })
      },
      /**
       * 获取单位工程
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getAllUnit() {
        this.axios.get("/HiQuality/unit/getAllUnit", {
          params: {
            contractId: this.contractId
          }
        }).then((res) => {
          console.log("表格");
          console.log(res);
          this.projectList = res.data.data;
          this.currentType = 0;
          this.setList();
        })
      },
      getUnitInfo() {
        this.axios.get("/HiQuality/tbInfo/getUnitInfo").then((res) => {
          console.log("获取表头信息")
          console.log(res);
          if (res.data.status == 200) {
            this.$store.commit('setUnitTable', res.data);
          } else {
            this.$store.commit('setUnitTable', {});
          }
        })
      },
      //筛选图标
      caseIcon(type) {
        switch (type) {
          case 1:
            return "&#xe612;"
            break;
          case 2:
            return "&#xe621;"
            break;
          case 3:
            return "&#xe65a;"
            break;
          case 4:
            return "&#xe6ca;"
            break;
          case 5:
            return "&#xe89a;"
            break;
          case 6:
            return "&#xe6bd;"
            break;
          case 7:
            return "&#xed63;"
            break;
          case 8:
            return "&#xe604;"
            break;
          case 9:
            return "&#xe612;"
            break;
          case 10:
            return "&#xe6aa;"
            break;
          case 11:
            return "&#xe8d7;"
            break;
          case 12:
            return "&#xe784;"
            break;
          case 13:
            return "&#xe611;"
            break;
          case 14:
            return "&#xe66c;"
            break;
          case 15:
            return "&#xe714;"
            break;
          default:
            return "&#xe612;"
            break;
        }
      },
      handleClose(done) {
        this.show = false;
      },
      handleSizeChange(val) {
        this.pagesize = val;
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      /**
       * 修改全局contractId
       * @method setContractId
       * @param {int} contractId 合同段id
       * @return {返回值类型} 无
       */
      setContractId(obj, num) {
        this.$store.commit("setProjPartsId", obj.id)
        this.axios.get("/HiQuality/rec/updateContractId", {
          params: {
            contractId: obj.contractId
          }
        }).then((res) => {
          console.log("修改全局contractId");
          console.log(res)

          this.getK03(obj.id, num);
        })
      },
      /**
       * 是否显示工程划分树
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      showDev(obj, type) {
        console.log(obj)
        console.log('***************')
        this.$store.commit("setProjPartsId", obj.id)
        if (obj.stdProject === "") {
          this.getProProject(obj,type);
        } else {
          this.getK02(obj.id, 0)
        }
      },
      /**
       * 配置工程划分
       * @method getProProject
       * @param {objcet} obj 当前点击工程部位对象
       * @return {返回值类型} 返回值说明
       */
      getProProject(obj, type) {
        //获取标准工程列表
        this.axios.get("/HiQuality/stdProjDiv/getStdProjDiv", {
          params: {
            bPmProjDiv:
              {
                id: obj.id,
                projPartsLevel: type     //标准工程id
              }
          }
        }).then((res) => {
          console.log(res)
          console.log("配置工程划分");
          if (res.data.data.length) {

            this.unitId = obj.id
            this.select_DevList = res.data.data
            this.dev = true;
            this.isOk = false;
          } else {
            this.getK02(obj.id, 0)
          }
        })
      },
      //显示K01
      showK01(obj) {
        this.$store.commit("setProjPartsId", obj.id);
        if (obj.stdProject == "") {
          this.unitId = obj.id;
          this.axios.get("/HiQuality/stdDiv/getStdDivByUnitId").then((res) => {
            this.select_DevList = res.data.data
            this.dev = true;
            this.isOk = true;
          })
        } else {
          this.getK01(obj.id)
        }
      },
      editMenu(obj) {
        this.unitId = obj.id;
        this.show = !this.show;
        this.axios.get("/HiQuality/stdDiv/getStdDivByUnitId").then((res) => {
          this.select_ProcessList = res.data.data
        })
      },
      /**
       * 根据子分项对象的stdProject是否为空
       * 有则查看 没有就去新增
       * @method showMenu
       * @param {子分项对象}
       * @return {无}
       */
      showMenu(obj) {
        this.$store.commit("setProjPartsId", obj.id);
        if (obj.stdProject == "" && this.$store.state.userLevel < 5) {
          this.$tost.print("该工程暂无配置工序！", "warning")
          return
        }
        if (obj.stdProject == "" && this.$store.state.userLevel >= 5) {
          this.unitId = obj.id;
          this.show = !this.show;
          this.axios.get("/HiQuality/stdDiv/getStdDivByUnitId").then((res) => {
            this.select_ProcessList = res.data.data
          })
        } else {
          this.$router.push({
            path: '/procedure_control/process_list/index',
            query: {
              id: obj.id
            }
          })
        }
      },
      //关闭右侧菜单
      closePanel() {
        this.show = false;
      },
      //显示分项
      showSubentry(type, list, id) {
        this.subType = type;
        this.subentryList = list;
        this.getK02(id, 1)
      },
      //显示项目分部
      showBranch(type, id, obj) {
        this.subType = type;
        this.setContractId(obj, 1)
        this.getAllSub(id)
      },
      //获取分项工程表头信息
      getK01(id, isOk) {
        this.axios.get("/HiQuality/tbInfo/tbk01", {
          params: {
            id: id
          }
        }).then((res) => {
          console.log("获取k01")
          console.log(res)

          this.$store.commit('setK01', res.data.data)
          this.$store.commit("setModuleType", 4);
          if (isOk == 1) {
            return false
          }
          this.$router.push({
            path: '/K-01',
            query: {
              title: "土方路基分项工程质量检验评定表"
            }
          })

        })
      },
      //获取分部工程表头信息
      getK02(id, isOk) {
        this.axios.get("/HiQuality/tbInfo/tbk02", {
          params: {
            id: id
          }
        }).then((res) => {
          console.log("获取k02")
          console.log(res)
          this.$store.commit('setK02', res.data.data)
          if (isOk == 1) {
            return false
          }
          this.$store.commit("setModuleType", 4);
          this.axios.get("/HiQuality/rec/getRecInfoByTableId", {
            params: {
              tableId: 489,
              projPartsId: this.$store.state.projPartsId
            }
          }).then((res) => {
            console.log("================")
            console.log(res.data)
            if (res.data.data == null) {
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
      //获取单位工程表头信息
      getK03(id, isOk) {
        this.axios.get("/HiQuality/tbInfo/tbk03", {
          params: {
            id: id
          }
        }).then((res) => {
          console.log("获取k03")
          console.log(res)
          this.$store.commit('setK03', res.data.data);

          if (isOk == 1) {
            return false
          }
          this.$store.commit("setModuleType", 4);
          this.axios.get("/HiQuality/rec/getRecInfoByTableId", {
            params: {
              tableId: 495,
              projPartsId: this.$store.state.projPartsId
            }
          }).then((res) => {
            console.log("查询是否有该记录");
            console.log(res.data)
            if (res.data.data == null) {
              this.$store.commit("setCurrentType", 1)
            } else {
              this.$store.commit("setCurrentType", 2)
            }
            this.$store.commit("setTableId", 495);
            this.$router.push({
              path: '/unitProjectEvaluate',
              query: {
                title: "单位工程质量检验评定表"
              }
            });
          })

        })
      },
      /**
       * 方法描述 根据单位工程类型对顶部导航数据统计
       * @method caseType
       * @param {type} 单位工程类型
       * @return {无}
       */
      caseType(type) {
        this.navBox.forEach((item, index) => {
          if (item.type == type) {
            item.count += 1;
          }
        })
      },
      //显示子分项
      showSubentryList(type, list, id) {
        this.subType = type;
        this.getK01(id, 1);
        this.subChildentryList = list;
      },
      /**
       * 修改当前单位工程类型,并将当前单位工程存入状态管理
       * @method tabProject
       * @param   类型值
       * @return {返回值类型:无}
       */
      tabProject(v) {
        this.currentType = v;
        this.subType = 1;
        this.$store.commit('setProject', v)
      },
      //显示子分项列表
      tabType(v, id) {
        /* this.show = !this.show;*/
        this.subType = v;
      },

      //查询所有子项
      getAllSub(id) {
        this.axios.get("/HiQuality/unit/getAllSub", {
          params: {
            id: id
          }
        }).then((res) => {
          if (res.data.status == 200) {
            this.branchList = res.data.data;
          } else {
            this.branchList = [];
          }
        })
      },
      //筛选项目类型并放入当前显示数据集
      setList() {
        let arr = []
        this.projectList.forEach((item, index) => {
          if (item.unitProjType == this.currentType) {
            arr.push(item)
          }
        })
        this.unitProject = arr.length > 0 ? arr : this.projectList
      }
    }
  }
</script>

<style scoped>
  .view-container {
    width: 90%;
    font-size: 12px;
    margin: 10px auto;
    text-align: left;
  }

  .unit-name {
    color: #343434;
    font-weight: bold;
    font-size: 14px;
  }

  .breadcrumb {
    padding-bottom: 5px;
  }

  .nav-warp {
    padding: 20px 0px;
    display: flex;
    overflow-x: auto;
    justify-content: space-between;
    align-items: center;
    background: #F2F3F5;
  }

  .nav-item {
    flex: 1;
    line-height: 40px;
    text-align: center;
  }

  .nav-item i {
    font-size: 36px;
    color: #909090;
    border: none;
  }

  .list {
    border: none;
    text-align: left;
  }

  .list-item {
    padding-left: 20px;
    border-bottom: none !important;

  }

  .left-icon i {
    font-size: 22px;
  }

  .list-item-line {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #eee;
    border-width: 0.5px;
    height: 40px;
    align-items: center;
  }

  .list-item-line:hover {
    color: #0EB1C0;
    cursor: pointer;
  }

  .list-item-line:hover i {
    color: #0EB1C0;
  }


  .list-item-left-icon {
    margin-right: 20px;
  }


  .unit-name:hover {
    color: #0BB1BF;
    cursor: pointer;
  }

  .pie-label {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -20px;
    top: -20px;
    background: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  .line-left {
    flex: 1 !important;
    padding-right: 20px;
  }

  .line-center {
    flex: 1 !important;
  }

  .line-right {
    width: 100px;
    display: flex;
  }

  .line-right-icon {
    flex: 1;
    text-align: right;
  }

  .black-icon {
    color: #313131;
  }

  .black-icon:hover {
    color: #0BB1BF;
    cursor: pointer;
  }

  .active-icon {
    color: #0E95B2 !important;
  }

  .error-box {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .code {
    width: 200px;
    text-align: center;
  }
</style>
