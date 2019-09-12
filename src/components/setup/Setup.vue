<template>
  <div class="setup">
    <header>
      <div class="tab-card">
        <div class="tab-card-item" v-for="(item,index) in navList"
             @click="tabNav(index,item.path)"
             :class="index == navIndex ? 'tab-card-item-active' : ''"
        >
          {{item.label}}
        </div>
      </div>
    </header>
    <main>
      <div class="content" :style="{height:deviceHeight -170 +'px'}">
        <router-view></router-view>
      </div>

    </main>
  </div>
</template>

<script>

  export default {
    name: "SetupIndex",
    data() {
      return {
        menuList:[],
        navIndex: 99,//当前下标
        deviceHeight:0,
        input21: '',
        select_ProcessList:[],//工程菜单
        //导航条
        navList: [
          {
            path: "/set/sys/user",
            label: "系统用户"
          },
          {
            path: "/set/unit-project",
            label: "单位工程"
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
       /*   {
            path: "/set/evaluation-standard",
            label: "评定标准"
          }*/

        ]
      }
    },
    created(){
      this.menuList = this.$store.state.menuList;
    },
    mounted(){
      this.deviceHeight = this.$store.state.deviceStyle;
      let that = this;
      window.onresize=function(){
        that.deviceHeight = that.$store.state.deviceStyle;
        console.log(that.deviceHeight)
      }
    },
    methods: {
      showProcessList(key,keyPath){
        if(keyPath.length>2){
          this.stdProjectId =  keyPath[3];
          this.axios.get("/HiQuality/stdProc/getByStdProjectId",{
            params:{
              stdProjectId: this.stdProjectId
            }
          }).then((res)=>{

            this.processList = res.data.data;
          })
        }
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
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
  .setup {
    width: 90%;
    margin: 10px auto;
  }

  .tab-card {
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  .tab-card-item {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    width: 120px;
    border: 1px solid #cccccc;
    border-right: none;
    border-bottom: none;
  }

  .tab-card-item:hover {
    cursor: pointer;
  }

  .tab-card-item:last-child {
    border-right: 1px solid #cccccc;
  }

  .tab-card-item-active {
    background: #146D8E;
    color: white;
  }

  .content {
    padding: 10px 10px;
    border: 1px solid #cccccc;
  }

  .aside {
    width: 260px;
  }

  .views {
    flex: 1;
  }

  .el-menu {
    text-align: left;
    height: 520px;
    border: 1px solid #ccc
  }

  .search-warp {
    margin-bottom: 10px;
  }
</style>
