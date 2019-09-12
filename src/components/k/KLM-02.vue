<template>
  <div class="KLM-02 text-center main-c crosswise">
    <p class="top-name-p width-1043">K-01 </p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center" >黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
    <p align="center" ><strong>沥青砼面层和沥青碎（砾）石面层分项工程质量检验评定表</strong></p>
    <div class="public-tilte flex-r margin-auto width-1053 k-title-input">
      <div>
        <p>分项工程名称：<input type="text" v-model="info1.projectName2"></p>
        <p>所属分部工程名称：<input type="text" v-model="info1.projectName"></p>
        <p>施工单位：<input type="text" v-model="info2.unitName"></p>
      </div>
      <div>
        <p class="textarea-p-k01"><span>工程部位：</span><textarea cols="30" rows="2" class="input-230" v-model="info1.projPartsName" disabled placeholder="(桩号、墩台号、孔号)"></textarea></p>
        <p>监理单位：<input type="text" v-model="info2.unitName2"></p>
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
          <p class="t-left">1、基层质量应符合规范规定并满足设计要求，表面应干燥、清洁、无浮土。</p>
          <p class="t-left">2、应严格控制沥青混合料拌和的加热温度。拌和后的沥青混合料应均匀、无花白、无粗细料分离和结团成块现象。 </p>
          <p class="t-left">3、应按规定要求控制碾压工艺，严格控制摊铺和碾压温度。 </p>
        </td>
      </tr>
      <tr></tr>
      <tr  >
        <td width="42" valign="center" rowspan="24" ><p align="center" >实测项目 </p></td>
        <td width="43" valign="center" rowspan="2" ><p align="center" >项次 </p></td>
        <td width="173" valign="center" colspan="2" rowspan="2" ><p align="center" >检查项目 </p></td>
        <td width="213" valign="center" colspan="2"><p align="center" >规定值或允许偏差 </p></td>
        <td width="450" valign="center" colspan="10" ><p align="center" >实 测 值 或 偏 差 值 </p></td>
        <td width="212" valign="center" colspan="9" ><p align="center" >质量评定 </p></td>
      </tr>
      <tr >
        <td width="140" valign="center" nowrap="nowrap"><p align="center">高速公路一级公路</p> </td>
        <td width="73" valign="center" nowrap="nowrap"><p align="center">其他公路</p> </td>
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
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >1&#9651; </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >压实度(%) </p></td>
        <td width="83" valign="center" nowrap="nowrap" colspan="2">
          <p align="center" >
            <textarea name="" cols="30" rows="3" v-model="controlArr[0].allowValue" class="text-center"></textarea>
          </p>
        </td>
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
        <td width="43" valign="center" nowrap="nowrap" rowspan="3"><p align="center" >2 </p></td>
        <td width="83" valign="center"  rowspan="3" ><p align="center" >平整度</p></td>
        <td witdth="90" valign="center" ><p align="center">σ(mm)</p> </td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[1].allowValue"></p> </td>
        <td width="40" valign="center" nowrap="nowrap"><p align="center">≤2.5</p> </td>
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
        <td witdth="90" valign="center" ><p align="center">IRI(m/km)</p> </td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[2].allowValue"></p> </td>
        <td width="40" valign="center" nowrap="nowrap"><p align="center">≤4.2</p> </td>
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
        <td witdth="90" valign="center" ><p align="center">最大间隙h(mm)</p> </td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[3].allowValue"></p> </td>
        <td width="40" valign="center" nowrap="nowrap"><p align="center">≤5</p> </td>
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
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >3 </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >弯沉值(0.01mm) </p></td>
        <td width="83" valign="center" nowrap="nowrap" colspan="2"><p align="center" colspan="2"><input type="text" v-model="controlArr[4].allowValue"></p></td>
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
        <td width="43" valign="center" nowrap="nowrap" rowspan="2"><p align="center" >4 </p></td>
        <td width="83" valign="center"  rowspan="2" ><p align="center" >渗水系数<br/>（mL/min） </p></td>
        <td witdth="90" valign="center" ><p align="center">SMA路面</p> </td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[5].allowValue"></p> </td>
        <td width="40" valign="center" nowrap="nowrap" rowspan="2"><p align="center">—</p> </td>
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
        <td witdth="90" valign="center" ><p align="center">其他沥青混<br/>凝土路面</p> </td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[6].allowValue"></p> </td>
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
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >5 </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >摩擦系数 </p></td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[7].allowValue"></p> </td>
        <td width="40" valign="center" nowrap="nowrap" rowspan="2"><p align="center">—</p> </td>
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
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >6 </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >构造深度 </p></td>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"><input type="text"  v-model="controlArr[8].allowValue"></p> </td>
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
        <td width="43" valign="center" nowrap="nowrap"  rowspan="4"><p align="center" >7&#9651; </p></td>
        <td width="83" valign="center"  rowspan="4" ><p align="center" >厚度（mm） </p></td>
        <td width="90" valign="center"  rowspan="2"><p align="center">代表值</p> </td>
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[9].allowValue"></p></td>
        <td width="40" valign="center" nowrap="nowrap" rowspan="2"><p align="center">-8%H</p> </td>
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
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[10].allowValue"></p></td>
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
        <td width="90" valign="center"  rowspan="2"><p align="center">合格值</p> </td>
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[11].allowValue"></p></td>
        <td width="40" valign="center" nowrap="nowrap" rowspan="2"><p align="center">-15%H</p> </td>
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
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[12].allowValue"></p></td>
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
  <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >8 </p></td>
  <td width="113" valign="center"  colspan="2"><p align="center" >中线平面偏位(mm)</p></td>
  <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[13].allowValue"></p></td>
  <td width="40" valign="center" nowrap="nowrap" ><p align="center">30</p> </td>
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
  <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >9 </p></td>
  <td width="113" valign="center"  colspan="2"><p align="center" >纵断高程(mm)</p></td>
  <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[14].allowValue"></p></td>
  <td width="40" valign="center" nowrap="nowrap" ><p align="center">±20</p> </td>
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
  <td width="43" valign="center" nowrap="nowrap"  rowspan="2"><p align="center" >10 </p></td>
  <td width="83" valign="center" rowspan="2" ><p align="center" >宽度（mm） </p></td>
  <td width="90" valign="center"  ><p align="center" >有侧石 </p></td>
  <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[15].allowValue"></p></td>
  <td width="40" valign="center" nowrap="nowrap" ><p align="center" >±30</p></td>
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
  <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[15].avgValue"></p></td>
  <td width="57" valign="center" ><p><input type="text" v-model="controlArr[15].passPer"></p></td>
  <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[15].passJudge"></p></td>
</tr>
<tr >
  <td width="90" valign="center"  ><p align="center" >无侧石 </p></td>
  <td width="43" valign="center" nowrap="nowrap" colspan="2"><p align="center" ><input type="text" v-model="controlArr[16].allowValue"></p></td>
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
  <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[16].avgValue"></p></td>
  <td width="57" valign="center" ><p><input type="text" v-model="controlArr[16].passPer"></p></td>
  <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[16].passJudge"></p></td>
</tr>

    <tr >
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >11 </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >横坡(%)</p></td>
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" colspan="2"><input type="text" v-model="controlArr[17].allowValue"></p></td>
        <td width="40" valign="center" nowrap="nowrap" ><p align="center">±0.5</p> </td>
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
      <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[17].avgValue"></p></td>
      <td width="57" valign="center" ><p><input type="text" v-model="controlArr[17].passPer"></p></td>
      <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[17].passJudge"></p></td>
      </tr>

     <tr >
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >12&#9651; </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >矿料级配 </p></td>
        <td width="83" valign="center" nowrap="nowrap" colspan="2"><p align="center" colspan="2"><input type="text" v-model="controlArr[18].allowValue"></p></td>
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
       <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[18].avgValue"></p></td>
       <td width="57" valign="center" ><p><input type="text" v-model="controlArr[18].passPer"></p></td>
       <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[18].passJudge"></p></td>

      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >13&#9651; </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >沥青含量 </p></td>
        <td width="83" valign="center" nowrap="nowrap" colspan="2"><p align="center" colspan="2"><input type="text" v-model="controlArr[19].allowValue"></p></td>
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
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[19].avgValue"></p></td>
        <td width="57" valign="center" ><p><input type="text" v-model="controlArr[19].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[19].passJudge"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap"  ><p align="center" >14 </p></td>
        <td width="113" valign="center"  colspan="2"><p align="center" >马歇尔稳定度 </p></td>
        <td width="83" valign="center" nowrap="nowrap" colspan="2"><p align="center" colspan="2"><input type="text" v-model="controlArr[20].allowValue"></p></td>
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
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[20].avgValue"></p></td>
        <td width="57" valign="center" ><p><input type="text" v-model="controlArr[20].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[20].passJudge"></p></td>
      </tr>

      <tr >
        <td width="334" valign="center"  colspan="5"><p align="center" >合计</p></td>
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
        <td width="170" valign="center" colspan="4" ><p align="center" >外观质量 </p></td>
        <td width="247" valign="center" colspan="8" >
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
        <td width="170" valign="center" colspan="4" ><p align="center" >质量保证资料 </p></td>
        <td width="247" valign="center" colspan="8" ><p align="center" >&nbsp;<input type="text" v-model="obj.qualityAssureDoc"></p></td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="4" ><p align="center" >工程质量等级评定  </p></td>
        <td width="462" valign="center" colspan="18" >

          <p align="center" class="k-select">质量等级：
            <el-select v-model="obj.qualityGrade" clearable class="input-120">
              <el-option
                v-for="item in options"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </p>
        </td>
      </tr>
    </table>
    <p class="bot-hint-p width-1043">
      检验负责人：<input type="text" class="input-80" v-model="obj.inspectLeader">检测：<input type="text" class="input-80" v-model="obj.inspector">记录：<input type="text" class="input-80" v-model="obj.recorder">复核：<input type="text" class="input-80" v-model="obj.reviewer">
      <input type="text" v-model="dateArr[0]" disabled class="date-input">年    
      <input type="text" v-model="dateArr[1]" disabled class="date-input">月   
      <input type="text" v-model="dateArr[2]" disabled class="date-input">日
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
        name: "KLM-02",
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
              appearName:'1.表面裂缝、松散、推挤、碾压轮迹、油丁、泛油、离析的累计长度不得超过50m。',
              appearValue:false,
              id:'1'
            },
            {
              appearName:'2.搭接处烫缝应无枯焦。',
              appearValue:false ,
              id:'2'
            },
            {
              appearName:'3.路面应无积水。',
              appearValue:false ,
              id:'3'
            },
          ],
          id: '1',     //主表id
          pageNo: '1',   //当前页数
          testItemNo: "",   //当前行编号
          allowValue: ""    //规定值或允许偏差
        }
      },

      //dom都未加载 ，只是编译了模板
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
      //dom加载完成之后触发
      mounted() {
        this.getData();
      },
      methods:{
        setSubObj(){
          let allowValue = ["≥实验室标准密度的96（*98%）；\n" +
          "≥最大理论密度的92%（*94%）；\n" +
          "≥实验段密度的98（*99％）","≤1.2","≤2","—","≤设计验收弯沉值","≤120","≤200","符合设计要求","符合设计要求","总厚度:设计值的-5%","上面层:设计值的-10%","总厚度:设计值的-10%","上面层:设计值的-20%","20","±15","±20","≥设计值","±0.3","符合施工配合比要求","符合施工配合比要求","符合施工配合比要求"];        for(var i= 0; i<21;i++){
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
