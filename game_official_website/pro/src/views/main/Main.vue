<template>
    <el-container id="root">
      <el-header class="header" style="height: 85px" id="header">
        <div class="logo"></div>
        <div class="header_title"  >
          <div :class="active == '#home_dy' ? 'active' : ''" @click="toTarget('#home_dy')">
            首页
            <p>
              HOME
            </p>
          </div>
          <span id="span1">/</span>
          <div :class="active == '#news_dy' ? 'active' : ''" @click="toTarget('#news_dy')">
            新闻资讯
            <p>NEWS</p>
          </div>
          <span id="span2">/</span>
          <div :class="active == '#cards_dy' ? 'active' : ''" @click="toTarget('#cards_dy')">
            卡牌鉴赏
            <p>APPRECIATE</p>
          </div>
          <span id="span3">/</span>
          <div :class="active == '#video_dy' ? 'active' : ''" @click="toTarget('#video_dy')">
            视听盛宴
            <p>WELLPAPER</p>
          </div>
          <span id="span4">/</span>
          <div :class="active == '#concern_dy' ? 'active' : ''" @click="toTarget('#concern_dy')">
            关注我们
            <p>CONCERNS</p>
          </div>
        </div>
        <div class="header_icon">
          <!-- 微博 -->
              <span class="iconfont icon-weibo" @click="goHandle('http://www.baidu.com')" style="margin-right: 15px;"></span>
              <!-- 微信 -->
              <el-popover
                placement="bottom"
                width="150"
                trigger="hover"
                v-model="weixinVisible"
                style="margin-right: 15px;">
                <!-- 内容 -->
                <div class="popoverContent" >
                  <!-- 二维码 -->
                  <div style="text-align: center; margin-top: 10px;">
                    <img src="../../assets/images/ewm.png" alt="" style="width:50%;">
                  </div>
                  <div style="text-align: center; font-size: 12px;">
                    扫描二维码
                  </div>
                  <div style="text-align: center; font-size: 12px; margin-bottom: 5px;">
                    关注微信官方公众号
                  </div>
                  <!-- <div style="text-align: center; margin: 0; width: 100%; height: 20px;   background-color: #ebb34c;" class="popoverContent_bottom">
                    微信公众号
                  </div> -->
                </div>
                <!-- ---------------------------------- -->
                  <span class="iconfont icon-weixin" slot="reference" @click="weixinVisible = !weixinVisible"></span>
              </el-popover>
              <!-- QQ -->
              <el-popover
                placement="bottom"
                width="140"
                trigger="hover"
                v-model="QQVisible"
                style="margin-right: 15px;">
                <!-- 内容 -->
                <div class="popoverContent" >
                  <div style="text-align: center; font-size: 12px; margin: 5px 0;">
                    <span style="margin-right: 10px;">官方1群</span> 123123123
                  </div>
                  <div style="text-align: center; font-size: 12px; margin-bottom: 5px;">
                    <span  style="margin-right: 10px;">官方2群</span> 123123123
                  </div>
                  <div style="text-align: center; font-size: 12px; margin-bottom: 5px;">
                    <span  style="margin-right: 10px;">官方3群</span> 123123123
                  </div>
                </div>
                <!-- ---------------------------------- -->
                  <span class="iconfont icon-QQ" slot="reference" @click="QQVisible = !QQVisible"></span>
              </el-popover>
            <!-- tap -->
            <span class="iconfont icon-taptap"></span>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>
<script>
// import mainjs from '@/mixins/main/Main.js'
// import { Carousel3d, Slide } from 'vue-carousel-3d'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'video.js/dist/video-js.css'

// import { videoPlayer } from 'vue-video-player'
// import '../src/custom-theme.css'
// videojs hotkeys plugin

export default {
  // mixins: [mainjs],
  // components: {
  //   Carousel3d,
  //   Slide,
  //   swiper,
  //   swiperSlide,
  //   videoPlayer
  // },

  data () {
    return {
      inputInfo: 1,
      weixinVisible: false,
      QQVisible: false,
      cardsIpute: '',
      isShowVideo: true,
      isShowWallpaper: false,
      activeName: '',
      // swiper 配置选项
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // speed: 300,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        direction: 'horizontal',
        grabCursor: false,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 3,
        spaceBetween: 20
      },
      // video 配置选项
      playerOptions: {
        height: '190',
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          // mp4
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg'
      },
      // 定位
      active: '#home',
      scrollIntoViewOptions: {
        block: 'start',
        behavior: 'smooth'
      }
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    // 视频
    console.log('this is current player instance object', this.player)
    // 定位
    // 一次性计算赋值，减少滚动计算节点位置次数

    this.$nextTick(function () {
      document.querySelector('#app').addEventListener('scroll', this.onScroll)
    })
    window.addEventListener('scroll', this.onScroll, true)
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // },
    // player () {
    //   return this.$refs.videoPlayer.player
    // }
  },
  methods: {
    click () {
      console.log(1)
    },
    goHandle (e) {
      console.log(e)
      window.location.href = e
    },
    getImgURL () {

    },
    handleClick () {

    },
    callback () {

    },
    // 原画视频切换
    videocenterHandle (info) {
      if (info === 'videocenter') {
        console.log('videocenter')

        this.isShowVideo = true
        this.isShowWallpaper = false
      } else if (info === 'wallpaper') {
        console.log('wallpaper')

        this.isShowVideo = false
        this.isShowWallpaper = true
      } else {
        this.isShowVideo = true
        this.isShowWallpaper = false
      }
    },
    // 视频
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    // 定位
    toTarget (target) {
      console.log(target)
      this.active = target
      const toElement = document.querySelector(target)
      console.log('toElement', typeof toElement)
      if (toElement === null) {
        this.$router.push('/main/home')
        toElement.scrollIntoView(this.scrollIntoViewOptions)
      }
      toElement.scrollIntoView(this.scrollIntoViewOptions)
    },
    onScroll () {
      const scrolled = document.querySelector('#header').scrollTop
      if (scrolled < this.distance_team) {
        this.active = '#home'
      } else if (scrolled >= this.distance_team && scrolled < this.distance_contact) {
        this.active = '#news'
      } else if (scrolled >= this.distance_contact && scrolled < this.distance_join) {
        this.active = '#cards'
      } else if (scrolled >= this.distance_contact && scrolled < this.distance_join) {
        this.active = '#video'
      } else {
        this.active = '#concern'
      }
    },
    // 折叠
    foldHandle () {
      console.log('1')
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>
<style lang="less" scoped>
#root{
  position: relative;
  height: 100%;
  background-image: url(../../assets/images/bg.jpg);
  background-size: cover;
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 1920px;
    height: 100%;
    background-image: url(../../assets/images/daohang.png);
    background-size: cover;
    z-index: 5;

  }
  .header_title{
    position: relative;
    margin-left: 120px;
    width: 700px;
    height: 100%;
    float: left;
    :hover{
      color: #00ccff;
    }
    #span1,#span2,#span3,#span4{
      position: absolute;
      top: 30px;
      left: 110px;
      font-size: 40px;
      font-weight: 100;
      color: #00ccff;
    }
    #span2{
      position: absolute;
      top: 30px;
      left: 260px;
    }
    #span3{
      position: absolute;
      top: 30px;
      left: 403px;
    }
    #span4{
      position: absolute;
      top: 30px;
      left: 540px;
    }
    div{
      // background-color: #c2959c;
      width: 120px;
      height: 85px;
      margin-right: 20px;
      text-align: center;
      line-height: 95px;
      font-size: 20px;
      color: #fff;
      float: left;
      cursor: pointer;
      p{
        display: block;
        margin-top: -70px;
        font-size: 14px;
      }
    }
  }
  .header_icon{
    width: 200px;
    height: 85px;
    // background-color: purple;
    float: left;
    margin-left: 30px;
    text-align: center;
    line-height: 100px;
    color: #9FABF4;
    :hover{
      color: #00ccff;
    }
    span{
      font-size: 30px;
      cursor: pointer;
    }
  }
  .logo{
    width: 190px;
    height: 85px;
    // background-color: #f196a5;
    float: left;
    margin-right: 115px;

  }
  .el-main{
    padding: 0;
    // background-color: #C0DCFF;
    margin-top: 85px;
    .aside{
      position: fixed;
      top: 150px;
      right: 0;
      width: 120px;
      height: 300px;
      background-color: #fff;
      z-index: 5;
      #aside_div{
        position: relative;
        :hover{
          cursor: pointer;
        }
        span:nth-child(1){
          position: absolute;
          top: 145px;
          left: 0;
          color: #00ccff;
        }
        span:nth-child(2){
          position: absolute;
          top: 275px;
          left: 50%;
          color: #00ccff;
        }
      }

    }
  }
  .mian{
    width: 100%;
    height: 1920px;
    #mian_top{
      display: flex;
      width: 100%;
      div{
        flex: 1;
      }
    }
    #news,#cards{
      width: 100%;
      height: 80px;
      // background-color: #fff;
      margin-top: -5px;
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      line-height: 125px;
      #news_span1{
        display: inline-block;
        width: 300px;
        border: 1px solid #505c8f;
        margin-bottom: 8px;
      }
    }
    #news_conent{
      width: 100%;
      height: 100%;
      padding-top: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      background-image: url(../../assets/images/bg1.jpg);
      background-position: center top;
      .news_conent_1{
        width: 65%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        div{
          flex: 1;
          margin: 0;
          padding: 0;
        }
      }
    }
    #news_news{
      position: relative;
      #news_1{
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .news_more{
      position: absolute;
      top: 15px;
      left: 20px;
      text-decoration: none;
      color: #000;
    }

  }
 .el-link{
   font-weight: 700!important;
   font-size: 14px;
   span{
     margin-left: 130px;
   }
 }
  .popoverContent{
    font-size: 12px;
    div{
      text-align: center;
    }
  }
  #cards_content{
    width: 1110px;
    height: 400px;
    background-color: #DBDBDB;
    margin: 0 auto;
    border: 2px solid #9EBAFF;
    box-shadow:0px 0px  10px 5px #aaa;
    display: flex;
    div:nth-child(1){
      flex: 1;
      #cards_content_1{
        width: 160px;
        height: 40px;
        background-image: url(../../assets/images/zzjs.png);
        background-size: cover;
        text-align: center;
        line-height: 40px;
        color: #fff
      }
    }
     div:nth-child(2){
      flex: 3;
    }
  }
  #game_content{
    width: 1110px;
    height: 400px;
    // background-color: pink;
    margin: 0 auto;
    padding-bottom: 30px;
     .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  }
  #video_content{
    width: 100%;
    height: 100%;
     background-image: url(../../assets/images/bg2.jpg);
     background-position: center center;
  }
 /deep/ input::-webkit-input-placeholder {
  color: #fff;
}
 /deep/ input::-moz-input-placeholder {
  color: #fff;
}
  /deep/ input::-ms-input-placeholder {
  color: #fff;
}
#video_content_1{
  position: relative;
  width: 100%;
  height: 210px;
  color: #fff;
  text-align: center;
  span{
    display: block;
  }
  :hover{
      color: #00ccff;
    }
  div:nth-child(1){
    position: absolute;
    top: 90px;
    left: 415px;
    width: 90px;
    height: 94px;
    cursor: pointer;
  }
   div:nth-child(2){
    position: absolute;
    top: 90px;
    left: 785px;
    width: 95px;
    height: 94px;
    cursor: pointer;
  }
}
#video_content_2{
  width: 100%;
  height: 300px;
  // background-color: #fff;
  #video_content_video,#video_content_wallpaper{
    width: 1050px;
    height: 190px;
    background-color: #fff;
    margin:0 auto;
  }
}
#concern_1{
  position: relative;
  padding: 70px 0 0 70px;
  height: 250px;

  div{
    width: 80px;
    height: 103px;
    cursor: pointer;
  }
  div:nth-child(1){
    position: absolute;
    top: 70px;
    left: 320px;
    background-image: url(../../assets/images/wb.png);
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  div:nth-child(2){
    position: absolute;
    top: 70px;
    left: 470px;
    background-image: url(../../assets/images/wx.png);
    background-repeat: no-repeat;
  }
  div:nth-child(3){
    position: absolute;
    top: 70px;
    left: 620px;
    background-image: url(../../assets/images/QQ.png);
    background-repeat: no-repeat;

  }
  div:nth-child(4){
    position: absolute;
    top: 70px;
    left: 780px;
    background-image: url(../../assets/images/TAP.png);
    background-repeat: no-repeat;

  }
  div:nth-child(5){
    position: absolute;
    top: 70px;
    left: 930px;
    background-image: url(../../assets/images/kf.png);
    background-repeat: no-repeat;

  }
}
#bottom{
  width: 100%;
  height: 200px;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding-top: 20px;

  .bottom_1{
    font-size: 14px;
    :hover{
      cursor: pointer;
    }
    .bottom_1_1{
      margin: 0 10px;
    }
  }
  p{
    font-size: 1px;
  }
  .bottom_2{
    text-align: left;
    width: 760px;
    margin: 0 auto;
  }
}
#video_content_3{
  i{
    font-size: 18px;
  }
  span{
    font-size: 14px;
    margin-left: 3px;
  }

  margin-top: 40px;
  text-align: center;
  color: #fff;
  :hover{
    cursor: pointer;
  }
}
.video-js .vjs-icon-placeholder {
    width: 100%;
    height: 100%;
    display: block;
}
}
</style>
