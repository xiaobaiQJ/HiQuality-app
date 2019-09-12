<template>
    <div class="AQ-06 text-center crosswise-a">
      <p class="p-lineheight">
        <img width="37" height="41" src="../../assets/files/imgs/aq/clip_image002.jpg" class="logo-img"/>
        贵州省公路工程集团有限公司</p>
      
      <p class="p-lineheight">安全生产责任落实登记表</p>
      <div class="t-left margin-auto width-1053">
        <p>项目名称：<input type="text" v-model="obj.m10" class="input-300 height-25"></p>
      </div>
      <table cellspacing="0" cellpadding="0" class="crosswise-table">
        <tr>
          <td rowspan="3">段落、部位或作业场所</td>
          <td colspan="5">责  任  人</td>
          <td rowspan="3">安全管理主要内容</td>
        </tr>
        <tr>
          <td colspan="3">管理人员及联系电话</td>
          <td colspan="2" width="217">班组负责人及联系电话<br />
            电话</td>
        </tr>
        <tr>
          <td>姓名</td>
          <td>职务</td>
          <td>电话</td>
          <td>姓名</td>
          <td>电话</td>
        </tr>
        <tr>
          <td rowspan="5">K**+***～K**+***段路基（路面）</td>
          <td><input type="text" v-model="controlArr[0].s1"></td>
          <td>
              <el-select v-model="controlArr[0].s5">
                <el-option
                  v-for="item in dutyList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
          </td>
          <td><input type="text" v-model="controlArr[0].s2"></td>
          <td><input type="text" v-model="controlArr[0].s3"></td>
          <td><input type="text" v-model="controlArr[0].s4"></td>
          <td rowspan="5"><input type="text" v-model="obj.m1"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[1].s1"></td>
          <td>
            <el-select v-model="controlArr[1].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[1].s2"></td>
          <td><input type="text" v-model="controlArr[1].s3"></td>
          <td><input type="text" v-model="controlArr[1].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[2].s1"></td>
          <td>
            <el-select v-model="controlArr[2].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[2].s2"></td>
          <td><input type="text" v-model="controlArr[2].s3"></td>
          <td><input type="text" v-model="controlArr[2].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[3].s1"></td>
          <td>
            <el-select v-model="controlArr[3].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[3].s2"></td>
          <td><input type="text" v-model="controlArr[3].s3"></td>
          <td><input type="text" v-model="controlArr[3].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[4].s1"></td>
          <td>
            <el-select v-model="controlArr[4].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[4].s2"></td>
          <td><input type="text" v-model="controlArr[4].s3"></td>
          <td><input type="text" v-model="controlArr[4].s4"></td>
        </tr>
        <tr>
          <td rowspan="5">**特大桥*墩墩柱</td>
          <td><input type="text" v-model="controlArr[5].s1"></td>
          <td>
            <el-select v-model="controlArr[5].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[5].s2"></td>
          <td><input type="text" v-model="controlArr[5].s3"></td>
          <td><input type="text" v-model="controlArr[5].s4"></td>
          <td rowspan="5"><input type="text" v-model="obj.m2"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[6].s1"></td>
          <td>
            <el-select v-model="controlArr[6].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[6].s2"></td>
          <td><input type="text" v-model="controlArr[6].s3"></td>
          <td><input type="text" v-model="controlArr[6].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[7].s1"></td>
          <td>
            <el-select v-model="controlArr[7].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[7].s2"></td>
          <td><input type="text" v-model="controlArr[7].s3"></td>
          <td><input type="text" v-model="controlArr[7].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[8].s1"></td>
          <td>
            <el-select v-model="controlArr[8].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[8].s2"></td>
          <td><input type="text" v-model="controlArr[8].s3"></td>
          <td><input type="text" v-model="controlArr[8].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[9].s1"></td>
          <td>
            <el-select v-model="controlArr[9].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[9].s2"></td>
          <td><input type="text" v-model="controlArr[9].s3"></td>
          <td><input type="text" v-model="controlArr[9].s4"></td>
        </tr>
        <tr>
          <td rowspan="5">**隧道左洞出口</td>
          <td><input type="text" v-model="controlArr[10].s1"></td>
          <td>
            <el-select v-model="controlArr[10].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[10].s2"></td>
          <td><input type="text" v-model="controlArr[10].s3"></td>
          <td><input type="text" v-model="controlArr[10].s4"></td>
          <td rowspan="5"><input type="text" v-model="obj.m3"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[11].s1"></td>
          <td>
            <el-select v-model="controlArr[11].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[11].s2"></td>
          <td><input type="text" v-model="controlArr[11].s3"></td>
          <td><input type="text" v-model="controlArr[11].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[12].s1"></td>
          <td>
            <el-select v-model="controlArr[12].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[12].s2"></td>
          <td><input type="text" v-model="controlArr[12].s3"></td>
          <td><input type="text" v-model="controlArr[12].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[13].s1"></td>
          <td>
            <el-select v-model="controlArr[13].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[13].s2"></td>
          <td><input type="text" v-model="controlArr[13].s3"></td>
          <td><input type="text" v-model="controlArr[13].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[14].s1"></td>
          <td>
            <el-select v-model="controlArr[14].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[14].s2"></td>
          <td><input type="text" v-model="controlArr[14].s3"></td>
          <td><input type="text" v-model="controlArr[14].s4"></td>
        </tr>
        <tr>
          <td rowspan="5" width="223">K**+***通道涵或K**+***～K**+***段砼挡墙（护坡、边沟、排水沟、框架锚索等）</td>
          <td><input type="text" v-model="controlArr[15].s1"></td>
          <td>
            <el-select v-model="controlArr[15].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[15].s2"></td>
          <td><input type="text" v-model="controlArr[15].s3"></td>
          <td><input type="text" v-model="controlArr[15].s4"></td>
          <td rowspan="5"><input type="text" v-model="obj.m4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[16].s1"></td>
          <td>
            <el-select v-model="controlArr[16].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[16].s2"></td>
          <td><input type="text" v-model="controlArr[16].s3"></td>
          <td><input type="text" v-model="controlArr[16].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[17].s1"></td>
          <td>
            <el-select v-model="controlArr[17].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[17].s2"></td>
          <td><input type="text" v-model="controlArr[17].s3"></td>
          <td><input type="text" v-model="controlArr[17].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[18].s1"></td>
          <td>
            <el-select v-model="controlArr[18].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[18].s2"></td>
          <td><input type="text" v-model="controlArr[18].s3"></td>
          <td><input type="text" v-model="controlArr[18].s4"></td>
        </tr>
        <tr>
          <td><input type="text" v-model="controlArr[19].s1"></td>
          <td>
            <el-select v-model="controlArr[19].s5">
              <el-option
                v-for="item in dutyList"
                :key="item.id"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </td>
          <td><input type="text" v-model="controlArr[19].s2"></td>
          <td><input type="text" v-model="controlArr[19].s3"></td>
          <td><input type="text" v-model="controlArr[19].s4"></td>
        </tr>
      </table>
      <p class="bot-hint-p width-1053 p-lineheight">制表:<input type="text" v-model="obj.m5" class="input-140">项目技安科长: <input type="text" v-model="obj.m6" class="input-140">项目安全负责人：<input type="text" v-model="obj.m7" class="input-120">项目经理:<input type="text" v-model="obj.m8" class="input-140">分公司分管安全领导：<input type="text" v-model="obj.m9" class="input-120"></p>
      
      <p class="bot-hint-p width-1053">填表说明：1、段落或作业场所按照路基、路面、桥梁、隧道、交通工程、机电工程、绿化工程、预制场、拌合站、料场、梁场、设备等进行划分，其中：路基以起讫桩号；桥梁以桥名或桥名加具体的某个部位；隧道分左右幅及进出口或具体施工的某个部位；其他填桩号或名称；2、此表由项目安全负责人协调相关部门完善，经过项目经理批准后上报分公司技安科，由分公司分管安全领导确认后报集团公司安全监督处备查，此表是动态表，责任人变动要及时重新报备。此表作为技安科检查排查隐患治理的依据，相关责任人必须认真落实，否则按照对应的处罚办法进行处罚。
      </p>

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
        name: "AQ-06",
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
          //职务列表
          dutyList:[
            {id:'1',name:'工区长'},
            {id:'2',name:'主管技术员'},
            {id:'3',name:'技术员'},
            {id:'4',name:'安全员'},
          ],
          id: '1'     //主表id
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
          for(var i= 0; i<20;i++){
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        getData() {
          this.axios.get('/HiQuality/aq06/findById', {
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
              if (this.obj.subList != undefined && this.obj.subList.length > 0) {
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;

            }
          })
        },
        //新增
        addData() {
          if (!this.isAdd) {
            return false;
          }
          this.obj.subList = this.controlArr;
          console.log("AQ-06新增数据：*******888"+JSON.stringify(this.obj))
          this.axios.post('/HiQuality/aq06/save', this.$qs.stringify({
            bBtAq06M:JSON.stringify(this.obj),
            rec:JSON.stringify(this.rec)
          }))
            .then(res => {
            console.log("新增接口")
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
          this.axios.post('/HiQuality/aq06/update',  this.$qs.stringify({
            bBtAq06M:JSON.stringify(this.obj)
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
          this.axios.get('/HiQuality/aq06/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = true;
              this.obj = {subList:[]};
              this.controlArr = [];
            }

          })
        }

      }
    }
</script>

<style scoped>
.AQ-06>p:nth-child(1){
  font-size: 18px;
}
.AQ-06>p:nth-child(2){
  font-size: 14px;
}
</style>
