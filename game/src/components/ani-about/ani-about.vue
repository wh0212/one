<template>
  <section class="about">
    <div class="about-cont">
      <div class="about-title">
        <h2>DIE<br/> SPEZIELLE <br/>VIELFALT</h2>
        <p>
          Der bunte Medienmix ist die Faszination die uns antreibt und das, was man an uns schätzt. Von A bis Z und von vorne bis hinten nehmen wir Ihr Projekt unter unsere Fittiche und lassen es zu etwas Großartigem heranwachsen.</p>
      </div>
      <dl class="about-img">
        <transition name="aboutOne">
          <dd v-show="isState">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </dd>
        </transition>
        <transition name="aboutTwo">
          <dd v-show="isState">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </dd>
        </transition>
      </dl>
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
    },
    method: {
      show () {
        this.isState = true
      },
      hide () {
        this.isState = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .aboutOne-enter
    transform: rotateZ(30deg)

  .aboutOne-enter-active
    transition: all 0.8s ease

  .aboutTwo-enter
    transform: rotateZ(-30deg)

  .aboutTwo-enter-active
    transition-property: transform
    transition-duration: 0.8s
    transition-timing-function: ease
    transition-delay: 0

  .about
    width: 100%
    height: 100%
    position: relative
    display: flex
    justify-content: center
    align-items: center
    .about-cont
      width: 1100px
      height: 520px
      display: flex
      justify-content: space-around
      .about-title
        width: 400px
        display: flex
        flex-direction: column
        justify-content: center
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
          margin-top: 100px
          text-align: left
      .about-img
        width: 420px
        display: flex
        flex-direction: column
        justify-content: space-around
        dd
          width: 270px
          height: 210px
          box-sizing: border-box
          border: 5px solid rgba(255, 255, 255, .5)
          border-radius: 5px
        dd:first-child
          align-self: flex-end
</style>
