<!-- 底部版权 -->
<template>
  <div class="footer">
    <div class="weui-tabbar">
      <router-link :to="{name: 'index'}" @click="tapNav" class="weui-tabbar__item">
        <div :class="'weui-tabbar__icon nav-icon ' + (page==1?'nav-home-active':'nav-home-normal')">
          <div></div>
        </div>
        <p class="weui-tabbar__label">首页</p>
      </router-link>
      <router-link :to="{name: 'myShake'}" @click="tapNav" class="weui-tabbar__item">
        <div :class="'weui-tabbar__icon nav-icon ' + (page==2?'my-shake-active':'my-shake-normal')">
          <div></div>
        </div>
        <p class="weui-tabbar__label">我的摇号</p>
      </router-link>
      <router-link :to="{name: 'news'}" @click="tapNav" class="weui-tabbar__item">
        <div :class="'weui-tabbar__icon nav-icon ' + (page==3?'nav-info-active':'nav-info-normal')">
          <div></div>
        </div>
        <p class="weui-tabbar__label">资讯</p>
      </router-link>
      <router-link :to="{name: 'personal'}" @click="tapNav" class="weui-tabbar__item">
        <div :class="'weui-tabbar__icon nav-icon ' + (page==4?'nav-my-active':'nav-my-normal')">
          <div></div>
        </div>
        <p class="weui-tabbar__label">我</p>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  .footer .weui-tabbar .weui-tabbar__label {
    margin-bottom: 0;
  }
  .footer .weui-tabbar{
    background-color: #ffffff;
  }
</style>
<script>
  export default{
    props: ['page'],
    methods: {
      tapNav (p) {
        console.log(p)
      }
    }
  }
</script>
