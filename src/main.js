/*
 *
 * 整个应用的入口文件
 */
import 'babel-polyfill' // 解决IE浏览器不支持promise以及object.assign等
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/'
import store from './store'

// import * as jst from 'js-common-tools'
import { USER_LOCALSTORAGE_KEY } from './config/'
import components from './components/' // 加载公共组件

// 图片预览组件
import VuePreview from 'vue-preview'
// // defalut install
// // Vue.use(VuePreview)
// // with parameters install
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

/* eslint-disable no-new */
Vue.config.silent = false // true取消 Vue 所有的日志与警告。

// 将组件挂载到vue
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history', // 加上这句去掉url中的锚点
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach(({meta, path, name, title}, from, next) => {
  var { auth = true } = meta
  let {user} = store.state
  let localStoreUser = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))
  var isLogin = user && (localStoreUser && localStoreUser.loginName) // true用户已登录， false用户未登录
  // 没有登录并且访问链接不在控制的权限内则跳转到登录页面（即非法路径访问）
  if (auth && !isLogin && (path !== '/login' || user.hasPath && !name)) {
    // eturn next({ path: '/login' })
  }
  /* 路由发生变化修改页面title */
  if (meta.title) {
    document.title = meta.title
  }
  if (path === '/') {
    return next({path: '/index'})
  }
  next()
})
import App from './App'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

if (process.env.NODE_ENV === 'production') {
  // 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器
  var useragent = navigator.userAgent
  if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
    // 这里警告框会阻塞当前页面继续加载
    alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！')
    // 以下代码是用javascript强行关闭当前页面
    var opened = window.open('about:blank', '_self')
    opened.opener = null
    opened.close()
  }
}
