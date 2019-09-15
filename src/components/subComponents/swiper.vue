<template>
  <div>
    <!-- 使用mint-ui中的swipe实现轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in thumList" v-bind:key="item.src">
        <img v-bind:src="item.src" v-bind:class="{full:isfull}"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{

    },
    props:['thumList','isfull']
  }
</script>

<style scoped>
  .mint-swipe{
    height: 200px;
    text-align: center;
  }
  img{
    height: 100%;
  }
  .full{
    width: 100%;
  }
</style>
