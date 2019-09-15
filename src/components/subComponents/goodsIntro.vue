<template>
  <div class="intro">
    <h3>{{intro.title}}</h3>
    <hr>
    <p v-html="intro.content"></p>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    data(){
      return {
        intro:{},
        id:this.$route.params.id,
      }
    },
    created(){
      this.getGoodsIntro();
    },
    methods:{
      getGoodsIntro(){
        this.$http.get('http://www.liulongbin.top:3005/api/goods/getdesc/'+this.id).then(result=>{
          if(result.body.status===0){
            this.intro=result.body.message[0];
            console.log(result.body.message[0]);
          }
          else{
            Toast('详情加载失败');
          }
        })
      }
    }
  }
</script>

<style>
  .intro{
    padding: 10px;
  }
  .intro>h3{
    color: #347bff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .intro img{
    width: 100%;
    height: auto;
  }
</style>
