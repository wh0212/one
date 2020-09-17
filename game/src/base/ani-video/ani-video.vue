<template>
  <section class="video" ref="video">
    <video ref="myVideo" width="100%" height="100%">
      <source
        src="http://60.28.235.80/huya-w15.huya.com/migrate/1707/3553941/1300/efbca64d047f14e09e1a9baef9758094.mp4"></source>
      <!--<source :src="videoUrl.ogv"></source>-->
    </video>
    <div class="b-control">
      <procress ref="myProcress" @setProcress="setClickProcress"></procress>
      <control @setPlaying="setPlaying" ref="myControl" @pageFullScreenEvent="pageFullScreenEvent"
               @fullScreenEvent="fullScreenEvent"></control>
    </div>

    <ani-video-loading ref="avl" w="1100" h="520"></ani-video-loading>
  </section>
</template>

<script type="text/ecmascript-6">
  import { mapGetters, mapMutations } from 'vuex'
  import Procress from 'base/procress/procress'
  import Control from 'base/control/control'
  import AniVideoLoading from 'base/ani-video-loading/ani-video-loading'
  import { conversionTime } from 'common/js/util'
  //  import { prefixStyle } from 'common/js/dom'

  //  let transform = prefixStyle('transform')

  export default {
    props: {
      settings: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        videoUrl: {
          mp4: require('./Intermission-Walk-in_512kb.mp4'),
          ogv: require('./Intermission-Walk-in.ogv')
        },
        myVideo: null,
        currentTime: 0,
        timer: null,
        strong: null,
        myControl: null,
        myProcress: null,
        parentNode: null
      }
    },
    computed: {
      ...mapGetters([
        'playing',
        'duration',
        'fullScreen',
        'pageFullScreen'
      ])
    },
    mounted () {
      this.init()
    },
    methods: {
      // 设置全屏
      fullScreenEvent () {
        if (this.fullScreen === false) {
          this.setFullScreen(true)
          // 网页全屏
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        } else {
          this.setFullScreen(false)
        }
      },
      // 设置网页全屏
      pageFullScreenEvent () {
        if (!this.pageFullScreen) {
          this.setPageFullScreen(true)
          this.setFS()
        } else {
          this.setPageFullScreen(false)
          this.clearFS()
        }
      },
      clearFS () {
        this.parentNode.appendChild(this.$refs.video)
        this.$refs.video.style.position = 'relative'
        this.$refs.video.style.zIndex = '0'
      },
      setFS () {
        document.getElementById('app').appendChild(this.$refs.video)
        this.$refs.video.style.position = 'absolute'
        this.$refs.video.style.left = '0'
        this.$refs.video.style.top = '0'
        this.$refs.video.style.zIndex = '1111'
      },
      setPlaying (flag) {
        this.setPlayingState(flag)
        if (this.playing) {
          this.play()
        } else {
          this.pause()
        }
      },
      setClickProcress (percentage) {
        let currentTime = percentage * this.myVideo.duration
        this.myVideo.currentTime = currentTime
      },
      init () {
        this.myVideo = this.$refs.myVideo
        this.myControl = this.$refs.myControl
        this.myProcress = this.$refs.myProcress
        this.parentNode = this.$refs.video.parentNode

        // 播放完毕
        this.myVideo.onended = () => {
          this.setProcress()
          clearInterval(this.timer)
        }

        // 当前视频加载期间发生错误时
        this.myVideo.onerror = (error) => {
          console.log(error)
        }

        // 当视频处于加载过程中时，会依次发生以下事件

        // 加载过程开始
        this.myVideo.onloadstart = () => {
          console.log('加载过程开始...')
        }

        // 视频的时长数据发生变化时，发生
        this.myVideo.ondurationchange = () => {
          console.log('durationchange...')
        }

        // 当视频元数据已加载时，会发生loadedmetadata
        this.myVideo.onloadedmetadata = () => {
          console.log('loadedmetadata..')
        }

        // 当前帧的数据已加载，但没有足够的数据来播放指定视频的下一帧时
        this.myVideo.onloadeddata = () => {
          console.log('loadeddata...')
        }

        // 当浏览器正在下载指定的视频时，会发生progress事件
        this.myVideo.onprogress = (event) => {
          // 设置加载的进度
          if (this.myVideo.buffered.length !== 0) {
            this.setLoadProcress(this.myVideo.buffered.end(0))
            console.log(this.myVideo.buffered.start(0))
          }
          console.log('progress')
        }

        // 视频准备好开始播放
        this.myVideo.oncanplay = () => {
          this.setDuration(this.myVideo.duration)
          this.$refs.myControl.setDuration(conversionTime(this.duration))
          this.setLoadProcress(this.myVideo.buffered.end(0))
          this.$refs.avl.hide()
        }

        // 当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定视频时
        this.myVideo.oncanplaythrough = () => {
          console.log('canplaythrough....')
        }

        // 注册滑动事件
//        let drag = new Drag({
//          obj: this.$refs.prosess.children[0],
//          slideWidth: 1100,
//          move: (pos) => {
//            _this.pause()
//            let currentTime = (pos.x / 1100) * _this.duration
//            _this.myVideo.currentTime = currentTime
//            this.currentTime = currentTime
//            this.setcurrentTime()
//          },
//          up: () => {
//            console.log(11)
//            // _this.play()
//          }
//        })
//
//        drag.init()
      },
      setLoadProcress (time) {
        let wh = (time / this.duration) * 100
        this.myProcress.setLoadProcress(wh)
      },
      play () {
        this.myVideo.play()
        this.timer = setInterval(this.setProcress, 1000)
      },
      setProcress () {
        this.setcurrentTime(this.myVideo.currentTime)
        let wh = (this.myVideo.currentTime / this.duration) * 100
        this.myProcress.setProcressPlay(wh)
      },
      pause () {
        this.myVideo.pause()
        clearInterval(this.timer)
      },
      setcurrentTime () {
        this.myControl.setCurrentTime(conversionTime(this.myVideo.currentTime))
      },
      nowTime () {
        let cov = conversionTime(this.duration)
        this.$refs.times.innerHTML = `<strong>00:00:00</strong> / <strong>${cov}</strong>`
      },
      ...mapMutations({
        setPlayingState: 'SET_PLAYING_STATE',
        setDuration: 'SET_DURATION',
        setFullScreen: 'SET_FULL_SCREEN',
        setPageFullScreen: 'SET_PAGE_FULL_SCREEN'
      })
    },
    components: {
      Procress,
      Control,
      AniVideoLoading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .video
    position: relative
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, 1)
    .t-control
      position: absolute
      top: 0
      height: 48px
      width: 100%
      background: rgba(0, 0, 0, .8)
    .b-control
      width: 100%
      height: 42px
      position: absolute
      bottom: 0px
      left: 0
      .prosess
        width: 100%
        background: #fff
        height: 1px
        position: relative
        div
          width: 10px
          height: 10px
          position: absolute
          border-radius: 10px
          background: red
          top: -5px
      .b-control-kz
        display: flex
        color: #fff

</style>
