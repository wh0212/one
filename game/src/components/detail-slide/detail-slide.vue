<template>
  <div class="detailSlide">
    <div class="blur" ref="blurImg"></div>
    <ul ref="detailSlide">
      <li v-for="item in screenshots">
        <img :src="item"/>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      getBlur () {
        return this.screenshots[0]
      }
    },
    props: {
      screenshots: {
        type: Array,
        default: null
      }
    },
    mounted () {
      setTimeout(() => {
        this._createNode()
      }, 300)
    },
    methods: {
      _createNode () {
        let img = new Image()
        img.src = this.screenshots[0]
        img.style.width = '100%'
        img.style.height = '100%'
        this.$refs.blurImg.appendChild(img)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .detailSlide
    position: relative
    .blur
      width: 100%
      display: block
      height: 100%
      position: absolute
      z-index: -1
      top: 0
      left: 0
      opacity: 0.1
    ul
      width: 100%
      display: flex
      padding: 20px
      li
        width: 320px
        height: 480px
        margin-right: 20px
        box-shadow: 3px 3px 3px rgba(0,0,0,0.3)
        img
          display: block
          width: 100%
          height: 100%

</style>
