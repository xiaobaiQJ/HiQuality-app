<template>
  <div class="con">
    <!--顶部以及banner-->
    <header>
      <Top :bo="false"></Top>
      <div class="clear"></div>
      <navbar @gobol="tabBanner"></navbar>
    </header>

    <nav class="no-print">
      <div class="aside">
        <LeftNav :bol="navBol"></LeftNav>
      </div>
    </nav>
    <!--主体部分-->
    <main class="model-box relative">
      <div class="content-box">
        <el-breadcrumb v-if="$store.state.moduleType==1">
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">工序控制</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'/procedure_control/process_list/index',query:{id:$store.state.projPartsId}}">
            工序列表
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">{{$route.query.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb v-if="$store.state.moduleType==2">
          <el-breadcrumb-item :to="{ path: '/businessRec' }">业务记录</el-breadcrumb-item>
          <el-breadcrumb-item>
            {{$route.query.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-breadcrumb v-if="$store.state.moduleType==3">
          <el-breadcrumb-item :to="{ path: '/mission' }">办理事项</el-breadcrumb-item>
          <el-breadcrumb-item>
            {{$route.query.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>

        <el-breadcrumb v-if="$store.state.moduleType==4">
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">工序控制</el-breadcrumb-item>
          <el-breadcrumb-item>
            {{$route.query.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="main " id="my">
        <div id="dom">
          <router-view></router-view>
        </div>
        <div class="layer-warp" v-show="layer"></div>
      </div>

      <br><br>
      <br><br>
      <!-- <img src="../../../static/config.css" alt="">
       <img src="../../../static/baitao.css" alt="">
       <img src="../../../static/table_width.css" alt="">-->
      <!--左侧边栏-->
      <div class="print-box no-print" @click="printTabel">
        <el-tooltip class="item" effect="dark" content="打印报表" placement="left-start">
          <i class="iconfont print-icon">
            &#xe613;
          </i>
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
  import printJS from 'print-js'

  export default {
    name: "Model",
    components: {
      Top,
      Navbar,
      LeftNav,
      A_Left_Nav,
      Loading_Animation,
      vueEasyPrint
    },
    data() {
      return {
        //打印样式集
        printCss:[
          'https://unpkg.com/element-ui/lib/theme-chalk/index.css',
          'static/config.css',
          'static/baitao.css',
          'static/table_width.css'
        ],
        printType: 1,//当前打印类型   1.横 2.竖
        navBol: true,//控制左侧菜单展开收起
        layer: true //是否显示遮罩层
      }
    },

    created() {
      if (this.$store.state.currentType != 4) {
        this.getUnitInfo();
      }
    },

    mounted() {
      this.init();
      this.getPrintType();
    },

    //销毁时调用修改contractId
    destroyed() {
      this.setContractId();
    },

    methods: {
      /**
       * 获取打印类型
       * @method getPrintType
       * @param {int} id tableId
       * @return {返回值类型} 返回值说明
       */
      getPrintType() {
        this.axios.get("/HiQuality/table/findById", {
          params: {
            id: this.$store.state.tableId
          }
        }).then((res) => {
          console.log("获取打印类型");
          console.log(res.data);
          this.printType = res.data.data.printType;
        })
      },
      /**
       * 修改全局contractId
       * @method setContractId
       * @param {int} contractId 合同段id
       * @return {返回值类型} 无
       */
      setContractId() {
        console.log("刷新了作用域")
        this.axios.get("/HiQuality/rec/updateContractId", {
          params: {
            contractId: this.$store.state.user.contractId
          }
        }).then((res) => {
          console.log("修改全局contractId");
          console.log(res)
        })
      },
      /**
       * 获取表头信息
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getUnitInfo() {
        this.axios.get("/HiQuality/tbInfo/getUnitInfo").then((res) => {
          console.log("获取表头111111111111111信息")
          console.log(res);
          if (res.data.status == 200) {
            this.$store.commit('setUnitTable', res.data);
          } else {
            this.$store.commit('setUnitTable', {});
          }
        })
      },
      //初始化模块
      init() {
        let type = this.$store.state.currentType;
        let that = this;
        this.$nextTick(() => {
          let addBtn = document.getElementsByClassName("add-btn");
          let editBtn = document.getElementsByClassName("update-btn");
          let elements = document.getElementsByClassName('btn');
          var editButton = document.createElement("div");
          var backBtn = document.createElement("div");
          addBtn[0].innerHTML = "保存";
          editBtn[0].innerHTML = "保存";
          backBtn.style.zIndex = 1000;
          backBtn.innerHTML = "<div class='sub-btn' id='back-btn'>返回</div>"
          editButton.style.zIndex = 1000;
          editButton.innerHTML = "<div class='sub-btn' id='edit-btn' >编辑</div>.";
          elements[0].appendChild(editButton)
          elements[0].appendChild(backBtn)
          $("#back-btn").on("click", that.back);
          switch (type) {
            case 1:
              this.layer = false;
              editBtn[0].style.display = "none";
              $("#edit-btn").css("display", "none");
              console.log("新增")
              break;
            case 2:
              this.layer = false;
              addBtn[0].style.display = "none";
              console.log("编辑")
              $("#edit-btn").on("click", that.openEdit);
              $("#edit-btn").css("display", "none");

              break;
            case 3:
              this.layer = true;
              //$("#edit-btn").css("display", "none");
              addBtn[0].style.display = "none";
              editBtn[0].style.display = "none";
              $("#edit-btn").on("click", function () {
                editBtn[0].style.display = "block";
                $("#edit-btn").css("display", "none");
                that.layer = false;
              });
              console.log("查看")
              break;
            case 4:
              this.layer = true;
              addBtn[0].style.display = "none";
              editBtn[0].style.display = "none";
              $("#edit-btn").css("display", "none");
              break;
          }


          /*    if (this.$store.state.recId == "") {
                this.layer = false
                editBtn[0].style.display = "none";
                $("#edit-btn").css("display", "none");

              } else {
                addBtn[0].style.display = "none";

                this.layer = true;
                if (this.$store.state.aduitStatus == 2 ) {
                  $("#edit-btn").on("click", that.openEdit);
                  this.layer = true;
                }
                if (this.$store.state.aduitStatus == 0 ) {
                  addBtn[0].style.display = "none";
                  $("#edit-btn").css("display","none")
                  this.layer = true;
                }
              }*/


        })
      },

      //返回上一页
      back() {
        this.$skip.skipProcess();
      },

      //打开编辑
      openEdit(btn) {
        this.layer = false;
      },
      /**
       * 打印数据
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      printTabel() {
        /*    let old = $("#app").html();
            let print = $("#dom").html();
            $(".sub-btn").hide();
            $("#edit-btn").hide();
            $("#back-btn").hide();
            $("#back-btn").html("")
            console.log($("back-btn").html())
            $("#add-btn").hide();
           */
        //$(".btn").css("display",'none')
        this.$nextTick(() => {
          if (this.printType == 1) {
            printJS({
              printable: 'dom',
              type: "html",
              maxWidth: "794px",
              onPrintDialogClose: this.closePirnt(),
              scanStyles: false,
              style: ".btn{display: none;} #back-btn{display:none;} @media print{@page {size:landscape;} table{  page-break-inside: avoid; }}",
              css: this.printCss
            })
          } else {
            printJS({
              printable: 'dom',
              type: "html",
              maxWidth: "794px",
              onPrintDialogClose: this.closePirnt(),
              scanStyles: false,
              style: ".btn{display: none;} #back-btn{display:none;} @media print{@page {size:portrait;} table{  page-break-inside: avoid; }}",
              css: this.printCss
            })
          }
        })
      },
      //关闭打印机,显示按钮
      closePirnt() {
        $('.btn').show()
        $('#back-btn').show();
      },
      doFilterTutor() {

      },
      tabBanner(v) {
        this.navBol = v;
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
    /* font-size: 14px;*/
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

  .model-box input:hover {
    cursor: pointer;
  }

  .main {
    position: relative;
  }

  .layer-warp {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.0);
    left: 0px;
    top: 0px;
  }

</style>

<style>


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

  .model-box table td textarea {
    height: 90%;
  }

  .model-box textarea:hover {
    background: #F6F6F6 !important;
  }

  .model-box td p {
    font-weight: bold;
    color: #404040;
  }

  .model-box .el-input__icon {
    display: none;
  }

  .model-box .el-input__inner {
    height: 20px;
    line-height: 20px;
    padding: 0 ! important;
    border: none;
  }

  .model-box .el-input--prefix .el-input__inner {
    padding: 0 ! important;
  }

  .model-box.el-input--suffix .el-input__inner {
    padding: 0 ! important;
  }

  .model-box .title-select .el-input__inner {
    width: 70%;
  }

  .model-box .k-select .el-input__inner {
    width: 160px;
  }

  .model-box .text-left .el-input__inner {
    width: 240px;
  }

  .model-box table .el-select {
    width: 100%;
    display: inline;
  }

  .model-box .el-select {
    display: inline;
  }

  .model-box .el-select > .el-input {
    font-size: 12px;
    display: inline;
  }

  .content-box {
    width: 90%;
    margin: 0% auto;
  }

  /*vant中的复选框*/
  .model-box .van-checkbox__icon--round .van-icon {
    border-radius: 0;
  }

  .model-box .van-checkbox__icon {
    font-size: 12px;
  }

  .model-box .van-checkbox__icon .van-icon {
    width: 1em;
    height: 1em;
  }

  /*vant中的复选框 选中后的样式*/
  .model-box .van-checkbox__icon--checked .van-icon {
    background-color: #fff;
    border-color: #666666;
    color: #333;
  }

  @media print {
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #fff;
    }

    input:-moz-placeholder, textarea:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #fff;
    }

    /*vant中的复选框*/
    .model-box .van-checkbox__icon--round .van-icon {
      border-radius: 0;
    }

    .model-box .van-checkbox__icon {
      font-size: 12px;
    }

    .model-box .van-checkbox__icon .van-icon {
      width: 1em;
      height: 1em;
    }

    /*vant中的复选框 选中后的样式*/
    .model-box .van-checkbox__icon--checked .van-icon {
      background-color: #fff;
      border-color: #666666;
      color: #333;
    }

    input::-moz-placeholder, textarea::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #fff;
    }

    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #fff;
    }
  }

</style>

