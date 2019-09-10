import VueRouter from 'vue-router';
import Vue from 'vue'
import app from './app.vue'
import home from './components/home.vue'
import search from './components/search.vue'
import shopping from './components/shopping.vue'
import user from './components/user.vue'
Vue.use(VueRouter);


let myRouter=new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/user',component:user},
    {path:'/search',component:search},
    {path:'/shopping',component:shopping}
  ],
  linkActiveClass:'mui-active'
})

export default myRouter;
