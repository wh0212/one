<template>
  <section class="procress" @click="setProcress" ref="procress">
    <div class="procress-load" ref="procressLoad"></div>
    <div class="procress-play" ref="procressPlay"></div>
    <!--<div class="procress-drag"></div>-->
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        procressPlay: null,
        procressLoad: null
      }
    },
    mounted () {
      this.procressPlay = this.$refs.procressPlay
      this.procressLoad = this.$refs.procressLoad
    },
    methods: {
      setLoadProcress (percentage) {
        this.procressLoad.style.width = percentage + '%'
      },
      setProcress (event) {
        // 获得点击的百分比
        let ev = event || window.event
        let percentage = parseInt(ev.offsetX) / 1100
        this.$emit('setProcress', percentage)
      },
      setProcressPlay (wh) {
        this.procressPlay.style.width = wh + '%'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .procress
    width: 100%
    height: 4px
    position: absolute
    background-color: rgba(166, 166, 166, .5)
    cursor: pointer
    transition: 0.3s
    top: -4px
    .procress-load
      height: 4px
      width: 0
      background-color: rgba(255, 255, 255, .5)
      position: absolute
      top: 0
      left: 0
    .procress-play
      width: 0
      height: 4px
      background: #ff6e0b
      position: absolute
      left: 0
      top: 0
    .procress-drag
      width: 4px
      height: 4px
      background: #fff
      position: absolute
      left: 50%
      top: 0
      border-radius: 88px

  .procress:hover
    transform: scaleY(2)
    transform-origin: left bottom
    .procress-drag
      transform: scaleX(2)
</style>
