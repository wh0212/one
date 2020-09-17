<template>
    <div id="root">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/features' }">游戏特色</el-breadcrumb-item>
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
                <el-form-item label="游戏特色名称" prop="gameCharacteristicName">
                  <el-input v-model="cardRuleForm.gameCharacteristicName" style="width: 300px"></el-input>
                </el-form-item>
                <!-- <el-form-item label="卡牌类型" prop="cardType">
                  <el-select v-model="cardRuleForm.cardType" placeholder="请选择卡牌类型">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                  </el-select>
                </el-form-item> -->
                <!-- <el-form-item label="卡牌介绍" prop="cardDesc">
                  <el-input type="textarea" v-model="cardRuleForm.cardDesc" style="width: 300px" :rows="4"></el-input>
                </el-form-item> -->
                <el-form-item label="游戏特色上传">
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
                      :file-list="fileList"
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
        gameCharacteristicName: '',
        gameCharacteristicId: ''
      },
      // ---------------
      dialogImageUrl: '',
      dialogVisible: false,
      isDisabled: false,
      imagesList: [],
      fileList: []
    }
  },
  created () {
    this.getCurrentgameList()
    this.cardRuleForm.gameCharacteristicId = this.$route.id
  },
  methods: {
    async getCurrentgameList () {
      const data = Qs.stringify({ gameCharacteristicId: this.$route.id, gameCharacteristicStatus: 1 })
      const { data: res } = await this.$http.post('/findGameCharacteristic', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      this.$message({
        type: 'success',
        message: '成功获取当前数据'
      })
      this.cardRuleForm = res.data.items[0]
      this.imagesList = res.data.items[0].gameCharacteristicUrl.split(',')
      console.log('imagesList', this.imagesList)
      this.imagesList.map((element) => {
        const obj = { url: element }
        this.fileList.push(obj)
      })
    },
    async submitFormHandle () {
      // 图片的处理-------------------
      const info = { gameCharacteristicId: this.cardRuleForm.gameCharacteristicId, gameCharacteristicName: this.cardRuleForm.gameCharacteristicName, gameCharacteristicUrl: this.imagesList.join(',') }
      console.log(info)
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/updateGameCharacteristic', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      this.$message({
        type: 'success',
        message: res.msg
      })
      this.$router.push('/features')
    },
    handleRemove (file, fileList) {
      console.log('file', file.url)
      const index = this.imagesList.indexOf(file.url)
      this.imagesList.splice(index, 1)
    },
    successUpload (response, file, fileList) {
      console.log('response', file)
      this.imagesList.push(response.data)
      console.log('response', this.imagesList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    uploadChange (file, fileList) {
      console.log(file, fileList)
      console.log(this.fileList)
      if (fileList.length >= 1) {
        this.isDisabled = true
      }
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
