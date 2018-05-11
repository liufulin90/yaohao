<!-- 代交资料 -->
<template>
  <div class="body-wrapper">
    <div id="substitute">
      <div class="tips">
        交资料太热、太累、太慢、太挤，又不好跟领导请假，怎么办？本平台提供专业资料代交服务，让您足不出行报名买房
      </div>
      <vue-preview :slides="slide1"></vue-preview>
    </div>
    <v-homeicon></v-homeicon>
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
        },
        slide1: [
          {
            src: '/static/substitute.jpg',
            msrc: '/static/substitute.jpg',
            alt: '',
            title: '',
            w: 485,
            h: 530
          }
        ]
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
  #substitute{
    padding: 15px;
  }
  #substitute .tips {
    margin-bottom: 10px;
  }
</style>
