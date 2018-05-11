<!-- 到home页的icon组件 -->
<template>
  <router-link :to="{name: 'index'}">
    <img class="home-icon" src="../assets/icons/home-active.svg" />
  </router-link>
</template>
<script>
  export default{
  }
</script>
<style>
  .home-icon {
    width: 28px;
    height: 28px;
    position: fixed;
    right: 15px;
    bottom: 60px;
    z-index: 1000;
  }
</style>
