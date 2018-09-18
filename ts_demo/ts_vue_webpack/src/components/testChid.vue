<template>
  <div id="test">
    <div v-show="flag_test">
        {{child}}

    </div>
  </div>
</template>
<script>
  export default {
    props: ['flag'],
    data () {
      return {
        child: "testChild",
        flag_test: true
      }
    },
    methods: {
      
    }
  }
</script>