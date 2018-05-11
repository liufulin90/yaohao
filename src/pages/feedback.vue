<!-- 添加意见反馈 -->
<template>
  <div class="body-wrapper">
    <div class="weui-cells">
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">问题类型</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="select2" v-model="info.type">
            <option value="程序错误">程序错误</option>
            <option value="建议优化">建议优化</option>
            <option value="数据错误/缺失">数据错误/缺失</option>
            <option value="其他">其他</option>
          </select>
        </div>
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label for="" class="weui-label">联系方式</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" v-model="info.contact" value="" type="text" placeholder="手机/邮箱/QQ">
      </div>
    </div>
    <div class="weui-cell">
      <div class="weui-cell__hd"><label for="" class="weui-label">问题描述</label></div>
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" v-model="info.content" placeholder="请详细描述遇到的问题" rows="3"></textarea>
      </div>
    </div>
    <div class="weui-cells__tips">在收到您的反馈后，我们胡尽快修复此问题并告知您修复的结果。并且您将有机会获得一份精美的礼物。</div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:" @click="submitInfo">确定</a>
    </div>
    <v-homeicon></v-homeicon>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {FEED_BACK_ADD} from '../store/modules/userStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  export default {
    data () {
      return {
        info: {
          type: '程序错误',
          contact: '',
          content: ''
        }
      }
    },
    mounted () {
      var pid = this.$route.query.pid
      this.pid = pid
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, FEED_BACK_ADD]),
      submitInfo () {
        if (!this.info.contact) {
          this.CHANGE_TOAST('请填写联系方式')
          return
        }
        if (!this.info.content) {
          this.CHANGE_TOAST('请填写问题描述')
          return
        }
        this.CHANGE_PENDING(true)
        this.FEED_BACK_ADD(this.info).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.CHANGE_TOAST('反馈信息成功！')
            setTimeout(() => {
              history.back()
            }, 3000)
          } else {
            this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      }
    }
  }
</script>
<style scoped>
</style>
