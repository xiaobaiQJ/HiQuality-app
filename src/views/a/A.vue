<template>
  <!--中间主体内容-->
  <div class="container" :style="{height: height-150 + 'px'}">
    <div class="content-top"></div>
    <el-row class="layout" :style="{height: height-190 + 'px'}">
      <el-col :span="5" class="leftnav">
        <A_Left_Nav></A_Left_Nav>
      </el-col>
      <!--<el-col :span="1">

      </el-col>-->
      <el-col :span="19" style="overflow: auto">
        <router-view></router-view>
      </el-col>
    </el-row>
    <div class="box">
    </div>
  </div>
</template>

<script>
  import A_Left_Nav from './A_Left_Nav'

  export default {
    name: "A",
    components: {
      A_Left_Nav
    },
    mounted() {
      this.height = this.$store.state.getHeight;
      console.log(this.height)
    },
    data() {
      return {
        height: ''
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 90%;
    margin: 30px auto;
    height: 500px;
    background: white;
    text-align: left;
  }

  .content-top {
    background: #339DC0;
    height: 40px;
    line-height: 40px;
    color: white;
  }

  .layout {
    border: 1px solid #cccccc;
    border-top: none;
    overflow: hidden;
  }

  .layout > div {
    border-right: 1px solid #cccccc;
    height: 100% !important;
    overflow: hidden;
  }

  .layout > div:last-child {
    border-right: none;
  }

  .leftnav {
    padding: 20px;
    overflow: auto !important;
  }







</style>
