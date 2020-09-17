<template>
  <section class="cont_nav" v-show="navs">
    <div class="cont">
      <ul ref="contNav">
        <li @click="selectGameClass(index)" v-for="(item, index) in navs">{{item}}</li>
      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      navs: {
        type: Array,
        default: null
      }
    },
    mounted () {
      this.$refs.contNav.children[0].className = 'cur'
    },
    methods: {
      selectGameClass (index) {
        if (event.currentTarget.getAttribute('class') === 'cur') {
          return false
        } else {
          this.setLiCls(index)
          this.$emit('selectGameClass', index)
        }
      },
      setLiCls (index) {
        let objs = this.$refs.contNav.children
        objs = Array.prototype.slice.call(objs)
        objs.forEach((item) => {
          item.className = ''
        })

        objs[index].className = 'cur'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cont_nav
    width: 100%
    height: 68px
    background: #d1201f
    display: flex
    justify-content: center
    ul
      display: flex
      height: 68px
      justify-content: flex-end
      li
        width: 146px
        text-align: center
        color: #f9e1e1
        font-size: 14px
        height: 68px
        line-height: 68px
        transition: 0.3s
        cursor: pointer
      li:hover
        background: #c00908
        color: #fff
      li.cur
        background: #c00908
        color: #fff
</style>
