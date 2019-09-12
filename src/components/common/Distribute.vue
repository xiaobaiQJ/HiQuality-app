/**
* @author bai tao
* @date 2019/9/11 0011
* @Description:路由分发    登录后负责分发页面
*/
<template>
  <div class="root" v-if="show">
    <header>
      <Top :bo="false"></Top>
      <div class="clear"></div>
      <navbar @gobol="tabBanner"></navbar>
    </header>
    <nav>
      <div class="aside">
        <LeftNav :bol="navbol" ></LeftNav>
      </div>
    </nav>
    <ProcedureControl></ProcedureControl>
    <transition name="el-fade-in-linear">
      <div class="panel">
        <div class="select-box">
          <span>请选择工区：</span>
          <el-select
            size="mini"
            v-model="id"
            placeholder="请选择">
            <el-option
              v-for="(item,index) in nameList"
              :key="index"
              :label="item.contractName"
              :value="item.id">
            </el-option>
          </el-select>
          <el-button
            size="mini"
            type="success"
            class="enter"
            @click="changeByUser"
          >
            确定
          </el-button>
        </div>
      </div>

    </transition>
  </div>
</template>

<script>
  import ProcedureControl from '../../views/engineering_unit/ProcedureControl'
  import Top from '../common/Top'
  import Navbar from '../common/Navbar'
  import LeftNav from '../common/LeftNav'
  export default {
    name: "Distribute",
    created(){
      this.getByUserName();
    },
    components:{
      Top,
      LeftNav,
      Navbar,
      ProcedureControl
    },
    data(){
      return{
        show:false,
        nameList:[],//当前用户所管理的工区集合
        id: '',
        navbol:false
      }
    },
    mounted() {

    },
    methods:{
      tabBanner(v) {
        this.navbol = v;
      },
      /**
       * 根据用户名称查询用户列表
       * @method getByUserName
       * @param {string} userName 用户名
       * @return {返回值类型} 返回值说明
       */
      getByUserName(){
        this.axios.get("/HiQuality/bSysUser/getBUserListByName",{
          params:{
            userName:this.$store.state.user.userName
          }
        }).then((res)=>{
          console.log("根据用户名称查询用户列表");
          console.log(res.data);
          if(res.data.data.length==1){
            this.$router.push("/procedure_control/index");
            return false
          }
          this.show = true
          this.nameList = res.data.data;
        })
      },
      /**
       * 根据用户名修改contractId
       * @method changeByUser
       * @param {int} id 选择的那个工区数据里的id
       * @return {返回值类型} 返回值说明
       */
      changeByUser() {
        this.axios.get("/HiQuality/bSysUser/updateBUserSession", {
          params: {
            id: this.id
          }
        }).then((res) => {
          console.log("根据用户名修改contractId")
          console.log(res.data);
          if(res.data.status == 200){
            this.$router.push("/procedure_control/index");
          }else{
            this.$tost.print("操作失败！请联系技术支持。","error")
          }
        })
      }
    }
  }
</script>

<style scoped>

  .root{
    height: 100%;
    background: white;
  }

  .panel{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .select-box{
    padding: 10px;
    text-align: left;
    background: white;
  }

  .enter{
    margin-left: 5px;
  }
</style>
