<template>
  <div style="padding-bottom: 40px">
    <h3 class="header">{{title}}</h3>
    <p class="subHeader"><span>发表时间：{{time | dateFormat}}</span><span>点击：{{click}}</span></p>
    <hr>
    <div class="content" v-html="content"></div>

    <comment v-bind:id="this.id"></comment>     <!-- 使用v-bind向子组件传值 -->
  </div>

</template>

<script>
  import {Toast} from 'mint-ui';
  import comment from './comment.vue'
  export default {
    data:function () {
      return {
        id:this.$route.params.id,
        title:'',
        click:'',
        time:'',
        content:''
      }
    },
    created(){
      this.getNews();
    },
    methods:{
      getNews:function () {
        this.$http.get("http://www.liulongbin.top:3005/api/getnew/"+this.id).then(result=>{
          if(result.body.status===0){
            this.title=result.body.message[0].title;
            this.click=result.body.message[0].click;
            this.time=result.body.message[0].add_time;
            this.content=result.body.message[0].content;
          }
          else{
            Toast("获取新闻数据失败");
          }
        })
      }
    },
    components:{
      comment:comment
    }
  }
</script>

<style scoped>
  .header{
    font-size: 15px;
  }
  .subHeader{
    color: #3386ff;
    display: flex;
    justify-content: space-between;
  }
  .content{
    padding: 0 5px;
  }
</style>
