<template>
  <section class="control">
    <nav class="control-btn">
      <a href="javascript:void(0)" @click="setPlaying"><i ref="playing" class="fa fa-pause"></i></a>
      <a href="javascript:void(0)"><i class="fa fa-step-forward"></i></a>
    </nav>

    <time><strong ref="currentTime">00:00:00</strong> / <strong ref="duration">00:00</strong></time>

    <div class="control-gn">
      <!--<ani-select></ani-select>-->
      <ul class="control-kz">
        <li><i class="fa fa-volume-down"></i></li> <!-- off -->
        <li><i class="fa fa-gear"></i></li>
        <li>
          <i class="fa fa-compress" @click="setPageFullScreen" @mouseover="setFlag('pageFullScreen')"
             @mouseout="clearFlag('pageFullScreen')"></i>
          <remind title="网页全屏" v-if="showPageFullScreenFlag"></remind>
        </li>
        <li>
          <i class="fa fa-arrows-alt" @click="setFullScreen" @mouseover="setFlag('fullScreen')"
             @mouseout="clearFlag('fullScreen')"></i>
          <remind title="全屏" v-if="showFullScreenFlag"></remind>
        </li>
      </ul>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import AniSelect from 'base/ani-select/ani-select'
  import Remind from 'base/remind/remind'

  export default {
    data () {
      return {
        showFlag: false,
        currentTime: null,
        showFullScreenFlag: false,
        showPageFullScreenFlag: false
      }
    },
    mounted () {
      this.currentTime = this.$refs.currentTime
    },
    components: {
      AniSelect,
      Remind
    },
    methods: {
      setFlag (type) {
        if (type === 'fullScreen') {
          this.showFullScreenFlag = true
        } else if (type === 'pageFullScreen') {
          this.showPageFullScreenFlag = true
        }
      },
      clearFlag (type) {
        if (type === 'fullScreen') {
          this.showFullScreenFlag = false
        } else if (type === 'pageFullScreen') {
          this.showPageFullScreenFlag = false
        }
      },
      setPageFullScreen () {
        this.$emit('pageFullScreenEvent')
      },
      setFullScreen () {
        this.$emit('fullScreenEvent')
      },
      setCurrentTime (time) {
        this.currentTime.innerText = time
      },
      setDuration (time) {
        this.$refs.duration.innerText = time
      },
      setPlaying () {
        if (this.showFlag === true) {
          this.showFlag = false
          this.$refs.playing.className = 'fa fa-pause'
        } else {
          this.showFlag = true
          this.$refs.playing.className = 'fa fa-play'
        }
        this.$emit('setPlaying', this.showFlag)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .control
    width: 100%
    height: 40px
    display: flex
    justify-content: space-between
    color: #fff
    .control-btn
      display: flex
      margin-left: 12px
      a
        display: flex
        width: 36px
        height: 42px
        align-items: center
        justify-content: center
        i.fa
          font-size: 18px
          color: #fff
          transition: 0.3s
      a:last-child
        width: 18px
        display: flex
        margin-left: 4px
      span
        display: block
        width: 2px
        height: 100%
        background: #fff
      a:hover
        i
          color: #ff6e0b
    time
      flex: 1
      text-align: left
      font-size: 12px
      line-height: 42px
      height: 42px
      margin-left: 16px
      color: rgba(255, 255, 255, 0.5)
      strong:first-child
        color: #fff
    .control-gn
      height: 40px
      .control-kz
        display: flex
        margin-right: 16px
        li
          height: 40px
          width: 36px
          display: flex
          align-items: center
          justify-content: center
          position: relative
          transition: 0.1s
          i
            font-size: 22px
            cursor: pointer
            transition: 0.3s
        li:hover
          color: #ff6428
        li:nth-child(2):hover
          i
            transform: rotate(45deg)
</style>
