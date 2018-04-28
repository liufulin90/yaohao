<!--Copyright (C) 2017 QIANKUN HANLIN Corporation Limited-->
<!--vue实例挂载的app节点-->
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <v-loading :show="this.$store.state._global.pending"></v-loading>
    <v-toast :show="this.$store.state._global.toast">{{this.$store.state._global.toastText}}</v-toast>
  </div>
</template>

<script>
  import './assets/css/style.scss'
  export default {
  }
</script>
