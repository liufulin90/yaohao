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
           :data-id_no="item.id_no"
           :data-index="index"
           :data-id="item.id"
           @touchstart="showDeleteButton" @touchend="clearLoop"
        >
          <div class="weui-cell__bd infoname">{{item.name}}</div>
          <span class="weui-cell__ft"></span>
        </a>
      </div>
    </div>
    <div class="t-c pading-t10 weui-cell__ft">{{userInfoList.length>0 ? '长按删除身份信息' : '点击有上角添加信息'}}</div>
    <!-- 弹出框编辑 -->
    <div class="js_dialog" v-show="deleteFormIsShow" style="opacity: 1;">
      <div class="weui-mask"></div>
      <div class="weui-dialog" style="max-width: none;">
        <h4 style="padding: 10px 30px 0;" class="t-l">确认删除（{{form.name}}）？</h4>
        <div class=" weui-cells_form" style="font-size: 14px;padding: 0 0 15px;" v-model="form">
          <div class="infobutton">
            <a href="javascript:;" class="weui-btn weui-btn_default" @click="deleteFormIsShow = false">取消</a>
            <a href="javascript:;" class="weui-btn weui-btn_primary" @click="deleteInfo">确定</a>
          </div>
        </div>
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
              <input class="weui-input" type="text" v-model="form.id_no" placeholder="请输入身份证号码">
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
  import {USER_IDINFO_ADD, USER_IDINFO_LIST, USER_IDINFO_DELETE, USER_IDINFO_UPDATE} from '../store/modules/userStore'
  import * as CODE from '../config/code'
//  import {USER_INFO_KEY} from '../config/'
  import * as MSG from '../config/messages'
  import * as jst from 'js-common-tools'

  export default {
    data () {
      return {
        formIsShow: false,
        deleteFormIsShow: false,
        Loop: null,
        isDelete: false,
        navPage: 4,
        form: {
          name: '',
          phone: '',
          id_no: ''
        },
        updateIndex: '',
        userInfoList: [
//          {
//            name: '李四',
//            phone: '15082943228',
//            id_no: '511321********4458'
//          }
        ]
      }
    },
    mounted () {
      // 操作本地数据
      /*
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
       */
      // 获取数据库
      this.getInfoList()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, USER_IDINFO_ADD, USER_IDINFO_LIST, USER_IDINFO_DELETE, USER_IDINFO_UPDATE]),
      showDeleteButton (e) {
        clearInterval(this.Loop)// 再次清空定时器，防止重复注册定时器
        this.Loop = setTimeout(() => {
          this.isDelete = true
          this.deleteFormIsShow = true
          this.form = e.target.dataset
          this.updateIndex = e.target.dataset.index
        }, 1000)
      },
      clearLoop (e) {
        if (!this.isDelete) {
          this.editForm(e)
        } else {
          this.isDelete = false
        }
        clearInterval(this.Loop)
      },
      showForm () {
//        var storageInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY))
        var storageInfo = this.userInfoList
        if (storageInfo.length >= 3) {
          this.CHANGE_TOAST(MSG.ADD_USERINFO_ERROR_MSG)
          return
        }
        this.form = {
          name: '',
          phone: '',
          id_no: '',
          id: ''
        }
        this.updateIndex = ''
        this.formIsShow = true
      },
      editForm (e) {
        this.form = e.target.dataset
        this.updateIndex = e.target.dataset.index
        this.formIsShow = true
        console.log(this.form)
      },
      addOrUpdate () {
        // 变更个人信息 - 操作本地数据
        /*
        var storageInfo = JSON.parse(localStorage.getItem(USER_INFO_KEY))
        if (!jst.isIdentityCard(this.form.id_no)) {
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
        */
        // 操作数据库
        if (!jst.isIdentityCard(this.form.id_no)) {
          this.CHANGE_TOAST(MSG.IDENTITY_CARD_ERROR_MSG)
          return
        }
        if (!jst.isPhone(this.form.phone)) {
          this.CHANGE_TOAST(MSG.PHONE_NUMBER_ERROR_MSG)
          return
        }
        if (this.form.id === '') {
          // 新增
          this.CHANGE_PENDING(true)
          this.USER_IDINFO_ADD(this.form).then(res => {
            this.CHANGE_PENDING(false)
            if (CODE.SUCCESS == res.status && !res.errno) {
              this.getInfoList()
              this.CHANGE_TOAST('新增成功')
              this.formIsShow = false
            } else {
              this.CHANGE_TOAST(res.msg)
            }
          }).catch(() => {
            this.CHANGE_PENDING(false)
            this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
          })
        } else {
          // 更新
          this.CHANGE_PENDING(true)
          this.USER_IDINFO_UPDATE(this.form).then(res => {
            this.CHANGE_PENDING(false)
            if (CODE.SUCCESS == res.status && !res.errno) {
              this.getInfoList()
              this.CHANGE_TOAST('更新成功')
              this.formIsShow = false
            } else {
              this.CHANGE_TOAST(res.msg)
            }
          }).catch(() => {
            this.CHANGE_PENDING(false)
            this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
          })
        }
      },
      deleteInfo () {
        this.CHANGE_PENDING(true)
        this.USER_IDINFO_DELETE(this.form).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.deleteFormIsShow = false
            this.getInfoList()
            this.CHANGE_TOAST('删除成功')
          } else {
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      },
      getInfoList () {
        this.CHANGE_PENDING(true)
        this.USER_IDINFO_LIST().then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.userInfoList = res.info
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
