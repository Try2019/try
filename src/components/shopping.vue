<template>
  <div>
    <div class="goodsItem" v-for="(item,i) in allGoods" v-bind:key="item.id">
      <div>
        <mt-switch
          v-model="isChoose[item.id]"
          v-on:change="statusChange(item.id,isChoose[item.id])"
        ></mt-switch>
      </div>
      <img v-bind:src="item.thumb_path"/>
      <div class="info">
        <h3>{{item.title}}</h3>
        <p>
          <span class="price">￥{{item.sell_price}}</span>
          <span class="amount"><shopnumbox v-bind:count="idCount[item.id]" v-bind:goodsId="item.id"></shopnumbox></span>
          <a href="javascript:;" v-on:click.prevent="remove(item.id,i)">删除</a>
        </p>
      </div>
    </div>

    <div class="count">
      <div class="countMoney">
        <p>总计（不含运费）：</p>
        <p class="choose">已勾选商品
          <span>{{this.$store.getters.howMuch[0]}}</span> 件，总计：
          <span>￥{{this.$store.getters.howMuch[1]}}</span></p>
      </div>
      <mt-button type="danger">去结算</mt-button>
    </div>
  </div>
</template>

<script>
  import shopnumbox from './subComponents/shopCarNumbox.vue'
  import {Toast} from 'mint-ui'

  export default {
    data(){
      return {
        allGoods:[],
        idCount:{},
        isChoose:this.$store.getters.getChoose
      }
    },
    created(){
      this.getGoodsList();
      this.idCount=this.$store.getters.getIdCount;
    },
    methods:{
      getGoodsList(){
        let idList=[];
        let getAll=this.$store.state.shopCar ;
        //若购物车中没有物品，直接结束，否则会报错
        if(getAll.length===0){
          return
        }
        for(let i=0;i<getAll.length;i++){
          idList.push(getAll[i].id);
        }
        //console.log(idList.toString());
        this.$http.get('http://www.liulongbin.top:3005/api/goods/getshopcarlist/'+idList.toString()).then(result=>{
          if(result.body.status===0){
            this.allGoods=result.body.message;
          }else{
            Toast('数据加载失败');
          }
        })
      },
      remove(id,index){
        //console.log(id + ' ' + index);
        //点击删除，将商品从store中删除，同时将当前组件的allgoods对应商品使用index进行删除
        this.allGoods.splice(index,1);
        this.$store.commit('removeFromCar',id);
      },
      statusChange(id,now){
        this.$store.commit('goodsSelected',[id,now]);
      }
    }
    ,components:{
      shopnumbox:shopnumbox
    }
  }
</script>

<style scoped>
  .goodsItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    margin: 10px;
    padding: 8px;
    box-shadow: 3px 3px 3px #ccc;
  }
  .info{
    text-align: center;
  }
  .info>h3{
    font-size: 13px;
    margin-bottom: 10px;
  }
  .price{
    color: red;
    font-weight: 600;
  }
  img{
    width: 60px;
    height: 60px;
  }
  .count{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 25px 5px 5px 5px;
  }
  .countMoney{
    line-height: 20px;
  }
  .choose span{
    color: red;
    font-size: 22px;
    font-weight: 600;
  }
</style>
