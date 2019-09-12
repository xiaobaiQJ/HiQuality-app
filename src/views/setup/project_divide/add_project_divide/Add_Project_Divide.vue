/**
* @author bai tao
* @date 2019/6/18 0018
* @Description:新增工程划分
*/
<template>
  <div class="con">
    <header>
      <div class="nav">

      </div>
    </header>
    <main>
      <div class="content ">
     <!--   <div class="panel">
          <div class="panel-left">
            工程类型
          </div>
          <div class="panel-right">
            <el-select v-model="div.projPartsType" size="mini" placeholder="必须填">
              <el-option
                v-for="item in navBox"
                :key="item.type"
                :label="item.label"
                :value="item.type">
              </el-option>
            </el-select>
          </div>
        </div>-->
        <div class="panel">
          <div class="panel-left">
            工程部位名称
          </div>
          <div class="panel-right">
            <el-input v-model="div.projPartsName" size="mini" placeholder="必填项，例如：左幅路基挖方"></el-input>
          </div>
        </div>
        <div class="panel">
          <div class="panel-left">
            工程部位编码
          </div>
          <div class="panel-right">
            <el-input v-model="div.projPartsCode" size="mini" placeholder="必填项，例如：XYHC2-3-U36-P1-S0-1"></el-input>
          </div>
        </div>
        <div class="panel">
          <div class="panel-left">
            起止桩号
          </div>
          <div class="panel-right">
            <el-input v-model="div.stakeNo" size="mini" placeholder="例如：ZK51+055~ZK51+300.803"></el-input>
          </div>
        </div>
        <div class="panel">
          <div class="panel-left">
            工程级别
          </div>
          <div class="panel-right">
            <el-select v-model="div.projPartsLevel" size="mini" placeholder="必须填">
              <el-option
                v-for="item in projectLevel"
                :key="item.type"
                :label="item.label"
                :value="item.type">
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="btn-warp">
          <div class="btn-box btn-active" @click="canel">取消</div>
          <div class="btn-box btn-active" @click="save">保存</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import  {getMessage} from "../../../../utils/tost";

  export default {
    name: "Add_Project_Divide",
    data(){
      return{
        isSub:false,
        //项目类型集合
        navBox: [
          {
            icon: "&#xe612;",
            type: 1,
            count: 0,
            label: "路基工程"
          },
          {
            icon: "&#xe621;",
            type: 2,
            count: 0,
            label: "路面工程"
          },
          {
            icon: "&#xe65a;",
            type: 3,
            count: 0,
            label: "桥梁工程"
          },
          {
            icon: "&#xe6ca;",
            type: 4,
            count: 0,
            label: "互通立交工程"
          },
          {
            icon: "&#xe89a;",

            type: 5,
            count: 0,
            label: "隧道工程"
          },
          {
            icon: "&#xe60a;",
            type: 6,
            count: 0,
            label: "环保工程"
          },
          {
            icon: "&#xe604;",
            type: 7,
            count: 0,
            label: "交通安全设施"
          },
          {
            icon: "&#xe612",
            type: 8,
            count: 0,
            label: "机电工程"
          },
          {
            icon: "&#xe612",
            type: 9,
            count: 0,
            label: "工地建设"
          },

        ],
        //工程级别
        projectLevel:[
          {
            label:"单位工程",
            type:1
          },
          {
            label:"分部工程",
            type:2
          },
          {
            label:"分项工程",
            type:3
          },
          {
            label:"子分项工程",
            type:4
          }
        ],
        div:{
          projPartsName: "",   //工程部位名称
          projPartsCode: "",  //工程部位编码
          stakeNo: "",        //起始桩号
          nodeOrder: "",      //工程部位节点序号
          isLeafNode: "",     //是否叶节点（0-不是；1-是）
          parentId: "",       //上一级工程部位节点id
         /* projPartsType: "",  //工程部位类型（1-路基、2-路面、3-桥梁、4-互通立交、5-隧道、6-环保、7-交安、8-机电）*/
          projPartsLevel: "", //工程部位级别（1-单位工程；2-分部工程；3-分项工程；4-分项子项工程）/
          stdProjectId: "",   //标准工程id
          unitProjId:"" //
        },

      }
    },
    mounted(){
      this.isSub = this.$route.query.isSub;
      this.div.parentId = this.isSub ? this.$store.state.project_Divide.id : this.$store.state.project_Divide.parentId ;
      this.div.unitProjId =  this.$store.state.project_Divide.unitProjId;
    },
    methods:{
      save(){
        var params = new URLSearchParams();
        params.append('div', JSON.stringify(this.div));
        this.axios.post("/HiQuality/div/saveDiv",params).then((res) => {
          this.$tost.message('add')
          console.log(res)
          this.$store.commit('setPorjectDel', Math.random());
        })
        /*this.$router.push("/set/project_divide")*/
      },
      canel(){
        this.$router.push("/set/project_divide")
      }
    }
  }
</script>

<style scoped>
  .con {
    text-align: left;
    display: block;
    width: 100%;
    position: relative;
  }

  .nav {
    height: 28px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 20px;
    box-sizing: border-box;
  }

  .content {
    padding: 0px 30px ;
  }

  .panel{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .panel-left{
      width: 100px;
  }

  .panel-right{

  }


  .icons {
    font-size: 16px;
    margin-right: 5px;
  }

  .btn-warp{
    position: absolute;
    bottom: 10px;
    right: 0px;
    display: flex;

  }

  .btn-box{
    width: 80px;
    height: 30px;
    border: 1px solid #cccccc;
    margin-right: 20px;
    text-align: center;
    line-height: 30px;
  }

  .btn-box:hover{
    background: #146D8E;
    color: white;
    cursor: pointer;
  }
</style>
<style>
  .panel-right .el-input__inner{
    width: 260px;
  }
</style>
