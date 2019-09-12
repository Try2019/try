import VueRouter from 'vue-router';
import Vue from 'vue'
import home from './components/home.vue'
import search from './components/search.vue'
import shopping from './components/shopping.vue'
import user from './components/user.vue'
import newsList from './components/subComponents/newsList.vue'
import newsInfo from './components/subComponents/newsInfo.vue'
Vue.use(VueRouter);


let myRouter=new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home', component:home},
    {path:'/user',component:user},
    {path:'/search',component:search},
    {path:'/shopping',component:shopping},
    {path:'/home/news',component:newsList},
    {path:'/home/newsInfo/:id',component:newsInfo}           //:id表示进行id的匹配
  ],
  linkActiveClass:'mui-active'
})

export default myRouter;
