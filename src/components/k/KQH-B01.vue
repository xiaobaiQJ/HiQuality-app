<template>
  <div class="KQH-B01 text-center">
    <p class="top-name-p width-949">K-01  </p>
    <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
    <p align="center" >黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
    <p align="center" ><strong>桥涵基础基底分项工程质量检验评定表</strong><strong> </strong></p>
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
        <td width="85" valign="center" colspan="2" rowspan="2" ><p align="center" >基本要求 </p></td>
        <td width="818" valign="center" colspan="24" rowspan="2" >
          <p class="t-left"></p>
          <p class="t-left"></p>
          <p class="t-left"></p>
        </td>
      </tr>
      <tr></tr>
      <tr >
        <td width="42" valign="center" rowspan="15" ><p align="center" >实<br/>测<br/>项<br/>目 </p></td>
        <td width="43" valign="center" rowspan="2" ><p align="center" >项次 </p></td>
        <td width="173" valign="center" colspan="3" rowspan="2" ><p align="center" >检查项目 </p></td>
        <td width="123" valign="center"  rowspan="2" ><p align="center" >规定值或<br/>允许偏差 </p></td>
        <td width="450" valign="center" colspan="10" ><p align="center" >实 测 值 或 偏 差 值 </p></td>
        <td width="177" valign="center" colspan="10" ><p align="center" >质量评定 </p></td>
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
        <td width="75" valign="center" colspan="4" ><p align="center" >平均值、<br/>代表值 </p></td>
        <td width="52" valign="center" ><p align="center" >合格率（%） </p></td>
        <td width="75" valign="center" colspan="4" ><p align="center" >合格判定 </p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >2 </p></td>
        <td width="114" align="center" colspan="3"><p align="center" >平面尺寸(mm)</p></td>
        <td width="113" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].allowValue" disabled></p></td>
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
        <td width="52" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].avgValue"></p></td>
        <td width="62" valign="center" ><p><input type="text" v-model="controlArr[0].passPer"></p></td>
        <td width="75" valign="center" colspan="4"><p><input type="text" v-model="controlArr[0].passJudge"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" rowspan="2"><p align="center" >3&#9651; </p></td>
        <td width="76" valign="center" colspan="2" rowspan="2" ><p align="center" >基础底标高(mm)</p></td>
        <td width="38" valign="center" ><p align="center" >土质</p></td>
        <td width="113" valign="center" ><p align="center" ><input type="text" v-model="controlArr[1].allowValue" disabled></p></td>
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
        <td width="52" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].avgValue"></p></td>
        <td width="62" valign="center" ><p><input type="text" v-model="controlArr[1].passPer"></p></td>
        <td width="75" valign="center" colspan="4"><p><input type="text" v-model="controlArr[1].passJudge"></p></td>
      </tr>
      <tr >
        <td width="38" valign="center" ><p align="center" >石质</p></td>
        <td width="113" valign="center" ><p align="center" ><input type="text" v-model="controlArr[2].allowValue" disabled></p></td>
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
        <td width="52" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].avgValue"></p></td>
        <td width="62" valign="center" ><p><input type="text" v-model="controlArr[2].passPer"></p></td>
        <td width="75" valign="center" colspan="4"><p><input type="text" v-model="controlArr[2].passJudge"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >4</p></td>
        <td width="76" valign="center" colspan="3"  ><p align="center" >基底高程(mm) </p></td>
        <td width="113" valign="center" nowrap="nowrap"><p align="center" ><input type="text" v-model="controlArr[3].allowValue" disabled></p></td>
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
        <td width="52" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].avgValue"></p></td>
        <td width="62" valign="center" ><p><input type="text" v-model="controlArr[3].passPer"></p></td>
        <td width="75" valign="center" colspan="4"><p><input type="text" v-model="controlArr[3].passJudge"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ><p align="center" >5</p></td>
        <td width="76" valign="center" colspan="3"  ><p align="center" >轴线偏位(mm) </p></td>
        <td width="113" valign="center" nowrap="nowrap"><p align="center" ><input type="text" v-model="controlArr[4].allowValue" disabled></p></td>
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
        <td width="52" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].avgValue"></p></td>
        <td width="62" valign="center" ><p><input type="text" v-model="controlArr[4].passPer"></p></td>
        <td width="75" valign="center" colspan="4"><p><input type="text" v-model="controlArr[4].passJudge"></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ></td>
        <td width="113" valign="center" colspan="3"></td>
        <td width="113" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ></td>
        <td width="113" valign="center" colspan="3"></td>
        <td width="113" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
      <td width="43" valign="center" nowrap="nowrap" ></td>
      <td width="113" valign="center" colspan="3"></td>
      <td width="113" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
    </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ></td>
        <td width="113" valign="center" colspan="3"></td>
        <td width="113" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ></td>
        <td width="113" valign="center" colspan="3"></td>
        <td width="113" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ></td>
        <td width="113" valign="center" colspan="3"></td>
        <td width="113" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
        <td width="43" valign="center" nowrap="nowrap" ></td>
        <td width="113" valign="center" colspan="3"></td>
        <td width="113" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="31" valign="center" ></td>
        <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
      <td width="43" valign="center" nowrap="nowrap" ></td>
      <td width="113" valign="center" colspan="3"></td>
      <td width="113" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="31" valign="center" ></td>
      <td width="32" valign="center" ></td>
        <td width="52" valign="center" colspan="4"><p></p></td>
        <td width="62" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
    </tr>
      <tr >
        <td width="339" valign="center"  colspan="5"><p align="center" >合计</p></td>
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
        <td width="75" valign="center" colspan="4"><p></p></td>
        <td width="52" valign="center" ><p></p></td>
        <td width="75" valign="center" colspan="4"><p></p></td>
      </tr>
      <tr >
        <td width="238" valign="center" colspan="5" ><p align="center" >外观质量 </p></td>
        <td width="309" valign="center" colspan="7" >
          <p class="t-left"></p>                                     
          <p class="t-left"></p>
        </td>
        <td width="124" valign="center" colspan="4" rowspan="2"><p align="center" >监理意见 </p></td>
        <td width="212" valign="center" colspan="6" rowspan="2">
          <p align="center" >
            <textarea rows="4" placeholder="通过监理程序，对本分项工程实测项目、外观质量鉴定及质量保证资料的检测检查同意判定为合格" v-model="nameList1[0].auditOpinion" disabled></textarea>
          </p>
          <P>签名：<input type="text" v-model="nameList1[1].fullName" class="input-120" placeholder="（专项监理工程师）" disabled></P>
        </td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="5" ><p align="center" >质 量 保 证 资 料</p></td>
        <td width="247" valign="center" colspan="7" ><p align="center" ><input type="text" v-model="obj.qualityAssureDoc"></p></td>
      </tr>
      <tr class="height-30">
        <td width="170" valign="center" colspan="5" ><p align="center" >工程质量等级评定 </p></td>
        <td width="462" valign="center" colspan="17" ><p align="center" class="k-select">质量等级：
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
    <p class="bot-hint-p width-949">
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
  import {splitDate, joinDate} from '../../utils/utils'
  export default {
    name: "KQH-B01",
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
        id: '1',     //主表id
        // pageNo: '1',   //当前页数
        // testItemNo: "",   //当前行编号
        // allowValue: ""    //规定值或允许偏差
      }
    },

    //dom都未加载 ，只是编译了模板
    created(){
      this.setSubObj();
      this.headerInfo = this.$store.state.k01;
      if(this.headerInfo.projDiv!='' && this.headerInfo.projDiv!=null && this.headerInfo.projDiv!=undefined){
        this.info1 = this.headerInfo.projDiv;
      }
      if(this.headerInfo.obj.data!='' && this.headerInfo.obj.data!=null && this.headerInfo.obj.data!=undefined){
        this.info2 = this.headerInfo.obj.data;
      }
//调用获取监理等流程人签字栏数据接口
      this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
      //获取监理等流程人签字栏数据
      this.nameList = this.$store.state.nameList;
      if(this.nameList!='' && this.nameList!=undefined && this.nameList.length>0){
        this.nameList.forEach((item,index)=>{
          if(item!='' && item!=undefined){
            if(item[1].auditTypeId==26){
              this.nameList1 = item;
              this.dateArr = splitDate(this.nameList1[0].auditTime,'-');
            }
          }
        })
      }

    },
    //dom加载完成之后触发
    mounted() {
      this.getData();
    },
    methods:{
      setSubObj(){
        let allowValue = ["沉降差≤试验段确定的沉降差","≤设计验收弯沉值","+10,-20","≤50","符合设计要求","≤20","±0.3","符合设计要求","符合设计要求"];
        for(var i= 0; i<9;i++){
          let testItemNos = {"testItemNo": i+1,"pageNo": this.pageNo,"allowValue": allowValue[i]};
          this.controlArr.push(testItemNos);
        };
      },
      //查询
      getData(){
        this.axios.get('/HiQuality/c/findById',{
          params:{
            id:this.id,
            pageNo: this.pageNo
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
                delete item.id;
                delete item.mid;
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
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/k/save',this.$qs.stringify({
          BBtK1M:JSON.stringify(this.obj),
          rec:JSON.stringify(this.rec)
        }))
          .then(res=>{
            console.log("新增接口")
            console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
            }
          })
      },
      //修改
      /*updateData(){
        this.obj.subList = this.controlArr;
        this.axios.post('/HiQuality/c/update',this.$qs.stringify({
          BBtK1M:JSON.stringify(this.obj)
        }))
          .then(res=>{
          console.log("修改接口")
          console.log(res);
            if (res.data.status == 200) {
              this.isAdd = false;
              this.getData();
            }
        })
      },*/
      //清空当前页
      /*clearData(){
        this.obj = this.obj2;
        3;
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
          BBtK1M:JSON.stringify(this.obj)
        }))
          .then(res=>{
          console.log("修改接口")
          console.log(res);
          if (res.data.status == 200) {
            this.isAdd = false;
            this.getData();
          }
        })
      },*/
      //删除
      /*deleteData(){
        this.axios.get('/HiQuality/c/deleteById',{
          params:{
            id:this.id,
            pageNo: this.pageNo
          }
        }).then(res=>{
          console.log("删除接口")
          console.log(res);
          if (res.data.status == 200) {
            this.obj = {subList:[]};
            this.controlArr = [];
            this.isAdd = true;
          }
        })
      }*/

    }
  }
</script>

<style scoped>

</style>
