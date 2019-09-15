<template>
  <div class="goodsInfo">
    <div class="goodsImg">
      <swiper v-bind:thumList="thums" v-bind:isfull=false></swiper>
    </div>

    <div class="priceInfo">
      <h4>{{info.title}}</h4>
      <hr>
      <p class="aPrice">市场价：<span style="text-decoration: line-through">￥{{info.market_price}}</span><span>销售价：<span style="color:#ff3829">￥{{info.sell_price}}</span></span></p>
      <div style="margin-bottom: 15px">
        <span>购买数量：<numbox></numbox></span>
      </div>
      <mt-button size="small" type="primary">立即购买</mt-button>
      <mt-button size="small" type="danger">加入购物车</mt-button>
    </div>


    <div class="aboutGoods">
      <h4>商品参数</h4>
      <hr>
      <p>商品货号：{{info.goods_no}}</p>
      <p>库存情况：{{info.stock_quantity}}件</p>
      <p style="margin-bottom: 25px">上架时间：{{info.add_time | dateFormat}}</p>
      <hr>
      <mt-button type="primary" size="large" plain v-on:click="goIntro(info.id)">图文介绍</mt-button><br/>
      <mt-button type="danger" size="large" plain v-on:click="goComment(info.id)">商品评论</mt-button>
    </div>


  </div>
</template>

<script>
  import {Button,Toast} from 'mint-ui'
  import swiper from './swiper.vue'
  import numbox from './goodsNum.vue'
  export default {
    data(){
      return{
        id:this.$route.params.id,
        thums:[],
        info:[]
      }
    },
    created(){
      this.getThums();
      this.getThumsInfo();
    },
    methods:{
      getThums:function () {
        this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result=>{
          if(result.body.status===0){
            this.thums=result.body.message;
          }
          else{
            Toast('图片获取失败');
          }
        })
      },
      getThumsInfo:function () {
        this.$http.get('http://www.liulongbin.top:3005/api/goods/getinfo/'+this.id).then(result=>{
          if(result.body.status===0){
            this.info=result.body.message[0];
          }else{
            Toast('信息获取失败')
          }
        })
      },
      goIntro(id){
        this.$router.push({name:'goodsIntro',params:id});
      },
      goComment(id){
        this.$router.push({name:'goodsComment',params:id});
      }
    },
    components:{
      swiper:swiper,
      numbox:numbox
    }
  }
</script>

<style scoped>
  .goodsInfo{
    background: #c9c9c9;
  }
  .priceInfo{
    background: white;
    margin: 3px 10px 20px 10px;
    padding:10px
  }
  .goodsImg{
    background: white;
    margin: 3px 10px 20px 10px;
    padding:10px
  }
  .priceInfo>h4{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 25px;
  }
  .aPrice{
    color:black;
  }
  .aPrice>span{
    margin: 0 10px 0 3px;
  }
  .aboutGoods{
    background: white;
    margin: 3px 10px 20px 10px;
    padding: 10px;
  }
  .aboutGoods>h4{
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
</style>
