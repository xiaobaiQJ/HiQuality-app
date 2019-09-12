/**
* @author bai tao
* @date 2019/6/28 0028
* @Description:审核流程
*/
<template>
  <div class="con">
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
        <div class="panel-msg">
          <span class="nav-lable">审核结果：</span>
          <span class="succeed">通过</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "Audit_Status",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
    margin: 20px 0px 20px 0px;
  }

  nav {
    margin: 10px 0px 20px 0px;
  }

  .nav-line {
    text-align: left;
  }

  .nav-lable {
    font-weight: bold;
    color: #3e3e3e;
  }



  .succeed {
    color: green;
    font-size: 20px;
    font-weight: bold;
  }

  .panel {
    margin-bottom: 30px;
    padding-left: 50px;
  }

  .panel-item {
    display: flex;
    margin: 30px 0px 20px 0px;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .panel-item-left {
    width: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    margin-right: 50px;

  }

  .panel-item-left i{
    display: inline-block;
    width: 30px;
  }

  .panel-msg {
    padding-left: 80px;

    line-height: 40px;
    margin-bottom: 20px;
  }
</style>
