/*
 * 用户相关store
 */
import Vue from 'vue'
import UserService from '../../services/UserService'
import { USER_LOCALSTORAGE_KEY } from '../../config/'

export const USER_SIGNIN = 'USER_SIGNIN' // 登录
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出
export const USER_INFO = 'USER_INFO' // 获取当前登录用户资料
export const USER_IDINFO_ADD = 'USER_IDINFO_ADD' // 增加用户身份信息
export const USER_IDINFO_LIST = 'USER_IDINFO_LIST' // 查询用户身份信息
export const USER_IDINFO_DELETE = 'USER_IDINFO_DELETE' // 删除用户身份信息
export const USER_IDINFO_UPDATE = 'USER_IDINFO_UPDATE' // 获取当前登录用户资料
export default {
  state: {},
  mutations: {
    /**
     * 登录的 mutation
     * @param state
     * @param payload
     */
    [USER_SIGNIN] (state, payload) {
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload))
      Object.assign(state, payload)
    },
    /**
     * 获取当前登录用户资料 mutation
     * @param state
     * @param payload
     */
    [USER_INFO] (state, payload) {
      // localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload))
      Object.assign(state, payload)
    },
    [USER_IDINFO_ADD] (state, payload) {
      Object.assign(state, {payload})
    },
    [USER_IDINFO_LIST] (state, payload) {
      Object.assign(state, {
        USER_IDINFO_LIST: payload
      })
    },
    [USER_IDINFO_DELETE] (state, payload) {
      // Object.assign(state, {payload})
    },
    [USER_IDINFO_UPDATE] (state, payload) {
      Object.assign(state, {payload})
    },
    /**
     * 退出的 mutation
     * @param state
     * @returns {Promise.<TResult>|*}
     */
    [USER_SIGNOUT] (state) {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    /**
     * 登录的 action
     * @param commit
     * @param payload
     */
    [USER_SIGNIN] ({commit}, payload) {
      return UserService.login(payload).then((res) => {
        commit(USER_SIGNIN, payload)
        return res
      })
    },
    [USER_INFO] ({commit}, payload) {
      return UserService.userInfo(payload).then((res) => {
        commit(USER_INFO, payload)
        return res
      })
    },
    [USER_IDINFO_ADD] ({commit}, payload) {
      return UserService.userIdinfoAdd(payload).then((res) => {
        commit(USER_IDINFO_ADD, payload)
        return res
      })
    },
    [USER_IDINFO_LIST] ({commit}, payload) {
      return UserService.userIdinfoList(payload).then((res) => {
        commit(USER_IDINFO_LIST, payload)
        return res
      })
    },
    [USER_IDINFO_DELETE] ({commit}, payload) {
      return UserService.userIdinfoDelete(payload).then((res) => {
        commit(USER_IDINFO_DELETE, payload)
        return res
      })
    },
    [USER_IDINFO_UPDATE] ({commit}, payload) {
      return UserService.userIdinfoUpdate(payload).then((res) => {
        commit(USER_IDINFO_UPDATE, payload)
        return res
      })
    },
    /**
     * 退出的 action
     * @param commit
     * @returns {Promise.<TResult>|*}
     */
    [USER_SIGNOUT] ({commit}) {
      return UserService.logout().then(() => {
        commit(USER_SIGNOUT)
      })
    }
  }
}
