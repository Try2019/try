<template>
  <div>
    <!-- 这里借助MUI中的tab-top-webview-main.html，然后将 mui-fullscreen类去掉 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a v-bind:class='["mui-control-item",item.id==0? "mui-active" : ""]'
             v-for="item in msg" v-bind:key="item.id" v-on:click="getImgs(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>

    </div>

    <ul class="imgs">
      <router-link v-for="item in list" v-bind:key="item.id" v-bind:to="'/home/photoInfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h4>{{item.title}}</h4>
          <p class="info-p" v-html="item.zhaiyao"></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  //1、导入MUI的js文件
  import {Toast} from 'mint-ui'
  import mui from '../../lib/dist/js/mui.js'

  //3、但是只有上面两部会报错，需要移除webpack的严格模式
  /*
    首先安装对应的包：npm install babel-plugin-transform-remove-strict-mode -D
    然后打开.babelrc文件，在plugins数组中添加transform-remove-strict-mode
   */

  export default {
    data:function () {
      return {
        msg:[],
        list:[]
      }
    },
    created(){
      this.getImgCatelogy();
      //默认进入页面后传入id为0的图片组
      this.getImgs(0);
    },
    methods:{
      getImgCatelogy:function () {
        this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(result=>{
          if(result.body.status===0){
            this.msg=result.body.message;
            this.msg.unshift({title: "全部", id: 0});
          }
          else{
            Toast('数据获取失败');
          }
        })
      },
      getImgs:function (id) {
        this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+id).then(result=>{
          if(result.body.status===0){
            this.list=result.body.message;
          }
          else{
            Toast('数据获取失败');
          }
        })
      }
    },
    mounted(){  //当组件中的dom结构被渲染好并放置在页面中时，会执行这个钩子函数
      //2、初始化滑动控件
      mui('.mui-scroll-wrapper').scroll({
        deceleration:0.0005            //减速系数，越大越慢
      })
      //保证有元素了才开始加载，防止第一次进入页面时导航栏无法滑动问题
    }
  }
</script>

<style scoped>
  *{
    touch-action: none;
  }
  /* 这个属性指定某个给定的区域是否允许用户操作 */
  /* 用于移除滑动时控制台出现的警告，只有Chrome有这个警告 */

  img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .imgs{
    margin: 0;
    padding: 0;
  }
  .imgs li{
    list-style: none;
    text-align: center;
    position: relative;
  }
  .imgs img{
    background:#ccc;
    width: 100%;
    margin: 5px;
    box-shadow: 0px 0px 5px #999;
    border-radius: 15px;
  }

  .info{
    background: rgba(0,0,0,0.6);
    position: absolute;
    max-height: 88px;
    bottom: 10px;
  }
  .info h4{
    font-size: 16px;
    color: white;
  }
  .info p{
    color: white;
    font-size: 12px;
  }
</style>
