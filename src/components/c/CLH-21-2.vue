<template>
  <div class="CLH-21-2 text-center main-c crosswise">
    <p class="top-name-p ">CLH-21-2 </p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center" >兴 义 环 城 义 高 速 公 路 </p>
    <p align="center" ><strong> 带状绿地（碎落台、边坡平台等）球类、藤本、棕榈类植物栽植现场质量检验报告单</strong><strong> </strong></p>
    <div class="text-left ">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left ">
      <span>监理单位：
        <el-select v-model="supervisingUnitObj.unitName" placeholder="请选择监理" @change="setSupervisor">
          <el-option
                  v-for="item in supervisingUnitList"
                  :key="item.id"
                  :label="item.unitName"
                  :value="item.id">
          </el-option>
        </el-select>
      </span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table border="0" cellspacing="0" class="public-tabel table-tr-height-22 table-tr-height-18" >
      <tr >
        <td width="157" valign="center" nowrap="nowrap" colspan="5" ><p align="center" >工程名称 </p></td>
        <td width="197" valign="center" nowrap="nowrap" colspan="2" >
          <p><input type="text" v-model="obj.m1"></p>
        </td>
        <td width="71" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >施工时间 </p></td>
        <td width="238" valign="center" nowrap="nowrap" colspan="7" >
        <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="157" valign="center" nowrap="nowrap" colspan="5" ><p align="center" >工程部位 </p></td>
        <td width="197" valign="center" nowrap="nowrap" colspan="2" >
          <p><input type="text" v-model="obj.m3"></p>
        </td>
        <td width="71" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >检查时间 </p></td>
        <td width="238" valign="center" nowrap="nowrap" colspan="7" >
         <div class="block">
            <el-date-picker v-model="obj.m4" type="date" size="mini" value-format="yyyy-MM-dd"></el-date-picker>
          </div>
        </td>
      </tr>
      <tr >
        <td width="43" valign="center" rowspan="2" ><p align="center" >项<br />
          次 </p></td>
        <td width="213" valign="center" nowrap="nowrap" colspan="4" rowspan="2" ><p align="center" >检查项目 </p></td>
        <td width="113" valign="center" rowspan="2" ><p align="center" >规定值或<br />
          允许偏差 </p></td>
        <td width="174" valign="center" nowrap="nowrap" rowspan="2" ><p align="center" >检查方法和频率 </p></td>
        <td width="500" valign="center" nowrap="nowrap" colspan="10" ><p align="center" >实测值或实测偏差值 </p></td>
      </tr>
      <tr >
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >1 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >2 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >3 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >4 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >5 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >6 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >7 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >8 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >9 </p></td>
        <td width="45" valign="center" nowrap="nowrap" ><p align="center" >10 </p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="43" valign="center" nowrap="nowrap" rowspan="2" ><p align="center" >1</p></td>
        <td width="114" align="center"  colspan="4" ><p align="center" >种植穴（槽）直径（mm）</p></td>
        <td width="113" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].allowValue" disabled></p></td>
        <td width="114" valign="center" rowspan="2"><p align="center" > 尺量：抽查全部种植穴（槽）5%，且不小于10个，小于10个时应全部检查。</p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[0].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[0].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[0].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[0].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="114" align="center"  colspan="4" ><p align="center" >种植穴（槽）深度（mm）</p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[1].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[1].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[1].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[1].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >2</p></td>
        <td width="114" align="center"  colspan="4"  ><p align="center" >苗木数量</p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].allowValue"></p></td>
        <td width="114" valign="center" rowspan="2"><p align="center" > 目测或无人机航拍测量：带状绿地每1Km检查100m内的苗木。</p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[2].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[2].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[2].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[2].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >3&#9651;</p></td>
        <td width="114" align="center"  colspan="4" ><p align="center" >苗木成活率（%）</p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[3].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[3].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[3].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[3].s10"></p></td>
      </tr>
      <tr >
      <tr >
        <td width="43" valign="center" nowrap="nowrap" rowspan="17"><p align="center" >4 </p></td>
        <td width="40" valign="center"  rowspan="17" ><p align="center" >苗木<br/>规格</p></td>
        <td width="40" valign="center" rowspan="8"><p align="center">球类 </p></td>
        <td width="93" valign="center" rowspan="4" ><p align="center">冠经(mm)</p></td>
        <td width="100" valign="center"  ><p align="center"><500 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].allowValue" disabled></p></td>
        <td width="51" valign="center" rowspan="17"><p align="center" >尺量：带状绿地每1Km检查100m内的苗木。</p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[4].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[4].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[4].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[4].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" > 500～1000 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[5].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[5].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[5].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[5].s10"></p></td>
      </tr>
      <tr >
        <td width="28" valign="center" ><p align="center" >1000～2000 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[6].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[6].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[6].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[6].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" > ＞2000</p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[7].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[7].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[7].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[7].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[7].s10"></p></td>
      </tr>
      <tr >
        <td width="28" valign="center" rowspan="4" ><p align="center">高度(mm)</p></td>
        <td width="28" valign="center"  ><p align="center" ><500</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[8].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[8].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[8].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[8].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[8].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >500～1000</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[9].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[9].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[9].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[9].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >1000～2000</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[10].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[10].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[10].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[10].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[10].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >＞2000</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[11].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[11].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[11].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[11].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[11].s10"></p></td>
      </tr>
      <tr >
        <td width="28" valign="center" rowspan="2" ><p align="center" >藤本 </p></td>
        <td width="28" valign="center"  ><p align="center" >主蔓长(mm)</p></td>
        <td width="28" valign="center"  ><p align="center" >≥1500 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[12].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[12].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[12].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[12].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[12].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >主蔓径(mm)</p></td>
        <td width="28" valign="center"  ><p align="center" >≥10 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[13].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[13].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[13].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[13].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[13].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center" rowspan="7"><p align="center">棕榈<br/>类植<br/>物</p></td>
        <td width="28" valign="center" rowspan="4" ><p align="center">株高(mm)</p></td>
        <td width="28" valign="center"  ><p align="center">≤1000 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[14].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[14].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[14].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[14].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[14].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >1000～2500</p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[15].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[15].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[15].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[15].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[15].s10"></p></td>
      </tr>
      <tr >
        <td width="28" valign="center" ><p align="center" >2500～4000 </p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[16].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[16].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[16].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[16].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[16].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" > ＞4000</p></td>
        <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[17].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[17].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[17].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[17].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[17].s10"></p></td>
      </tr>
      <tr >
        <td width="28" valign="center" rowspan="3" ><p align="center">地经(mm)</p></td>
        <td width="23" valign="center"  ><p align="center" >≤100</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[18].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[18].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[18].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[18].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >100～400</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[19].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[19].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[19].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[19].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[19].s10"></p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="28" valign="center"  ><p align="center" >＞400</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[20].allowValue" disabled></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[20].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[20].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s5"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[20].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[20].s10"></p></td>
      </tr>
      <tr class="ad-textarea c-bot-input">
        <td colspan="7"><p class="t-left">检查意见：
          <textarea name="" cols="30" rows="3" v-model="obj.m5"></textarea>
        </p>
          <div class="t-left dateDiv flex-r">
            <p class="t-left">质检员： <input type="text" class="input-120" v-model="obj.m6"></p>
            <p>质检工程师：<input type="text" class="input-120" v-model="obj.m9"></p>
            <div class="block display-lnl">
              <span class="demonstration">日期：</span>
              <el-date-picker
                class="input-105"
                size="mini"
                v-model="obj.m10" type="date"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
          </div>
        </td>
        <td colspan="10">
          <p class="t-left">检查意见：
            <textarea name="" cols="30" rows="3" v-model="nameList2[0].auditOpinion" disabled></textarea>
          </p>
          <div class="flex-r">
            <p class="t-left">监理员：<input type="text" class="input-120"v-model="nameList1[1].fullName" disabled></p>
            <p class="t-left">
              监理工程师：<input type="text" class="input-120" v-model="nameList2[1].fullName" disabled>日期：<input type="text" class="input-80" v-model="nameList2[0].auditTime" disabled>
            </p>
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
      <div class="delete-btn sub-btn long-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="clearData">清空当前页</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "CLH-21-2",
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
        supervisingUnitList:[], //监理列表
        supervisingUnitObj:{},   //当前监理对象
        auditTypeIdArr:[39,26],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],
        headerInfo:{}, //表头信息
        id: 0,     //主表id
        pageNo: '1'   //当前页数
      }
    },
    created() {
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      this.setSubObj();
      let obj = this.$store.state.unitTable;
      if(obj.data!='' && obj.data!=null && obj.data!=undefined){
        this.headerInfo = obj.data;
      }
      //获取rec记录信息
      this.$publicFun.getRecInfo()
      //获取绿化页面监理列表接口数据
      this.$publicFun.getSupervisingList()
      this.supervisingUnitList = this.$store.state.supervisingUnitList;
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;

    },
    mounted() {
      this.getData();
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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0) {
          this.nameList.forEach((item, index) => {
            if (item != '' && item != undefined) {
              if (item[1].auditTypeId == 39) {
                this.nameList1 = item;
              }
              if (item[1].auditTypeId == 26) {
                this.nameList2 = item;
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
    methods:{
      /**
       * 当监理改变时保存至主表consId
       * @method setSupervisor
       * @param {无} 无 参数说明
       * @return {返回值类型} 返回值说明
       */
      setSupervisor(id,unitName) {
        this.obj.consId = id;
      },
      setSubObj(){
        let allowValue = ["d+400～d+600","（3/4～4/5）穴径","满足设计要求","≥95","0","-50","-100","-200","0","-50","-100",
          "-200","-100","0","0","-100","-200","-300","-10","-20","-30"];
        for(var i= 0; i<21;i++){
          let testItemNos = {"testItemNo": i+1,"pageNo": this.pageNo,"allowValue": allowValue[i]};
          this.controlArr.push(testItemNos);
        }
      },
      //查询
      getData(){
        this.axios.get('/HiQuality/c/findById',{
          params:{
            tableId: this.rec.tableId,
            projPartsId: this.rec.projPartsId
          }
        }).then(res=>{
          console.log("查询接口")
          console.log(res);
          if(res.data.status==200){
            this.obj = res.data.data.main;
            this.obj.subList = res.data.data.sub;
            let arr = []
            if (this.obj.subList != undefined && this.obj.subList.length >0){
              this.obj.subList.forEach((item) => {
                arr.push(item)
              })
            }
            this.controlArr = arr;
            this.isAdd = false;
            //获取绿化页面监理对象接口数据
            this.$publicFun.getSupervisingUnit(this.obj.consId);
            this.supervisingUnitObj = this.$store.state.supervisingUnit;
          }
        })
      },
      //新增
      addData(){
        if (!this.isAdd) {
          return false;
        }
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/c/save',this.$qs.stringify({
          BBtCM: JSON.stringify(this.obj),
          BQcRecInfo: JSON.stringify(this.rec)
        })).then(res=>{
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
      updateData(){
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/c/update',this.$qs.stringify({
            BBtCM: JSON.stringify(this.obj)
          })
        ).then(res=>{
          console.log("修改接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = false;
            this.$tost.edit();
            this.$skip.skipProcess();
          }
        })
      },
      //清空当前页
      clearData(){
        this.controlArr.forEach((item) =>{
          item.s1 = "";
          item.s2 = "";
          item.s3 = "";
          item.s4 = "";
          item.s5 = "";
          item.s6 = "";
          item.s7 = "";
          item.s8 = "";
          item.s9 = "";
          item.s10 = "";
        })
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/c/update',this.$qs.stringify({
          BBtCM:JSON.stringify(this.obj)
        }))
          .then(res=>{
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
            }
          })
      },
      //删除
      deleteData(){
        this.axios.get('/HiQuality/c/deleteById',{
          params:{
            id:this.id,
            pageNo: this.pageNo
          }
        }).then(res=>{
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = true;
            this.obj = {subList:[]};
            this.controlArr = [];
            this.setSubObj();
          }
        })
      }
    }

  }
</script>

<style scoped>

</style>
