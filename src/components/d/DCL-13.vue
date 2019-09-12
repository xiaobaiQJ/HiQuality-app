<template>
    <div class="text-center main-d lengthways-a">
      <p class="top-name-p width-663">DCL-13</p>
      <p>  贵 州 省 高 速 公 路 建 设 项 目 </p>
      <p>黔 西 南 州 兴 义 环 城 高 速 公 路</p>
      <h3><strong>距离及高差观测手薄</strong></h3>
      <div class="text-left width-663">
        <span>承建单位：<input type="text" v-model="headerInfo.unitName"></span>
        <span></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-663">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2"></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode"></span>
        <div class="myClear"></div>
      </div>
      <table border="0" cellspacing="0" class="public-tabel table-tr-height-22" width="623">
        <tr >
          <td width="106" valign="center" nowrap="nowrap" colspan="2" rowspan="2">
            <p align="center" >
              <span style="position: relative;left: 70px;top: 5px;">项目</span>
              <span style="position: relative; top: 50px;right: 40px;">测站 测点</span>
              <img src="../../assets/files/imgs/D/DCL-13_wps5.jpg" width="103" height="53" />
            </p>
          </td>
          <td width="106" valign="center" nowrap="nowrap" colspan="2" ><p align="center" >平   距 </p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="2" ><p align="center" >平均值 </p></td>
          <td width="106" valign="center" nowrap="nowrap" colspan="2" ><p align="center" >高差读数 </p></td>
          <td width="106" valign="center" nowrap="nowrap" colspan="2" ><p align="center" >平均值 </p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="2" ><p align="center" >备注 </p></td>
        </tr>
        <tr >
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" >盘左 </p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >盘右 </p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >盘左 </p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" >盘右 </p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" >读数 </p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" >实测 </p></td>
        </tr>
        <tr >
          <td width="43" nowrap="nowrap" rowspan="4" ><p ><input type="text" v-model="controlArr[0].s1"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s21"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s31"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[0].s5"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s71"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[0].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[0].s9"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[0].s10"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[0].s74"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[1].s1"></p></td>
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s21"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s31"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[1].s5"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s71"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[1].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[1].s9"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="8" ><p align="center" ><input type="text" v-model="controlArr[1].s10"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[1].s74"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[2].s1"></p></td>
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s21"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s31"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[2].s5"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s71"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[2].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[2].s9"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[2].s74"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[3].s1"> </p></td>
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s21">;</p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s31"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[3].s5"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s71"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[3].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[3].s9"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="8" ><p align="center" ><input type="text" v-model="controlArr[3].s10"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[3].s74"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[4].s1"></p></td>
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s21"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s31"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[4].s5"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s71"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[4].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[4].s9"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[4].s74"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[5].s1"></p></td>
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s21"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s31"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[5].s5"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s71"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[5].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[5].s9"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="8" ><p align="center" ><input type="text" v-model="controlArr[5].s10"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[5].s74"></p></td>
        </tr>
        <tr >
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[6].s1"></p></td>
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s21"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s31"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s41"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[6].s5"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s61"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s71"></p></td>
          <td width="43" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[6].s8"></p></td>
          <td width="53" valign="center" nowrap="nowrap" rowspan="4" ><p align="center" ><input type="text" v-model="controlArr[6].s9"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s22"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s32"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s42"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s62"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s72"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s23"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s33"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s43"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s63"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s73"></p></td>
        </tr>
        <tr >
          <td width="4" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s24"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s34"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s44"></p></td>
          <td width="43" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s64"></p></td>
          <td width="53" valign="center" nowrap="nowrap" ><p align="center" ><input type="text" v-model="controlArr[6].s74"></p></td>
        </tr>
      </table>
      <div class="bot-hint-p width-663">
        测量: <input type="text" v-model="obj.m1" class="input-80">
        计算：<input type="text" v-model="obj.m2" class="input-80">
        复核：<input type="text" v-model="obj.m3" class="input-80">
        监理：<input type="text" v-model="nameList1[1].fullName" disabled class="input-80">
        日期：<input type="text" class="input-80" v-model="nameList1[0].auditTime" disabled>
      </div>
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
  import {splitDate, joinDate} from '../../utils/utils'
    export default {
        name: "DCL-13",
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
          auditTypeIdArr: [26],
          nameList: [],
          nameList1: [{}, {}],
          headerInfo: {}, //表头信息
          id: '1'     //主表id
        }
      },
      created() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        this.setSubObj();
        let obj = this.$store.state.unitTable;
        if (obj.data != '' && obj.data != null && obj.data != undefined) {
          this.headerInfo = obj.data;
        }
        //调用获取监理等流程人签字栏数据接口
        this.getSignName();
        //获取监理等流程人签字栏数据
        this.nameList = this.$store.state.nameList;
        //获取rec记录信息
        this.$publicFun.getRecInfo();
      },
      computed: {
        getNameList: function () {
          return this.$store.state.nameList
        }
      },
      watch: {
        //获取监理等流程人签字栏数据
        getNameList: function () {
          this.nameList = this.$store.state.nameList;
          if (this.nameList != '' && this.nameList != undefined && this.nameList.length > 0) {
            this.nameList.forEach((item, index) => {
              if (item != '' && item != undefined) {
                if (item[1].auditTypeId == 26) {
                  this.nameList1 = item;
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
      methods: {
        setSubObj() {
          for (var i = 0; i < 7; i++) {
            let subObj = {};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/dcl13/findById', {
            params: {
              tableId: this.rec.tableId,
              projPartsId: this.rec.projPartsId
            }
          }).then(res => {
            console.log("查询接口")
            console.log(res);
            if (res.data.status == 200) {
              this.obj = res.data.data.main;
              this.obj.subList = res.data.data.sub;
              this.isAdd = false;
              let arr = []
              if (this.obj.subList != undefined && this.obj.subList.length >0){
                this.obj.subList.forEach((item) => {
                  arr.push(item)
                })
              }
              this.controlArr = arr;
            }
          })
        },
        //新增
        addData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dcl13/save',this.$qs.stringify({
            BBtDcl13M:JSON.stringify(this.obj),
            BQcRecInfo:JSON.stringify(this.rec)
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
        updateData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/dcl13/update',this.$qs.stringify({
            BBtDcl13M:JSON.stringify(this.obj)
          })).then(res=>{
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
        //删除
        deleteData() {
          this.axios.get('/HiQuality/dcl13/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res);
            if (res.data.status == 200) {
              this.controlArr = [];
              this.obj = {subList:[]}
              this.isAdd = true;
              this.setSubObj();
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
