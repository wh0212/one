<template>
  <div>
    <div class="bannerList ban3"></div>
    <div class="topActivities">
      <div class="contain">
        <div class="current">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>志愿者活动</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'page03',
    data () {
      return {
      }
    },
    components: {}
  }
</script>
