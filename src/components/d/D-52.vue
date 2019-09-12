<template>
    <div class="D-52 text-center">
      <p class="top-name-p width-1023">D-52</p>
      <p align="center" >贵 州 省 高 速 公 路 建 设 项 目 </p>
      <h3 ><strong>黔西南州兴义环城高速公路</strong><strong> </strong></h3>
      <h3 ><strong>梁（板）安装检查记录</strong><strong> </strong></h3>
      <div class="text-left width-1023">
        <span>承包单位：<input type="text" v-model="headerInfo.unitName" disabled></span>
        <span>合 同 号：<input type="text" v-model="headerInfo.contractCode" disabled></span>
        <div class="myClear"></div>
      </div>
      <div class="text-left width-1023">
        <span>监理单位：<input type="text" v-model="headerInfo.unitName2" disabled></span>
        <span id="recNo"><span>编号</span>：<input type="text" v-model="rec.recNo"></span>
        <div class="myClear"></div>
      </div>
      <table border="0" cellspacing="0" class="public-tabel">
        <tr >
          <td width="139" valign="center" colspan="3" ><p align="center">工程名称 </p></td>
          <td width="353" valign="center" colspan="10" ><p><input type="text" v-model="obj.m1"></p></td>
          <td width="72" valign="center" colspan="2" ><p align="center" >日期 </p></td>
          <td width="393" valign="center" colspan="8" >          <div class="block">
            <el-date-picker v-model="obj.m2" type="date" size="mini" class="input-80" value-format="yyyy-MM-dd"></el-date-picker>
          </div></td>
        </tr>
        <tr >
          <td width="56" valign="center" rowspan="3" ><p align="center" >安装位置 </p></td>
          <td width="48" valign="center" rowspan="3" ><p align="center" >梁号 </p></td>
          <td width="35" valign="center" rowspan="3" ><p align="center" >横向位置 </p></td>
          <td width="426" valign="center" colspan="12" >
            <p align="center" >顶面高程（允许偏差：<input type="text" v-model="obj.m3" class="height-25 input-80"> ）</p>
          </td>
          <td width="89" valign="center" colspan="2" rowspan="2" ><p align="center" >梁端与支座 <br />
            中心偏位 <br />
            允许值： </p></td>
          <td width="96" valign="center" colspan="3" rowspan="2" ><p align="center" >倾斜度 <br />
            允许值： </p></td>
          <td width="69" valign="center" rowspan="3" ><p align="center" >横向焊接、砼 浇 筑 <br />
            情 况 </p></td>
          <td width="69" valign="center" rowspan="3" ><p align="center" >横隔板 位置、 <br />
            连 接 <br />
            情 况 </p></td>
          <td width="69" valign="center" rowspan="3" ><p align="center" >备注 </p></td>
        </tr>
        <tr >
          <td width="144" valign="center" colspan="4" ><p align="center" >后端支点 </p></td>
          <td width="144" valign="center" colspan="4" ><p align="center" >跨中 </p></td>
          <td width="138" valign="center" colspan="4" ><p align="center" >前端支点 </p></td>
        </tr>
        <tr >
          <td width="47" valign="center" ><p align="center" >设计 </p></td>
          <td width="47" valign="center" ><p align="center" >实测 </p></td>
          <td width="47" valign="center" ><p align="center" >误差 </p></td>
          <td width="47" valign="center" colspan="2" ><p align="center" >设计 </p></td>
          <td width="47" valign="center" ><p align="center" >实测 </p></td>
          <td width="47" valign="center" ><p align="center" >误差 </p></td>
          <td width="47" valign="center" colspan="2" ><p align="center" >设计 </p></td>
          <td width="47" valign="center" colspan="2" ><p align="center" >实测 </p></td>
          <td width="47" valign="center" ><p align="center" >误差 </p></td>
          <td width="46" valign="center" ><p align="center" >后端 </p></td>
          <td width="46" valign="center" colspan="2" ><p align="center" >前端 </p></td>
          <td width="46" valign="center" ><p align="center" >后端 </p></td>
          <td width="46" valign="center" ><p align="center" >前端 </p></td>
        </tr>
        <tr >
          <td width="56" valign="center" rowspan="3" ><p><input type="text" v-model="controlArr[0].s1"></p></td>
          <td width="48" valign="center" rowspan="3" ><p><input type="text" v-model="controlArr[0].s2"></p></td>
          <td width="35" valign="center" ><p align="center" >左 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s31"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s41"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s51"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s61"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s71"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s81"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s91"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s101"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s111"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s121"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s131"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s141"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s151"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s161"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s171"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s181"></p></td>
        </tr>
        <tr >
          <td width="35" valign="center" ><p align="center" >中 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s32"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s42"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s52"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s62"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s72"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s82"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s92"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s102"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s112"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s122"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s132"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s142"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s152"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s162"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s172"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s182"></p></td>
        </tr>
        <tr >
          <td width="35" valign="center" ><p align="center" >右 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s33"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s43"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s53"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s63"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s73"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s83"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s93"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s103"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[0].s113"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s123"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[0].s133"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s143"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[0].s153"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s163"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s173"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[0].s183"></p></td>
        </tr>
        <tr >
          <td width="56" valign="center" rowspan="3" ><p><input type="text" v-model="controlArr[1].s1"></p></td>
          <td width="48" valign="center" rowspan="3" ><p><input type="text" v-model="controlArr[1].s2"></p></td>
          <td width="35" valign="center" ><p align="center" >左 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s31"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s41"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s51"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s61"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s71"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s81"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s91"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s101"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s111"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s121"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s131"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s141"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s151"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s161"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s171"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s181"></p></td>
        </tr>
        <tr >
          <td width="35" valign="center" ><p align="center" >中 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s32"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s42"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s52"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s62"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s72"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s82"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s92"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s102"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s112"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s122"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s132"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s142"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s152"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s162"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s172"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s182"></p></td>
        </tr>
        <tr >
          <td width="35" valign="center" ><p align="center" >右 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s33"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s43"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s53"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s63"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s73"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s83"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s93"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s103"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[1].s113"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s123"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[1].s133"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s143"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[1].s153"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s163"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s173"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[1].s183"></p></td>
        </tr>
        <tr >
          <td width="56" valign="center" rowspan="3" ><p><input type="text" v-model="controlArr[2].s1"></p></td>
          <td width="48" valign="center" rowspan="3" ><p><input type="text" v-model="controlArr[2].s2"></p></td>
          <td width="35" valign="center" ><p align="center" >左 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s31"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s41"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s51"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s61"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s71"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s81"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s91"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s101"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s111"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s121"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s131"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s141"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s151"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s161"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s171"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s181"></p></td>
        </tr>
        <tr >
          <td width="35" valign="center" ><p align="center" >中 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s32"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s42"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s52"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s62"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s72"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s82"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s92"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s102"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s112"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s122"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s132"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s142"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s152"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s162"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s172"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s182"></p></td>
        </tr>
        <tr >
          <td width="35" valign="center" ><p align="center" >右 </p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s33"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s43"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s53"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s63"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s73"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s83"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s93"></p></td>
          <td width="47" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s103"></p></td>
          <td width="47" valign="center" ><p><input type="text" v-model="controlArr[2].s113"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s123"></p></td>
          <td width="46" valign="center" colspan="2" ><p><input type="text" v-model="controlArr[2].s133"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s143"></p></td>
          <td width="46" valign="center" ><p><input type="text" v-model="controlArr[2].s153"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s163"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s173"></p></td>
          <td width="69" valign="center" ><p><input type="text" v-model="controlArr[2].s183"></p></td>
        </tr>
        <tr >
          <td width="958" valign="top" colspan="23" >
            <p class="t-left">检查意见：</p>
            <textarea name="" cols="30" rows="4" v-model="obj.m4"></textarea>
          </td>
        </tr>
      </table>
      <p class="bot-hint-p width-1023">施工单位技术负责人：<input type="text" v-model="obj.m5"> 记录：<input type="text" v-model="obj.m6"> 复核：<input type="text" v-model="obj.m7">监理员：<input type="text" v-model="nameList1[1].fullName" disabled class="input-140">
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
      </div>
    </div>
</template>

<script>
    export default {
        name: "D-52",
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
          auditTypeIdArr:[39],
          nameList:[],
          nameList1:[{},{}],
          m15DataArr:[],
          headerInfo:{}, //表头信息
          id: '1'     //主表id
        }
      },
      created() {
        this.id = this.$route.query.id;
        this.rec.tableId = this.$store.state.tableId;
        this.rec.projPartsId = this.$store.state.projPartsId;
        //获取表头信息
        let obj = this.$store.state.unitTable;
        if(obj.data!='' && obj.data!=null && obj.data!=undefined){
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
              }
            })
          }
        },
        //获取rec信息数据
        getRecObj: function () {
          this.rec = this.$store.state.recInfo;
        }
      },
      mounted(){
        this.setSubObj();
        this.getData();
      },
      methods: {
        setSubObj(){
          for(var i= 0; i<3;i++){
            let subObj={};
            this.controlArr.push(subObj);
          }
        },
        //查询
        getData() {
          this.axios.get('/HiQuality/d52/findById', {
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
        //插入
        addData() {
          this.obj.subList = this.controlArr;
          this.axios.post('/HiQuality/d52/save',this.$qs.stringify({
            BBtD52M:JSON.stringify(this.obj),
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
          this.axios.post('/HiQuality/d52/update',this.$qs.stringify({
            BBtD52M:JSON.stringify(this.obj)
          })).then(res=>{
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
          this.axios.get('/HiQuality/d52/deleteById', {
            params: {
              id: this.id
            }
          }).then(res => {
            console.log("删除接口")
            console.log(res)
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
