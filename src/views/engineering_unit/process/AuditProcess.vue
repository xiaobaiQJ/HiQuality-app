/**
* @author bai tao
* @date 2019/6/15 0015
* @Description:审核流程
*/
<template>
  <div class="container">
    <header>
      <nav>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">工序控制</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">附件列表</el-breadcrumb-item>
          <el-breadcrumb-item>审核流程</el-breadcrumb-item>
        </el-breadcrumb>
      </nav>
      <nav>
        <div class="nav-line">
          <span class="nav-lable">工程部位名称：</span>路基土方石工程ZK50+233~ZK533+000
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
        <div>
          <span class="nav-lable">审核结果：</span>
          <span class="succeed">通过</span>
        </div>
        <div class="panel">
          <div class="panel-item">
            <div class="panel-item-left">
              <i class="iconfont">&#xe639;</i>
              <strong>项目经理</strong>
            </div>
            <div>李荣富于2019年6月15日17:07:57进行提交</div>
          </div>
          <div class="panel-msg">申请日11期：2019年6月15日</div>
          <div class="panel-item">
            <div class="panel-item-left">
              <i class="iconfont">&#xe639;</i>
              <strong>监理工程师</strong>
            </div>
            <div>夏志亮于2019年6月15日17:07:57接到申请，于2019年6月15日17:07:57进行提交</div>
          </div>
          <div class="panel-msg">申请日11期：2019年6月15日</div>
          <div class="panel-msg">审核意见：此工程部位的施工资料及现场施工质量，均满足质量要求，同意交工。</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "AuditProcess",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .container {
    width: 90%;
    margin: 0 auto;
  }

  nav {
    margin: 10px 0px 20px 0px;
  }

  .nav-line{
    text-align: left;
  }

  .nav-lable{
    font-weight: bold;
    color: #3e3e3e;
  }

  .container{
    padding: 0px 50px;
    text-align: left;
  }

  .succeed{
    color: green;
    font-size: 16px;
    font-weight: bold;
  }

  .panel{
    margin-bottom: 30px;
  }

  .panel-item{
    display: flex;
    margin: 30px 0px 20px 0px;
    align-items: center;
  }

  .panel-item-left{
    width: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    justify-content: space-between;
    margin-right: 50px;

  }

  .panel-msg{
    padding-left: 80px ;
    margin-bottom: 20px;
  }
</style>
