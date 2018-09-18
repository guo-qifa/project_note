<!--App.vue是项目入口文件。-->
<template>
  <div id="appIndex">
    <div >
        <button @click="on_click()">点</button>
        <div  @click="on_click1()">
            <test   v-show="xx"></test>
        </div>
        {{count}}
       
        <!--  -->
    </div>
    <div  >
        <tes v-show="flag" v-on:flagx="flagx"></tes> 
    </div>
  </div>
</template>

<script>
  import test from './components/test';
  import tes from './components/test1';
  export default {
    name: 'appIndex',
    data() {
      return {
        count: 0,
        flag: false,
        xx:true
      }
    },
    methods: {
      flagx(val){
        
        this.xx = val;
        console.log(this.xx);
        this.flag = false;
      },
      on_click() {
        console.log(0)
        this.flag = !this.flag;
        this.xx = !this.xx;
      },
      on_click1(){
        console.log(11)
      }
    }
    ,
    components: {
      test,
      tes
    }
  }
</script>