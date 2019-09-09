//入口文件
import Vue from 'vue/dist/vue'
import myRouter from './router.js'
import app from './app.vue'

import {Header} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header);

import './lib/dist/css/mui.min.css'

let vm=new Vue({
  el:'#app',
  data:{
    msg:'test'
  },
  methods:{
  
  },
  render:function (createElement) {
    return createElement(app);
  }
});
