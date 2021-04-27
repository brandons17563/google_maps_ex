<template>
  <div id="app">
    <h1>My mApp</h1>
    <Map :data="data"/>
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

export default {
  name: 'App',
  components: {
    Map
  },
  data() {
    return {
      data: require("@/data.js")
    }
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
