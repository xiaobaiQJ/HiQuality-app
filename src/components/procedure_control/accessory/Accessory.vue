/**
* @author bai tao
* @date 2019/6/15 0015
* @Description:工序列表根路由
*/
<template>
  <div class="con">
    <!--顶部以及banner-->
    <header>
      <Top :bo="false"></Top>
      <div class="clear"></div>
      <navbar @gobol="tabBanner"></navbar>
    </header>
    <nav>
      <div class="aside">
        <LeftNav :bol="navbol"></LeftNav>
      </div>
    </nav>
    <!--主体部分-->
    <main>
      <router-view></router-view>
      <!--左侧边栏-->

    </main>
  </div>
</template>

<script>
  import Top from '../../common/Top'
  import Navbar from '../../common/Navbar'
  import LeftNav from '../../common/LeftNav'
  export default {
    name: "Accessory",
    components: {
      Top,
      Navbar,
      LeftNav,
    },

    methods: {
      tabBanner(v){
        this.navbol = v;
      }

    },
    data() {
      return {
        navbol: true,//控制左侧菜单展开收起
      }
    },

  }
</script>

<style scoped>
  @import "../../../assets/css/reset.css";
  .aside{
    position: relative;
  }



</style>
