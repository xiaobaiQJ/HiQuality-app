/**
* @Description:
* @author 程雪
* @date 2019/6/1
*/
<template>
  <div class="leftnav-container">
    <div class="leftnav-item hover"
         v-for="(item,index) in navList" :key="index"
    >
      <div class="item-title"
           @click="tabNav(index)"
           :class="index == navIndex ? 'title-active' : '' ">
        <el-row>
          <el-col :span="20">
            {{item.lable}}
          </el-col>
          <el-col :span="4" class="text-right">
            <i class="iconfont  size-12">&#xe603;</i>
          </el-col>
        </el-row>
      </div>
      <div class="list-view"
           :class="index == navIndex? 'active-list': 'hidden-list'">
        <div class="item-list" :key="itemIndex"
            @click="goLink(subItem.path)"
             v-for="(subItem,itemIndex) in  index==navIndex ? navList[navIndex].subList : []"
        >

                   <span v-if="navIndex == index">
                   {{subItem.lable}}
                     </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "D_Left_Nav",
    data() {
      return {
        height: '',
        navIndex: 0,//控制当前激活对象
        controll: [],
        lastIndexx :9999,
        hiddenList:[
          {
            lable:""
          }
        ],
        //左侧导航栏集合
        navList: [
          {
            lable: "D表",
            subList: [
              {lable: "D01",path:"/Quality/d/d01"},
              {lable: "D0101",path:"/Quality/d/d0101"},
              {lable: "D0102",path:"/Quality/d/d0102"},
              {lable: "D02",path:"/Quality/d/d02"},
              {lable: "D03",path:"/Quality/d/d03"},
              {lable: "D04",path:"/Quality/d/d04"},
              {lable: "D05",path:"/Quality/d/d05"},
              {lable: "D06",path:"/Quality/d/d06"},
              {lable: "D07",path:"/Quality/d/d07"},

              {lable: "D31",path:"/Quality/d/d31"},
              {lable: "D32",path:"/Quality/d/d32"},
              {lable: "D33",path:"/Quality/d/d33"},
              {lable: "D34",path:"/Quality/d/d34"},
              {lable: "D35",path:"/Quality/d/d35"},
              {lable: "D36",path:"/Quality/d/d36"},
              {lable: "D37",path:"/Quality/d/d37"},
              {lable: "D38",path:"/Quality/d/d38"},
              {lable: "D39",path:"/Quality/d/d39"},
              {lable: "D40",path:"/Quality/d/d40"}
              /*{lable: "D41",path:"/Quality/d/d41"}*/
            ]
          }
          /*{
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}
            ]
          },
          {
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}

            ]
          },
          {
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}

            ]
          },
          {
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}

            ]
          },
          {
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}
            ]
          },
          {
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}

            ]
          },
          {
            lable: "基础及下部构建",
            subList: [
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}

            ]
          }
*/
        ],
      }
    },
    mounted() {
      this.navList.forEach((item, index) => {
        this.controll.push(false);
      })

    },
    methods: {
      goLink(path){
        this.$router.push(path)
      },
      tabNav(index){
        console.log(index)
        if(index == this.navIndex){
          this.navIndex = 9999;
          return false
        }else{
          this.navIndex = index
        }

      }
      /* navList(v){
         this.controll[v] = !this.controll[v]
       }*/
    }

  }
</script>

<style scoped>
  .leftnav-container{
  }
  .leftnav-item {
    overflow: auto;
  }

  .item-title:hover {
    background: #339DC0;
    color: white;
  }

  .title-active {
    background: #339DC0;
    color: white;
  }

  .item-title {
    padding: 10px;
    background: #339DC0;
    color: white;
    margin-bottom: 10px;

  }

  .item-list {
    padding: 0px 10px;
    line-height: 30px;
    height: 30px;

  }
  .item-list:hover{
    background: #146D8E;
    color: white;
  }
  .box {
    transition: 1s linear all;
  }
  .list-view{
    transition: 1s linear all;
    max-height: 0px;
  }
  .active-list{
    overflow: auto;
    max-height: 666px;
  }
  .hidden-list{
    max-height: 0;
    overflow: hidden;
  }

</style>
