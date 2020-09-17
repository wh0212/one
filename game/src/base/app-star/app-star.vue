<template>
  <ul :class="level === 0 ? 'stars2' : 'stars'" ref="stars" @mouseout="mouseOut">
    <li v-for="(item,index) in starts" @click="startNum(index)" @mouseover="mouseOver(index)"></li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: String,
        default: 'smail'
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        startsLen: 5,
        starts: [],
        starNum: -1
      }
    },
    created () {
      this.starts = new Array(this.startsLen)
    },
    mounted () {
      setTimeout(() => {
        this._createLevel()
      }, 300)
    },
    methods: {
      mouseOut () {
        if (this.level !== 0) {
          return false
        }
        let objs = this.clearAllStar()
        this.addStar(this.starNum)

        if (this.starNum === -1) {
          objs.className = ''
        }
      },
      startNum (index) {
        this.starNum = index
        this.clearAllStar()
        this.addStar(this.starNum)
      },
      clearAllStar () {
        let objs = this.$refs.stars.children
        objs = Array.prototype.slice.call(objs)
        objs.forEach((item, i) => {
          if (this.starNum < i) {
            objs[i].className = ''
          }
        })
        return objs
      },
      addStar (num) {
        let objs = this.$refs.stars.children
        for (let i = 0; i <= num; i++) {
          objs[i].className = 'cur'
        }
      },
      mouseOver (index) {
        if (this.level !== 0) {
          return false
        }
        this.clearAllStar()
        this.addStar(index)
      },
      _createLevel () {
        let num = parseInt(this.level / 2)
        let sy = this.level % 2
        let objs = this.$refs.stars.children
        for (let i = 0; i < this.startsLen; i++) {
          if (i < num) {
            objs[i].className = 'big_4'
          }

          if (sy === 0 && i >= num) {
            objs[i].className = 'big_0'
          }

          if (sy === 1 && i >= num) {
            objs[i].className = 'big_2'
          }
        }
        console.log(sy)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .stars
    height: 18px
    margin-top: 0 !important
    display: inline-flex
    li
      width: 18px
      height: 18px
    li.big_0
      background: url('stars_big_0.png') no-repeat
    li.big_1
      background: url('stars_big_1.png') no-repeat
    li.big_2
      background: url('stars_big_2.png') no-repeat
    li.big_3
      background: url('stars_big_3.png') no-repeat
    li.big_4
      background: url('stars_big_4.png') no-repeat

  .stars2
    height: 33px
    margin-top: 0 !important
    display: inline-flex
    li
      width: 33px
      height: 33px
      background: url('pinglunx.png') no-repeat
    li.cur
      background: url('pinglunx_xuanz.png') no-repeat
</style>
