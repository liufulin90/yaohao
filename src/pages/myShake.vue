<!-- 我的摇号结果 -->
<template>
  <div class="body-wrapper my-shake">
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
        <div v-if="!resultList.length" style="text-align: center">您还没有摇中呢！</div>
      </div>
    </div>
    <br>
    <!-- 我绑定的楼盘编码List-->
    <div class="weui-panel weui-panel_access" v-if="false">
      <div class="weui-panel__hd">我绑定的楼盘编码</div>
      <div class="weui-panel__bd">
        <div class="item">
          <table class="table" v-if="resultList.length">
            <tbody>
            <tr v-for="item in bindList">
              <td>
                <div>
                  <label for="" class="left-label">楼盘名称：</label>{{item.title}}
                </div>
                <div>
                  <label for="" class="left-label">姓名：</label>第{{item.name}}号
                </div>
                <div>
                  <label for="" class="left-label">公正摇号编码：</label>{{item.apply_no}}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div v-if="!resultList.length" style="text-align: center">您还没有摇中呢！</div>
      </div>
    </div>
    <v-footer :page="navPage"></v-footer>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {PROJECT_USER_RESULT_LIST} from '../store/modules/projectStore'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'

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
          {
            title: '世茂城三期#25',
            name: '张三',
            apply_no: 'B0012'
          }
        ]
      }
    },
    mounted () {
      var pid = this.$route.query.pid
      this.pid = pid
      this.CHANGE_PENDING(true)
      this.PROJECT_USER_RESULT_LIST({pid: pid}).then(res => {
        this.CHANGE_PENDING(false)
        if (CODE.SUCCESS == res.status) {
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
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, PROJECT_USER_RESULT_LIST])
    }
  }
</script>
<style scoped>
  .my-shake .left-label{
    font-weight: normal;
    text-align: right;
    width: 122px;
    padding-right: 15px;
  }
  .my-shake .table{
    margin-bottom: 0px;
  }
  .my-shake .table tr td{
    border: none;
  }
</style>
