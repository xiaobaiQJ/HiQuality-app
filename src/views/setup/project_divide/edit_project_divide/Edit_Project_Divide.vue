/**
* @author bai tao
* @date 2019/6/18 0018
* @Description:修改工程划分
*/
<template>
  <div class="con">
    <header>
      <div class="nav">

      </div>
    </header>
    <main>
      <div class="content ">
      <!--  <div class="panel">
          <div class="panel-left">
            工程类型
          </div>
          <div class="panel-right">
            <el-select v-model="project.projPartsType" size="mini" placeholder="必须填">
              <el-option
                v-for="item in navBox"
                :key="item.type"
                :label="item.label"
                :value="item.type">
              </el-option>
            </el-select>
          </div>
        </div>-->
        <div class="panel">
          <div class="panel-left">
            工程部位名称
          </div>
          <div class="panel-right">
            <el-input v-model="project.projPartsName" size="mini" placeholder="必填项，例如：左幅路基挖方"></el-input>
          </div>
        </div>
        <div class="panel">
          <div class="panel-left">
            工程部位编码
          </div>
          <div class="panel-right">
            <el-input v-model="project.projPartsCode" size="mini" placeholder="必填项，例如：XYHC2-3-U36-P1-S0-1"></el-input>
          </div>
        </div>
        <div class="panel">
          <div class="panel-left">
            起止桩号
          </div>
          <div class="panel-right">
            <el-input v-model="project.stakeNo" size="mini" placeholder="例如：ZK51+055~ZK51+300.803"></el-input>
          </div>
        </div>
        <div class="panel">
          <div class="panel-left">
            工程级别
          </div>
          <div class="panel-right">
            <el-select v-model="project.projPartsLevel" size="mini" placeholder="必须填">
              <el-option
                v-for="item in projectLevel"
                :key="item.type"
                :label="item.label"
                :value="item.type">
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="btn-warp">
          <div class="btn-box btn-active" @click="canel">取消</div>
          <div class="btn-box btn-active" @click="save">保存</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Edit_Project_Divide",
    data() {
      return {
        project: {},
        //项目类型集合
        navBox: [
          {
            icon: "&#xe612;",
            type: 1,
            count: 0,
            label: "路基工程"
          },
          {
            icon: "&#xe621;",
            type: 2,
            count: 0,
            label: "路面工程"
          },
          {
            icon: "&#xe65a;",
            type: 3,
            count: 0,
            label: "桥梁工程"
          },
          {
            icon: "&#xe6ca;",
            type: 4,
            count: 0,
            label: "互通立交工程"
          },
          {
            icon: "&#xe89a;",

            type: 5,
            count: 0,
            label: "隧道工程"
          },
          {
            icon: "&#xe60a;",
            type: 6,
            count: 0,
            label: "环保工程"
          },
          {
            icon: "&#xe604;",
            type: 7,
            count: 0,
            label: "交通安全设施"
          },
          {
            icon: "&#xe612",
            type: 8,
            count: 0,
            label: "机电工程"
          },
          {
            icon: "&#xe612",
            type: 9,
            count: 0,
            label: "工地建设"
          },

        ],
        //工程级别
        projectLevel: [
          {
            label: "单位工程",
            type: 1
          },
          {
            label: "分部工程",
            type: 2
          },
          {
            label: "分项工程",
            type: 3
          },
          {
            label: "子分项工程",
            type: 4
          }
        ],
      }
    },
    mounted() {
      this.project = this.$route.query.obj;
    },
    computed:{
      getProject:function () {
        return this.$store.state.project_Divide
      }
    },
    watch:{
      getProject(v){
        this.project = v;
      }
    },
    filters: {

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
            return "工地建设"
            break;
        }
      }
    },
    methods: {
      getProjectType(type) {
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
      save() {
        console.log('编辑分区');
        var params = new URLSearchParams();
        params.append('bPmProjDiv', JSON.stringify(this.project));
        this.axios.post("/HiQuality/div/updateDiv",params).then((res) => {
          this.$tost.message('edit')
          this.$store.commit('setPorjectDel', Math.random());
        })
        /*this.$router.push("/set/project_divide")*/
      },
      canel() {
        this.$router.push("/set/project_divide")
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
    display: block;
    width: 100%;
    position: relative;
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

  .content {
    padding: 0px 30px;
  }

  .panel {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .panel-left {
    width: 100px;
  }

  .panel-right {

  }


  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .btn-warp {
    position: absolute;
    bottom: 10px;
    right: 0px;
    display: flex;

  }

  .btn-box {
    width: 80px;
    height: 30px;
    border: 1px solid #cccccc;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
  }

  .btn-box:hover {
    background: #146D8E;
    color: white;
    cursor: pointer;
  }
</style>
<style>
  .panel-right .el-input__inner {
    width: 260px;
  }
</style>
