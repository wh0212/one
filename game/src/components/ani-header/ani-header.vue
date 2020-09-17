<template>
  <header class="ani-header">
    <section class="ani-header-cont">
      <h2 class="ani-logo"><img src="./logo.png"/></h2>
      <div class="ani-music" @click="dhMusic">
        <img src="./musicon.gif" ref="audioGif"/>
        <audio :src="audioSrc" ref="aniAudio" preload="auto" loop></audio>
      </div>
      <nav class="ani-nav" ref="aniNav">
        <a href="javascript:void();">
          <div class="up"><img src="./home_gruen.png"/></div>
          <div><img src="./home.png"/></div>
        </a>
        <a href="javascript:void()">
          <div class="up">Course</div>
          <div>Course</div>
        </a>
        <a href="javascript:void()">
          <div class="up">Works</div>
          <div>Works</div>
        </a>
        <a href="javascript:void()">
          <div class="up">About</div>
          <div>About</div>
        </a>
        <a href="javascript:void()">
          <div class="up">Team</div>
          <div>Team</div>
        </a>

        <div class="nav-icon">
        </div>
      </nav>
    </section>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        audioSrc: require('./audio.mp3'),
        playMusicFlag: true,
        musicon: require('./musicon.gif'),
        musicoff: require('./musicoff.gif'),
        aniNav: null
      }
    },
    mounted () {
      // this.$refs.aniAudio.play()
      this.aniNav = this.$refs.aniNav.children
      this.setNav(0)
    },
    methods: {
      setNav (index) {
        for (let i = 0; i < this.aniNav.length; i++) {
          this.aniNav[i].className = ''
        }
        this.aniNav[index].className = 'cur'
      },
      dhMusic () {
        if (this.playMusicFlag) {
          this.playMusicFlag = false
          this.$refs.audioGif.src = this.musicoff
          this.$refs.aniAudio.pause()
        } else {
          this.playMusicFlag = true
          this.$refs.audioGif.src = this.musicon
          this.$refs.aniAudio.play()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .ani-header
    background: #fff
    height: 80px
    width: 100%
    display: flex
    justify-content: center
    position: absolute
    left: 0
    top: 0
    z-index: 10
    .ani-header-cont
      width: 1100px
      height: 80px
      box-sizing: border-box
      padding-bottom: 15px
      display: flex
      align-items: flex-end
      h2.ani-logo
        width: 188px
        height: 31px
        img
          width: 188px
          height: 31px
      div.ani-music
        box-sizing: border-box
        display: flex
        flex: 1
        padding-left: 8px
        cursor: pointer
        img
          width: 14px
          height: 14px
      nav.ani-nav
        position: relative
        font-size: 14px
        display: flex
        align-items: flex-end
        cursor: pointer
        a
          display: block
          margin-left: 40px
          position: relative
          div:first-child
            color: #000
          div:nth-child(2)
            color: #009ee0
          .up
            position: absolute
            left: 0
            overflow: hidden
            width: 0%
            transition: 0.5s width
            img
              border: 0
        a:hover
          .up
            width: 100%
        a.cur
          .up
            width: 100%
        div.nav-icon
          width: 15px
          height: 15px
          background: #fff
          transform: rotate(45deg)
          transform-origin: center center
          position: absolute
          top: 26px
          left: 41px
</style>
