<template>
  <section class="sort">
    <m-header top="90px" ref="mHeader"></m-header>
    <header class="header_bg"></header>
    <cont-nav :navs="setNavs" @selectGameClass="setGameClass"></cont-nav>
    <crumbs cnTitle="应用中心" enTitle="application center" currentTitle="应用中心"></crumbs>

    <articles :apps="apps" @selectItem="toDetail"></articles>

    <m-footer nav="sort" ref="mFooter"></m-footer>
    <router-view></router-view>
  </section>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import MFooter from 'components/m-footer/m-footer'
  import Crumbs from 'base/crumbs/crumbs'
  import ContNav from 'base/cont-nav/cont-nav'
  import { getSortList } from 'api/sort'
  import Articles from 'base/articles/articles'

  export default {
    mounted() {
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
    data () {
      return {
        apps: [],
        listNames: [
          ['latest_game_first', 'latest_game_second', 'latest_game_third', 'latest_game_fourth'],
          ['bluestacks_game_first', 'bluestacks_game_second', 'bluestacks_game_third', 'bluestacks_game_fourth'],
          ['tencent_game_first', 'tencent_game_second', 'tencent_game_third', 'tencent_game_fourth'],
          ['netease_game_first', 'netease_game_second', 'netease_game_third', 'netease_game_fourth'],
          ['erciyuan_game_first', 'erciyuan_game_second', 'erciyuan_game_third', 'erciyuan_game_fourth']
        ],
        listNameIndex: 0
      }
    },
    computed: {
      setNavs () {
        return ['精品游戏', '蓝叠游戏', '腾讯游戏', '网易游戏', '二次元游戏']
      }
    },
    components: {
      MHeader,
      MFooter,
      Crumbs,
      ContNav,
      Articles
    },
    created () {
      this._setApps()
    },
    methods: {
      toDetail (id) {
        this.$router.push({
          path: `/sort/${id}`
        })
      },
      setGameClass (index) {
        this.listNameIndex = index
      },
      _setApps () {
        const _this = this
        this.listNames[_this.listNameIndex].forEach((item) => {
          getSortList(item).then((res) => {
            if (res.status === 200 && res.statusText === 'OK') {
              let list = JSON.parse(res.request.response).result[item].data
              list.forEach((li) => {
                _this.apps.push(li)
              })
              list = null
            }
          })
        })
      }
    },
    watch: {
      listNameIndex (newIndex) {
        this.apps.splice(0, this.apps.length)
        this._setApps()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .sort
    .header_bg
      width: 100%
      height: 235px
      background-image: url('download_nav.jpg');
      background-size: cover
      background-position: center center
</style>
