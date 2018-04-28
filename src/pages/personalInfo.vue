<!-- 个人中心-个人信息 -->
<template>
  <div class="body-wrapper personal-info-wrap">
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__ft infotop">
        <div class="weui-cell">
          <div class="weui-cell__bd">我的身份信息</div>
          <span class="weui-cell__ft" @click="showForm">添加</span>
        </div>
      </div>
      <div class="weui-panel__ft" v-for="(item, index) in userInfoList">
        <a class="weui-cell weui-cell_access info-list"
           :data-name="item.name"
           :data-phone="item.phone"
           :data-idno="item.idno"
           :data-index="index"
           @click.self="editForm">
          <div class="weui-cell__bd infoname">{{item.name}}</div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>

    <!-- 弹出框编辑 -->
    <div class="js_dialog" v-show="formIsShow" style="opacity: 1;">
      <div class="weui-mask"></div>
      <div class="weui-dialog" style="max-width: none;">
        <h4 style="padding: 15px 30px 0;" class="t-l">绑定个人信息，查询摇号更方便</h4>
        <div class="weui-cells weui-cells_form" style="font-size: 14px;padding: 0 0 15px;" v-model="form">
          <div class="weui-cell">
            <div class="weui-cell__hd"><label for="" class="weui-label">姓　名</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" v-model="form.name" placeholder="请输入姓名">
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd"><label for="" class="weui-label">身份证</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" v-model="form.idno" placeholder="请输入身份证号码">
            </div>
          </div>
          <div class="weui-cell">
            <div class="weui-cell__hd"><label for="" class="weui-label">手机号</label></div>
            <div class="weui-cell__bd">
              <input class="weui-input" type="number" v-model="form.phone"  placeholder="请输入手机号">
            </div>
          </div>
          <div class="weui-cell infobutton">
            <a href="javascript:;" class="weui-btn weui-btn_default" @click="formIsShow = false">取消</a>
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="addOrUpdate">确定</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {USER_INFO_KEY} from '../config/'
  import * as MSG from '../config/messages'
  import * as jst from 'js-common-tools'

  export default {
    data () {
      return {
        formIsShow: false,
        navPage: 4,
        form: {
          name: '',
          phone: '',
          idno: ''
        },
        updateIndex: '',
        userInfoList: [
          {
            name: '李四',
            phone: '15082943228',
            idno: '511321********4458'
          }
        ]
      }
    },
    mounted () {
      try {
        // 防止初始化没有信息而报错
        var userInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY))
        if (userInfo === null) {
          userInfo = []
          localStorage.setItem(USER_INFO_KEY, JSON.stringify([]))
        }
        this.userInfoList = userInfo
      } catch (e) {
        localStorage.setItem(USER_INFO_KEY, JSON.stringify([]))
        this.userInfoList = []
      }
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST]),
      showForm () {
        var storageInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY))
        if (storageInfo.length >= 2) {
          this.CHANGE_TOAST(MSG.ADD_USERINFO_ERROR_MSG)
          return
        }
        this.form = {
          name: '',
          phone: '',
          idno: ''
        }
        this.updateIndex = ''
        this.formIsShow = true
      },
      editForm (e) {
        this.form = e.target.dataset
        this.updateIndex = e.target.dataset.index
        this.formIsShow = true
      },
      addOrUpdate () {
        // 变更个人信息
        var storageInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY))
        if (!jst.isIdentityCard(this.form.idno)) {
          this.CHANGE_TOAST(MSG.IDENTITY_CARD_ERROR_MSG)
          return
        }
        if (!jst.isPhone(this.form.phone)) {
          this.CHANGE_TOAST(MSG.PHONE_NUMBER_ERROR_MSG)
          return
        }
        if (this.updateIndex === '') {
          var temp = storageInfo.concat([this.form])
          this.userInfoList = temp
          localStorage.setItem(USER_INFO_KEY, JSON.stringify(temp))
        } else {
          storageInfo[this.updateIndex] = Object.assign(storageInfo[this.updateIndex], this.form)
          localStorage.setItem(USER_INFO_KEY, JSON.stringify(storageInfo))
          this.userInfoList = storageInfo
        }
        this.formIsShow = false
      }
    }
  }
</script>
<style scoped>

</style>
