<template>
  <h2 ref="logo" class="logo">
    <router-link tag="a" to="/"><img v-lazy="logo" width="153" height="45"/></router-link>
  </h2>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from 'common/js/dom'
// import animations from 'create-keyframe-animation'
  const transform = prefixStyle('transform')

  export default {
    data () {
      return {
        logo: require('./logo.png')
      }
    },
    mounted () {
    },
    methods: {
      addAni () {
        this.$refs.logo.style[transform] = `translate3d(100px, 100px ,0) scale(1)`
        this.$refs.logo.style.opacity = '1'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .logo
    opacity: 0
    transition: all 0.8s
    position: relative
    top: -100px
    left: -100px
</style>
