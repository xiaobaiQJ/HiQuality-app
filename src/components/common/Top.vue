<template>
  <header>
    <div id="top">

      <div class="top-box">
        <div class="top-box-left">
          <img src="../../assets/files/icon/logo.png" class="logo" width="45px" height="45px">
          <span class="size-18 relative">
            {{title}}
            <!--  <span class="label-pie basics">Pro</span>-->
          </span>
        </div>
        <div class="top-box-right">
          <!--v-if="$store.state.userLevel<5"-->
          <div class="right-item">
            <div class="hover" @click="goMission">
              <i class="icon iconfont ">&#xeb33;</i>
              <el-badge :value="count" class="item" :hidden="count==0">
                <span>办理事项</span>
              </el-badge>
            </div>
          </div>

          <div class="right-item">
            <div class="hover">
              <i class="icon iconfont ">&#xe7d1;</i>
              <span>提醒</span>
            </div>

          </div>
          <div class="right-item">
            <div class="hover">
              <i class="icon iconfont ">&#xe81a;</i>
              <span>收藏</span>
            </div>

          </div>
          <div class="right-item user-box">
            <div class="hover relative " @click="userbol = !userbol">
              <i class="icon iconfont ">&#xe62f;</i>
              <div class="item-menu">
                <div>
                  {{this.$store.state.user.userName}}
                </div>
                <div>
                  {{this.$store.state.user.fullName}}
                </div>
              </div>
              <div class="panel " @mouseleave="hideUser" v-show="userbol">
                <!--   <div class="panel-line">我的</div>-->
                <div class="panel-line" @click="showConfirm">修改密码</div>
                <div class="panel-line" @click="goLogin">退出</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <article>
      <div class="layer-box" v-if="submit"></div>
    </article>
    <article>
      <transition
        enter-active-class="animated slideInRight"
        leave-active-class="animated slideOutRight "
      >
        <div v-show="submit" class="dialog-box">
          <div class="dialog-title">修改密码</div>
          <div class="dialog-content ">
            <div class="dialog-line">
              密码：
              <el-input
                placeholder="请输入密码"
                size="mini"
                style="width: 100% !important;"
                type="password"
                prefix-icon="el-icon-edit"
                v-model="passWord"
                clearable>
              </el-input>
            </div>
            <div class="dialog-line">
              确认密码：
              <el-input
                type="password"
                style="width: 100% !important;"
                placeholder="请确认密码"
                prefix-icon="el-icon-edit"
                size="mini"
                v-model="rePassWord"
                clearable>
              </el-input>
            </div>
          </div>
          <div class="button-confrim ">
            <div class="btns" @click="closeModel">取消</div>
            <div class="btns" @click="onSubmitUser">确定</div>
          </div>

        </div>
      </transition>
    </article>
    <article>

    </article>
  </header>
  <!--提交-->

</template>

<script>
  import {getCurrentDate} from "../../utils/utils";

  export default {
    name: "Top",
    data() {
      return {
        count: 0,
        auditList: [],
        passWord: "",
        rePassWord: "",

        auditUserId: "",
        submit: false,
        userbol: false,
        title: "施工过程管理系统HiQuality"
      }
    },
    created() {
      this.getCount();
    },
    computed: {
      getState: function () {
        return this.$store.state.random

      }
    },
    watch: {
      getState: function (val, oldval) {
        console.log("-----------" + val)
        this.getCount();
      }
    },
    methods: {
      getCount() {
        this.axios.get("/HiQuality/rec/getUnAduitCount").then((res) => {
          console.log("获取当前状态----");
          console.log(res);
          if (res.data.status == 200) {
            this.count = res.data.data
          } else {
            this.count = 0;
          }
        })
      },
      onSubmitUser() {
        let reg = /^\s*[.A-Za-z0-9_-]{1,15}\s*$/;
        if (this.passWord == "" || this.rePassWord == "") {
          this.$message({
            message: '密码不能为空！',
            type: 'warning'
          });
          return false
        }

        if (this.passWord != this.rePassWord) {
          this.$message({
            message: '俩次输入的密码不一致！',
            type: 'warning'
          });
          return false
        }
        let bol = reg.test(this.password);
        console.log(bol)
        if (!bol) {
          this.$message({
            message: '密码不能包含特殊字符!',
            type: 'warning'
          });
          return false;
        }
        this.axios.post("/HiQuality/bSysUser/updatePassword", this.$qs.stringify({
          password: this.passWord
        })).then((res) => {
          console.log("修改密码！")
          console.log(res);
          this.$router.push("/login")
        })
        this.submit = false;
      },
      changeTime() {

      },
      closeModel() {
        this.submit = false;
      },
      //显示提交
      showConfirm() {
        this.auditTime = getCurrentDate();
        this.submit = !this.submit;
      },
      goMission() {
        /*  if(this.count == 0){
            this.$tost.print("暂无审核事项！")
            return false
          }*/
        this.$router.push("/mission")
      },
      goLogin() {
        /*   this.$store.commit('setRouteCode', []);*/
        this.$router.push({path: '/login'});
      },
      hideUser() {
        this.userbol = false
      }

    }
  }
</script>

<style scoped>

  .top-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 0px 20px;
  }

  .top-box-left {
    flex: 1;
    text-align: left;
  }

  .top-box-right {
    text-align: right;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    font-size: 12px;
  }

  .size-18 {
    font-size: 20px;
    display: inline-block;
    vertical-align: top;
    line-height: 50px;
  }

  .icon {
    margin-right: 5px;
  }

  .panel {
    background: white;
    position: absolute;
    left: 0px;
    width: 100%;
    top: 40px;
    text-align: center;
    z-index: 3000;
    padding: 10px 10px;
  }

  .panel-line {
    text-align: left;
    height: 25px;
    line-height: 25px;
    text-align: center;
  }

  .panel-line:hover {
    color: #146D8E;
  }

  .relative {
    position: relative;
  }

  .right-item {
    width: 80px;
  }

  .right-item .hover {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    font-size: 12px;
  }

  .relative {
    position: relative;
  }

  .dialog-box {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 260px;
    line-height: 40px;
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    background: white;
    text-align: left;
    z-index: 2000;
  }

  .dialog-title {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 20px;
    color: #444444;
    border-bottom: 1px solid #cccccc;
  }

  .dialog-content {
    padding: 0px 20px;
    line-height: 50px;
  }

  .dialog-line span {
    display: inline-block;
    width: 80px;
  }

  .button-confrim {
    display: flex;

    height: 30px;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 30px 0px;
  }

  .btns {
    width: 120px;
    height: 30px;
    line-height: 30px;
    color: rgba(16, 16, 16, 1);
    text-align: center;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 20px;
    transition: .3s linear background-color;
  }

  .btns:hover {
    background: #147AB0;
    color: white;
    cursor: pointer;
  }

  .audit-box {
    position: fixed;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(187, 187, 187, 1);
    background: white;
    text-align: left;
    z-index: 2000;
    line-height: 40px;
    width: 400px;
  }


  textarea {
    border: 1px solid #cccccc;
    margin: 0;
    height: 200px;
    padding: 10px;
    box-sizing: border-box;
    line-height: 20px;
    resize: none;
  }

  textarea:hover {
    /*box-sizing: border-box;*/
    border-bottom: 1px solid #cccccc;
  }

  .submit-warp {
    height: 200px;
  }

  .checkbox-warp {
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .van-radio-group {
    flex: 1;
    width: 100%;
  }

  .split {

  }

  .item-menu {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .user-box {
    position: relative;
    width: 100px;
    text-align: center;
  }
</style>
