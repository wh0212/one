<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/img/new/top-left.jpg" />
        </div>
        <el-menu
          :default-active="defaultActive"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/news">新闻资讯</el-menu-item>
          <el-menu-item index="/product">产品中心</el-menu-item>
          <el-menu-item index="/case">经典案例</el-menu-item>
          <el-menu-item index="/goin">走进科建</el-menu-item>
          <el-menu-item index="/download">下载APP</el-menu-item>
          <el-menu-item index="/buildings">建筑欣赏</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进科建</p>
              <span>发展历程</span>
              <span>企业文化</span>
              <span>资质荣誉</span>
              <span>合作伙伴</span>
            </li>
            <li>
              <p>新闻资讯</p>
              <span>公司新闻</span>
              <span>行业动态</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>介绍视频</span>
              <span>管理模式</span>
              <span>平台目标</span>
              <span>功能模块</span>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱：kejianlml@163.com</span>
              <span>电话：021-55802368</span>
              <span>地址：上海市杨浦区翔殷路128号12号楼101</span>
            </li>
          </ul>
          <img src="./assets/img/ercode.png" alt />
        </div>
        <div class="copyright">
          <span>版权所有：中国地质大学（武汉） 教学与学习支持服务部：027-67883579</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  height: 85px !important;
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  width: 100%;
  margin: 0 auto;
  background-image: url("./assets/img/new/top-bg.jpg");

  .logo {
    position: relative !important;
    left: 0 !important;
    width: 380px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.el-menu {
  background-color: transparent !important;
}

.el-menu--horizontal {
  border: solid 0px transparent !important;
  background: transparent !important;
}

.el-menu-item {
  align-content: center;
  padding: 10px 20px 10px 20px !important;
  background: transparent !important;
  font-size: 1rem !important;
  color: #555555 !important;
}

.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #409EFF !important;
    color: #000000 !important;
    font-size: 1.2rem !important;
}

.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: auto;
  // position: fixed;
  bottom: 0px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 40px;
    background: #125688;
    // background-image: url("./assets/img/new/foot.jpg");
    background-color: #14679f;
    align-content: center;
    span {
      color: #fff;
      padding-top: 10px;
      line-height: 30px;
      text-align: center;
      display: block;
      position: relative;
    }
  }
}
</style>
