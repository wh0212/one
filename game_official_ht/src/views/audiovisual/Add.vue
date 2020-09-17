<template>
    <div id="root">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/audiovisual' }">视听盛宴</el-breadcrumb-item>
        <el-breadcrumb-item >新增</el-breadcrumb-item>
      </el-breadcrumb>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span id="title">新增</span>
          </div>
          <div>
            <el-form :model="cardRuleForm" :rules="cardRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="视听盛宴类型" prop="audioVisualFeastType">
                  <!-- <el-select v-model="cardRuleForm.audioVisualFeastType" placeholder="请选择视听盛宴类型">
                    <el-option label="视频" value="0"></el-option>
                    <el-option label="原画" value="1"></el-option>
                  </el-select> -->
                  <span v-if="path==='/wallparper'">原画</span>
                  <span v-if="path==='/audiovisual'">视频</span>
                </el-form-item>
                <el-form-item label="视听盛宴标题" prop="audioVisualFeastHead">
                  <el-input v-model="cardRuleForm.audioVisualFeastHead" style="width: 300px"></el-input>
                </el-form-item>
                <div v-if="isShowVideo">
                  <el-form-item label="视频路径上传">
                    <el-input v-model="cardRuleForm.audioVisualFeastUrl" style="width: 300px"></el-input>
                  </el-form-item>
                </div>
                <div v-if="isShowwallpaper">
                  <el-form-item label="原画上传">
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
                </div>
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
        audioVisualFeastHead: '',
        audioVisualFeastType: '',
        audioVisualFeastUrl: '',
        userId: '',
        userName: '',
        audioVisualFeastStatus: 1
      },
      cardRules: {
        audioVisualFeastHead: [
          { required: true, message: '请输入视听盛宴标题', trigger: 'blur' }
        ],
        cardDesc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ],
        audioVisualFeastType: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      },
      // ---------------
      dialogImageUrl: '',
      dialogVisible: false,
      isDisabled: false,
      // ------------------------
      isShowVideo: false,
      isShowwallpaper: false,
      cardImage: [],
      path: ''
    }
  },
  created () {
    this.cardRuleForm.userId = window.sessionStorage.getItem('userId')
    this.cardRuleForm.userName = window.sessionStorage.getItem('userName')
    this.path = this.$route.query.path
    console.log(this.path)

    if (this.$route.query.path === '/wallparper') {
      this.isShowwallpaper = true
      this.cardRuleForm.audioVisualFeastType = 1
    }
    if (this.$route.query.path === '/audiovisual') {
      this.isShowwallpaper = false
      this.cardRuleForm.audioVisualFeastType = 0
      this.isShowVideo = true
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log('file', file)
      const index = this.cardImage.indexOf(file.url)
      this.cardImage.splice(index, 1)
      this.cardRuleForm.audioVisualFeastUrl = this.cardImage.join(',')
    },
    handlePictureCardPreview (file) {
      // this.dialogImageUrl = file.url
      // this.dialogVisible = true
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
      this.cardRuleForm.audioVisualFeastUrl = this.cardImage.join(',')
    },
    submitFormHandle (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log(this.cardRuleForm)
          const data = Qs.stringify(this.cardRuleForm)
          console.log(data)

          const { data: res } = await this.$http.post('/audioVisualFeast/addAudioVisualFeast', data)
          console.log(res)
          if (res.status !== 200) return this.$message.error(res.msg)
          console.log(12)
          this.$message.success('新增成功')
          this.$router.go(-1)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  computed: {
    newaudioVisualFeastType () {
      return this.cardRuleForm.audioVisualFeastType
    }
  },
  watch: {
    fileList (old) {
      console.log(old)
    },
    newaudioVisualFeastType (val) {
      console.log('val', typeof val)
      if (val === '0') {
        this.isShowVideo = true
        this.isShowwallpaper = false
      } else if (val === '1') {
        this.isShowwallpaper = true
        this.isShowVideo = false
      }
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
