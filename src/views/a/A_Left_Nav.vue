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
    name: "A_Left_Nav",
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
            lable: "A表",
            subList: [
              {lable: "A01",path:"/Quality/a/a01"},
              {lable: "A02",path:"/Quality/a/a02"},
              {lable: "A03",path:"/Quality/a/a03"},
              {lable: "A04",path:"/Quality/a/a04"},
              {lable: "A05",path:"/Quality/a/a05"},
              {lable: "A06",path:"/Quality/a/a06"},
              {lable: "A07",path:"/Quality/a/a07"},
              {lable: "A08",path:"/Quality/a/a08"},
              {lable: "A09",path:"/Quality/a/a09"},
            ]
          },
          {
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
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"},
              {lable: "子菜单"}
            ]
          }

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
