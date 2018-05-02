<!-- 个人中心 -->
<template>
  <div class="body-wrapper personal-wrap">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <div href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="personalInfo.avatar ? personalInfo.avatar : '/static/resource.jpg'" style="border-radius: 50%;width: 60px;height: 60px;">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{personalInfo.nickname}}</h4>
            <p class="weui-media-box__desc" v-if="personalInfo.addr">{{personalInfo.addr}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__ft">
        <router-link :to="{name: 'personalInfo'}" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">个人基本资料</div>
          <span class="weui-cell__ft"></span>
        </router-link>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__ft">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">反馈</div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__ft">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">关于</div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
    <v-footer :page="navPage"></v-footer>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {USER_INFO} from '../store/modules/userStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  export default {
    data () {
      return {
        isSearch: false,
        navPage: 4,
        personalInfo: {
          uid: 4,
          nickname: '',
          avatar: '' // /static/resource.jpg
        }
      }
    },
    mounted () {
      this.CHANGE_PENDING(true)
      this.USER_INFO().then(res => {
        this.CHANGE_PENDING(false)
        if (CODE.SUCCESS == res.status) {
          this.personalInfo = res.info
        } else {
          this.CHANGE_TOAST(res.msg)
        }
      }).catch(() => {
        this.CHANGE_PENDING(false)
        this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
      })
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, USER_INFO])
    }
  }
</script>
<style scoped>
  .personal-wrap{
    min-height: 100vh;
    background: #f9f9f9;
  }
</style>
