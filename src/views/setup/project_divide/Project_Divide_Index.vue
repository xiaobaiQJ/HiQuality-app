<template>
  <div  v-show="!(JSON.stringify(project) === '{}')">
    <header>
      <div class="nav">
        <div class="nav-left hover">
          <router-link :to="{path:'/set/project_divide/add',query: {isSub:false}}" tag="span">
            <i class="iconfont icons">&#xe623;</i>
            同级节点
          </router-link>
        </div>
        <div class="nav-right hover">
          <router-link :to="{path:'/set/project_divide/add',query: {isSub:true}}" tag="span">
            <i class="iconfont icons">&#xe623;</i>
            下级节点
          </router-link>
        </div>
        <div class="nav-right hover">
          <div @click="delMenu">
            <i class="iconfont icons">&#xe6b0;</i>
            删除节点
          </div>
        </div>
        <div class="nav-right hover" @click="goEdit">
          <i class="iconfont icons">&#xe707;</i>
          编辑节点
        </div>
      </div>
    </header>
    <main>
      <div class="content-warp">
        <div class="panel">
          <!-- <div class="panel-item">
             <div class="panel-item-left">
               工程类型
             </div>
             <div class="panel-item-right">
               {{project.projPartsType | getProjectType}}
             </div>
           </div>-->
          <div class="panel-item">
            <div class="panel-item-left">
              工程部位名称
            </div>
            <div class="panel-item-right">
              {{project.projPartsName}}
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              工程部位编码
            </div>
            <div class="panel-item-right">
              {{project.projPartsCode}}
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              起止桩号
            </div>
            <div class="panel-item-right">
              {{project.stakeNo}}
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              工程级别
            </div>
            <div class="panel-item-right">
              {{project.projPartsLevel | getLevel}}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import {getMessage} from "../../../utils/tost";

  export default {
    name: "Project_Divide_Index",
    data() {
      return {
        project: {},
      }
    },
    filters: {
      getProjectType: function (type) {
        switch (type) {
          case 1:
            return "路基工程"
            break;
          case 2:
            return "路面工程"
            break;
          case 3:
            return "桥梁工程"
            break;
          case 4:
            return "互通立交工程"
            break;
          case 5:
            return "隧道工程"
            break;
          case 6:
            return "环保工程"
            break;
          case 7:
            return "交通安全设施"
            break;
          case 8:
            return "机电工程"
            break;
          default:
            return "工地建设"
            break;
        }
      },
      getLevel: function (level) {
        switch (level) {
          case 1:
            return "单位工程"
            break;
          case 2:
            return "分部工程"
            break;
          case 3:
            return "分项工程"
            break;
          case 4:
            return "分项子项工程"
            break;

          default:
            return "单位工程"
            break;
        }
      }
    },
    computed: {
      getProject: function () {
        return this.$store.state.project_Divide
      }
    },
    watch: {
      getProject(v) {
        this.project = v;
      }
    },
    mounted() {

      //JSON.stringify(this.project) == "{}"
    },
    methods: {
      //删除菜单
      delMenu() {
        this.axios.get("/HiQuality/div/deleteById", {
          params: {
            id: this.$store.state.project_Divide.id
          }
        }).then((res) => {
          if (res.data.msg == "fail") {
            this.$message({
              message: '只能删除没有子节点的工程！',
              type: 'warning'
            });
            return false
          }
          this.$tost.message('del')
          this.$store.commit('setPorjectDel', Math.random());
          this.project = {};
        })
      },
      //前往修改页
      goEdit() {
        this.$router.push({
          path: '/set/project_divide/edit',
          query: {
            obj: this.project
          }
        })
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
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

  .nav-left, .nav-right {
    width: 100px;
    text-align: left;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .panel-item {
    display: flex;

    margin-bottom: 30px;
  }

  .panel-item-left {
    width: 100px;
    padding-left: 20px;
    color: #4e4e4e;
    text-align: left;
  }

  .panel-item-right {
    flex: 1;
    text-align: left;
    color: #616161;
  }
</style>
