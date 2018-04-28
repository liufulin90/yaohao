<!-- 联系置业顾问 -->
<template>
  <div class="body-wrapper">
    联系置业顾问
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'

  export default {
    data () {
      return {
        isSearch: false,
        type: 1,
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
</style>
