<template>
  <div class="goodsList">
    <!--<router-link class="goods" v-for="item in goodsInfo" v-bind:key="item.id" tag="div" v-bind:to="'/home/goodsInfo/'+item.id">
      <!-- 图片信息

      <div class="goodsImg">
        <img v-bind:src="item.img_url" width="100%"/>
        <h4>{{item.title}}</h4>
      </div>
      <div class="goodsInfo">
        <p><span class="priceNow">￥{{item.sell_price}}</span><span class="priceBefore">￥{{item.market_price}}</span></p>
        <p class="info"><span>热卖中</span><span>剩{{item.stock_quantity}}件</span></p>
      </div>
    </router-link> -->

    <!-- 将下面改造为编程式导航 -->
    <div class="goods" v-for="item in goodsInfo" v-bind:key="item.id" v-on:click="loadInfo(item.id)">
      <!-- 图片信息 -->
      <div class="goodsImg">
        <img v-bind:src="item.img_url" width="100%"/>
        <h4>{{item.title}}</h4>
      </div>
      <div class="goodsInfo">
        <p><span class="priceNow">￥{{item.sell_price}}</span><span class="priceBefore">￥{{item.market_price}}</span></p>
        <p class="info"><span>热卖中</span><span>剩{{item.stock_quantity}}件</span></p>
      </div>
    </div>
    <mt-button type="danger" size="large" plain v-on:click="getImagesInfo(++id)">加载更多</mt-button>
  </div>
</template>

<script>
  import {Toast,Button} from 'mint-ui';
  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button.vue";
  export default {
    components: {MtButton},
    data(){
      return {
        goodsInfo:[],
        id:1
      }
    },
    created(){
      this.getImagesInfo(this.id);
    },
    methods:{
      getImagesInfo(id){
        this.$http.get('http://www.liulongbin.top:3005/api/getgoods?pageindex='+id).then(result=>{
          if(result.body.status===0){
            if(result.body.message.length===0){
              Toast('所有商品加载完成');
            }
            this.goodsInfo=this.goodsInfo.concat(result.body.message);
          }else{
            Toast('获取失败');
          }
        })
      },
      loadInfo(id){
        //使用vue-router提供的方法进行页面跳转

        //this.$route表示路由的参数对象，所有路由中的参数：params和query都属于它
        //this.$router表示路由的导航对象，用它可以方便地使用js代码实现路由的前进，后退，跳转到新的URL地址
        //1、最简单的方式，直接传URL地址
        //this.$router.push('/home/goodsInfo/'+id);
        //2、传递一个对象：
        //this.$router.push({path:'/home/goodsInfo/'+id});
        //3、传递命名的路由：这里需要在router.js中的某个路由上加上一个name属性
        this.$router.push({name:'goodsInfo',params:{id:id}});
      }
    }
  }
</script>

<style scoped>
  .goodsList{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px;
  }
  .goods{
    width: 49%;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
  }
  .goodsImg{
    background: white;
    padding: 0 0 5px 0;
    margin: 0 0 5px 0;
  }
  .goodsImg>h4{
    font-size: 16px;
  }
  .priceNow{
    color: #ff3829;
    font-size: 18px;
    margin-right: 10px;
  }
  .priceBefore{
    font-size: 14px;
    text-decoration: line-through;
  }
  .info{
    display: flex;
    justify-content: space-between;
  }
  .info>span{
    margin: 0 3px;
    font-size: 13px;
  }
</style>
