<template>
  <section class="articles">
    <div class="cont">
      <div class="items" v-for="(item, index) in apps">
        <div class="ban" @click="selectItem(item.id)">
          <img :src="item.icon_url"/>
        </div>
        <p @click="selectItem(item.id)">{{item.title}}</p>
        <p @click="selectItem(item.id)">{{item.instruction}}</p>
        <div class="downloadBtn" @click="download(item.quick_download_download_url)">download</div>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      apps: {
        type: Array,
        default: null
      }
    },
    methods: {
      selectItem (id) {
        this.$emit('selectItem', id)
      },
      download (url) {
        window.location.href = url
      }
    },
    created () {
      console.log(this.apps)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .articles
    display: flex
    justify-content: center
    background: #fff
    padding-bottom: 64px
    .cont
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      .items
        width: 185px
        margin-top: 32px
        cursor: pointer
        p
          text-align: left
          cursor: pointer
          transition: 0.5s
          cursor: pointer
        p:hover
          color: #93c000 !important
        p:nth-child(2)
          font-size: 16px
          line-height: 32px
          color: #666666
          margin-top: 8px
        p:nth-child(3)
          font-size: 12px
          line-height: 18px
          color: #707070
          margin-bottom: 8px
          height: 36px
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;

</style>
