/**
* @author bai tao
* @date 2019/6/15 0015
* @Description: 登录组件
*/
<template>
  <div>
    <!--顶部logo信息-->
    <header>
      <div class="top section-warp">
        <img src="../assets/files/icon/logo.png" class="logo">
        {{title}}
      </div>
    </header>
    <!--主体登录模块-->
    <main>
      <div class="content" v-if="show">
        <div class="login-box">
          <div class="userlogin">账号登录
            <div class="ht-20"></div>
            <el-input
              placeholder="用户名"
              v-model="userName"
              size="small">
              <i slot="prefix" class="iconfont icons">&#xe639;</i>
            </el-input>
            <div class="ht-20"></div>
            <el-input
              placeholder="密码"
              :type="view ? 'text' : 'password' "
              @keyup.enter.native="Login"
              v-model="password"
              size="small">

              <i slot="prefix" class="iconfont icons">&#xe605;</i>
            <!--  <div class="text-center" style="width: 30px" slot="suffix" @click="view = !view">
                <i  class="el-icon-view icons"  style="color: #000 !important;"></i>
              </div>
-->
            </el-input><!---->
            <div class="login-btn hover"  @click="Login">登 &nbsp; 录</div>

            <el-row class="size-12">
              <el-col :span="8">
                <span class="hover-active">忘记密码</span>
              </el-col>
              <el-col :span="16">
                <span class="hover-active">注册</span>
              </el-col>
            </el-row>

          </div>
        </div>
      </div>
    </main>
    <!--底部版权信息等等-->
<!--    <footer>
      <div class="footer-content section-warp">
        <div class="ht-20"></div>
        <p>&lt;!&ndash;兰州郎青交通科技有限公司&ndash;&gt;西安中聚智能科技有限公司&copy;</p>
        &lt;!&ndash;     <p>Xi'an Alphaviae Intelligent Technology ©</p>&ndash;&gt;
      </div>

    </footer>-->
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        show: false,
        title: "施工过程管理系统",
        bol: true,
        view:false,
        loading: false,//加载动画
        userName: "", //用户名
        password: '',  //密码
        routers: [],//登录后将组建权限保存
        codes: [], //登录后的所有组件code
        menuList: [], //后台返回对象
        menuCode: []  //筛分后的菜单权限
      }
    },
    created(){

    },
    mounted() {
      /*      this.$store.commit('changeRouteCode', []);
            this.$store.commit('setRouteCode', []);
            this.$store.commit('setUserRouters', []);*/
      this.$store.commit("setWorkArea",'')
      this.$store.commit("setSection",'')
      this.$store.commit("setSupervisor",'')
      this.show = true;
    },
    methods: {
      /**
       * 表单验证
       * @method checkLogin
       * @param {无}
       * @return {布尔}
       */
      checkLogin() {
        let reg = /^\s*[.A-Za-z0-9_-]{1,15}\s*$/;
        let namereg = /^[a-zA-Z0-9_-]{1,16}$/;
        let namebol = namereg.test(this.userName);
        let bol = reg.test(this.password);
        if (this.userName.length < 1) {
          this.$message({
            message: '用户名不能为空!',
            type: 'warning'
          });
          return false;
        }
        /*   if(!namebol){
             this.$message({
               message: '用户名不能包含特殊字符',
               center: true
             });
             return false;
           }
   */
        if (this.password.length < 1) {
          this.$message({
            message: '密码不能为空!',
            type: 'warning'
          });
          return false;
        }
    /*    if (!bol) {
          this.$message({
            message: '密码不能包含特殊字符!',
            type: 'warning'
          });
          return false;
        }*/
        return true
      },
      //获取菜单列表
      getMenu() {
        this.axios.get("/HiQuality/MAR/mainTwo").then((res) => {
          console.log("获取主菜单列表:")
          console.log(res)
          this.$store.commit('setMenuList', res.data.data[0].subMenu);
          this.$router.push("/distribute")
        })
      },
      /**
       * 登录后执行获取用户类别
       * @method getUser
       * @param {无} 无 参数说明
       * @return {unit_level;  //1业主用户  2;  //总监办用户  3;  //监理用户 4;  //标段用户
       */
      getUser(){
        console.log("登录后执行获取用户类别");
        this.axios.get("/HiQuality/unitContract/unitlevel").then((res)=>{
          console.log(res.data.data);
          this.$store.commit("setUserLevel",res.data.data);

        })
      /*  this.axios.get("/HiQuality/div/findDivByUnitId").then((sub) => {
          console.log("缓存工程划分")
          console.log(sub)
          sessionStorage.setItem("me",JSON.stringify(sub.data.data))
        })*/
      },
      //登录
      Login() {
        let name = "admin";
        let pwd =1;
        let code = "" + this.userName + ",fh," + this.password + "";
        if (this.checkLogin() == true) {
          axios.post('/HiQuality/login_login', this.$qs.stringify({
            KEYDATA: code
          }), {

            emulateJSON: true
          }).then((res)=>{
            console.log("登录成功！")
            console.log(res)
            /*        this.$router.push("/procedure_control/index")*/
            if(res.data.result=="success"){
              this.$store.commit("setUser",res.data.bUser);
              this.$store.commit("setToken",1);
              this.getMenu();
              this.getUser();
            }else {
            this.loading = false;
            this.$notify.error({
              title: '错误',
              message: '账户名或者密码错误！'
            });
          }
          })
        }
      }
    }
  }

</script>



<style scoped>

  .section-warp {
    width: 90%;
    margin: 0 auto;

  }

  .top {
    text-align: left;
    line-height: 60px;
    height: 60px;
    font-size: 24px;
    font-weight: 800;
    margin: 0 auto;
    padding-left: 20px;
    vertical-align: middle;
  }

  .content {
    background-image: url("../../static/bg.png");
    height: 500px;
    position: relative;
  }

  .login-box {
    width: 320px;
    height: 350px;
    position: absolute;
    right: 100px;
    top: 70px;
    background: white;
    padding: 50px 40px;
    margin-bottom: 30px;
    text-align: left;
    box-sizing: border-box;
  }

  .userlogin {
    font-size: 18px;
    color: #525252;
  }

  input {

    width: 190px;
    height: 26px;
    outline: none;
    border: none;
  }

  .login-btn {
    margin-top: 20px;
    height: 40px;
    background: #e00000;
    border: none;
    color: white;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    outline: none;
    text-align: center;
  }
/*

  .login-btn:hover{
    filter: brightness(110%);
  }
*/


  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #aeaeae;
    font-size: 12px;
  }

  .footer-content {
    text-align: left;

    margin: 0 auto;
    padding-left: 20px;
    line-height: 30px;
    font-size: 14px;
    color: #666666;
  }

  .logo {
    vertical-align: middle;
    object-fit: contain;
    position: relative;
    bottom: 3px;
    width: 50px;
  }


  .icons {
    line-height: 30px;
    font-size: 16px;
    color: #898989;
    position: relative;
    left: 2px;
  }

  .hover-active:hover {
    color: #23b9ee;
    cursor: pointer;
  }
</style>
