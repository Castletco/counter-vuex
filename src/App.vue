<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ComedyMovieList />
    <FamilyMovieList />
  </div>
</template>

<script>
import ComedyMovieList from './components/ComedyMovieList.vue'
import FamilyMovieList from './components/FamilyMovieList.vue'

export default {
  name: 'App',
  components: {
    ComedyMovieList,
    FamilyMovieList
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
