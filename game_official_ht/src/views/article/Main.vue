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
                  label="序列"
                  type="index"
                  width="60">
                </el-table-column>
                <el-table-column
                  prop="articleManageHead"
                  label="文章标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="articleManageType"
                   width="120"
                  label="类型">
                   <template slot-scope="scope">
                    {{scope.row.articleManageType===1?'新闻':(scope.row.articleManageType===2?'公告':(scope.row.articleManageType===3?'活动':'攻略'))}}
                  </template>
                </el-table-column>
                <el-table-column
                  prop="articleManageStatus"
                   width="120"
                  label="状态">
                  <template slot-scope="scope">
                    {{scope.row.articleManageStatus===1?'已发布':'已删除'}}
                  </template>

                </el-table-column>
                <el-table-column
                  prop="userName"
                   width="120"
                  label="发布人">
                </el-table-column>
                <el-table-column
                  prop="articleManageCreateDate"
                   width="200"
                  label="发布时间">
                </el-table-column>
                <el-table-column
                  label="操作">
                  <template slot-scope="scope">
                    <div v-if="scope.row.articleManageStatus===1">
                      <el-button type="primary" icon="el-icon-edit" size="mini" plain round @click="editHandle(scope.row.articleManageId)">编辑</el-button>
                      <el-button type="danger" icon="el-icon-delete" size="mini"  plain round @click="deleteHandle(scope.row.articleManageId)  ">删除</el-button>
                    </div>
                    <div v-if="scope.row.articleManageStatus === 0">
                        <el-button type="warning" icon="el-icon-sort" size="mini" plain round @click="recoverHandle(scope.row.articleManageId)">恢复</el-button>
                      </div>
                  </template>
                </el-table-column>
            </el-table>

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
        </el-card>
    </div>
</template>
<script>
import Qs from 'qs'
export default {
  data () {
    return {
      searchValue: '',
      currentPage4: 1,
      totalNum: null,
      articleTableData: [],
      pageSize: 10
    }
  },
  created () {
    this.getarticleList()
  },
  methods: {
    async getarticleList () {
      console.log({ pageNum: this.currentPage4, pageSize: this.pageSize })
      const data = Qs.stringify({ pageNum: this.currentPage4, pageSize: this.pageSize })
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res)
      if (res.status !== 200) return this.$message.error(res.msg)
      // this.$message.success('成功获取列表')
      this.articleTableData = res.data.items
      this.totalNum = res.data.totalNum
    },
    publishHandle () {
      this.$router.push('/article/publish')
    },
    editHandle (articleManageId) {
      console.log(articleManageId)

      // this.$router.push('/article/edit', { id: articleManageId })
      this.$router.push({ path: '/article/edit', query: { id: articleManageId } })
    },
    deleteHandle (articleManageId) {
      console.log(articleManageId)

      this.$confirm('是否继续该操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const data = Qs.stringify({ articleManageId, articleManageStatus: 0 })
        console.log(data)
        const { data: res } = await this.$http.post('/articleManage/updateArticleManage', data)
        console.log(119, res)
        if (res.status !== 200) return this.$message.error(res.msg)
        this.$message({
          type: 'success',
          message: res.msg
        })
        this.getarticleList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作'
        })
      })
    },
    recoverHandle (articleManageId) {
      console.log(articleManageId)
      this.$confirm('是否继续该操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const data = Qs.stringify({ articleManageId, articleManageStatus: 1 })
        console.log(data)
        const { data: res } = await this.$http.post('/articleManage/updateArticleManage', data)
        console.log(119, res)
        if (res.status !== 200) return this.$message.error(res.msg)
        this.$message({
          type: 'success',
          message: res.msg
        })
        this.getarticleList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消该操作'
        })
      })
    },
    handleSizeChange (size) {
      this.pageSize = size
      console.log('handleSizeChange', size)
      this.getarticleList()
      // pageSize
    },
    handleCurrentChange (size) {
      console.log('handleCurrentChange', size)
      // currentPage
      this.currentPage4 = size
      this.getarticleList()
    },
    prevClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.getarticleList()
    },
    nextClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.getarticleList()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
