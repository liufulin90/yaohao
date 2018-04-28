/**
 * 路由的入口文件，包含所有的路由，其中部分路由是通过require加载进来
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/login', // 登录
    meta: { auth: false },
    component: resolve => require(['../pages/login'], resolve)
  },
  {
    path: '/index', // 主页
    name: 'index',
    meta: {
      auth: false,
      title: '首页',
      keepAlive: true
    },
    component: resolve => require(['../pages/home'], resolve)
  },
  {
    path: '/myShake', // 主页
    name: 'myShake',
    meta: {
      auth: false,
      title: '我的摇号结果'
    },
    component: resolve => require(['../pages/myShake'], resolve)
  },
  {
    path: '/news', // 咨询
    name: 'news',
    meta: {
      auth: false,
      title: '咨询',
      keepAlive: true
    },
    component: resolve => require(['../pages/news'], resolve)
  },
  {
    path: '/newsDetail', // 咨询详情
    name: 'newsDetail',
    meta: {
      auth: false,
      title: '咨询详情'
    },
    component: resolve => require(['../pages/newsDetail'], resolve)
  },
  {
    path: '/substitute', // 代交资料
    name: 'substitute',
    meta: {
      auth: false,
      title: '资料代交',
      keepAlive: true
    },
    component: resolve => require(['../pages/substitute'], resolve)
  },
  {
    path: '/shakeResult', // 摇号结果
    name: 'shakeResult',
    meta: {
      auth: false,
      title: '摇号结果'
    },
    component: resolve => require(['../pages/shakeResult'], resolve)
  },
  {
    path: '/projectSearch', // 楼盘检索页面
    name: 'projectSearch',
    meta: {
      auth: false,
      title: '楼盘检索',
      keepAlive: true
    },
    component: resolve => require(['../pages/projectSearch'], resolve)
  },
  {
    path: '/projects', // 项目基本信息
    name: 'projects',
    meta: {
      auth: false,
      title: '项目基本信息'
    },
    component: resolve => require(['../pages/projects'], resolve)
  },
  {
    path: '/projectDetail', // 项目详细信息
    name: 'projectDetail',
    meta: {
      auth: false,
      title: '项目详细信息'
    },
    component: resolve => require(['../pages/projectDetail'], resolve)
  },
  {
    path: '/contactAdvisor', // 联系置业顾问
    name: 'contactAdvisor',
    meta: {
      auth: false,
      title: '联系置业顾问'
    },
    component: resolve => require(['../pages/contactAdvisor'], resolve)
  },
  {
    path: '/personal', // 个人中心
    name: 'personal',
    meta: {
      auth: false,
      title: '个人中心'
    },
    component: resolve => require(['../pages/personal'], resolve)
  },
  {
    path: '/personalInfo', // 个人中心-个人信息
    name: 'personalInfo',
    meta: {
      auth: false,
      title: '个人信息'
    },
    component: resolve => require(['../pages/personalInfo'], resolve)
  },
  {
    path: '/',
    name: 'main',
    component: resolve => require(['../pages/main'], resolve),
    children: [
      {
        path: '/user',
        name: 'user',
        meta: {
          auth: false,
          title: 'User'
        },
        component: resolve => require(['../pages/login'], resolve)
      },
      {
        path: '*', // 其他页面，强制跳转到登录页面
        redirect: '/index'
      }
    ]
  }
]
