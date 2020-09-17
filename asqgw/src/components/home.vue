<template>
  <div id="home">
    <el-carousel indicator-position="outside" height="532px">
      <el-carousel-item trigger="click" v-for="(item,index) in imgList" v-bind:key="item.id">
        <el-row>
          <el-col :span="24"><img style="height: 532px" :src="item.idView" class="banner_img"/></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <div class="idx-goTo">
      <ul>
        <li>
          <a href="#shequ">社区<br/>服务中心</a>
        </li>
        <li>
          <a href="#yanfa">研发<br/>服务中心</a>
        </li>
        <li>
          <a href="#APP">APP<br/>线上平台</a>
        </li>
        <li>
          <a href="#school">居民学校<br/>线下平台</a>
        </li>
      </ul>
    </div>
    <div class="idx-wthd">
      <div class="idx-w clearfix">
        <div class="idx-wthd-list">
          <div class="title" id="shequ">
            <h1>社区文体活动</h1>
            <p>Community stylistic activities</p>
            <div class="line"><b class="red"></b></div>
          </div>
          <ul class="clearfix">
            <router-link class="more" to="/page01/page01-a">+查看更多</router-link>
            <li v-for="item in wthdFn">
              <router-link :to="{ name: 'page01Detail',params: { id: item.historyid }}"  class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.pictureurl + ')' }"></router-link>
              <div class="tit clearfix"><div class="txt">{{item.title}}</div><span class="time">{{item.activitytime}}</span></div>
              <p class="desc">
                {{item.bodytext1}}
              </p>
            </li>
          </ul>
        </div>
        <div class="jqhd">
          <div class="titles clearfix">
            <h2>节庆活动<div class="line long"><b class="red"></b></div></h2>
            <span>festival activities</span>
            <router-link class="more" to="/page01/page01-b">＋查看更多</router-link>
          </div>
          <ul class="jqhd-list clearfix">
            <li v-for="item in jqhdFn">
              <router-link :to="{ name: 'page01Detail',params: { id: item.historyid }}">{{item.title}}</router-link>
              <span>{{item.activitytime}}</span>
            </li>
          </ul>
        </div>
        <div class="qzhd">
          <div class="titles clearfix">
            <h2>亲子活动<div class="line long"><b class="red"></b></div></h2>
            <span>Parent-child activity</span>
            <router-link class="more" to="/page01/page01-c"> ＋查看更多</router-link>
          </div>
          <ul class="qzhd-list clearfix">
            <li v-for="item in qzhdFn">
              <router-link :to="{ name: 'page01Detail',params: { id: item.historyid }}" class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.pictureurl + ')' }"></router-link>
              <a class="txt">{{item.title}}</a>
              <p class="desc">{{item.bodytext1}}</p>
              <span class="time">{{item.activitytime}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--社区文体活动-->
    <div class="idx-jmxx">
      <div class="jmxx idx-w clearfix">
        <div class="title" id="school">
          <h1>居民学校</h1>
          <p>Residential school</p>
          <div class="line"><b class="red"></b></div>
        </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="" name="first">
              <div class="idx-jmxxList">
                <div class="jmxxList" v-for="(item,index) in jmxxFn">
                  <router-link :to="{ name: 'page02Detail',params: { id: item.historyid }}" class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.picurl1 + ')' }"></router-link>
                  <div class="txt">
                    <h2>0{{index+1}}/
                      <code>{{item.historyname}}</code>
                      <router-link :to="{ name: 'page02Detail',params: { id: item.historyid }}"><img class="more" src="../../static/imgs/ico6.png"></router-link>
                      <img class="san" src="../../static/imgs/ico5.png">
                    </h2>
                    <p class="desc">
                      {{item.historyinfo}}
                    </p>
                    <div class="time">{{item.historytime}}</div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="" name="second">
              <div class="idx-jmxxList">
                <div class="jmxxList" v-for="(item,index) in jmxxFn2">
                  <router-link :to="{ name: 'page02Detail',params: { id: item.historyid }}" class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.picurl1 + ')' }"></router-link>
                  <div class="txt">
                    <h2>0{{index+4}}/
                      <code>{{item.historyname}}</code>
                      <router-link :to="{ name: 'page02Detail',params: { id: item.historyid }}"><img class="more" src="../../static/imgs/ico6.png"></router-link>
                      <img class="san" src="../../static/imgs/ico5.png">
                    </h2>
                    <p class="desc">
                      {{item.historyinfo}}
                    </p>
                    <div class="time">{{item.historytime}}</div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
      </div>
      <div class="bgFix"></div>
    </div>
    <!--居民学校-->
    <div class="idx-yfzx">
      <div class="idx-w clearfix">
        <div class="title" id="yanfa">
          <h1>研发服务中心</h1>
          <p>Residential school</p>
          <div class="line"><b class="red"></b></div>
        </div>
        <div class="txt">
          <code>我们做什么？</code>
          <h1>What we do?</h1>
          <p>科技构筑未来，技术创新驱动发展，我们拥有成熟，专业的互联网技术开发团队，致力于爱社区体系APP端、平台端、微信端的研发，构建社区综合服务新体系</p>
        </div>
        <img class="bg2" src="../../static/imgs/bg2.jpg" alt="">
      </div>
    </div>
    <!--研发服务中心-->
    <div class="idx-zyz">
      <div class="idx-w clearfix">
        <div class="title white">
          <h1>志愿者风采</h1>
          <p>Residential school</p>
          <div class="line"><b class="red"></b></div>
        </div>
        <el-carousel :interval="4000" type="card" height="250px">
          <el-carousel-item v-for="item in zyzFn" v-bind:key="item.team_activity_id">
            <el-row class="zyimg"  v-bind:style="{ backgroundImage: 'url(' + item.showpic + ')' }">
            </el-row>
          </el-carousel-item>
        </el-carousel>
        <div class="zyzBoxList">
          <ul class="clearfix">
            <li v-for="item in zyzFn">
              <router-link :to="{ name: 'page03Detail',params: { id: item.team_activity_id }}"  class="imgBg" v-bind:style="{ backgroundImage: 'url(' + item.showpic + ')' }"></router-link>
              <a class="txt">{{item.team_name}}</a>
              <p class="desc">{{item.activity_description}}</p>
              <span class="time">{{item.activitytime}}</span>
            </li>
          </ul>
          <div class="more"><router-link to="/page03/page03-a">+查看更多</router-link></div>
        </div>
      </div>
    </div>
    <!--志愿者风采-->
    <div class="idx-app">
      <div class="idx-w clearfix">
        <div class="title" id="APP">
          <h1>爱社区APP</h1>
          <p>Love community APP</p>
          <div class="line"><b class="red"></b></div>
        </div>
        <div class="phoneBox">
          <div class="flash_box">
            <el-carousel  width="280px" height="483px">
              <el-carousel-item v-for="item in appList" v-bind:key="item.id">
                <el-row>
                  <el-col :span="24"><img style="width: 280px;height: 483px" :src="item.idView" class="banner_img"/></el-col>
                </el-row>
              </el-carousel-item>
            </el-carousel>
          </div>
          <p>爱社区APP</p>
        </div>
        <div class="rtxt">
          “爱i社区”APP于2017年3月正式推广，目前开通有办事指南、社区公告、社区活动、居民黄页、网上办件、物业服务、志愿者、居民学校等十多个基础性和创新式服务；管理模块，随着推广程度的加深和稳定，将陆续开放周边便民服务；加入诚信商户、居民创业、共建共治等模块，逐步拓展公众服务、深化社区治理。
        </div>
      </div>
    </div>
    <!--爱社区APP-->
  </div>
</template>

<script>
  import golobal_ from '../components/Global';
  import qs from 'qs';
  export default {
    name: 'home',
    data () {
      return {
        activeName: 'first',
        imgList: [
          {id: 0, idView: require('../../static/imgs/idx-banner01.jpg')},
          {id: 1, idView: require('../../static/imgs/idx-banner02.jpg')},
          {id: 2, idView: require('../../static/imgs/idx-banner03.jpg')},
          {id: 3, idView: require('../../static/imgs/idx-banner04.jpg')}
        ],
        appList:[
          {id: 0, idView: require('../../static/imgs/app1.jpg')},
          {id: 1, idView: require('../../static/imgs/app2.jpg')},
          {id: 2, idView: require('../../static/imgs/app3.jpg')},
          {id: 3, idView: require('../../static/imgs/app4.jpg')}
        ],
        wthdFn:[],
        jqhdFn:[],
        qzhdFn:[],
        jmxxFn:[],
        jmxxFn2:[],
        zyzFn:[]
      }
    },
    created () {
      var that =this;
      that.getWtData();
      that.getJqData();
      that.getQzData();
      that.getJmData();
      that.getZyData();
    },
    methods:{
      getWtData () {
       var that = this;
       const url = golobal_.BaseUrl+'history/historyactivitylist';
       var params = qs.stringify({
          page: 1,
          activitytype: "0",
       });
       this.$axios({
         method: 'post',
         url:url,
         data:params
       }).then((res)=>{
         that.wthdFn = res.data.detail.list.slice(0,3);
       });
     },
     getJqData () {
        var that = this;
        const url = golobal_.BaseUrl+'history/historyactivitylist';
        var params = qs.stringify({
           page: 1,
           activitytype: "1",
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.jqhdFn = res.data.detail.list.slice(0,6);
        });
      },
      getQzData () {
        var that = this;
        const url = golobal_.BaseUrl+'history/historyactivitylist';
        var params = qs.stringify({
          page: 1,
          activitytype: "2",
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.qzhdFn = res.data.detail.list.slice(0,2);
        });
      },
      getJmData(){
        var that = this;
        const url = golobal_.BaseUrl+'school/goodcoursepage';
        var params = qs.stringify({
          page: 1,
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.jmxxFn = res.data.detail.list.slice(0,3);
          that.jmxxFn2 = res.data.detail.list.slice(3,6);
        });
      },
      getZyData(){
        var that = this;
        const url = golobal_.BaseUrl+'freeteam/teamactivity';
        var params = qs.stringify({
          page: 1,
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.zyzFn = res.data.detail.list.slice(0,4);
        });
      }


    }
  }
</script>

<style>
  .el-carousel__indicators--outside{
    position: absolute !important;
    left: 45% !important;
  }
  .el-carousel__indicator.is-active button{
    background: #fff;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-tabs__content{
    z-index: 2;
  }
  .jmxx .el-tabs__nav{
    float: right !important;
  }
  .jmxx .el-tabs__item{
    line-height: inherit !important;
    cursor: pointer;
    width: 30px;
    height: 8px !important;
    background: #dfdfdf;
    margin-left: 20px;
    margin-right: 0;
    padding: 0 !important;
  }
  .jmxx .el-tabs__active-bar{
    left: 20px !important;
    width: 30px !important;
    height: 8px !important;
    bottom: 4px !important;
  }
  .jmxx .el-tabs__nav-wrap::after{
    display: none;
  }
</style>
