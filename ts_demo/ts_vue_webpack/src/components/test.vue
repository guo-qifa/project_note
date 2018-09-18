<template>
  <div id="test">
    <div  >{{msg}}</div>
    <child v-show="flag1"></child>
  </div>
</template>
<script>
  import child from './testChid'
  export default {
    //props:['flag'],
    data () {
      return {
        msg: "vue webapck",
        flag1: true
      }
    },

    methods: {
      // on_click() {  @click="on_click()"
      //   console.log(this.flag);
      //   if(!this.flag){
      //     this.flag1 = false;
      //     return
      //   }
      //   console.log(this.flag);
      //   this.flag1 = true;
      // }
    },
    components: {
      child
    }
  }
</script>
