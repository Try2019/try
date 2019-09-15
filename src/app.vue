<template>
  <div style="padding-top: 40px;padding-bottom: 40px">
    <mt-header fixed title="Try"></mt-header>     <!-- mint-ui实现顶部区域 -->


    <transition>
      <router-view></router-view>
    </transition>

    <nav class="mui-bar mui-bar-tab">                  <!-- 使用MUI实现底部区域 -->
      <router-link class="mui-tab-item1" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" to="/user">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" to="shopping">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped>
  .mint-header{
    z-index: 99;
  }

  .v-enter{
    transform: translateX(100%);
    opacity: 0;
  }
  .v-leave-to{
    transform: translateX(-100%);     /* 分开写令其与另一个组件进入的相同方向离开 */
    opacity: 0;
    position: absolute; /* 令其脱离文件流解决进出时上下跳动 */
  }

  .v-enter-active,.v-leave-active{
    transition: all 0.7s ease;
  }

  /*
  改类名，解决tabbar无法切换的问题
   */
  .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
