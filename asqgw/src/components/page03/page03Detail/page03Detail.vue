<template>
  <div>
    <div class="contain detailBox">
      <div class="tip">
        <div class="title">{{showData.activity_name}}</div>
        <div class="desc">
          <span class="time">{{showData.activitytime}}</span>
          <span class="zan">{{showData.goodnum}}</span>
        </div>
      </div>
      <div class="content">
        <img v-bind:src="showData.activity_pic" alt="">
        <p>{{showData.activity_description}}</p>
        <img v-bind:src="showData.activity_pic2" alt="">
        <p>{{showData.activity_pic2description}}</p>
        <img v-bind:src="showData.activity_pic3" alt="">
        <p>{{showData.activity_pic3description}}</p>
        <img v-bind:src="showData.bodypic4" alt="">
        <p>{{showData.bodytext4}}</p>
        <img v-bind:src="showData.bodypic5" alt="">
        <p>{{showData.bodytext5}}</p>
        <img v-bind:src="showData.bodypic6" alt="">
        <p>{{showData.bodytext6}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import golobal_ from '../../../components/Global';
  import qs from 'qs';
  export default {
    name: 'page03Detail',
    data () {
      return {
        showData:{}
      }
    },
    created () {
      var that =this;
      that.getShowData();

    },
    methods:{
      getShowData () {
        var that = this;
        const url = golobal_.BaseUrl+'freeteam/showTeamactivityinfo';
        var params = qs.stringify({
          page: 1,
          activityid: that.$route.params.id,
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.showData = res.data.detail;
        });
      },

    }
  }

</script>
