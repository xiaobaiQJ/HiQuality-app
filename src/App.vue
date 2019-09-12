<template>
  <div id="app" v-cloak @click="clicked">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 page1,page2 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 page3 -->
    </router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        lTime: new Date().getTime(), // 最后一次点击的时间
        ctTime: new Date().getTime(), //当前时间
        tOut: 30 * 60 * 1000   //超时时间30分钟
      }
    },
    created() {
      console.log(this.$route.meta.keepAlive+"--------")
      sessionStorage.setItem("messageStore", '');
    },
    mounted() {
      window.setInterval(this.tTime, 1000)
      /*document.oncontextmenu = new Function("return false")
      document.onselectstart = new Function("return false");*/
      var that = this;
      that.$store.commit('setDeviceStyle', document.documentElement.clientHeight);
      window.onresize=function(){
        that.$store.commit('setDeviceStyle', document.documentElement.clientHeight)
      }
    },
    methods: {
      clicked() {
        this.$store.commit("setLoading",false);
        this.lTime = new Date().getTime()  //当界面被点击更新点击时间
        this.ctTime = new Date().getTime()  //当界面被点击更新点击时间
      },
      tTime() {
        this.lTime = new Date().getTime()
        if (this.lTime - this.ctTime > this.tOut) {
          this.clicked();
          this.$router.push("/")
        }
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #616161;
  }

  [v-cloak] {
    display: none;
  }
</style>
