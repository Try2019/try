<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" v-bind:key="item.id">
        <router-link v-bind:to="'newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-right" v-bind:src="item.img_url">
          <div class="mui-media-body">
            <h2>{{item.title}}</h2>
            <p class='mui-ellipsis'><span>{{item.add_time | dateFormat}}</span><span>click:{{item.click}}</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    data:function () {
      return {
        newsList:''
      }
    },
    methods:{
      getNews:function () {
        this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then(result=>{
          if(result.body.status===0){              //这里是vue-resource的使用
            this.newsList=result.body.message;
          }
          else{
            Toast("获取新闻列表失败");
          }
        })
      }
    },
    created(){
      this.getNews();
    }
  }
</script>

<style scoped>
  .mui-table-view h2{
    font-size:16px;
  }
  .mui-ellipsis{
    color: #4da8ff;
    display: flex;
    justify-content: space-between;
  }
</style>
