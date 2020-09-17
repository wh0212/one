<template>
  <div>
    <div class="contain actList">
      <ul class="clearfix list">
        <li v-for="item in qzhdFn">
          <router-link :to="{ name: 'page01Detail',params: { id: item.historyid }}" class="imgBg"  v-bind:style="{ backgroundImage: 'url(' + item.pictureurl + ')' }"></router-link>
          <a class="title clearfix"><div class="tit">{{item.title}}</div><span class="time">{{item.activitytime}}</span></a>
          <p class="desc">{{item.bodytext1}}</p>
        </li>
      </ul>
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
    name: 'page01C',
    data () {
      return {
        qzhdFn:[],
        currentPage:1,
        pagesize:9,
        total:0
      }
    },
    created () {
      var that =this;
      that.getQzData();
    },
    methods:{
      handleSizeChange: function (size) {
        this.currentPage = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        this.getQzData();
      },
      getQzData () {
        var that = this;
        const url = golobal_.BaseUrl+'history/historyactivitylist';
        var params = qs.stringify({
          page: that.currentPage,
          activitytype: "2",
        });
        this.$axios({
          method: 'post',
          url:url,
          data:params
        }).then((res)=>{
          that.qzhdFn = res.data.detail.list;
          that.total = res.data.detail.totalRow;
        });
      }
    }
  }
</script>
