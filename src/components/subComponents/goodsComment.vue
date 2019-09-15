<template>
  <div>
    <comment v-bind:id="id"></comment>
  </div>
</template>

<script>
  import comment from './comment.vue'
  export default {
    data(){
      return {
        id:this.$route.params.id,
      }
    },
    methods:{

    },
    components:{
      comment:comment
    }
  }
</script>

<style scoped>

</style>
