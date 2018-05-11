<!-- template -->
<template>
  <div class="body-wrapper">
    template
    <v-homeicon></v-homeicon>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
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
