<template>
    <div id="root">
        <div id="main">
            <div class="main_img">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="main_tiltle">
                <div @click="clickHandle('0')" :style="isbgc0?'backgroundColor:#6E97B4;color:#fff;':'backgroundColor:#fff;color:#000'">
                    综合
                    <span>
                        SYNTHESIZE
                    </span>
                </div>
                <div @click="clickHandle('1')" :style="isbgc1?'backgroundColor:#6E97B4;color:#fff;':'backgroundColor:#fff;color:#000'">
                    新闻
                    <span>
                        NEWS
                    </span>
                </div>
                <div @click="clickHandle('2')" :style="isbgc2?'backgroundColor:#6E97B4;color:#fff;':'backgroundColor:#fff;color:#000'">
                    公告
                    <span>
                        NOTICE
                    </span>
                </div>
                <div @click="clickHandle('3')" :style="isbgc3?'backgroundColor:#6E97B4;color:#fff;':'backgroundColor:#fff;color:#000'">
                    活动
                    <span>
                        EVENT
                    </span>
                </div>
                <div @click="clickHandle('4')" :style="isbgc4?'backgroundColor:#6E97B4;color:#fff;':'backgroundColor:#fff;color:#000'">
                    攻略
                    <span>
                        STRATEGY
                    </span>
                </div>
            </div>
            <div class="main_content">
                <div class="main_content_item" v-for="item in morearticalList" :key="item.articleManageId"  @click="contentItemHandle(item.articleManageId)">
                    <span class="tag">{{item.articleManageType===1?'新闻':(item.articleManageType===2?'公告':(item.articleManageType===3?'活动':'攻略'))}}</span>
                    <span class="gg_title">{{item.articleManageHead}}</span>
                    <span class="time">{{item.articleManageUpdateDate | converTime('YYYY-MM-DD')}}</span>
                </div>
            </div>
            <div class="main_content_bottom">
                <el-pagination
                    :background="true"
                    layout="prev, pager, next"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    @prev-click="prevClickChange"
                    @next-click="nextClickChange"
                    :current-page="currentPage4"
                    :page-sizes="[5,10,15]"
                    :total="totalNum">
                </el-pagination>
            </div>
        </div>
          <div id="bottom">
              <div class="bottom_1">
                <span>用户协议</span>
                <span class="bottom_1_1">|</span>
                <span>隐私政策</span>
                <span class="bottom_1_1">|</span>
                <span>家长监护</span>
                <span class="bottom_1_1">|</span>
                <span>关于我们</span>
                <span class="bottom_1_1">|</span>
                <span>加入我们</span>
              </div>
              <div class="bottom_2">
                <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏，注意自我保护，谨防上当受骗。适度游戏益脑，沉迷游戏伤身，合理安排时间，享受健康生活。</p>
                <p>适龄提示：本游戏适合17岁（含）以上玩家娱乐 陕公网安备000000000000000号 增值电信业务经营许可证：陕00-00000000</p>
                <p>陕西星环网络科技有限公司 地址：陕西省西安市雁塔区电子正街南段 电话：029-88888888</p>
              </div>
            </div>
    </div>
</template>
<script>
import Qs from 'qs'
export default {
  data () {
    return {
      morearticalList: [],
      currentPage4: 1,
      totalNum: null,
      pageSize: 10,
      isbgc0: true,
      isbgc1: false,
      isbgc2: false,
      isbgc3: false,
      isbgc4: false,
      morenewsitem: '0'
    }
  },
  mounted () {
    document.getElementById('main').scrollIntoView()
  },
  created () {
    if (window.sessionStorage.getItem('morenewsitem')) {
      this.morenewsitem = window.sessionStorage.getItem('morenewsitem')
    }
    this.clickHandle(this.morenewsitem)
  },
  methods: {
    contentItemHandle (id) {
      this.$router.push({ path: '/main/detail', query: { id, path: '/more/news' } })
    },
    async clickHandle (e) {
      window.sessionStorage.setItem('morenewsitem', e)
      this.currentPage4 = 1
      let info = {
        articleManageStatus: 1
        // pageNum: this.currentPage4,
        // pageSize: this.pageSize
      }
      if (e === '0') {
        this.isbgc0 = true
        this.isbgc1 = false
        this.isbgc2 = false
        this.isbgc3 = false
        this.isbgc4 = false
      } else if (e === '1') {
        this.isbgc0 = false
        this.isbgc1 = true
        this.isbgc2 = false
        this.isbgc3 = false
        this.isbgc4 = false
      } else if (e === '2') {
        this.isbgc0 = false
        this.isbgc1 = false
        this.isbgc2 = true
        this.isbgc3 = false
        this.isbgc4 = false
      } else if (e === '3') {
        this.isbgc0 = false
        this.isbgc1 = false
        this.isbgc2 = false
        this.isbgc3 = true
        this.isbgc4 = false
      } else if (e === '4') {
        this.isbgc0 = false
        this.isbgc1 = false
        this.isbgc2 = false
        this.isbgc3 = false
        this.isbgc4 = true
      }
      console.log(typeof e)
      if (e !== '0') {
        info.articleManageType = e
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res.data.items)
      this.morearticalList = res.data.items
      this.totalNum = res.data.totalNum
    },
    async paginationHandle (e) {
      let info = {
        articleManageStatus: 1,
        pageNum: this.currentPage4,
        pageSize: this.pageSize
      }
      console.log(typeof e)
      if (e === '0') {
        this.isbgc1 = true
        this.isbgc2 = false
        this.isbgc3 = false
        this.isbgc4 = false
        this.isbgc5 = false
      } else if (e === '1') {
        this.isbgc1 = false
        this.isbgc2 = true
        this.isbgc3 = false
        this.isbgc4 = false
        this.isbgc5 = false
      } else if (e === '2') {
        this.isbgc1 = false
        this.isbgc2 = true
        this.isbgc3 = false
        this.isbgc4 = false
        this.isbgc5 = false
      } else if (e === '3') {
        this.isbgc1 = false
        this.isbgc2 = false
        this.isbgc3 = true
        this.isbgc4 = false
        this.isbgc5 = false
      } else if (e === '4') {
        this.isbgc1 = false
        this.isbgc2 = false
        this.isbgc3 = false
        this.isbgc4 = true
        this.isbgc5 = false
      }
      if (e !== '0') {
        info.articleManageType = e
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res.data.items)
      this.morearticalList = res.data.items
      this.totalNum = res.data.totalNum
    },
    // 分页
    handleSizeChange (size) {
      this.pageSize = size
      console.log('handleSizeChange', size)
      this.paginationHandle()
      // pageSize
    },
    handleCurrentChange (size) {
      console.log('handleCurrentChange', size)
      // currentPage
      this.currentPage4 = size
      this.paginationHandle()
    },
    prevClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.paginationHandle()
    },
    nextClickChange (size) {
      console.log(size)
      this.currentPage4 = size
      this.paginationHandle()
    }
  }

}
</script>
<style lang="less" scoped>
#root{
    height: 2400px;
    #main{
        width: 990px;
        height: 100%;
        // background-color: pink;
        margin: 0 auto;
        .main_img{
            position: relative;
            height: 390px;
            div{
                width: 280px;
                height: 390px;
                // background-color: #fff;
                &:nth-child(1){
                    position: absolute;
                    top: 0;
                    left: 78px;
                    background-image: url(../../assets/images/news1.png);
                    background-repeat: no-repeat;
                    background-position: -3px -19px;
                }
                &:nth-child(2){
                    position: absolute;
                    top: 0;
                    left: 360px;
                    // background-color: blue;
                    background-image: url(../../assets/images/news2.png);
                    background-repeat: no-repeat;
                    background-position: -1px -26px;
                }
                &:nth-child(3){
                    position: absolute;
                    top: 0;
                    right: 69px;
                    // background-color: #fff;
                    background-image: url(../../assets/images/news3.png);
                    background-repeat: no-repeat;
                    background-position: -5px -18px;
                }
                &:nth-child(4){
                    position: absolute;
                    bottom: 20px;
                    left: 0;
                    height: 50px;
                    width: 100%;
                    background-color: #6E97B4;
                }
            }
        }
        .main_tiltle{
            position: absolute;
            top: 315px;
            left: 50%;
            transform: translateX(-50%);
            height: 50px;
            width: 984px;
            border: 1px solid #FFEDBC;
            display: flex;
            background-color: #fff;
            cursor: pointer;
            div{
                flex: 1;
                font-size: 20px;
                padding-top: 3px;
                text-align: center;
                span{
                    display: block;
                    font-size: 12px;
                }
                &:nth-child(1){
                    border-right: 1px solid #FFEDBC;
                }
                &:nth-child(2){
                    border-right: 1px solid #FFEDBC;
                }
                &:nth-child(3){
                    border-right: 1px solid #FFEDBC;
                }
                &:nth-child(4){
                    border-right: 1px solid #FFEDBC;
                }
            }
        }
        .main_content{
            width: 987px;
            height: 1512px;
            background-color: #fff;
            border: 1px solid #FFEDBC;
            :hover{
                cursor: pointer;
            }
            .main_content_item{
                position: relative;
                width: 100%;
                height: 150px;
                // background-color: pink;
                border-bottom: 1px solid #E0E0E0;

                .tag{
                    position: absolute;
                    top: 40px;
                    left: 210px;
                    padding: 3px 15px;
                    font-size: 14px;
                    background-color: #6E97B4;
                    border-radius: 15px;
                    color: #fff;
                }
                .title{
                    position: absolute;
                    top: 40px;
                    left: 350px;
                    border-radius: 15px;
                    font-size: 18px;
                    font-weight: 400;
                }
                .gg_title{
                    position: absolute;
                    top: 40px;
                    left: 350px;
                    border-radius: 15px;
                    color: #FF0000;
                    font-size: 18px;
                    font-weight: 700;
                }
                .time{
                    position: absolute;
                    top: 40px;
                    right: 95px;
                    font-size: 14px;
                    border-radius: 15px;
                }
            }

        }

    }
    .main_content_bottom{
        width: 100%;
        height: 40px;
        background-color: #E0E0E0;
        text-align: center;
        padding-top: 40px;
        margin-top: -5px;

    }
 /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #6fa6aa;
  color: #fff;
}
    #bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: #000;
        color: #fff;
        text-align: center;
        padding-top: 20px;
        margin-top: 30px;
        .bottom_1{
          font-size: 14px;
          :hover{
            cursor: pointer;
          }
          .bottom_1_1{
            margin: 0 10px;
          }
        }
        p{
          font-size: 1px;
        }
        .bottom_2{
          text-align: left;
          width: 760px;
          margin: 0 auto;
        }
    }
}
</style>
