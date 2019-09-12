<template>
    <div class="CLH-11 text-center main-c crosswise">
      <p class="top-name-p ">CLH-11 </p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p align="center" >黔 西 南 州 兴 义 环 城 高 速 公 路 </p>
      <p align="center" ><strong>喷植草灌（不挂网）现场质量检验报告单</strong><strong> </strong></p>
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
      <table border="0" cellspacing="0" class="public-tabel table-tr-height-22" >
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
        <tr >
          <td width="43" valign="center" nowrap="nowrap"><p align="center" >1 </p></td>
          <td width="113" valign="center" colspan="3" ><p align="center" >土质情况</p></td>
          <td width="113" valign="center" nowrap="nowrap"><p align="center" ><input type="text" v-model="controlArr[0].allowValue" disabled></p></td>
          <td width="114" valign="center" ><p align="center" >见证取样送检</p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >2 </p></td>
          <td width="113" valign="center" colspan="3" ><p align="center" >腐殖质数量 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text"  v-model="controlArr[1].allowValue" disabled></p></td>
          <td width="114" valign="center" ><p align="center" >查施工原始记录 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >3 </p></td>
          <td width="113" valign="center" colspan="3" ><p align="center" >遮阳网规格 </p></td>
          <td width="83" valign="center" ><p align="center" ><input type="text" v-model="controlArr[2].allowValue" disabled></p></td>
          <td width="114" valign="center" ><p align="center" >查施工原始记录 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >4 </p></td>
          <td width="113" valign="center" colspan="3" ><p align="center" >无纺布规格 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].allowValue" disabled></p></td>
          <td width="114" valign="center" ><p >查施工原始记录 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >5 </p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >基层厚度 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].allowValue"></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" >每级边坡抽检10个点 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >6 </p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >面层厚度 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].allowValue"></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" >每级边坡抽检10个 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >7 </p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >草籽用量 </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].allowValue" disabled></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" >查施工原始记录 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >8 </p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >保水剂数量(kg) </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[7].allowValue" disabled></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" >查施工原始记录 </p></td>
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[7].pageNo"></p></td>
          <td v-show="false" width="32" valign="center" ><p><input type="text" v-model="controlArr[8].testItemNo"></p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >9 </p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" >粘合计数量(kg) </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[8].allowValue" disabled></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" >查施工原始记录 </p></td>
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
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ></p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" > </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" > </p></td>
          <td v-show="false" width="32" valign="center" ><p></p></td>
          <td v-show="false" width="32" valign="center" ><p></p></td>
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
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ></p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" > </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" > </p></td>
          <td v-show="false" width="32" valign="center" ><p></p></td>
          <td v-show="false" width="32" valign="center" ><p></p></td>
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
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ></p></td>
          <td width="113" valign="center" nowrap="nowrap" colspan="3" ><p align="center" > </p></td>
          <td width="83" valign="center" nowrap="nowrap" ><p align="center" ></p></td>
          <td width="114" valign="center" nowrap="nowrap" ><p align="center" > </p></td>
          <td v-show="false" width="32" valign="center" ><p></p></td>
          <td v-show="false" width="32" valign="center" ><p></p></td>
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
        </tr>
        <tr class="ad-textarea c-bot-input">
          <td colspan="6"><p class="t-left">施工单位检查意见：
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
            <p class="t-left">监理单位检查意见：
              <textarea name="" cols="30" rows="3" v-model="nameList2[0].auditOpinion" disabled></textarea>
            </p>
            <div class="flex-r">
              <p class="t-left">监理员：<input type="text" class="input-120"v-model="nameList1[1].fullName" disabled></p>
              <p class="t-left">
                专业监理工程师：<input type="text" class="input-120" v-model="nameList2[1].fullName" disabled>日期：<input type="text" class="input-80" v-model="nameList2[0].auditTime" disabled>
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
        name: "CLH-11",
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
        //获取绿化页面监理列表接口数据
        this.$publicFun.getSupervisingList()
        this.supervisingUnitList = this.$store.state.supervisingUnitList;
        this.setSubObj();
        let obj = this.$store.state.unitTable;
        if(obj.data!='' && obj.data!=null && obj.data!=undefined){
          this.headerInfo = obj.data;
        }
        //获取rec记录信息
        this.$publicFun.getRecInfo()
        //调用获取监理等流程人签字栏数据接口
        this.getSignName(this.auditTypeIdArr,this.rec.id,this.rec.tableId);
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
          if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
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
          let allowValue = ["有机物含量≥3%","≥150g/㎡","遮光率≥50%","≥16g/㎡","符合设计≥60mm","符合设计≥20mm","≥30g/㎡","10g/㎡","10g/㎡"];
          for(var i= 0; i<9;i++){
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
