<!--Copyright (C) 2017 QIANKUN HANLIN Corporation Limited-->
<!--主页-->
<template>
    <div class="body-wrapper fix-wrapper">
      <div class="item">
        <div class="banner" style="height:150px">
          <swiper :options="swiperOption" style="height:150px">
            <swiper-slide v-for="slide in swiperSlides">
              <a :href="slide.link">
                <img :src="slide.img">
                <div class="slide-tips">{{slide.text}}</div>
              </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <!-- 轮播 end -->
        <div :class="isSearch ? 'weui-search-bar weui-search-bar_focusing' : 'weui-search-bar'" id="searchBar">
          <form class="weui-search-bar__form" @click="tapSearch">
            <div class="weui-search-bar__box">
              <i class="weui-icon-search"></i>
              <input class="weui-search-bar__input" placeholder="输入楼盘名称，如：中海锦江城" name="keyword" type="search">
              <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText">
              <i class="weui-icon-search"></i>
              <span>搜索</span>
            </label>
          </form>
          <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancleSearch" id="searchCancel">取消</a>
        </div>

      </div>
      <!-- 卡片 begin-->
      <div class="weui-grids">
        <router-link :to="{ name: 'projectSearch', query: { status: 5 }}" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/toutiao-active.png" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">摇号头条</p>
        </router-link>

        <router-link :to="{ name: 'shakeResult', query: { type: 2 }}" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/result-active.svg" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">查询摇号结果</p>
        </router-link>
        <router-link :to="{ name: 'substitute'}" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/new-active.svg" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">资料代交</p>
        </router-link>

        <a href="#/index" class="weui-grid" v-show="false">
          <div class="weui-grid__icon">
            <img src="../assets/icons/share_cashout.png" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">需要资金</p>
        </a>
        <!--<router-link :to="{ name: 'projectSearch', query: { status: 2 }}" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/signup-active.svg" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">最新报名</p>
        </router-link>
        <router-link :to="{ name: 'projectSearch', query: { status: 5 }}" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/nexttime-active.svg" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">最新摇号</p>
        </router-link>
        <router-link :to="{ name: 'projectSearch', query: { status: 1 }}" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/jiang-mai-active.svg" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">最新预售</p>
        </router-link>

        <a href="#/index" class="weui-grid">
          <div class="weui-grid__icon">
            <img src="../assets/icons/invite-active.png" alt="" class="loading"
                 data-was-processed="true">
          </div>
          <p class="weui-grid__label">置业顾问入驻</p>
        </a>-->
      </div>
      <!-- 卡片 end-->
      <div class="status-label" id="statusLabel" style="padding: 10px 0;">
        <ul>
          <li :class="" :data-district="addr" @click="tapLabel" v-for="addr in addrMap">{{addr}}</li>
          <li :class="" :data-status="it.codes" @click="tapLabel" v-for="it in statusMapping">{{it.text}}</li>
          <li class="notdata"></li>
        </ul>
      </div>
      <div class="item">
        <div class="projectlist weui-panel weui-panel_access">
          <div class="weui-panel__bd" v-if="list.length">
            <router-link :to="{ name: 'projects', query: { pid: item.pid }}" class="weui-media-box weui-media-box_appmsg" v-for="item in list">
              <div class="weui-media-box__hd" style="width: 100px;height: 100px">
                <img class="weui-media-box__thumb" :src="item.image" style="width: 100px;" alt="...">
              </div>
              <div class="weui-media-box__bd">
                <h5 class="weui-media-box__title">{{item.title}}</h5>
                <div class="item_status">
                  <span class="status" v-for="tag in item.tags">{{tag}}</span>
                </div>
                <div class="weui-media-box__desc">{{item.district}}</div>
                <div class="weui-media-box__desc">{{item.produce_no_time}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div v-if="!list.length" class="pading-b20 pading-t10 t-c">没找到你想要的呢！</div>
      </div>
      <v-footer :page="navPage"></v-footer>
    </div>
</template>
<style>
  .media-list{margin-bottom: 50px}
</style>
<script>
  import {mapActions} from 'vuex'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import {PATH_PAGE_MAPPING, PAGE_SIZE} from '../config/'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {PROJECT_LIST} from 'store/modules/projectStore'
  import * as $ from 'jquery'
  var scrollFun
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        navPage: 1,
        isSearch: false,
        status: '', // 状态 1 即将预售； 2 正在报名； 3 报名结束； 4 已复核； 5 正在摇号； 6 已摇号
        district: '', // 区县，可传值： 天府新区，高新区，主城区，郊区
        page: 1,
        hasMore: true, // 滚动页面是否还有更多内容
        list: [],
        addrMap: CODE.HOME_ADDR_MAP,
        statusMapping: CODE.HOME_STATUS_MAPPING,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 5000
          }
        },
        swiperSlides: [
          {
            link: '#/index',
            img: 'http://imgcdn.qi.la/assets/img/20180318/5aad3ea39d830.jpg?imageView2/5/w/600/format/jpg/interlace/1/q/50|imageslim',
            text: '恒大御龙天峰城二期'
          },
          {
            link: '#/index',
            img: 'http://imgcdn.qi.la/assets/img/20180318/5aad3f686147f.jpg?imageView2/5/w/600/format/jpg/interlace/1/q/50|imageslim',
            text: '保利学府城'
          },
          {
            link: '#/index',
            img: '/static/resource.jpg',
            text: '保利国宾首府'
          }]
      }
    },
    mounted () {
      this.list = [
//        {
//          pid: 1,
//          district: '龙泉驿区',
//          status: 1,
//          title: '朗诗熙华府',
//          image: '/static/resource.jpg',
//          tags: ['正在报名'],
//          produce_no_time: '2018-04-17'
//        },
//        {
//          pid: 2,
//          district: '龙泉驿区',
//          status: 2,
//          title: '朗诗熙华府',
//          image: '/static/resource.jpg',
//          tags: ['已报名'],
//          produce_no_time: '2018-04-22'
//        }
      ]
      this.searchList()
      const {name} = this.$route
      if (PATH_PAGE_MAPPING[name]) {
        this.navPage = PATH_PAGE_MAPPING[name]
      }
      var self = this
      scrollFun = function () {
        let scrollTop = $(this).scrollTop()
        let scrollHeight = $(document).height()
        let windowHeight = $(this).height()
        if (scrollTop + windowHeight === scrollHeight) {
          if (self.hasMore) {
            self.searchList(true)
          }
        }
      }
      $(window).bind('scroll', scrollFun)
    },
    beforeDestroy () {
      $(window).unbind('scroll', scrollFun)
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_LIST]),
      showLoading () {
        let {pending} = this.$store.state._global
        if (pending) return
        this.CHANGE_PENDING(true)
        setTimeout(() => {
          this.CHANGE_PENDING(false)
        }, 2000)
      },
      tapSearch () {
        this.$router.push({path: 'projectSearch'})
        this.isSearch = true
      },
      cancleSearch () {
        this.isSearch = false
      },
      searchList (isAppend) {
        this.hasMore = false
        if (isAppend === true) {
          this.page++
        } else {
          this.page = 1
        }
        this.CHANGE_PENDING(true)
        this.PROJECT_LIST({
          status: this.status,
          district: this.district,
          page: this.page
        }).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status) {
            if (isAppend === true) {
              this.list = this.list.concat(res.info)
            } else {
              this.list = []
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
      },
      tapLabel (e) {
        // 多选逻辑
        /*
        e.target.className = e.target.className == 'active' ? '' : 'active'
        var ulNodes = document.getElementById('statusLabel').children
        var tempStatus = ''
        var tempDistrict = ''
        for (var ul in ulNodes) {
          var liNodes = ulNodes[ul].children
          for (var li in liNodes) {
            if (liNodes[li].className == 'active' && liNodes[li].dataset.district && liNodes[li].dataset.district != undefined) {
              tempDistrict += liNodes[li].dataset.district + ','
            } else if (liNodes[li].className == 'active' && liNodes[li].dataset.status && liNodes[li].dataset.status != undefined) {
              tempStatus += liNodes[li].dataset.status + ','
            }
          }
        }
        this.district = tempDistrict.substr(0, tempDistrict.length - 1)
        this.status = tempStatus.substr(0, tempStatus.length - 1)
        this.searchList()
        */

        // 单选逻辑
        if (e.target.className == 'active') {
          // 单选被取消了，就直接清空所有
          this.status = ''
          this.district = ''
          e.target.className = ''
          this.searchList()
          return
        }
        var ulNodes = document.getElementById('statusLabel').children
        for (var ul in ulNodes) {
          var liNodes = ulNodes[ul].children
          for (var li in liNodes) {
            if (e.target.innerHTML == liNodes[li].innerHTML) {
              if (liNodes[li].dataset.district && liNodes[li].dataset.district != undefined) {
                this.district = e.target.dataset.district
                this.status = ''
              } else {
                this.district = ''
                this.status = e.target.dataset.status
              }
            } else {
              if (typeof liNodes[li] === 'object') {
                liNodes[li].classList.remove('active')
              }
            }
          }
        }
        e.target.className = 'active'
        this.searchList()
      }
    }
  }
</script>
