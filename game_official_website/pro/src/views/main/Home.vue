<template>
    <div id="root">
        <div id="home_dy" style="margin-top:-84px;margin-bottom:84px;"></div>
        <div class="mian" id="home">
          <!-- 首页图片 -->
          <div id="mian_top">
            <div>
              <img src="../../assets/images/mainimg1.jpg" alt="" style="width: 100%">
            </div>
            <div>
              <img src="../../assets/images/mainimg2.jpg" alt="" style="width: 100%">
            </div>
            <div>
              <img src="../../assets/images/mianimg3.jpg" alt="" style="width: 100%">
            </div>
            <div>
              <img src="../../assets/images/mianimg4.jpg" alt="" style="width: 100%">
            </div>
          </div>
            <!-- 新闻咨询 -->
          <div id="news_dy" style="margin-top:-60px;margin-bottom:60px;"></div>
            <div>
                <div id="news">
                  <span id="news_span1"></span>
                    新闻资讯
                  <span id="news_span1"></span>
                </div>
                <div id="news_conent">
                  <div class="news_conent_1">
                    <div>
                      <img src="../../assets/images/newsimg.png" alt="" style="width: 460px;">
                    </div>
                    <div id="news_news">
                       <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="false" >
                          <el-tab-pane name="0">
                            <span slot="label" > 综合 <i id="news_1">/</i></span>
                            <!-- 内容---------------------------------- -->
                            <div v-for="item in newsList" :key="item.articleManageId" style="margin-top:2px;padding:2px" >
                              <router-link :to="{path:'/main/detail', query:{id:item.articleManageId,path:'/main/home'}}" target="_blank" >
                                  <div id="news_news_articleTitle">
                                    <span id="news_articleTitle_1">{{item.articleManageHead}}</span>
                                    <span id="news_articleTitle_2">{{item.articleManageUpdateDate | converTime('YYYY/MM/DD')}}</span>
                                  </div>
                              </router-link>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane name="1">
                            <span slot="label"> 新闻 <i id="news_1">/</i></span>
                            <!-- 内容---------------------------------- -->
                            <div v-for="item in newsList" :key="item.articleManageId" style="margin-top:2px;padding:2px" >
                              <router-link :to="{path:'/main/detail', query:{id:item.articleManageId}}" target="_blank" >
                                  <div id="news_news_articleTitle">
                                    <span id="news_articleTitle_1">{{item.articleManageHead}}</span>
                                    <span id="news_articleTitle_2">{{item.articleManageUpdateDate | converTime('YYYY/MM/DD')}}</span>
                                  </div>
                              </router-link>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane name="2">
                            <span slot="label" > 公告 <i id="news_1">/</i></span>
                            <!-- 内容---------------------------------- -->
                            <div v-for="item in newsList" :key="item.articleManageId" style="margin-top:2px;padding:2px" >
                              <router-link :to="{path:'/main/detail', query:{id:item.articleManageId}}" target="_blank" >
                                  <div id="news_news_articleTitle">
                                    <span id="news_articleTitle_1">{{item.articleManageHead}}</span>
                                    <span id="news_articleTitle_2">{{item.articleManageUpdateDate | converTime('YYYY/MM/DD')}}</span>
                                  </div>
                              </router-link>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane name="3">
                            <span slot="label"> 活动 <i id="news_1">/</i></span>
                            <!-- 内容---------------------------------- -->
                            <div v-for="item in newsList" :key="item.articleManageId" style="margin-top:2px;padding:2px" >
                              <router-link :to="{path:'/main/detail', query:{id:item.articleManageId}}" target="_blank" >
                                  <div id="news_news_articleTitle">
                                    <span id="news_articleTitle_1">{{item.articleManageHead}}</span>
                                    <span id="news_articleTitle_2">{{item.articleManageUpdateDate | converTime('YYYY/MM/DD')}}</span>
                                  </div>
                              </router-link>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane name="4">
                            <span slot="label" > 攻略 </span>
                            <!-- 内容---------------------------------- -->
                            <div v-for="item in newsList" :key="item.articleManageId" style="margin-top:2px;padding:2px" >
                              <router-link :to="{path:'/main/detail', query:{id:item.articleManageId}}" target="_blank" >
                                  <div id="news_news_articleTitle">
                                    <span id="news_articleTitle_1">{{item.articleManageHead}}</span>
                                    <span id="news_articleTitle_2">{{item.articleManageUpdateDate | converTime('YYYY/MM/DD')}}</span>
                                  </div>
                              </router-link>
                            </div>
                          </el-tab-pane>
                          <el-tab-pane name="more" class="more-btn"><span slot="label"><router-link to="/more/news" class="news_more">+查看更多</router-link></span></el-tab-pane>
                        </el-tabs>
                    </div>
                  </div>
                </div>
            </div>

 <!-- 卡牌鉴赏 -->
      <div id="cards_dy" style="margin-top:-60px;margin-bottom:60px;"></div>
            <div>
                <div id="cards">
                  <span id="news_span1"></span>
                    卡牌鉴赏
                  <span id="news_span1"></span>
                </div>
                <div id="news_conent" style="padding-bottom: 30px;">
                  <div id="card_content">
                    <div class="card_content_1">
                      <div class="card_content_11" v-for="(item,index) in cardsList" :key="item.cardId">
                        <img :src="item.cardUrl" alt="">
                        <div id="card_content_text"  @mouseenter="mouseenter(index)" @mouseleave="mouseleave(index)">
                          <div v-show="isShowContentText[index].isShow">
                            <span>{{item.cardName}}</span>
                            <span>{{item.cardDetails}}</span>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <!-- 游戏特色 -->
            <div>
                <div id="cards">
                  <span id="news_span1"></span>
                    游戏特色
                  <span id="news_span1"></span>
                </div>
                <div id="news_conent" style="padding-bottom: 30px;">
                  <div id="game_content" style="height:450px">
                    <carousel-3d
                    :autoplay="true"
                    :autoplayTimeout="2000"
                    :autoplayHoverPause="true"
                    width="270"
                    height="450"
                    border="0"
                    space="300"
                    perspective='0'
                    scaling="120"
                    :controlsVisible="true"
                    controlsPreHtml="&lsaquo;"
                    controlsNextHtml="&rsaquo;"
                    controlWidth='100'
                    controlHeight='120'
                    inverseScaling="260"
                    :count="gameList.length"
                    >
                      <slide :index="i++" v-for="(item,i) in gameList" :key="item.gameCharacteristicId">
                        <el-image
                          style="width:100%;height:100%"
                          :src="item.gameCharacteristicUrl"
                          fit="fit"
                          @click="gameClickHandle(item.gameCharacteristicUrl)"></el-image>
                      </slide>
                    </carousel-3d>

                  </div>
                </div>
            </div>
            <!-- 点击轮播图图片预览 -->
            <el-dialog
              :visible.sync="gameDialogVisible"
              width="55%"
              close="abow_dialog"
              :close-on-click-modal="false"
              style="height:1000px;margin:0 auto;"
              >
                <el-image
                  style="width:100%;margin:0 auto"
                  :src="gameImageUrl"
                  fit="fit"
                  ></el-image>
            </el-dialog>

             <!-- 视听盛宴 -->
             <div id="video_dy" style="margin-top:-60px;margin-bottom:60px;"></div>
            <div id="video">
                <div id="cards">
                  <span id="news_span1"></span>
                    视听盛宴
                  <span id="news_span1"></span>
                </div>
                <div id="video_content" style="margin-top:10px;padding-bottom: 30px;">
                  <div id="video_content_1">
                    <div @click="videocenterHandle('videocenter')">
                      <span class="iconfont icon-shipin" style="font-size:35px;"></span>
                      <span style="font-size: 14px;">视频中心</span>
                      <span style="font-size: 1px;">VIDEO CENTRE</span>
                    </div>
                    <div  @click="videocenterHandle('wallpaper')">
                      <span class="iconfont icon-bianji" style="font-size:27px;"></span>
                      <span style="font-size: 14px;margin-top:4px;">原画壁纸</span>
                      <span style="font-size: 1px;">WALLPAPER</span>
                    </div>
                  </div>
                  <div id="video_content_2">
                    <div id="video_content_wallpaper" v-show="isShowWallpaper">
                      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                        <!-- slides -->
                        <swiper-slide v-for="item in wallpaperList" :key="item.audioVisualFeastId">
                          <el-image
                          style="width:340px;heiight:190px"
                          :src="item.audioVisualFeastUrl"
                          fit="fit"
                          @click="imageClickHandle(item.audioVisualFeastUrl)"
                          ></el-image>
                        </swiper-slide>
                        <div class="swiper-pagination"  slot="pagination"></div>
                      </swiper>
                      <div id="video_content_3" @click="videoClickHandle('wallpaler')">
                          <i class="el-icon-circle-plus-outline"></i>
                          <span>点击查看更多</span>
                      </div>
                    </div>
                    <div id="video_content_video"  v-show="isShowVideo">
                        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
                        <!-- slides -->
                        <swiper-slide v-for="(item,index) in videoList" :key="item.audioVisualFeastId">
                          <video-player
                            class="vjs-custom-skin"
                            ref="videoPlayer"
                            :options="playerOptions[index]"
                            :playsinline="true"
                            @play="onPlayerPlay($event,item.audioVisualFeastUrl)"
                            style="width:337px">
                          </video-player>
                        </swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination"  slot="pagination" style="bottom:-2px"></div>
                      </swiper>
                      <div id="video_content_3" @click="videoClickHandle('video')">
                          <i class="el-icon-circle-plus-outline"></i>
                          <span>点击查看更多</span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>

            <!-- 关注我们 -->
            <div id="concern_dy" style="margin-top:-60px;margin-bottom:60px;"></div>
            <div id="concern">
                <div id="cards">
                  <span id="news_span1"></span>
                    关注我们
                  <span id="news_span1"></span>
                </div>
              <div >
              <div id="concern_1">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              </div>
            </div>

            <!-- 底部栏 -->
            <div id="bottom">
              <div class="bottom_1">
                <span>用户协议</span>
                <span class="bottom_1_1">|</span>
                <span>隐私政策</span>
                <span class="bottom_1_1">|</span>
                <span>家长监护</span>
                <span class="bottom_1_1">|</span>
                <span>关于我们</span>
                <span class="bottom_1_1">|</span>
                <span>加入我们</span>
              </div>
              <div class="bottom_2">
                <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防上当受骗。适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活。</p>
                <p>适龄提示：本游戏适合17岁（含）以上玩家娱乐 陕公网安备000000000000000号 增值电信业务经营许可证：陕00-00000000</p>
                <p>陕西星环网络科技有限公司 地址：陕西省西安市雁塔区电子正街南段 电话：029-88888888</p>
              </div>
            </div>
        </div>
        <!-- 侧边栏 -->
        <transition name="fade">
        <div class="aside" v-if="isfold">
            <div id="aside_div" >
                <span @click="foldHandle()"></span>
                <span :class="active == '#home_dy' ? 'active' : ''"   @click="toTarget('#home_dy')"></span>
                <img src="../../assets/images/asideerm.png" alt="" >
                <span @click="anzhuoHandle()"></span>
                <span @click="pinnguoHandle()"></span>
            </div>
        </div>
        </transition>
        <transition name="fade">
          <div class="asidefold" v-if="!isfold">
            <div class="fold_div" @click="expendHandle()"></div>
          </div>
        </transition>
        <!-- 视频点击查看更多 -->
        <el-dialog
          :visible.sync="moreVideoDialogVisible"
          width="70%"
          close="abow_dialog"
          :close-on-click-modal="false"
          @close="moreVideoDialogclose()"
          :modal="true"
         >
          <video-player
            class="vjs-custom-skin"
            ref="videoPlayer"
            :options="moreVideoplayerOptions"
            :playsinline="false"
            @play="onPlayerPlay()"
            @pause="onPlayerPause($event)"
            >
          </video-player>
        </el-dialog>
        <!-- 原画点击查看更多 -->
        <el-dialog
          :visible.sync="morePaperDialogVisible"
          width="55%"
          close="abow_dialog"
          :close-on-click-modal="false"
          @close="moreVideoDialogclose()"
          :modal="true"
         >
         <el-image
            style="width:100%;"
            :src="imageUrl"
            fit="fit"
            ></el-image>
        </el-dialog>
    </div>
</template>
<script>
// import mainjs from '@/mixins/main/Main.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

// import '../src/custom-theme.css'
// videojs hotkeys plugin
import Qs from 'qs'
export default {
  // mixins: [mainjs],
  components: {
    Carousel3d,
    Slide,
    swiper,
    swiperSlide,
    videoPlayer
  },

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
      playerOptions: [],
      videoplayerOptions: [],
      // 定位
      active: '#home',
      scrollIntoViewOptions: {
        block: 'start',
        behavior: 'smooth'
      },
      // 侧边栏折叠
      isfold: true,
      isShowContentText: [{ isShow: false }, { isShow: false }, { isShow: false }],
      // 视频查看更多
      moreVideoDialogVisible: false,
      // 原画查看更多
      moreWallpaperDialogVisible: false,
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      // 新闻
      newsList: [],
      // 卡牌
      cardsList: [],
      // 游戏
      gameList: [],
      // 原画
      wallpaperList: [],
      // 视频
      videoList: [],
      moreVideoplayerOptions: {
        height: '600',
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          // mp4
          src: ''
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }]
      },
      morePaperDialogVisible: false,
      imageUrl: '',
      gameDialogVisible: false,
      gameImageUrl: ''

    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    // 视频
    // console.log('this is current player instance object', this.player)
    // 定位
    document.getElementById('home_dy').scrollIntoView()
    // 一次性计算赋值，减少滚动计算节点位置次数
    this.distance_team = document.querySelector('#news').offsetTop - 120
    this.distance_contact = document.querySelector('#cards').offsetTop - 120
    this.distance_join = document.querySelector('#video').offsetTop - 120
    this.distance_join = document.querySelector('#concern').offsetTop - 120
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
  created () {
    // ---------------新闻资讯-------------
    this.getnewsList()
    // ---------------卡牌鉴赏------------
    this.getcardsList()
    // -------------游戏特色--------------
    this.getgameList()
    // -------------原画-----------------
    this.getwallpaperList()
    // --------------视频-------------
    this.getvideoList()
  },
  watch: {
    moreVideoDialogVisible (v) {
      console.log(v)
    }
  },
  methods: {
    // --------------------
    gameClickHandle (url) {
      console.log(url)
      this.gameImageUrl = url
      this.gameDialogVisible = true
    },
    // ---------------------------------
    click () {
      console.log(1)
    },
    goHandle (e) {
      console.log(e)
      window.location.href = e
    },
    getImgURL () {

    },
    // 新闻资讯---------
    async getnewsList () {
      let info = {
        articleManageStatus: 1
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res.data.items)
      this.newsList = res.data.items.splice(0, 5)
    },
    // 卡牌鉴赏------------
    async getcardsList () {
      let info = {
        cardStatus: 1
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/card/findCard', data)
      console.log('cardsList', res.data.items)
      this.cardsList = res.data.items
    },
    // 游戏特色---------
    async getgameList () {
      let info = {
        gameCharacteristicStatus: 1
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/findGameCharacteristic', data)
      console.log('gamesList', res.data.items)
      this.gameList = res.data.items
    },
    // 原画----------------
    async getwallpaperList () {
      let info = {
        audioVisualFeastType: 1,
        audioVisualFeastStatus: 1
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/audioVisualFeast/findAudioVisualFeast', data)
      console.log('wallpaperList', res.data.items)
      this.wallpaperList = res.data.items
    },
    // 视频-------------------
    async getvideoList () {
      let info = {
        audioVisualFeastType: 0,
        audioVisualFeastStatus: 1
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/audioVisualFeast/findAudioVisualFeast', data)
      console.log('videoList', res.data.items)
      this.videoList = res.data.items
      this.videoList.map((item) => {
        console.log(item.audioVisualFeastUrl)
        const obj = {
          height: '190',
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            // mp4
            src: item.audioVisualFeastUrl
          }]
        }
        this.playerOptions.push(obj)
      })
    },
    async handleClick (e) {
      let info = {
        articleManageStatus: 1
      }
      console.log(typeof e.paneName)
      if (e.paneName !== '0') {
        info.articleManageType = e.paneName
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res.data.items)
      this.newsList = res.data.items.splice(0, 5)
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
    onPlayerPlay (e, player) {
      console.log('player play!', player, e)
      if (!player) return true
      e.pause()
      this.moreVideoplayerOptions.sources[0].src = player
      this.moreVideoDialogVisible = true
      // this.$refs.videoPlayer.player.pause()
    },
    moreVideoDialogclose () {
      // this.moreVideoplayerOptions = []
      this.moreVideoDialogVisible = false
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
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
    onPlayerCanplaythrough () {

    },
    onPlayerPlaying () {

    },
    onPlayerTimeupdate () {

    },
    onPlayerWaiting () {

    },
    onPlayerEnded () {

    },
    // 定位
    toTarget (target) {
      console.log(target)
      this.active = target
      const toElement = document.querySelector(target)
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
      console.log('收起')
      this.isfold = false
    },
    // 展开
    expendHandle () {
      this.isfold = true
    },
    // 安卓下载
    anzhuoHandle () {
      console.log('安卓')
    },
    // 苹果下载
    pinnguoHandle () {
      console.log('苹果')
    },
    // 新闻详情 /main/detail
    newsDetailtoggleHandle () {
      console.log('/main/detail')

      this.$router.push({ path: '/main/detail' })
    },
    mouseenter (index) {
      console.log('鼠标进入', index)
      // this.isShowContentText = true
      console.log(this.isShowContentText[index])

      this.isShowContentText[index].isShow = true
      console.log(this.isShowContentText[index])
    },
    mouseleave (index, event) {
      console.log('鼠标离开', index)
      this.isShowContentText[index].isShow = false
    },
    touchmove (event) {
      console.log('移动', event)
    },
    // 视频点击查看更多
    videoClickHandle (msg) {
      this.$router.push({ path: '/main/more', query: { msg } })
      // console.log('msg', msg)
      // if (msg === 'wallpaler') { this.moreWallpaperDialogVisible = true }
      // if (msg === 'video') { this.moreVideoDialogVisible = true }
    },
    imageClickHandle (url) {
      console.log(url)
      this.imageUrl = url
      this.morePaperDialogVisible = true
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
  background-repeat: no-repeat;
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 1920px;
    height: 100%;
    background-image: url(../../assets/images/daohang.png);
    background-size: cover;
    background-repeat: no-repeat;
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
    // 侧边栏
    .aside{
      position: fixed;
      top: 350px;
      right: -4px;
      width: 188px;
      height: 375px;
      // background-color: #fff;
      background-image: url(../../assets/images/aside1.png);
      background-repeat: no-repeat;

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
          width: 34px;
          height: 75px;
          // background-color: #fff;
          color: #00ccff;
        }
        span:nth-child(2){
          position: absolute;
          width: 30px;
          height: 20px;
          // background-color: #fff;
          top: 355px;
          left: 53%;
          color: #00ccff;
        }
        img{
          position: absolute;
          top: 60px;
          left: 35px;
          width: 147px;
        }
        span:nth-child(4){
          position: absolute;
          width: 153px;
          height: 48px;
          // background-color: rgb(233, 21, 21);
          background-image: url(../../assets/images/anzhuo.png);
          background-repeat: no-repeat;
          top: 230px;
          left: 19%;
          color: #00ccff;
        }
        span:nth-child(5){
          position: absolute;
          width: 153px;
          height: 48px;
          // background-color: rgb(233, 21, 21);
          background-image: url(../../assets/images/pingguo.png);
          background-repeat: no-repeat;
          top: 288px;
          left: 19%;
          color: #00ccff;
        }
      }

    }
    .asidefold{

      // background-color: red;
      position: fixed;
      top: 494px;
      right: -4px;
      :hover{
        cursor: pointer;
      }
      .fold_div{
        width: 40px;
        height: 83px;
        background-image: url(../../assets/images/expend.png);
        background-repeat: no-repeat;
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
      background-repeat: no-repeat;
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
        background-repeat: no-repeat;
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
     background-repeat: no-repeat;
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
    left: 35%;
    width: 90px;
    height: 94px;
    cursor: pointer;
  }
   div:nth-child(2){
    position: absolute;
    top: 90px;
    left: 60%;
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
#concern{
  position: relative;
  overflow: hidden;
  height: 500px;
}
#concern_1{
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-52%);
  padding: 70px 0 0 70px;
  height: 250px;
  width: 1200px;

  div{
    width: 80px;
    height: 105px;
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
    background-position: 0 0;
  }
  div:nth-child(3){
    position: absolute;
    top: 70px;
    left: 620px;
    background-image: url(../../assets/images/QQ.png);
    background-repeat: no-repeat;
    background-position: 0 0;

  }
  div:nth-child(4){
    position: absolute;
    top: 70px;
    left: 780px;
    background-image: url(../../assets/images/TAP.png);
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  div:nth-child(5){
    position: absolute;
    top: 70px;
    left: 930px;
    background-image: url(../../assets/images/kf.png);
    background-repeat: no-repeat;
    background-position: 0 0;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#card_content{
  position: relative;
  height: 450px;
  .card_content_1{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    height: 419px;
    // background-color: pink;

      // div:hover{

      // }
    div{
      position: relative;
      float: left;
      width: 33%;
      height: 500px;
      img{
        width: 100%;
      }
    }
    #card_content_text{
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translateX(-60%);
      width: 200px;
      height: 120px;
      // background-color: pink;
      div{
        margin: 10px 25px;
        width: 200px;
        height: 100px;
        background-color: rgba(240,240,240,.2);
        text-align: center;
        color: #fff;
        span{
          display: block;
          &:nth-child(1){
            font-size: 30px;
            margin-top: 20px;
            border-radius: 15px;
          }
        }

      }
    }
  }
  .card_content_11:hover{
        cursor: pointer;
        transform: scale(1.1);
        z-index: 5;
      }

}
#moreVideo{
  height: 100%;
  :hover{
    cursor: pointer;
  }
  .moreVideoitems{
    float: left;
    width: 30%;
    height: 200px;
    margin-left: 40px;
    margin-top: 40px;
    // background-color: pink;
  }
}
#news_news_articleTitle{
  position: relative;
  width: 440px;
  height: 25px;
  // background-color: pink;
  line-height: 25px;
  #news_articleTitle_1{
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 700;
    color: #475669;
    font-size: 14px;
  }
  #news_articleTitle_2{
    position: absolute;
    top: 0;
    right: 10px;
    font-weight: 700;
    color: #475669;
    font-size: 14px;
  }
}

}
</style>
