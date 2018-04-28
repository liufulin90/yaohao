<!-- 图片预览组件 -->
<template id="img_view">
  <div class="m-img-view" @click="eClick">
    <div class="u-img">
      <img :src="src"/>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['src'],
    methods: {
      eClick () {
        this.$emit('clickit')
      }
    }
  }
</script>
<style>
  .m-img-view {
    position: fixed;
    display: table;
    width: 100%;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: none repeat scroll 0% 0% rgba(0, 0, 0, 0.5);
    z-index: 2100;
    text-align: center;
  }
  .u-img {
    /*中间那块图片部分*/
    vertical-align: middle;
    display: table-cell;
  }
  .u-img img{
    max-width: 100vh;
    max-height: 100vh;
    transition: all 0.2s ease 0s;
  }
</style>
