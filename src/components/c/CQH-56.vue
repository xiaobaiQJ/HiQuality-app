<template>
  <div class="CQH-56 text-center main-c crosswise">
    <p class="top-name-p ">CQH-56 </p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center" >黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
    <p align="center" ><strong>梁桥钢箱梁制作现场质量检验报告单</strong><strong> </strong></p>
    <div class="text-left ">
      <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
      <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
      <div class="myClear"></div>
    </div>
    <div class="text-left ">
      <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
      <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
      <div class="myClear"></div>
    </div>
    <table border="0" cellspacing="0" class="public-tabel table-tr-height-18" >
      <tr >
        <td width="157" valign="center" nowrap="nowrap" colspan="4" ><p align="center" >工程名称 </p></td>
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
        <td width="157" valign="center" nowrap="nowrap" colspan="4" ><p align="center" >工程部位 </p></td>
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
        <td width="203" valign="center" nowrap="nowrap" colspan="3" rowspan="2" ><p align="center" >检查项目 </p></td>
        <td width="133" valign="center" rowspan="2" ><p align="center" >规定值或<br />
          允许偏差 </p></td>
        <td width="164" valign="center" nowrap="nowrap" rowspan="2" ><p align="center" >检查方法和频率 </p></td>
        <td width="500" valign="center" nowrap="nowrap" colspan="10" ><p align="center" >实测值或实测偏差值 </p></td>
      </tr>
      <tr >
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >1 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >2 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >3 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >4 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >5 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >6 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >7 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >8 </p></td>
        <td width="31" valign="center" nowrap="nowrap" ><p align="center" >9 </p></td>
        <td width="32" valign="center" nowrap="nowrap" ><p align="center" >10 </p></td>
      </tr>
      <tr class="ad-textarea">
        <td width="43" valign="center" nowrap="nowrap" rowspan="2" ><p align="center" >1&#9651; </p></td>
        <td width="56" align="center"  rowspan="2" ><p align="center" >梁高<br/>
          (mm)</p></td>
        <td width="56" valign="center" rowspan="1" colspan="2" ><p align="center" >h≤2m</p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].allowValue" disabled></p></td>
        <td width="114" valign="center" rowspan="2" ><p align="center" >钢尺:测两端腹板处</p></td>
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
      <tr >
        <td width="51" valign="center" colspan="2"><p align="center" >h＞2m </p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].allowValue" disabled></p></td>
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
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >2 </p></td>
        <td width="51" valign="center" colspan="3" ><p align="center" >跨度L(mm) </p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].allowValue" disabled></p></td>
        <td width="51" valign="center" ><p align="center" >钢尺:测支承中心距离，(L以m计)  </p></td>
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
      <tr >
        <td width="43" valign="center" nowrap="nowrap" rowspan="1" ><p align="center" >3 </p></td>
        <td width="23" valign="center" colspan="3" ><p align="center" >全  长(mm)</p></td>
        <td width="123" valign="center" nowrap="nowrap"><p align="center" ><input type="text"  v-model="controlArr[3].allowValue" disabled></p></td>
        <td width="114" valign="center" ><p align="center" >钢尺：测中心线处 </p></td>
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
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >4&#9651; </p></td>
        <td width="113" valign="center" colspan="3" ><p align="center" >腹板中心距(mm) </p></td>
        <td width="123" valign="center" ><p align="center" ><input type="text" v-model="controlArr[4].allowValue" disabled></p></td>
        <td width="114" valign="center" ><p align="center" >钢尺:检查两端两腹板中心距</p></td>
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
      <tr >
        <td width="43" valign="center" nowrap="nowrap"><p align="center" >5</p></td>
        <td width="113" valign="center" colspan="3" ><p align="center" >横断面对角线差(mm) </p></td>
        <td width="123" valign="center" nowrap="nowrap"><p align="center" ><input type="text" v-model="controlArr[5].allowValue" disabled></p></td>
        <td width="114" valign="center"><p >钢量:测两端断面 </p></td>
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
        <td width="43" valign="center" nowrap="nowrap"><p align="center" >6 </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >旁  弯(mm) </p></td>
        <td width="123" valign="center" nowrap="nowrap"><p align="center" ><input type="text" v-model="controlArr[6].allowValue" disabled></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >拉线用尺量: 测跨中部、四分点3处 </p></td>
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
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >7 </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >拱  度(mm)</p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[7].allowValue" disabled></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >拉线用尺量: 测跨中部、四分点3处</p></td>
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
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >8 </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >腹板平面度(mm)</p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[8].allowValue" disabled></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >平尺及塞尺: 每腹板检查3处 </p></td>
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
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >9</p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >扭  曲(mm) </p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[9].allowValue" disabled></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >置于平台,四角中有三角接触平台, 用尺量另一角与平台间隙 </p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[9].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[9].testItemNo"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s1"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s2"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s3"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s4"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s5"></p></td>
        <td width="31" valign="center" > <p><input type="text" v-model="controlArr[9].s6"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s7"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s8"></p></td>
        <td width="31" valign="center" ><p><input type="text" v-model="controlArr[9].s9"></p></td>
        <td width="32" valign="center" ><p><input type="text" v-model="controlArr[9].s10"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >10 </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >对接错边（mm）</p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[10].allowValue" disabled></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >钢尺：测各对接断面 </p></td>
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
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >11 </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >焊缝尺寸</p></td>
        <td width="123" valign="center" nowrap="nowrap" rowspan="2"><p align="center" ><input type="text" v-model="controlArr[11].allowValue"></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >量规: 检查全部，每条焊缝检查3处  </p></td>
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
      <tr class="ad-textarea">
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >12&#9651; </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >焊缝探伤</p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >超声法: 检查全部;射线法: 符合设
          计规定, 设计未规定时按10%抽查, 不少于3条 </p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[12].pageNo"></p></td>
        <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[12].testItemNo"></p></td>
        <!--<td width="31" valign="center" ><p><input type="text" v-model="controlArr[18].s1"></p></td>-->
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
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >13&#9651; </p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >高强螺栓扭矩</p></td>
        <td width="123" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[12].allowValue" disabled></p></td>
        <td width="114" valign="center" nowrap="nowrap" ><p align="center" >测力扳手:检查5%,且不少于2个 </p></td>
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
      <tr class="ad-textarea c-bot-input">
        <td colspan="6"><p class="t-left">检查意见：
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
    name: "CQH-56",
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
        auditTypeIdArr:[39,26],
        nameList:[],
        nameList1:[{},{}],
        nameList2:[{},{}],

        headerInfo:{}, //表头信息
        id: 0,     //主表id
        pageNo: '1'   //当前页数
      }
    },
    created(){
      this.id = this.$route.query.id;
      this.rec.tableId = this.$store.state.tableId;
      this.rec.projPartsId = this.$store.state.projPartsId;
      this.setSubObj();
      let obj = this.$store.state.unitTable;
      if(obj.data!='' && obj.data!=null && obj.data!=undefined){
        this.headerInfo = obj.data;
      }
      //调用获取监理等流程人签字栏数据接口
      this.getSignName();
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      //获取rec记录信息
      this.$publicFun.getRecInfo()
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
        if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
          this.nameList.forEach((item,index)=>{
            if(item!='' && item!=undefined){
              if(item[1].auditTypeId==39){
                this.nameList1 = item;
              }
              if(item[1].auditTypeId==26){
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
    mounted() {
      this.getData();
    },
    methods:{
      setSubObj(){
        let allowValue = ["±2","±4","±8","±15","±3","≤4","3+L/10000","≤h/350，且≤8","≤h/350，且≤8","每米≤1，且每段≤10",
          "≤2","符合设计要求","±10%"];
        for(var i= 0; i<14;i++){
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
          BBtCM:JSON.stringify(this.obj),
          BQcRecInfo:JSON.stringify(this.rec)
        }))
          .then(res=>{
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
          BBtCM:JSON.stringify(this.obj)
        }))
          .then(res=>{
            console.log("修改接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.$tost.edit();
              this.$skip.skipProcess();
              this.getData();
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
