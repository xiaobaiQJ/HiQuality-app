/**
* @author bai tao
* @date 2019/6/18 0018
* @Description:工程照片
*/
<template>
  <div class="container">
    <header>
      <nav>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/procedure_control' }">工序控制</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">工序列表</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </nav>
      <div class="nav-line">
        <span class="nav-lable">工程部位名称：</span>路基土方石工程ZK50+233~ZK533+000
      </div>
    </header>
    <main>
      <div class="split-line"></div>
      <div class="content">
        <div class="photos" v-for="(val,index) in 3" :key="index">
          <div class="photos-left">
            <div class="left-line"></div>
            <div class="photos-left-pie hover"
                 @click="tabPie(index)"
                 :class="index == phontoIndex ? 'active-pie' : '' "></div>
          </div>
          <div class="photos-right">
            <div class="photos-right-top">
              2019-6-13 20:38:35
            </div>
            <div class="photos-warp">
              <img width="200px" height="120px" src="../../../assets/files/imgs/bmgs/test.jpg"
                   v-for="(val,sunIndex) in 5" :key="subIndex">
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "ProjectPhotos",
    data(){
      return{
        phontoIndex:0,

      }
    },
    methods:{
      tabPie(index){
        this.phontoIndex = index;
      }
    }
  }
</script>

<style scoped>
  nav {
    margin: 10px 0px;
    text-align: left;
  }

  .nav-line {
    margin: 20px 0px;
    text-align: left;
  }

  .nav-lable {
    font-weight: bold;
    color: #242424;
  }

  .split-line {
    height: 1px;
    background: #cccccc;
    transform: scaleY(.5);
  }

  .content {
    padding: 20px;
    text-align: left;
  }

  .photos {
    display: flex;

    position: relative;
    overflow: hidden;
    margin: 20px;
  }

  .photos-left {
    width: 40px;
    height: 100%;
  }

  .photos-left-pie {
    width: 12px;
    height: 12px;
    border: 1px solid #cccccc;
    border-radius: 50%;
  }

  .photos-warp {
    margin: 20px 0px;
    display: flex;
  }

  .left-line {
    width: 2px;
    background: #eee;
    height: 100%;
    position: absolute;
    left: 4.5px;
    top: 20px;
  }

  .photos-warp img{
    margin-right: 10px;
    flex: 1px;
  }

  .active-pie{
    background: #000;
  }
</style>
