<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <!-- <img src="../assets/logoMain.png" style="height:60px;margin-left:30px" alt=""> -->
        logo
      </div>
      <el-dropdown trigger="click" @command="handleCommand">
       <span class="el-dropdown-link">
         <!-- <img src="../assets/pic.png" alt=""> -->
        {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item icon="el-icon-edit" command="/editpass/editpassword">修改密码</el-dropdown-item>
         <el-dropdown-item icon="el-icon-switch-button" command="/">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#eee" text-color="#666" :unique-opened="true"  active-text-color="#889EFF"  :default-active="activePath" router>
          <!-- -------------------------------------------------------------- -->
            <el-submenu index="1">
              <template slot="title">文章管理</template>
              <el-menu-item index="/article/main">
                <span class="iconfont icon-wenzhang" style="font-size:20px;"></span>
                <span>文章发布</span>
            </el-menu-item>
           </el-submenu>
          <!-- ------------------------------------------------------------------ -->
          <el-submenu index="2">
            <template slot="title">卡牌管理</template>
            <el-menu-item index="/card/management">
              <span class="iconfont icon-icon-test"  style="font-size:20px;"></span>
              <span >卡牌鉴赏</span>
            </el-menu-item>
          </el-submenu>
          <!-- ------------------------------------------------------------------ -->
          <el-submenu index="3">
            <template slot="title">游戏特色</template>
            <el-menu-item index="/features">
              <span class="iconfont icon-fenleiicon-"  style="font-size:20px;"></span>
              <span >游戏特色</span>
            </el-menu-item>
          </el-submenu>
          <!-- -------------------------------------------------------------------- -->
          <el-submenu index="4">
            <template slot="title">
              <span slot="title">视听盛宴</span>
            </template>
            <el-menu-item index="/audiovisual">
              <span class="iconfont icon-shipin"  style="font-size:20px;"></span>
              <span >视频</span>
            </el-menu-item>
            <el-menu-item index="/wallparper">
              <span class="iconfont icon-bizhi"  style="font-size:20px;"></span>
              <span >原画</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- 修改密码弹框 -->
    <el-dialog title="修改密码" :visible.sync="editPasswordDialogVisible" width="50%" :before-close="handleClose" >
        <el-form :model="editPasswordRuleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
               <el-form-item label="新密码" prop="userPassword">
                <el-input v-model="editPasswordRuleForm.userPassword" class="el-input-width" autocomplete="off" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码" prop="checkPassword">
                <el-input v-model="editPasswordRuleForm.checkPassword" class="el-input-width" autocomplete="off" type="password"></el-input>
              </el-form-item>
              <el-alert  title="即将修改密码 注意文档保存" type="error" style="margin-bottom:10px;margin-top:10px;width:490px;margin-left:106px;text-align:center" > </el-alert>
              <el-form-item>
                <el-button type="primary" @click="editPasswordSubmitForm('ruleForm')" plain>立即修改</el-button>
                <el-button @click="editPasswordResetForm('ruleForm')" plain type="danger">重置</el-button>
              </el-form-item>
          </el-form>
    </el-dialog>
  </el-container>

  <!-- 修改密码对话框 -->

</template>
<script>
import Qs from 'qs'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.editPasswordRuleForm.checkPassword !== '') {
          this.$refs.ruleForm.validateField('checkPassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.editPasswordRuleForm.userPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: '',
      userName: '',
      userType: null,
      editPasswordDialogVisible: false,
      // 新增表单信息数组
      editPasswordRuleForm: {
        userPassword: '',
        checkPassword: ''
      },
      rules: {
        userPassword: [
          { validator: validatePass, trigger: 'blur' },
          { min: 3, max: 16, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.userName = window.sessionStorage.getItem('userName')
    // this.userType = window.sessionStorage.getItem('userType') - 0
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 关闭新增用户对话框
    handleClose () {
      this.editPasswordResetForm('ruleForm')
      this.editPasswordDialogVisible = false
    },
    editPasswordSubmitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = {
            userId: window.sessionStorage.getItem('userId'),
            userPassword: this.editPasswordRuleForm.checkPassword
          }
          const data1 = Qs.stringify(data)
          const { data: res } = await this.$http.post('/user/updateUser', data1)
          // console.log(res)
          window.sessionStorage.clear()
          if (res.status !== 200) return this.$message.error('用户信息更新失败！')
          // this.$message.success('用户信息更新成功！')
          this.$router.push('/')
          return this.$message.success('请重新登录！')
          // alert('成功')
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    editPasswordResetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleCommand (command) {
      if (command === '/editpass/editpassword') {
        this.editPasswordDialogVisible = true
      } else {
        window.sessionStorage.clear()

        this.$router.push('/')
      }
    },
    logout () {
      window.sessionStorage.clear()
      // this.$router.push('/login')
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
// 头部栏颜色
@headerColor:#373d41;
// 侧边栏颜色
@asideColor:#eee;
// 左侧菜单栏折叠按钮颜色
@toggle-button-color:#5e6169;
// 头部字体颜色
@el-header-text-color:#c7c9d6;
// 内容区背景颜色
@el-main-color:#fff;
.home-container {
  height: 100%;
}
.el-header {
  background-color: @headerColor;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: @el-header-text-color;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}

.el-aside {
  background-color: @asideColor;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: @el-main-color;
}

.iconfont {
  margin-right: 10px;
}

.toggle-button {
  background-color: @toggle-button-color;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.el-dropdown {
  color: #fff;
  cursor:pointer;
}
.el-dropdown-menu{
  width: 150px;
}
// 表单输入框宽度
@el-input-width:90%;
.el-input-width{
    width: @el-input-width!important;
}
</style>
