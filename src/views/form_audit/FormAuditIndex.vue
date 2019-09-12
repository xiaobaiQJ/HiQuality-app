/**
* @author bai tao
* @date 2019/6/28 0026
* @Description:表格审核
*/
<template>
  <div class="audit">
    <SidebarMenu></SidebarMenu>
    <div class="main"   :style="{height:$store.state.deviceStyle -128 +'px'}">
      <div class="main-container">
        <div class="main-top">
          <strong>工程部位名称：</strong>
          工程部位名称：路基土石方工程 ZK50+233~ZK53+000
          <div class="top-center">
            <strong>工序列表</strong>
          </div>
        </div>
        <div class="main-body">
          <div class="list-btm-warp">
            <div class="list-btm-item" v-for="item in 16">
              <div class="btm-item-left">
                A-16
              </div>
              <div class="btm-item-center">
                中间公证书
              </div>
              <div class="btm-item-right">
                <div><i class="iconfont hover">&#xe608;</i></div>
                <div><i class="iconfont hover">&#xe60d;</i></div>
                <div><i class="iconfont hover" @click="goAudit">&#xeb33;</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SidebarMenu from './aside/SidebarMenu'

  export default {
    name: "FormAuditIndex",
    components: {
      SidebarMenu
    },
    data() {
      return {
        stdProjectId: '',
        processList: []//数据集
      }
    },
    methods:{
      //前往审核状态
      goAudit(){
        this.$router.push({
          path:"/audit/status",
          query:{
            id:1
          }
        })
      }
    }


  }
</script>

<style scoped>

  .audit {
    display: flex;
    justify-content: flex-start;

  }

  .main {
    display: block;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    border: 1px solid #cccccc;
    overflow: auto;
  }

  .top-center {
    text-align: center;
    margin: 10px 0px;
  }

  .main-top{
    border-bottom: 1px solid #cccccc;
    padding: 10px;
    box-sizing: border-box;
    height: 72px;
  }

  .list-btm-item{
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    padding: 0px 20px;
  }

  .list-btm-item:last-child{
    border-bottom: none;
  }

  .btm-item-left{
    width: 100px;
  }

  .btm-item-center{
    flex: 1;
  }

  .btm-item-right{
    width: 120px;
    display: flex;
    justify-content: flex-end;
    text-align: right;
  }

  .btm-item-right>div{
    flex: 1;
  }

</style>
