<template>
  <div class="K2 text-center main-a">
    <p class="top-name-p width-663">K-02</p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路 </p>
    <h3>分部工程质量检验评定表 </h3>
    <div class="public-tilte flex-r margin-auto width-663">
      <div class="k2-title-p">
        <p>分部工程名称：<input type="text" class="input-230" v-model="info1.projectName" disabled></p>
        <p>所属单位工程：<input type="text" class="input-230" v-model="info1.projectName2" disabled></p>
        <p>所属建设项目（合同段）：<input type="text" class="input-230" v-model="info2.contractCode" disabled></p>
        <p>监理单位：<input type="text" class="input-230" v-model="info2.unitName2" disabled></p>
        <p>施工单位：<input type="text" class="input-230" v-model="info2.unitName" disabled></p>
      </div>
      <div>
        <p class="textarea-p">
          <span>工程部位：</span>
          <textarea cols="30" rows="3" class="input-195" v-model="info1.projPartsName" disabled placeholder="(桩号、墩台号、孔号)"></textarea>
        </p>
        <p class="textarea-p" style="margin-top: 5px;">
          <span>分部工程编号：</span>
          <textarea cols="30" rows="3" class="input-160" v-model="info1.projPartsCode" disabled></textarea>
        </p>
      </div>
    </div>
    <div align="center">
      <table border="1" cellspacing="0" cellpadding="0" class="public-tabel" width="674">
        <tr>
          <td width="444" colspan="3"><p align="center">分   项   工   程</p></td>
          <td width="92" rowspan="2"><p align="center">备  注 </p></td>
        </tr>
        <tr>
          <td width="168"><p align="center">分项工程编号 </p></td>
          <td width="340"><p align="center">分项工程名称 </p></td>
          <td width="76"><p align="center">质量等级 </p></td>
        </tr>
        <tr v-for="(val,index) in controlArr.slice((this.pageNo-1)*this.pageSize,this.pageNo*this.pageSize)"
            :key="index">
          <td width="168">
            <p><textarea cols="30" rows="2" v-model="val.projPartsCode" disabled></textarea></p>
            <!--<input type="text" v-model="val.projPartsCode" disabled>-->
          </td>
          <td width="340">
            <p><textarea cols="30" rows="2" v-model="val.projPartsName" disabled></textarea></p>
            <!--<input type="text" v-model="val.projPartsName" disabled>-->
          </td>
          <td width="76" valign="center">
            <p v-if="val.qualityGrade===0">不合格</p>
            <p v-if="val.qualityGrade===1">合格</p>
          </td>
          <td width="92">
            <p><input type="text" v-model="val.remark"></p>
            <!--<p><textarea cols="30" rows="2" v-model="val.remark"></textarea></p>-->
          </td>
        </tr>

        <tr>
          <td width="168"><p align="center">外观质量 </p></td>
          <td width="358" colspan="3"><input type="text" v-model="obj.apperanceQuality"></td>
        </tr>
        <tr>
          <td width="168"><p align="center">评定资料 </p></td>
          <td width="358" colspan="3"><input type="text" v-model="obj.evaluateDoc"></td>
        </tr>
        <tr>
          <td width="168"><p align="center">质量等级 </p></td>
          <td width="358" colspan="3" valign="center">
            <p v-if="obj.qualityGrade===0">不合格</p>
            <p v-if="obj.qualityGrade===1">合格</p>
          </td>
        </tr>
        <tr>
          <td width="168"><p align="center">评定意见 </p></td>
          <td width="358" colspan="3">
            <textarea rows="2" v-model="nameList1[0].auditOpinion" disabled></textarea>
          </td>
        </tr>
      </table>
    </div>
    <p class="bot-hint-p width-663">
      检验负责人：<input type="text" class="input-80" v-model="obj.inspectLeader">
      计算：<input type="text" class="input-80" v-model="obj.calculator">
      复核：<input type="text" class="input-80" v-model="obj.reviewer">
      <input type="text" v-model="dateArr[0]" class="date-input" disabled>年    
      <input type="text" v-model="dateArr[1]" class="input-20" disabled>月   
      <input type="text" v-model="dateArr[2]" class="input-20" disabled>日
    </p>
    <div class="paging bot-hint-p width-663">
      <el-pagination
        :page-sizes="[pageSize]"
        :current-page.sync="pageNo"
        :pager-count="5"
        background
        @current-change="changePageNo"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataSum">
      </el-pagination>
    </div>
    <div class="btn">
      <div class="add-btn sub-btn"
           :class="isAdd ? '' : 'disabled-btn' " @click="addData">
        添加
      </div>
      <div class=" refresh-btn hover"
           @click="refresh" v-show="$store.state.currentType==2">
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
    name: "K-2",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        //rec
        rec: {
          recNo: '',
          tableId: '',
          contractId: '',
          constDate: '',
          testDate: '',
          projPartsId: '',
          curStatus: 0,
          operUserId: 1
        },
        //分项集合(//当前显示数据集)
        subdivsionnalList: [],
        headerInfo: {}, //表头信息
        info1: {},
        info2: {},
        auditTypeIdArr: [26],
        nameList: [],
        nameList1: [{}, {}],
        dateArr: [],
        id: 9,     //K2表主表id
        dataSum: 0,   //数据总条数
        totalPage: 0,
        pageNo: 1, //当前页码数
        pageSize: 14, //每页显示条数

      }
    },
    created() {
      this.rec.projPartsId = this.$store.state.projPartsId;
      this.headerInfo = this.$store.state.k02;
      if (this.headerInfo.projDiv != '' && this.headerInfo.projDiv != null && this.headerInfo.projDiv != undefined) {
        this.info1 = this.headerInfo.projDiv;
      }
      if (this.headerInfo.obj.data != '' && this.headerInfo.obj.data != null && this.headerInfo.obj.data != undefined) {
        this.info2 = this.headerInfo.obj.data;
      }
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
    },
    computed: {
      getNameList: function () {
        return this.$store.state.nameList
      },
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
                this.dateArr = splitDate(this.nameList1[0].auditTime, '-');
              }
            }
          })
        }
      }
    },
    mounted() {
      if(this.$store.state.currentType==1){
        this.getProPartsList();
      }else {
        this.getData();
      }

    },
    methods: {
      //刷新方法
      refresh() {
        this.getProPartsList()
          console.log("分项集合刷新后的数据：************")
          console.log(this.subdivsionnalList)

        let arr = [];
        this.subdivsionnalList.forEach((item, index) => {
          /*console.log(item)
          console.log("---")*/
          console.log(this.subdivsionnalList)
          if(item.qualityGrade!=='' || item.qualityGrade!==undefined){
            //console.log("********")
            if(item.tableId === this.controlArr[index].tableId){

            }else{
              arr.push(item)
            }
          }

        })
        //console.log("刷新后的数组")
       // console.log(arr)
        //console.log("arr的数据：************" + JSON.stringify(arr))
        //console.log("K2从表集合刷新后的数据：************"+JSON.stringify(this.obj.subList))
      },
      //更换当前页码数
      changePageNo(currentPage) {

      },
      setSubObj() {
        if (this.subdivsionnalList.length > 0) {
          for (var i = 0; i < this.pageSize * this.totalPage; i++) {
            let subObj = this.subdivsionnalList[i];
            if (i >= this.dataSum) {
              subObj = {};
            }
            this.controlArr.push(subObj);
          }
        } else {
          for (var i = 0; i < 14; i++) {
            let subObj = {};
            this.controlArr.push(subObj);
          }
        }


      },
      //获取K2分项名称和编号的集合
      getProPartsList() {
        this.subdivsionnalList = [];
        //this.controlArr = [];
        this.axios.get('/HiQuality/k2/getByProjPartsId', {
          params: {
            proPartsId: this.$store.state.projPartsId
          }
        }).then(res => {
          console.log("分项查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.subdivsionnalList = res.data.data;
            this.totalPage = res.data.totalPage;
            this.dataSum = res.data.size;
          }

          this.setSubObj();

        })
        /*return new Promise(function (resolve, reject) {
          resolve('---执行完毕');
        })*/
      },
      //查询
      getData() {
        this.axios.get('/HiQuality//k2/findById', {
          params: {
            projPartsId: this.rec.projPartsId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            this.isAdd = false;
            this.dataSum = this.obj.subList.length;
            let arr = [];
            if (this.obj.subList.length > 0) {
              this.controlArr = [];
              this.obj.subList.forEach((item) => {
                arr.push(item);
              })
              this.controlArr = arr;
            }
          }

        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        console.log("K2插入的数据：----------" + JSON.stringify(this.obj))
        this.axios.post("/HiQuality/k2/save", this.$qs.stringify({
          bBtK2M: JSON.stringify(this.obj),
          rec: JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.id = res.data.id;
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
      },

      //修改
      updateData() {
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/k2/update', this.$qs.stringify({
          bBtK2M: JSON.stringify(this.obj),
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();

            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/k2/deleteById', {
          params: {
            id: this.id,
            pageNo: this.pageNo
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.isAdd = true;
            this.controlArr = [];
            this.obj = {subList: []}
            this.getProPartsList();
          }

        })
      }

    }

  }
</script>

<style scoped>
  .public-tilte > div:nth-child(1) {
    width: 60%;
  }

  .textarea-p > span {
    position: relative;
    bottom: 30px;
  }

  .k2-title-p > p {
    line-height: 17px;
  }

  .input-195 {
    width: 195px !important;
  }

  .refresh-btn {
    color: white;
    width: 100px;
    height: 30px;
    line-height: 30px;
    background-color: #1a9de3;
    border-radius: 20px;
    margin: 0 10px;
    z-index: 1000 !important;
  }
</style>
