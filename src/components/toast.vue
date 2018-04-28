<template>
  <div v-show="show" @click="tapToast">
    <div class="weui-mask_transparent"></div>
    <div class="custom-toast weui-toast">
      <div class="weui-toast__content"><slot></slot></div>
    </div>
  </div>
</template>
<style>
  .custom-toast.weui-toast{
    width: 11.6em;
    margin-left: -5.8em;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 4.6em;
  }
  .custom-toast .weui-toast__content{
    margin: 0;
    padding: 2px 3px;
  }
</style>
<script>
  export default {
    name: 'toast',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      tapToast () {
        this.$store.state._global.toast = false
      }
    }
  }
</script>
