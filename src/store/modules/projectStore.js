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
      Object.assign(state, payload)
    },
    [RESULT_LIST] (state, payload) {
      Object.assign(state, payload)
    },
    [BANNER_LIST] (state, payload) {
      Object.assign(state, payload)
    },
    [PROJECT_PHOTO_LIST] (state, payload) {
      Object.assign(state, payload)
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
    }
  }
}
