<!-- 楼盘详情信息 -->
<template>
  <div class="body-wrapper project-wrap">
    <div class="weui-cells weui-cells_form project-title">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label t-c">{{projects.title}}</label></div>
      </div>
    </div>
    <!-- 楼盘基本详情 -->
    <div class="weui-form-preview" v-for="(items, index) in projects.attributes">
      <div class="weui-form-preview__bd">
        <h4 class="t-l" style="color: #000;">{{index}}</h4>
        <div class="weui-form-preview__item" v-for="attr in items">
          <label class="weui-form-preview__label">{{attr.name}}</label>
          <span class="weui-form-preview__value">{{attr.value?attr.value:'--'}}</span>
        </div>
      </div>
    </div>
    <v-homeicon></v-homeicon>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {PROJECT_INFO} from '../store/modules/projectStore'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  //  import {PROJECT_SALE_INFO_KEY} from '../config/code'

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
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.projects = res.info
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      }
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
