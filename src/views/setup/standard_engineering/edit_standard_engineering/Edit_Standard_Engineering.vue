/**
* @author bai tao
* @date 2019/6/18 0018
* @Description:
*/
<template>
  <div>
    <header>
      <div class="nav">
        <div class="nav-left hover">
          <router-link to="/set/standard-engineering/add" tag="span">
            <i class="iconfont icons">&#xe623;</i>
            同级节点
          </router-link>
        </div>
        <div class="nav-right hover">
          <router-link to="/set/standard-engineering/add" tag="span">
            <i class="iconfont icons">&#xe623;</i>
            下级节点
          </router-link>
        </div>
        <div class="nav-right hover">
          <router-link to="/set/standard-engineering/delete" tag="span">
            <i class="iconfont icons">&#xe6b0;</i>
            删除节点
          </router-link>
        </div>
        <div class="nav-right hover">
          <router-link to="/set/standard-engineering/edit" tag="span">
            <i class="iconfont icons">&#xe707;</i>
            编辑节点
          </router-link>

        </div>
      </div>
    </header>
    <main>
      <div class="content-warp">
        <div class="panel" :style="{height:$store.state.deviceStyle -238 +'px'}">
          <div class="panel-item">
            <div class="panel-item-left">
              工程名称
            </div>
            <div class="panel-item-right">
              管节预制
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              工程级别
            </div>
            <div class="panel-item-right">
              <el-select v-model="value" size="mini" placeholder="必须填">
                <el-option
                  v-for="item in projectLevel"
                  :key="item.type"
                  :label="item.label"
                  :value="item.type">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              工程类型
            </div>
            <div class="panel-item-right">
              <el-select v-model="value2" size="mini" placeholder="必须填">
                <el-option
                  v-for="item in navBox"
                  :key="item.type"
                  :label="item.label"
                  :value="item.type">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              主要工程
            </div>
            <div class="panel-item-right">
              <el-switch
                v-model="switch2"
                active-color="#13ce66">
              </el-switch>

            </div>
          </div>



          <div class="panel-item">
            <div class="panel-item-left">
              基本要求
            </div>
            <div class="panel-item-right">
              <div class="list">
                <div class="list-item" >
                  <div class="list-item-left">
                    (1)
                  </div>
                  <div class="list-item-center">
                    所用的水泥、砂飞石、水、外加剂和掺合料的质量规格应符合有关规范的要求，按规定的配合比施工。
                  </div>
                </div>
                <div class="list-item" >
                  <div class="list-item-left">
                    (3)
                  </div>
                  <div class="list-item-center">
                    混凝土应满足耐久性（抗冻、抗渗、抗侵蚀）等设计要求。
                  </div>
                </div>
                <div class="list-item" >
                  <div class="list-item-left">
                    (3)
                  </div>
                  <div class="list-item-center">
                    不得出现露筋和空洞现象。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              外观鉴定
            </div>
            <div class="panel-item-right">
              <div class="list">
                <div class="list-item" >
                  <div class="list-item-left">
                    (1)
                  </div>
                  <div class="list-item-center">
                    蜂窝、麻面面积不得超过该面面积的1%。不符合要求时，每超过1%减3分；深度超过10mm的必须处理。

                  </div>
                </div>
                <div class="list-item" >
                  <div class="list-item-left">
                    (2)
                  </div>
                  <div class="list-item-center">
                    混凝土表面平整。不符合要求时减1～2分。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="panel-item">
            <div class="panel-item-left">
              实测项目
            </div>
            <div class="panel-item-right">
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
                <div class="panel-table-line" v-for="(val,index) in 5" :key="index" >
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
                    <el-switch
                      v-model="switch2"
                      active-color="#13ce66">
                    </el-switch>
                    <i class="iconfont right-icons hover">&#xe6b0;</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Edit_Standard_Engineering",
    data() {
      return {
        switch2: false,
        value: '',
        value2: '',
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

  .panel {
    padding-top: 20px;
    overflow: auto;
    padding:20px 20px 10px 0px;
  }


  .panel::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #F5F5F5;
  }

  .panel::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  .panel::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #848484;
  }

  .panel-item {
    display: flex;
    justify-content: flex-start;
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


  .list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #F5F5F5;
  }

  .list::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  .list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #848484;
  }
  ::-webkit-input-placeholder{
  }

  .list-item {
    height: 50px;
    line-height: 50px;
    display: flex;

  }



  .list-item-left {
    font-weight: bold;
    color: #4e4e4e;
    text-align: center;
    width: 100px;

  }

  .list-item-center {
    text-align: left;
    flex: 1;
  }

  .right-icons{
    position: relative;
    top: 4px;
    left: 4px;
  }

  .list-item-right {
    width: 40px;
    text-align: center;
    display: flex;
  }

  .list-item-right > div {
    flex: 1;
  }


  .panel-table{
    border: 1px solid #cccccc;
  }

  .panel-table-top{
    display: flex;
    height: 40px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #cccccc;
  }

  .table-top-column{
    text-align: center;
    flex: 1;
  }



  .panel-table-line{
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
  }

  .table-line-column{
    text-align: center;
    flex: 1;
  }
</style>
