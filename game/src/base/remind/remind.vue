<template>
  <div class="remind" ref="remind">
    <p>{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .remind
    font-size: 14px
    width: 120px
    color: #909090
    position: absolute
    line-height: 21px
    top: -30px
</style>
