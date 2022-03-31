<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CounterVue :start='5' title='Entraron'/>
</template>

<script>

import CounterVue from "./components/CounterVue.vue"

export default {
  name: 'App',
  components: {
    CounterVue
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
