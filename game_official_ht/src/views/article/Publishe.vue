<template>
    <div id="root">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/article/main' }">文章发布</el-breadcrumb-item>
        <el-breadcrumb-item >新增</el-breadcrumb-item>
      </el-breadcrumb>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span id="title">文章发布</span>
          </div>
          <div>
            <el-form :model="articleRuleForm" :rules="articleRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="文章标题" prop="articleManageHead">
                  <el-input v-model="articleRuleForm.articleManageHead" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="文章类型" prop="articleManageType">
                  <el-select v-model="articleRuleForm.articleManageType" placeholder="请选择文章类型">
                    <el-option label="新闻" value="1"></el-option>
                    <el-option label="公告" value="2"></el-option>
                    <el-option label="活动" value="3"></el-option>
                    <el-option label="攻略" value="4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="文章详情">
                <!-- 富文本编辑器组件 -->
                <quill-editor v-model="articleRuleForm.articleManageDetails"></quill-editor>
                </el-form-item>
            </el-form>
            <!-- 提交 -->
            <div id="bottom">
               <el-button type="primary" plain @click="submitFormHandle('ruleForm')">提交</el-button>
            </div>
          </div>
        </el-card>
    </div>
</template>
<script>
import Qs from 'qs'
export default {
  data () {
    return {
      articleRuleForm: {
        articleManageHead: '',
        articleManageType: '',
        // 文章的详情介绍
        articleManageDetails: '',
        articleManageStatus: 1,
        userName: '',
        userId: ''
      },
      articleRules: {
        articleManageHead: [
          { required: true, message: '请输入文章标题', trigger: 'blur' }
        ],
        articleManageType: [
          { required: true, message: '请选择文章类型', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    // 获取当前登录用户名和用户id
    this.articleRuleForm.userId = window.sessionStorage.userId + ''
    this.articleRuleForm.userName = window.sessionStorage.userName + ''
  },
  methods: {
    submitFormHandle (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.articleRuleForm)
          const data = Qs.stringify(this.articleRuleForm)
          const res = await this.$http.post('/articleManage/addArticleManage', data)
          console.log(res)
          if (res.status !== 200) return this.$message.error(res.msg)
          console.log(12)
          this.$message.success('发布成功')
          this.$router.push('/article/main')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#root{
    #title{
        font-size: 18px;
        font-weight: 700;
        border-left: 3px solid #6565f5;
        padding-left: 10px;
    }
    .quill-editor{
        margin-left: 8px;
    }
    #bottom{
      text-align: center;
      padding-top: 50px;
    }
}
</style>
