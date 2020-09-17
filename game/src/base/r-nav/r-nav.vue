<template>
  <ul class="nav" ref="nav">
    <li>
      <router-link tag="a" to="/">首页</router-link>
    </li>
    <li>
      <router-link tag="a" to="/download">下载蓝叠</router-link>
    </li>
    <li>
      <router-link tag="a" to="/sort">应用中心</router-link>
    </li>
    <li>
      <router-link tag="a" to="/animation">某官网</router-link>
    </li>
    <li><a href="http://zhuanti.bluestacks.cn/rxjh/index.html" target="_blank">精彩专题</a></li>
    <li>
      <router-link tag="a" to="/qes">常见问题</router-link>
    <li><a href="javascript:void(0)" @click="clickk">关于我们</a></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from 'common/js/dom'

  export default {
    mounted () {
    },
    methods: {
      clickk () {
        this.addAni()
      },
      setNavHover (num) {
        this.$refs.nav.children[num].children[0].className = 'router-link-active router-link-exact-active'
      },
      addAni () {
        let lis = this.$refs.nav.children
        lis = Array.from(lis)
        lis.forEach((item, index) => {
          let transform = prefixStyle('transform')
          item.style[transform] = `translate3d(0,100px,0)`
          item.style.opacity = 1
          let time = (index + 1) * 0.2
          item.style.transition = `${time}s`
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .nav
    display: flex
    height: 32px
    width: 780px
    justify-content: space-between
    li
      width: 102px
      height: 32px
      position: relative
      top: -100px
      opacity: 0
      a
        display: block
        width: 100%
        height: 100%
        text-align: center
        color: #fff
        line-height: 32px
        font-size: 14px

      a.router-link-exact-active
        background: #95be0e

    li.cur
      background: #95be0e
    li:hover

      background: #95be0e
</style>
