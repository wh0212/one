<template>
    <div>
        <h3>404 / 页面不存在 <el-button type="text" icon="el-icon-d-arrow-left" @click="returnHandle">返回</el-button></h3>

    </div>
</template>
<script>
export default {
  methods: {
    returnHandle () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
