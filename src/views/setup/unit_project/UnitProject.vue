/**
* @author bai tao
* @date 2019/6/17 0026
* @Description:单位工程
*/
<template>
  <div class="con">
    <SidebarMenu  @getBranchList="getBranchList"></SidebarMenu>
    <router-view :branchList="branchList"></router-view>
  </div>
</template>

<script>
  import SidebarMenu from './aside/SidebarMenu'
  export default {
    name: "UnitProject",
    components: {
      SidebarMenu
    },
    data() {
      return {
        stdProjectId: '',
        branchList:[],//分项工程列表
        processList: []//数据集
      }
    },
    methods:{
      //获取当前单位工程下的分项工程列表
      getBranchList(data){
        this.branchList = data;
      }
    }


  }
</script>

<style scoped>
  .con{
    display: flex;
    text-align: left;
  }


</style>
