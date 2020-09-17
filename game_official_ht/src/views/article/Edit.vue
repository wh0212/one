<template>
    <div id="root">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/article/main' }">文章发布</el-breadcrumb-item>
        <el-breadcrumb-item >编辑</el-breadcrumb-item>
      </el-breadcrumb>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span id="title">编辑</span>
          </div>
          <div>
            <el-form :model="articleRuleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
                <el-form-item label="文章内容">
                <!-- 富文本编辑器组件 -->
                <quill-editor v-model="articleRuleForm.articleManageDetails"></quill-editor>
                </el-form-item>
            </el-form>
            <!-- 提交 -->
            <div id="bottom">
               <el-button type="primary" plain @click="submitFormHandle()">提交</el-button>
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
        articleManageDetails: ''
      }
    }
  },
  created () {
    this.getCurrentArticle()
  },
  methods: {
    async getCurrentArticle () {
      const data = Qs.stringify({ articleManageId: this.$route.query.id })
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res)
      this.articleRuleForm = res.data.items[0]
      if (res.status !== 200) return this.$message.error(res.msg)
      this.$message.success(res.msg)
      this.articleRuleForm = res.data.items[0]
      console.log(typeof res.data.items[0].articleManageType)
      if (res.data.items[0].articleManageType === 1) {
        this.articleRuleForm.articleManageType = '新闻'
      } else if (res.data.items[0].articleManageType === 2) {
        this.articleRuleForm.articleManageType = '公告'
      } else if (res.data.items[0].articleManageType === 3) {
        this.articleRuleForm.articleManageType = '活动'
      } else if (res.data.items[0].articleManageType === 4) {
        this.articleRuleForm.articleManageType = '攻略'
      }
    },
    async submitFormHandle () {
      if (this.articleRuleForm.articleManageType === '新闻') {
        this.articleRuleForm.articleManageType = '1'
      } else if (this.articleRuleForm.articleManageType === '公告') {
        this.articleRuleForm.articleManageType = '2'
      } else if (this.articleRuleForm.articleManageType === '活动') {
        this.articleRuleForm.articleManageType = '3'
      } else if (this.articleRuleForm.articleManageType === '攻略') {
        this.articleRuleForm.articleManageType = '4'
      }
      console.log({
        articleManageHead: this.articleRuleForm.articleManageHead,
        articleManageType: this.articleRuleForm.articleManageType,
        // 文章的详情介绍
        articleManageDetails: this.articleRuleForm.articleManageDetails,
        articleManageId: this.articleRuleForm.articleManageId,
        articleManageStatus: '1'
      })

      const data = Qs.stringify({
        articleManageHead: this.articleRuleForm.articleManageHead,
        articleManageType: this.articleRuleForm.articleManageType,
        // 文章的详情介绍
        articleManageDetails: this.articleRuleForm.articleManageDetails,
        articleManageId: this.articleRuleForm.articleManageId,
        articleManageStatus: '1'
      })
      const { data: res } = await this.$http.post('/articleManage/updateArticleManage', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      this.$message.success(res.msg)
      this.$router.push('/article/main')
    }
  },
  // ----------------
  computed: {
    newType () {
      return this.articleRuleForm.articleManageType
    }
  },
  // --------------------
  watch: {
    newType (val) {
      this.articleRuleForm.articleManageType = val
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
