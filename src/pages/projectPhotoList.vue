<!-- 楼盘相册 -->
<template>
  <div class="body-wrapper" id="photo-list-wrap">
    <div class="weui-panel weui-panel_access" v-for="(infos, index) in photoInfo">
      <div class="weui-panel__hd">{{photoMap[index]}}</div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <vue-preview :slides="infos" class="views"></vue-preview>
        </div>
      </div>
    </div>
    <div v-if="!hasInfo" class="t-c pading-t20">该项目还没有上传户型图</div>
  </div>
</template>
<style scoped>
</style>
<script>
  import {mapActions} from 'vuex'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {PROJECT_PHOTO_LIST} from 'store/modules/projectStore'
  export default {
    data () {
      return {
        isSearch: false,
        type: 1,
        pid: '',
        photoMap: {
          surrounding: '楼盘周边',
          outdoor_scene: '楼盘实景',
          house_type: '楼盘户型'
        },
        photoInfo: {},
        hasInfo: true
      }
    },
    mounted () {
      var pid = this.$route.query.pid
      this.pid = pid
      this.getPhotoList()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_PHOTO_LIST]),
      getPhotoList () {
        this.CHANGE_PENDING(true)
        this.PROJECT_PHOTO_LIST({pid: this.pid}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.hasInfo = false
            var data = res.info
            for (var its in data) {
              data[its].forEach((item) => {
                return Object.assign(item, {
                  src: item.image,
                  msrc: item.image,
                  alt: item.title,
                  title: item.title,
                  w: 485,
                  h: 530
                })
              })
              this.hasInfo = true
            }
            this.photoInfo = data
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
</style>
