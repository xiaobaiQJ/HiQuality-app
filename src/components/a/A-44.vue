<template>
    <div class="A44 text-center main-a">
      <p class="top-name-p width-654">A-44</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔西南州兴义环城高速公路</p>
      <h3>最终支付证书</h3>
      <div class="bot-hint-p width-654">
        <div class="content1">
          <div>第<input type="text" class="width-30" v-model="obj.m1">合同段 起讫桩号：<input type="text" class="input-200" v-model="obj.m6">
          <div class="block display-lnl height-25 input-100 ">
            <el-date-picker class="input-80"
                            size="mini"
                            v-model="obj.m2" type="date"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd"
                            placeholder="年   月   日">
            </el-date-picker>
          </div>
            至
            <div class="block display-lnl height-25 input-100 mar-left-30px">
              <el-date-picker class="input-80"
                              size="mini"
                              v-model="obj.m3" type="date"
                              format="yyyy年MM月dd日"
                              value-format="yyyy-MM-dd"
                              placeholder="年   月   日">
              </el-date-picker>
            </div>
          </div>
          <p class="sub-input">编号：<input type="text" class="title-input input-105" v-model="obj.m4"></p>
          <p v-for="(val,index) in controlArr" :key="index" class="sub-input">
            <span>{{val.s1}}</span>
            <span>{{val.s2}}</span>
            <span>人民币元<input type="text" class="title-input height-20" v-model="val.s3"></span>
          </p>
          <p >16&nbsp;&nbsp;<em style="font-weight: bold;">······</em></p>
        </div>
        <div class="content2">
          <p >项目经理：<input type="text" v-model="obj.m5"></p>
          <p>驻地办驻地监理工程师：<input type="text" v-model="nameList1[1].fullName" disabled></p>
          <p> 总监办总监理工程师：<input type="text" v-model="nameList2[1].fullName" disabled></p>
          <p>项目法人代表：<input type="text" v-model="nameList3[1].fullName" disabled></p>
          <p align="right">
            <input type="text" class="title-input input-80" v-model="listDateArr3[0]">年
            <input type="text" class="title-input date-input" v-model="listDateArr3[1]" >月
            <input type="text" class="title-input date-input" v-model="listDateArr3[2]">日
          </p>
        </div>
        <div class="content3">
          <p> 注：最终支付证书的签发基本条件</p>
          <ul>
            <li>1、已获得全部工程的《工程缺陷责任终止证书》 </li>
            <li>2、返还剩余的保留金，退还银行保留金等证明 </li>
            <li>3、对有争议的项目进行协商，确定最终的处理方法 </li>
            <li>4、工程决算已审定、澄清、遗漏和重复。结算清单系列齐全、完整、正确、相互关系清晰 </li>
            <li>5、已处理完有关工程和合同方面的一切遗留事宜 </li>
            <li>6、由承包人提出申请，说明签发所具备的基本条件和各项组成的费用 </li>
          </ul>
        </div>
      </div>
      <div class="btn">
        <div class="add-btn sub-btn" :class="isAdd ? '' : 'disabled-btn' " @click="addData">添加</div>
        <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="getData">刷新</div>
        <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="updateData">修改</div>
        <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
      </div>
    </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
      name: "A-44",
      data() {
        return {
          isAdd: true,
          //rec
          rec:{
            recNo:'',
            tableId:4,
            contractId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
          controlArr:[],
          //主表
          obj: {
            subList:[]
          },
          id: '3',
          auditTypeIdArr:[25,21,1],
          nameList:[],
          nameList1:[{},{}],
          nameList2:[{},{}],
          nameList3:[{},{}],
          listDateArr3:[],

        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
            this.nameList.forEach((item,index)=>{
              if(item!='' && item!=undefined){
                if(item[1].auditTypeId==25){
                  this.nameList1 = item;
                }
                if(item[1].auditTypeId==21){
                  this.nameList2 = item;
                }
                if(item[1].auditTypeId==6){
                  this.nameList3 = item;
                  this.listDateArr3 = splitDate(this.nameList3[0].auditTime,'-');
                }
              }
            })
          }
        }
      },
      mounted() {
        this.getData();
      },
      methods: {
        setSubObj(){
          let nameValue = ['100-总则','200-土方工程','300-路面工程','400-桥梁工程','500-涵洞及土排水工程','600-防护工程','700-沿线设施','小计','工程变更','计日工','工程索赔','截止本期已完成的工程总值','净支付总额','价格调整','实际支付总额'];
          for(var i=0;i<nameValue.length;i++){
            let subObj = {"s1":i<9?"0"+(i+1):i+1,"s2":nameValue[i]};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/A44/findA44ById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId:this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
              this.isAdd = false;
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;
            }
          })
        },
        //插入
        addData() {
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/A44/saveA44", this.$qs.stringify({
            a44:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
              console.log("插入接口")
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },

        //修改
        updateData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/A44/updateA44', this.$qs.stringify({
            a4406:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/A44/deleteA44', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
            if (res.data.status == 200) {
              this.controlArr = [];
              this.obj = {subList:[]}
              this.isAdd = true;
              this.setSubObj();
            }
          })
        }
      }

    }
</script>

<style scoped>
.content1>p>span:nth-child(1){
  float: left;
  margin-right: 10px;
}
.content1>p>span:nth-child(2){
  float: left;
}
.content1>p>span:nth-child(3){
  float: right;
}
.sub-input input{
  text-align: center;
  height: 20px;
  position: relative;
  bottom: 5px;
  left: 3px;
}
.content1>p{
  clear: both;
  line-height: 25px;
}
  .content2{
    margin-top: 30px;
  }
.content2 p{
  line-height: 30px;
}
  .height-20{
    height: 20px;
  }
  .content3 p{
    line-height: 30px;
  }
.content3 li{
  line-height: 30px;
}
</style>
