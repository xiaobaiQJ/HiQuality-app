/**
* @author bai tao
* @date 2019/9/10 0010
* @Description:单点登录
*/
<template>
  <div id="app">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "ThirdPartyLogin",
    mounted() {
      let user = this.$route.query;
      axios.post('/HiQuality/point_login',
        this.$qs.stringify({
          USERNAME: user.userName,
          PASSWORD: user.passWord
        })
      ).then((res) => {
        console.log("登录成功！")
        console.log(res)
        /* this.$router.push("/procedure_control/index")*/
        if (res.data.result == "success") {
          this.$store.commit("setUser", res.data.bUser);
          this.$store.commit("setToken", 1);
          this.getMenu();
          this.getUser();
        } else {
          this.$notify.error({
            title: '错误',
            message: '账户名或者密码错误！'
          });
        }
      })
    },
    //事件区域
    methods: {
      /**
       * 登录后执行获取用户类别
       * @method getUser
       * @param {无} 无 参数说明
       * @return {unit_level;  //1业主用户  2;  //总监办用户  3;  //监理用户 4;  //标段用户
       */
      getUser() {
        console.log("登录后执行获取用户类别");
        this.axios.get("/HiQuality/unitContract/unitlevel").then((res) => {
          console.log(res.data.data);
          this.$store.commit("setUserLevel", res.data.data);

        })
        /*  this.axios.get("/HiQuality/div/findDivByUnitId").then((sub) => {
            console.log("缓存工程划分")
            console.log(sub)
            sessionStorage.setItem("me",JSON.stringify(sub.data.data))
          })*/
      },
      //获取菜单列表
      getMenu() {
        this.axios.get("/HiQuality/MAR/mainTwo").then((res) => {
          console.log("获取主菜单列表:")
          console.log(res)
          this.$store.commit('setMenuList', res.data.data[0].subMenu);
          this.$router.push("/distribute")
        })
      }
    }
  }
</script>

<style scoped>

</style>
