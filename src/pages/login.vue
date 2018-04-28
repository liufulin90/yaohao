<!--登录页面-->
<template>
  <div class="main login-main" v-loading.fullscreen.lock="this.$store.state._global.pending">
    <!-- 登录框 -->
    <div class="login-wrap">
      <div class="login-box">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="登录账号">
            <el-input v-model="form.loginName" @blur="checkLoginName" @focus="loginNameTips = ''" placeholder="请输入登录账号"></el-input>
            <div class="tips" v-show="btn && loginNameTips">{{loginNameTips}}</div>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input v-model="form.password" @blur="checkLoginPassword" @focus="loginPasswordTips = ''" placeholder="请输入登录密码" type="password"></el-input>
            <div class="tips" v-show="btn && loginPasswordTips">{{loginPasswordTips}}</div>
            <div class="tips" v-show="validate.errMsg">{{validate.errMsg}}</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit-btn" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 底部 -->
    <v-footer></v-footer>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {USER_SIGNIN} from '../store/modules/userStore'
  import {CHANGE_PENDING} from 'store/globalStore'
  import * as Messages from '../config/messages'
  import * as CODE from '../config/code'
  import { globalErrorPrint, judgeNotNetwork } from '../utils/'

  export default {
    data () {
      this.$store.state
      return {
        ...Messages,
        btn: true, // true 已经提交过， false没有提交过
        loginNameTips: '', // 登录名错误提示
        loginPasswordTips: '', // 登录密码错误提示
        form: {
          loginName: '',
          password: ''
        },
        validate: {
          errMsg: ''
        },
        loginDone: false
      }
    },
    mounted () {
      this.CHANGE_PENDING(false)
      // 监听Enter键自动提交事件
      let pressEnter = (event) => {
        if (event.keyCode == 13) {
          let ret = this.submit()
          if (ret) {
            ret.then(() => {
              // 登录成功
              if (this.loginDone) {
                document.removeEventListener('keyup', pressEnter, false)
              }
            })
          }
        }
      }
      document.addEventListener('keyup', pressEnter, false)
    },
    methods: {
      ...mapActions([USER_SIGNIN, CHANGE_PENDING]),
      /**
       * 检查登录名
       */
      checkLoginName () {
        this.validate.errMsg = ''
        let {loginName} = this.form
        if (!loginName) {
//          this.loginNameTips = Messages.LOGIN_USERNAME_NOT_EMPTY
          return false
        }
        this.loginNameTips = ''
        return true
      },
      /**
       * 检查登录密码
       */
      checkLoginPassword () {
        this.validate.errMsg = ''
        let {password} = this.form
        if (!password) {
//          this.loginPasswordTips = Messages.LOGIN_PASSWORD_NOT_EMPTY
          return false
        }
        this.loginPasswordTips = ''
        return true
      },
      submit () {
        this.btn = true
        this.validate.errMsg = ''
        if (!this.checkLoginName() || !this.checkLoginPassword()) {
          return
        }
        this.CHANGE_PENDING(true)
        return this.USER_SIGNIN(this.form).then(res => {
          this.CHANGE_PENDING(false)
          if (res.code == CODE.SUCCESS) {
            // this.$router.replace({path: '/index'})
            this.loginDone = true
          } else {
            this.validate.hasErr = true
//            this.$message.error(Messages.LOGIN_PWDNAME_ERR_MSG)
          }
        }).catch((err) => {
          this.CHANGE_PENDING(false)
          globalErrorPrint(err)
          if (judgeNotNetwork(this, err)) {
            return
          }
          if (err.responseJSON) {
            let {responseJSON} = err
            if (responseJSON.code == CODE.PASSWORD_ERROR) {
              // 用户名或密码错误
//              this.validate.errMsg = Messages.LOGIN_PWDNAME_ERR_MSG
            } else if (responseJSON.code == CODE.CODE_ERROR_NOT_REGIST) {
              // 未注册
//              this.validate.errMsg = Messages.LOGIN_ERROR_NOT_REGIST
            } else if (responseJSON.code == CODE.NO_MANAGE_PERMISION) {
              // 无管理权限
//              this.validate.errMsg = Messages.LOGIN_NO_MANAGE_PERMISION_MSG
            } else {
//              this.validate.errMsg = Messages.SERVER_ERROR_MSG
            }
          } else {
//            this.$message.error(Messages.SERVER_ERROR_MSG)
          }
        })
      }
    }
  }
</script>
