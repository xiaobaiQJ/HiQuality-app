/**
* @author bai tao
* @date 2019/6/26 0026
* @Description:
*/
<template>
  <div class="section-warp">
    <section  class="right-panel">
      <div class="section-warp-right">
        <div class="nav">
          <div class="nav-left hover" @click="addModel= true">
          <span @click="showAdd">
           <i class="iconfont icons" >&#xe623;</i>新建用户
          </span>
          </div>
        </div>
        <div class="content">
          <div class="panel" v-if="currentUser!=''">
            <div class="panel-item">
              <div class="panel-item-left">
                账户名称
              </div>
              <div class="panel-item-right">
                {{currentUser.userName}}
              </div>
            </div>
            <div class="panel-item">
              <div class="panel-item-left">
                用户姓名
              </div>
              <div class="panel-item-right">
                {{currentUser.fullName}}
              </div>
            </div>
            <div class="panel-item">
              <div class="panel-item-left">
                密码
              </div>
              <div class="panel-item-right">
                <!--{{currentUser.password }}-->
                ......
              </div>
            </div>

            <div class="panel-item">
              <div class="panel-item-left">
                审核角色
              </div>
              <div class="panel-item-right">
                {{getByAuditId(currentUser.auditTypeId)}}
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
    name: "UserIndex",
    props:['user'],
    data(){
      return{
        addModel:false,
        currentUser:"",//当前展示用户
        userList:[],//用户集合
        auditList:[]//审核人集合
      }
    },
    watch:{
      user(v){
        this.currentUser  = v;
      }
    },
    created(){
      this.currentUser = this.user;
      this.getAuditList();
    },

    mounted(){

     /* this.getByUserName();*/
    },
    methods: {
      /**
       * 根据auditId
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getByAuditId(id) {
        console.log(id+'-----')
        let name = '';
        try {
          this.auditList.forEach((item)=>{
            if(item.id == id){
              console.log(item)
              name = item.typeName;
              throw new Error();
            }
          })
        }catch(e)  {
          return  name;
        }



      },

      /**
       * 查询全部审核人
       * @method 方法名 接口名：auditorType/findAll
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getAuditList(){
        this.axios.get("/HiQuality/auditorType/findAll").then((res)=>{
          console.log("查询全部审核人")
          this.auditList = res.data.data;
        })

      },



      //前往修改页
      goEdit(id){

      },
      closeModel(){
        this.addModel = false;
      },
      //显示新增组件
      showAdd() {
        this.$router.push("/set/sys/user/add")
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

  .section-warp-right {
    flex: 1;
  }

  .nav {
    height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .nav-left, .nav-right {
    width: 130px;
    font-size: 12px;
    text-align: left;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .content {
    text-align: left;
  }

  .panel-item {
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .panel-item-left {
    width: 100px;
    padding-left: 20px;
    color: #4e4e4e;
    text-align: left;
  }

  .panel-item-right {
    flex: 1;
    text-align: left;
    color: #616161;
  }

  .right-panel{
    flex: 1;
  }
</style>
