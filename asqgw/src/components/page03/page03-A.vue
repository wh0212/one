<template>
<div>
  <div class="contain liveSchool clearfix zyzTop">
    <div class="topschool clearfix" style="margin-bottom: 40px">
      <div class="schoolLeft">
        <div class="title">
          <p>Volunteer service</p>
          <h2>复兴社区爱社区志愿服务</h2>
        </div>
        <p class="desc">
          依托复兴社区爱社区APP，居民可以随时报名成为志愿者，参与志愿服务及活动，采用积分回报机制，促进志愿活动长效、有序、健康的开展下去。自复兴社区爱社区志愿体系运作至今，社区内共组建了7支志愿服务团队，共有300余位居民加入了志愿者团队，围绕社区治理、扶贫帮困、文体建设等方面共开展了100多次志愿服务及活动。
        </p>
      </div>
      <img class="zyzImg" src="../../../static/imgs/385x166.jpg" alt="">
    </div>
    <div class="volunteer-title" style="margin-bottom: 80px">
      <p>志愿者团队建设</p>
      <div></div>
      <div>VOLUNTEER TEAM BUILDING</div>
    </div>
  </div>
  <div class="volunteer-team">
    <div class="contain zyzChange">
      <el-tabs v-model="activeName">
        <el-tab-pane  v-for="item in zyzTd" v-bind:key="item.team_id">
          <div class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.timepic1 + ')' }"></div>
          <div class="team-detail">
            <p>{{item.team_name}}</p>
            <div class="desc">
              <el-scrollbar style="height: 100%">
                {{item.team_description}}
              </el-scrollbar>
            </div>
          </div>
        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
  <div class="volunteer-content">
    <div class="contain">
      <div class="volunteer-title">
        <p>最新志愿者活动</p>
        <div></div>
        <div>LATEST VOLUNTEER ACTIVITIES</div>
      </div>
      <div class="volunteer-list clearfix">
        <ul class="clearfix">
          <li v-for="item in zyzFn" v-bind:key="item.team_activity_id">
            <router-link :to="{ name: 'page03Detail',params: { id: item.team_activity_id }}" class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.showpic + ')' }"></router-link>
              <div class="activity-info">
                <h2>{{item.title}}</h2>
                <p class="desc">
                  <el-scrollbar style="height: 100%">
                    {{item.activity_description}}
                  </el-scrollbar>
                </p>
              </div>
              <div class="origin-time clearfix">
                <p>来源：{{item.team_name}}</p>
                <span class="time">
                 {{item.activitytime}}
                </span>
              </div>
          </li>
        </ul>
      </div>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, prev, pager, next, jumper"
        :total=total>
      </el-pagination>
    </div>
  </div>
</div>
</template>
<script>
  import golobal_ from '../../components/Global';
  import qs from 'qs';
  export default {
    name: 'page03A',
    data () {
      return {
        activeName: '0',
        currentPage:1,
        pagesize:9,
        total:0,
        zyzTd:[],
        zyzFn:[]
      }
    },
    created () {
      var that =this;
      that.getTdData();
      that.getZyData();
    },
    methods:{
      handleSizeChange: function (size) {
        this.currentPage = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        this.getZyData();
      },
      getTdData () {
        var that = this;
        const url = golobal_.BaseUrl+'freeteam/showindex';
        this.$axios({
          method: 'post',
          url:url
        }).then((res)=>{
          that.zyzTd = res.data.detail.teamlist;
        });
      },
      getZyData(){
        var that = this;
        const url =golobal_.BaseUrl+'freeteam/teamactivity';
        var params = qs.stringify({
          page: that.currentPage
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.zyzFn = res.data.detail.list;
          that.total = res.data.detail.totalRow;
        });
      }
    }
  }

</script>
<style>
  .el-scrollbar__wrap{
    overflow-x: hidden !important;
  }
</style>
