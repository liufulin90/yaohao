<template>
  <div class="loading-wrap" @touchmove.prevent v-show="show">
    <div id="loadingToast" style="display: block; opacity: 1;">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-loading weui-icon_toast"></i>
        <p class="weui-toast__content">数据加载中</p>
      </div>
    </div>
  </div>
</template>
<style>
  .loading-wrap{
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
  }
  .loading-wrap .weui-loadmore{
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  export default {
    name: 'loading',
    props: {
      type: {
        type: String,
        required: false,
        default: 'icon'
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
