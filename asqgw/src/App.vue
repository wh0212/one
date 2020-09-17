<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="idx-huitop-box">
      <div class="idx-nav idx-w">
        <ul class="clearfix">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/page01/page01-a">精彩活动</router-link></li>
          <li><router-link to="/page02/page02-a">居民学校</router-link></li>
          <li><router-link to="/page03/page03-a">志愿活动</router-link></li>
          <li><router-link to="/page04">联系我们</router-link></li>
          <li><router-link to="/page05">平台登录</router-link></li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>

</template>
<script>

  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>

<style>


</style>
