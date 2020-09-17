<template>
    <div id="root">
     <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/card/management' }">卡牌管理</el-breadcrumb-item>
        <el-breadcrumb-item >新增</el-breadcrumb-item>
      </el-breadcrumb>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span id="title">新增</span>
          </div>
          <div>
            <el-form :model="cardRuleForm" :rules="cardRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="卡牌名称" prop="cardName">
                  <el-input v-model="cardRuleForm.cardName" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="卡牌类型" prop="cardType">
                  <el-select v-model="cardRuleForm.cardType" placeholder="请选择卡牌类型">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="卡牌介绍" prop="cardDetails">
                  <el-input type="textarea" v-model="cardRuleForm.cardDetails" style="width: 300px" :rows="4"></el-input>
                </el-form-item>
                <el-form-item label="卡牌上传">
                   <el-upload
                      action="http://192.168.1.21:8080//qiniu/upload"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-change="uploadChange"
                      :on-success="successUpload"
                      >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
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
      cardRuleForm: {
        cardName: '',
        cardType: '',
        cardDetails: '',
        cardUrl: '',
        userId: '',
        userName: '',
        cardStatus: '1'
      },
      cardRules: {
        cardName: [
          { required: true, message: '请输入卡牌名称', trigger: 'blur' }
        ],
        cardDetails: [
          { required: true, message: '请填写卡牌介绍', trigger: 'blur' }
        ],
        cardType: [
          { required: true, message: '请选择卡牌类型', trigger: 'change' }
        ]
      },
      cardImage: [],
      // ---------------
      dialogImageUrl: '',
      dialogVisible: false,
      isDisabled: false
    }
  },
  created () {
    this.cardRuleForm.userId = window.sessionStorage.getItem('userId')
    this.cardRuleForm.userName = window.sessionStorage.getItem('userName')
  },
  methods: {
    submitFormHandle (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.cardRuleForm)
          const data = Qs.stringify(this.cardRuleForm)
          const { data: res } = await this.$http.post('/card/addCard', data)
          console.log(res)
          if (res.status !== 200) return this.$message.error(res.msg)
          this.$message.success(res.msg)
          this.$router.push('/card/management')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleRemove (file, fileList) {
      console.log('handleRemove', file)
      console.log('cardImage', this.cardImage)
      const index = this.cardImage.indexOf(file.url)
      console.log('index', index)
      this.cardImage.splice(index, 1)
      console.log(this.cardImage, 'card')
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadChange (file, fileList) {
      // console.log(file, fileList)
      // if (fileList.length >= 1) {
      //   this.isDisabled = true
      // }
    },
    successUpload (response, file, fileList) {
      console.log('response,', response)
      this.cardImage.push(response.data)
      console.log(this.cardImage.join(','))
      this.cardRuleForm.cardUrl = this.cardImage.join(',')
    }
  },
  watch: {
    fileList (old) {
      console.log(old)
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
