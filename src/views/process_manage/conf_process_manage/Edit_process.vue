/**
* @author bai tao
* @date 2019/6/28 0028
* @Description:配置审核流程
*/
<template>
  <div class="con">
    <main>
      <div>

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

            <div class="list" :style="{height : $store.state.deviceStyle-170+'px'}" v-if="businessList.length">
              <div class="list-item list-hover" v-for="(item,index) in businessList" :key="index"
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
          <el-col :span="7" v-show="tableId!=''">
            <div class="nav">
              <div class="nav-left hover">
                选择审核角色
              </div>


            </div>

            <div class="list" :style="{height : $store.state.deviceStyle-170+'px'}" v-if="auditList.length">
              <div class="list-item" v-for="(item,index) in auditList" :key="index">
                <div class="list-item-left">
                  <i class="iconfont">&#xe639;</i>
                </div>
                <div class="list-item-center">
                  {{item.typeName}}
                </div>
                <div class="list-item-right">
                  <van-checkbox v-model="checkedArr[index]"></van-checkbox>
                </div>
              </div>
            </div>


          </el-col>
          <el-col :span="7" v-if="auditProcessList.length">
            <div class="nav">
              <el-row style="width: 100%">
                <el-col :span="12">
                  审核流程角色列表
                </el-col>
                <el-col :span="12" class="text-right">
                  <span class=" icon-hover" @click="moveUP">
                    <i class="iconfont icons">&#xe633;</i>
                  </span>&nbsp;
                  <span class="icon-hover" @click="moveDown">
                    <i class="iconfont  icons">&#xe62a;</i>

                  </span>
                </el-col>
              </el-row>


            </div>
            <div class="list comit-list" :style="{height : $store.state.deviceStyle-210+'px'}">
              <div class="list-item"
                   @click="onTabAduit(index)"
                   v-for="(item,index) in auditProcessList" :key="index"
                   :class="enterIndex == index ? 'active-item' : '' "
              >
                <div class="list-item-left">
                  <i class="iconfont">&#xe639;</i>
                </div>
                <div class="list-item-center">
                  {{item.typeName}}
                </div>
                <div class="list-item-right">
                  <div class="list-checkbox" @click="delList(item)">
                    <i class="iconfont">&#xe6b0;</i>
                  </div>
                </div>
              </div>
            </div>
            <div class="submit-btn btn-hover" @click="saveAudit">保存</div>
          </el-col>

        </el-row>
      </div>

    </main>
  </div>
</template>

<script>
  import {Checkbox} from 'vant'
  import {swapItems} from "../../../utils/utils";

  export default {
    name: "Edit_process",
    components: {
      [Checkbox.name]: Checkbox
    },
    created() {
      this.stdProjectId = this.$route.query.id;
      this.getAudit();
      this.getDownMenu();
    },
    mounted() {

    },
    watch: {
      //监听选中控制器变化
      checkedArr: function () {
        let arr = [];
        this.checkedArr.forEach((item, index) => {
          if (item == true) {
            arr.push(this.auditList[index])
          }
        })

        this.auditProcessList = arr;
      },
      tableTypeId: function (id) {
        console.log(id)
        this.currentIndex = 9999;
        this.tableId = '';
        this.initControl();
        this.findByTableTypeId(id);
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
        isOK: false,
        auditList: [],//审核流程角色列表
        tableList: [],
        checkedArr: [],
        tableId: '',
        enterIndex: 9999,//审核流程角色列表下标
        auditProcessList: [],//审核流程角色列表信息
        stdProjectId: '',//单位工程id
        currentIndex: 9999,
        downList: [],//顶部业务下拉菜单
        businessList: [],//业务数据
        businessControlList: [],//业务选中控制
        tableTypeId: '',//当前选中业务表id

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
      //切换当前选中下标
      onTabAduit(index) {
        this.enterIndex = index;
      },
      //上移
      moveUP() {
        if (this.enterIndex == 9999) {
          this.$message({
            message: '请先选择角色！',
            type: 'warning'
          });
          return false
        }
        if (this.enterIndex == 0) {
          this.$message({
            message: '别点了。。。已经到头了！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.auditProcessList, this.enterIndex, this.enterIndex - 1);
        this.enterIndex -= 1;
      },
      //下移
      moveDown() {
        if (this.enterIndex == 9999) {
          this.$message({
            message: '请先选择角色！',
            type: 'warning'
          });
          return false
        }
        if (this.enterIndex == this.auditProcessList.length - 1) {
          this.$message({
            message: '我是有底线的！',
            type: 'warning'
          });
          return false
        }
        swapItems(this.auditProcessList, this.enterIndex, this.enterIndex + 1);
        this.enterIndex += 1;
      },
      //保存审计流程数据
      saveAudit() {
        let arr = []
        this.auditProcessList.forEach((item) => {
          arr.push(item.id);
        })
        this.axios.get("/HiQuality/auditFlow/deleteByTableId", {
          params: {
            tableId: this.tableId
          }
        }).then((res) => {
          console.log("删除")
          console.log(res.data)
          this.axios.post("/HiQuality/auditFlow/saveAuditFlow", this.$qs.stringify({
            tableId: this.tableId,
            auditorTypeIds: arr.join(',')
          })).then((res) => {
            if (res.data.status == 200) {
              this.$tost.message('save');
              this.$router.push('/process_manage/index')
            }
          })
        })
      },
      //根据tablei id获取对应审核人集合
      getByTableIdAuitList() {
        this.axios.get("/HiQuality/auditorType/findByTableId", {
          params: {
            tableId: this.$route.query.id
          }
        }).then((res) => {
          console.log("根据tablei id获取对应审核人集合")
          console.log(res)
          if (res.data.data.length) {
            res.data.data.forEach((item) => {
              this.auditProcessList.push(item)
            })
            this.initAuidtUser();
          }

        })
      },
      //修改时初始化审核流程角色列表
      initAuidtUser() {
        this.auditList.forEach((item, index) => {
          let id = ''
          if (index < this.auditProcessList.length) {
            id = this.auditProcessList[index].id
            if (item.id == id) {
              this.$set(this.checkedArr, index, true)
            }
          }
        })
      },
      //删除右侧缓存菜单
      delList(obj) {
        let delIndex = '';
        this.auditList.forEach((item, index) => {
          if (item.id == obj.id) {
            delIndex = index
          }
        })
        this.$set(this.checkedArr, delIndex, false)
      },
      //切换当前选择业务表
      tabMenu(item, index) {
        this.currentIndex = index;
        this.tableId = item.id;
        this.initControl();
        this.$router.replace("/process_manage/edit?id=" + item.id)
        this.getByTableIdAuitList();
      },
      //初始化复选框
      initControl() {
        this.checkedArr = [];
        this.auditList.forEach((item) => {
          this.checkedArr.push(false)
        })
      },
      //查询审核人类型信息
      getAudit() {
        console.log("查询")
        this.axios.get('/HiQuality/auditorType/findAll').then((res) => {
          console.log(res)
          this.auditList = res.data.data;
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
          if (this.$route.query.id > 0) {
            this.tableId = this.$route.query.id;
            this.getByTableIdAuitList();
            this.businessList.forEach((item, index) => {
              if (item.id == this.$route.query.id) {
                this.currentIndex = index
              }

            })
          }
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
    height: 40px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    box-sizing: border-box;
  }


  .list {
    border: none;
  }

  .list-item {
    border: 1px solid #cccccc;
    border-bottom: none;
  }

  .list-hover:hover {
    background: #0bb1bf;
    color: white;
    cursor: pointer;
  }

  .list-item:first-child {
    border-top: 1px solid #cccccc;
  }

  .list-item:last-child {
    border-bottom: 1px solid #cccccc;
  }

  .nav-left, .nav-right {
    width: 130px;
  }

  .icons{
    font-size: 16px;
    margin-right: 5px;
  }



  .list-item-left {
    width: 80px;
  }

  .active-item {
    background: #0bb1bf;
    color: white;
  }

  .comit-list {
    position: relative;
  }

  .comit-list .list-item:last-child {
    border-bottom: 1px solid #cccccc;

  }

  .submit-btn {
    position: absolute;
    bottom: 0px;
    right: 10px;
  }

  .nav-right {
    display: inline-block;
  }

  .icon-hover:hover{
    cursor: pointer;
  }

  .icon-hover:hover i{
    color: chocolate;
  }

  .icon-hover:hover{
    color: chocolate;
  }
</style>
