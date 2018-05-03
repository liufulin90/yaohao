<!-- 咨询 -->
<template>
  <div class="body-wrapper fix-wrapper news-wrap">
    <div class="weui-form-preview">
      <div class="weui-form-preview__ft">
        <a href="javascript:;" data-type="" @click="changeNews" class="weui-form-preview__btn weui-form-preview__btn_primary">
          全部咨询
        </a>
        <a href="javascript:;" data-type="policy" @click="changeNews" class="weui-form-preview__btn weui-form-preview__btn_primary">
          房市政策
        </a>
        <a href="javascript:;" data-type="announcement" @click="changeNews" class="weui-form-preview__btn weui-form-preview__btn_primary">
          公示公告
        </a>
      </div>
    </div>
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">{{titleTips}}</div>
      <div class="weui-panel__bd">
        <router-link :to="{name: 'newsDetail', query: { id: item.id}}" v-for="item in list" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd" v-if="item.images">
            <img class="weui-media-box__thumb" :src="item.images">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{item.title}}</h4>
            <p class="weui-media-box__desc">{{item.summary}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <v-footer :page="navPage"></v-footer>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {INFO_LIST} from 'store/modules/InformationStore'
  import {PAGE_SIZE} from '../config/'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import * as $ from 'jquery'
  var scrollFun
  export default {
    data () {
      return {
        navPage: 3,
        isSearch: false,
        titleTips: '全部咨询',
        type: '',
        page: 1,
        hasMore: true, // 滚动页面是否还有更多内容
        list: []
      }
    },
    mounted () {
//      var pid = this.$route.query.pid
      this.getInfoList()
      var self = this
      scrollFun = function () {
        let scrollTop = $(this).scrollTop()
        let scrollHeight = $(document).height()
        let windowHeight = $(this).height()
        if (scrollTop + windowHeight === scrollHeight) {
          if (self.hasMore) {
            self.getInfoList(true)
          }
        }
      }
      $(window).bind('scroll', scrollFun)
    },
    beforeDestroy () {
      $(window).unbind('scroll', scrollFun)
    },
    beforeUpdate () {
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, INFO_LIST]),
      changeNews (e) {
        this.type = e.target.dataset.type
        console.log(this.type)
        if (this.type == 'policy') {
          this.titleTips = '房市政策'
        } else if (this.type == 'announcement') {
          this.titleTips = '公示公告'
        } else {
          this.titleTips = '全部咨询'
        }
        this.getInfoList()
      },
      getInfoList (isAppend) {
        this.hasMore = false
        if (isAppend === true) {
          this.page++
        } else {
          this.page = 1
          this.list = []
        }
        this.CHANGE_PENDING(true)
        this.INFO_LIST({type: this.type}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            if (isAppend === true) {
              this.list = this.list.concat(res.info)
            } else {
              this.list = res.info
            }
            setTimeout(() => {
              // 由于有滚动加在事件，阻止初始化就加在第二页
              this.hasMore = res.info.length == PAGE_SIZE
            }, 100)
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
  .weui-panel{
    margin-top: 0;
  }
</style>
