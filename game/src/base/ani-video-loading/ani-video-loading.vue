<template>
  <section class="ani-video-loading" ref="avl">
    <div class="avl-cont"><img src="./loading.gif"/></div>
    <div class="avl-bg"></div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      w: {
        type: String,
        default: 0
      },
      h: {
        type: String,
        default: 0
      }
    },
    mounted() {
      this.$refs.avl.style.width = this.w + 'px'
      this.$refs.avl.style.height = this.h + 'px'
    },
    methods: {
      hide() {
        this.$refs.avl.style.display = 'none'
      },
      show() {
        this.$refs.avl.style.display = 'show'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ani-video-loading
    display: flex
    position: absolute
    left: 0
    top: 0
    align-items: center
    justify-content: center
    .avl-cont
      width: 50px
      height: 50px
      z-index: 1
      img
        display: block
        width: 100%
        height: 100%
    .avl-bg
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      z-index: 0
      background: rgba(0, 0, 0, 1)
</style>
