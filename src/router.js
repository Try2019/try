import VueRouter from 'vue-router';
import Vue from 'vue'
import home from './components/home.vue'
import search from './components/search.vue'
import shopping from './components/shopping.vue'
import user from './components/user.vue'
import newsList from './components/subComponents/newsList.vue'
import newsInfo from './components/subComponents/newsInfo.vue'
import photoList from './components/subComponents/photoList.vue'
import photoInfo from './components/subComponents/photoInfo.vue'
import goods from './components/subComponents/goods.vue'
import goodsInfo from './components/subComponents/goodsInfo.vue'
import goodsIntro from './components/subComponents/goodsIntro.vue'
import goodsComment from './components/subComponents/goodsComment.vue'
Vue.use(VueRouter);


let myRouter=new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home', component:home},
    {path:'/user',component:user},
    {path:'/search',component:search},
    {path:'/shopping',component:shopping},
    {path:'/home/news',component:newsList},
    {path:'/home/newsInfo/:id',component:newsInfo},           //:id表示进行id的匹配
    {path:'/home/photoList',component:photoList},
    {path:'/home/photoInfo/:id',component:photoInfo},
    {path:'/home/goods',component:goods},
    {path:'/home/goodsInfo/:id',component:goodsInfo,name:'goodsInfo'},
    {path:'/home/goodsIntro/:id',component:goodsIntro,name:'goodsIntro'},
    {path:'/home/goodsComment/:id',component:goodsComment,name:'goodsComment'}
  ],
  linkActiveClass:'mui-active'
})

export default myRouter;
