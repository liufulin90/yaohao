<!-- 摇号结果查询 -->
<template>
  <div class="body-wrapper" style="padding-top: 111px">
    <div class="top-wrap">
      <div class="select-wrap">
        <select class="weui-select" v-model="selectProject" @change="searchList">
          <option value="">-- 请选择楼盘 --</option>
          <option v-for="item in projectList" :value="item.pid">{{item.title}}</option>
        </select>
      </div>
      <div class="weui-navbar">
        <div :class="'weui-navbar__item ' + (type==2?'weui_bar__item_on':'')" data-type="2" @click="changeType">
          摇号结果
        </div>
        <div :class="'weui-navbar__item ' + (type==1?'weui_bar__item_on':'')" data-type="1" @click="changeType">
          复核名单
        </div>
      </div>
    </div>

    <div :class="isSearch ? 'weui-search-bar weui-search-bar_focusing' : 'weui-search-bar'" id="searchBar">
      <div class="weui-search-bar__form" @click="tapSearch">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input class="weui-search-bar__input" v-model="keyword" @change="searchList" placeholder="输入身份证、登记号、摇号编号进行搜索" required="" name="keyword" type="search">
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </div>
      <a href="javascript:" class="weui-search-bar__cancel-btn" @click="cancleSearch" id="searchCancel">取消</a>
    </div>
    <div class="item">
      <table class="table">
        <tbody>
        <tr v-for="item in list">
          <td>
            <div>
              <label for="" class="left-label">选房顺序：</label>{{item.apply_sort ? item.apply_sort : '未知'}}
            </div>
            <div>
              <label for="" class="left-label">公正摇号编码：</label>{{item.apply_no}}
            </div>
            <div>
              <label for="" class="left-label">姓名：</label>{{item.name}}
            </div>
            <div>
              <label for="" class="left-label">购房登记号：</label>{{item.reg_no}}
            </div>
            <div>
              <label for="" class="left-label">身份证：</label>{{item.id_no}}
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <div v-if="!list.length" class="t-c pading-t20">没找到你想要的呢！</div>
    </div>
    <v-homeicon></v-homeicon>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import {PAGE_SIZE} from '../config/'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {PROJECT_LIST, APPLY_LIST, RESULT_LIST} from 'store/modules/projectStore'
  import * as $ from 'jquery'
  var scrollFun
  export default{
    data () {
      return {
        isSearch: false,
        type: 2,
        keyword: '',
        page: 1,
        hasMore: true, // 滚动页面是否还有更多内容
        selectProject: '',
        projectList: [],
        list: [
//          {
//            apply_sort: '普通第1号',
//            apply_no: 'B02821',
//            name: '*秀英',
//            reg_no: '20180330006976',
//            id_no: '511130********0043'
//          }
        ]
      }
    },
    mounted () {
      var type = this.$route.query.type
      var selectProject = this.$route.query.pid
      if (type) {
        this.type = type
      }
      if (selectProject) {
        this.selectProject = selectProject
      }
      this.initData()
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
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_LIST, APPLY_LIST, RESULT_LIST]),
      tapSearch () {
        this.isSearch = true
      },
      cancleSearch () {
        this.isSearch = false
      },
      changeType (e) {
        this.type = e.target.dataset.type
        this.searchList()
      },
      async initData () {
        // 获取楼盘列表
        this.CHANGE_PENDING(true)
        await this.PROJECT_LIST().then((res) => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS) {
            this.projectList = res.info
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
        // 检索
        if (this.selectProject) {
          await this.searchList()
        }
      },
      searchList (isAppend) {
        this.hasMore = false
        if (isAppend === true) {
          this.page++
        } else {
          this.page = 1
          this.list = []
        }
        if (this.type == 1) {
          // 复核名单
          if (!this.selectProject) {
            this.CHANGE_TOAST(MSG.PROJECT_NOT_SELECT_ERROR_MSG)
            return
          }
          return this.searchApplyList(isAppend)
        } else if (this.type == 2) {
          // 摇号结果
          if (!this.selectProject && !this.keyword) {
            this.CHANGE_TOAST(MSG.PROJECT_NOT_SELECT_AND_KEYWORD_EMPTY_ERROR_MSG)
            return
          }
          return this.searchResultList(isAppend)
        }
      },
      // 查询楼盘摇号报名列表（复核名单）
      searchApplyList (isAppend) {
        this.CHANGE_PENDING(true)
        return this.APPLY_LIST({
          pid: this.selectProject,
          kw: this.keyword,
          page: this.page
        }).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS) {
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
        }).catch(res => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      },
      // 查询楼盘摇号结果（含搜索）
      searchResultList (isAppend) {
        this.CHANGE_PENDING(true)
        return this.RESULT_LIST({
          pid: this.selectProject,
          kw: this.keyword,
          page: this.page
        }).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS) {
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
        }).catch(res => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      }
    }
  }
</script>
<style scoped>
  .left-label{
    width: 122px; display: inline-block; text-align: right; padding-right: 15px;
  }
  .top-wrap{
    position: fixed;
    top: 0;
    z-index: 490;
    width: 100%;
    background-color: white;
  }
  .top-wrap .select-wrap{
    padding: 15px 30px;
    border-bottom: 1px solid #ccc;
  }
  .top-wrap .select-wrap:after{

  }
  .top-wrap .select-wrap .weui-select{
     -webkit-appearance: menulist;
     z-index: 501;
    height: 30px;
    line-height: 30px;
  }

  .top-wrap .weui-navbar{
    position: relative;
  }
  .table>tbody>tr>td{
    border-top: none;
    border-bottom: 1px dotted #ccc;;
  }
</style>
