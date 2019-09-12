<template>
    <div class="con">
      <div class="layer"   @click="closeLayer">
        <div class="box">
        <span>
          <div class="box-item">
             <div class="loading">正在加载中</div>
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
            <div class="line line4"></div>
          </div>
        </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Loading_Animation",
      props:['show'],
      mounted(){
        document.body.parentNode.style.overflow = "hidden";//隐藏且禁用横向纵向两个滚动条
      },
      methods:{
        closeLayer(){
          /*document.body.parentNode.style.overflow = "auto";*/
          this.$emit('closeLayer',false);
        }
      },
      destroyed(){
        //document.body.parentNode.style.overflow = "auto";
      },
      data(){
          return{
            loading:false
          }
      }
    }
</script>

<style scoped>
  .con{
    width: 100%;
    height: 100%;
  }
  .box-item {
    width: 200px;
    height: 40px;
    margin: 100px auto;
    text-align: center;
  }

  .box-item > .line {
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #00fe00;
    -webkit-animation: strechDelay 1s linear infinite;
    animation: strechDelay 1s linear infinite;

  }

  .box-item > .line2 {
    -webkit-animation-delay: -0.9s;

    animation-delay: -0.9s;
  }

  .box-item > .line3 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  .box-item > .line4 {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;

  }

  .box-item > .line5 {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;

  }

  @-webkit-keyframes strechDelay {
    0%, 40%, 100% {
      -webkit-transform: scale(.4);
    }
    20% {
      -webkit-transform: scale(1.0);
    }
  }

  @keyframes strechDelay {
    0%, 40%, 100% {
      transform: scale(.4);
    }
    20% {
      transform: scale(1.0);
    }
  }
  .layer{
    width: 100%;
    height: 100%;
    background: 100%;
    background:rgba(0,0,0,0.3) !important; ;
    position:  fixed;
    left: 0px;
    top: 0px;
    z-index: 1000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading{
    font-size: 18px;
    position: relative;
    bottom: 20px;
    font-weight: bold;
    color: #00fe00;
  }
</style>
