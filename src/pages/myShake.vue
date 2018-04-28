<!-- 我的摇号结果 -->
<template>
  <div class="body-wrapper my-shake">
    <!--摇号结果List -->
    <div class="weui-panel weui-panel_access">
      <div class="weui-panel__hd">摇号结果</div>
      <div class="weui-panel__bd">
        <div class="item">
          <table class="table" v-if="resultList.length">
            <tbody>
            <tr v-for="item in resultList">
              <td>
                <div>
                  <label for="" class="left-label">楼盘名称：</label>{{item.title}}
                </div>
                <div>
                  <label for="" class="left-label">摇中的号数：</label>第{{item.number}}号
                </div>
                <div>
                  <label for="" class="left-label">选房顺序：</label>普通第{{item.apply_sort}}号
                </div>
                <div>
                  <label for="" class="left-label">公正摇号编码：</label>{{item.apply_no}}
                </div>
                <div>
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
    <div class="weui-panel weui-panel_access">
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

  export default {
    data () {
      return {
        navPage: 2,
        type: 1,
        resultList: [
          {
            title: '朗诗熙华府',
            number: 690,
            apply_sort: 23,
            apply_no: 'A0002',
            times: '2018-05561'
          }
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
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST])
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
