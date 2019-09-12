<template>
  <div class="aside">
    <section>
      <div class="search-warp">
        <el-input
          placeholder="输入人员姓名。进行查询"
          size="mini"
          suffix-icon="el-icon-search"
          v-model="userName"
        >
        </el-input>
      </div>
    </section>

    <section>
      <div class="aside-menu scroll-bar">
        <div class="menu-list" :style="{height:deviceHeight -210 +'px'}">
          <div class="menu-list-item"
              @click="getBSysUserByid(index,item.id)"
               :class="currentIndex==index ? 'active-color' : '' "
               v-for="(item,index) in userList" :key="index">
            <div class="item-left">
              <div class="item-left-icon"><i class="iconfont">&#xe639;</i></div>
              <div class="item-left-name">{{item.fullName}}</div>
            </div>
            <div class="item-right">
              <div class="item-left-icon" @click.stop="goEdit(item.id)">
                <i class="iconfont icons" >&#xe643;</i>
              </div>
              <div class="item-left-icon" @click.stop="delUser(item.id)">
                <i class="iconfont icons"   >&#xe6b0;</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
  export default {
    name: "SidebarMenu",

    data() {
      return {
        deviceHeight: 0,
        currentIndex:undefined,
        userName: '',
        select:this.isChange,
        user:{},//当前用户
        select_ProcessList: [],//工程菜单
        userList:[]//用户集合
      }
    },
    props:['isChange'],
    watch:{
      userName(){
        this.getByUserName();
      },
      isChange(){
          this.getByUserName();
      }
    },
    created(){
      console.log(this.select+'----')
    },
    mounted() {
      this.getByUserName();
      //获取设备高度。并监听窗口变化时更新耕读
      this.deviceHeight = this.$store.state.deviceStyle;
      let that = this;
      window.onresize = function () {
        that.deviceHeight = that.$store.state.deviceStyle;
        console.log(that.deviceHeight)
      }
    },

    methods: {
      //根据id删除用户
      delUser(id){
        console.log(1111)
        this.$confirm('确定要删除该用户吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.get("/HiQuality/bSysUser/deleteBUserById",{
            params:{
              id:id
            }
          }).then((res)=>{
            this.$message({
              message: '删除成功！',
              type: 'success'
            });
            console.log(res);
            this.getByUserName();
          })
        }).catch(() => {

        });

      },
      //根据id获取用户信息
      getBSysUserByid(index,id){
        this.currentIndex = index;
        this.axios.get("/HiQuality/bSysUser/getBSysUserByid",{
          params:{
            id:id
          }
        }).then((res)=>{
          this.$emit('getUser',res.data.data);
          this.$router.push("/set/sys/user/index")
        })
      },
      //根据登录用户获取用户列表
      getByUserName(){
        this.axios.get("/HiQuality/bSysUser/getByUserName",{
          params:{
            userName:this.userName
          }
        }).then((res)=>{
          console.log(res)
          this.userList = res.data.data;
        })
      },
      //前往修改用户页
      goEdit(id){
        this.axios.get("/HiQuality/bSysUser/getBSysUserByid",{
          params:{
            id:id
          }
        }).then((res)=>{
          this.$emit('getUser',res.data.data)
        })
        this.$router.push({
          path:"/set/sys/user/edit",
          query:{
            id:id
          }
        })

      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .aside-menu {
    padding: 10px 0px;
  }

  .aside {
    width: 280px;
    white-space: nowrap; /* 文字不换行 */
    text-overflow: ellipsis;
    text-align: left;
  }

  .menu-list {
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #ccc;
    padding: 0px 10px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
  }

  .item-left, .item-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-left-icon {
    width: 40px;
    text-align: center;
  }

  .item-right {
    justify-content: flex-end;
  }

  .item-left-name {
    flex: 1;

  }

  .icons:hover {
    cursor: pointer;
    color: #1d9ece;
  }

  .menu-list-item:hover{
    color: #ff9200;
    cursor: pointer;
  }

  .active-color{
    color: #ff9200;
  }


</style>

