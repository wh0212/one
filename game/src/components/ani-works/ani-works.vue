<template>
  <section class="works">
    <div class="works-cont">
      <p class="works-title">
        EINBLICK <br/>
        ERKENNTNIS <br/>
        ERGEBNIS <br/>
      </p>

      <ul class="works-art">
        <li>
          <div class="works-art-img"><img src="./worksimg1.jpg"/></div>
          <p class="works-art-cont">测试文字，哈哈哈啊司法所地1</p>
          <div class="works-art-icon"></div>
        </li>
        <li>
          <div class="works-art-img"><img src="./worksimg2.jpg"/></div>
          <p class="works-art-cont">测试文字，哈哈哈啊司法所地1</p>
          <div class="works-art-icon"></div>
        </li>
        <li>
          <div class="works-art-img"><img src="./worksimg3.jpg"/></div>
          <p class="works-art-cont">测试文字，哈哈哈啊司法所地1</p>
          <div class="works-art-icon"></div>
        </li>
        <li>
          <div class="works-art-img"><img src="./worksimg4.jpg"/></div>
          <p class="works-art-cont">测试文字，哈哈哈啊司法所地1</p>
          <div class="works-art-icon"></div>
        </li>
      </ul>
      <transition name="pencilone">
        <div class="works-pen-one" v-show="isState">
          <img src="./pencel1.png"/>
        </div>
      </transition>
      <transition name="penciltwo">
        <div class="works-pen-two" v-show="isState">
          <img src="./pencel2.png"/>
        </div>
      </transition>
      <transition name="penciltwo">
        <div class="works-pen-three" v-show="isState">
          <img src="./pencel3.png"/>
        </div>
      </transition>
      <div class="works-machine">
        <img src="./robot.png"/>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isState: true
      }
    },
    mounted () {
      document.body.onclick = () => {
        this.isState = !this.isState
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .pencilone-enter
    transform: translate3d(0, -80px, 0)
    opacity: 0

  .pencilone-enter-active
    transition: all 0.6s ease

  .penciltwo-enter
    transform: translate3d(0, 80px, 0)
    opacity: 0

  .penciltwo-enter-active
    transition: all 0.5s ease

  .works
    width: 100%
    height: 100%
    position: relative
    display: flex
    justify-content: center
    align-items: center
    margin-top: 40px
    .works-cont
      width: 1100px
      height: 520px
      position: relative
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center
      .works-pen-one
        width: 180px
        height: 79px
        top: 0px
        left: 500px
        position: absolute
      .works-pen-two
        width: 268px
        height: 38px
        left: 300px
        position: absolute
      .works-pen-three
        width: 441px
        height: 231px
        position: absolute
        right: 0
        bottom: 0
      .works-machine
        width: 167px
        height: 191px
        position: absolute
        animation: machine 10s linear infinite
      .works-title
        color: #009ee0
        font-size: 80px
        line-height: 0.8
        font-weight: bold
        letter-spacing: -5px
        text-align: left
        width: 990px
        position: relative
        z-index: 2
      .works-art
        display: flex
        width: 990px
        position: relative
        z-index: 2
        li
          width: 220px
          height: 133px
          position: relative
          .works-art-cont
            position: absolute
            left: 0
            top: 0
  @keyframes machine
    0%
      transform: rotateY(180deg)
    49%
      transform:translateX(450px) rotateY(180deg)
    50%
      transform:translateX(450px) rotateY(0deg)
    100%
      transform: rotateY(0deg)
</style>
