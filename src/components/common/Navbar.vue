/**
* @Description:
* @author 白涛
* @date 2019/5/30 0030
*/
<template>
  <div class="con">
    <!--顶部导航条-->
    <div class="navbar">
      <div @click="tab" class="menu tabcard hover" :class="bol ? 'bk':''">
        <i class="iconfont font-witer  ps2 size-24">&#xe60c;</i>
      </div>
      <div class="left-label font-witer " @click="goindex">
        <i class="home iconfont  ">&#xe67f;</i>
        <span class="icon-label">首页</span>
        <i class="iconfont size-12">&#xe602;</i>
        <div class="mgrs"></div>
      </div>
      <div class="font-witer downlist" v-show="showSupervisor()">
        <el-select v-model="supervisor" @change="setSupervisor" placeholder="请选择监理" size="mini">
          <el-option
            @change="setSupervisor"
            v-for="item in supervisorList"
            :key="item.id"
            :label="item.contractName"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="font-witer center" ><i class="iconfont size-12">&#xe602;</i></div>
      <div class="font-witer downlist" >
        <el-select v-model="section" @change="setSection" placeholder="请选择标段" size="mini">
          <el-option
            v-for="item in sectionList"
            :key="item.id"
            :label="item.contractName"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <div class="font-witer center"><i class="iconfont size-12">&#xe602;</i></div>
      <div class="font-witer downlist">
        <el-select v-model="workArea" @change="setWorkArea" placeholder="请选择工区" size="mini">
          <el-option
            v-for="item in workAreaList"
            :key="item.id"
            :label="item.contractName"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "Navbar",
    data() {
      return {
        projects: [],//项目集
        supervisor: '',//当前监理
        supervisorList: [],//监理列表
        section: '',//当前标段
        sectionList: [],//标段列表
        workArea: "",//当前工区
        workAreaList: [],//工区列表
        project: '',
        level: "",
        bol: true
      }
    },
    created() {

      /*this.supervisor = this.$store.state.supervisor;*/
      this.getProject();
     /* this.getUnitInfo();*/
    },
    watch: {
      supervisor() {
        this.onSupervisorChange();
      },
      /**
       * 当前标段发生改变时
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      section() {
        this.sectionList.forEach((item) => {
          if (this.section == item.id) {
            console.log("符合1111");
            console.log(item)
            this.workAreaList = item.childList;
          }
        })
      }
    },
    methods: {
      /**
       * 根据用户类别区分菜单
       * @method getByLevel
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getByLevel() {
        console.log("根据用户类别区分菜单")
        let userLevel = this.$store.state.userLevel;
        console.log(this.$store.state.userLevel)
        switch (userLevel) {
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            this.supervisor = this.supervisorList[0].id;
/*            this.$store.commit("setSection", this.supervisorList[0].childList[0].id)*/
            this.sectionList = this.supervisorList[0].childList;
            this.section = this.sectionList[0].id;
            break;

          default:
            break;
        }

      },
      /**
       * 监理改变时改变标段数据
       * @method onSupervisorChange
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      onSupervisorChange() {
        this.supervisorList.forEach((item) => {
          if (this.supervisor == item.id) {
            this.sectionList = item.childList;
            this.workArea = "";
            this.section = "";
          }
        })
      },
      /**
       * 当监理改变时保存至vuex
       * @method setSupervisor
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      setSupervisor(v) {
        this.$store.commit("setSupervisor", v)
      },
      /**
       * 当标段改变时保存至vuex
       * @method setSupervisor
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      setSection(v) {
        this.$store.commit("setSection", v)
      },
      /**
       * 当工区改变时保存至vuex
       * @method setSupervisor
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      setWorkArea(v) {
        this.$store.commit("setWorkArea", v)
      },
      /**
       * 获取a.c.d表头信息
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getUnitInfo() {
        this.axios.get("/HiQuality/tbInfo/getUnitInfo").then((res) => {
          console.log("获取a.c.d的表头")
          console.log(res)
          this.$store.commit("saveUnitTable", res.data.data[0]);
        })
      },
      /**
       * 获取工程组织结构树菜单
       * @method getProject
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getProject() {
        this.axios.get("/HiQuality/unitContract/tree").then((res) => {
          console.log("获取工程组织结构树菜单");
          console.log(res);
          if (res.data.status == 200) {
            this.supervisorList = res.data.data;
          } else {
            this.supervisorList = [];
            this.supervisor = "";
          }
          this.getByLevel();

        })
      },
      /**
       * 获取子菜单列表  已废弃接口
       * @method getSubList
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getSubList(v) {
        this.axios.get("/HiQuality/unitContract/child", {
          params: {
            id: v
          }
        }).then((res) => {
          console.log("获取子菜单列表");
          console.log(res.data);
          if (res.data.status == 200) {
            this.sectionList = res.data.data;
            this.section = "";
          }
        })
      },
      //是否显示标段下拉框
      showSection() {
        let level = this.$store.state.userLevel;
        if (level == 1 || level == 2 || level == 3) {
          return true
        }
        return false
      },
      showArea() {
        let level = this.$store.state.userLevel;
        if (level == 4) {
          return true
        }
      },
      //是否显示监理下拉框
      showSupervisor() {
       /* let level = this.$store.state.userLevel;
        if (level == 4) {
          this.sectionList = this.supervisorList;
          return false
        }*/
        return true
      },
      //切换左侧菜单
      tab() {
        this.bol = !this.bol;
        this.$emit('gobol', this.bol)
      },
      goindex() {
        this.$router.push({path: '/procedure_control'});
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
  }

  .navbar {
    background: #146D8E;
    height: 50px;
    text-align: left;
  }

  .navbar > div {
    display: inline-block;
    height: 50px;
    vertical-align: top;
  }

  .menu {
    text-align: center;
    background: #0086b3;
  }

  .tabcard {
    width: 50px;
    text-align: center;
    line-height: 50px;
  }

  .left-label {
    box-sizing: border-box;
    font-size: 14px;
    width: 120px;
    text-align: center;
    line-height: 45px;
  }

  .left-label:hover {
    cursor: pointer;
  }

  .text {
    line-height: 50px;
    font-size: 14px;
  }

  .text:hover {
    cursor: pointer;
  }

  .borr > i {
    line-height: 30px;
  }

  .center {
    line-height: 50px;
    margin: 0px 10px;
  }

  .bk {
    background: black;
    opacity: 0.8;
  }

  .downlist {
    padding: 11px 0px;
    text-align: left;
  }

  .font-witer {
    color: white;
  }

  .icon-label {
    margin: 0px 10px;
    position: relative;
  }

  .downlist input {
    text-align: left !important;
  }

  input {
    text-align: left !important;
  }

  .mgrs{
    margin-right: 10px;
  }
</style>
<style>
  .downlist input {
    text-align: left !important;
  }
</style>
