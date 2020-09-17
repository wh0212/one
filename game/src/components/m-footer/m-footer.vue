<template>
  <footer class="footer" ref="Footer">
    <section class="wrapper" ref="wrapper">
      <p>北京蓝叠科技有限公司 <br/> <span>Copyright ©Bluestacks 2016 all rights reserved.&nbsp;&nbsp;京ICP备15017534号-1</span></p>
      <ul class="shareIcon">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  </footer>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from 'common/js/dom'

  const transform = prefixStyle('transform')

  export default {
    props: {
      nav: {
        type: String,
        default: 'main'
      }
    },
    methods: {
      _setFooter () {
        if (this.nav === 'main') {
          this.$refs.Footer.style.background = 'none'
          this.$refs.Footer.style.position = 'absolute'
        } else if (this.nav === 'download' || this.nav === 'sort' || this.nav === 'counsel') {
          this.$refs.Footer.style.background = '#222222'
          this.$refs.Footer.style.position = 'relative'
        }
      },
      addAni () {
        this.$refs.wrapper.style[transform] = `translate3d(-50%, -150px, 0)`
        this.$refs.wrapper.style.transition = '0.5s'
      }
    },
    mounted () {
      this._setFooter()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footer
    width: 100%
    height: 160px
    position: absolute
    left: 0
    bottom: 0
    right: 0
    transition: 0.5s
    overflow: hidden
    /*background: #222222*/
    .wrapper
      min-width: 1200px
      width: 89.0625%
      position: absolute
      display: flex
      left: 50%
      top: 30%
      transform: translateX(-50%)
      z-index: 100
      transition: 0.3s
      justify-content: space-between
      margin-top: 150px
      p
        color: #666666
        font-size: 16px
        text-align: left
        height: 60px
        span
          font-size: 12px
          line-height: 24px
      .shareIcon
        height: 25px
        display: flex
        li
          width: 30px
          height: 25px
          background-image: url('iconShare.png')

        li:nth-of-type(2)
          margin-left: 18px
          background-position: -42px 0
          margin-right: 10px
        li:nth-of-type(3)
          background-position: -79px 0

</style>
