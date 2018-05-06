<!-- 我的摇号结果 -->
<template>
  <div class="body-wrapper fix-wrapper my-shake global-bg">
    <!--摇号结果List -->
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">我的摇号结果</div>
      <div class="weui-panel__bd">
        <div class="item">
          <table class="table" v-if="resultList.length">
            <tbody>
            <tr v-for="item in resultList">
              <td>
                <div style="display: flex">
                  <label for="" class="left-label">楼盘名称：</label>
                  <div>{{item.title}}</div>
                </div>
                <div v-if="item.number">
                  <label for="" class="left-label">摇中的号数：</label>第{{item.number}}号
                </div>
                <div>
                  <label for="" class="left-label">选房顺序：</label>普通第{{item.apply_sort}}号
                </div>
                <div>
                  <label for="" class="left-label">公正摇号编码：</label>{{item.apply_no}}
                </div>
                <div v-if="item.times">
                  <label for="" class="left-label">批次：</label>{{item.times}}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="!resultList.length" class="pading-10 t-c">您还没有摇中呢！</div>
      </div>
    </div>
    <!-- 我绑定的楼盘编码List-->
    <div class="weui-panel weui-panel_access my-shake-bindlist">
      <div class="weui-panel__hd">我绑定的楼盘
      <router-link :to="{name: 'projectSearch'}" v-if="!bindList.length" class="find-project">找楼盘</router-link>
      </div>
      <div class="weui-panel__bd">
        <div class="item">
          <table class="table" v-if="bindList.length">
            <tbody>
            <tr v-for="(item, index) in bindList">
              <td>
                <div>
                  <label for="" class="left-label t-r" >{{index+1}}、楼盘名称：</label>
                  <router-link :to="{ name: 'projects', query: { pid: item.pid }}" class="myshake-project-link">{{item.title}}</router-link>
                </div>
                <div>
                  <label for="" class="left-label t-r" >姓名：</label>
                  <span>{{item.name}}</span>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="!bindList.length" class="pading-10 t-c">您还没有绑定任何楼盘，快去搜索一个楼盘绑定吧！</div>
      </div>
    </div>
    <v-footer :page="navPage"></v-footer>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {PROJECT_USER_RESULT_LIST, PROJECT_IDINFO_LIST} from '../store/modules/projectStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'
  import * as jst from 'js-common-tools'

  export default {
    data () {
      return {
        navPage: 2,
        type: 1,
        resultList: [
//          {
//            number: 692,
//            pid: 1,
//            apply_no: 'B14047',
//            reg_no: '20180331029318',
//            name: '*绍霞',
//            id_no: '510125********0081',
//            apply_sort: 33861,
//            title: '保利学府城',
//            image: 'http://imgcdn.qi.la/assets/img/20'
//          }
        ],
        bindList: [
//          {
//            title: '世茂城三期#25',
//            name: '张三',
//            apply_no: 'B0012'
//          }
        ]
      }
    },
    mounted () {
      var pid = this.$route.query.pid
      this.pid = pid
      this.getResultList()
      this.getBindList()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_USER_RESULT_LIST, PROJECT_IDINFO_LIST]),
      getResultList () {
        this.CHANGE_PENDING(true)
        this.PROJECT_USER_RESULT_LIST({pid: this.pid}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.hasInfo = res.info.length > 0
            this.resultList = res.info
          } else {
            this.hasInfo = false
            this.CHANGE_TOAST(res.msg)
          }
        }).catch(() => {
          this.CHANGE_PENDING(false)
          this.CHANGE_TOAST(MSG.COMMONE_ERROR_MSG)
        })
      },
      getBindList () {
        this.CHANGE_PENDING(true)
        this.PROJECT_IDINFO_LIST({pid: this.pid}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            var tempBindProject = []
            var tempProjects = []
            res.info.forEach((item) => {
              if (!jst.inArray(item.pid, tempBindProject)) {
                tempBindProject.push(item.pid)
                tempProjects.push(item)
              }
            })
            tempProjects.forEach((item) => {
              var names = ''
              res.info.forEach((its) => {
                if (item.pid === its.pid) {
                  names += its.name + '、'
                }
              })
              item.name = names.substr(0, names.length - 1)
              return item
            })
            this.bindList = tempProjects
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
