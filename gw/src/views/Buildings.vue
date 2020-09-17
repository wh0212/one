<template>
  <div class="download">
    <banner img="../assets/img/appDown.jpg" title="建筑欣赏" />
    <el-row>
      <el-col :span="8" v-for="building in buildings" :key="building">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ building }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import budilding_json from "../assets/data/5-buildings.json";
export default {
  components: {
    Banner
  },
  data() {
    return {
      buildings: budilding_json
    };
  }
};
</script>

<style lang="scss" scoped>
</style>