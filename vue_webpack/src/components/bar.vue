<template>
  <div>
    <div :style="width_height">
      <div :style="">
        
        <span v-for="n in arr">{{n}}</span> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "bar",
    props: {
      leftBack: String,
      selfWidth: String,
      selfHeight: String,
      curIndex: String,
      progressTotal: String
    },
    data () {
      return {
        total: this.progressTotal,
        index: this.curIndex,
        width_height: {
          width: this.selfWidth,
          height: this.selfHeight,
          background : this.leftBack
        },
        arr:[],

        
      }
    },
    methods: {
      
    },
    computed: {
     
    },
    mounted: function () {
      for (let i = 0; i < this.total; i++) {
        arr.push(i);
      }
    }

  }
</script>
<style scoped>

</style>