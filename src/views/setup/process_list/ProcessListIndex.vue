/**
* @author bai tao
* @date 2019/6/17 0017
* @Description:工序列表首页
*/
<template>
  <div class="con">
    <!--侧栏-->
    <div class="views relative">
      <div class="nav">
        <div class="nav-left hover" >
          <span @click="goAdd" >
           <i class="iconfont icons">&#xe623;</i>新建工序列表
          </span>
        </div>
        <div class="nav-right hover"  >
          <span @click="goEdit">
            <i class="iconfont icons">&#xe623;</i>
            编辑工序列表
          </span>

        </div>
      </div>
      <div class="list-warp">
        <div class="list scroll-bar" :style="{height : ($store.state.deviceStyle-210) +'px'}">
          <div class="list-item" v-for="(item,index) in processList" :key="index">
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
      </div>
    </div>

  </div>
</template>

<script>
  import SidebarMenu from './aside/SidebarMenu'

  export default {
    name: "ProcessList",
    components: {
      SidebarMenu
    },
    data() {
      return {
        stdProjectId:0,
        processList: []//数据集
      }
    },
    created(){
   /*   this.stdProjectId = this.$route.query.id;*/

    },
    watch:{
      //监听工序列表并赋值
      getProecssList:function (data) {
        console.log(data)
        this.processList = data.list;
        this.stdProjectId = data.id;
      }
    },
    computed:{
      //获取vuex
      getProecssList(){
        return this.$store.state.process
      }
    },
    mounted(){

      if(this.$route.query.id!=undefined){
        this.stdProjectId = this.$route.query.id;
        this.axios.get("/HiQuality/stdProc/getByStdProjectId", {
          params: {
            stdProjectId: this.stdProjectId
          }
        }).then((res) => {
          let obj = {
            list: res.data.data,
            id: this.stdProjectId
          }
          this.$store.commit('setProcess',obj,);
        })
      }

    },

    methods: {

      //前往新增页
      goAdd(){
        if(this.stdProjectId==0){
          this.$message({
            message: '请先选择工程列表！',
            type: 'warning'
          });
          return false
        }
        if(this.processList.length>0){
          this.$message({
            message: '该工程已有工序列表！',
            type: 'warning'
          });
          return false
        }
        this.$router.push({ path:'/set/process-list/add', query:{id:this.stdProjectId}})
      },
      //带上id前往修改页
      goEdit(){
        if(this.stdProjectId==0){
          this.$message({
            message: '请先选择工程列表！',
            type: 'warning'
          });
          return false
        }
        this.$router.push({ path:'/set/process-list/edit', query:{id:this.stdProjectId}})
      },
    }
  }
</script>

<style scoped>
  .con {
    flex: 1;
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
    width: 130px;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .list-warp {
    padding: 0px 20px;
    flex: 1;
  }


  .aside {
    width: 260px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
  }

  .views {
    flex: 1;
    text-align: left;
  }

  .el-menu {
    text-align: left;
    border: 1px solid #ccc
  }

  .search-warp {
    margin-bottom: 10px;
  }

</style>
