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
    }
  }
}
