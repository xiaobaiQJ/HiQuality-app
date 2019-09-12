<template>
  <div class="z">

    <img src="../../assets/files/imgs/bmgs/test.jpg" height="100%" width="100%" class="bgm"/>
    <div class="font-witer jz">


    </div>
    <div style="position: fixed;left: 0px;top: 0px;z-index: 9999;width: 100%;opacity: 1" class="font-witer">
      <div style="height: 100px"></div>
      <div class="text-center err">404</div>
      <p class="text-lable">无相关权限</p>

      <div @click="back" class="btn hover">返回上一页面</div>
      <div @click="goindex" class="btn hover">返回登录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Error",
    methods: {
      back() {
        this.$router.history.go(-1)
      },
      goindex() {
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  .z {

  }

  .bgm {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

  }

  .err {
    font-size: 200px;
    font-family: Andalus;
  }

  .jz {
    background: #3c3c3c;
    opacity: 0.3;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1000;
    width: 100%;
  }

  .btn {
    display: inline-block;
    color: white;
    font-size: 24px;
    margin-top: 50px;
    line-height: 70px;
    width: 200px;
    height: 70px;
    border-radius: 25px;
    border: 2px solid white;
    margin-right: 20px;
  }

  .text-lable {
    font-size: 36px;
  }

  .font-witer {
    color: white;
  }
</style>
