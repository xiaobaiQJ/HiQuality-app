<template>
  <div class="aside">
    <div class="search-warp">
      <el-input

        placeholder="输入标准分项工程名称，按Enter键进行搜索"
        size="mini"
        suffix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </div>
    <div class="asideMenu">
      <el-menu
        disabled
        unique-opened
        default-active="1"
        :style="{height:deviceHeight -210 +'px'}"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @select="handleOpen"
        @close="handleClose">
        <!-- 一级 -->
        <template v-for="item in select_ProcessList">
          <el-submenu :index="item.id.toString()" :key="item.id" v-if="item.child && item.child.length" >
            <template slot="title">
              <i class="el-icon-location" style="color: #ff9200"></i>
              <span>{{item.projPartsName}}</span>
            </template>
            <!--   二级-->
            <template v-for="itemChild in item.child">
              <el-submenu
                v-if="itemChild.child && itemChild.child.length"
                :index="itemChild.id.toString()"
                :key="itemChild.id">
                <template slot="title">
               <!--   <i :class="itemChild.icon"></i>-->
                  <span>{{itemChild.projPartsName}}</span>
                </template>
                <!--三级 -->
                <template v-for="itemChild_Child in itemChild.child">
                  <el-submenu
                    v-if="itemChild_Child.child && itemChild_Child.child.length"
                    :index="itemChild_Child.id.toString()"
                    :key="itemChild_Child.id">

                    <!--四级 -->
                    <template slot="title">
                      <span>{{itemChild_Child.projPartsName}}</span>
                    </template>
                    <!-- 4级菜单 如果没有子级就无下拉 -->
                    <el-menu-item v-for="subItem in itemChild_Child.child" :index="subItem.id.toString()"
                                  :key="subItem.id">
                      <i :class="itemChild_Child.icon"></i><span
                      slot="title">{{subItem.projPartsName}}</span>
                    </el-menu-item>
                  </el-submenu>
                  <!-- 3级菜单 如果没有子级就无下拉 -->
                  <el-menu-item v-else :index="itemChild_Child.id.toString()" :key="itemChild_Child.id"><i
                    :class="itemChild_Child.icon"></i><span slot="title">{{itemChild_Child.projPartsName}}</span></el-menu-item>
                </template>


              </el-submenu>
              <!-- 2级菜单 如果没有子级就无下拉 -->
              <el-menu-item v-else :index="itemChild.id.toString()" :key="itemChild.id"><i
                :class="itemChild.icon"></i><span slot="title">{{itemChild.projPartsName}}</span></el-menu-item>
            </template>

          </el-submenu>
          <!-- 1级菜单 如果没有子级就无下拉 -->
          <el-menu-item v-else :index="item.id.toString()" :key="item.id"><i :class="item.icon"></i><span slot="title">{{item.projPartsName}}</span>
          </el-menu-item>
        </template>

      </el-menu>
    </div>
   <!-- <div class="asideMenu">
      <div class="menu-box" :style="{height:deviceHeight -210 +'px'}">

        <div  v-for="(item,index) in unitList" :key="index">
          <div class="menu-item"
               :class="activeIndex == index ? 'active-color' : ''"
               @click="getSubList(item.id,index)"
          >
            <div class="menu-item-lable">
              {{item.unit_proj_name}}
            </div>
            <div class="menu-item-icon" v-if="item.child>0">
              <i class="iconfont label-icon" :class="activeIndex==index ? 'active-one' : '' ">&#xe617;</i>
            </div>

          </div>
          <div v-for="sub in subList" v-if="activeIndex == index">
            <div class="menu-sub-item">
              {{sub.projPartsName}}
            </div>
          </div>
        </div>

      </div>
    </div>-->

  </div>
</template>

<script>
  export default {
    name: "SidebarMenu",
    data() {
      return {
        currentIndex: 99,//当前下标
        currentItem: [],//当前点击父级到子级的下标
        deviceHeight: 0,
        activeIndex:9999,
        input21: '',
        processList: [],
        unitList: [],
        subList:[],
        select_ProcessList: [],//工程菜单
      }
    },

    watch: {
      getStore(v) {
        this.getData();
      }
    },
    computed: {
      getStore: function () {
        return this.$store.state.porjectDel
      }
    },
    created() {
      this.getData();
      /*this.getUnitMenu();*/
    },
    mounted() {


      //获取设备高度。并监听窗口变化时更新耕读
      this.deviceHeight = this.$store.state.deviceStyle;
      let that = this;
      window.onresize = function () {
        that.deviceHeight = that.$store.state.deviceStyle;
        console.log(that.deviceHeight)
      }
    },
    methods: {
      //获取导航菜单列表
      getData() {
        console.log("发送请求")
        this.select_ProcessList = JSON.parse( sessionStorage.getItem('me'));
        this.axios.get("/HiQuality/div/findDivByUnitId").then((res) => {
          console.log("dsadsa")
          console.log(res)
          this.select_ProcessList = res.data.data;
        })
      },
      //获取一级菜单
      getSubList(id,index) {
        this.getChild(id);
        if(this.activeIndex == index){
          this.activeIndex = 999;
        }else{
          this.activeIndex = index;
        }
        this.axios.get("/HiQuality/div/getFirstFloor", {
          params: {
            unitId: id
          }
        }).then((res) => {
          console.log("获取一级菜单")
          console.log(res)
          if (res.data.status == 200) {
            this.subList = res.data.data;
          }
        })
      },
      //查询所有单位工程的菜单
      getUnitMenu() {
        console.log("发送请求")
        this.axios.get("/HiQuality/div/getUnit").then((res) => {
          console.log("dsadsa")
          console.log(res)
          this.unitList = res.data.data;
        })
      },
      /**
       * 当导航某项打开时触发
       * @method handleOpen
       * @param {key} id
       * @param {keyPath} 当前点击项从父到子的id
       * @return {返回值类型} 无
       */
      handleOpen(key, keyPath) {
        this.currentIndex = keyPath[keyPath.length - 1]
        this.axios.get("/HiQuality/div/findById", {
          params: {
            id: keyPath[keyPath.length - 1]
          }
        }).then((res) => {
          this.$store.commit('setProject_Divide', res.data.data);
        })
        this.$router.push('/set/project_divide')
      },
      //获取子节点
      getChild(id){
        this.axios.get("/HiQuality/div/findById", {
          params: {
            id: id
          }
        }).then((res) => {
          this.$store.commit('setProject_Divide', res.data.data);
        })
        this.$router.push('/set/project_divide')
      },
      //导航关闭时触发事件
      handleClose(key, keyPath) {
        /*console.log(key, keyPath);*/
      },
    }
  }
</script>

<style scoped>
  .asideMenu {
    padding: 10px 0px;
  }

  .aside {
    width: 280px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
    text-align: left;
    box-sizing: border-box;
  }

  .el-menu {
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #cccccc;
  }

  .menu-box {
    border: 1px solid #cccccc;
    padding: 0px 10px;
    box-sizing: border-box;
    overflow: auto;
  }

  .menu-item {
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu-item:hover {
    color: #19a9f5;
    cursor: pointer;
  }

  .menu-item-icon {
    width: 30px;
    text-align: center;
  }

  .menu-item-lable {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  .label-icon{
    color: #b2b2b2;
    font-size: 14px;
  }

  .menu-sub-item{
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
  }

  .menu-sub-lable{
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
  }

  .active-one{
    transition: 1s linear all;
    transform: rotate(180deg);
  }

  .active-color{
    color: #19a9f5;
  }
</style>
<style>
  .el-submenu__title, .el-menu-item {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
</style>
