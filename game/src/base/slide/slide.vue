<template>
  <div class="slides">
    <ul class="slides_info" ref="slides">
      <li v-for="item in slides">
        <img :src="item.img"/>
        <div class="slide_title">
          <p>{{item.title}}</p>
        </div>
      </li>
    </ul>

    <ul class="dots">
      <li class="dot" :class="{active: currentIndex === index}" @click="toPage(index)" v-for="(item,index) in dots"></li>
    </ul>
    <div class="navgation">
      <div class="prev"></div>
      <div class="next"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from 'common/js/dom'

  const transform = prefixStyle('transform')

  export default {
    props: {
      slides: {
        type: Array,
        default: null
      }
    },
    data () {
      return {
        dots: null,
        currentIndex: 0,
        wi: 690
      }
    },
    mounted () {
      this.setDots()
    },
    methods: {
      toPage (index) {
        const left = -(index * this.wi)
        this.$refs.slides.style[transform] = `translate3d(${left}px,0,0)`
        this.$refs.slides.style.transition = 'all 0.4s'
        this.currentIndex = index
      },
      setDots () {
        this.dots = new Array(this.slides.length)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slides
    width: 690px
    height: 360px
    position: relative
    overflow: hidden
    ul.slides_info
      height: 360px
      display: flex
      position: absolute
      justify-content: flex-start
      li
        width: 690px
        height: 360px
        position: relative
        img
          width: 100%
          height: 100%
          position: absolute
          left: 0
          top: 0
          display: block
        .slide_title
          width: 100%
          height: 20%
          position: absolute
          bottom: 0
          left: 0
          color: #fff
          text-align: left
          background: rgba(0, 0, 0, .7)
          display: flex
          align-items: center
          justify-content: center
          p
            font-size: 14px
            line-height: 18px
            width: 90%
            cursor: pointer
    .dots
      height: 12px
      position: absolute
      display: flex
      right: 10%
      bottom: 8%
      li
        width: 12px
        height: 12px
        box-sizing: border-box
        margin-right: 5px
        border: 1px solid #fff
        border-radius: 12px
      li.active
        background: #fff
</style>
