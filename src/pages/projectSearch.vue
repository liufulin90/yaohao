<!-- 楼盘检索页面 -->
<template>
  <div class="body-wrapper">
    <div :class="isSearch ? 'weui-search-bar weui-search-bar_focusing' : 'weui-search-bar'" id="searchBar">
      <div class="weui-search-bar__form" @click="tapSearch">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input class="weui-search-bar__input" v-model="keyword" @change="searchList" placeholder="输入楼盘名称，如：中海锦江城" required="" name="keyword" type="search">
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </div>
      <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancleSearch" id="searchCancel">取消</a>
    </div>
    <div class="status-label" id="searchLabels">
      <ul>
        <li :class="" data-district="天府新区" @click="tapLabel">天府新区</li>
        <li :class="" data-district="高新区" @click="tapLabel">高新区</li>
        <li :class="" data-district="主城区" @click="tapLabel">主城区</li>
        <li :class="" data-district="郊区" @click="tapLabel">郊区</li>
      </ul>
      <!--1 即将预售； 2 正在报名； 3 报名结束； 4 已复核； 5 正在摇号； 6 已摇号-->
      <ul>
        <li :class="" data-status="1" @click="tapLabel">即将预售</li>
        <li :class="" data-status="2" @click="tapLabel">正在报名</li>
        <li :class="" data-status="3" @click="tapLabel">报名结束</li>
        <li :class="" data-status="4" @click="tapLabel">已复核</li>
      </ul>
      <ul>
        <li :class="status == 5 ? 'active' : ''" data-status="5" @click="tapLabel">正在摇号</li>
        <li :class="" data-status="6" @click="tapLabel">已摇号</li>
        <li class="notdata"></li>
        <li class="notdata"></li>
      </ul>
      <ul>
      </ul>
    </div>
    <!--<h5 class="custom-panel">{{statusText}}</h5>-->
    <!-- 列表begin -->
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
              <div class="weui-media-box__desc">{{item.date}}</div>
            </div>
          </router-link>
        </div>
      </div>
      <div v-if="!list.length" class="t-c">没找到你想要的呢！</div>
    </div>
    <!-- 列表end -->
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {PROJECT_LIST} from '../store/modules/projectStore'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import {PAGE_SIZE} from '../config/'
  import * as $ from 'jquery'
  var scrollFun
  export default{
    data () {
      return {
        isSearch: false,
        statusText: '全部项目',
        status: '', // 状态 1 即将预售； 2 正在报名； 3 报名结束； 5 正在摇号； 6 已摇号
        district: '', // 区县，可传值： 天府新区，高新区，主城区，郊区
        keyword: '',
        page: 1,
        hasMore: true, // 滚动页面是否还有更多内容
        list: [
//          {
//            pid: 1,
//            district: '龙泉驿区',
//            status: 1,
//            title: '朗诗熙华府',
//            image: '/static/resource.jpg',
//            tags: ['正在报名'],
//            date: '2018-04-17'
//          },
//          {
//            pid: 2,
//            district: '龙泉驿区',
//            status: 2,
//            title: '朗诗熙华府',
//            image: '/static/resource.jpg',
//            tags: ['已报名'],
//            date: '2018-04-22'
//          }
        ]
      }
    },
    mounted () {
      if (this.$route.query.status) {
        this.status = this.$route.query.status
      }
      this.searchList()

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
      ...mapActions([PROJECT_LIST, CHANGE_PENDING, CHANGE_TOAST]),
      searchList (isAppend) {
        this.hasMore = false
        if (isAppend === true) {
          this.page++
        } else {
          this.page = 1
          this.list = []
        }
        this.CHANGE_PENDING(true)
        this.PROJECT_LIST({
          status: this.status,
          district: this.district,
          kw: this.keyword
        }).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status) {
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
      },
      tapLabel (e) {
        // 多选逻辑
        /*
        e.target.className = e.target.className == 'active' ? '' : 'active'
        var ulNodes = document.getElementById('searchLabels').children
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
        var ulNodes = document.getElementById('searchLabels').children
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
      },
      tapSearch () {
        this.isSearch = true
      },
      cancleSearch () {
        this.isSearch = false
      }
    }
  }
</script>
<style>

</style>
