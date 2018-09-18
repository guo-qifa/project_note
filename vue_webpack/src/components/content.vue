<template>
  <div >
    <div id="que_1" class="que_hide">
      <input type="text">
    </div>
    <div id="que_2" class="que_hide">
      <input type="text">
    </div>
    <div id="que_3" class="que_hide">
      <input type="text">
    </div>
  </div>
</template>
<script>
  export default {
    name: "content_tab",
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>
<style scoped> 
  .que_show {
    display: block;
  }
  .que_hide {
    display: none;
  }
</style>