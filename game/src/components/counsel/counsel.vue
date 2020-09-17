<template>
  <div class="counsel">
    <m-header top="90px"></m-header>
    <header class="header_bg"></header>
    <crumbs cnTitle="咨询中心" enTitle="counsel center" currentTitle="咨询中心"></crumbs>

    <div class="cont">
      <div class="news_t">
        <slide :slides="slides"></slide>
      </div>

      <div class="news_info">
        <div class="news_info_arts">
          <div class="arts_item" v-for="item in news">
            {{item.title}}
            <div class="arts_item_img">
              <img :src="item.img"/>
            </div>
            <div class="arts_item_cont">
              <p>
                <span>{{item.type}}</span>
                {{item.title}}
              </p>
              <p>
                {{item.content}}
              </p>
              <p>{{item.author}} - {{item.updateTime}}</p>
            </div>
          </div>
        </div>
        <div class="news_info_games"></div>
      </div>
    </div>

    <m-footer nav="counsel"></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Crumbs from 'base/crumbs/crumbs'
  import Slide from 'base/slide/slide'
  import { getNews } from 'api/news'

  export default {
    data () {
      return {
        news: null,
        slides: [
          {
            title: '风靡全球的3D沙盒大作《我的世界》10月12日公测开启！',
            img: 'http://news.bluestacks.cn//public/upload/images/20170630/recson_201706301121582019870053538.jpg'
          },
          {
            title: '风靡全球的3D沙盒大作《我的世界》10月12日公测开启！女神刘涛唯一指定代言 策略手游《胡莱三国2》6月29日盛大公测',
            img: 'http://news.bluestacks.cn//public/upload/images/20171012/recson_201710121120219276630036122.jpg'
          },
          {
            title: '风靡全球的3D沙盒大作《我的世界》10月12日公测开启！女神刘涛唯一指定代言 策略手游《胡莱三国2》6月29日盛大公测初音公主十周岁生辰，助力《神无月》全次元8月31日开测！',
            img: 'http://news.bluestacks.cn//public/upload/images/20170923/recson_201709231720539279150069885.jpg'
          },
          {
            title: '风靡全球的3D沙盒大作《我的世界》10月12日公测开启！女神刘涛唯一指定代言 策略手游《胡莱三国2》6月29日盛大公测初音公主十周岁生辰，助力《神无月》全次元8月31日开测！影游联动 《轩辕传奇手游》与《鬼吹灯之黄皮子坟》达成战略合作张靓颖倾情代言 光荣正版授权 《三国志2017》8月30日荣耀上线',
            img: 'http://news.bluestacks.cn//public/upload/images/20170804/recson_201708042226435589910090561.jpg'
          },
          {
            title: '风靡全球的3D沙盒大作《我的世界》10月12日公测开启！女神刘涛唯一指定代言 策略手游《胡莱三国2》6月29日盛大公测初音公主十周岁生辰，助力《神无月》全次元8月31日开测！影游联动 《轩辕传奇手游》与《鬼吹灯之黄皮子坟》达成战略合作张靓颖倾情代言 光荣正版授权 《三国志2017》8月30日荣耀上线',
            img: 'http://news.bluestacks.cn//public/upload/images/20170830/recson_201708301406352782780061665.jpg'
          }
        ]
      }
    },
    components: {
      MHeader,
      MFooter,
      Crumbs,
      Slide
    },
    created () {
      this.news = getNews()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .counsel
    .header_bg
      width: 100%
      height: 235px
      background-image: url('download_nav.jpg');
      background-size: cover
      background-position: center center
    .cont
      margin: 0 auto
      .news_info
        display: flex
</style>
