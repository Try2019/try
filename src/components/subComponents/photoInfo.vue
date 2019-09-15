<template>
  <div>
    <h4 class="title">{{msg.title}}</h4>
    <p class="subtitle"><span>时间：{{msg.add_time | dateFormat}}</span><span>点击：{{msg.click}}次</span></p>
    <hr>

    <!-- 缩略图 -->
    <!--<img class="preview-img thumImg" v-for="(item,index) in list" v-bind:src="item.src"
    height="100" v-on:click="$preview.open(index,list)"/>-->
    <div class="thumbs">
      <vue-preview v-bind:slides="list"></vue-preview>
    </div>


    <p class="content" v-html="msg.content"></p>
    <!-- 评论子组件 -->
    <comment v-bind:id="id"></comment>
  </div>
</template>

<script>
  import comment from './comment.vue'
  import {Toast} from 'mint-ui';
  export default {
    data(){
      return {
        id:this.$route.params.id,
        msg:'',
        list:''
      }
    },
    created(){
      this.getImgInfo(this.id);
      this.getThumImgs(this.id);
    },
    methods:{
      getImgInfo:function (id) {
        this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+id).then(result=>{
          if(result.body.status===0){
            this.msg=result.body.message[0];
          }
          else{
            Toast("数据获取失败");
          }
        })
      },
      getThumImgs:function (id) {
        this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+id).then(result=>{
          if(result.body.status===0){
            result.body.message.forEach(m=>{
              m.w=600;
              m.h=400;
              m.src = m.src;  //大图
              m.msrc = m.src;  //小图
            });
            this.list=result.body.message;
          }
          else{
            Toast("数据获取失败");
          }
        })
      }
    },
    components:{
      comment:comment
    }
  }
</script>

<style>
  .title{
    text-align: center;
    font-size: 16px;
    color: #3386ff;
    line-height: 30px;
  }
  .subtitle{
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #999;
  }
  .content{
    font-size: 13px;
    text-indent: 2em;
    line-height: 20px;
    color: black;
  }

  .thumbs{
    display: flex;
  }
  .thumbs figure{
    padding: 0;
    margin: 0;
    margin: 5px 10px;
    display: inline-block;
  }
  .thumbs img {
    width: 100px;
    padding: 0;
    box-shadow: 0 0 5px #aaa;
  }
</style>
