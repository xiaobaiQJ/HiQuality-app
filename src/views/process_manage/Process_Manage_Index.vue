/**
* @author bai tao
* @date 2019/6/28 0028
* @Description:添加工序组件
*/
<template>
  <div class="con">
    <main>
      <div >

        <el-row :gutter="20">
          <el-col :span="10">
            <div class="nav">
              <el-select
                v-model="tableTypeId" placeholder="请选择"
                style="width: 100%" size="mini">
                <el-option
                  size="mini"
                  v-for="item in downList"
                  :key="item.id"
                  :label="getLabel(item)"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>

            <div class="list" :style="{height : $store.state.deviceStyle-160+'px'}">
              <div class="list-item hover" v-for="(item,index) in businessList" :key="index"
                   :class="currentIndex==index ?'active-item':''" @click="tabMenu(item,index)">
                <div class="list-item-left">
                  {{item.tableNo}}
                </div>
                <div class="list-item-center">
                  {{item.tableName}}
                </div>
                <!--  <div class="list-item-right">
                    <div class="list-checkbox">
                      <el-checkbox fill="#409EFF" v-model="businessControlList[index]"></el-checkbox>
                    </div>
                  </div>-->
              </div>
            </div>

          </el-col>
          <el-col :span="14">
            <div class="nav">
              <div class="nav-left hover" v-if="auditList.length==0">
                <span @click="goAdd(0)">
                 <i class="iconfont icons">&#xe623;</i>新建审核流程
                </span>
                <router-link to="/set/process-list/add" tag="div">
                </router-link>
              </div>
              <div class="nav-right hover" v-else>
                <span @click="goEdit(tableId)">
                  <i class="iconfont icons">&#xe623;</i>
                  编辑审核流程
                </span>
              </div>
            </div>
            <div class="panel">
              <div class="panel-item" v-for="(item,index) in auditList" :key="index">
                <i class="iconfont panel-icon">&#xe639;</i>
                {{item.typeName}}
              </div>

            </div>

          </el-col>
        </el-row>
      </div>

    </main>
  </div>
</template>

<script>

  export default {
    name: "Process_Manage_Index",

    created() {
      this.stdProjectId = this.$route.query.id;
      this.getDownMenu();
    },
    mounted() {

    },
    watch: {
      tableTypeId: function (id) {
        console.log(id)
        this.findByTableTypeId(id);
        this.tableId = '';
      },
      /**
       * 去除用户重复添加的数据
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      controlList: function () {
        const res = new Map();
        this.tableList = this.controlList.filter((arr) => !res.has(arr.tableNo) && res.set(arr.tableNo, 1))
      }
    },
    data() {
      return {
        tableList: [],
        stdProjectId: '',//单位工程id
        downList: [],//顶部业务下拉菜单
        businessList: [],//业务数据
        businessControlList: [],//业务选中控制
        tableTypeId: '',//当前选中业务表id
        checked: true,
        tableId:'',
        currentIndex:9999,
        auditList:[],//审核人列表
        controlList: []//控制集合
      }
    },
    methods: {
      /**
       * 获取标签显示
       * @method getLabel
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      getLabel(item){
        let label ='   '+ item.typeCode + '         '+item.typeName
        return  label;
      },
      //根据tablei id获取对应审核人集合
      getByTableIdAuitList(){
        this.axios.get("/HiQuality/auditorType/findByTableId",{
          params:{
            tableId : this.tableId
          }
        }).then((res)=>{
          console.log(res.data)
          if(res.data.status == 400){
            this.auditList = [];

            console.log(this.auditList)
          }else{
            this.auditList = res.data.data;
          }

        })
      },
      //切换当前选择业务表
      tabMenu(item,index) {
        this.currentIndex = index;
        this.tableId = item.id;
        this.getByTableIdAuitList();
      },
      goEdit(v){
        this.$router.push({
          path:"/process_manage/edit",
          query:{
            id:v
          }
        })
      },
      goAdd(v){
        this.$router.push({
          path:"/process_manage/conf",
          query:{
            id:v
          }
        })
      },
      /**
       * 方法描述
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      findByTableTypeId(id) {
        this.axios.get('/HiQuality/table/findByTableTypeId', {
          params: {
            tableTypeId: this.tableTypeId
          }
        }).then((res) => {
          this.businessList = res.data.data;
        })
      },
      //获取下拉菜单信息
      getDownMenu() {
        this.axios.get('/HiQuality/tableType/findAll').then((res) => {
          this.downList = res.data.data;
          this.tableTypeId = this.downList[0].id;
        })
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

  .nav {
    height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    box-sizing: border-box;
  }


  .list {
    border: none;
  }

  .list-item{
    border: 1px solid #cccccc;
    border-bottom: none;
  }

  .list-item:last-child{
    border-bottom: 1px solid #cccccc;
  }

  .nav-left, .nav-right {
    width: 130px;
  }

  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .panel{
    padding: 0px 10px;
  }

  .panel-icon{
    margin-right: 20px;
    font-size: 20px;
    color: #616161;
  }

  .panel-item{
    margin-bottom: 40px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .active-item{
    background: #0bb1bf;
    color: white;
  }

  .list-item-center{
    padding-right: 10px;
  }
</style>
