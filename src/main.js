import Vue from 'vue'
import filter from './utils/filter/filter'
import tost from './utils/tost'
import 'babel-polyfill'
import App from './App'
import vueRouter from "vue-router"
import {axios} from './api/index'
import {splitDate} from "./utils/utils";
import tools from "./utils/common/tools";
import skip from './utils/common/router'
import { Checkbox, CheckboxGroup } from 'vant';
/*import ports from './api/port.js'
import http from './api/http.js'*/
import publicFun from './utils/publicFun'
import qs from 'qs'
import element from 'element-ui'
import {store} from "./store/store"
import {router} from './router/router'
import Print from './utils/print/print' // 引入附件的js文件
import('./assets/css/config.css')
import('./assets/css/table_width.css')
import('./assets/css/baitao.css')

require('element-ui/lib/theme-chalk/index.css');
require('es6-promise').polyfill()
//Vue.prototype.$md5 = md5
//引用架构
Vue.use(Print)
Vue.use(element)
Vue.use(vueRouter)
Vue.use(Checkbox).use(CheckboxGroup);
Vue.prototype.$qs = qs
Vue.prototype.$tost = tost;
Vue.prototype.axios = axios
Vue.prototype.$skip = skip
Vue.prototype.$publicFun = publicFun
/*Vue.prototype.$ports = ports
Vue.prototype.$http = http*/
Vue.prototype.$common = tools

/*Vue.config.devtools = true*/

/* eslint-disable no-new */
/*全局接口====获取栏监理等流程人签字数据接口*/
Vue.prototype.getSignName = function(){
  let nameList = [];
  store.commit("setNameList",[]);
  //调用通过tableId查询审核人类型接口
  axios.post('/HiQuality/getBSysUser/getUserName2', this.$qs.stringify({
    auditorTypeIds:store.state.auditorTypeIds+'',
    recId:store.state.recId,
    tableId:store.state.tableId
  })).then(res=>{
    console.log("查询走流程签字栏列表接1111口")
    console.log(res);
    if(res.data.status==200){
      nameList = res.data.data;
      let arr = [];
      if(nameList!='' && nameList!=undefined && nameList.length>0){
        nameList.forEach((item)=>{
          if(item!='' && item!=undefined){
            arr = splitDate(item[0].auditTime,' ');
            item[0].auditTime = arr[0];
          }
        })
        store.commit("setNameList",nameList)

      }
    }
  })
}

new Vue({
  el: '#app',
  /*状态管理*/
  store: store,
  router,
  components: {App},
  template: '<App/>'
})
