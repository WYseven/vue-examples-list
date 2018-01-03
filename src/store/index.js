import Vue from 'vue'
import Vuex from 'vuex'

// 购物车状态模块

import shopCarModule from './shop-car/'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    root: 123
  },
  modules: {
    car:shopCarModule
  }
})

console.log(store)

export default store;