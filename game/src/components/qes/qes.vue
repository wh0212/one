<template>
  <section class="qes">
    <m-header top="90px" ref="mHeader"></m-header>
    <header class="header_bg"></header>
    <cont-nav :navs="setNavs" @selectGameClass="setGameClass"></cont-nav>
    <crumbs cnTitle="常见问题" enTitle="q & a" currentTitle="常见问题"></crumbs>

    <section class="cont">
      <div class="qes_item" @click="selectItem(1)">
        <p>安装BLUESTACKS蓝叠安卓模拟器前的注意事项</p>
        <div class="qes_des">
          <p>我们来看看如何安装蓝叠安卓模拟器（BlueStacks），首先，Xp用户必须要安装windows installer 4.5和net framework 2.0 sp2, 否则会安装失败的, 这里有提供下载, 这些问题我们也会尽快加入到智能解决里啦.
            1.建议电脑内存要大于2G哦（不然也要在1.5G左右），不然打开的...</p>
          <button class="qes_more">MORE</button>
        </div>
      </div>
      <div class="qes_item">
        <p>安装BLUESTACKS蓝叠安卓模拟器前的注意事项</p>
        <div class="qes_des">
          <p>我们来看看如何安装蓝叠安卓（不然也要在1.5G左右），不然打开的...</p>
          <button class="qes_more">MORE</button>
        </div>
      </div>
      <div class="qes_item">
        <p>安装BLUESTACKS蓝叠安卓模拟器前的注意事项</p>
        <div class="qes_des">
          <p>我们来看看如何安装蓝叠安卓模拟器（BlueStacks），首先，Xp用户必须要安装windows installer 4.5和net framework 2.0 sp2, 否则会安装失败的, 这里有提供下载, 这些问题我们也会尽快加入到智能解决里啦.
            1.建议电脑内存要大于2G哦（不然也要在1.5G左右），不然打开的...</p>
          <button class="qes_more">MORE</button>
        </div>
      </div>
      <div class="qes_item">
        <p>安装BLUESTACKS蓝叠安卓模拟器前的注意事项</p>
        <div class="qes_des">
          <p>我们来看看如何安装蓝叠安卓模拟器（BlueStacks），首先，Xp用户必须要安装windows installer 4.5和net framework 2.0 sp2, 否则会安装失败的, 这里有提供下载, 这些问题我们也会尽快加入到智能解决里啦.
            1.建议电脑内存要大于2G哦（不然也要在1.5G左右），不然打开的...</p>
          <button class="qes_more">MORE</button>
        </div>
      </div>
      <div class="qes_item">
        <p>安装BLUESTACKS蓝叠安卓模拟器前的注意事项</p>
        <div class="qes_des">
          <p>我们来看看如何安装蓝叠安卓模拟器（BlueStacks），首先，Xp用户必须要安装windows installer 4.5和net framework 2.0 sp2, 否则会安装失败的, 这里有提供下载, 这些问题我们也会尽快加入到智能解决里啦.
            1.建议电脑内存要大于2G哦（不然也要在1.5G左右），不然打开的...</p>
          <button class="qes_more">MORE&nbsp;&nbsp;&nbsp;&nbsp;></button>
        </div>
      </div>
    </section>

    <nav class="qes_nav">
      <ul>
        <li class="prev"><</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>...</li>
        <li>10</li>
        <li class="next">></li>
      </ul>
    </nav>

    <m-footer nav="sort" ref="mFooter"></m-footer>
    <view-router></view-router>
  </section>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Crumbs from 'base/crumbs/crumbs'
  import ContNav from 'base/cont-nav/cont-nav'

  export default {
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
    },
    components: {
      MHeader,
      MFooter,
      Crumbs,
      ContNav
    },
    methods: {
      selectItem(id) {
        this.$router.push({
          path: `/qes/${id}`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .qes
    background: #fff
    .header_bg
      width: 100%
      height: 235px
      background-image: url('download_nav.jpg');
      background-size: cover
      background-position: center center
    .cont
      margin: 0 auto
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      .qes_item
        width: 30%
        display: flex
        flex-direction: column
        align-items: center
        p
          font-size: 20px
          color: #666666
          line-height: 24px
          text-align: left
          width: 90%
          height: 100px
          display: flex
          align-items: center
        div.qes_des
          background: #f6f6f6
          display: flex
          flex-direction: column
          align-items: center
          height: 190px
          position: relative
          p
            font-size: 14px
            color: #666666
            line-height: 18px
            margin-top: 25px
            align-items: flex-start
          .qes_more
            width: 108px
            height: 34px
            box-sizing: border-box
            position: absolute
            bottom: 20px
            border: 2px solid #666666
            background: #f6f6f6
    .qes_nav
        display: flex
        justify-content: center
        margin-top: 50px
        margin-bottom: 50px
        ul
          display: flex
          li
            font-size: 16px
            color: #666666
</style>
