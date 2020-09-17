<template>
  <div>
    <div class="bannerList ban2"></div>
    <div class="topActivities">
      <div class="contain">
        <div class="current">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>居民学校</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'page02',
    data () {
      return {
      }
    },
    components: {}
  }
</script>
