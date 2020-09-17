<template>
  <div>
    <div class="bannerList ban1"></div>
    <div class="topActivities">
      <div class="contain clearfix">
        <div class="current">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><router-link to="/page01/page01-a" href="/">精彩活动</router-link></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="rtTxt">
          <ul>
            <li><router-link to="/page01/page01-a"><a>社区文体活动</a></router-link></li>
            <li><router-link to="/page01/page01-b"><a>节庆活动</a></router-link></li>
            <li><router-link to="/page01/page01-c"><a>亲子活动</a></router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'page01',
  data () {
    return {
      transitionName: 'slide-left',
      links: [
        {
          text: '社区文体活动',
          route: '/page01/page01-a'
        },
        {
          text: '节庆活动',
          route: '/page01/page01-b'
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path == '/'){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  }

}
</script>
<style>
  .child-view {
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(10px, 0);
    transform: translate(10px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-10px, 0);
    transform: translate(-10px, 0);
  }
</style>
