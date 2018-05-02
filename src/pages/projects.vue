<!-- 楼盘基本信息 -->
<template>
  <div class="body-wrapper project-wrap">
    <div class="project-pic">
      <img :src="projects.image?projects.image:'/static/resource.jpg'">
    </div>
    <div class="weui-cells weui-cells_form project-title">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">{{projects.title}}</label></div>
        <div class="status">
          <span v-for="tag in projects.tags">{{tag}}</span>
        </div>
      </div>
    </div>
    <!-- 楼盘基本详情 -->
    <div class="weui-form-preview">
      <div class="weui-form-preview__bd">
        <div class="weui-form-preview__item" v-if="projects.district">
          <label class="weui-form-preview__label">区域</label>
          <span class="weui-form-preview__value">{{projects.district}}</span>
        </div>
        <div class="weui-form-preview__item" v-if="projects.project_address">
          <label class="weui-form-preview__label">项目地址</label>
          <span class="weui-form-preview__value">{{projects.project_address}}</span>
        </div>

        <div class="weui-form-preview__item" v-if="projects.pre_sales_time">
          <label class="weui-form-preview__label">预售时间</label>
          <span class="weui-form-preview__value">{{projects.pre_sales_time}}</span>
        </div>

        <div class="weui-form-preview__item" v-if="projects.avg_price">
          <label class="weui-form-preview__label">预售价格</label>
          <span class="weui-form-preview__value">{{projects.avg_price}}</span>
        </div>

        <div class="weui-form-preview__item" v-if="projects.enroll_start_time">
          <label class="weui-form-preview__label">报名时间</label>
          <span class="weui-form-preview__value">{{projects.enroll_start_time}}</span>
        </div>

        <div class="weui-form-preview__item" v-if="projects.produce_no_time">
          <label class="weui-form-preview__label">摇号时间</label>
          <span class="weui-form-preview__value">{{projects.produce_no_time}}</span>
        </div>
      </div>
      <div class="weui-form-preview__ft">
        <router-link :to="{ name: 'projectDetail', query: {pid: pid }}" class="weui-form-preview__btn weui-form-preview__btn_primary">
          查看详情
        </router-link>
        <router-link :to="{ name: 'projectPhotoList', query: {pid: pid }}" class="weui-form-preview__btn weui-form-preview__btn_primary">
          户型图
        </router-link>
        <router-link :to="{ name: 'contactAdvisor', query: {pid: pid }}" class="weui-form-preview__btn weui-form-preview__btn_primary">
          联系置业顾问
        </router-link>
      </div>
      <div class="weui-form-preview__ft">
        <router-link :to="{ name: 'shakeResult', query: { type: 2, pid: pid }}" class="weui-form-preview__btn weui-form-preview__btn_primary">
          查看摇号结果
        </router-link>
        <router-link v-show="true" :to="{ name: 'shakeResult', query: { type: 1, pid: pid }}" class="weui-form-preview__btn weui-form-preview__btn_primary">
          查看复核名单
        </router-link>
      </div>
    </div>
    <br> <br>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {PROJECT_INFO} from '../store/modules/projectStore'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'

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
      if (pid) {
        this.CHANGE_PENDING(true)
        this.PROJECT_INFO({pid: pid}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status) {
            var tempProject = {}
            Object.assign(this.projects, res.info)
            for (var item in res.info.attributes) {
              var data = res.info.attributes[item]
              for (var is in data) {
                tempProject = Object.assign(tempProject, {
                  [data[is].key]: data[is].value
                })
              }
            }
            Object.assign(this.projects, tempProject)
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      }
    },
    beforeRouteLeave (to, from, next) {
      /*
      if (to.name === 'projectDetail' || to.name === 'shakeResult' || to.name === 'projectPhotoList') {
        // 设置下一个路由的 meta
        from.meta.keepAlive = true
      } else {
        // 设置下一个路由的 meta
        from.meta.keepAlive = false
      }
      */
      next()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_INFO]),
      tapSearch () {
        this.isSearch = true
      },
      cancleSearch () {
        this.isSearch = false
      },
      changeType (e) {
        this.type = e.target.dataset.type
      }
    }
  }
</script>
<style scoped>
</style>
