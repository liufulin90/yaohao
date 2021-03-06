/*
 *
 * 楼盘相关store
 */
import ProjectService from '../../services/ProjectService'
export const BANNER_LIST = 'BANNER_LIST' // 广告banner列表
export const PROJECT_LIST = 'PROJECT_LIST' // 楼盘列表
export const PROJECT_INFO = 'PROJECT_INFO' // 楼盘详情
export const APPLY_LIST = 'APPLY_LIST' // 复核名单
export const RESULT_LIST = 'RESULT_LIST' // 摇号结果
export const PROJECT_PHOTO_LIST = 'PROJECT_PHOTO_LIST' // 楼盘相册
export const SALEMAN_LIST = 'SALEMAN_LIST' // 查询楼盘销售顾问
export const PROJECT_USER_RESULT_LIST = 'PROJECT_USER_RESULT_LIST' // 查询我的摇号信息

export const PROJECT_IDINFO_BIND = 'PROJECT_IDINFO_BIND' // 绑定用户身份信息到楼盘
export const PROJECT_IDINFO_DELETE = 'PROJECT_IDINFO_DELETE' // 删除已绑定到楼盘的身份信息
export const PROJECT_IDINFO_LIST = 'PROJECT_IDINFO_LIST' // 查询已绑定到楼盘的身份信息
export const ROLE_CHECK_TIMES = 'ROLE_CHECK_TIMES' // 购房资格查询次数
export const ROLE_CHECK_DATA = 'ROLE_CHECK_DATA' // 购房资格树形结构

export default {
  state: {},
  mutations: {
    /**
     * 获取项目列表 mutation
     * @param state
     * @param payload
     */
    [PROJECT_LIST] (state, payload) {
      // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload))
      Object.assign(state, payload)
    },
    [PROJECT_INFO] (state, payload) {
      Object.assign(state, payload)
    },
    [APPLY_LIST] (state, payload) {
      Object.assign(state, {
        APPLY_LIST: payload
      })
    },
    [RESULT_LIST] (state, payload) {
      Object.assign(state, payload)
    },
    [BANNER_LIST] (state, payload) {
      Object.assign(state, {
        BANNER_LIST: payload
      })
    },
    [PROJECT_PHOTO_LIST] (state, payload) {
      Object.assign(state, {
        PROJECT_PHOTO_LIST: payload
      })
    },
    [SALEMAN_LIST] (state, payload) {
      Object.assign(state, {
        SALEMAN_LIST: payload
      })
    },
    [PROJECT_USER_RESULT_LIST] (state, payload) {
      Object.assign(state, {
        PROJECT_USER_RESULT_LIST: payload
      })
    },
    [PROJECT_IDINFO_BIND] (state, payload) {

    },
    [PROJECT_IDINFO_DELETE] (state, payload) {

    },
    [PROJECT_IDINFO_LIST] (state, payload) {
      Object.assign(state, {
        PROJECT_IDINFO_LIST: payload
      })
    },
    [ROLE_CHECK_TIMES] (state, payload) {
    },
    [ROLE_CHECK_DATA] (state, payload) {
    }
  },
  actions: {
    /**
     * 获取项目列表 action
     * @param commit
     * @param payload
     */
    [PROJECT_LIST] ({commit}, payload) {
      return ProjectService.projectList(payload).then((res) => {
        commit(PROJECT_LIST, payload)
        return res
      })
    },
    [PROJECT_INFO] ({commit}, payload) {
      return ProjectService.projectInfo(payload).then((res) => {
        commit(PROJECT_INFO, payload)
        return res
      })
    },
    [APPLY_LIST] ({commit}, payload) {
      return ProjectService.applyList(payload).then((res) => {
        commit(APPLY_LIST, payload)
        return res
      })
    },
    [RESULT_LIST] ({commit}, payload) {
      return ProjectService.resultList(payload).then((res) => {
        commit(RESULT_LIST, payload)
        return res
      })
    },
    [BANNER_LIST] ({commit}, payload) {
      return ProjectService.bannerList(payload).then((res) => {
        commit(BANNER_LIST, payload)
        return res
      })
    },
    [PROJECT_PHOTO_LIST] ({commit}, payload) {
      return ProjectService.projectPhotoList(payload).then((res) => {
        commit(PROJECT_PHOTO_LIST, payload)
        return res
      })
    },
    [SALEMAN_LIST] ({commit}, payload) {
      return ProjectService.salemanList(payload).then((res) => {
        commit(SALEMAN_LIST, payload)
        return res
      })
    },
    [PROJECT_USER_RESULT_LIST] ({commit}, payload) {
      return ProjectService.projectUserResultList(payload).then((res) => {
        commit(PROJECT_USER_RESULT_LIST, payload)
        return res
      })
    },
    [PROJECT_IDINFO_BIND] ({commit}, payload) {
      return ProjectService.projectIdinfoBind(payload).then((res) => {
        commit(PROJECT_IDINFO_BIND, payload)
        return res
      })
    },
    [PROJECT_IDINFO_DELETE] ({commit}, payload) {
      return ProjectService.projectIdinfoDelete(payload).then((res) => {
        commit(PROJECT_IDINFO_DELETE, payload)
        return res
      })
    },
    [PROJECT_IDINFO_LIST] ({commit}, payload) {
      return ProjectService.projectIdinfoList(payload).then((res) => {
        commit(PROJECT_IDINFO_LIST, payload)
        return res
      })
    },
    [ROLE_CHECK_TIMES] ({commit}, payload) {
      return ProjectService.rolecheckTimes(payload).then((res) => {
        commit(ROLE_CHECK_TIMES, payload)
        return res
      })
    },
    [ROLE_CHECK_DATA] ({commit}, payload) {
      return ProjectService.rolecheckData(payload).then((res) => {
        commit(ROLE_CHECK_DATA, payload)
        return res
      })
    }
  }
}
