<template>
  <transition name="slideAni">
    <section class="slide-cont" ref="slideCont" v-show="isState">
      <ul class="slide-cont-wrapper" ref="slideWrapper">
        <li>
          <ani-video></ani-video>
        </li>
        <li>two Layer</li>
        <li>three Layer</li>
        <li>four Layer</li>
      </ul>
      <transition name="navAni">
        <ul class="slideNavgation" ref="slideNavgation" v-show="isState">
          <li @click="toPage(index)" v-for="(item, index) in dots" :class="{'cur': currentIndex === index}"></li>
        </ul>
      </transition>
    </section>
  </transition>
</template>

<script type="text/ecmascript-6">
  import animations from 'create-keyframe-animation'
  import AniVideo from 'base/ani-video/ani-video'
  // import { prefixStyle } from 'common/js/dom'

  //  let transform = prefixStyle('transform')
  // let transformCircle = prefixStyle('transform')

  export default {
    data () {
      return {
        dots: null,
        currentIndex: 0,
        lis: null,
        isState: false
      }
    },
    created () {
      this.dots = new Array(4)
      this.addAnimations()
    },
    mounted () {
      this.lis = this.$refs.slideWrapper.children
      // this.clearAni()
      document.body.onclick = () => {
        if (this.isState) {
          this.isState = false
        } else {
          this.isState = true
        }
        console.log(this.isState)
      }
    },
    methods: {
      show () {
        this.isState = true
      },
      hide () {
        this.isState = false
      },
      toPage (pageIndex) {
        if (this.currentIndex > pageIndex) {
          this.lis[this.currentIndex].style.visbility = 'hidden'
          animations.runAnimation(this.lis[this.currentIndex], 'rightHide', null)
          this.lis[pageIndex].style.visibility = 'visible'
          this.lis[pageIndex].style.zIndex = 3
          animations.runAnimation(this.lis[pageIndex], 'leftShow', null)
          this.currentIndex = pageIndex
        } else if (this.currentIndex < pageIndex) {
          this.lis[this.currentIndex].style.visibility = 'hidden'
          animations.runAnimation(this.lis[this.currentIndex], 'leftHide', null)
          this.lis[pageIndex].style.visibility = 'visible'
          this.lis[pageIndex].style.zIndex = 3
          animations.runAnimation(this.lis[pageIndex], 'rightShow', null)
          this.currentIndex = pageIndex
        } else {
          return false
        }
      },
      nextPage () {
        if (this.currentIndex >= (this.dots.length - 1)) {
          return false
        }
        this.toPage(this.currentIndex)
      },
      prevPage () {
        if (this.currentIndex <= 0) {
          return false
        }
        this.toPage(this.currentIndex)
      },
      addAnimations () {
        let anis = {
          leftHide: {
            0: {
              transform: `translateZ(0px)`,
              visibility: 'visible'
            },
            40: {
              transform: `translate(-40%, 0) scale(0.8) rotateY(20deg)`
            },
            100: {
              transform: `translateZ(-200px)`
            }
          },
          rightShow: {
            0: {
              transform: `translateZ(-200px)`
            },
            40: {
              transform: `translate(40%, 0) scale(0.8) rotateY(-20deg)`
            },
            100: {
              transform: `translateZ(0px)`
            }
          },
          leftShow: {
            0: {
              transform: `translateZ(-200px)`
            },
            40: {
              transform: `translate(-40%, 0) scale(0.8) rotateY(20deg)`
            },
            100: {
              transform: `translateZ(0px)`
            }
          },
          rightHide: {
            0: {
              transform: `translateZ(0px)`,
              visibility: 'visible'
            },
            40: {
              transform: `translate(40%, 0) scale(0.8) rotateY(-20deg)`
            },
            100: {
              transform: `translateZ(-200px)`
            }
          }
        }

        animations.registerAnimation({
          name: 'leftHide',
          animation: anis.leftHide,
          presets: {
            duration: 800,
            easing: 'linear'
          }
        })

        animations.registerAnimation({
          name: 'rightShow',
          animation: anis.rightShow,
          presets: {
            duration: 800,
            easing: 'linear'
          }
        })

        animations.registerAnimation({
          name: 'leftShow',
          animation: anis.leftShow,
          presets: {
            duration: 800,
            easing: 'linear'
          }
        })

        animations.registerAnimation({
          name: 'rightHide',
          animation: anis.rightHide,
          presets: {
            duration: 800,
            easing: 'linear'
          }
        })
      }
    },
    components: {
      AniVideo
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  &.navAni-enter-active
    transition: all 1s ease

  &.navAni-leave-active
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  &.navAni-enter, .navAni-leave-to
    transform: translate3d(0, 300px, 0)
    opacity: 0

  &.slideAni-enter-active
    transition: all 1s ease

  &.slideAni-leave-active
    transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  &.slideAni-enter, .slideAni-leave-to
    transform: translate3d(0, -150px, 0)
    opacity: 0

  .slide-cont
    width: 1100px
    height: 520px
    position: absolute
    left: 50%
    top: 50%
    margin-top: -260px
    margin-left: -550px
    ul.slide-cont-wrapper
      width: 1100px
      height: 520px
      position: absolute
      perspective: 800px
      transform-style: preserve-3d
      li
        width: 1100px
        height: 520px
        background: #fff
        position: absolute
        visibility: hidden
      li:nth-child(1)
        visibility: visible
        background: #000
      li:nth-child(2)
        background: #ccc
    ul.slideNavgation
      height: 18px
      display: flex
      position: absolute
      bottom: 15px
      left: 50%
      li
        width: 18px
        height: 18px
        border-radius: 24px
        box-sizing: border-box
        background: rgba(0, 0, 0, .8)
        margin-right: 5px
        cursor: pointer
      li.cur
        background: rgba(255, 255, 255, .8)
</style>
