<template>
  <div>
    <div class="contain detailBox">
      <div class="tip">
        <div class="title">{{showData.historyname}}</div>
        <div class="desc">
          <span class="time">{{showData.historytime}}</span>
          <span class="zan">{{showData.historylooknum}}</span>
        </div>
      </div>
      <div class="content" v-html="showData.historydesc">
      </div>
    </div>
  </div>
</template>

<script>
  import golobal_ from '../../../components/Global';
  import qs from 'qs';
  export default {
    name: 'page02Detail',
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
        const url = golobal_.BaseUrl+'school/goodinfo';
        var params = qs.stringify({
          historyid: that.$route.params.id,
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
