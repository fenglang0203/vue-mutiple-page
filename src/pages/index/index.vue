<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
  /* eslint-disable no-unused-vars */

  import Header from 'components/Header.vue';

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
  @import '../../assets/style/index.scss';
  @import '../../assets/style/newindex.scss';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
