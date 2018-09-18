<template>
  <div id="test">
   <div @click="on_click()" >{{text}}</div>
   
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: "welcome vue test1",
      }
    },
    methods: {
      on_click () {
        let true_false = false;
          if(true_false){
            this.$emit('flagx',true_false);

          }else{
            true_false = true;
            this.$emit('flagx',true_false);
          }
          
        
      }
    }
  }
</script>