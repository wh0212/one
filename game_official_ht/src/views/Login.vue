<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <!-- <div class="avatar_box">
        <img src="../assets/logo.png" style="width:100%" alt="">
      </div> -->
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password" placeholder="密码" @change="pwdChangeHandle"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click.native.prevent="login" @keyup.enter.native="loginEnter('loginData')">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '管理员',
        password: '123'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  // 页面加载调用获取cookie值
  mounted () {
    // this.clearCookie()
    // this.getCookie()
  },
  created () {
    var _self = this
    document.onkeydown = function (e) {
      if (window.event === undefined) {
        var key = e.keyCode
      } else {
        key = window.event.keyCode
      }
      if (key === 13) {
        _self.loginEnter('loginData')
      }
    }
  },
  methods: {
    loginEnter () {
      this.login()
    },
    // 密码输入框点击回车后触发该事件
    pwdChangeHandle (e) {
      // console.log(e)
    },
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      // console.log(this);
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        // console.log(1)
        if (!valid) return
        const { data: res } = await this.$http.post('/user/findUserLogin', Qs.stringify(this.loginForm))
        if (res.status !== 200) return this.$message.error(res.msg)
        console.log(res)
        this.$message.success('登录成功')
        // 1. 将登录成功之后 保存的账号
        // const name = this.loginForm.username
        // 保存的密码
        // const pass = this.loginForm.password
        // 传入账号名，密码，和保存天数3个参数
        // this.setCookie(name, pass)
        window.sessionStorage.setItem('userId', res.data.userId)
        window.sessionStorage.setItem('userName', res.data.userName)
        // window.sessionStorage.setItem('userType', res.data.userType)
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /main
        this.$router.push(`/main`)
      })
    }
    // 封装保存cookie的函数
    // setCookie (cname, cpwd) {
    //   window.document.cookie =
    //     'username' + '=' + cname + ';'
    //   window.document.cookie =
    //     'password' + '=' + cpwd + ';'
    // }
    // 读取cookie
    // getCookie: function () {
    //   console.log(document.cookie)
    //   if (document.cookie.length > 0) {
    //     var arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
    //     console.log(arr)
    //     for (var i = 0; i < arr.length; i++) {
    //       var arr2 = arr[i].split('=') // 再次切割
    //       // 判断查找相对应的值
    //       if (arr2[0] === 'username') {
    //         this.loginForm.username = arr2[1] // 保存到保存数据的地方
    //       } else if (arr2[0] === 'password') {
    //         this.loginForm.password = arr2[1]
    //       }
    //     }
    //   }
    // }
    // // 清除cookie
    // clearCookie: function () {
    //   this.setCookie('', '') // 修改2值都为空，天数为负1天就好了
    // }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #fff;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: .133333rem;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
