<template>
  <div class="AQ-13 text-center">
    <h3>
      <img width="37" height="32" src="../../assets/files/imgs/aq/clip_image002.jpg" class="logo-img"/>
      贵州省公路工程集团有限公司
    </h3>
    <h2>危 险 源 辨 识 与 风 险 评 价    结 果 一 览 表</h2>
    <div class="t-left margin-auto width-1125">
      <p>项目名称：<input type="text" v-model="obj.m5"></p>
    </div>
    <table cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td rowspan="2" width="40">序号</td>
        <td rowspan="2" width="166">作业活动、场所</td>
        <td rowspan="2" width="68">危险因素</td>
        <td rowspan="2" width="71">涉及人员</td>
        <td rowspan="2" width="102">可能导致的事故</td>
        <td colspan="3" width="116">时态</td>
        <td rowspan="2" width="71">判别依据Ⅰ—Ⅴ</td>
        <td colspan="4" width="136">作业条件危险性评价</td>
        <td rowspan="2" width="42">危险级别</td>
        <td rowspan="2" width="44">危险程度</td>
        <td rowspan="2" width="141">控制措施</td>
        <td rowspan="2" width="90">开始时间</td>
        <td rowspan="2" width="70">结束时间</td>
        <td rowspan="2" width="70">辨识人员</td>
        <td rowspan="2" width="66">备注</td>
      </tr>
      <tr>
        <td width="36">过去</td>
        <td width="39">现在</td>
        <td width="41">将来</td>
        <td width="34">L</td>
        <td width="34">E</td>
        <td width="34">C</td>
        <td width="34">D</td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="40">{{siteArr[index].no}}</td>
        <td width="166">{{siteArr[index].name}}</td>
        <td width="68"><input type="text" v-model="val.s1"></td>
        <td width="71"><input type="text" v-model="val.s2"></td>
        <td width="102"><input type="text" v-model="val.s3"></td>
        <td width="36"><input type="text" v-model="val.s4"></td>
        <td width="39"><input type="text" v-model="val.s5"></td>
        <td width="41"><input type="text" v-model="val.s6"></td>
        <td width="71"><input type="text" v-model="val.s7"></td>
        <td width="34"><input type="text" v-model="val.s8"></td>
        <td width="34"><input type="text" v-model="val.s9"></td>
        <td width="34"><input type="text" v-model="val.s10"></td>
        <td width="34"><input type="text" v-model="val.s11"></td>
        <td width="42"><input type="text" v-model="val.s12"></td>
        <td width="44"><input type="text" v-model="val.s13"></td>
        <td width="141"><input type="text" v-model="val.s14"></td>
        <td width="90"><input type="text" v-model="val.s15"></td>
        <td width="70"><input type="text" v-model="val.s16"></td>
        <td width="70"><input type="text" v-model="val.s17"></td>
        <td width="66"><input type="text" v-model="val.s18"></td>
      </tr>
      <tr>
        <td width="40">　</td>
        <td width="166">　</td>
        <td width="68">　</td>
        <td width="71">　</td>
        <td width="102">　</td>
        <td width="36">　</td>
        <td width="39">　</td>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="34">　</td>
        <td width="34">　</td>
        <td width="34">　</td>
        <td width="34">　</td>
        <td width="42">　</td>
        <td width="44">　</td>
        <td width="141">　</td>
        <td width="90">　</td>
        <td width="70">　</td>
        <td width="70">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td colspan="20" width="1293"><br/>填表说明：1、作业活动、场所必须按照项目部工程管理部门划分的分部分项工程填写；2、时态根据事故可能发生的时间判别；3、判别依据：    Ⅰ、不符合法律法规及其他要求；Ⅱ、曾发生过事故，仍未采取有效控制措施；Ⅲ、相关方合理抱怨或要求；Ⅳ    、直接观察到的危险；Ⅴ、定量评价（LEC)；4、控制措施：a、制定目标、指标管理方案；b、制定管理程序；c、教育培训、技术交底、风险告知；d、制定应急预案；e、加强现场监督检查；f、落实审批后的控制措施；5、开始时间和结束时间：按工程实际开始和结束时间填写，格式XX年XX月XX日；6、业主如果有特殊要求，在此表格基础上可增加内容。<br/><br/>
        </td>
      </tr>
    </table>
      <p class="bot-hint-p width-1125">批准人（项目经理）: <input type="text" v-model="obj.m1" class="input-80"> 审核人（项目分管安全领导）:<input type="text" v-model="obj.m2" class="input-80"> 复核人（项目安全负责人或技安科科长）：<input type="text" v-model="obj.m3" class="input-80">汇总人：<input type="text" v-model="obj.m4" class="input-80"></p>

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
    name: "AQ-13",
    data() {
      return {
        isAdd: true,
        siteArr:[
          {no:1,name:'XX桥左幅XX号墩X号孔桩'},
          {no:2,name:'XX隧道进口左洞洞门'},
          {no:3,name:'XX预制场'},
          {no:4,name:'XX钢筋加工房'}
        ],
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
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
        id: '1',
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
    },
    mounted() {
      for(var i=0;i<4;i++){
        let subObj = {};
        this.controlArr.push(subObj);
      }
      this.getData();
    },
    methods: {
      //查询
      getData() {
        this.axios.get('/HiQuality/Aq13/findAq13ById', {
          params: {
            projPartsId: this.rec.projPartsId,
            tableId: this.rec.tableId
          }
        }).then(res => {
          console.log("查询接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = res.data.data;
            let arr = []
            this.obj.subList.forEach((item) => {
              arr.push(item)
            })
            this.controlArr = arr;
            this.isAdd = false;
          }
        })
      },
      //插入
      addData() {
        if (!this.isAdd) {
          return false;
        }
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/Aq13/saveAq13", this.$qs.stringify({
          aq13:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
          .then(res => {
            console.log("插入接口")
            console.log(res);
            if (res.data.status == 200) {
              this.id = res.data.id;
              this.isAdd = false;
              this.$tost.add();
              this.$skip.skipProcess();
            }
          })
      },

      //修改
      updateData() {
        this.obj.subList = this.controlArr;
        this.axios.post("/HiQuality/Aq13/saveAq13", this.$qs.stringify({
          aq13:JSON.stringify(this.obj),
        }))
          .then(res => {
            console.log("修改接口")
            console.log(res)
            this.getData();
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
            }
          })
      },
      //删除
      deleteData() {
        this.axios.get('/HiQuality/Aq13/deleteAq13', {
          params: {
            id: this.id
          }
        }).then(res => {
          console.log("删除接口")
          console.log(res)
          if (res.data.status == 200) {
            this.obj = {subList:[]};
            this.controlArr = [];
            this.isAdd = true;
          }
        })
      }

    }
  }
</script>

<style scoped>

</style>
