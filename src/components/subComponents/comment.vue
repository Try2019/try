<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <form>
      <textarea placeholder="请输入评论内容..." maxlength="120" v-model="m"></textarea>
      <input type="button" value="发表" v-on:click="add" />
    </form>

    <div v-for="(item,i) in msg">
      <p class="header">
        <span>第{{i+1}}楼：</span>
        <span>用户：{{item.user_name}}</span>
        <span>发表时间：{{item.add_time | dateFormat}}</span>
      </p>
      <p class="content">{{(item.content==='')? '内容为空':item.content }}</p>
    </div>

    <mt-button type="danger" size="large" plain v-on:click="load">加载更多</mt-button>
  </div>
</template>

<script>
  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button.vue";
  import {Toast} from 'mint-ui'

  export default {
    components: {MtButton},
    data:function () {
      return {
        msg:[],
        m:'',
        pageindex:1
      }
    },
    created(){
      this.getComments();
    },
    methods:{
      add:function () {
        this.msg.push({content:this.m,add_time:new Date(),user_name:'匿名用户'});
        this.m='';
      },
      getComments:function (page=this.pageindex) {              //获取props中的id值，用于加载各个新闻中的评论
        this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+page).then(result=>{
          if(result.body.status===0){
            for(let i=0;i<result.body.message.length;i++){
              this.msg.push(result.body.message[i]);
            }
          }else {
            Toast("加载失败");
          }
        })
      },
      load:function () {
        this.pageindex=this.pageindex+1;
        this.getComments(this.pageindex);
      }
    },
    props:['id']        //获取父组件的值
  }
</script>

<style scoped>
  .header{
    background: #c6c6c6;
    color: white;
    padding: 3px 0;
  }
  textarea{
    font-size: 14px;
  }
  input[type="button"]{
    width: 100%;
    margin-bottom: 10px;
    background: #35c3ff;
    padding: 10px 0;
    color:white;
  }
  .content{
    text-indent: 2em;
    padding: 5px 0;
  }
</style>
