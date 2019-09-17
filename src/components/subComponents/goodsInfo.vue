<template>
  <div class="goodsInfo">
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
    >
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <div class="goodsImg">
      <swiper v-bind:thumList="thums" v-bind:isfull=false></swiper>
    </div>

    <div class="priceInfo">
      <h4>{{info.title}}</h4>
      <hr>
      <p class="aPrice">
        市场价：<span style="text-decoration: line-through">￥{{info.market_price}}</span>
        <span>销售价：<span style="color:#ff3829">￥{{info.sell_price}}</span></span></p>
      <div style="margin-bottom: 15px">
        <span>购买数量：<numbox v-on:getCount="getCount1" v-bind:max="info.stock_quantity"></numbox></span>
      </div>
      <mt-button size="small" type="primary" v-on:click="">立即购买</mt-button>
      <mt-button size="small" type="danger" v-on:click="addToShopCar();buyNow()">加入购物车</mt-button>
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
        info:{},
        ballFlag:false,
        goodscount:1
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
      },
      addToShopCar(){
        this.ballFlag=!this.ballFlag;
      },
      beforeEnter(el){
        el.style.transform='translate(0,0)';
      },
      enter(el,done){
        el.offsetWidth;
        //由于位移的位置写死了，所以分辨率一改变或者屏幕位置发生变化小球就无法位移到徽标的位置
        //使用dom.getBoundingClientRect()方法解决获取的位置问题
        let badgeY=document.getElementById('badge').getBoundingClientRect().top;
        let badgeX=document.getElementById('badge').getBoundingClientRect().left;
        let ballY=this.$refs.ball.getBoundingClientRect().top;
        let ballX=this.$refs.ball.getBoundingClientRect().left;
        //这里的.top .left表示获取该元素距离页面顶部和页面左侧的距离

        el.style.transform=`translate(${badgeX-ballX}px,${badgeY-ballY}px)`;
        el.style.transition='all 1s ease';
        done();
      },
      afterEnter(el){
        this.ballFlag=!this.ballFlag;
      },
      getCount1(count){
        this.goodscount=count;
        console.log(this.goodscount);
      },
      buyNow(){
        this.$store.commit('addGoods',[this.$route.params.id,this.goodscount,this.info.sell_price]);
        this.$store.getters.getShopCarCount;
      }
    },
    components:{
      swiper:swiper,
      numbox:numbox
    }
  }
</script>

<style scoped>
  .ball{
    width:15px;
    height:15px;
    background: red;
    border-radius: 50%;
    position: absolute;
    top:425px;
    left: 160px;
    z-index: 99;
  }
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
