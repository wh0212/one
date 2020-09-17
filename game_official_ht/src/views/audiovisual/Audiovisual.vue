<template>
    <div id="root">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-input placeholder="请输入搜索内容" v-model="searchValue" class="input-with-select" style="width:300px;">
                  <el-button slot="append" icon="el-icon-search">搜索</el-button>
                </el-input>
                <el-button type="primary" icon="el-icon-plus" style="float: right;" plain round @click="publishHandle()">发布</el-button>
            </div>
            <el-table
                :data="articleTableData"
                border
                style="width: 100%">
                <el-table-column
                  type="index"
                  label="序列"
                  width="50">
                </el-table-column>
                <el-table-column
                  prop="audioVisualFeastHead"
                  label="视听盛宴标题"
                  width="160">
                </el-table-column>
                <el-table-column
                  prop="audioVisualFeastUrl"
                   width="350"
                  label="视听盛宴URL">
                  <template slot-scope="scope">
                    <div v-if="scope.row.audioVisualFeastType === 1" style="margin: 0 auto;">
                      <el-image
                        style="width: 100px; height: 100px; "
                        :src="scope.row.audioVisualFeastUrl.split(',')[0]"
                        :preview-src-list="scope.row.audioVisualFeastUrl.split(',')">
                      </el-image>
                    </div>
                    <div v-if="scope.row.audioVisualFeastType === 0">
                      <video-player
                            class="vjs-custom-skin"
                            ref="videoPlayer"
                            :options="playerOptions[scope.$index]"
                            :playsinline="true"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
                            @ended="onPlayerEnded($event)"
                            @waiting="onPlayerWaiting($event)"
                            @playing="onPlayerPlaying($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @canplaythrough="onPlayerCanplaythrough($event)"
                            @ready="playerReadied"
                            @statechanged="playerStateChanged($event)">
                      </video-player>
                    </div>
                   </template>
                </el-table-column>
                <!-- <el-table-column
                  prop="audioVisualFeastType"
                   width="110"
                  label="视听盛宴类型">
                  <template slot-scope="scope">
                    {{scope.row.audioVisualFeastType===0?'视频':'原画'}}
                  </template>
                </el-table-column> -->
                <el-table-column
                  prop="audioVisualFeastStatus"
                   width="110"
                  label="视听盛宴状态">
                  <template slot-scope="scope">
                    {{scope.row.audioVisualFeastStatus === 1?'已发布':'已删除'}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="userName"
                   width="90"
                  label="发布人">
                </el-table-column>
                <el-table-column
                  prop="audioVisualFeastUpdateDate"
                   width="160"
                  label="发布时间">
                </el-table-column>
                <el-table-column
                  label="操作">
                    <template slot-scope="scope">
                      <div v-if="scope.row.audioVisualFeastStatus === 1">
                        <el-button type="success" icon="el-icon-edit" size="mini" plain round @click="editHandle(scope.row.audioVisualFeastId)">编辑</el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini" plain round @click="deleteHandle(scope.row.audioVisualFeastId)">删除</el-button>
                      </div>
                      <div v-if="scope.row.audioVisualFeastStatus === 0">
                        <el-button type="warning" icon="el-icon-sort" size="mini" plain round @click="recoverHandle(scope.row.audioVisualFeastId)">恢复</el-button>
                      </div>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              @prev-click="prevClickChange"
              @next-click="nextClickChange"
              :current-page="currentPage4"
              :page-sizes="[5,10,15]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="totalNum">
            </el-pagination>

            <!-- 图片预览 -->
            <!-- <el-dialog
              title="卡牌名称"
              :visible.sync="preImgDialogVisible"
              width="60%"
              :before-close="handleClose"
              center
              >
                <el-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"></el-image>
            </el-dialog> -->

        </el-card>
    </div>
</template>
<script>
import Qs from 'qs'
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      searchValue: '',
      articleTableData: [],
      preImgDialogVisible: false,
      currentPage4: 1,
      totalNum: null,
      pageSize: 10,
      playerOptions: []
    }
  },
  created () {
    this.getAudiovisualList()
  },
  methods: {
    async getAudiovisualList () {
      const data = Qs.stringify({ audioVisualFeastType: 0, pageNum: this.currentPage4, pageSize: this.pageSize })
      const { data: res } = await this.$http.post('/audioVisualFeast/findAudioVisualFeast', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      // this.$message({
      //   type: 'success',
      //   message: '成功获取'
      // })
      this.articleTableData = res.data.items
      this.totalNum = res.data.totalNum
      this.articleTableData.map((item) => {
        console.log(item.audioVisualFeastUrl)
        const obj = {
          height: '160',
          autoplay: false,
          muted: true,
          language: 'en',
          aspectRatio: '16:9',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: 'video/mp4',
            // mp4
            src: item.audioVisualFeastUrl
          // webm
          // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }]
        }
        this.playerOptions.push(obj)
      })
    },
    publishHandle () {
      this.$router.push({ path: '/audiovisual/add', query: { path: '/audiovisual' } })
    },
    editHandle (id) {
      // this.preImgDialogVisible = true
      this.$router.push({ path: '/editaudiovisual', query: { id, path: '/audiovisual' } })
    },
    deleteHandle (audioVisualFeastId) {
      this.$confirm('是否继续该操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        console.log(audioVisualFeastId)
        const data = Qs.stringify({ audioVisualFeastId, audioVisualFeastStatus: 0 })
        const { data: res } = await this.$http.post('/audioVisualFeast/updateAudioVisualFeast', data)
        console.log(res)
        if (res.status !== 200) return this.$message.error(res.msg)
        this.$message({
          type: 'success',
          message: res.msg
        })
        this.getAudiovisualList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作'
        })
      })
    },
    async recoverHandle (audioVisualFeastId) {
      this.$confirm('是否继续该操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        console.log(audioVisualFeastId)
        const data = Qs.stringify({ audioVisualFeastId, audioVisualFeastStatus: 1 })
        const { data: res } = await this.$http.post('/audioVisualFeast/updateAudioVisualFeast', data)
        console.log(res)
        if (res.status !== 200) return this.$message.error(res.msg)
        this.$message({
          type: 'success',
          message: res.msg
        })
        this.getAudiovisualList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作'
        })
      })
    },
    // 分页
    handleSizeChange (size) {
      this.pageSize = size
      console.log('handleSizeChange', size)
      this.getAudiovisualList()
      // pageSize
    },
    handleCurrentChange (size) {
      console.log('handleCurrentChange', size)
      // currentPage
      this.currentPage4 = size
      this.getAudiovisualList()
    },
    prevClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.getAudiovisualList()
    },
    nextClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.getAudiovisualList()
    },
    handleClose () {

    },
    // -----------视频
    playerReadied () {

    },
    playerStateChanged () {

    },
    onPlayerCanplaythrough () {

    }

  }
}
</script>

<style lang="less" scoped>

</style>
