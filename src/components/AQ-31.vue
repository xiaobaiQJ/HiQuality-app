<template>
  <div class="AQ-31 text-center">
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p>黔西南州兴义环城高速公路</p>
    <h3>伤亡事故统计及原因分析月报表</h3>
    <div class="t-right margin-auto width-1023">
      <p>编号：<input type="text"></p>
    </div>
    <table border="1" cellspacing="0" cellpadding="0" class="public-tabel">
      <tr>
        <td width="78" rowspan="2" valign="top"><br />
          <!--<img src="../../assets/files/imgs/aq/wps1.png" alt="" width="79" height="115" />--></td>
        <td width="85" colspan="3" valign="top"><p>防护、保险信号等装置缺乏或有缺陷 </p></td>
        <td width="85" colspan="3" valign="top"><p>设备、工具 <br />
            附件有缺陷 </p></td>
        <td width="85" colspan="3" valign="top"><p>个人防护用品缺乏或有缺陷 </p></td>
        <td width="85" colspan="3" valign="top"><p>光线不足或工作地点及通道情况不良 </p></td>
        <td width="85" colspan="3" valign="top"><p>劳动组织不合理 </p></td>
        <td width="85" colspan="3" valign="top"><p>对现场工作缺乏检查或指导有错误 </p></td>
        <td width="85" colspan="3" valign="top"><p>设计有缺陷 </p></td>
        <td width="85" colspan="3" valign="top"><p>不懂操作技术和知识 </p></td>
        <td width="85" colspan="3" valign="top"><p>违反操作规程或劳动纪律 </p></td>
        <td width="85" colspan="3" valign="top"><p>没有安全操作规程制度或不健全 </p></td>
        <td width="85" colspan="3" valign="top"><p>其他 </p></td>
      </tr>
      <tr>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
        <td width="28" valign="top"><p>死 </p></td>
        <td width="28" valign="top"><p>重 </p></td>
        <td width="28" valign="top"><p>轻 </p></td>
      </tr>
      <tr v-for="(val,index) in controlArr" :key="index">
        <td width="78" valign="top"><p v-model="val.type">{{val.type}} </p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s1"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s2"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s3"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s4"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s5"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s6"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s7"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s8"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s9"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s10"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s11"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s12"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s13"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s14"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s15"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s16"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s17"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s18"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s19"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s20"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s21"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s22"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s23"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s24"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s25"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s26"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s27"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s28"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s29"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s30"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s31"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s32"></p></td>
        <td width="28" valign="top"><p><input type="text" v-model="val.s33"></p></td>
      </tr>
      <tr>
        <td width="78" valign="top"><p>总计 </p></td>
        <td width="937" colspan="33" ><p class="t-left">死亡：<input type="text" class="input-300" v-model="obj.m1">重伤：<input type="text" class="input-300" v-model="obj.m2">轻伤：<input type="text" class="input-175" v-model="obj.m3"></p></td>
      </tr>
    </table>
    <p class="bot-hint-p width-1023"><a name="OLE_LINK1" id="OLE_LINK1">填报单位：<input type="text" v-model="obj.m4">单位负责人：<input type="text" v-model="obj.m5">制表人：<input type="text" v-model="obj.m6">
      <input type="text" v-model="dateArr[0]" class="date-input">年     
      <input type="text" v-model="dateArr[1]" class="date-input">月     
      <input type="text" v-model="dateArr[2]" class="date-input">日</a>
    </p>
    <div class="btn">
      <div class="add-btn sub-btn"
           :class="isAdd ? '' : 'disabled-btn' " @click="addData">
        添加
      </div>
      <div class="add-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' "@click="getData">
        刷新
      </div>
      <div class="update-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' "@click="updateData">
        修改
      </div>
      <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
    </div>
  </div>
</template>

<script>
  import {splitDate,joinDate} from '../utils/utils'
    export default {
        name: "AQ-31",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          //rec表
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
          dateArr:[],
          id: '1',     //主表id
        }
      },
      mounted() {
        let type = ["物体打击","车辆伤害","机械伤害","起重伤害","触电","淹溺","灼烫","火灾","高处坠落","坍塌","放炮","火药爆炸","物理爆炸","化学爆炸","中毒、窒息","其他伤害"];
        for(var i= 0; i<16;i++){
          let testItemNos = {"type":type[i]};
          this.controlArr.push(testItemNos);
        }
        this.getData();
      },
      methods:{
        //查询
        getData(){
          this.axios.get('/HiQuality/aq31/findById',{
            params:{
              id:this.id,
            }
          }).then(res=>{
            console.log("查询接口")
            console.log(res);
            if(res.data.status==200){
              this.obj = res.data.data;
              this.dateArr = splitDate(this.obj.m7,'-');
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item);
                })
              }
              this.controlArr = arr;
              this.isAdd = false;
            }
          })
        },
        //新增
        addData(){
          if (!this.isAdd) {
            return false;
          }
          this.obj.m7 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          var params = new URLSearchParams();
          params.append("BBtAq31M",JSON.stringify(this.obj));
          params.append("BQcRecInfo",JSON.stringify(this.rec));
          this.axios.post('/HiQuality/aq31/save',params
          ).then(res=>{
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.id = res.data.id;
              this.isAdd = false;
            }
          })
        },
        //修改
        updateData(){
          this.obj.m7 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post("/HiQuality/aq31/update",this.$qs.stringify({
            BBtAq31M:JSON.stringify(this.obj)
          })).then(res=>{
            console.log("修改接口")
            console.log(res);
            this.getData();
          })
        },
        //删除
        deleteData(){
          this.axios.get('/HiQuality/aq31/deleteById',{
            params:{
              id:this.id,
            }
          }).then(res=>{
            console.log("删除接口")
            console.log(res);
            this.getData();
          })
        }
      }
    }
</script>

<style scoped>

</style>
