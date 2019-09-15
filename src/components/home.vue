<template>
  <div>
    <swiper v-bind:thumList="thumList" v-bind:isfull=true></swiper>

    <!-- 轮播图下的各个图标 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
        <span class="mui-icon mui-icon-email"></span>
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-location"></span>
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-search"></span>
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-phone"></span>
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>

  </div>
</template>

<script>
  import swiper from './subComponents/swiper.vue'
  export default {
    data(){
      return{
        thumList:[
          {src:'./src/imgs/p1.jpg'},
          {src:'./src/imgs/p2.jpg'},
          {src:'./src/imgs/p3.jpg'}
        ]
      }
    },
    methods:{

    },
    components:{
      swiper:swiper
    }
  }
</script>

<style scoped>

  .mui-table-view span{
    background: #ca95ff;
    border-radius: 50%;
    padding: 10px;
  }
</style>
