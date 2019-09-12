/**
* @author bai tao
* @date 2019/6/17 0026
* @Description:
*/
<template>
  <div class="section-warp">
    <aside>
      <div class="section-warp-left">
        <SidebarMenu @getUser="getUser" :isChange="select"></SidebarMenu>
      </div>
    </aside>
    <section  class="right-panel">
        <router-view :user="user"  @add="add"></router-view>
    </section>

  </div>
</template>

<script>
  import SidebarMenu from './aside/SidebarMenu'
  export default {
    name: "User",
    components:{
      SidebarMenu
    },
    data(){
      return{
        user:{},//当前用户
        select:false
      }
    },
    mounted(){
      /* this.getByUserName();*/
    },
    methods: {
      add(v){
        this.select = v;
      },
      //获取菜单当前点击用户
      getUser(user){
        this.user = user;
      },

      //显示新增组件
      showAdd() {

      }
    }
  }
</script>

<style scoped>
  .section-warp {
    display: flex;
    box-sizing: border-box;
    justify-content: flex-start;
    font-size: 12px;
  }

  .right-panel{
    flex: 1;
  }
</style>
