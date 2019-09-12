<template>
  <div class="con">
    <!--左侧导航-->

    <div class="leftnav" v-show="bol" @mouseleave="onMenuGradeOut">
      <!--侧栏图标-->
      <ul
        class="menu-box" @mouseout="onMenuGradeOut"
        :style="fbol ? fixedStyle  : autoStyle "
        v-if="menuList.length"
      >
        <li
          @mouseover="onMenuIn(index)"
          @mouseout="OutMenu(index)"
          @click="goMenuLink(v.menu_URL)"
          v-for="(v,index) in menuList" :key="index"
          v-if="v.menu_STATE==1"
          :class="currtIndex==index ? 'mousecolor' : '' "
        >
          <i class="iconfont font-witer z "
             :class="currtIndex==index ? 'mousecolor' : '' "
             v-html="v.menu_ICON"
          >
          </i>
        </li>
      </ul>
      <!--一级菜单-->
      <ul class="menu-box-tow" id="aside-tow"
          :style="fbol ? fixedStyle  : autoStyle "
          @mouseover="showMenuTow(true)"
          v-show="currtIndex!=99 "
      >
        <li
          v-for="(val,index) in menuList" :key="index"
          :class="currtIndex == index ? 'mousecolor':''"
          v-if="val.menu_STATE==1"
          @mousemove="onMenuIn(index)"
          @mouseout="OutMenu(index)"
        >
          <div
            class="size-12 tabcolor  li-line"
            :class="currtIndex==index ? 'menu-line' : ''"
            @click="goMenuLink(val.menu_URL)"
          >
            <span class="left-lable">
              {{val.menu_NAME}}
            </span>
            <span class="right-icon">
              <i class="icon iconfont size-12">&#xe602;</i>
            </span>
          </div>
        </li>
      </ul>
      <ul
        v-if="gradeTow & menuList[lastIndex].child!=undefined" id="aside-three"
        :style="fbol ? fixedStyle  : autoStyle "
        :class="fbol ? 'fxd3' : 'ulis' "
        @mouseleave="onMenuGradeOut"
      >
        <li class="lis" v-for="(val,index) in menuList[lastIndex].child" :key="index"
            v-if="val.menu_STATE==1">
          <div class="menu-line" @click="goMenuLink(val.menu_URL)">
            {{val.menu_NAME}}
          </div>

        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import {deviceH} from "../../utils/utils";

  export default {
    name: "LeftNav",
    data() {
      return {
        menuList: [],//菜单权限
        //固定 定位样式
        fixedStyle: {
          height: deviceH() + 'px',
          position: "fixed",
          left: "0px",
          top: "0px",
          background: "black",
          color: "white",
          "z-index": "9999"
        },
        isOk: false,
        //自适应
        autoStyle: {
          height: deviceH() - 100 + 'px',
          position: "absolute",
          left: "0px",
          top: "0px",
          background: "black",
          color: "white",
          "z-index": "9999"
        },
        clientHeight: 0,//可视区域高度
        deviceH: '',//设备高度
        gradeOne: false,//控制一级子菜单
        gradeTow: false,//控制二级子菜单
        gradeThree: false,//控制三级子菜单
        fbol: false,//控制是否跟随游览器滚动
        topindex: 1,//当前条距离顶端距离
        currtIndex: 99,//当前展示对象的下标 99为隐藏
        lastIndex: 0,//最后一次移入下标
      }
    },
    props: ["bol"],
    created() {
      let _this = this;
      window.addEventListener("resize", function () {
        _this.fixedStyle.height = deviceH() + 'px';
        _this.autoStyle.height = deviceH() - 100 + 'px';
      });
      this.menuList = this.$store.state.menuList;
      window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
      getList: function () {
        console.log(this.sortKey(this.menuList, 'menuOrder'))
        return this.sortKey(this.menuList, 'menuOrder')
      }
    },
    mounted() {
      this.deviceH = this.$store.state.deviceStyle;

    },
    methods: {
      sortKey(array,key) {
        return Array.sort((a, b)=> {
          var x = a[key];
          var y = b[key];
          return ((x < y) ? -1 : (x > y) ? 1 : 0)
        })
      },
      //滚动监听侧栏距离页面顶部的滚动条高度,如果超出顶部 侧栏随着页面左上侧固定
      handleScroll() {
        var i = 0;
        this.deviceH = this.$store.state.deviceStyle;
        this.topindex = window.pageYOffset;
        this.clientHeight = document.body.clientHeight;
        if (this.topindex > 50) {
          this.fbol = true;
        } else {
          this.fbol = false;
        }
      },
      //菜单页面跳转
      goMenuLink(MenuLink) {
        if (MenuLink == "" || MenuLink == undefined||MenuLink.toLowerCase()=="/fieldinspect") {
          this.$message({
            message: '该模块正在开发中',
            type: 'warning'
          });
          return false
        }
        console.log(MenuLink)
        this.$router.push(MenuLink);
      },
      //显示二级菜单
      showtab(index) {
        this.currtIndex = index;
      },
      //控制二级菜单
      showMenuTow(v) {
        this.gradeTow = v;
      },
      //移除菜单时清除当前下标
      OutMenu(v) {
        this.lastIndex = this.currtIndex;
        this.currtIndex = 100;
      },
      //移入菜单时获取当前下标
      onMenuIn(v) {
        this.lastIndex = v;
        this.currtIndex = v;
      },
      //移出一级菜单时触发
      onMenuGradeOut(v) {
        this.currtIndex = 99;
        this.gradeTow = false;
      }
    }
  }
</script>

<style scoped>

  .menu-box {
    background: black;
    padding-bottom: 26px;
    color: white;
    opacity: 0.9;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    z-index: 1000;
  }

  .menu-box li:hover {
    color: #0086b3 !important;
    cursor: pointer;
  }

  .menu-box li {
    vertical-align: top;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px;
  }

  .menu-box li:hover {
    cursor: pointer;
  }

  .mousecolor {
    color: #0086b3;
    cursor: pointer;
  }

  .mousecolor i {
    color: #0086b3;
  }

  .tabcolor:hover {
    color: #0086b3;
    cursor: pointer;
    font-size: 1em;
  }

  .tabcolor {
    height: 20px;
  }

  .hidden {
    padding: 0px 15px;
    height: 50px;
    vertical-align: center;
    line-height: 50px;
  }

  ul {
    display: inline-block;
    vertical-align: top;
  }

  .font-witer:hover {
    color: white;
  }

  .leftnav {
    position: relative;
    text-align: left;
  }

  #aside-three {
    left: 210px !important;
    width: 160px !important;
    right: 0px !important;
    opacity: 0.9 !important;
    background: #707070 !important;
  }

  #aside-tow {
    left: 50px !important;
    right: 0px !important;
    width: 160px !important;
    opacity: 0.9 !important;
    background: #5b5b5b !important;
  }

  .lis {
    padding: 0px 15px;
    height: 50px;
    line-height: 50px;
    vertical-align: center;
  }

  .lis:hover {
    cursor: pointer;
  }

  .menu-line:hover {
    color: #009fd5;
    cursor: pointer;
  }

  .menu-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .z:hover {
    color: #0086b3;
  }

  .li-line {
    display: flex;
    padding: 0px 15px;
    height: 50px;
    vertical-align: center;
    line-height: 50px;
  }

  .right-icon {
    width: 30px;
    display: inline-block;
    text-align: right;
  }

  .left-lable {
    width: 130px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
