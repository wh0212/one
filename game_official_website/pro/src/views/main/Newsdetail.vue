<template>
    <div id="root">
        <div id="main">
            <div class="main_img">
                <div class="main_img_content">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <!-- <img src="" alt=""> -->
            </div>
            <div class="main_content">
                <div class="main_top">
                    <span class="returnList" @click="returnHandle()">返回列表</span>
                    <span class="title">{{articleDetail.articleManageHead}}</span>
                    <span class="other_info">新闻资讯>{{articleManageType}}>正文</span>
                    <span class="time">{{articleDetail.articleManageUpdateDate | converTime('YYYY-MM-DD')}}</span>
                </div>
                <div class="main_bottom" v-html="articleDetail.articleManageDetails"></div>

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

    </div>
</template>
<script>
import Qs from 'qs'
export default {
  data () {
    return {
      articleDetail: {},
      articleManageType: '',
      path: ''
    }
  },
  mounted () {
  },
  created () {
    this.getCurrentDetail()
    console.log(this.$route.query.path)
    this.path = this.$route.query.path
  },
  methods: {
    async getCurrentDetail () {
      let info = {
        articleManageStatus: 1,
        articleManageId: this.$route.query.id
      }
      const data = Qs.stringify(info)
      const { data: res } = await this.$http.post('/articleManage/findArticleManage', data)
      console.log(res.data.items)
      this.articleDetail = res.data.items[0]
      if (res.data.items[0].articleManageType === 1) {
        this.articleManageType = '新闻'
      }
      if (res.data.items[0].articleManageType === 2) {
        this.articleManageType = '公告'
      }
      if (res.data.items[0].articleManageType === 3) {
        this.articleManageType = '活动'
      }
      if (res.data.items[0].articleManageType === 4) {
        this.articleManageType = '攻略'
      }
    },
    returnHandle () {
      console.log(1)
      this.$router.push('/main/home')
    }
  }

}
</script>
<style lang="less" scoped>
#root{
    #main{
        position: relative;
        width: 100%;
        height: 2200px;
        // background-color: pink;
        .main_img{
            height: 390px;
            margin: 0 auto;
            // background-color: #fff;
            .main_img_content{
                position: relative;
                width: 840px;
                height: 390px;
                margin: 0 auto;
                // background-color: pink;
                div{
                width: 280px;
                height: 390px;
                float: left;
                &:nth-child(1){
                    background-image: url(../../assets/images/news1.png);
                }
                &:nth-child(2){
                    background-image: url(../../assets/images/news2.png);
                }
                &:nth-child(3){
                    background-image: url(../../assets/images/news3.png);
                }
                }
            }

        }
        .main_content{
            width: 987px;
            // height: 100%;
            background-color: #fff;
            margin: 0 auto;
            .main_top{
                position: relative;
                height: 160px;
                border-bottom: 1px solid #E0E0E0;
                text-align: center;
                :hover{
                        cursor: pointer;
                }
                .returnList{
                    position: absolute;
                    top: 30px;
                    left: 105px;
                    display: block;
                    background-color: #78C4D9;
                    font-size: 12px;
                    color: #fff;
                    padding: 5px 15px;
                    border-radius: 15px;

                }
                .title{
                    position: absolute;
                    top: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 18px;
                    color: #FF0000;
                    font-weight: 700;
                }
                .other_info{
                    position: absolute;
                    top: 110px;
                    left: 360px;
                    font-size: 12px;
                    color: #7D7D7D;
                }
                .time{
                    position: absolute;
                    top: 110px;
                    left: 615px;
                    font-size: 12px;
                    color: #7D7D7D;
                }
            }
            .main_bottom{
                padding: 50px 150px;
                height: 1200px;
            }
        }
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
