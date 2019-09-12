/**
* @author bai tao
* @date 2019/6/25 0017
* @Description:修改工序列表
*/
<template>

  <div class="con">
    <article v-if="add==false">
      <header>
        <div class="nav">
          <div class="nav-box">
            <div class="nav-right hover" @click="add = true">
              <i class="iconfont icons">&#xe623;</i>
              添加工序
            </div>
            <div class="nav-right hover" @click="moveUP">
              <i class="iconfont icons">&#xe633;</i>
              上移
            </div>
            <div class="nav-right hover" @click="moveDown">
              <i class="iconfont icons">&#xe62a;</i>
              下移
            </div>
            <div class="nav-right hover" @click="onClickTop">
              <i class="iconfont icons">&#xe65b;</i>
              置顶
            </div>
            <div class="nav-right hover" @click="onClickDown">
              <i class="iconfont icons">&#xe60b;</i>
              置低
            </div>
          </div>
        </div>
      </header>
      <main>
        <section v-if="processList.length">
          <div class="list scroll-bar" :style="{height : deviceStyle+'px'}">
            <div class="list-item"
                 @click="onClickTab(index)"
                 :class="currentIndex == index ? 'active-item' : '' "
                 v-for="(item,index) in processList" :key="index">
              <div class="list-item-left">
                {{item.tableNo}}
              </div>
              <div class="list-item-center">
                {{item.tableName}}
              </div>
              <div class="list-item-right">
                <div><i class="iconfont icons" @click="processList.splice(index,1)">&#xe6b0;</i></div>
                <div><i class="iconfont icons">&#xe6a1;</i></div>
              </div>
            </div>

          </div>

        </section>
        <section v-else>
          <div class="text-center">暂无数据</div>
        </section>


        <span class="submit-btn btn-hover" @click="confirmList(processList)">确定</span>
      </main>
    </article>
    <article v-else>
      <Add_Process :list="processList" :id="stdProjectId" @getAddList="getAddList"></Add_Process>
    </article>
  </div>


</template>

<script>
  import {swapItems} from "../../../../utils/utils";
  import Add_Process from './Add_Process'

  export default {
    name: "Add_Process_List",
    created() {
      this.stdProjectId = this.$route.query.id;

      this.axios.get("/HiQuality/stdProc/getByStdProjectId", {
        params: {
          stdProjectId: this.stdProjectId
        }
      }).then((res) => {
        this.processList = res.data.data;
      })

    },

    mounted() {
      this.deviceStyle = this.$store.state.deviceStyle - 260;
    },
    components: {
      Add_Process
    },
    data() {
      return {
        add: false,//是否显示添加工序
        currentIndex: 9999,//当前选择项
        deviceStyle: 0,//设备高度
        stdProjectId: '',//单位工程id
        processList: []//工序列表
      }
    },
    methods: {
      /**
       * 获取子组件传过来的数据并保存
       * @method getAddList
       * @param {list} 工序列表
       * @return {无} 暂无说明
       */
      getAddList(list) {
        this.add = false;

      },
      confirmList(list){
        let arr = [];
        list.forEach((item)=>{
          var obj ={
            tableId:item.tableId,
            tableName:item.tableName,
            tableNo:item.tableNo
          }
          arr.push(obj)
        })
        this.axios.post("/HiQuality/stdProc/addStdProj",this.$qs.stringify( {
          stdProjectId:this.stdProjectId,
          stdPorj:JSON.stringify(arr)
        })).then((res) => {
          console.log(res)
          if (res.data.msg == "success") {
            this.$router.push({
              path: "/set/process-list/index",
              query:{
                id:this.stdProjectId
              }
            })
          }
        })


      },
      //上移
      moveUP() {
        if(this.currentIndex == 9999){
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }
        if (this.currentIndex == 0) {
          this.$message({
            message: '别点了。。。已经到头了！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.processList, this.currentIndex, this.currentIndex - 1);
        this.currentIndex -= 1;
      },
      //下移
      moveDown() {
        if(this.currentIndex == 9999){
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }
        if (this.currentIndex == this.processList.length - 1) {
          this.$message({
            message: '我是有底线的！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.processList, this.currentIndex, this.currentIndex + 1);
        this.currentIndex += 1;
      },
      //置顶
      onClickTop() {
        if(this.currentIndex == 9999){
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }
        if (this.currentIndex == 9999) {
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.processList, this.currentIndex, 0, 'up');
        this.currentIndex = 0;
      },
      //置底
      onClickDown() {
        if(this.currentIndex == 9999){
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }
        if (this.currentIndex == 9999) {
          this.$message({
            message: '请先选择工序！',
            type: 'warning'
          });
          return false
        }

        swapItems(this.processList, this.currentIndex, this.processList.length - 1, 'down');
        this.currentIndex = this.processList.length - 1;
      },
      //点击行时切换下标
      onClickTab(index) {
        this.currentIndex = index;
      },
      //保存编辑
      saveProcessList() {

      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
    width: 100%;
    display: block;
  }

  .nav{
    flex: 1;
    text-align: right;
  }

  .nav-box{
    height: 28px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    box-sizing: border-box;
  }


  .nav-right {
    padding-left: 20px;
    display: inline-block;
    text-align: right;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }


  .submit-btn {
    width: 120px;
    margin: 0 auto;
    margin-top: 15px;
    height: 30px;
    display: inline-block;
    color: rgba(16, 16, 16, 1);
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(187, 187, 187, 1);
  }

  .btn-hover:hover {
    background: #146D8E;
    color: white;
    cursor: pointer;
  }

  .icons {
    font-size: 16px;
  }

  .active-item {
    background: #0EB1C0;
    color: white;
  }

  .nav-right:hover {
    color: #ff996d;
  }

  .nav-right:hover i {

    color: #ff996d;
  }

  .list-item-right {
    width: 80px !important;
    text-align: center;
    display: flex;
  }

</style>
