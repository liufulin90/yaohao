<!-- 关于 -->
<template>
  <div class="body-wrapper">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <div class="weui-media-box">
          <p>摇号助手，帮助您第一时间获取摇号结果。请把公众号分享给您身边的人，方便你我他。</p>
          <p>
            所有数据均来自官方数据，如有任何问题，请在
            <router-link :to="{name: 'feedback'}" class="base-color"><span>这里</span></router-link>
            反馈，我们会第一时间修复。
          </p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  export default {
    data () {
      return {
        info: {
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
</style>
