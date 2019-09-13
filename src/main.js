//入口文件
import Vue from 'vue'
import myRouter from './router.js'
import app from './app.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import {Header} from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header);

//轮播图的使用
import { Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//购物车图标的使用
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'

//导入时间格式插件
import moment from 'moment';


//vue-resource的相关配置：
//Vue.http.options.root="http://www.liulongbin.top:3005"        全局的URL地址
//全局设置post请求时 表单数据格式组织形式
Vue.http.options.emulateJSON=true;


//全局过滤器的使用：
/*Vue.filter('dateFormat',function (msg) {
  //2015-04-16T03:50:28.000Z
  let y=msg.substring(0,4);
  let m=msg.substring(5,7);
  let d=msg.substring(8,10);
  let h=msg.substring(11,13);
  let minute=msg.substring(14,16);
  let s=msg.substring(17,19);
  return `${y}-${m}-${d} ${h}:${minute}:${s}`;
})*/
//时间格式插件的使用
Vue.filter('dateFormat',function (msg,pattern='YYYY-MM-DD HH:MM:SS') {
  return moment(msg).format(pattern);
})

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
