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
/*import { Swipe, SwipeItem, Button ,Lazyload } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(Lazyload);*/
//由于Lazyload在按需导入时不起作用，需要全局导入
import MintUI from 'mint-ui';
Vue.use(MintUI);

//购物车图标的使用
import './lib/dist/css/mui.css'
import './lib/dist/css/icons-extra.css'

//导入时间格式插件
import moment from 'moment';

//安装图片预览插件
import VuePreview from 'vue-preview';
Vue.use(VuePreview)

//vue-resource的相关配置：
//Vue.http.options.root="http://www.liulongbin.top:3005"        全局的URL地址
//全局设置post请求时 表单数据格式组织形式
Vue.http.options.emulateJSON=true;

//vuex的配置导入
import Vuex from 'vuex';
Vue.use(Vuex);

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

//获取localStorage中的购物车信息
let shopCar=JSON.parse(localStorage.getItem('car')) || [];
let store=new Vuex.Store({
  state:{                  //this.$store.state.***
    shopCar:shopCar,           //将购物车中的各个商品设计为一个数组，其中包括【商品id，购买数量，商品单价，是否购买】
  },
  mutations:{               //this.$store.commit(' *** ',paramOnly)
    addGoods(state,goodsParams){
      let mark=0;
      for(let i=0;i<state.shopCar.length;i++){
        if(goodsParams[0]===state.shopCar[i].id){
          mark=1;
          state.shopCar[i].count+=goodsParams[1];
        }
      }
      if(mark===0)
      state.shopCar.push({id:goodsParams[0],count:goodsParams[1],price:goodsParams[2],buyNow:true})
      
      //模拟数据库，将购物车内商品存入localStorage中
      localStorage.setItem('car',JSON.stringify(state.shopCar));
    },
    updateGoods:function (state,idCount) {
      state.shopCar.some(item=>{
        if(item.id===idCount[0]){
          item.count=idCount[1];
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.shopCar) );
    },
    removeFromCar:function (state,id) {
      state.shopCar.some((item,i)=>{
        if(item.id==id){
          state.shopCar.splice(i,1);
          localStorage.setItem('car',JSON.stringify(state.shopCar) );
          return true;
        }
      })
    },
    goodsSelected:function (state,info) {
      state.shopCar.forEach(item=>{
        if(item.id===info[0]){
          item.buyNow=info[1];
        }
      });
      localStorage.setItem('car',JSON.stringify(state.shopCar) );
    }
  },
  getters:{                //this.$store.getters.***
    getShopCarCount:function (state) {
      let goodsC=0;
      for(let i=0;i<state.shopCar.length;i++){
        goodsC+=parseInt(state.shopCar[i].count);
      }
      return goodsC;
    },
    getIdCount:function (state) {
      let idCount={};
      for(let i=0;i<state.shopCar.length;i++){
        idCount[state.shopCar[i].id]=state.shopCar[i].count;
      }
      return idCount;
    },
    getChoose:function (state) {
      let isChoose={};
      for(let i=0;i<state.shopCar.length;i++){
        isChoose[state.shopCar[i].id]=state.shopCar[i].buyNow;
      }
      return isChoose;
    },
    howMuch:function (state) {
      let goodsCount=0,moneyCount=0;
      for(let i=0;i<state.shopCar.length;i++){
        if(state.shopCar[i].buyNow===true){
          goodsCount+=parseInt(state.shopCar[i].count);
          moneyCount+=state.shopCar[i].price*parseInt(state.shopCar[i].count);
        }
      }
      return [goodsCount,moneyCount];
    }
  }
});

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
  router:myRouter,
  store:store
});
