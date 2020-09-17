<template>
  <section class="qes_des">
    <m-header top="90px" ref="mHeader"></m-header>
    <header class="header_bg"></header>
    <cont-nav :navs="setNavs" @selectGameClass="setGameClass"></cont-nav>
    <crumbs cnTitle="常见问题" enTitle="q & a" currentTitle="常见问题"></crumbs>

    <section class="cont">
      <h2>BlueStacks 蓝叠安卓模拟器黑屏闪退无限启动的解决方法</h2>
      <p>蓝叠安卓模拟器（Bluestacks）是一个可以让Android应用程序能运行在window系统上的软件，可以调用PC的显卡，采取目前最先进的技术，能使很多热门的游戏（天天酷跑，天天飞车等）在电脑上玩，拥有屏幕更大，不浪费手机电池，不烫手等等等优势。<br />
        如果你的bluestacks，出现黑屏，闪退，或者无限启动的问题，请尝试以下方法：</p>
      <p>1.确认net framework 2.0 sp2有装（xp系统）</p>
      <p>2． 确认显卡驱动有安装好</p>
      <p>3． 确认系统颜色是32色</p>
      <p>4． 确认杀毒软件没有拦截bluestacks的服务</p>
      <p>如果还是解决不了， 可以尝试联系我们的客服同学，QQ：3033957406</p>
    </section>

    <button class="des_back" @click="back">返回</button>

    <m-footer nav="sort" ref="mFooter"></m-footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Crumbs from 'base/crumbs/crumbs'
  import ContNav from 'base/cont-nav/cont-nav'

  export default {
    mounted() {
      this.$refs.mHeader.setNavHover(5)

      setTimeout(() => {
        this.$refs.mHeader.addAni()
      }, 300)

      setTimeout(() => {
        this.$refs.mHeader.logoAni()
      }, 500)

      setTimeout(() => {
        this.$refs.mFooter.addAni()
      }, 800)
    },
    methods: {
      back() {
        this.$router.go(-1)
      }
    },
    components: {
      MHeader,
      MFooter,
      Crumbs,
      ContNav
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .qes_des
    width: 100%
    background: #fff
    .header_bg
      width: 100%
      height: 235px
      background-image: url('download_nav.jpg');
      background-size: cover
      background-position: center center
    .cont
      background: #f6f6f6
      margin: 53px auto
      display: flex
      flex-direction: column
      align-items: center
      padding-bottom: 160px
      h2
        font-size: 20px
        color: #9bc425
        text-align: left
        line-height: 100px
        width: 95%
      p
        font-size: 12px
        color: #666
        text-align: left
        width: 95%
        line-height: 38px
    .des_back
      width: 240px
      height: 48px
      font-size: 14px
      color: #fff
      background: #93c000
      border: 0
      margin-bottom: 70px
</style>
