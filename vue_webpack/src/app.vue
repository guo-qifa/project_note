<!--App.vue是项目入口文件。-->
<template>
  <div id="appIndex">
    <!-- <header-tab></header-tab>
    <content-tab></content-tab>
    <footer-tab></footer-tab> -->
    <pro-bar  progressTotal = '6' curIndex = '1'  selfHeight="30px" selfWidth= '50%' leftBack="red" style="background-color: aqua;"></pro-bar>
  </div>
</template>

<script>
  // import headerTab from './components/header';
  // import contentTab from './components/content';
  // import footerTab from './components/footer';
  import proBar from './components/bar';
  export default {
    name: 'appIndex',
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      proBar
      // headerTab,
      // contentTab,
      // footerTab
    }
  }
</script>