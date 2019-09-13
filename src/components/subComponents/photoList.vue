<template>
  <div>
    <!-- 这里借助MUI中的tab-top-webview-main.html，然后将 mui-fullscreen类去掉 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            热点
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            北京
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            社会
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            科技
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  //1、导入MUI的js文件
  import mui from '../../lib/dist/js/mui.js'

  //3、但是只有上面两部会报错，需要移除webpack的严格模式
  /*
    首先安装对应的包：npm install babel-plugin-transform-remove-strict-mode -D
    然后打开.babelrc文件，在plugins数组中添加transform-remove-strict-mode
   */

  export default {
    data:function () {
      return {

      }
    },
    methods:{

    },
    mounted(){  //当组件中的dom结构被渲染好并放置在页面中时，会执行这个钩子函数
      //2、初始化滑动控件
      mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005            //减速系数，越大越慢
      });
      //保证有元素了才开始加载，防止第一次进入页面时导航栏无法滑动问题
    }
  }
</script>

<style scoped>
  *{
    touch-action: pan-y;      /* 这个属性指定某个给定的区域是否允许用户操作 */
    /* 用于移除滑动时控制台出现的警告，只有Chrome有这个警告 */
  }
</style>
