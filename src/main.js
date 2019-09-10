//入口文件
import Vue from 'vue'
import myRouter from './router.js'
import app from './app.vue'

import {Header} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header);

//轮播图的使用
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//购物车图标的使用
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'

let vm=new Vue({
  el:'#app',
  data:{
    msg:'test'
  },
  methods:{
  
  },
  render:function (createElement) {
    return createElement(app);
  },
  router:myRouter
});
