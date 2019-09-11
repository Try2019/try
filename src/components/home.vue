<template>
  <div>
    <!-- 使用mint-ui中的swipe实现轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>

    <!-- 轮播图下的各个图标 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-email"></span>
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <span class="mui-icon mui-icon-chatbubble"></span>
        <div class="mui-media-body">商品购买</div></a></li>
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

</script>

<style scoped>
  .mint-swipe{
    height: 200px;
  }
  .mint-swipe-item:nth-child(1){
    background: url(../imgs/p1.jpg) no-repeat;
  }
  .mint-swipe-item:nth-child(2){
    background: url(../imgs/p2.jpg) no-repeat;
  }
  .mint-swipe-item:nth-child(3){
    background: url(../imgs/p3.jpg) no-repeat;
  }



  .mui-table-view span{
    background: #ca95ff;
    border-radius: 50%;
    padding: 10px;
  }
</style>
