<template>
  <div class="AQ-26 text-center">
    <p class="p-lineheight">
      <img width="36" height="30" src="../../assets/files/imgs/aq/clip_image002.jpg" class="logo-img"/>
      贵州省公路工程集团有限公司XX高速公路XX项目经理部
    </p>
    <h3>安全生产费用使用情况记录表</h3>
    <div class="t-right margin-auto width-820">
      <div>时间：
        <el-date-picker v-model="obj.m1" type="date" size="mini"
                        class="input-80"  placeholder="年  月"
                        format="yyyy年MM月"
                        value-format="yyyy-MM">
        </el-date-picker>
      </div>
    </div>
    <table cellspacing="0" cellpadding="0" class="public-tabel" width="822">
      <tr>
        <td width="41">序号</td>
        <td width="71">时间</td>
        <td width="134">名称</td>
        <td width="58">单位</td>
        <td width="54">数量</td>
        <td width="72">单价（元）</td>
        <td width="72">合价（元）</td>
        <td width="144">使用部位</td>
        <td width="110">对应发票编码/计价单</td>
        <td width="66">备注</td>
      </tr>
      <tr>
        <td width="41">1</td>
        <td colspan="9" width="781" align="left">完善、改造、维护安全防护设施和特种设备检验检测支出</td>
      </tr>
      <tr>
        <td width="41">1.1</td>
        <td colspan="9"  align="left">施工现场安全用电投入</td>
      </tr>
      <tr >
        <td width="41"><input type="text" v-model="controlArr[0].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[0].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[0].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[0].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[0].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[0].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[0].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[0].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[0].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[0].s10"></td>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[1].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[1].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[1].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[1].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[1].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[1].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[1].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[1].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[1].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[1].s10"></td>
    </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[2].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[2].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[2].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[2].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[2].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[2].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[2].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[2].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[2].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[2].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58"> 　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.2</td>
        <td colspan="9"  align="left">洞口、临边、机械设备防护、高处作业防护、交叉作业防护</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[3].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[3].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[3].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[3].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[3].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[3].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[3].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[3].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[3].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[3].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[4].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[4].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[4].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[4].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[4].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[4].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[4].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[4].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[4].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[4].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[5].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[5].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[5].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[5].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[5].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[5].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[5].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[5].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[5].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[5].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.3</td>
        <td colspan="9" width="781"  align="left">防火、防爆、防尘、防毒、防雷、防地质灾害、地下工程有害气体监测、通风等费用</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[6].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[6].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[6].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[6].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[6].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[6].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[6].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[6].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[6].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[6].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[7].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[7].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[7].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[7].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[7].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[7].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[7].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[7].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[7].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[7].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.4</td>
        <td colspan="9" width="781"  align="left">施工期间设置的临时交通安全设施费用（跨越公路、村镇处施工现场防护、隔离等设施）</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[8].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[8].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[8].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[8].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[8].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[8].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[8].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[8].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[8].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[8].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.5</td>
        <td colspan="9" width="781"  align="left">高空作业、水上作业、灌注桩施工等防止物体、人员坠落设置的安全网、棚</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[9].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[9].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[9].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[9].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[9].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[9].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[9].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[9].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[9].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[9].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[10].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[10].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[10].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[10].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[10].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[10].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[10].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[10].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[10].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[10].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.6</td>
        <td colspan="9" width="781"  align="left">安全标志牌</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[11].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[11].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[11].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[11].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[11].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[11].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[11].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[11].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[11].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[11].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[12].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[12].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[12].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[12].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[12].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[12].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[12].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[12].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[12].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[12].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.7</td>
        <td colspan="9" width="781"  align="left">特种设备、压力容器、避雷设施等检测检验费</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[13].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[13].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[13].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[13].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[13].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[13].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[13].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[13].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[13].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[13].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[14].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[14].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[14].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[14].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[14].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[14].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[14].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[14].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[14].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[14].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">1.8</td>
        <td colspan="9" width="781"  align="left">其它安全防护、检测设施、设备的费用</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[15].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[15].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[15].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[15].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[15].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[15].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[15].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[15].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[15].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[15].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[16].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[16].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[16].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[16].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[16].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[16].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[16].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[16].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[16].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[16].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">2</td>
        <td colspan="9" width="781"  align="left">配备必要的应急救援器材、设备和现场作业人员安全防护物品支出</td>
      </tr>
      <tr>
        <td width="41">2.1</td>
        <td colspan="9" width="781"  align="left">配备各种应急救援器材</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[17].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[17].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[17].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[17].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[17].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[17].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[17].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[17].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[17].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[17].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[18].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[18].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[18].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[18].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[18].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[18].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[18].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[18].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[18].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[18].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">2.2</td>
        <td colspan="9" width="781"  align="left">配备作业人员安全防护用品</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[19].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[19].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[19].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[19].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[19].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[19].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[19].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[19].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[19].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[19].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[20].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[20].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[20].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[20].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[20].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[20].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[20].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[20].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[20].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[20].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">3</td>
        <td colspan="9" width="781"  align="left">安全生产检查与评价支出</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[21].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[21].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[21].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[21].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[21].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[21].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[21].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[21].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[21].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[21].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[22].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[22].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[22].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[22].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[22].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[22].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[22].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[22].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[22].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[22].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">4</td>
        <td colspan="9" width="781"  align="left">重大危险源、重大事故隐患的评估、整改、监控支出</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[23].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[23].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[23].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[23].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[23].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[23].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[23].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[23].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[23].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[23].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[24].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[24].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[24].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[24].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[24].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[24].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[24].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[24].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[24].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[24].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">5</td>
        <td colspan="9" width="781"  align="left">安全技能培训及进行应急救援演练支出</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[25].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[25].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[25].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[25].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[25].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[25].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[25].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[25].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[25].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[25].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[26].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[26].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[26].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[26].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[26].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[26].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[26].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[26].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[26].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[26].s10"></td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[27].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[27].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[27].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[27].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[27].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[27].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[27].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[27].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[27].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[27].s10"></td>
      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td width="41">6</td>
        <td colspan="9"  align="left">其它与安全生产直接相关的支出</td>
      </tr>
      <tr>
        <td width="41"><input type="text" v-model="controlArr[28].s1"></td>
        <td width="71"><input type="text" v-model="controlArr[28].s2"></td>
        <td width="134"><input type="text" v-model="controlArr[28].s3"></td>
        <td width="58"><input type="text" v-model="controlArr[28].s4"></td>
        <td width="54"><input type="text" v-model="controlArr[28].s5"></td>
        <td width="72"><input type="text" v-model="controlArr[28].s6"></td>
        <td width="72"><input type="text" v-model="controlArr[28].s7"></td>
        <td width="144"><input type="text" v-model="controlArr[28].s8"></td>
        <td width="110"><input type="text" v-model="controlArr[28].s9"></td>
        <td width="66"><input type="text" v-model="controlArr[28].s10"></td>


      </tr>
      <tr>
        <td width="41">　</td>
        <td width="71">　</td>
        <td width="134">合计</td>
        <td width="58">　</td>
        <td width="54">　</td>
        <td width="72">　</td>
        <td width="72">　</td>
        <td width="144">　</td>
        <td width="110">　</td>
        <td width="66">　</td>
      </tr>
      <tr>
        <td>　</td>
        <td>　</td>
        <td>总合计</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
        <td>　</td>
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
    </div>

  </div>
</template>

<script>
  import {splitDate,joinDate} from '../../utils/utils'
  export default {
        name: "AQ-26",
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
            recNo: '',
            tableId: '',
            contracId: 0,
            constDate: '',
            testDate: '',
            projPartsId: '1',
            curStatus: 0,
            operUserId: 1
          },
          dateArr:[],
          id: '1'     //主表id
        }
      },
      created(){
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
      },
      mounted() {
       this.setSubObj();
       this.getData();
      },
      methods:{
        setSubObj(){
          for(var i= 0; i<29;i++) {
            let subObj = {};
            if(i==0){
              subObj.s1 = '1.1.1'
            }
            if(i===1){
              subObj.s1 = '1.1.2'
            }
            this.controlArr.push(subObj);
          }
        },
        getData() {
          this.axios.get('/HiQuality/Aq26/findById', {
            params: {
              projPartsId: this.rec.projPartsId,
              tableId: this.rec.tableId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data;
              this.obj.subList = res.data.data.subList;
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length > 0) {
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;
              this.isAdd = false;
             // this.dateArr = splitDate(this.obj.m1,'-');
            }
          })
        },
        //新增
        addData() {
          if (!this.isAdd) {
            return false;
          }
        //  this.obj.m1 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/Aq26/saveAq26M', this.$qs.stringify({
            aq26:JSON.stringify(this.obj),
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
         // this.obj.m1 = joinDate(this.dateArr,'-');
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/Aq26/updateAq26', this.$qs.stringify({
            aq26:JSON.stringify(this.obj)
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
          this.axios.delete('/HiQuality/Aq26/deleteAq26', {
            params: {
              id: this.id,
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = {subList:[]};
              this.controlArr = [];
              this.isAdd = true;
            }
          })
        }
      }
    }

</script>

<style scoped>

</style>
