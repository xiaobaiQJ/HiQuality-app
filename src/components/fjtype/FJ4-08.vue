<template>
    <div class="text-center main-fj3 lengthways-a">
      <p >贵州高速公路建设项目 </p>
      <p>黔西南州兴义环城高速公路 </p>
      <p align="center">建筑工程沉降观测点、基准点 <br />专用水准点平面位置布置图</p>
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
        <tr>
          <td width="640" valign="top"><p><strong>&nbsp;</strong></p>
            <div class="text-center ">
              <!--<div v-if="obj.m12!=''" style="height: 170px">
                <img :src="$common.joinPath(obj.m12)" height="164px" width="80%">
              </div>-->
              <!--    <div style="height: 168px; border: 1px solid #ccc">
                    <el-input type="file" style="width: 100%;h" v-model="fileName" class="myfile" id="file" size="mini" placeholder="请选择文件"/>
                  </div>-->
              <div v-if="obj.m1!=undefined">
                <img :src="$common.joinPath(obj.m1)" class="avatar">
              </div>

              <el-upload
                v-else
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon "></i>
              </el-upload>
            </div>
          <!--  <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong><input type="text" v-model="obj.m1"></strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p><strong>&nbsp;</strong></p></td>-->
          </td>
        </tr>
        <tr>
          <td width="640" valign="top"><p>施工单位测量员： <input type="text" v-model="obj.m2"></p>
            日     期： <div class="block">
              <div class="block">
                <el-date-picker v-model="obj.m3" type="date" size="mini"  value-format="yyyy-MM-dd"></el-date-picker>
              </div>
            </div></td>
        </tr>
        <tr>
          <td width="640" valign="top"><p>驻地监理工程师： <input type="text" v-model="obj.m4"></p>
            日  期： <div class="block">
              <el-date-picker v-model="obj.m5" type="date" size="mini"  value-format="yyyy-MM-dd"></el-date-picker>
            </div></td>
        </tr>
      </table>
      <div class="btn">
        <div class="add-btn sub-btn"
             :class="isAdd ? '' : 'disabled-btn' " @click="addData">
          添加
        </div>
        <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' "
             @click="getData">
          刷新
        </div>
        <div class="update-btn sub-btn"
             :class="!isAdd ? '' : 'disabled-btn' "
             @click="updateData">修改
        </div>
        <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
      </div>
    </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "FJ4-08",
      data() {
        return {
          dialogImageUrl: '',
          dialogVisible: false,
          model: false,
          isAdd: true,
          obj: {},
          //rec表
          rec: {
            recNo: '',
            tableId: '',
            contracId: 0,
            constDate: '',
            testDate: '',
            projPartsId: '1',
            curStatus: 0,
            operUserId: 1
          },
          limit: 1,
          imageUrl: '',
          upload: "",//文件上传字段
          fileName: "",//上传文件名
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          /*  m15DataArr:[],
            headerInfo:{}, //表头信息*/
          id:''
        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        /* //获取表头信息
         let obj = this.$store.state.unitTable;
         if(obj.data!='' && obj.data!=null && obj.data!=undefined){
           this.headerInfo = obj.data;
         }*/
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        this.$publicFun.getRecInfo()
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        },
        getRecObj: function () {
          return this.$store.state.recInfo
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
            this.nameList.forEach((item,index)=>{
              if(item!='' && item!=undefined){
                if(item[1].auditTypeId==39){
                  this.nameList1 = item;
                  this.m15DataArr = splitDate(this.nameList1[0].auditTime,'-');
                }
              }
            })
          }
        },
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      mounted(){
        this.getData();
      },
      methods: {
        /**
         * 文件上传成功时
         * @method handleAvatarSuccess
         * @param {object} res 参数说明
         * @param {object} file 当前上传文件对象
         * @return {返回值类型} 返回值说明
         */
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw)
          this.upload = file.raw;
        },
        /**
         * 文件上传之前
         * @method beforeAvatarUpload
         * @param {file} file 当前上传对象
         * @return {返回值类型} 返回值说明
         */
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isGIF = file.type === 'image/gif';
          const isPNG = file.type === 'image/png';
          const isBMP = file.type === 'image/bmp';
          const isLt2M = file.size / 1024 / 1024 < 2;
          if (!isJPG && !isGIF && !isPNG && !isBMP) {
            this.$tost.print('上传图片必须是JPG/GIF/PNG/BMP 格式!', 'warning');
          }
          if (!isLt2M) {
            this.$tost.print('上传图片大小不能超过 2MB!', 'warning');
          }
          return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
        },


        //查询
        getData(){
          this.axios.get('/HiQuality/fj408/findFj408ById',{
            params:{
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res=> {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
              this.isAdd = false
            }
          })
        },

        //新增
        addData() {
          this.axios.post('/HiQuality/fj408/saveFj408',
            this.$qs.stringify({
              fj408: JSON.stringify(this.obj),
              rec: JSON.stringify(this.rec)
            })).then(res => {
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
        },
        //修改
        updateData() {
          this.axios.post('/HiQuality/fj408/updateFj408', this.$qs.stringify({
            fj408: JSON.stringify(this.obj)
          })).then(res => {
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/fj408/deleteFj403', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
          })
        }

      }
    }
</script>

<style scoped>

</style>
