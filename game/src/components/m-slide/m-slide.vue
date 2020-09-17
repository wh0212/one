<template>
  <section class="slide">
    <div class="wrapper" ref="wrapper">
      <div class="item">
        <div class="item_info" ref="it1">
          <img src="./wbt.png" class="loadingImg" style="display: none" :data-src="setUrl('i_1.jpg')"/>
          <img src="./wbt.png" class="loadingImg it_1" :data-src="setUrl('ii_01.png')"/>
          <img src="./wbt.png" class="loadingImg it_1" :data-src="setUrl('ii_02.png')"/>
          <img src="./wbt.png" class="loadingImg it_1" :data-src="setUrl('ii_03.png')"/>
          <div class="lj_down it_1"><img src="./wbt.png" class="loadingImg" :data-src="setUrl('ii_05.png')"/></div>
          <p class="it_1">下载BlueStacks 2 HD+ | 更新日志</p>
        </div>
      </div>
      <div class="item">
        <div class="item_info" ref="it2">
          <img src="./wbt.png" class="loadingImg" style="display: none" :data-src="setUrl('i_2.jpg')"/>
          <p class="it2_p">蓝叠给你更快更流畅的体验</p>
          <p class="it2_p">搭载蓝叠自研全新超级引擎——HyperDroid 游戏更快，体验更爽！</p>
          <ul class="eg_02">
            <li>
              <div><img src="./wbt.png" class="loadingImg" :data-src="setUrl('ic_01.png')"/></div>
              <p>7M超瘦迷你包<br/>
                越痩越快</p>
              <p>电脑配置低装不上？系统兼容性NO.1随便装
                热门游戏无法运行？应用兼容NO.1随便玩
                主流配置运行无忧，高端配置畅玩超爽</p>
            </li>
            <li>
              <div><img src="./wbt.png" class="loadingImg" :data-src="setUrl('ic_02.png')"/></div>
              <p>炫酷产品界面<br/>
                视觉盛宴</p>
              <p>分辨率自定义，屏幕缩放自定义
                海量游戏应用，要啥有啥
                边玩游戏边聊天，全靠多标签</p>
            </li>

            <li>
              <div><img src="./wbt.png" class="loadingImg" :data-src="setUrl('ic_03.png')"/></div>
              <p>手柄即插即用<br/>
                爽快畅玩</p>
              <p>支持通过键盘、鼠标、游戏手柄等外设来操作游戏
                在蓝叠模拟器中你可以直接通过ADWS来
                快捷控制上下左右移动</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="item" ref="it3">
        <img src="./wbt.png" class="loadingImg" style="display: none" :data-src="setUrl('i_3.jpg')"
        <div class="bg_01"><img src="./wbt.png" class="loadingImg" :data-src="setUrl('ic_03_01.png')"/></div>
        <ul>
          <li>边游戏边聊天，全靠多标签 </li>
          <li>全球首个倡导绿色安全游戏的 模拟器产品</li>
          <li>默认无ROOT权限、让针对安卓的木马病毒无从下手，保护游戏账号安全 蓝叠模拟器倡导安全游戏、绿色游戏、健康游戏，抵制盗版游戏</li>
        </ul>
      </div>
      <div class="item">
        <img src="./wbt.png" class="loadingImg" style="display: none" :data-src="setUrl('ic_04.jpg')"/>
        <div class="it4_bg"><img src="./wbt.png" class="loadingImg" :data-src="setUrl('ic_i_01.png')"/></div>
        <p class="p4">蓝叠作为全球最早发布的安卓模拟器产品
          相关技术专利均有自主研发</p>
        <ul class="u4">
          <li>
            <p>HyperDroid<span>引擎</span></p>
            <p>自主研发具有专利权</p>
          </li>
          <li>
            <p>180<span>个</span></p>
            <p>国家和地区普及</p>
          </li>
          <li>
            <p>1.5<span>亿</span></p>
            <p>用户使用体验</p>
          </li>
        </ul>
      </div>
    </div>

    <ul class="navgiation" ref="navgiation">
      <li class="cur" data-index="0"></li>
      <li data-index="1"></li>
      <li data-index="2"></li>
      <li data-index="3"></li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from 'common/js/dom'
  // import animations from 'create-keyframe-animation'
  const transform = prefixStyle('transform')
  export default {
    created () {
    },
    computed: {},
    data () {
      return {
        currentIndex: 0,
        wHeight: 0,
        isEnd: true,
        ic1: require('./ii_01.png'),
        show: true
      }
    },
    mounted () {
      this.loadingImg()
      const _this = this
      this._setWrapperHeight()

      window.addEventListener('resize', _this._setResize, false)

      if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', _this._mouseScroll, false)
      }

      window.onmousewheel = document.onmousewheel = this._mouseScroll

      this.$refs.navgiation.addEventListener('click', _this.clickNav, false)
    },
    methods: {
      it3Ani () {
        let lis = this.$refs.it3.querySelector('ul').getElementsByTagName('li')
        lis = Array.prototype.slice.call(lis)
        lis.forEach((item, index) => {
          console.log(11)
          let transform = prefixStyle('transform')
          item.style[transform] = `translate3d(0, 0px, 0)`
          item.style.opacity = 1
          let time = (index + 1) * 0.4
          item.style.transition = `${time}s`
        })
      },
      it2Ani () {
        let it2s = this.$refs.it2.querySelectorAll('.it2_p')
        it2s = Array.from(it2s)
        it2s.forEach((item, index) => {
          let transform = prefixStyle('transform')
          item.style[transform] = `translate3d(0,0,0)`
          item.style.opacity = 1
          let time = (index + 1) * 0.4
          item.style.transition = `${time}s`
        })

        setTimeout(() => {
          let lis = this.$refs.it2.querySelector('.eg_02').getElementsByTagName('li')
          lis = Array.from(lis)
          lis.forEach((item, index) => {
            setTimeout(() => {
              this._ani2(item, index)
            }, 100 * (index + 1))
          })
        }, 600)
      },
      _ani2 (item, index) {
        let div = item.querySelector('div')
        let ps = item.querySelectorAll('p')
        let transform = prefixStyle('transform')
        div.style[transform] = `translate3d(0, 30px, 0)`
        div.style.opacity = 1
        let time = (index + 1) * 0.6
        div.style.transition = `${time}s`

        for (let i = 0; i < ps.length; i++) {
          let transform = prefixStyle('transform')
          ps[i].style[transform] = `translate3d(0, 0px, 0)`
          ps[i].style.opacity = 1
          let time = (i + 1) * 0.6
          ps[i].style.transition = `${time}s`
        }
      },
      it1Ani () {
        let ans = this.$refs.it1.querySelectorAll('.it_1')
        ans = Array.from(ans)
        ans.forEach((item, index) => {
          let transform = prefixStyle('transform')
          item.style[transform] = `translate3d(0, -50px, 0)`
          item.style.opacity = 1
          let time = (index + 1) * 0.3
          item.style.transition = `${time}s`
        })
      },
      loadingImg () {
        let imgs = this.$refs.wrapper.querySelectorAll('.loadingImg')
        imgs = Array.from(imgs)
        const len = imgs.length
        let count = 0
        imgs.forEach((item, index) => {
          if (item.getAttribute('data-src') !== undefined || item.getAttribute('data-src') !== '') {
            let img = new Image()
            img.src = item.getAttribute('data-src')
            img.onload = () => {
              count = count + 1
              item.src = img.src
              if (count === (len - 1)) {
                this.$emit('loadingEnd')
              }
            }
            img.onerror = () => {
              count = count + 1
              if (count === (len - 1)) {
                this.$emit('loadingEnd')
              }
            }
          }
        })
      },
      setUrl (val) {
        return require('./' + val)
      },
      _setResize () {
        this._setWrapperHeight()
        this._setScrollTop()
      },
      clearEvent () {
        window.removeEventListener('resize', this._setResize, false)
      },
      clickNav (ev) {
        ev = ev || window.event
        let target = ev.target || ev.srcElement
        if (target.nodeName.toLowerCase() === 'li') {
          this.toPage(parseInt(target.getAttribute('data-index')))
        }
      },
      _setScrollTop () {
        const top = -(this.currentIndex * this.wHeight)
        this.$refs.wrapper.style[transform] = `translate3d(0,${top}px,0)`
      },
      _setWrapperHeight () {
        const height = window.innerHeight
        let items = this.$refs.wrapper.children
        items = Array.prototype.slice.call(items)

        items.forEach((item) => {
          item.style.height = height + 'px'
        })

        this.$refs.wrapper.style.height = items.length * height + 'px'

        this.wHeight = height
      },
      _mouseScroll (e) {
        e = e || window.event

        let val
        if (e.wheelDelta) {
          val = e.wheelDelta
        } else if (e.detail) {
          val = e.detail
        }

        if (val > 0) {
          this.next()
        } else if (val < 0) {
          this.prev()
        }
      },
      next () {
        if (this.isEnd) {
          this.currentIndex++
        }
      },
      prev () {
        if (this.isEnd) {
          this.currentIndex--
        }
      },
      toPage (index) {
        this.isEnd = false
        if (index <= 0) {
          index = this.currentIndex = 0
          this.isEnd = true
        }

        if (index >= 3) {
          index = this.currentIndex = 3
          this.isEnd = true
        }

        var _this = this
        const top = -(index * this.wHeight)

        this.$refs.wrapper.style[transform] = `translate3d(0,${top}px,0)`
        this.$refs.wrapper.style.transition = '0.5s'
        this.$refs.wrapper.addEventListener('transitionend', _this.transitionEnd, false)

        let arr = this.$refs.navgiation.children
        arr = Array.prototype.slice.call(arr)
        arr.forEach((item, cur) => {
          item.className = ' '
          if (cur === index) {
            item.className = 'cur'
          }
        })
      },
      transitionEnd () {
        this.isEnd = true

        if (this.currentIndex === 1) {
          setTimeout(() => {
            this.it2Ani()
          }, 200)
        }

        if (this.currentIndex === 2) {
          setTimeout(() => {
            this.it3Ani()
          }, 200)
          console.log(2323232)
        }
      }
    },
    watch: {
      currentIndex (newIndex) {
        this.toPage(newIndex)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide
    width: 100%
    height: 100%
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    .wrapper
      width: 100%
      height: auto
      position: absolute
      top: 0
      .item
        width: 100%
        height: auto
        background-size: cover
        background-position: center center
        position: relative
        .it_1
          opacity: 0
      .item:nth-of-type(1)
        background-image: url("i_1.jpg")
        .item_info
          width: 37.1875%
          position: absolute
          left: 50%
          top: 55%
          transform: translateX(-50%)
          min-width: 446px
          max-width: 714px
          .lj_down
            width: 46.78%
            margin: 0 auto
          img
            width: 100%
          p
            font-size: 14px
            color: #fff
            line-height: 60px

      .item:nth-of-type(2)
        background-image: url("i_2.jpg")
        display: flex
        align-items: center
        .item_info
          width: 100%
          .it2_p
            opacity: 0
            transform: translate3d(0, -100px, 0)
          p
            font-size: 60px
            color: #fff
          p:nth-child(3)
            font-size: 18px
            margin-top: 28px
          ul.eg_02
            display: flex
            width: 71%
            justify-content: space-between
            margin: 0 auto
            li
              width: 23%
              font-size: 14px
              div
                width: 100%
                opacity: 0
                transform: translate3d(0, -50px, 0)
                img
                  width: 100%
                  dipslay: block
              p
                font-size: 30px
                color: #00e9fe
                line-height: 45px
                opacity: 0
                transform: translate3d(0, -50px, 0)
              p:nth-child(3)
                font-size: 14px
                line-height: 24px
                color: #fff
                opacity: 0
                transform: translate3d(0, -50px, 0)

      .item:nth-of-type(3)
        background-image: url("i_3.jpg")
        position: relative
        display: flex
        align-items: center
        .bg_01
          width: 45%
          img
            width: 100%
        ul
          width: 36%
          position: absolute
          top: 50%
          left: 45%
          transform: translateY(-50%)
          li
            font-size: 14px
            color: #fff
            text-align: left
            opacity: 0
            transform: translate3d(0, 100px, 0)
          li:first-child
            font-size: 42px
          li:nth-child(2)
            font-size: 32px
            margin-top: 32px
          li:nth-child(3)
            margin-top: 64px
            font-size: 18px
            line-height: 24px

      .item:nth-of-type(4)
        background-image: url("ic_04.jpg")
        position: relative
        .it4_bg
          width: 48%
          min-width: 915px
          position: absolute
          left: 50%
          transform: translate3d(-50%,0,0)
          top:60%
          img
            display: block
            width: 100%
        p.p4
          width: 50%
          font-size: 38px
          line-height: 52px
          color: #fff
          position: absolute
          left: 50%
          top: 30%
          transform: translate(-50%, -50%)
        ul.u4
          font-size: 38px
          width: 48%
          color: #fff
          position: absolute
          left: 50%
          top: 45%
          transform: translate(-50%, -50%)
          display: flex
          justify-content: space-between
          li
            p
              display: flex
              justify-content: center
              font-size: 38
              span
                font-size: 18px
            p:last-child
              font-size: 14px
              line-height: 32px

    .navgiation
      width: 12px
      height: auto
      display: flex
      flex-direction: column
      position: absolute
      z-index: 2
      right: 5%
      top: 50%
      transform: translateY(-50%)
      li
        width: 12px
        height: 12px
        border-radius: 12px
        border: 1px solid #fff
        margin-bottom: 15px
        cursor: pointer
      li:hover
        background: #74ad1e
        border: 1px solid #74ad1e
        transition: 0.3s
      li.cur
        background: #74ad1e
        border: 1px solid #74ad1e

</style>
