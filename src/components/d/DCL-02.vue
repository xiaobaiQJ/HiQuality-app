<template>
  <div class="DCL-02 text-center main ">
    <p class="top-name-p width-1086">DCL-02</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <p><strong>施工放样测量记录表</strong></p>
    <div class="text-left width-1086">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left width-1086">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" width="1095" class="public-tabel table-tr-height-30">
        <tr>
          <td width="64" valign="center"><p align="center">项目名称</p></td>
          <td width="407" valign="center" colspan="7"><p><input type="text" v-model="obj.m1"></p></td>
          <td width="260" valign="center" colspan="3"><p align="center">桩号及部位 </p></td>
          <td width="224" valign="center" colspan="3"><p><input type="text" v-model="obj.m2"></p></td>
        </tr>
        <tr>
          <td width="64" valign="center" rowspan="2"><p align="center">测点桩号 </p></td>
          <td width="147" valign="center" colspan="2"><p align="center">设计坐标 </p></td>
          <td width="147" valign="center" colspan="2"><p align="center">实测坐标 </p></td>
          <td width="229" valign="center" colspan="5"><p align="center">偏差（mm） </p></td>
          <td width="83" valign="center" rowspan="2"><p align="center">设计高程 <br/>
            (m) </p></td>
          <td width="82" valign="center" rowspan="2"><p align="center">实测高程 <br/>
            (m) </p></td>
          <td width="88" valign="center" rowspan="2"><p align="center">偏差（mm） </p></td>
          <td width="84" valign="center" rowspan="2"><p align="center">备注 </p></td>
        </tr>
        <tr>
          <td width="103" valign="center"><p align="center">X </p></td>
          <td width="104" valign="center"><p align="center">Y </p></td>
          <td width="110" valign="center"><p align="center">X </p></td>
          <td width="107" valign="center"><p align="center">Y </p></td>
          <td width="62" valign="center" colspan="2"><p align="center">&#9651;X </p></td>
          <td width="60" valign="center" colspan="2"><p align="center">&#9651;Y </p></td>
          <td width="107" valign="center">
            <p><img src="../../assets/files/imgs/D/DCL-01_wps1.png" width="102" height="24"/></p>
          </td>
        </tr>
        <tr v-for="(val,index) in controlArr" :key="index">
          <td width="64" valign="center"><input type="text" v-model="val.s1"></td>
          <td width="73" valign="center"><input type="text" v-model="val.s2"></td>
          <td width="74" valign="center"><input type="text" v-model="val.s3"></td>
          <td width="70" valign="center"><input type="text" v-model="val.s4"></td>
          <td width="77" valign="center"><input type="text" v-model="val.s5"></td>
          <td width="62" valign="center" colspan="2"><input type="text" v-model="val.s6"></td>
          <td width="60" valign="center" colspan="2"><input type="text" v-model="val.s7"></td>
          <td width="107" valign="center"><input type="text" v-model="val.s8"></td>
          <td width="83" valign="center"><input type="text" v-model="val.s9"></td>
          <td width="82" valign="center"><input type="text" v-model="val.s10"></td>
          <td width="78" valign="center"><input type="text" v-model="val.s11"></td>
          <td width="84" valign="center"><input type="text" v-model="val.s12"></td>
        </tr>
        <tr class="ad-textarea">
          <td width="64" valign="center" rowspan="4"><p align="center">计算单位 <br/>
            （m） </p></td>
          <td width="346" valign="center" colspan="5">
            <p class="t-left">测站点坐标 X=<input type="text" v-model="obj.m3" class="input-105 t-left"> Y=<input type="text"
                                                                                                             v-model="obj.m4"
                                                                                                             class="input-105 t-left">
              Z=<input type="text" v-model="obj.m5" class="input-105 t-left"></p>
          </td>
          <td width="229" valign="top" colspan="4" rowspan="4">
            <p class="t-left">仪器型号：<textarea name="" cols="50" rows="12" v-model="obj.m11"></textarea></p>
          </td>
          <td width="318" valign="top" colspan="4" rowspan="4">
            <p>示意图：</p>
            <div class="text-center ">
              <!--<div v-if="obj.m12!=''" style="height: 170px">
                <img :src="$common.joinPath(obj.m12)" height="164px" width="80%">
              </div>-->
              <!--    <div style="height: 168px; border: 1px solid #ccc">
                    <el-input type="file" style="width: 100%;h" v-model="fileName" class="myfile" id="file" size="mini" placeholder="请选择文件"/>
                  </div>-->
              <div v-if="obj.m12!=undefined">
                <img :src="$common.joinPath(obj.m12)" class="avatar">
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
          </td>
        </tr>
        <tr class="tr-height">
          <td width="346" valign="center" colspan="5">
            <p class="t-left">后视点坐标 X=<input type="text" v-model="obj.m6" class="input-105 t-left"> Y=<input type="text"
                                                                                                             v-model="obj.m7"
                                                                                                             class="input-105 t-left">
              Z=<input type="text" v-model="obj.m8" class="input-105 t-left"></p>
          </td>
        </tr>
        <tr class="tr-height">
          <td width="346" valign="center" colspan="5">
            <p class="t-left">距&nbsp;&nbsp;离   AB=<input type="text" v-model="obj.m9" class="input-200 t-left"></p>
          </td>
        </tr>
        <tr class="tr-height">
          <td width="346" valign="center" colspan="5">
            <p class="t-left">实测距离   AB=<input type="text" v-model="obj.m10" class="input-200 t-left"></p>
          </td>
        </tr>
      </table>
    </div>
    <div class="bot-hint-p width-1086">
      测 量：<input type="text" v-model="obj.m13" class="input-200">
      复 核：<input type="text" v-model="obj.m14" class="input-200">
      监理工程师：<input type="text" v-model="nameList1[1].fullName" class="input-210" disabled>
      日 期：<input type="text" v-model="nameList1[0].auditTime" disabled>
    </div>
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
  export default {
    name: "DCL-02",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        model: false,
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        //rec表
        rec: {
          id: '',
          recNo: '',
          tableId: 31,
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
        headerInfo: {}, //表头信息
        nameList: [], //流程人签字栏数据
        auditTypeIdArr: [26],
        nameList1: [{}, {}],
        id: '1'

      }
    },
    created() {
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      //获取表头信息
      let obj = this.$store.state.unitTable;
      if (obj.data != '' && obj.data != null && obj.data != undefined) {
        this.headerInfo = obj.data;
      }
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      //获取rec记录信息
      this.$publicFun.getRecInfo();
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
        if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
          this.nameList.forEach((item, index) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 26) {
                this.nameList1 = item;
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
    mounted() {
      this.setSubObj();
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
      setSubObj() {
        for (var i = 0; i < 8; i++) {
          let subObj = {};
          this.controlArr.push(subObj);
        }
      },
      //查询
      getData() {
        this.axios.get('/HiQuality/dcl2/findById', {
          params: {
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data.main;
            this.obj.subList = res.data.data.sub;
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length > 0) {
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
            this.isAdd = false;

          }
        })
      },
      //新增
      addData() {
        this.obj.subList = this.controlArr;
        this.formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
        this.formData.append('upload', this.upload);
        this.formData.append('BBtDcl2M', JSON.stringify(this.obj));
        this.formData.append('BQcRecInfo', JSON.stringify(this.rec));
        this.axios.post("/HiQuality/dcl2/save", this.formData).then((res) => {
          console.log("新增接口")
          console.log(res)
          if (res.data.status == 200) {
            this.$tost.add();
            this.$skip.skipProcess();
          }
        })
      },
      //修改
      updateData() {
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/dcl2/update', this.$qs.stringify({
          BBtDcl2M: JSON.stringify(this.obj)
        }))
          .then(res => {
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
        this.axios.get('/HiQuality/dcl2/deleteById', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = true;
            this.obj = {subList: []};
            this.controlArr = [];
            this.setSubObj();
          }
        })
      }

    }
  }
</script>

<style scoped>
  .el-upload-list el-upload-list--picture-card {
    display: none;
  }

  .avatar-uploader .el-upload {
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar {
    width: 300px;
    height: 130px;
    line-height: 130px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    border: 1px solid #cccccc;
    width: 300px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 130px;
    line-height: 130px;
    text-align: center;
  }
  .tr-height p {
    padding-right: 10px;
  }
</style>
