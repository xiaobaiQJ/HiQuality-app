/**
* @author bai tao
* @date 2019/6/26 0026
* @Description:工程划分
*/
<template>
  <div class="con">
    <SidebarMenu></SidebarMenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import SidebarMenu from './aside/SidebarMenu'
  export default {
    name: "Project_Divide",
    components: {
      SidebarMenu
    },
    data() {
      return {
        stdProjectId: '',
        processList: []//数据集
      }
    },


  }
</script>

<style scoped>
  .con{
    display: flex;
    text-align: left;
  }


</style>
