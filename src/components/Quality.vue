
<template>
  <div class="con"  >
    <!--顶部以及banner-->
    <header>
      <Top :bo="false"></Top>
      <div class="clear"></div>
      <navbar @gobol="tabBanner"></navbar>
    </header>
    <nav>
      <div class="aside">
        <LeftNav :bol="navbol" ></LeftNav>
      </div>
    </nav>
    <!--主体部分-->
    <main ref="print">
      <router-view   ></router-view>
      <!--左侧边栏-->

    </main>
<!--    <article v-if="loading">
      <Loading_Animation></Loading_Animation>
    </article>-->
  </div>
</template>

<script>
  import Top from './common/Top'
  import Navbar from './common/Navbar'
  import LeftNav from './common/LeftNav'

  export default {
    name: "Quality",
    components: {
      Top,
      Navbar,
      LeftNav
    },
    methods: {
      printTabel() {
        this.$nextTick(()=>{
          this.$print(this.$refs.print);
        })

      },
      tabBanner(v) {
        this.navbol = v;
      }

    },
    data() {
      return {

        loading: false,//加载动画
        currentDate: '',
        resData: [],//拌合站数据集
        navbol: true,//控制左侧菜单展开收起
        showid: 1,
        list: []
        /*概况统计*/

      }
    },

  }
</script>

<style scoped>
/*  .top-split {
    height: 30px;
  }

  .aside {
    position: relative;
  }*/


</style>
