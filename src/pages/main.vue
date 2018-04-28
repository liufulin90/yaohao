<template>
  <div class="main" v-loading.fullscreen.lock="this.$store.state._global.pending" :element-loading-text="this.$store.state._global.loadingText">
    <!-- 内容部分 -->
    <div class="content-wrap">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <v-footer></v-footer>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { USER_SIGNOUT } from '../store/modules/userStore'
  import {CHANGE_PENDING} from 'store/globalStore'
  import * as jst from 'js-common-tools'
  export default {
    name: 'main',
    data () {
      return {
        owneMenu: [],
        jst: jst
      }
    },
    mounted () {

    },
    methods: {
      ...mapActions([USER_SIGNOUT, CHANGE_PENDING]),
      signout () {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
