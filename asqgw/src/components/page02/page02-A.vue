<template>
<div>
  <div class="contain liveSchool clearfix">
    <div class="topschool clearfix" style="margin-bottom: 40px">
      <div class="schoolLeft">
        <div class="title">
          <p>Residential school</p>
          <h2>复兴社区爱社区居民学校</h2>
        </div>
        <p class="desc">
          复兴社区爱社区居民学校是发展用户的强有力抓手，是扶持居民创业、培育志愿者及品牌文艺团队的阵地。以资源换资源，引入社会组织、培训机构等多元化服务主体，丰富居民业余文化娱乐生活。复兴社区爱社区居民学校运营至今，针对老幼中青开展了各类公益课程达900多课时。
        </p>
        <img src="../../../static/imgs/ico17.jpg" alt="">
      </div>
      <img class="schoolImg" src="../../../static/imgs/408x284.jpg" alt="">
    </div>
    <div class="volunteer-title">
      <p>课程风采</p>
      <div></div>
      <div>LATEST VOLUNTEER ACTIVITIES</div>
    </div>
    <div class="classStyle">
      <ul class="clearfix">
        <li v-for="item in jmxxFn">
          <router-link :to="{ name: 'page02Detail',params: { id: item.historyid }}"  class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.picurl1 + ')' }"></router-link>
          <div class="rtTxt">
            <h2 class="title">{{item.title}}</h2>
            <div class="desc"> {{item.historyinfo}}</div>
            <div class="time">{{item.historytime}}</div>
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
</template>
<script>
  import golobal_ from '../../components/Global';
  import qs from 'qs';
  export default {
    name: 'page02A',
    data () {
      return {
        jmxxFn:[],
        currentPage:1,
        pagesize:9,
        total:0
      }
    },
    created () {
      var that =this;
      that.getJmData();
    },
    methods:{
      handleSizeChange: function (size) {
        this.currentPage = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        this.getJmData();
      },
      getJmData(){
        var that = this;
        const url = golobal_.BaseUrl+'school/goodcoursepage';
        var params = qs.stringify({
          page: 1
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.jmxxFn = res.data.detail.list;
          that.total = res.data.detail.totalRow;
        });
      }
    }
  }

</script>
