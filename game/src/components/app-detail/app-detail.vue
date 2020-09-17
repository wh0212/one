<template>
  <section class="app_detail">
    <m-header top="90px" ref="mHeader"></m-header>
    <header class="header_bg"></header>
    <crumbs cnTitle="应用中心" enTitle="application center" currentTitle="应用中心"></crumbs>
    <div class="cont">
      <div class="detail_t">
        <div class="detail_t_t">
          <div class="t_t_img">
            <img :src="sort.icon_url"/>
          </div>
          <div class="t_t_m">
            <h3>{{sort.platform_name_2}}</h3>
            <div>
              <app-star :level="sort.level"></app-star>
            </div>
            <p class="t_t_m_type" v-for="type in sort.type">{{type}}</p>
            <p class="t_t_m_p2">{{downLoadCount}}万次下载</p>
            <p class="t_t_m_p2">
              更新: {{updateTime}}&nbsp;&nbsp;&nbsp;版本: {{sort.version}}&nbsp;&nbsp;&nbsp;大小: {{sort.size}}</p>
            <ul ref="qd">
              <li>渠道选择:</li>
              <li :class="{'cur':0===index}" @click="selectQudao(index)" v-for="(item, index) in sortDetails">
                {{item.platform_zh_name}}
              </li>
            </ul>
          </div>

          <div class="yj_download">
            <div class="yj_down"><a :href="sort.download_url">一键下载</a></div>
            <div class="az_phone" @mouseover="mouseOver" @mouseout="mouseOut">安装到手机</div>
            <div class="yj_show" ref="yjShow" @mouseout="mouseOut">
              <div>
                <img :src="sort.downloadqrcode_url"/>
              </div>
              <p>请用浏览器扫描</p>
            </div>
          </div>
        </div>

        <ul class="detail_nav" ref="detailNav">
          <li class="cur" @click="selectLb(0)">详细</li>
          <li @click="selectLb(1)">评论</li>
        </ul>
      </div>
    </div>

    <section class="detail_info">
      <div class="cont">
        <div class="detail_des" ref="detailDes">
          <detail-slide :screenshots="sort.screenshots"></detail-slide>
          <div class="detail_p1">
            <p>小编点评</p>
            <p>{{sort.instruction}}</p>
          </div>
          <div class="detail_p1">
            <p>内容提要</p>
            <p>{{sort.description}}</p>
          </div>
          <p class="detail_zw">&nbsp;</p>
        </div>
        <div class="detail_comments" ref="detailComments">
          <div class="comment_form">
            <p>撰写评论</p>
            <div class="comment_stars">
              <app-star></app-star>
              <p>点击形星来评分</p>
            </div>
            <ul class="sub_tj">
              <li><span>标题:</span><input placeholder="请输入标题（必填，限20字）" type="text"/></li>
              <li><span>评论:</span><input placeholder="请留下评论（选填，限100字）" type="text"/></li>
            </ul>
            <div class="tijiao"><span>提交</span></div>
          </div>

          <div class="comments_infos">
            <ul>
              <li v-for="item in comments">
                <p>{{item.title}}</p>
                <p>匿名-{{item.uptime}}</p>
                <p>{{item.content}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <router-view></router-view>
    <m-footer nav="download" ref="mFooter"></m-footer>
  </section>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Crumbs from 'base/crumbs/crumbs'
  import { getSortDetail } from 'api/sort'
  import AppStar from 'base/app-star/app-star'
  import DetailSlide from 'components/detail-slide/detail-slide'

  export default {
    mounted () {
      // 设置导航
      console.log(11)
      this.$refs.mHeader.setNavHover(2)

      setTimeout(() => {
        this.$refs.mHeader.addAni()
      }, 300)

      setTimeout(() => {
        this.$refs.mHeader.logoAni()
      }, 500)

      setTimeout(() => {
        this.$refs.mFooter.addAni()
      }, 800)
    },
    computed: {
      downLoadCount () {
        return this.sort.download_count / 10000
      },
      updateTime () {
        return this.sort.uptime ? this.sort.uptime.substr(0, 10) : ''
      }
    },
    data () {
      return {
        comments: [],
        sortDetails: [],
        sort: [],
        platform: [],
        id: 0,
        currentIndex: 0,
        screenshots: null
      }
    },
    components: {
      MHeader,
      MFooter,
      Crumbs,
      AppStar,
      DetailSlide
    },
    created () {
      this.id = this.$route.params.id
      this.getSortDetail()
      console.log(this.comments)
    },
    methods: {
      selectLb (num) {
        console.log(num)
        let objs = this.$refs.detailNav.children
        objs = Array.prototype.slice.call(objs)
        let _this = this
        objs.forEach((item, i) => {
          objs[i].className = ''

          if (i === num) {
            objs[i].className = 'cur'
          }
          if (num === 0) {
            _this.$refs.detailComments.style.display = 'none'
            _this.$refs.detailDes.style.display = 'block'
          } else {
            _this.$refs.detailComments.style.display = 'block'
            _this.$refs.detailDes.style.display = 'none'
          }
        })
      },
      mouseOver () {
        this.$refs.yjShow.style.display = 'block'
      },
      mouseOut () {
        this.$refs.yjShow.style.display = 'none'
      },
      selectQudao (num) {
        let objs = this.$refs.qd.children
        objs = Array.prototype.slice.call(objs)
        objs.forEach((item, index) => {
          objs[index].className = ''
          if (index !== 0 && index === (num + 1)) {
            objs[index].className = 'cur'
          }
        })

        // 修改数组索引
        this.currentIndex = num
        this.sort = this.sortDetails[this.currentIndex]
      },
      getScreenshots () {
        return (this.screenshots = this.sort.screenshots)
      },
      getSortDetail () {
        getSortDetail(this.id).then((res) => {
          if (res.status === 200 && res.statusText === 'OK') {
            const data = JSON.parse(res.request.response)
            this.comments = data.result.comments
            this.sortDetails = data.result.game_data
            this.sort = this.sortDetails[this.currentIndex]
            this.platform = data.result.platform
            console.log(this.comments)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .app_detail
    .header_bg
      width: 100%
      height: 235px
      background-image: url('download_nav.jpg');
      background-size: cover
      background-position: center center
    .cont
      margin: 0 auto
      .detail_t
        display: flex
        flex-direction: column
        background: #3b3e64
        padding-bottom: 20px
        margin-top: 30px
        .detail_t_t
          width: 100%
          display: flex
          text-align: left
          justify-content: space-between
          padding-top: 20px
          .t_t_img
            width: 164px
            height: 164px
            padding-left: 20px
            padding-right: 20px
            img
              width: 100%
              height: 100%
          .t_t_m
            flex: 1
            h3
              font-size: 20px
              color: #fff
              line-height: 32px
            .t_t_m_type
              font-size: 14px
              color: #fff
              background: #2a2e56
              display: inline-block
              padding: 4px 10px
              margin-top: 6px
              margin-bottom: 6px
            .t_t_m_p2
              font-size: 12px
              color: #98a6d0
              line-height: 18px
            ul
              display: flex
              margin-top: 8px
              li
                font-size: 14px
                color: #fff
                padding: 6px 12px;
                cursor: pointer
                box-sizing: border-box
                background: #2b4c80
                border: 1px solid #0084f3
                margin-right: 8px
              li:first-child
                font-size: 14px
                color: #fff
                padding-left: 0
                background: none
                border: 0
              li.cur
                background: #0084f3
                border: 1px solid #0084f3
          .yj_download
            margin-right: 60px
            padding-top: 20px
            position: relative
            div.yj_down
              width: 180px
              height: 45px
              background: #95be0e
              color: #fff
              text-align: center
              line-height: 45px
              font-size: 24px
              transform: skewX(-30deg)
              cursor: pointer
              a
                color: #fff
                transform: skewX(30deg)
                display: inline-block
            div.az_phone
              font-size: 18px
              color: #fff
              text-align: center
              height: 25px
              background: url('erweima_icon2.png') no-repeat
              line-height: 25px
              margin-top: 12px
              cursor: pointer
              margin-left: 18px
            div.yj_show
              width: 112px
              height: 140px
              display: flex
              flex-direction: column
              justify-content: center
              border: 1px solid #95be0e
              position: absolute
              left: 50%
              top: 110px
              transform: translateX(-58%)
              display: none
              div
                width: 110px
                height: 110px
                background: #fff
                position: relative
                margin: 0 auto
                img
                  width: 95%
                  height: 95%
                  display: block
                  position: absolute
                  left: 50%
                  top: 50%
                  transform: translate(-50%, -50%)
            p
              font-size: 12px
              line-height: 32px
              text-align: center
              color: #fff

        .detail_nav
          width: 450px
          border-bottom: 4px #070c32 solid
          box-shadow: 0 1px 0 #4d5572
          padding-bottom: 10px
          margin: 0 auto
          display: flex
          li
            width: 50%
            text-align: center
            height: 38px
            line-height: 38px
            color: #98a6d0
            cursor: pointer
          li.cur
            background: url('xuanzhong_l.png') no-repeat
            background-position: center bottom
            color: #0084f3
    .detail_info
      display: flex
      width: 100%
      margin-top: 20px
      padding-bottom: 30px
      .detail_des
        .detail_p1
          background: #282a4e
          width: 100%
          margin: 0 auto
          p
            text-align: left
            width: 95%
            margin: 0 auto
          p:first-child
            font-size: 18px
            line-height: 52px
            color: #fff
          p:last-child
            font-size: 14px
            color: #6c7593
            line-height: 24px
        .detail_zw
          height: 20px
          background: #282a4e
    .detail_comments
      display: none
      background: #262d4d
      padding-top: 30px
      .comment_form
        width: 80%
        border: 1px solid #fff
        background: #202747
        margin: 0 auto
        p
          font-size: 18px
          text-align: center
          color: #fff
          margin-top: 30px
        .comment_stars
          display: flex
          width: 162px
          margin: 0 auto
          justify-content: center
          flex-direction: column
          margin-top: 15px
          p
            font-size: 16px
            color: #6c7997
            margin-top: 20px
        .sub_tj
          width: 90%
          margin: 30px auto
          li
            width: 100%
            font-size: 14px
            color: #6c7997
            display: flex
            margin-top: 20px
            span
              width: 60px
              height: 50px
              line-height: 50px

            input
              background: #283155
              color: #6c7997
              width: 100%
              height: 50px
              border: none
              outline: none
              font-size: 14px
              padding: 0 10px
              display: inline-block
              line-height: 50px

        .tijiao
          width: 140px
          height: 32px
          line-height: 32px
          border: 1px solid #0084f3
          font-size: 14px
          color: #fff
          margin: 0 auto
          transform: skewX(-30deg)
          margin-top: 60px
          margin-bottom: 120px
          span
            transform: skewX(30deg)
            display: inline-block
    .comments_infos
      width: 80%
      margin: 30px auto
      padding-bottom: 30px
      ul
        li
          text-align: left
          p
            font-size: 14px
            line-height: 24px
            color: #6c7997
          p:first-child
            font-size: 16px
            color: #fff
            line-height: 32px
</style>
