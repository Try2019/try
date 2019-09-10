<template>
  <div>
    <!-- 使用mint-ui中的swipe实现轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
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
</style>
