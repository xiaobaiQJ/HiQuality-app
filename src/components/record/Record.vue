<template>
  <div class="con">
    <!--顶部以及banner-->
    <header class="no-print">
      <Top :bo="false"></Top>
      <div class="clear"></div>
      <navbar @gobol="tabBanner"></navbar>
    </header>

    <nav class="no-print">
      <div class="aside">
        <LeftNav :bol="navbol"></LeftNav>
      </div>
    </nav>
    <!--主体部分-->
    <main class="model-box relative" id="print" ref="print">
      <div class="content-box no-print">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/businessRec' }">业务记录</el-breadcrumb-item>
          <el-breadcrumb-item >
            {{$route.query.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- <vue-easy-print tableShow  ref="easyPrint">-->
      <router-view></router-view>
      <!--</vue-easy-print>
-->
      <!--左侧边栏-->
      <div class="print-box no-print" @click="printTabel">
        <el-tooltip class="item" effect="dark" content="打印报表" placement="left-start">
          <i class="iconfont print-icon">&#xe613;</i>
        </el-tooltip>
      </div>
    </main>

  </div>
</template>

<script>
  import Top from '../common/Top'
  import Navbar from '../common/Navbar'
  import LeftNav from '../common/LeftNav'
  import A_Left_Nav from '../../views/a/A_Left_Nav'
  import Loading_Animation from '../common/Loading_Animation'
  import vueEasyPrint from "vue-easy-print"

  export default {
    name: "Record",
    components: {
      Top,
      Navbar,
      LeftNav,
      A_Left_Nav,
      Loading_Animation,
      vueEasyPrint
    },
    methods: {
      //
      init() {

      },
      /**
       * 打印数据
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      printTabel() {
        this.$nextTick(() => {
          if (document.getElementsByClassName('btn') != undefined && document.getElementsByClassName('btn').length > 0) {
            var elements = document.getElementsByClassName('btn');
            elements[0].classList.add("no-print")
            /*  for(var i = elements.length - 1; i >= 0; i--) {
                elements[i].parentNode.removeChild(elements[i]);
              }*/

            this.$print(this.$refs.print)/*
            this.$refs.easyPrint.print()*/
          } else {
            this.$refs.easyPrint.print()
          }
        })


      },
      tabBanner(v) {
        this.navbol = v;
      }

    },
    created() {
    },
    mounted() {
      let addBtn = document.getElementsByClassName("add-btn");
      let editBtn = document.getElementsByClassName("update-btn");
      addBtn[0].innerHTML = "保存";
      editBtn[0].innerHTML = "保存";
      if(this.$store.state.recId==""){
        editBtn[0].style.display = "none";
      }else{
        addBtn[0].style.display = "none";
      }

      /* this.$forceUpdate()*/
    },
    data() {
      return {
        printChange: "",
        loading: false,//加载动画
        currentDate: '',
        navbol: true,//控制左侧菜单展开收起
      }
    },

  }
</script>

<style scoped>
  @import "../../assets/css/config.css";
  @import "../../assets/css/table_width.css";
  @import "../../assets/css/baitao.css";

  .top-split {
    height: 30px;
  }

  .aside {
    position: relative;
  }

  .model-box {
    font-size: 14px;
    padding-top: 10px;
  }


  .relative {
    position: relative;
  }

  .print-box {
    position: fixed;
    right: -10px;
    top: 50%;
    width: 100px;
    height: 100px;
  }

  .print-icon {
    font-size: 50px;
  }

  .print-icon:hover {
    cursor: pointer;
    color: #26ff3e;
  }

  /*  .model-box input {
      border: 1px solid red !important;
      outline: none;
      padding: 0;
      background: #fff;
      margin: 0;
    }*/

  .model-box input:hover {
    cursor: pointer;
  }

  .model-box td p {
    font-weight: bold;
    color: #404040;
  }
  .model-box .el-input__icon{
    display: none;
  }

  .model-box .el-input__inner{
    height: 20px;
    line-height: 20px;
  }

  div{
    font-size: 12px;
    font-family: 宋体;
  }
</style>
<style>
  @import "../../assets/css/config.css";
  @import "../../assets/css/table_width.css";
  @import "../../assets/css/baitao.css";

  td input {
    border: none !important;
    outline: none;
    padding: 0;
    background: #fff;
    margin: 0;
  }

  .model-box table {
    /*height: 1000px !important;*/
  }

  .model-box input:hover {
    background: #F6F6F6 !important;
  }

  .model-box textarea:hover {
    background: #F6F6F6 !important;
  }

  .model-box td p {
    font-weight: bold;
    color: #404040;
  }

  .content-box {
    width: 90%;
    margin: 0% auto;
  }
</style>
