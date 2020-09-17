<template>
  <section class="course">
    <div class="course-cont">
      <div class="course-wz">
        <h2>EINIGE <br/> UNSERER <br/> KUNDEN</h2>
        <p>
          Das Kundenvertrauen in unsere Kompetenz ist die notwendige Basis einer erfolgreichen Zusammenarbeit, gleichzeitig aber auch das größte Lob, das man uns entgegenbringen kann.</p>
        <p>
          Diese und viele weitere große und kleine Kunden vertrauen uns seit Jahren, was uns stolz macht, und dafür sagen wir an dieser Stelle einfach mal.</p>
      </div>

      <ul class="course-icons">
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
        <li>
          <div class="ic-img"><img src="./binoli.png"/></div>
          <div class="ic-img-after">测试文字1111</div>
        </li>
      </ul>

      <transition name="airplaneone">
        <div class="course-airplane-one" v-show="isState">
          <img src="./plane1.png"/>
        </div>
      </transition>
      <transition name="airplanetwo">
        <div class="course-airplane-two" v-show="isState">
          <img src="./plane2.png"/>
        </div>
      </transition>
      <transition name="airplanethree">
        <div class="course-airplane-three" v-show="isState">
          <img src="./plane3.png"/>
        </div>
      </transition>
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
    },
    methods: {
      show() {
        this.isState = true
      },
      hide() {
        this.isState = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  &.airplaneone-enter-active
    transition: all .3s ease

  &.airplaneone-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  &.airplaneone-enter, &.airplaneone-leave-to
    transform: translate3d(-80px, -80px, 0)
    opacity: 0

  &.airplanetwo-enter-active
    transition: all .3s ease

  &.airplanetwo-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  &.airplanetwo-enter, &.airplanetwo-leave-to
    transform: translate3d(-80px, 80px, 0)
    opacity: 0

  &.airplanethree-enter-active
    transition: all .3s ease

  &.airplanethree-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  &.airplanethree-enter, &.airplanethree-leave-to
    transform: translate3d(80px, -80px, 0)
    opacity: 0

  .course
    width: 100%
    height: 100%
    position: relative
    display: flex
    justify-content: center
    align-items: center
    .course-cont
      margin-top: 40px
      width: 1100px
      height: 580px
      position: relative
      display: flex
      align-items: center
      justify-content: space-around
      .course-airplane-one
        width: 359px
        height: 283px
        position: absolute
        left: 300px
        top: -70px
        z-index: 0
      .course-airplane-two
        width: 309px
        height: 249px
        position: absolute
        top: 250px
        left: -110px
      .course-airplane-three
        position: absolute
        width: 230px
        height: 182px
        top: 450px
        left: 320px
      .course-wz
        width: 400px
        position: relative
        z-index: 2
        h2
          color: #009ee0
          font-size: 80px
          line-height: 0.8
          font-weight: bold
          letter-spacing: -5px
          text-align: left
        p
          color: white
          line-height: 1.5
          font-size: 15px
          text-align: left
        p:nth-child(2)
          margin-top: 50px
    .course-icons
      width: 480px
      height: 400px
      display: flex
      flex-wrap: wrap
      position: relative
      z-index: 2
      li
        width: 120px
        height: 132px
        cursor: pointer
        position: relative
        .ic-img
          width: 100%
          height: 100%
          display: flex
          justify-content: center
          align-items: center
          img
            display: block
        .ic-img-after
          position: absolute
          width: 100%
          height: 100%
          left: 0
          top: 0
</style>
