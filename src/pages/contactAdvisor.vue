<!-- 联系置业顾问 -->
<template>
  <div class="body-wrapper">
    <div>
      <div id="top-tips" class="weui-panel weui-panel_access">
        <div class="weui-panel__hd">已入驻的置业顾问</div>
      </div>
      <div class="weui-panel weui-panel_access" v-for="item in list">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd" v-if="item.photo">
              <img class="weui-media-box__thumb" :src="item.photo" alt="">
            </div>
            <div class="weui-media-box__bd">
              <p class="weui-media-box__title" v-if="item.name">{{item.name}}</p>
              <p class="weui-media-box__desc" v-if="item.wechat">微信号：{{item.wechat}}</p>
              <div class="weui-media-box__desc" v-if="item.phone">电　话：<a class="weui-cell_link" :href="'tel:'+item.phone">{{item.phone}}</a></div>
            </div>
          </div>
          <div class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc" v-if="item.intro">{{item.intro}}</p>
              <div class="t-c">
                <img :src="item.qrcode" v-if="item.qrcode">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-panel weui-panel_access" v-if="!hasInfo">
        <div class="weui-panel__bd">
            <div class="weui-media-box__bd">
              <p class="weui-media-box__desc t-c pading-t10">还没有置业顾问入驻呢</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {SALEMAN_LIST} from '../store/modules/projectStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'

  export default {
    data () {
      return {
        isSearch: false,
        type: 1,
        pid: '',
        list: [],
        hasInfo: true
      }
    },
    mounted () {
      var pid = this.$route.query.pid
      this.pid = pid
      if (pid) {
        this.CHANGE_PENDING(true)
        this.SALEMAN_LIST({pid: pid}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status) {
            this.hasInfo = res.info.length > 0
            this.list = res.info
          } else {
            this.hasInfo = false
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      }
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, SALEMAN_LIST])
    }
  }
</script>
<style scoped>
  .body-wrapper {
    background-color: #f8f8f8;
  }
  #top-tips{
  }
  #top-tips.weui-panel:after,
  #top-tips.weui-panel .weui-panel__hd:after{
   /* border:none;*/
  }
</style>
