/**
* @author bai tao
* @date 2019/6/18 0018
* @Description:新增标准工程
*/
<template>
  <div class="con">
    <main>
      <div class="content " style="position: relative">
        <div class="content-box" :style="{height:$store.state.deviceStyle -210 +'px'}">
          <div class="panel">
            <div class="panel-left">
              工程类型
            </div>
            <div class="panel-right">
              <el-select v-model="value" size="mini" placeholder="必须填">
                <el-option
                  v-for="item in navBox"
                  :key="item.type"
                  :label="item.label"
                  :value="item.type">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              工程名称
            </div>
            <div class="panel-right">
              <el-input v-model="input" size="mini" placeholder="必填项，例如：左幅路基挖方"></el-input>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              工程级别
            </div>
            <div class="panel-right">
              <el-select v-model="value2" size="mini" placeholder="必须填">
                <el-option
                  v-for="item in projectLevel"
                  :key="item.type"
                  :label="item.label"
                  :value="item.type">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="panel">
            <span class="magin-right">实测项目是否简洁样式</span>
            <el-switch
              v-model="value6"
              active-color="#13ce66"
            >
            </el-switch>
          </div>
          <div class="panel">
            <div class="panel-left">
              基本要求
            </div>
            <div class="panel-right">
              <div class="list">
                <!--<div class="list-item" >
                  <div class="list-item-left">
                    (3)
                  </div>
                  <div class="list-item-center">
                    不得出现露筋和空洞现象。
                  </div>
                </div>-->
                <div class="list-item">
                  <div><i class="iconfont hover">&#xe623;</i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              外观鉴定
            </div>
            <div class="panel-right">
              <div class="list">
                <!--<div class="list-item" >
                  <div class="list-item-left">
                    (3)
                  </div>
                  <div class="list-item-center">
                    不得出现露筋和空洞现象。
                  </div>
                </div>-->
                <div class="list-item">
                  <div><i class="iconfont hover">&#xe623;</i></div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              实测项目
            </div>
            <div class="panel-right">
              <div class="panel-table">
                <div class="panel-table-top">
                  <div class="table-top-column">
                    项次
                  </div>
                  <div class="table-top-column">
                    检查项目
                  </div>
                  <div class="table-top-column">
                    规定值或许偏差
                  </div>
                  <div class="table-top-column">
                    检查方法和频率
                  </div>
                  <div class="table-top-column">
                    权值
                  </div>
                </div>
                <!--  <div class="panel-table-line" v-for="(val,index) in 5" :key="index">
                    <div class="table-line-column">
                      {{index+1}}
                    </div>
                    <div class="table-line-column">
                      混凝土强度
                    </div>
                    <div class="table-line-column">
                      在合格标准内
                    </div>
                    <div class="table-line-column">
                      按附录D检查
                    </div>
                    <div class="table-line-column">
                      3
                    </div>
                  </div>-->
                <div class="panel-table-line">
                  <div class="list-item">
                    <i class="iconfont hover">&#xe623;</i>
                  </div>
                </div>
              </div>
            </div>
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
    name: "Add_Project_Divide",
    data() {
      return {
        value6: false,
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
        input: '',
        input2: '',
        input3: '',
        value: '',
        value2: '',
      }
    },
    methods: {
      save() {
        this.$router.push("/set/project_divide")
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
  }


  .content {
    padding: 0px 30px;
    position: relative;
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
    flex: 1;
  }


  .btn-warp {
    position: absolute;
    bottom: 0px;
    right: 20px;
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


  .magin-right {
    display: inline-block;
    margin-right: 30px;
  }

  .content-box {
    padding-bottom: 30px;
    overflow: auto;
    position: relative;
  }


  .panel-table {
    border: 1px solid #cccccc;
  }

  .panel-table-top {
    display: flex;
    height: 40px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #cccccc;
  }

  .table-top-column {
    text-align: center;
    flex: 1;
  }

  .panel-table-line {
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
  }

  .table-line-column {
    text-align: center;
    flex: 1;
  }


</style>
<style>
  .panel-right .el-input__inner {
    width: 260px;
  }
</style>
