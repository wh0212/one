<template>
  <div>

    <div class="contain detailBox">
      <div class="tip">
        <div class="title">{{showData.title}}</div>
        <div class="desc">
          <span class="time">{{showData.activitytime}}</span>
          <span class="zan">{{showData.lookcount}}</span>
        </div>
      </div>
      <div class="content" v-if="showData.historytext !== null" v-html="showData.historytext">
      </div>
      <div class="content" v-if="showData.historytext == null">
        <img v-bind:src="showData.bodypic1" alt="">
        <p>{{showData.bodytext1}}</p>
        <img v-bind:src="showData.bodypic2" alt="">
        <p>{{showData.bodytext2}}</p>
        <img v-bind:src="showData.bodypic3" alt="">
        <p>{{showData.bodytext3}}</p>
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
    name: 'page01Detail',
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
        const url = golobal_.BaseUrl+'history/historyinfo';
        var params = qs.stringify({
          page: 1,
          historyid: that.$route.params.id,
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.showData = res.data.detail.activity;
        });
      },

    }
  }

</script>
