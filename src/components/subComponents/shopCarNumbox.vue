<template>
  <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input ref="test" class="mui-input-numbox" type="number" v-bind:value="count" v-on:change="getCountChange"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../lib/dist/js/mui.js'
  export default {
    data(){
      return {

      }
    },
    mounted(){
      mui('.mui-numbox').numbox();
    },
    methods:{
      getCountChange(){
        //数量改变
        let params=[this.goodsId,this.$refs.test.value];
        this.$store.commit('updateGoods',params);
      }
    },
    props:['count','goodsId'],
    watch:{
    }
  }
</script>

<style scoped>

</style>
