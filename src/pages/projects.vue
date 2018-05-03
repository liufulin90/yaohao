<!-- 楼盘基本信息 -->
<template>
  <div class="body-wrapper project-wrap global-bg">
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
    <!-- 绑定身份信息 -->
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__ft infotop">
        <div class="weui-cell">
          <div class="weui-cell__bd">绑定的身份信息</div>
          <span class="weui-cell__ft" @click="showBindForm">绑定</span>
        </div>
      </div>
      <div class="weui-cell" v-if="bindList.length">
        <div class="weui-cell__bd">
          <span v-for="item in bindList" style="padding-right: 15px">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div style="padding: 10px 15px;color: #808080;">
      <p v-if="!bindList.length"> 您还没有绑定，点击右上角去绑定吧。</p>
      <p>绑定了在摇号结果出来后会第一时间接受到短信通知。</p>
    </div>
    <br> <br>
    <!-- 绑定弹出框 -->
    <div class="js_dialog" v-show="bindFormIsShow" style="opacity: 1;">
      <div class="weui-mask"></div>
      <div class="weui-dialog" style="max-width: none;">
        <h4 style="padding: 10px 30px 0;margin-bottom: 0" class="t-l">选择身份信息绑定到该楼盘</h4>
        <div class="weui-cells weui-cells_form" style="font-size: 14px;padding: 0 15px 15px;">
          <div class="weui-cell weui-cell_switch" v-for="item in userInfoList">
            <div class="weui-cell__bd"><label for="" class="weui-label t-l">{{item.name}}</label></div>
            <div class="weui-cell__ft">
              <input class="weui-switch" type="checkbox" @change="changeBind" v-model="selected" :data-name="item.name" :value="item.id">
            </div>
          </div>
          <div class="weui-cell infobutton">
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="getNewBindList">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {PROJECT_INFO, PROJECT_IDINFO_LIST, PROJECT_IDINFO_BIND, PROJECT_IDINFO_DELETE} from '../store/modules/projectStore'
  import {USER_IDINFO_LIST} from '../store/modules/userStore'
  import * as jst from 'js-common-tools'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'

  export default {
    data () {
      return {
        isSearch: false,
        bindFormIsShow: false,
        userInfoList: [],
        selected: [],
        bindList: [], // 已绑定的信息
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
      this.getProjectInfo(pid)
      this.getBindList()
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
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_INFO,
        PROJECT_IDINFO_LIST, PROJECT_IDINFO_BIND, PROJECT_IDINFO_DELETE, USER_IDINFO_LIST]),
      tapSearch () {
        this.isSearch = true
      },
      cancleSearch () {
        this.isSearch = false
      },
      changeType (e) {
        this.type = e.target.dataset.type
      },
      getProjectInfo (pid) {
        if (pid) {
          this.CHANGE_PENDING(true)
          this.PROJECT_INFO({pid: pid}).then(res => {
            this.CHANGE_PENDING(false)
            if (CODE.SUCCESS == res.status && !res.errno) {
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
      showBindForm () {
        this.CHANGE_PENDING(true)
        this.USER_IDINFO_LIST().then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.userInfoList = res.info
            this.bindFormIsShow = true
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      },
      changeBind (e) {
        if (jst.inArray(e.target.value, this.selected)) {
          // 绑定
          this.PROJECT_IDINFO_BIND({
            pid: this.pid,
            ids: e.target.value
          }).then(res => {
            this.CHANGE_PENDING(false)
            if (CODE.SUCCESS == res.status && !res.errno) {
              this.CHANGE_TOAST('绑定成功')
            } else {
              this.CHANGE_TOAST(res.msg)
            }
          }).catch(() => {
            this.CHANGE_PENDING(false)
            this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
          })
        } else {
          // 解除
          this.PROJECT_IDINFO_DELETE({
            pid: this.pid,
            ids: e.target.value
          }).then(res => {
            this.CHANGE_PENDING(false)
            if (CODE.SUCCESS == res.status && !res.errno) {
              this.CHANGE_TOAST('解除绑定')
            } else {
              this.CHANGE_TOAST(res.msg)
            }
          }).catch(() => {
            this.CHANGE_PENDING(false)
            this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
          })
        }
      },
      getBindList () {
        this.CHANGE_PENDING(true)
        this.PROJECT_IDINFO_LIST({pid: this.pid}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.bindList = res.info
            var temp = []
            this.bindList.forEach((it) => {
              temp.push(it.id)
            })
            this.selected = temp
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      },
      // 点击绑定弹出看确定按钮
      getNewBindList () {
        this.CHANGE_TOAST(false)
        this.getBindList()
        this.bindFormIsShow = false
      }
    }
  }
</script>
<style scoped>
</style>
