<template>
  <section class="download">
    <loading ref="loading" :isShow="false" :isBg="true"></loading>
    <m-header top="90px" ref="mHeader"></m-header>
    <header class="header_bg"></header>
    <crumbs></crumbs>

    <article class="download-cont">
      <div class="cont">
        <div class="down_cont">
          <p>感谢您下载BlueStacks 蓝叠模拟器 ...</p>
          <p>如果您的浏览器没有自动下载BlueStacks 蓝叠模拟器,请点击这里重试下载</p>
          <div class="btn">重新下载</div>
          <h3>其他下载</h3>
          <ul>
            <li class="btn1">高速下载</li>
            <li class="btn1">迅雷下载</li>
            <li class="btn1">QQ旋风下载</li>
            <li class="btn1">百度云网盘</li>
          </ul>
        </div>

        <div class="down_zs">
          <img src="./zs.jpg"/>
        </div>
      </div>
    </article>

    <m-footer nav="download" ref="mFooter"></m-footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Crumbs from 'base/crumbs/crumbs'

  export default {
    components: {
      MHeader,
      MFooter,
      Crumbs
    },
    mounted() {
      setTimeout(() => {
        this.$refs.mHeader.addAni()
      }, 300)

      setTimeout(() => {
        this.$refs.mHeader.logoAni()
      }, 500)

      setTimeout(() => {
        this.$refs.mFooter.addAni()
      }, 800)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .download
    .header_bg
      width: 100%
      height: 235px
      background-image: url('download_nav.jpg');
      background-size: cover
      background-position: center center
    .download-cont
      width: 100%
      height: auto
      background: #fff
      display: flex
      height: 480px
      justify-content: center
      .cont
        display: flex
        justify-content: space-between
        align-items: center
      .down_cont
        p
          text-align: left
        p:first-child
          color: #95be0e
          font-size: 36px
          line-height: 52px
        p:nth-child(2)
          font-size: 14px
          color: #666666
        div
          margin-top: 38px
          margin-bottom: 70px
        h3
          font-size: 36px
          color: #95be0e
          text-align: left
          font-weight: bold

        ul
          display: flex
          width: 330px
          height: 110px
          flex-wrap: wrap
          justify-content: space-between
          padding-top: 34px
        .down_zs
          img
            width: 700px
            height: auto
</style>
