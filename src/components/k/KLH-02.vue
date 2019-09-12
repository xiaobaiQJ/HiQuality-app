<template>
    <div class="KLH-02 text-center main-c crosswise">
      <p class="top-name-p width-968">J-01 </p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p align="center" >黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
      <p align="center" ><strong>树木栽植分项工程质量检验评定表</strong><strong> </strong></p>
      <div class="public-tilte flex-r margin-auto width-1053 k-title-input">
        <div>
          <p>分项工程名称：<input type="text" v-model="info1.projectName2"></p>
          <p>所属分部工程名称：<input type="text" v-model="info1.projectName"></p>
          <p>施工单位：<input type="text" v-model="info2.unitName"></p>
        </div>
        <div>
          <p class="textarea-p-k01"><span>工程部位：</span><textarea cols="30" rows="2" class="input-230" v-model="info1.projPartsName" disabled placeholder="(桩号、墩台号、孔号)"></textarea></p>
          <p>监理单位：<input type="text" v-model="supervisingUnitObj.unitName"></p>
        </div>
        <div>
          <p>所属建设项目(合同段) <input type="text" v-model="info2.contractCode"></p>
          <p >&nbsp;</p>
          <p>分项工程编号：<input type="text" v-model="info1.projPartsCode"></p>
        </div>
      </div>
      <table border="0" cellspacing="0" class="public-tabel table-tr-height-22">
        <tr >
          <td width="44" valign="center" colspan="2" rowspan="2" ><p align="center" >基本要求 </p></td>
          <td width="842" valign="center" colspan="24" rowspan="2" >
            <p class="t-left">1、严禁使用带有严重病虫害的苗木，非检疫对象的病虫害危害痕迹不得超过树体的5%-10%。</p>
            <p class="t-left">2、种植穴（槽）的定点放线应满足设计要求，位置准确、标记明显。</p>
            <p class="t-left">3、带土球苗木栽植应去除不易降解的包装物。</p>
            <p class="t-left">4、树木栽植不得影响行车安全视距；规则式种植、绿篱、球类的植物修剪应整齐，绿篱不得有空缺。</p>
            <p class="t-left">5、孤植树、珍贵树种以及大树（胸径在200mm以上的落叶乔木或常绿阔叶乔木，株高在6m以上或地径在180mm以上的常绿针叶乔木）应全部成活。</p>
          </td>
        </tr>
        <tr></tr>
        <tr >
          <td width="42" valign="center" rowspan="18" ><p align="center" >实测项目 </p></td>
          <td width="43" valign="center" rowspan="2" ><p align="center" >项次 </p></td>
          <td width="173" valign="center" colspan="4" rowspan="2" ><p align="center" >检查项目 </p></td>
          <td width="113" valign="center"  rowspan="2" ><p align="center" >规定值或<br/>允许偏差 </p></td>
          <td width="450" valign="center" colspan="10" ><p align="center" >实 测 值 或 偏 差 值 </p></td>
          <td width="212" valign="center" colspan="9" ><p align="center" >质量评定 </p></td>
        </tr>
        <tr >
          <td width="45" valign="center" ><p align="center" >1 </p></td>
          <td width="45" valign="center" ><p align="center" >2 </p></td>
          <td width="45" valign="center" ><p align="center" >3 </p></td>
          <td width="45" valign="center" ><p align="center" >4 </p></td>
          <td width="45" valign="center" ><p align="center" >5 </p></td>
          <td width="45" valign="center" ><p align="center" >6 </p></td>
          <td width="45" valign="center" ><p align="center" >7 </p></td>
          <td width="45" valign="center" ><p align="center" >8 </p></td>
          <td width="45" valign="center" ><p align="center" >9 </p></td>
          <td width="45" valign="center" ><p align="center" >10 </p></td>
          <td width="60" valign="center" colspan="4" ><p align="center" >平均值、<br/>代表值 </p></td>
          <td width="57" valign="center" ><p align="center" >合格率（%） </p></td>
          <td width="60" valign="center" colspan="4" ><p align="center" >合格判定 </p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="2"><p align="center" >1 </p></td>
          <td width="173" valign="center" colspan="4" ><p align="center" >种植穴（槽）直径（mm）</p></td>
          <td width="83" valign="center" nowrap="nowrap"><p align="center" ><input type="text" v-model="controlArr[0].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[0].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].passJudge"></p></td>
        </tr>
        <tr >
          <td width="173" valign="center" colspan="4" ><p align="center" >种植穴（槽）深度（mm）</p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text"  v-model="controlArr[1].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[1].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].passJudge"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >2 </p></td>
          <td width="113" valign="center" colspan="4" ><p align="center" >苗木数量 </p></td>
          <td width="83" valign="center" ><p align="center" ><input type="text" v-model="controlArr[2].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[2].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].passJudge"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >3&#9651; </p></td>
          <td width="113" valign="center" colspan="4" ><p align="center" >木苗成活率（%） </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[3].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].passJudge"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="11"><p align="center" >4 </p></td>
          <td width="20" valign="center" nowrap="nowrap" rowspan="11"><p align="center" >苗木规格 </p></td>
          <td width="20" valign="center" nowrap="nowrap" rowspan="7"><p align="center" >乔木 </p></td>
          <td width="30" valign="center" nowrap="nowrap" rowspan="5"><p align="center" >胸径（mm） </p></td>
          <td width="100" valign="center" nowrap="nowrap"><p align="center" >≤50 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[4].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].passJudge"></p></td>
        </tr>
        <tr >
          <td width="100" valign="center" nowrap="nowrap"><p align="center" >50~90 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[5].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[5].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[5].passJudge"></p></td>
        </tr>
        <tr >
          <td width="100" valign="center" nowrap="nowrap"><p align="center" >90~150 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[6].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[6].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[6].passJudge"></p></td>
        </tr>
        <tr >
          <td width="100" valign="center" nowrap="nowrap"><p align="center" >150~200 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[7].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[7].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[7].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[7].passJudge"></p></td>
        </tr>
        <tr >
          <td width="100" valign="center" nowrap="nowrap"><p align="center" >＞200 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[8].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[8].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[8].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[8].passJudge"></p></td>
        </tr>
        <tr >
          <td width="130" valign="center" nowrap="nowrap" colspan="2"><p align="center" >高度（mm） </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[9].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[9].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[9].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[9].passJudge"></p></td>
        </tr>
        <tr >
          <td width="130" valign="center" nowrap="nowrap" colspan="2"><p align="center" >冠径（mm） </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[10].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[10].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[10].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[10].passJudge"></p></td>
        </tr>
        <tr >
          <td width="20" valign="center" nowrap="nowrap" rowspan="4"><p align="center" >灌木 </p></td>
          <td width="30" valign="center" nowrap="nowrap" rowspan="2"><p align="center" >高度（mm） </p></td>
          <td width="43" valign="center" nowrap="nowrap"><p align="center" >≥1000 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[11].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[11].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[11].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[11].passJudge"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap"><p align="center" >＜1000 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[12].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[12].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[12].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[12].passJudge"></p></td>
        </tr>
        <tr >
          <td width="30" valign="center" nowrap="nowrap" rowspan="2"><p align="center" >冠径（mm） </p></td>
          <td width="43" valign="center" nowrap="nowrap"><p align="center" >≥1000 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[13].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[13].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[13].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[13].passJudge"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap"><p align="center" >＜1000 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[14].allowValue"></p></td>
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
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[14].avgValue"></p></td>
          <td width="57" valign="center" ><p><input type="text" v-model="controlArr[14].passPer"></p></td>
          <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[14].passJudge"></p></td>
        </tr>
        <tr >
          <td width="334" valign="center"  colspan="6"><p align="center" >合计</p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="31" valign="center" ><p></p></td>
          <td width="32" valign="center" ><p></p></td>
          <td width="60" valign="center" colspan="4"><p></p></td>
          <td width="57" valign="center" ><p></p></td>
          <td width="60" valign="center" colspan="4"><p></p></td>
        </tr>
        <tr >
          <td width="170" valign="center" colspan="6" ><p align="center" >外观质量 </p></td>
          <td width="247" valign="center" colspan="7" >
            <div class="checkbox-div flex-r" v-for="(val,index) in appearanceList" :key="index">
            <span class="checkbox-icon" @click="val.appearValue= !val.appearValue">
                ( <i class="iconfont " v-html="val.appearValue==true ? '&#xe619' : ' '"></i> )
            </span>
              <p class="t-left">{{val.appearName}}</p>
            </div>
                                              
          </td>
          <td width="101" valign="center" colspan="4" rowspan="2"><p align="center" >监理意见 </p></td>
          <td width="212" valign="center" colspan="6" rowspan="2">
            <p align="center" >
              <textarea rows="4" placeholder="通过监理程序，对本分项工程实测项目、外观质量鉴定及质量保证资料的检测检查同意判定为合格" v-model="nameList1[0].auditOpinion" disabled></textarea>
            </p>
            <P>签名：<input type="text" v-model="nameList1[1].fullName" class="input-120" placeholder="（专项监理工程师）" disabled></P>
          </td>
        </tr>
        <tr class="height-30">
          <td width="170" valign="center" colspan="6" ><p align="center" >质 量 保 证 资 料</p></td>
          <td width="247" valign="center" colspan="7" ><p align="center" ><input type="text" v-model="obj.qualityAssureDoc"></p></td>
        </tr>
        <tr class="height-30">
          <td width="170" valign="center" colspan="6" ><p align="center" >工程质量等级评定 </p></td>
          <td width="462" valign="center" colspan="17" >
            <p align="center" class="k-select">质量等级：
              <el-select v-model="obj.qualityGrade" clearable class="input-120">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </p>          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-968">
        检验负责人：<input type="text" class="input-80" v-model="obj.inspectLeader">检测：<input type="text" class="input-80" v-model="obj.inspector">记录：<input type="text" class="input-80" v-model="obj.recorder">复核：<input type="text" class="input-80" v-model="obj.reviewer">
        <input type="text" v-model="dateArr[0]" class="date-input">年    
        <input type="text" v-model="dateArr[1]" class="date-input">月   
        <input type="text" v-model="dateArr[2]" class="date-input">日
      </p>
      <div class="btn">
        <div class="add-btn sub-btn"
             :class="isAdd ? '' : 'disabled-btn' " @click="addData">
          添加
        </div>

        <div class="update-btn sub-btn"
             :class="!isAdd ? '' : 'disabled-btn' "
             @click="updateData"
        >修改
        </div>
        <div class="delete-btn sub-btn" :class="!isAdd ? '' : 'disabled-btn' " @click="deleteData">删除</div>
      </div>
    </div>
</template>

<script>
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "KLH-02",
      data() {
        return {
          isAdd: true,
          controlArr: [],
          //主表
          obj: {
            subList: []
          },
          addObj:{
            subList: []
          },
          obj2:{
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
          options:[
            {id:0,name:'不合格'},
            {id:1,name:'合格'}
          ],
          supervisingUnitObj:{},//监理单位对象
          headerInfo:{}, //表头信息
          info1:{},
          info2:{},
          auditTypeIdArr:[26],
          nameList:[],
          nameList1:[{},{}],
          dateArr:[],
        //外观质量列表
        appearanceList:[
          {
            appearName:'1.乔木、灌木以及球类苗木不得有木烧膛，不得有影响行车安全的偏冠苗木；',
            appearValue:false,
            id:'1'
          },
          {
            appearName:'2.树木应无损伤的断枝、枯枝、严重病虫害枝。',
            appearValue:false ,
            id:'2'
          }
        ],
          id: '1',     //主表id
          // pageNo: '1',   //当前页数
          // testItemNo: "",   //当前行编号
          // allowValue: ""    //规定值或允许偏差
        }
      },

      created(){
        this.init();
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.$common.k.getNameList(this);
        }
      },
      mounted() {
        this.getData();
      },
      methods:{
        setSubObj(){
          let allowValue = ["d+400~d+600","（3/4~4/5）穴径","满足设计要求","≥95","-2","-5","-8","-10","-20","-200","-200","-100","-50","-100","-50"];
          for(var i= 0; i<15;i++){
            let testItemNos = {"testItemNo": i+1,"pageNo": this.pageNo,"allowValue": allowValue[i]};
            this.controlArr.push(testItemNos);
          };
        },
        //初始化模块
        init() {
          this.$common.k.init(this);
        },
        //查询
        getData() {
          this.$common.k.get(this);
        },
        //新增
        addData() {
          this.$common.k.add(this);
        },
        //修改
        updateData() {
          this.$common.k.update(this);
        },
        //删除
        deleteData(){

        }
      }
    }
</script>

<style scoped>

</style>
