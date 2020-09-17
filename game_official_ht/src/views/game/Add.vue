<template>
    <div id="root">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/features' }">游戏特色</el-breadcrumb-item>
        <el-breadcrumb-item >新增</el-breadcrumb-item>
      </el-breadcrumb>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span id="title">新增</span>
          </div>
          <div>
            <el-form :model="cardRuleForm" :rules="cardRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="游戏特色名称" prop="gameCharacteristicName">
                  <el-input v-model="cardRuleForm.gameCharacteristicName" style="width: 300px"></el-input>
                </el-form-item>
                <el-form-item label="游戏特色上传">
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
        gameCharacteristicName: '',
        gameCharacteristicStatus: 1,
        gameCharacteristicUrl: '',
        userId: '',
        userName: ''
      },
      cardRules: {
        gameCharacteristicName: [
          { required: true, message: '请输入游戏特色名称', trigger: 'blur' }
        ]
      },
      // ---------------
      dialogImageUrl: '',
      dialogVisible: false,
      isDisabled: false,
      cardImage: []
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
          const { data: res } = await this.$http.post('/addGameCharacteristic', data)
          console.log(res)
          if (res.status !== 200) return this.$message.error(res.msg)
          this.$message.success(res.msg)
          // console.log(1)
          // alert('submit!')
          this.$router.push('/features')
        } else {
          console.log('新增失败')
          return false
        }
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
      console.log('file', file.url)
      const index = this.imagesList.indexOf(file.url)
      this.imagesList.splice(index, 1)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadChange (file, fileList) {
      // console.log(file, fileList)
      // console.log(this.fileList)
      // if (fileList.length >= 1) {
      //   this.isDisabled = true
      // }
    },
    successUpload (response, file, fileList) {
      console.log('response,', response)
      this.cardImage.push(response.data)
      console.log(this.cardImage.join(','))
      this.cardRuleForm.gameCharacteristicUrl = this.cardImage.join(',')
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
