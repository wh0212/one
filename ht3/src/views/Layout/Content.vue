<template>
  <el-container class="layout-content">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <slot name="left"></slot>
    </el-aside>

    <!-- 右侧页面 -->
    <el-main>
      <!-- 面包屑 -->
      <div class="top">
        <i class="fa fa-reorder"></i>
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item v-for="(item,index) in breadCrumItems" :key="index" :to="item.path">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 页面内容 -->
      <div class="content">
        <slot name="content"></slot>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Content extends Vue {
  @Provide() breadCrumItems:any;//面包屑的数组

  //监听当前路由变化
  @Watch("$route") handleRouteChange(to:any){
    //to 参数传过来的是当前路由对象
    this.initBreadCrumItems(to);
  }

  //面包屑导航
  initBreadCrumItems(router:any){
    //设置跟路由title
    let breadCrumItems = [{path:'/',title:'夏天后台管理系统'}]

    //遍历当前页面路由父级到当前子路由的页面的title和path 存储到数组里
    for (const item in router.matched) {
      //判断是否为空
      if(router.matched[item].meta && router.matched[item].meta.title){
        breadCrumItems.push({
          path:router.matched[item].path ? router.matched[item].path:'/', //判断是否有此路径，防止没有路径，默认跟路径
          title:router.matched[item].meta.title
        })
      }
    }
    this.breadCrumItems = breadCrumItems;//赋值面包屑数组
  }
  created() {
    //this.$route  表示当前的所在的页面路由
    this.initBreadCrumItems(this.$route);
  }
}
</script>

<style lang="scss" scoped>
.layout-content {
  width: 100%;
  height: 100%;
  .el-main {
    padding: 0;
    .top {
      background: #fff;
      height: 54px;
      border-right: none;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        cursor: pointer;
        padding-left: 16px;
      }
      .breadcrumb {
        padding-left: 16px;
      }
    }
    .content {
      padding: 10px;
      height: calc(100% - 54px);
      box-sizing: border-box;
    }
  }
}
</style>