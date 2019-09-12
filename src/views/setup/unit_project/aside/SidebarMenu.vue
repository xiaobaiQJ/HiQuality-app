<template>
  <div class="aside">
    <div class="aside-menu scroll-bar">
      <div class="menu-list" :style="{height:$store.state.deviceStyle -170 +'px'}">
        <div class="menu-list-item"
             @click="tabProject(item.type,index)"
             :class="currentIndex==index ? 'active-color' : '' "
             v-for="(item,index) in navBox" :key="index">
          <div class="item-left">
            <div class="item-left-icon"><i class="iconfont" v-html="item.icon"></i></div>
            <div class="item-left-name">{{item.lable}}</div>
          </div>
          <div class="item-right">
            <div class="item-left-icon">
              <span class="pie-label">
                  {{item.count}}
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "SidebarMenu",
    data() {
      return {
        currentIndex:0,
        projectList:[],
        currentType:0,
        unitProject:[],
        navBox:[
          {
            icon: "&#xe612;",
            type: 1,
            count: 0,
            lable: "路基工程"
          },
          {
            icon: "&#xe621;",
            type: 2,
            count: 0,
            lable: "路面工程"
          },
          {
            icon: "&#xe65a;",
            type: 3,
            count: 0,
            lable: "桥梁工程"
          },
          {
            icon: "&#xe6ca;",
            type: 4,
            count: 0,
            lable: "互通立交工程"
          },
          {
            icon: "&#xe89a;",

            type: 5,
            count: 0,
            lable: "隧道工程"
          },
          {
            icon: "&#xe60a;",
            type: 6,
            count: 0,
            lable: "环保工程"
          },
          {
            icon: "&#xe604;",
            type: 7,
            count: 0,
            lable: "交通安全设施"
          },
          {
            icon: "&#xe612",
            type: 8,
            count: 0,
            lable: "机电工程"
          },
          {
            icon: "&#xe612",
            type: 9,
            count: 0,
            lable: "工地建设"
          }
        ]
      }
    },
    watch: {
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
    created(){
      this.axios.get("/HiQuality/unit/getAllUnit").then((res) => {
        console.log(res)
        this.projectList = res.data.data;
        this.currentType = 0;
        this.setList();
      })
    },
    methods:{

      /**
       * 修改当前单位工程类型,并将当前单位工程存入状态管理
       * @method tabProject
       * @param   类型值
       * @return {返回值类型:无}
       */
      tabProject(v,index) {
        this.currentType = v;
        this.currentIndex = index;
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
      //筛选项目类型并放入当前显示数据集
      setList() {
        let arr = []
        console.log(this.projectList)
        this.projectList.forEach((item, index) => {
          if (item.unitProjType == this.currentType) {
            arr.push(item)
          }
        })
        this.$emit('getBranchList',arr.length > 0 ? arr : this.projectList)

        console.log(arr)
      },
      getBSysUserByid(index,id){
        this.currentIndex = index;
       /* this.axios.get("/HiQuality/unit/getAllSub", {
          params: {
            id:id
          }
        }).then((res) => {
          console.log(res)
          this.$emit('getBranchList',res.data.data)
        })*/
      },

    }
  }
</script>

<style scoped>
/*  .asideMenu {
    padding: 0px 0px;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #cccccc;
  }*/

  .aside {
    width: 280px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
    text-align: left;
  }


  .menu-list {
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #ccc;
    padding: 0px 10px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
  }

  .item-left, .item-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-left-icon {
    width: 60px;
    text-align: center;
  }

  .item-right {
    justify-content: flex-end;
  }

  .item-left-name {
    flex: 1;

  }

  .icons:hover {
    cursor: pointer;
    color: #ff9200;
  }

  .menu-list-item:hover{
    color: #ff9200;
    cursor: pointer;
  }

  .active-color{
    color: #ff9200;
  }

  .pie-label{
    display: inline-block;
    width: 26px;
    height: 26px;
    line-height: 24px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #cccccc;
  }
</style>
