<template>
  <article class="crumbs">
    <div class="wrapper">
      <div class="title">
        <p>{{setEnTitle}}</p>
        <p>{{cnTitle}}</p>
      </div>

      <ul class="nav">
        <li>你当前的位置：</li>
        <li><router-link tag="a" to="/">首页</router-link> - <span>{{currentTitle}}</span></li>
      </ul>
    </div>
  </article>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      enTitle: {
        type: String,
        default: 'download landie'
      },
      cnTitle: {
        type: String,
        default: '下载蓝叠'
      },
      currentTitle: {
        type: String,
        default: '下载蓝叠'
      }
    },
    computed: {
      setEnTitle() {
        return this.enTitle.toUpperCase()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .crumbs
    width: 100%
    height: 170px
    background: #f6f6f6
    display: flex
    justify-content: center
    .wrapper
      min-width: 1200px
      width: 89.0625%
      height: 100%
      display: flex
      align-items: center
      justify-content: space-between
      .title
        p
          text-align: left
        p:first-child
          line-height: 45px
          color: #bcbcbc
          font-size: 32px
          font-weight: bold
        p:last-child
          line-height: 40px
          font-size: 32px
          color: #95be0e
       .nav
          display: flex
          font-size: 14px
          color: #666666
          height: 23px
          align-items: center
          background: url('nav_ic.png') no-repeat
          padding-left: 26px
          li
            a
              text-decoration: none
            span
              color: #95be0e

</style>
