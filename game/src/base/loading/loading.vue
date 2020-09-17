<template>
  <div class="loading" ref="loading">
    <div class="loading_cont" ref="loadingCont">
      <img src="./loading.gif"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  //  import {prefixStyle} from 'common/js/dom'
  //
  //  const transform = prefixStyle('transform')
  export default {
    props: {
      isBg: {
        type: Boolean,
        default: false
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      if (this.isShow) {
        this.show()
      }
    },
    methods: {
      show () {
        this.hasBg()
        this.$refs.loadingCont.style.opacity = '1'
        this.$refs.loadingCont.style.transition = '0.3s'
      },
      hide () {
        this.$refs.loadingCont.style.opacity = '0'
        this.$refs.loadingCont.style.transition = '0.3s'
        this.$refs.loadingCont.addEventListener('transitionend', () => {
          this.$refs.loading.style.display = 'none'
        }, false)
      },
      hasBg () {
        if (this.isBg) {
          this.$refs.loadingCont.className = 'loading_cont hasBg'
        } else {
          this.$refs.loadingCont.className = 'loading_cont'
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .loading
    position: relative
    .loading_cont
      opacity: 0
      display: flex
      justify-content: center
      align-items: center
      img
        width: 50px
        height: 50px
    .hasBg
      width: 100%
      height: 100%
      position: fixed
      background: rgba(0, 0, 0.0 .9)
      z-index: 100
</style>
