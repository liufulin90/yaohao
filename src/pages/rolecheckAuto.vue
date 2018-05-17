<!-- template -->
<template>
  <div class="body-wrapper rolecheckbody">
    <div class="rolebg" v-if="false">
      <button @click="startSearch">立即查询</button>
    </div>
    <div v-if="start && !isend" class="rolepagewrap">
      <div class="title">{{priority ? priorityMap[priority] : ''}}</div>
      <ul>
        <li v-for="item in dataList" @click="nextPage($event, item.data, item.children)">{{item.data ? item.data.text : ''}}</li>
      </ul>
      <button class="resetBtn" @click="resetSearch">重新查询</button>
      <div style="padding: 20px;margin-top: 10px;width: 100%;">
        <p>11区：<br>成都高新区西部园区、锦江区、青羊区、金牛区、武侯区、成华区、龙泉驿区、新都区、温江区、双流区、郫都区</p>
        <p>远郊县：<br>青白江区、简阳市、都江堰市、彭州市、邛崃市、崇州市、金堂县、新津县、大邑县、蒲江县</p>
      </div>
    </div>
    <div class="endpage" v-if="isend">
      <div class="tips" v-if="progress == 1">哇~ 您有购房资格<br><font color="red">{{lastTips}}</font></div>
      <div class="tips" v-if="progress == 2"><font color="red">{{progressMap[progress]}}</font></div>
      <div class="tips" v-if="progress == 3"><font color="red">{{progressMap[progress]}}</font><br>请扫描二维码，代代为你做详细分析</div>
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
  .rolecheckbody .qrcode{
    width: 100%;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {CHANGE_PENDING, CHANGE_TOAST} from 'store/globalStore'
  import {ROLE_CHECK_TIMES, ROLE_CHECK_DATA} from '../store/modules/projectStore'
  import * as role from '../config/role'
  import * as MSG from '../config/messages'
  import * as CODE from '../config/code'

  export default {
    data () {
      return {
        searchNumber: 5000,
        title: 'ddd',
        initTree: [],
        dataList: [],
        start: true,
        isYuanJiaoQu: false, // 是否为远郊县和无资格
        isend: false,
        lastRole: false,
        lastTips: '暂时不具备购房资格',
        priorityMap: {
          '1': '您的户籍情况？',
          '2': '您想以哪种方式购房？',
          '3': '您的社保缴纳情况？',
          '4': '您的家庭情况？',
          '5': '您家庭的住房情况？',
          '6': '您落户是否已满两年？',
          '7': '您的户口在哪个区？',
          '8': '您是否带有子女？'
        },
        priority: 1,
        progressMap: {
          '1': '哇~ 您有购房资格',
          '2': '您目前只能购买远郊(三圈层)房屋。',
          '3': '很遗憾，你被限购！'
        },
        progress: 3,
        specialStr: false
      }
    },
    mounted () {
      this.dataList = role.TREE.data
      this.title = role.TREE.title
      console.log(this.priorityMap[2])
      this.getInitData()
      this.searchTimesAdd()
    },
    methods: {
      ...mapActions([CHANGE_PENDING, CHANGE_TOAST, ROLE_CHECK_TIMES, ROLE_CHECK_DATA]),
      startSearch () {
        this.start = true
      },
      nextPage (e, data, children) {
        this.priority = data.priority
        console.log(data)
        if (children.length == 1 && children[0].children.length < 1) {
          this.progress = children[0].data.progress
          this.isend = true
          this.lastTips = children[0].data.text

          if (this.progress == 1) {
            this.isYuanJiaoQu = false
          } else {
            // 无资格 和 只能购买远郊县
            this.isYuanJiaoQu = true
          }
          return
        }
        this.dataList = children
      },
      resetSearch () {
        this.dataList = this.initTree
        this.lastRole = false
        this.isend = false
        this.lastTips = '暂时不具备购房资格'
        this.specialStr = false
        this.isYuanJiaoQu = false
        this.priority = 1
        this.progress = 3
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
      },
      getInitData () {
        this.CHANGE_PENDING(true)
        this.ROLE_CHECK_DATA({}).then(res => {
          this.CHANGE_PENDING(false)
          if (CODE.SUCCESS == res.status && !res.errno) {
            this.initTree = res.info.root.children
            this.dataList = this.initTree
            this.priority = res.info.root.data.priority
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
