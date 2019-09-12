<template>
  <div class="container">
    <header>
      <nav class="nav">

        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">工序控制</el-breadcrumb-item>
          <el-breadcrumb-item
            :to="{ path:'/procedure_control/process_list/index',
            query:{id:$route.query.id}}">
            工序列表
          </el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/procedure_control/index' }">附件列表</el-breadcrumb-item>
        </el-breadcrumb>
      </nav>
    </header>
    <main>
      <section>
        <div class="top-label">
          <strong>工程部位名称：</strong>{{$route.query.unitName}}
        </div>
        <div class="box-left">
          <div class=" box" v-if="$store.state.userLevel>=4">
            <el-input type="file" class="sub-file" size="mini" v-model="fileName"
                      style="opacity: 0;width: 420px !important;"/>
            <el-input type="text" v-model="fileName" class="myfile" size="mini"
                      style="border: none;width: 420px !important;"
                      placeholder="请选择文件"/>
            <el-button @click="addAccessory" size="mini">提交</el-button>
          </div>
          <!--          <div>
                      <el-input type="file" class="file"></el-input><i class="el-icon-upload main-color active-color up"></i>
                      <el-button @click="addAccessory"  size="small">提交</el-button>
                    </div>-->
          <div class="text-right" style="width: 100%">
            <i class="iconfont icons" @click="show = false">&#xe6bf;</i>
            <i class="iconfont icons" @click="show = true">&#xe610;</i>
          </div>
        </div>
      </section>
      <section v-show="show">
        <div class="panel">
          <div class="panel-item" v-for="(val,index) in accessoryList" v-if="accessoryList.length" :key="index">
            <div class="panel-item-left">
              <div>{{val.fileName}}</div>
              <div>上传时间：{{val.uploadDate}}</div>
            </div>
            <div class="panel-item-right">
              <i class="el-icon-upload"></i>
              <i class="el-icon-remove"
                 v-if="$store.state.userLevel>=4"
                 @click="delAccessory(val.id)">
              </i>
            </div>
          </div>
        </div>
      </section>
      <section v-show="!show">
        <el-row class="picture-list" v-if="accessoryList.length>0">

          <el-col :span="4" v-for="(item,index) in accessoryList" :key="index">

            <div
              class="picture-item"
              v-if="checkType(item.fileName)==1"
            >
              <img :src="joinPath(item.savePath)" width="100%" height="100%">
            </div>
            <div class="picture-item" v-if="checkType(item.fileName)==2">
              <i class="iconfont" style="font-size:110px">&#xe750;</i>
            </div>
            <div class="picture-item" v-if="checkType(item.fileName)==3">
              <i class="iconfont" style="font-size:110px">&#xe62c;</i>
            </div>

          </el-col>
        </el-row>
        <div v-else>
          <hr>
        </div>
      </section>

    </main>
  </div>
</template>

<script>
  import {ImagePreview} from 'vant';

  export default {
    name: "AccessoryIndex",
    data() {
      return {
        ads: "http://192.168.1.45:8080/HiQuality/uploadFiles/attachment/9a49fcf8bc594fef905f4fbfa25d96b2.jpg",
        show: false,
        accessoryList: [],//附件列表
        fileName: '',
        formData: ''
        /* myFile:""//上传文件*/
      }
    },
    created() {

      this.getAccessory();
    },
    methods: {
      showImg() {
        let arr = [];
        /*  this.accessoryList.forEach((item)=>{
            let temp = this.joinPath(item.savePath);
            arr.push()
          })
          ImagePreview(arr);*/
      },
      /**
       * 根据文件名后缀返回对应文件图标
       * @method checkType
       * @param {fileName} 文件的全名
       * @return {Number} 1/图片2/
       */
      checkType(fileName) {
        let suffix = fileName.substring(fileName.lastIndexOf("."), fileName.length);
        switch (suffix) {
          case ".jpg":
            return 1
            break;
          case ".png":

            return 1
            break;
          case ".png":
            return 1
            break;
          case ".gif":
            return 1
            break;
          case ".bmp":
            return 1
            break;
          case ".psd":
            return 1
            break;
          case ".ai":
            return 1
            break;
          case ".xlsx":
            return 2
            break;
          case ".xls":
            return 2
            break;
          default:
            return 3
            break;
        }
        /*  if (suffix == ".jpg" || suffix == ".png" || suffix == ".gif" || suffix == "bmp" || suffix == "psd" || suffix == "ai") {
            return true
          } else {
            return false
          }*/
      },
      /**
       * 拼接路径
       * @method 方法名
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      joinPath(path) {
        let filePath = this.$store.state.filePath + path
        console.log(filePath)
        return filePath
      },
      /**
       * 根据id删除附件列表
       * @method delAccessory
       * @param {id} 附件id
       * @return {无}
       */
      delAccessory(id) {
        let arr = [];
        arr.push(id)
        this.$confirm('确定要删除该附件吗！', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.axios.get("/HiQuality/attachment/deleteAttachment", {
            params: {
              ids: arr + ''
            }
          }).then((res) => {
            console.log("根据id删除附件列表");
            this.$tost.message('del')
            console.log(res);
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.getAccessory();
          })

        })

      },
      /**
       * 获取附件列表
       * @method getAccessory
       * @param {tableId} 业务表id
       * @return {无}
       */
      getAccessory() {
        this.axios.get("/HiQuality/attachment/getAttachmentByTableId", {
          params: {
            tableId: this.$route.query.tableId
          }
        }).then((res) => {
          console.log("获取附件列表")
          console.log(res)
          if (res.data.status != 400) {
            this.accessoryList = res.data.data

          }
        })
      },
      /**
       * 新增附件列表
       * @method addAccessory
       * @param {tableId} 业务表id
       * @param {projectId} 工程部位id
       * @param {file} 上传文件
       * @return {响应参数}  "status":  "  "  //200成功      400失败
       */
      addAccessory() {
        this.formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
        this.formData.append('file', document.querySelector('input[type=file]').files[0]);
        this.formData.append('tableId', this.$route.query.tableId);
        this.formData.append('projectId', this.$route.query.id);
        this.axios.post("/HiQuality/attachment/uploadAttachment", this.formData).then((res) => {
          console.log("新增附件列表")
          console.log(res)
          if (res.data.status == 200) {
            this.$tost.message('add')
            this.getAccessory()
          }
        })

      }
    }
  }
</script>

<style scoped>
  .container {
    width: 90%;
    margin: 0 auto;
    padding: 0px 20px;
  }

  .nav {
    margin: 10px 0px 20px 0px !important;
  }

  .top-label {
    text-align: left;
  }

  .box-left {
    text-align: right;

    margin: 40px 0px 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .up {
    font-size: 22px;
    margin-left: 10px;
  }

  .file {
    border: 1px solid #ccc
  }

  .panel {
    padding: 0px 40px;
    border-top: 1px solid #cccccc;
  }

  .panel-item {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    color: #616161;
  }

  .panel-item-left {
    text-align: left;
  }

  .panel-item-right {
    width: 60px;
    display: flex;
    justify-content: space-between;

  }

  .panel-item-right i {
    font-size: 16px;
    color: #147AB0;
  }

  .icons {
    display: inline-block;
    text-align: center;
    transition: .3s linear all;
    width: 30px;
  }

  .icons:hover {
    cursor: pointer;
    color: #147AB0;
  }

  .picture-list {
    border: 1px solid #cccccc;

    padding: 10px 10px;
    /*  display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;*/
  }


  .picture-item {
    height: 120px;
    margin: 12px;
  }

  .picture-item img {
    border: 1px solid #cccccc;
  }

  .box {
    text-align: left;
    width: 100%;
    position: relative;
  }

  /*  .box input {
      width: 100px;
    }*/

  .sub-file {
    position: absolute;
    width: 100%;
    opacity: 0;
    height: 100%;
    z-index: 1000;
  }


  .el-input {
    width: 200px !important;
    border: 1px solid #cccccc;
  }

  .btn-box {
    margin-top: 10px;
  }


</style>
