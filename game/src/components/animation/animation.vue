<template>
  <section class="animations" ref="animations">
    <ani-header ref="aniHeader"></ani-header>
    <section class="ani-cont">
      <ul class="ani-cont-wrapper" ref="aniWrapper">
        <li>
          <ani-slide ref="aniSlide"></ani-slide>
        </li>
        <li>
          <ani-course ref="aniCourse"></ani-course>
        </li>
        <li>
          <ani-works ref="aniWorks"></ani-works>
        </li>
        <li>
          <ani-about></ani-about>
        </li>
        <li>
          <ani-team></ani-team>
        </li>
      </ul>

      <nav class="ani-navgiation">
        <ul ref="aniNav">
          <li v-for="(item, index) in marks" :class="{'cur': currentIndex === index}"></li>
        </ul>
      </nav>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  import AniHeader from 'components/ani-header/ani-header'
  import AniSlide from 'base/ani-slide/ani-slide'
  import AniCourse from 'components/ani-course/ani-course'
  import AniWorks from 'components/ani-works/ani-works'
  import AniAbout from 'components/ani-about/ani-about'
  import AniTeam from 'components/ani-team/ani-team'
  import { prefixStyle } from 'common/js/dom'

  let transform = prefixStyle('transform')
  export default {
    data () {
      return {
        clientHeight: 0,
        marks: null,
        currentIndex: 0,
        aniFlag: true,
        handlers: {}
      }
    },
    created () {
      // 获得屏幕高度
      this.clientHeight = this.getClientHeight()
      this.marks = new Array(5)
    },
    mounted () {
      this.setAniLiHeight()
      window.onresize = () => {
        let _height = this.getClientHeight()
        if (this.clientHeight !== _height) {
          this.clientHeight = _height
          this.setAniLiHeight()
        }
      }
      this.on(0, this.$refs.aniSlide.show)
      this.init()
      this.$refs.aniSlide.hide()
      setTimeout(() => {
        this.emit(0)
      }, 800)

      this.next().next().next().next()
    },
    methods: {
      init () {
        let _this = this
        window.addEventListener('DOMMouseScroll', _this._mouseScroll, false)
        window.onmousewheel = document.onmousewheel = this._mouseScroll
      },
      on (eventType, handler) {
        // 判断有没有订阅了该事件
        if (!(eventType in this.handlers)) {
          this.handlers[eventType] = []
        }
        this.handlers[eventType].push(handler)
      },
      emit (eventType) {
        let handlerArgs = Array.prototype.slice.call(arguments, 1)
        this.handlers[eventType].forEach((item, index) => {
          item.apply(this, handlerArgs)
        })
      },
      _mouseScroll (event) {
        let ev = event || window.event

        if (!this.aniFlag) {
          return false
        }

        let val
        if (ev.wheelDelta) {
          val = ev.wheelDelta
        } else if (ev.detail) {
          val = ev.detail
        }

        if (val > 0) {
          this.next()
        } else if (val < 0) {
          this.prev()
        }
      },
      next () {
        if (this.currentIndex >= 4) {
          return false
        }
        this.currentIndex = this.currentIndex + 1
        this.toPage(this.currentIndex)
        return this
      },
      transitionend () {
        this.aniFlag = true
        this.$refs.aniWrapper.removeEventListener('transitionend', this.transitionend, false)
      },
      prev () {
        if (this.currentIndex <= 0) {
          return false
        }
        this.currentIndex = this.currentIndex - 1
        this.toPage(this.currentIndex)
      },
      toPage (num) {
        this.aniFlag = false
        let t = -(num * this.clientHeight)
        this.$refs.aniWrapper.style[transform] = `translate3d(0px, ${t}px, 0px)`
        this.$refs.aniWrapper.addEventListener('transitionend', this.transitionend, false)
      },
      getClientHeight () {
        return document.documentElement.clientHeight
      },
      setAniLiHeight () {
        let lis = this.$refs.aniWrapper.children
        lis = Array.from(lis)
        this.$refs.animations.style.height = this.clientHeight + 'px'
        this.$refs.aniWrapper.style.height = lis.length * this.clientHeight + 'px'
        lis.forEach((item, index) => {
          item.style.height = this.clientHeight + 'px'
        })
      }
    },
    watch: {
      currentIndex (index) {
        this.$refs.aniHeader.setNav(index)
      }
    },
    components: {
      AniHeader,
      AniSlide,
      AniCourse,
      AniWorks,
      AniAbout,
      AniTeam
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .animations
    width: 100%
    height: 100%
    position: relative
    .ani-cont
      width: 100%
      height: 100%
      overflow: hidden
      position: absolute
      .ani-cont-wrapper
        position: absolute
        top: 0
        width: 100%
        dipslay: flex
        flex-direction: column
        transition: 0.5s
        li
          width: 100%
          position: relative
        li:nth-child(1)
          background: url('bg1.jpg') no-repeat
          background-size: cover
          background-position: center center
        li:nth-child(2)
          background: url('bg3.jpg') no-repeat
          background-size: cover
          background-position: center center
        li:nth-child(3)
          background: url('bg3.jpg') no-repeat
          background-size: cover
          background-position: center center
        li:nth-child(4)
          background: url('bg4.jpg') no-repeat
          background-size: cover
          background-position: center center
        li:nth-child(5)
          background: url('bg5.jpg') no-repeat
          background-size: cover
          background-position: center center
      .ani-navgiation
        width: 10px
        height: auto
        position: absolute
        right: 0
        top: 46%
        right: 20px
        ul
          width: 10px
          li
            margin-bottom: 10px
            width: 10px
            height: 10px
            border-radius: 10px
            border: 1px solid #fff
            box-sizing: border-box
          li.cur
            background: #fff
</style>
