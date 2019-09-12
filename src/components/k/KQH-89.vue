<template>
  <div class="KQH-89 text-center main-c crosswise">
    <p class="top-name-p width-916">K-01 </p>
    <p align="center">贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center">黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
    <p align="center"><strong>顶进施工的涵洞分项工程质量检验评定表</strong></p>
    <div class="public-tilte flex-r margin-auto width-1053 k-title-input">
      <div>
        <p>分项工程名称：<input type="text" v-model="info1.projectName2"></p>
        <p>所属分部工程名称：<input type="text" v-model="info1.projectName"></p>
        <p>施工单位：<input type="text" v-model="info2.unitName"></p>
      </div>
      <div>
        <p>工程部位：<input type="text" placeholder="（桩号、墩台号、孔号）" v-model="info1.projPartsName"></p>
        <p>&nbsp;</p>
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
        <td width="44" valign="center" colspan="2" rowspan="2"><p align="center">基本要求 </p></td>
        <td width="842" valign="center" colspan="24" rowspan="2">
          <p class="t-left">1、涵洞主体结构的强度满足设计要求后方可进行顶进施工。</p>
          <p class="t-left">2、基底应密实，承载力满足设计要求。</p>
          <p class="t-left">3、工作坑的后背承载力应满足顶进施工的要求，顶推力轴线应与桥涵中心线一致。 </p>
          <p class="t-left">4、节间接缝应按设计要求进行防水处理。</p>
          <p class="t-left">5、涵洞壁注浆应满足设计要求。</p>
        </td>
      </tr>
      <tr ></tr>
      <tr >
        <td width="42" valign="center" rowspan="17"><p align="center">实测项目 </p></td>
        <td width="43" valign="center" rowspan="2"><p align="center">项次 </p></td>
        <td width="183" valign="center" colspan="3" rowspan="2"><p align="center">检查项目 </p></td>
        <td width="113" valign="center" rowspan="2"><p align="center">规定值或<br/>允许偏差 </p></td>
        <td width="310" valign="center" colspan="10"><p align="center">实 测 值 或 偏 差 值 </p></td>
        <td width="200" valign="center" colspan="9"><p align="center">质量评定 </p></td>
      </tr>
      <tr >
        <td width="24" valign="center"><p align="center">1 </p></td>
        <td width="25" valign="center"><p align="center">2 </p></td>
        <td width="25" valign="center"><p align="center">3 </p></td>
        <td width="25" valign="center"><p align="center">4 </p></td>
        <td width="25" valign="center"><p align="center">5 </p></td>
        <td width="25" valign="center"><p align="center">6 </p></td>
        <td width="25" valign="center"><p align="center">7 </p></td>
        <td width="25" valign="center"><p align="center">8 </p></td>
        <td width="25" valign="center"><p align="center">9 </p></td>
        <td width="25" valign="center"><p align="center">10 </p></td>
        <td width="60" valign="center" colspan="4"><p align="center">平均值、<br/>代表值 </p></td>
        <td width="57" valign="center"><p align="center">合格率（%） </p></td>
        <td width="60" valign="center" colspan="4"><p align="center">合格判定 </p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" rowspan="6"><p align="center">1 </p></td>
        <td width="73" align="center" rowspan="6"><p align="center">轴线偏位<br/> (mm)</p></td>
        <td width="40" valign="center" rowspan="2"><p align="center">L<15m</p></td>
        <td width="38" valign="center" rowspan="1"><p align="center">箱涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[0].allowValue"></p>
        </td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[0].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="1"><p align="center">管涵</p></td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[1].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="2"><p align="center">15m≤L≤<br/>30m</p></td>
        <td width="38" valign="center" rowspan="1"><p align="center">箱涵</p></td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[2].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="1"><p align="center">管涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[3].allowValue"></p>
        </td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[3].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" align="center" rowspan="2"><p align="center">L>30</p></td>
        <td width="38" valign="center" rowspan="1"><p align="center">箱涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[4].allowValue"></p>
        </td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[4].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="1"><p align="center">管涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[5].allowValue"></p>
        </td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[5].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[5].avgValue"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" rowspan="6"><p align="center">2&#9651; </p></td>
        <td width="38" valign="center" rowspan="6"><p align="center">高程(mm) </p></td>
        <td width="38" valign="center" rowspan="2"><p align="center">L<15m </p></td>
        <td width="38" valign="center"><p align="center">箱涵 </p></td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[6].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[6].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center"><p align="center">管涵 </p></td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[7].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[7].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" align="center" rowspan="2"><p align="center">15m≤L≤<br/>30m</p></td>
        <td width="38" valign="center" rowspan="1"><p align="center">箱涵</p></td>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[8].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[8].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="1"><p align="center">管涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[9].allowValue"></p>
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
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[9].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[9].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" align="center" rowspan="2"><p align="center">L>30m</p></td>
        <td width="38" valign="center" rowspan="1"><p align="center">箱涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[10].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[10].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[10].testItemNo"></p>
        </td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[10].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[10].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[10].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[10].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[10].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" rowspan="1"><p align="center">管涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[11].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[11].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[11].testItemNo"></p>
        </td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[11].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[11].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[11].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[11].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[11].avgValue"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" rowspan="2"><p align="center">3 </p></td>
        <td width="110" valign="center" colspan="2" rowspan="2"><p align="center">相邻两节高差(mm)</p></td>
        <td width="38" valign="center"><p align="center">箱涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[12].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[12].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[12].testItemNo"></p>
        </td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[12].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[12].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[12].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[12].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[13].avgValue"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center"><p align="center">管涵</p></td>
        <td width="83" valign="center" nowrap="nowrap"><p align="center"><input type="text"
                                                                                v-model="controlArr[13].allowValue"></p>
        </td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[13].pageNo"></p></td>
        <td v-show="false" width="32" valign="center"><p><input type="text" v-model="controlArr[13].testItemNo"></p>
        </td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s1"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s2"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s3"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s4"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s5"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s6"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s7"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s8"></p></td>
        <td width="31" valign="center"><p><input type="text" v-model="controlArr[13].s9"></p></td>
        <td width="32" valign="center"><p><input type="text" v-model="controlArr[13].s10"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[13].avgValue"></p></td>
        <td width="57" valign="center"><p><input type="text" v-model="controlArr[13].avgValue"></p></td>
        <td width="60" valign="center" colspan="4"><p><input type="text" v-model="controlArr[13].avgValue"></p></td>
      </tr>
      <tr >
        <td width="334" valign="center" colspan="5"><p align="center">合计</p></td>
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
        <td width="170" valign="center" colspan="5"><p align="center">外观质量 </p></td>
        <td width="247" valign="center" colspan="7">
          <div class="checkbox-div flex-r" v-for="(val,index) in appearanceList" :key="index">
            <span class="checkbox-icon" @click="val.appearValue= !val.appearValue">
                ( <i class="iconfont " v-html="val.appearValue==true ? '&#xe619' : ' '"></i> )
            </span>
            <p class="t-left">{{val.appearName}}</p>
          </div>

        </td>
        <td width="101" valign="center" colspan="4" rowspan="2"><p align="center">监理意见 </p></td>
        <td width="212" valign="center" colspan="6" rowspan="2">
          <p align="center">
            <textarea rows="4" placeholder="通过监理程序，对本分项工程实测项目、外观质量鉴定及质量保证资料的检测检查同意判定为合格"
                      v-model="nameList1[0].auditOpinion" disabled></textarea>
          </p>
          <P>签名：<input type="text" v-model="nameList1[1].fullName" class="input-120" placeholder="（专项监理工程师）" disabled></P>
        </td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="5"><p align="center">质量保证资料 </p></td>
        <td width="247" valign="center" colspan="7"><p align="center">&nbsp;<input type="text"
                                                                                   v-model="obj.qualityAssureDoc"></p>
        </td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="5"><p align="center">工程质量等级评定 </p></td>
        <td width="462" valign="center" colspan="18">
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
    <p class="bot-hint-p width-916">
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
    name: "KQH-89",
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
        appearanceList:[
          {
            appearName:'1.无限制性非受力裂缝和受力裂缝；',
            appearValue:false,
            id:'1'
          },
          {
            appearName:'2.无漏筋和因绣胀引起的混凝土剥落，引发更大面积的锈蚀；',
            appearValue:false ,
            id:'2'
          },
          {
            appearName:'3.砼表面无深度超过10mm的大面积蜂窝、疏松；',
            appearValue:false ,
            id:'3'
          },
          {
            appearName:'4.无棱线不直、翘曲不平等外形缺陷；',
            appearValue:false ,
            id:'4'
          },
          {
            appearName:'5.洞身、进出口与上下游沟槽或引道连接不应阻碍水流或行车，洞身无渗水。',
            appearValue:false ,
            id:'5'
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
        options:[
          {id:0,name:'不合格'},
          {id:1,name:'合格'}
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
        let allowValue = ["≤100", "≤50", "≤150", "≤100", "≤300", "≤200", "+30, -100", "±20", "+40, -150", "±40",
          "+50, -200", "+50, -100", "≤30", "≤20"];
        for (var i = 0; i < 14; i++) {
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
      deleteData(){

      }
    }
  }
</script>

<style scoped>

</style>
