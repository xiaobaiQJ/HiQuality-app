<template>
  <div class="text-center main-jl">
    <p>贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>各标段主要工程项目形象进度汇总表</h3>
    <P class="width-682 top-name-p">截止   
      <input type="text" class="date-input" v-model="m1DataArr[0]">年
      <input type="text" class="date-input" v-model="m1DataArr[1]">月
      <input type="text" class="date-input" v-model="m1DataArr[2]">日
    </P>
    <table cellspacing="0" cellpadding="0" class="public-tabel" width="764">
      <tr>
        <td colspan="2" rowspan="2" width="244">工程项目</td>
        <td rowspan="2" width="98">总数<br />
          （按施工图）</td>
        <td colspan="2">本月完成 </td>
        <td colspan="3">累计完成</td>
        <td rowspan="2" width="72">下月计划<br />
          完成数量</td>
      </tr>
      <tr>
        <td>实际 </td>
        <td>占总数%</td>
        <td>计划 </td>
        <td>实际 </td>
        <td>占计划%</td>
      </tr>
      <tr>
        <td rowspan="4" width="40">路基</td>
        <td width="204"><input type="text" v-model="controlArr[0].s1"></td>
        <td><input type="text" v-model="controlArr[0].s2"></td>
        <td><input type="text" v-model="controlArr[0].s3"></td>
        <td><input type="text" v-model="controlArr[0].s4"></td>
        <td><input type="text" v-model="controlArr[0].s5"></td>
        <td><input type="text" v-model="controlArr[0].s6"></td>
        <td><input type="text" v-model="controlArr[0].s7"></td>
        <td><input type="text" v-model="controlArr[0].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[1].s1"></td>
        <td><input type="text" v-model="controlArr[1].s2"></td>
        <td><input type="text" v-model="controlArr[1].s3"></td>
        <td><input type="text" v-model="controlArr[1].s4"></td>
        <td><input type="text" v-model="controlArr[1].s5"></td>
        <td><input type="text" v-model="controlArr[1].s6"></td>
        <td><input type="text" v-model="controlArr[1].s7"></td>
        <td><input type="text" v-model="controlArr[1].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[2].s1"></td>
        <td><input type="text" v-model="controlArr[2].s2"></td>
        <td><input type="text" v-model="controlArr[2].s3"></td>
        <td><input type="text" v-model="controlArr[2].s4"></td>
        <td><input type="text" v-model="controlArr[2].s5"></td>
        <td><input type="text" v-model="controlArr[2].s6"></td>
        <td><input type="text" v-model="controlArr[2].s7"></td>
        <td><input type="text" v-model="controlArr[2].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[3].s1"></td>
        <td><input type="text" v-model="controlArr[3].s2"></td>
        <td><input type="text" v-model="controlArr[3].s3"></td>
        <td><input type="text" v-model="controlArr[3].s4"></td>
        <td><input type="text" v-model="controlArr[3].s5"></td>
        <td><input type="text" v-model="controlArr[3].s6"></td>
        <td><input type="text" v-model="controlArr[3].s7"></td>
        <td><input type="text" v-model="controlArr[3].s8"></td>
      </tr>
      <tr>
        <td rowspan="5" width="47">排水<br />
          工程</td>
        <td><input type="text" v-model="controlArr[4].s1"></td>
        <td><input type="text" v-model="controlArr[4].s2"></td>
        <td><input type="text" v-model="controlArr[4].s3"></td>
        <td><input type="text" v-model="controlArr[4].s4"></td>
        <td><input type="text" v-model="controlArr[4].s5"></td>
        <td><input type="text" v-model="controlArr[4].s6"></td>
        <td><input type="text" v-model="controlArr[4].s7"></td>
        <td><input type="text" v-model="controlArr[4].s8"></td>
      </tr>
      <tr>
        <td width="125"><input type="text" v-model="controlArr[5].s1"></td>
        <td width="98"><input type="text" v-model="controlArr[5].s2"></td>
        <td><input type="text" v-model="controlArr[5].s3"></td>
        <td><input type="text" v-model="controlArr[5].s4"></td>
        <td><input type="text" v-model="controlArr[5].s5"></td>
        <td><input type="text" v-model="controlArr[5].s6"></td>
        <td><input type="text" v-model="controlArr[5].s7"></td>
        <td><input type="text" v-model="controlArr[5].s8"></td>
      </tr>
      <tr>
        <td width="125"><input type="text" v-model="controlArr[6].s1"></td>
        <td width="98"><input type="text" v-model="controlArr[6].s2"></td>
        <td><input type="text" v-model="controlArr[6].s3"></td>
        <td><input type="text" v-model="controlArr[6].s4"></td>
        <td><input type="text" v-model="controlArr[6].s5"></td>
        <td><input type="text" v-model="controlArr[6].s6"></td>
        <td><input type="text" v-model="controlArr[6].s7"></td>
        <td><input type="text" v-model="controlArr[6].s8"></td>
      </tr>
      <tr>
        <td width="125"><input type="text" v-model="controlArr[7].s1"></td>
        <td width="98"><input type="text" v-model="controlArr[7].s2"></td>
        <td><input type="text" v-model="controlArr[7].s3"></td>
        <td><input type="text" v-model="controlArr[7].s4"></td>
        <td><input type="text" v-model="controlArr[7].s5"></td>
        <td><input type="text" v-model="controlArr[7].s6"></td>
        <td><input type="text" v-model="controlArr[7].s7"></td>
        <td><input type="text" v-model="controlArr[7].s8"></td>
      </tr>
      <tr>
        <td width="125"><input type="text" v-model="controlArr[8].s1"></td>
        <td width="98"><input type="text" v-model="controlArr[8].s2"></td>
        <td><input type="text" v-model="controlArr[8].s3"></td>
        <td><input type="text" v-model="controlArr[8].s4"></td>
        <td><input type="text" v-model="controlArr[8].s5"></td>
        <td><input type="text" v-model="controlArr[8].s6"></td>
        <td><input type="text" v-model="controlArr[8].s7"></td>
        <td><input type="text" v-model="controlArr[8].s8"></td>
      </tr>
      <tr>
        <td rowspan="3" width="47">防护<br />
          工程</td>
        <td><input type="text" v-model="controlArr[9].s1"></td>
        <td><input type="text" v-model="controlArr[9].s2"></td>
        <td><input type="text" v-model="controlArr[9].s3"></td>
        <td><input type="text" v-model="controlArr[9].s4"></td>
        <td><input type="text" v-model="controlArr[9].s5"></td>
        <td><input type="text" v-model="controlArr[9].s6"></td>
        <td><input type="text" v-model="controlArr[9].s7"></td>
        <td><input type="text" v-model="controlArr[9].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[10].s1"></td>
        <td><input type="text" v-model="controlArr[10].s2"></td>
        <td><input type="text" v-model="controlArr[10].s3"></td>
        <td><input type="text" v-model="controlArr[10].s4"></td>
        <td><input type="text" v-model="controlArr[10].s5"></td>
        <td><input type="text" v-model="controlArr[10].s6"></td>
        <td><input type="text" v-model="controlArr[10].s7"></td>
        <td><input type="text" v-model="controlArr[10].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[11].s1"></td>
        <td><input type="text" v-model="controlArr[11].s2"></td>
        <td><input type="text" v-model="controlArr[11].s3"></td>
        <td><input type="text" v-model="controlArr[11].s4"></td>
        <td><input type="text" v-model="controlArr[11].s5"></td>
        <td><input type="text" v-model="controlArr[11].s6"></td>
        <td><input type="text" v-model="controlArr[11].s7"></td>
        <td><input type="text" v-model="controlArr[11].s8"></td>
      </tr>
      <tr>
        <td rowspan="7" width="47">桥梁<br />
          工程</td>
        <td><input type="text" v-model="controlArr[12].s1"></td>
        <td><input type="text" v-model="controlArr[12].s2"></td>
        <td><input type="text" v-model="controlArr[12].s3"></td>
        <td><input type="text" v-model="controlArr[12].s4"></td>
        <td><input type="text" v-model="controlArr[12].s5"></td>
        <td><input type="text" v-model="controlArr[12].s6"></td>
        <td><input type="text" v-model="controlArr[12].s7"></td>
        <td><input type="text" v-model="controlArr[12].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[13].s1"></td>
        <td><input type="text" v-model="controlArr[13].s2"></td>
        <td><input type="text" v-model="controlArr[13].s3"></td>
        <td><input type="text" v-model="controlArr[13].s4"></td>
        <td><input type="text" v-model="controlArr[13].s5"></td>
        <td><input type="text" v-model="controlArr[13].s6"></td>
        <td><input type="text" v-model="controlArr[13].s7"></td>
        <td><input type="text" v-model="controlArr[13].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[14].s1"></td>
        <td><input type="text" v-model="controlArr[14].s2"></td>
        <td><input type="text" v-model="controlArr[14].s3"></td>
        <td><input type="text" v-model="controlArr[14].s4"></td>
        <td><input type="text" v-model="controlArr[14].s5"></td>
        <td><input type="text" v-model="controlArr[14].s6"></td>
        <td><input type="text" v-model="controlArr[14].s7"></td>
        <td><input type="text" v-model="controlArr[14].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[15].s1"></td>
        <td><input type="text" v-model="controlArr[15].s2"></td>
        <td><input type="text" v-model="controlArr[15].s3"></td>
        <td><input type="text" v-model="controlArr[15].s4"></td>
        <td><input type="text" v-model="controlArr[15].s5"></td>
        <td><input type="text" v-model="controlArr[15].s6"></td>
        <td><input type="text" v-model="controlArr[15].s7"></td>
        <td><input type="text" v-model="controlArr[15].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[16].s1"></td>
        <td><input type="text" v-model="controlArr[16].s2"></td>
        <td><input type="text" v-model="controlArr[16].s3"></td>
        <td><input type="text" v-model="controlArr[16].s4"></td>
        <td><input type="text" v-model="controlArr[16].s5"></td>
        <td><input type="text" v-model="controlArr[16].s6"></td>
        <td><input type="text" v-model="controlArr[16].s7"></td>
        <td><input type="text" v-model="controlArr[16].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[17].s1"></td>
        <td><input type="text" v-model="controlArr[17].s2"></td>
        <td><input type="text" v-model="controlArr[17].s3"></td>
        <td><input type="text" v-model="controlArr[17].s4"></td>
        <td><input type="text" v-model="controlArr[17].s5"></td>
        <td><input type="text" v-model="controlArr[17].s6"></td>
        <td><input type="text" v-model="controlArr[17].s7"></td>
        <td><input type="text" v-model="controlArr[17].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[18].s1"></td>
        <td><input type="text" v-model="controlArr[18].s2"></td>
        <td><input type="text" v-model="controlArr[18].s3"></td>
        <td><input type="text" v-model="controlArr[18].s4"></td>
        <td><input type="text" v-model="controlArr[18].s5"></td>
        <td><input type="text" v-model="controlArr[18].s6"></td>
        <td><input type="text" v-model="controlArr[18].s7"></td>
        <td><input type="text" v-model="controlArr[18].s8"></td>
      </tr>
      <tr>
        <td rowspan="6" width="47">隧道<br />
          工程</td>
        <td><input type="text" v-model="controlArr[19].s1"></td>
        <td><input type="text" v-model="controlArr[19].s2"></td>
        <td><input type="text" v-model="controlArr[19].s3"></td>
        <td><input type="text" v-model="controlArr[19].s4"></td>
        <td><input type="text" v-model="controlArr[19].s5"></td>
        <td><input type="text" v-model="controlArr[19].s6"></td>
        <td><input type="text" v-model="controlArr[19].s7"></td>
        <td><input type="text" v-model="controlArr[19].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[20].s1"></td>
        <td><input type="text" v-model="controlArr[20].s2"></td>
        <td><input type="text" v-model="controlArr[20].s3"></td>
        <td><input type="text" v-model="controlArr[20].s4"></td>
        <td><input type="text" v-model="controlArr[20].s5"></td>
        <td><input type="text" v-model="controlArr[20].s6"></td>
        <td><input type="text" v-model="controlArr[20].s7"></td>
        <td><input type="text" v-model="controlArr[20].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[21].s1"></td>
        <td><input type="text" v-model="controlArr[21].s2"></td>
        <td><input type="text" v-model="controlArr[21].s3"></td>
        <td><input type="text" v-model="controlArr[21].s4"></td>
        <td><input type="text" v-model="controlArr[21].s5"></td>
        <td><input type="text" v-model="controlArr[21].s6"></td>
        <td><input type="text" v-model="controlArr[21].s7"></td>
        <td><input type="text" v-model="controlArr[21].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[22].s1"></td>
        <td><input type="text" v-model="controlArr[22].s2"></td>
        <td><input type="text" v-model="controlArr[22].s3"></td>
        <td><input type="text" v-model="controlArr[22].s4"></td>
        <td><input type="text" v-model="controlArr[22].s5"></td>
        <td><input type="text" v-model="controlArr[22].s6"></td>
        <td><input type="text" v-model="controlArr[22].s7"></td>
        <td><input type="text" v-model="controlArr[22].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[23].s1"></td>
        <td><input type="text" v-model="controlArr[23].s2"></td>
        <td><input type="text" v-model="controlArr[23].s3"></td>
        <td><input type="text" v-model="controlArr[23].s4"></td>
        <td><input type="text" v-model="controlArr[23].s5"></td>
        <td><input type="text" v-model="controlArr[23].s6"></td>
        <td><input type="text" v-model="controlArr[23].s7"></td>
        <td><input type="text" v-model="controlArr[23].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[24].s1"></td>
        <td><input type="text" v-model="controlArr[24].s2"></td>
        <td><input type="text" v-model="controlArr[24].s3"></td>
        <td><input type="text" v-model="controlArr[24].s4"></td>
        <td><input type="text" v-model="controlArr[24].s5"></td>
        <td><input type="text" v-model="controlArr[24].s6"></td>
        <td><input type="text" v-model="controlArr[24].s7"></td>
        <td><input type="text" v-model="controlArr[24].s8"></td>
      </tr>
      <tr>
        <td rowspan="3" width="47">路面<br />
          工程</td>
        <td><input type="text" v-model="controlArr[25].s1"></td>
        <td><input type="text" v-model="controlArr[25].s2"></td>
        <td><input type="text" v-model="controlArr[25].s3"></td>
        <td><input type="text" v-model="controlArr[25].s4"></td>
        <td><input type="text" v-model="controlArr[25].s5"></td>
        <td><input type="text" v-model="controlArr[25].s6"></td>
        <td><input type="text" v-model="controlArr[25].s7"></td>
        <td><input type="text" v-model="controlArr[25].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[26].s1"></td>
        <td><input type="text" v-model="controlArr[26].s2"></td>
        <td><input type="text" v-model="controlArr[26].s3"></td>
        <td><input type="text" v-model="controlArr[26].s4"></td>
        <td><input type="text" v-model="controlArr[26].s5"></td>
        <td><input type="text" v-model="controlArr[26].s6"></td>
        <td><input type="text" v-model="controlArr[26].s7"></td>
        <td><input type="text" v-model="controlArr[26].s8"></td>
      </tr>
      <tr>
        <td><input type="text" v-model="controlArr[27].s1"></td>
        <td><input type="text" v-model="controlArr[27].s2"></td>
        <td><input type="text" v-model="controlArr[27].s3"></td>
        <td><input type="text" v-model="controlArr[27].s4"></td>
        <td><input type="text" v-model="controlArr[27].s5"></td>
        <td><input type="text" v-model="controlArr[27].s6"></td>
        <td><input type="text" v-model="controlArr[27].s7"></td>
        <td><input type="text" v-model="controlArr[27].s8"></td>
      </tr>
      <tr>
        <td colspan="2"><input type="text" v-model="controlArr[28].s1"></td>
        <td><input type="text" v-model="controlArr[28].s2"></td>
        <td><input type="text" v-model="controlArr[28].s3"></td>
        <td><input type="text" v-model="controlArr[28].s4"></td>
        <td><input type="text" v-model="controlArr[28].s5"></td>
        <td><input type="text" v-model="controlArr[28].s6"></td>
        <td><input type="text" v-model="controlArr[28].s7"></td>
        <td><input type="text" v-model="controlArr[28].s8"></td>
      </tr>
    </table>
    <p class="bot-hint-p width-763">合同监理工程师：<input type="text" class="input-200" v-model="obj.m2"> 驻地监理工程师（总监）：<input type="text" v-model="obj.m3"></p>
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
        name: "JL-19",
      data() {
        return {
          isAdd: true,
          //主表
          obj: {
            subList: []
          },
          controlArr:[],
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
          m1DataArr:[],
          id: 0,
          pageNo:1
        }
      },
      created(){
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
      },
      mounted() {
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          let engineeingProjectrValue = ['土方开挖（m³）','石方开挖（m³）','路基填筑（m³）','路基处理（m³）','浆砌排水沟（m）','管涵（m）按断面尺寸分列）','箱涵（m）（按断面尺寸分列）','盖板涵（m）（按断面尺寸分列）','石拱涵（m）（按跨径分列）', '护坡、护墙（m³）','浆砌挡土墙(m³)','干砌挡土墙（m³）','基础（m³）','墩、台身（m³）','盖梁（根）','梁板预制（片）','板梁安装（片）','桥面铺装（跨）','栏杆（m）', '洞口开挖（m³）','洞身开挖（m）','初期支护（m）','洞身衬砌（m）','洞门（个）','路面（m ² ）', '底基层（m ² ）','基层（m ² ）','面层（m ² ）','其他工程'];
          for(var i=0;i<engineeingProjectrValue.length;i++){
            let subObj = {'pageNo':this.pageNo,'s1':engineeingProjectrValue[i]};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/JL19/findJL19ById', {
            params: {
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
              this.isAdd = false;
              this.m1DataArr = splitDate(this.obj.m1,'-');
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
          this.obj.m1 = joinDate(this.m1DataArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/JL19/saveJL19", this.$qs.stringify({
            jl19:JSON.stringify(this.obj),
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
          this.obj.m1 = joinDate(this.m1DataArr,'-');
          this.axios.post('/HiQuality/JL19/updateJL19', this.$qs.stringify({
            jl19:JSON.stringify(this.obj),
          }))
            .then(res => {
              console.log("修改接口")
              console.log(res)
              if (res.data.status == 200) {
                this.$tost.edit();
                this.$skip.skipProcess();
                this.getData();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.get('/HiQuality/JL19/deleteJL19', {
            params: {
               id: this.id,
              pageNo:this.pageNo
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

</style>
