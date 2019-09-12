/**
* @author bai tao
* @date 2019/6/18 0018
* @Description:修改工程划分
*/
<template>
  <div class="con">
    <header>
      <div class="nav">
        <div class="nav-left hover">
          <!--   <span @click="goAdd">
              选择审核角色
             </span>
       <router-link to="/set/process-list/add" tag="div">
       </router-link>-->
        </div>
        <div class="nav-right" v-if="audit">
          选择审核角色
        </div>

      </div>
    </header>
    <main>

      <div class="container-warp">
        <div class="content ">
          <div class="panel">
            <div class="panel-left">
              账户名称
            </div>
            <div class="panel-right">
              <el-input v-model="user.userName" size="mini" placeholder="必须填"></el-input>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              用户姓名
            </div>
            <div class="panel-right">
              <el-input v-model="user.fullName" size="mini" placeholder="必须填"></el-input>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              密码
            </div>
            <div class="panel-right">
              <el-input v-model="password" type="password" size="mini" placeholder="必填项，至少6位数字或字母"></el-input>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              确定密码
            </div>
            <div class="panel-right">
              <el-input v-model="rePwd"  type="password"  size="mini" placeholder="请确保俩次输入密码一致"></el-input>
            </div>
          </div>
          <div class="panel">
            <div class="panel-left">
              审核角色
            </div>
            <div class="panel-right" @click="showAudit">
              <el-input v-model="typeName" size="mini" placeholder="选择审核角色" ></el-input>
            </div>
          </div>
          <div class="text-right">
            <div class="panel-right ">
              <div class="btn-warp">
                <div class="btn-box btn-active" @click="canel">取消</div>
                <div class="btn-box btn-active" @click="save">保存</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-panel" v-if="audit">
          <div class="list"  :style="{height:$store.state.deviceStyle -210 +'px'}">
            <div class="list-item" v-for="(item,index) in processList"  v-if="$store.state.userLevel == item.unitLevel"  :key="index">
              <div class="list-item-left">
                <i class="iconfont">&#xe639;</i>
              </div>
              <div class="list-item-center">
                {{item.typeName}}
              </div>
              <div class="list-item-right">
                <div class="list-checkbox">
                  <van-checkbox v-model="controlArr[index]" checked-color="#07c160" @click="confirmAudit(item)"></van-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
  import {Checkbox} from  'vant'
  export default {
    name: "Add_User",
    components:{
      [Checkbox.name]:Checkbox
    },
    data() {
      return {
        checked:false,
        audit:false,
        processList:[],
        typeName:"",//审核人姓名
        password:"",//密码
        rePwd:"",//确认密码
        auditUser:{},//审核人
        controlArr:[],//控制器
        user:{
          userName:  "",	//用户名称
          fullName:  "",	//用户姓名
          phoneNum:  "",	//手机号
          auditTypeId:  0,	//审核角色Id
        }
      }
    },
    created(){

    },
    mounted() {
    },
    watch:{
      //监听路由变化
      $route(){
        this.axios.get("/HiQuality/bSysUser/getBSysUserByid",{
          params:{
            id:this.$route.query.id
          }
        }).then((res)=>{
          this.user = res.data.data;

        })
      },
      processList(list){
        let arr = [];
        list.forEach((item)=>{
          arr.push(false)
        })
        this.controlArr = arr;
      }
    },
    filters: {

      getLevel: function (level) {
        switch (level) {
          case 1:
            return "单位工程"
            break;
          case 2:
            return "分部工程"
            break;
          case 3:
            return "分项工程"
            break;
          case 4:
            return "分项子项工程"
            break;

          default:
            return "工地建设"
            break;
        }
      }
    },
    methods: {
      checkData(){
        if(this.password != this.rePwd){
          this.$message({
            message: '俩次输入的密码不一致！',
            type: 'warning'
          });
          return false
        }
        if(this.user.userName==""||this.user.fullName==""||this.passwod==""||this.user.auditTypeId==0){
          this.$message({
            message: '请填写完善信息！',
            type: 'warning'
          });
          return false
        }
        return  true

      },
    
      //提交当前审核人
      confirmAudit(obj){
        this.typeName = obj.typeName;
        this.user.auditTypeId = obj.id;
        this.auditUser = obj;
        this.audit = false;
      },
      //显示审核角色列表
      showAudit(){
        this.audit = true;
        this.axios.get("/HiQuality/auditorType/findAll").then((res)=>{
          this.processList = res.data.data;

        })
      },
      //根据项目类型返回对应工程
      getByProjectType(type) {
        switch (type) {
          case 1:
            return "路基工程"
            break;
          case 2:
            return "路面工程"
            break;
          case 3:
            return "桥梁工程"
            break;
          case 4:
            return "互通立交工程"
            break;
          case 5:
            return "隧道工程"
            break;
          case 6:
            return "环保工程"
            break;
          case 7:
            return "交通安全设施"
            break;
          case 8:
            return "机电工程"
            break;
          default:
            return "工地建设"
            break;
        }
      },

      save() {
        let isOk = this.checkData();
        if(isOk==true){
          this.axios.post("/HiQuality//bSysUser/saveBSysUser",this.$qs.stringify({
            sysUser:JSON.stringify({
              "userName":  this.user.userName,	//用户名称
              "fullName":  this.user.fullName,	//用户姓名
              "phoneNum":  this.user.phoneNum,	//手机号
              "auditTypeId":  this.user.auditTypeId,	//审核角色Id
            }),
            password:this.password
          })).then((res)=>{
            if(res.data.status==200){
              this.$message({
                message: '新增成功！',
                type: 'success'
              });
              this.$emit("add", Math.random())
              this.$router.push("/set/sys/user")
            }else{
              this.$message({
                message: '操作失败！',
                type: 'success'
              });
            }

          })
        }

      },
      canel() {
        this.$router.push("/set/sys/user/index")
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
    display: block;
    width: 100%;
    position: relative;
  }

  .container-warp{
    display: flex;
  }

  .right-panel{
    flex: 1;
  }

  .nav {
    height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .content {
    padding: 0px 30px;
    width: 420px;
    box-sizing: border-box;
  }

  .panel {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .panel-left {
    width: 420px;
  }

  .panel-right {
    flex: 1;
  }

  .list{
    overflow: auto;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .btn-warp {


  }

  .btn-box {
    width: 80px;
    height: 30px;
    border: 1px solid #cccccc;
    margin-left: 20px;
    text-align: center;
    line-height: 30px;
    display: inline-block;
  }

  .btn-box:hover {
    background: #146D8E;
    color: white;
    cursor: pointer;
  }

  .text-right{
    text-align: right;
  }

  .nav-left{
    width: 420px;
  }

  .nav-right{
    flex: 1;
  }
</style>
<style>
  .panel-right .el-input__inner {
    width: 260px;
  }
</style>
