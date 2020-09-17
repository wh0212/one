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
                :data="cardTableData"
                border
                style="width: 100%">
                <el-table-column
                  label="序列"
                  type="index"
                  width="50">
                </el-table-column>
                <el-table-column
                  prop="gameCharacteristicName"
                  label="游戏特色名称"
                  width="150">
                </el-table-column>

                <el-table-column
                  prop="gameCharacteristicUrl"
                   width="125"
                  label="游戏特色Url">
                   <template slot-scope="scope">
                      <el-image
                      style="width: 100px; height: 100px"
                      :src="scope.row.gameCharacteristicUrl.split(',')[0]"
                      :preview-src-list="scope.row.gameCharacteristicUrl.split(',')">
                    </el-image>
                   </template>
                </el-table-column>
                <el-table-column
                  prop="userName"
                   width="90"
                  label="发布人">
                </el-table-column>
                 <el-table-column
                  prop="gameCharacteristicStatus"
                   width="150"
                  label="游戏特色状态">
                  <template slot-scope="scope">
                    {{scope.row.gameCharacteristicStatus === 1?'已发布':'已删除'}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="gameCharacteristicUpdateDate"
                   width="200"
                  label="发布时间">
                </el-table-column>
                <el-table-column
                  label="操作">
                    <template slot-scope="scope">
                      <!-- <el-button type="success" icon="el-icon-zoom-in" size="mini" plain round @click="preViewHandle()">预览</el-button> -->
                     <div v-if="scope.row.gameCharacteristicStatus === 1">
                        <el-button type="primary" icon="el-icon-edit" size="mini" plain round @click="editHandle(scope.row.gameCharacteristicId)">编辑</el-button>
                        <el-button type="danger"  icon="el-icon-delete" size="mini" plain  round @click="deleteHandel(scope.row.gameCharacteristicId)">删除</el-button>
                     </div>
                     <div v-if="scope.row.gameCharacteristicStatus === 0">
                        <el-button type="warning" icon="el-icon-sort" size="mini" plain round @click="recoverHandle(scope.row.gameCharacteristicId)">恢复</el-button>
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
export default {
  data () {
    return {
      searchValue: '',
      cardTableData: [ ],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      preImgDialogVisible: false,
      currentPage4: 1,
      totalNum: null,
      pageSize: 10,
      isDeleteDialogVisible: true
    }
  },
  created () {
    this.getCardList()
    // this.cardRuleForm.userId = window.sessionStorage.getItem('userId')
    // this.cardRuleForm.userName = window.sessionStorage.getItem('userName')
  },
  methods: {
    async getCardList () {
      console.log({ pageNum: this.currentPage4, pageSize: this.pageSize })
      const data = Qs.stringify({ pageNum: this.currentPage4, pageSize: this.pageSize })
      const { data: res } = await this.$http.post('/findGameCharacteristic', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      this.cardTableData = res.data.items
      this.totalNum = res.data.totalNum
      // this.$message.success('成功获取列表')
    },
    // 新增
    publishHandle () {
      this.$router.push('/game/add')
    },
    // 操作
    editHandle (id) {
      console.log(id)

      // this.$router.push('/card/edit', cardId)
      this.$router.push({ path: '/game/edit', query: { id } })
    },
    preViewHandle () {
      this.preImgDialogVisible = true
    },
    deleteHandel (currentId) {
      this.$confirm('是否继续该操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        console.log(currentId)
        const data = Qs.stringify({ gameCharacteristicId: currentId, gameCharacteristicStatus: 0 })
        const { data: res } = await this.$http.post('/updateGameCharacteristic', data)
        console.log(res)
        if (res.status !== 200) return this.$message.error(res.msg)
        this.$message({
          type: 'success',
          message: res.msg
        })
        this.getCardList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作'
        })
      })
    },
    recoverHandle (currentId) {
      this.$confirm('是否继续该操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        console.log(currentId)
        const data = Qs.stringify({ gameCharacteristicId: currentId, gameCharacteristicStatus: 1 })
        const { data: res } = await this.$http.post('/updateGameCharacteristic', data)
        console.log(res)
        if (res.status !== 200) return this.$message.error(res.msg)
        this.$message({
          type: 'success',
          message: res.msg
        })
        this.getCardList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作'
        })
      })
    },
    handleClose () {
      this.preImgDialogVisible = false
    },
    // 分页
    handleSizeChange (size) {
      this.pageSize = size
      console.log('handleSizeChange', size)
      this.getCardList()
      // pageSize
    },
    handleCurrentChange (size) {
      console.log('handleCurrentChange', size)
      // currentPage
      this.currentPage4 = size
      this.getCardList()
    },
    prevClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.getCardList()
    },
    nextClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.getCardList()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
