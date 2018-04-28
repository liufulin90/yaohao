/*
 * 组装模块并导出 store 的入口文件
 */
import Vuex from 'vuex'
import Vue from 'vue'
import _actions from './actions'
import _mutations from './mutations'
import _global from './globalStore'
import project from './modules/projectStore'
import user from './modules/userStore'
import info from './modules/InformationStore'
import {myPlugin} from './plugins'
import menuList from './menus'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...menuList
  },
  mutations: {
    ..._mutations
  },
  actions: {
    ..._actions
  },
  modules: {
    // key: {}
    user,
    project,
    info,
    _global
  },
  getters: {
    // state,     // 如果在模块中定义则为模块的局部状态
    // getters,   // 等同于 store.getters
    // rootState  // 等同于 store.state
  },
  // Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：
  plugins: [myPlugin],
  strict: false // 默认值: false使 Vuex store 进入严格模式，在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。
})

export default store
