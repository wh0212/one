<template>
  <section class="main">
    <loading ref="loading" :isShow="true" :isBg="true"></loading>
    <m-header ref="mHeader"></m-header>
    <m-slide ref="slide" @loadingEnd="clearLoadingAni"></m-slide>
    <m-footer ref="mFooter"></m-footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MSlide from 'components/m-slide/m-slide'
  import MFooter from 'components/m-footer/m-footer'
  import Loading from 'base/loading/loading'

  export default {
    methods: {
      clearLoadingAni () {
        this.$refs.loading.hide()
        setTimeout(() => {
          this.$refs.mHeader.addAni()
        }, 300)

        setTimeout(() => {
          this.$refs.mHeader.logoAni()
        }, 500)

        setTimeout(() => {
          this.$refs.mFooter.addAni()
        }, 800)

        setTimeout(() => {
          this.$refs.slide.it1Ani()
        }, 1500)
      }
    },
    data () {
      return {
        loading: false
      }
    },
    mounted () {
    },
    components: {
      MHeader,
      MSlide,
      MFooter,
      Loading
    },
    beforeDestroy () {
      this.$refs.slide.clearEvent()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
