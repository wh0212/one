<template>
    <div id="root">
          <div id="mian">
            <div id="main_top">
              <div class="main_top_1">
                <div class="main_top_content" >
                  <div class="main_top_content1">
                    视听盛宴
                  </div>
                  <div class="main_top_content2" @click="videoClickHandle(0)" :style="isvideoclick?'color: #6FA6AA;':'color: #000;'">
                    <span class="iconfont icon-shipin"></span>
                    <span >视频中心</span>
                    <span >VIDEO CENTER</span>
                  </div>
                  <div class="main_top_content3" @click="wallpaperClickHandle(1)" :style="isWallparperclick?'color: #6FA6AA;':'color: #000;'">
                    <span class="iconfont icon-bianji"></span>
                    <span >原画壁纸 </span>
                    <span >WALL PAPER</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="main_content">
              <div class="main_content1" v-if="isvideo">
                <div v-for="(item,index) in videoList" :key="item.audioVisualFeastId" class="main_content11">
                  <video-player
                    class="vjs-custom-skin"
                    ref="videoPlayer"
                    :options="playerOptions[index]"
                    :playsinline="true"
                    @play="onPlayerPlay($event,item.audioVisualFeastUrl)"
                    style="width:420px">
                </video-player>
                </div>
              </div>
              <div class="main_content1" v-if="!isvideo">
                <div class="main_content11" v-for="item in wallpaperList" :key="item.audioVisualFeastId">
                  <el-image
                    style="width: 100%;"
                    :src="item.audioVisualFeastUrl"
                    fit="cover"
                    :preview-src-list="srcList"
                    ></el-image>
                </div>
              </div>
              <!-- 分页 -->
             <el-pagination
                :background="true"
                layout="prev, pager, next"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                @prev-click="prevClickChange"
                @next-click="nextClickChange"
                :current-page="currentPage4"
                :page-sizes="[5,10,15]"
                :total="totalNum">
                </el-pagination>
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

            </div>

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

            <!-- <el-dialog
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
            </el-dialog> -->

    </div>
</template>
<script>
import Qs from 'qs'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      currentPage4: 1,
      totalNum: null,
      pageSize: 9,
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
      wallpaperList: [],
      isvideo: true,
      playerOptions: [],
      moreVideoDialogVisible: false,
      srcList: [],
      isvideoclick: false,
      isWallparperclick: false
    }
  },
  mounted () {
    console.log('mounted', window.scrollX, window.scrollY)
    // document.documentElement.scrollTop = 0
    document.getElementById('main_top').scrollIntoView()
  },
  created () {
    this.getvideolist()
    console.log(this.$route.query.msg)
    if (this.$route.query.msg === 'video') {
      this.isvideoclick = true
      this.isWallparperclick = false
      this.getvideolist(0)
    }
    if (this.$route.query.msg === 'wallpaler') {
      this.isvideoclick = false
      this.isWallparperclick = true
      this.getvideolist(1)
    }
    this.menu()
  },
  methods: {
    menu () {
      window.scrollTo(0, 0)
    },
    // 视频
    videoClickHandle (e) {
      this.isvideoclick = true
      this.isWallparperclick = false
      console.log('视频', this.isvideoclick, this.isWallparperclick)
      this.getvideolist()
    },
    async getvideolist (e) {
      let info = {
        audioVisualFeastStatus: 1,
        audioVisualFeastType: 0,
        pageSize: 9
      }
      if (e) {
        info.audioVisualFeastType = e
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/audioVisualFeast/findAudioVisualFeast', data)
      console.log(res.data)
      if (e) {
        if (e === 0) {
          this.videoList = res.data.items
          this.videoList.map((item) => {
            console.log(item.audioVisualFeastUrl)
            const obj = {
              height: '250',
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
          this.totalNum = res.data.totalNum
          this.isvideo = true
        } else {
          this.wallpaperList = res.data.items
          this.totalNum = res.data.totalNum
          res.data.items.forEach(element => {
            this.srcList.push(element.audioVisualFeastUrl)
          })
          this.isvideo = false
        }
      } else {
        this.videoList = res.data.items
        this.videoList.map((item) => {
          console.log(item.audioVisualFeastUrl)
          const obj = {
            height: '200',
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
        this.totalNum = res.data.totalNum
        this.isvideo = true
      }
    },
    // 原画
    wallpaperClickHandle (e) {
      this.isvideoclick = false
      this.isWallparperclick = true
      console.log('原画', this.isvideoclick, this.isWallparperclick)
      this.getvideolist(e)
    },
    // 分页
    handleSizeChange (size) {
      this.pageSize = size
      console.log('handleSizeChange', size)
      this.paginationHandle()
      // pageSize
    },
    handleCurrentChange (size) {
      console.log('handleCurrentChange', size)
      // currentPage
      this.currentPage4 = size
      this.paginationHandle()
    },
    prevClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.paginationHandle()
    },
    nextClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.paginationHandle()
    },
    // 视频
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
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }

}
</script>
<style lang="less" scoped>
#root{
  position: relative;
  height: 2000px;
  #main_top{
    position: relative;
    width: 100%;
    height: 700px;
    // background-color: pink;
    background-image: url(../../assets/images/morevideo1.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    .main_top_1{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 250px;
      // background-color: pink;
      background-image: url(../../assets/images/morevideo.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: auto 100%;
      font-size: 22px;
      .main_top_content{
        position: relative;
        width: 100%;
        height: 100%;
        .main_top_content1{
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translateX(-35%)
        }
        .main_top_content2{
          position: absolute;
          top: 45%;
          left: 40%;
          width: 100px;
          height: 70px;
          // background-color: pink;
          text-align: center;
          padding-top: 20px;

          span{
            display: block;
            &:nth-child(1){
              margin-top: -15px;
              font-size: 40px;
            }
            &:nth-child(2){
              font-size: 16px;
              margin-top: -5px;
            }
            &:nth-child(3){
              font-size: 12px;
            }
          }
        }
        .main_top_content2:hover{
            cursor: pointer;
        }
        .main_top_content3{
          position: absolute;
          top: 48%;
          left: 57%;
          width: 100px;
          height: 70px;
          // background-color: pink;
          text-align: center;
          padding-top: 20px;

          span{
            display: block;
            &:nth-child(1){
              margin-top: -15px;
              font-size: 30px;
            }
            &:nth-child(2){
              font-size: 16px;
              margin-top: 0;
            }
            &:nth-child(3){
              font-size: 12px;
            }
          }
        }
        .main_top_content3:hover{
            cursor: pointer;
        }
      }
    }
  }
  .main_content{
    position: relative;
    width: 100%;
    height: 1300px;
    margin-top: 60px;
    // background-color: pink;
    .main_content1{
      width: 1400px;
      height: 100%;
      // background-color: green;
      margin: 0 auto;
      .main_content11{
        float: left;
        width: 30%;
        height: 250px;
        margin: 23px;
        // background-color: pink;
      }
    }
  }
    #bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: #000;
        color: #fff;
        text-align: center;
        padding-top: 20px;
        margin-top: 30px;
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
  .el-pagination{
    position: absolute;
    bottom: 300px;
    left: 50%;
    transform: translateX(-50%);
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #6FA6AA;
    color: #FFF;
}
/deep/.el-image-viewer__close {
    font-size: 50px;
}
}
</style>
