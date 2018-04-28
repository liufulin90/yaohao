/*
 * 用户相关store
 */
import Vue from 'vue'
import UserService from '../../services/UserService'
import { USER_LOCALSTORAGE_KEY } from '../../config/'

export const USER_SIGNIN = 'USER_SIGNIN' // 登录
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出

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
