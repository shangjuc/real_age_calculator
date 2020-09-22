<template>
  <div id="app">
    <SevenTeen msg="17歲計算器"/>
  </div>
</template>

<script>
import SevenTeen from './components/SevenTeen.vue';

export default {
  name: 'App',
  components: {
    SevenTeen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
