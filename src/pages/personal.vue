<!-- 个人中心 -->
<template>
  <div class="body-wrapper personal-wrap">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <div href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="/static/resource.jpg" style="border-radius: 50%;width: 60px;height: 60px;">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">Flynn</h4>
            <p class="weui-media-box__desc">成都</p>
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

  export default {
    data () {
      return {
        isSearch: false,
        navPage: 4,
        pid: '',
        projects: {
          title: ''
        }
      }
    },
    mounted () {
      var pid = this.$route.query.pid
      this.pid = pid
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST])
    }
  }
</script>
<style scoped>
  .personal-wrap{
    min-height: 100vh;
    background: #f9f9f9;
  }
</style>
