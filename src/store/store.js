import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations  from './mutations'
import actions  from './actions'
import {deviceH} from "../utils/utils";

Vue.use(Vuex)

export const store = new Vuex.Store({
  //数据仓库
  state:state,
  //事件触发时所调用
  mutations: mutations,
  //支持异步请求
  actions: actions
})

