<template>
    <div id="root">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/card/management' }">卡牌管理</el-breadcrumb-item>
        <el-breadcrumb-item >编辑</el-breadcrumb-item>
      </el-breadcrumb>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span id="title">编辑</span>
          </div>
          <div>
             <!-- <el-alert
              title="仅限上传一张卡牌"
              type="warning"
              style="margin-top:-10px; margin-bottom:10px;"
              >
            </el-alert> -->
            <el-form :model="cardRuleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="卡牌名称" prop="cardName">
                  <el-input v-model="cardRuleForm.cardName" style="width: 300px"></el-input>
                </el-form-item>
                <!-- <el-form-item label="卡牌类型" prop="cardType">
                  <el-select v-model="cardRuleForm.cardType" placeholder="请选择卡牌类型">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                  </el-select>
                </el-form-item> -->
                <el-form-item label="卡牌介绍" prop="cardDetails">
                  <el-input type="textarea" v-model="cardRuleForm.cardDetails" style="width: 300px" :rows="4"></el-input>
                </el-form-item>
                <el-form-item label="卡牌上传">
                  <!-- <span  v-for="item in imagesList" :key="item" style="margin-right:15px;">
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="item"
                      fit="fill"
                      :preview-src-list="imagesList"></el-image>
                  </span> -->
                   <el-upload
                      action="http://192.168.1.21:8080//qiniu/upload"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-change="uploadChange"
                      :on-success="successUpload"
                      :file-list="fileList"
                      :show-file-list="true"
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
      cardRuleForm: {
        cardName: '',
        cardDetails: '',
        cardId: ''
      },
      // ---------------
      dialogImageUrl: '',
      dialogVisible: false,
      isDisabled: false,
      imagesList: [],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      cardImage: [],
      fileList: []
    }
  },
  created () {
    // 编辑卡片信息
    this.getCurrentCardMsg()
    this.cardRuleForm.cardId = this.$route.query.id
  },
  methods: {
    async getCurrentCardMsg () {
      console.log(this.$route.query.id)
      const data = Qs.stringify({ cardId: this.$route.query.id, cardStatus: 1 })
      const { data: res } = await this.$http.post('/card/findCard', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      this.$message.success('成功获取当前数据')
      // ---------  看数据格式
      let urlStr = res.data[0].cardUrl.split(',') // logo地址
      urlStr.forEach(item => {
        let obj = {}
        obj.url = item
        this.fileList.push(obj)
      })
      this.cardRuleForm = res.data[0]
      this.cardImage = this.cardRuleForm.cardUrl.split(',')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
    },
    successUpload (response, file, fileList) {
      console.log('response', response)
      this.cardImage.push(response.data)
      console.log('response', this.cardImage)
    },
    async submitFormHandle () {
      // 图片
      const info = { cardId: this.cardRuleForm.cardId, cardStatus: this.cardRuleForm.cardStatus, cardName: this.cardRuleForm.cardName, cardDetails: this.cardRuleForm.cardDetails, cardUrl: this.cardImage.join(',') }
      console.log(info)
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/card/updateCard', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      this.$message.success(res.msg)
      this.$router.push('/card/management')
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
