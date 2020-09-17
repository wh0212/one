<template>
  <div class="layout-header">
    <el-row>
      <el-col :xs="10" :sm="12" :md="14" :lg="16" :xl="18">
        <div class="system-info">
          <img class="logo" src="@/assets/logo.png" alt />
          <span class="title">w夏了夏天</span>
        </div>
      </el-col>
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <el-dropdown @command="userCommand" class="system-user">
            <span class="userinfo-inner">
                <img :src="require('@/assets/' + user.key + '.jpg')" alt />
                {{user.username}}
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="usercenter">个人中心</el-dropdown-item>
                <el-dropdown-item divided command="logout">注销登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Provide} from "vue-property-decorator";
import jwt_decode from 'jwt-decode'; //jwt_token的生成与解密

@Component({
  components: {}
})
export default class LayoutHeader extends Vue {
  @Provide() user = {};
  //监听下拉菜单点击选择
  userCommand(command: string): void {
    //根据所传参数 进入不同操作
    if (command == "logout") {
      localStorage.removeItem("tsToken");
      this.$router.replace("/login");
    }
    if (command == "usercenter") this.$router.push("/user");
  }
  created() {
    this.user = jwt_decode(localStorage.tsToken);//解析token获得用户信息
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  background: #495060;
  line-height: 64px;
  height: 64px;
}

.system-info {
  text-align: left;
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-top: 12px;
    margin-left: 20px;
    margin-right: 10px;
    float: left;
    position: relative;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    color: azure;
    line-height: 64px;
  }
}
.system-user {
  text-align: right;
  float: right;
  padding-right: 16px;
  .userinfo-inner {
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }
}
</style>
