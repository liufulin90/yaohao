<!-- template -->
<template>
  <div class="body-wrapper rolecheckbody">
    <div class="rolebg" v-if="false">
      <button @click="startSearch">立即查询</button>
    </div>
    <div v-if="start && !isend" class="rolepagewrap">
      <div class="title">{{title}}</div>
      <ul>
        <li :data-key="item.key" :data-value="item.value" :data-lastrole="item.lastRole ? item.lastRole : ''" :data-lastdata="item.lastData ? item.lastData : ''" v-for="item in dataList" @click="nextPage">{{item.value}}</li>
      </ul>
      <button class="resetBtn" @click="resetSearch">重新查询</button>
      <div style="padding: 20px;margin-top: 10px">
        <p>11区：<br>成都高新区西部园区、锦江区、青羊区、金牛区、武侯区、成华区、龙泉驿区、新都区、温江区、双流区、郫都区</p>
        <p>远郊县：<br>青白江区、简阳市、都江堰市、彭州市、邛崃市、崇州市、金堂县、新津县、大邑县、蒲江县</p>
      </div>
    </div>
    <div class="endpage" v-if="isend">
      <div class="tips" v-if="!lastRole"><font color="red">对不起，你{{lastTips}}</font><br>请扫描二维码，代代为你做详细分析</div>
      <div class="tips" v-if="lastRole">{{specialStr ? '' : '哇！原来你有购房资格'}}<br><font color="red">{{lastTips}}</font></div>
      <p style="width: 100%;" >有 {{searchNumber}} 人已查询</p>
      <button class="resetBtn" @click="resetSearch">重新查询</button>
      <div class="qrcode">
        <br>
        <img src="../assets/artic_qrcode.png" >
        <p>最及时最全面的购房信息，请扫下面二维码，代代拉你入购房新政解读群，还有大牛为你做详细分析。</p>
        <img style="width: 135px;" src="../assets/daidai_qrcode.png" v-if="!isYuanJiaoQu">
        <img style="width: 135px;" src="../assets/daidai_qrcode_notrole_jiaoqu.png" v-if="isYuanJiaoQu">
      </div>
    </div>

    <v-homeicon></v-homeicon>
  </div>
</template>
<style scoped>
</style>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {ROLE_CHECK_TIMES} from '../store/modules/projectStore'
  import * as role from '../config/role'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'

  export default {
    data () {
      return {
        searchNumber: 5000,
        title: 'ddd',
        dataList: [],
        start: true,
        isYuanJiaoQu: false, // 是否为远郊县和无资格
        isend: false,
        lastRole: false,
        lastTips: '暂时不具备购房资格',
        specialStr: false
      }
    },
    mounted () {
      this.dataList = role.TREE.data
      this.title = role.TREE.title
      this.searchTimesAdd()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, ROLE_CHECK_TIMES]),
      startSearch () {
        this.start = true
      },
      nextPage (e) {
        console.log(e.target.dataset)
        if (e.target.dataset.lastdata) {
          if (e.target.dataset.lastrole) {
            this.lastRole = false
          } else {
            this.lastRole = true
          }
          this.isend = true
          if (e.target.dataset.lastdata == '可购买远郊县住房') {
            this.specialStr = true
            this.lastTips = '您目前只能购买远郊(三圈层)房屋'
          } else {
            this.specialStr = false
            this.lastTips = e.target.dataset.lastdata
          }
          if (!this.lastRole || e.target.dataset.lastdata.indexOf('+') < 0) {
            // 无资格 和 只能购买远郊县
            this.isYuanJiaoQu = true
          } else {
            this.isYuanJiaoQu = false
          }
          return
        }
        var nextData = role[e.target.dataset.key]
        this.dataList = nextData.data
        this.title = nextData.title
      },
      resetSearch () {
        this.dataList = role.TREE.data
        this.title = role.TREE.title
        this.lastRole = false
        this.isend = false
        this.lastTips = '暂时不具备购房资格'
        this.specialStr = false
        this.isYuanJiaoQu = false
        this.searchTimesAdd()
      },
      searchTimesAdd () {
        // this.CHANGE_PENDING(true)
        this.ROLE_CHECK_TIMES({}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.searchNumber = res.info.times
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
