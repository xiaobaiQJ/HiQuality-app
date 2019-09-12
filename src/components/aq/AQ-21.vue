<template>
  <div class="AQ-21 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>三级安全教育记录卡</h3>
    <div class="flex-r margin-auto width-734">
      <div class="top-input-div">
        <p>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：<input type="text" class="title-input" v-model="obj.m1"></p>
        <div>出&nbsp;&nbsp;生&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;月：
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="title-input" value-format="yyyy-MM-dd"></el-date-picker>
        </div>
        <p>所属作业单位：<input type="text" class="title-input" v-model="obj.m3"></p>
      </div>
      <div class="top-input-div">
        <p>身份证号码：<input type="text" class="title-input" v-model="obj.m4"></p>
        <div>入&nbsp;场&nbsp;时&nbsp;&nbsp;间：
          <el-date-picker v-model="obj.m5" class="title-input" type="datetime" size="mini" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
        </div>
        <p>工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种：<input type="text" class="title-input" v-model="obj.m6"></p>
      </div>
    </div>
    <br/>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr class="public-tabel">
        <td width="391" colspan="2" ><p align="center">三级安全教育内容 </p></td>
        <td width="115" ><p align="center">教育人 </p></td>
        <td width="127" ><p align="center">受教育人 </p></td>
      </tr>
      <tr>
        <td width="44" rowspan="2"><p align="center">一 <br />
          级 <br />
          教 <br />
          育 </p></td>
        <td width="347" rowspan="2" valign="top"><p>进行安全基本知识、法规、法制教育，主要内容是： <br />
          1、党和国家的安全生产方针、政策； <br />
          2、安全生产法规、标准和法制观念； <br />
          3、本单位安全生产形势及历史上发生的重大事故及应吸取的教训； <br />
          4、本单位施工过程及安全生产规章制度安全纪律； <br />
          5、发生事故后如何抢救伤员，排险，保护现场和及时进行报告。 </p>
        </td>
        <td width="115" valign="top"><p align="left">签名：<input type="text" v-model="obj.m7"> </p></td>
        <td width="127" valign="top"><p align="left">签名： <input type="text" v-model="obj.m9"></p></td>
      </tr>
      <tr>
        <td width="115">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m8"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
        <td width="127">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m10"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="44" rowspan="2"><p align="center">二 <br />
          级 <br />
          教 <br />
          育 </p></td>
        <td width="347" rowspan="2" valign="top"><p>进行现场规章制度和遵章守纪教育，主要内容是： <br />
          1、本项目施工特点及施工安全基本知识； <br />
          2、本项目（包括施工、生产现场）安全生产制度、规定及安全注意事项； <br />
          3、高处作业、机械设备、电气安全基础知识； <br />
          4、防火、防毒、防尘、防爆知识及紧急情况安全处置和安全疏散知识； <br />
          5、防护用品发放标准及防护用品、用具使用的基本知识。 </p></td>
        <td width="115" valign="top"><p align="left">签名：<input type="text" v-model="obj.m11"> </p></td>
        <td width="127" valign="top"><p align="left">签名： <input type="text" v-model="obj.m13"></p></td>
      </tr>
      <tr>
        <td width="115">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m12"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
        <td width="127">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m14"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
      </tr>
      <tr>
        <td width="44" rowspan="2"><p align="center">三 <br />
          级 <br />
          教 <br />
          育 </p></td>
        <td width="347" rowspan="2" valign="top"><p>进行本工种岗位安全操作及班组安全制度、纪律、教育，主要内容是： <br />
          1、本岗位作业特点及安全操作规程； <br />
          2、作业单位安全活动制度及纪律； <br />
          3、爱护和正确使用安全防护装置（设施）及个人劳动防护用品； <br />
          4、本岗位易发生事故的不安全因素及防范对策； <br />
          5、本岗位的作业环境及使用机械设备工具的安全要求。 </p></td>
        <td width="115" valign="top"><p align="left">签名：<input type="text" v-model="obj.m15"> </p></td>
        <td width="127" valign="top"><p align="left">签名： <input type="text" v-model="obj.m17"></p></td>
      </tr>
      <tr>
        <td width="115">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m16"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
        <td width="127">
          <div class="block">
            <el-date-picker class="input-100"
                            size="mini"
                            v-model="obj.m18"
                            type="date"
                            placeholder="年   月   日"
                            format="yyyy年MM月dd日"
                            value-format="yyyy-MM-dd">
            </el-date-picker>
          </div>
        </td>
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
  import {splitDate,joinDate} from '../../utils/utils'
    export default {
        name: "AQ-21",
      data(){
        return{
          isAdd:true,
          //主表对象
          obj:{},
          id:'',
          dateArr:[],
          dateArr1:[],
          dateArr2:[],
          dateArr3:[],
          dateArr4:[],
          dateArr5:[],
          rec: {
            recNo:'',
            tableId:'',
            contracId:0,
            constDate:'',
            testDate:'',
            projPartsId:'1',
            curStatus:0,
            operUserId:1
          },
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
      },
      mounted() {
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/Aq21/findById',{
            params: {
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res =>{
            console.log("查询接口");
            console.log(res);
            if(res.data.status == 200){
              this.obj = res.data.data;
              this.isAdd = false;
              /*this.dateArr = splitDate(this.obj.m8,'-');
              this.dateArr1 = splitDate(this.obj.m10,'-');
              this.dateArr2 = splitDate(this.obj.m12,'-');
              this.dateArr3 = splitDate(this.obj.m14,'-');
              this.dateArr4 = splitDate(this.obj.m16,'-');
              this.dateArr5 = splitDate(this.obj.m18,'-');*/
            }
          })
        },
        //插入
        addData(){
          if(!this.isAdd){
            return false;
          }
         /* this.obj.m8 = joinDate(this.dateArr,'-');
          this.obj.m10 = joinDate(this.dateArr1,'-');
          this.obj.m12 = joinDate(this.dateArr2,'-');
          this.obj.m14 = joinDate(this.dateArr3,'-');
          this.obj.m16 = joinDate(this.dateArr4,'-');
          this.obj.m18 = joinDate(this.dateArr5,'-');*/
          this.axios.post("/HiQuality/Aq21/saveAq21", this.$qs.stringify({
            aq21:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
              console.log("插入接口")
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                this.$tost.add();
                this.$skip.skipProcess();
              }
            })
        },
        //修改
        updateData() {
          /*this.obj.m8 = joinDate(this.dateArr,'-');
          this.obj.m10 = joinDate(this.dateArr1,'-');
          this.obj.m12 = joinDate(this.dateArr2,'-');
          this.obj.m14 = joinDate(this.dateArr3,'-');
          this.obj.m16 = joinDate(this.dateArr4,'-');
          this.obj.m18 = joinDate(this.dateArr5,'-');*/
          this.axios.post('/HiQuality/Aq21/updateAq21', this.$qs.stringify({
            aq21:JSON.stringify(this.obj)
          }))
            .then(res => {
              console.log("修改接口");
              console.log(res);
              if (res.data.status == 200) {
                this.isAdd = false;
                this.getData();
                this.$tost.edit();
                this.$skip.skipProcess();
              }
            })
        },
        //删除
        deleteData() {
          this.axios.delete('/HiQuality/Aq21/deleteAq21', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {};
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
