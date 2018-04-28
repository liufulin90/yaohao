<!-- 咨询详情 -->
<template>
  <div class="body-wrapper" id="information">
    <div class="content-wrap">
      <div class="title">{{detail.title}}</div>
      <div class="date">发布时间：{{detail.create_time ? jst.timestampFormat(Number(detail.create_time), 'Y-m-d H:i:s') : jst.getNowTimeFormat()}}</div>
      <div class="content" v-html="detail.content"></div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {INFO_DETAIL} from 'store/modules/InformationStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import * as jst from 'js-common-tools'
  export default {
    data () {
      return {
        jst: jst,
        isSearch: false,
        type: 1,
        pid: '',
        detail: {
          title: ''
        }
      }
    },
    mounted () {
      this.id = this.$route.query.id
      this.getDetail()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, INFO_DETAIL]),
      getDetail () {
        this.CHANGE_PENDING(true)
        this.INFO_DETAIL({id: this.id}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status) {
            this.detail = res.info
            document.title = res.info.title
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      }
    }
  }
</script>
<style scoped>
  .content-wrap{
    padding: 15px;
  }
  .content-wrap .title{
    font-size: 16px;
    font-weight: bold;
  }
  .content-wrap .date{
    margin: 10px 0;
  }
  .content-wrap .content {

  }
</style>
