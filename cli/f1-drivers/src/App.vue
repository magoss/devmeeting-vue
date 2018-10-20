<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <DriverList />
  </div>
</template>

<script>
import DriverList from './components/DriverList.vue';

export default {
  name: 'app',
  components: {
    DriverList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
