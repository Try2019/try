<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input ref="test" class="mui-input-numbox" type="number" value="1" v-on:change="getCountChange"/>
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
        //向父组件传值
        this.$emit('getCount',parseInt(this.$refs.test.value));
      }
    },
    props:['max'],
    watch:{          //监听max传进来的最后的值
      //使用js的api设置numbox的最大值
      max:function (newVal,oldVal) {
        mui('.mui-numbox').numbox().setOption('max',newVal);
      }
    }
  }
</script>

<style scoped>

</style>
