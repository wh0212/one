<template>
  <header class="m-header" ref="mHeader">
    <logo ref="logo2"></logo>
    <r-nav ref="rNav"></r-nav>
  </header>
</template>

<script type="text/ecmascript-6">
  import RNav from 'base/r-nav/r-nav'
  import Logo from 'base/logo/logo'

  export default {
    props: {
      top: String,
      default: '5%'
    },
    mounted () {
      this._setTop()
    },
    methods: {
      logoAni() {
        this.$refs.logo2.addAni()
      },
      addAni () {
        this.$refs.rNav.addAni()
      },
      _setTop () {
        this.$refs.mHeader.style.top = this.top
      },
      setNavHover (num) {
        console.log(2)
        this.$refs.rNav.setNavHover(num)
      }
    },
    components: {
      RNav,
      Logo
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-header
    min-width: 1200px
    width: 89.0625%
    display: flex
    justify-content: space-between
    position: absolute
    left: 50%
    top: 5%
    transform: translateX(-50%)
    z-index: 100
    transition: 0.3s
</style>
