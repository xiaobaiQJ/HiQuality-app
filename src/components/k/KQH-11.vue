<template>
  <div class="KQH-11 text-center main-c crosswise">
    <p class="top-name-p width-968">K-01 </p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center">黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
    <p align="center"><strong>拱圈砌体分项工程质量检验评定表</strong><strong> </strong></p>
    <div class="public-tilte flex-r margin-auto width-1053 k-title-input">
      <div>
        <p>分项工程名称：<input type="text" v-model="info1.projectName2"></p>
        <p>所属分部工程名称：<input type="text" v-model="info1.projectName"></p>
        <p>施工单位：<input type="text" v-model="info2.unitName"></p>
      </div>
      <div>
        <p class="textarea-p-k01"><span>工程部位：</span><textarea cols="30" rows="2" class="input-230"
                                                              v-model="info1.projPartsName" disabled
                                                              placeholder="(桩号、墩台号、孔号)"></textarea></p>
        <p>监理单位：<input type="text" v-model="info2.unitName2"></p>
      </div>
      <div>
        <p>所属建设项目(合同段) <input type="text" v-model="info2.contractCode"></p>
        <p>&nbsp;</p>
        <p>分项工程编号：<input type="text" v-model="info1.projPartsCode"></p>
      </div>
    </div>
    <table border="0" cellspacing="0" class="public-tabel table-tr-height-22">
      <tr>
        <td width="85" valign="center" colspan="2" rowspan="2"><p align="center">基本要求 </p></td>
        <td width="888" valign="center" colspan="24" rowspan="2">
          <p class="t-left">&#9633;1、地基承载力应满足设计要求，严禁地基超挖后回填虚土。</p>
          <p class="t-left">&#9633;2、砌体应错缝、坐浆挤紧，缝宽均匀，砌块间嵌缝料和砂浆应饱满。</p>
          <p class="t-left">&#9633;3、拱圈的辐射缝应垂直于拱轴线，辐射缝两侧相邻两行拱石的砌缝应有不小于100mm的错开。</p>
          <p class="t-left">&#9633;4、拱架应牢固、稳定，严格按设计要求的顺序砌筑拱圈和卸架。</p>
          <p class="t-left">&#9633;5、勾缝砂浆强度不得小于砌筑砂浆强度。</p>
        </td>
      </tr>
      <tr></tr>
      <tr>
        <td width="42" valign="center" rowspan="17"><p align="center">实<br/>测<br/>项<br/>目 </p></td>
        <td width="43" valign="center" rowspan="2"><p align="center">项次 </p></td>
        <td width="203" valign="center" colspan="2" rowspan="2"><p align="center">检查项目 </p></td>
        <td width="113" valign="center" rowspan="2"><p align="center">规定值或<br/>允许偏差 </p></td>
        <td width="450" valign="center" colspan="10"><p align="center">实 测 值 或 偏 差 值 </p></td>
        <td width="177" valign="center" colspan="9"><p align="center">质量评定 </p></td>
      <tr>
        <td width="45" valign="center"><p align="center">1 </p></td>
        <td width="45" valign="center"><p align="center">2 </p></td>
        <td width="45" valign="center"><p align="center">3 </p></td>
        <td width="25" valign="center"><p align="center">4 </p></td>
        <td width="45" valign="center"><p align="center">5 </p></td>
        <td width="45" valign="center"><p align="center">6 </p></td>
        <td width="45" valign="center"><p align="center">7 </p></td>
        <td width="45" valign="center"><p align="center">8 </p></td>
        <td width="45" valign="center"><p align="center">9 </p></td>
        <td width="45" valign="center"><p align="center">10 </p></td>
        <td width="60" valign="center" colspan="4"><p align="center">平均值、<br/>代表值 </p></td>
        <td width="57" valign="center"><p align="center">合格率（%） </p></td>
        <td width="60" valign="center" colspan="4"><p align="center">合格判定 </p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap"><p align="center">1&#9651; </p></td>
        <td width="113" valign="center" colspan="2"><p align="center">砂浆强度(MPa)</p></td>
        <td width="83" valign="center"><p align="center"><input type="text" v-model="controlArr[0].allowValue"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[0].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[0].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[0].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[0].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[0].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].passJudge"></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap" rowspan="2"><p align="center">2</p></td>
        <td width="113" valign="center" rowspan="2"><p align="center">砌体外侧平面<br/>偏位(mm)</p></td>
        <td width="90" valign="center"><p align="center">无镶面</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[1].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[1].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[1].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[1].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[1].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[1].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].passJudge"></p></td>
      </tr>
      <tr>
        <td width="60" valign="center"><p align="center">有镶面</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[2].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[2].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[2].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[2].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[2].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[2].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].passJudge"></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap"><p align="center">3&#9651;</p></td>
        <td width="113" valign="center" colspan="2"><p align="center">拱圈厚度（mm）</p></td>
        <td width="83" valign="center"><p align="center"><input type="text" v-model="controlArr[3].allowValue"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[3].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[3].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[3].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[3].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[3].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].passJudge"></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap" rowspan="3"><p align="center">4</p></td>
        <td width="53" valign="center" rowspan="3"><p align="center">相邻镶面石砌<br/>块表层 错 位<br/>（mm）</p></td>
        <td width="60" valign="center"><p align="center">料石、混凝</p></td>
        <td width="83" valign="center" nowrap="nowrap" rowspan="2"><p align="center"><input type="text"
                                                                                            v-model="controlArr[4].allowValue">
        </p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[4].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[4].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[4].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[4].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[4].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].passJudge"></p></td>
      </tr>
      <tr>
        <td width="60" valign="center"><p align="center">土预制块</p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[5].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[5].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[5].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[5].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[5].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[5].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[5].passJudge"></p></td>
      </tr>
      <tr>
        <td width="60" valign="center"><p align="center">块石</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[6].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[6].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[6].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[6].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[6].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[6].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[6].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[6].passJudge"></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap" rowspan="3"><p align="center">5&#9651; </p></td>
        <td width="53" valign="center" rowspan="3"><p align="center">内弧线偏离设<br/>计弧线（mm）</p></td>
        <td width="60" valign="center"><p align="center">跨径≤30m</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[7].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[7].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[7].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[7].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[7].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[7].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[7].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[7].passJudge"></p></td>
      </tr>
      <tr>
        <td width="60" valign="center"><p align="center">跨径＞30m </p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[8].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[8].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[8].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[8].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[8].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[8].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[8].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[8].passJudge"></p></td>
      </tr>
      <tr>
        <td width="60" valign="center"><p align="center">极值</p></td>
        <td width="83" valign="center" nowrap="nowrap">
          <p align="center">
            <textarea name="" cols="30" rows="2" v-model="controlArr[9].allowValue" class="text-center"></textarea>
          </p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[9].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[9].testItemNo"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[9].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[9].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[9].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[9].passPer"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[9].passJudge"></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="2"><p align="center"></p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="32" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
        <td width="57" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="2"><p align="center"></p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="32" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
        <td width="57" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="2"><p align="center"></p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="32" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
        <td width="57" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr>
        <td width="43" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td width="113" valign="center" nowrap="nowrap" colspan="2"><p align="center"></p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td v-show="false" width="32" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="32" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
        <td width="57" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr>
        <td width="334" valign="center" colspan="4"><p align="center">合计</p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="31" valign="center"><p></p></td>
        <td width="32" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
        <td width="57" valign="center"><p></p></td>
        <td width="60" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr>
        <td width="170" valign="center" colspan="4"><p align="center">外观质量 </p></td>
        <td width="247" valign="center" colspan="8">
          <div class="checkbox-div flex-r" v-for="(val,index) in appearanceList" :key="index">
            <span class="checkbox-icon" @click="val.appearValue= !val.appearValue">
                ( <i class="iconfont " v-html="val.appearValue==true ? '&#xe619' : ' '"></i> )
            </span>
            <p class="t-left">{{val.appearName}}</p>
          </div>
              
        </td>
        <td width="101" valign="center" colspan="3" rowspan="2"><p align="center">监理意见 </p></td>
        <td width="212" valign="center" colspan="6" rowspan="2">
          <p align="center">
            <textarea rows="4" placeholder="通过监理程序，对本分项工程实测项目、外观质量鉴定及质量保证资料的检测检查同意判定为合格"
                      v-model="nameList1[0].auditOpinion" disabled></textarea>
          </p>
          <P>签名：<input type="text" v-model="nameList1[1].fullName" class="input-120" placeholder="（专项监理工程师）" disabled>
          </P>
        </td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="4"><p align="center">质量保证资料 </p></td>
        <td width="247" valign="center" colspan="8"><p align="center"><input type="text" v-model="obj.qualityAssureDoc">
        </p></td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="4"><p align="center">工程质量等级评定 </p></td>
        <td width="462" valign="center" colspan="17">
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
    <p class="bot-hint-p width-968">
      检验负责人：<input type="text" class="input-80" v-model="obj.inspectLeader">检测：<input type="text" class="input-80"
                                                                                      v-model="obj.inspector">记录：<input
      type="text" class="input-80" v-model="obj.recorder">复核：<input type="text" class="input-80" v-model="obj.reviewer">
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
    name: "K-01",
    data() {
      return {
        isAdd: true,
        controlArr: [],
        //主表
        obj: {
          subList: []
        },
        addObj: {
          subList: []
        },
        obj2: {
          subList: []
        },
        //外观质量列表
        appearanceList: [
          {
            appearName: '1.砌缝开裂、勾缝不密实和脱落的累计换算面积不得超过该面面积的1.5%，单个换算面积不应大于0.04㎡，且不应存在宽度超过0.5㎜、长度大于砌块尺寸的非受力砌缝裂隙。换算面积应按缺陷缝长度乘以0.1m计算。',
            appearValue: false,
            id: '1'
          },
          {
            appearName: '2.砌缝应无空洞、宽缝、大堆砂浆填隙和假缝。',
            appearValue: false,
            id: '2'
          }
        ],
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
        options: [
          {id: 0, name: '不合格'},
          {id: 1, name: '合格'}
        ],
        headerInfo: {}, //表头信息
        info1: {},
        info2: {},
        auditTypeIdArr: [26],
        nameList: [],
        nameList1: [{}, {}],
        dateArr: [],
        id: '1',     //主表id
        pageNo: '1',   //当前页数
        testItemNo: "",   //当前行编号
        allowValue: ""    //规定值或允许偏差
      }
    },

    //dom都未加载 ，只是编译了模板
    created() {
      this.init();
    },
    //计算属性
    computed: {
      //获取vuex数据
      getNameList: function () {
        return this.$store.state.nameList
      }
    },
    //监听
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
    methods: {
      setSubObj() {
        let allowValue = ["在合格标准内", "向外≤30，向内≤10", "向外≤20，向内≤10", "+30，-0", "≤3", "", "≤5", "±20", "±L/1 500跨径", "1/4跨、3/4跨:允许偏差的2倍且反向"];
        for (var i = 0; i < allowValue.length; i++) {
          let testItemNos = {"testItemNo": i + 1, "pageNo": this.pageNo, "allowValue": allowValue[i]};
          this.controlArr.push(testItemNos);
        }
        ;
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
      deleteData() {

      }

    }
  }
</script>

<style scoped>
  .color-red {
    color: red;
    font-size: 12px;
  }

  .weight {
    font-weight: bold;
  }
</style>
