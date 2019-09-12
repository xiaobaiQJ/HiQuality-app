/**
* @author bai tao
* @date 2019/6/26 0026
* @Description:工序列表
*/
<template>
  <div class="con">
    <SidebarMenu v-if="$route.meta.title=='工序列表'" ></SidebarMenu>
    <router-view></router-view>
  </div>
</template>

<script>
  import SidebarMenu from './aside/SidebarMenu'
  export default {
    name: "proecss_list",
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
