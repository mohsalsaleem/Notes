<template>
  <md-layout id="main">
    <md-layout md-column md-gutter="8">
      <searchbar></searchbar>
      <items></items>
    </md-layout>
  </md-layout>
</template>

<script>
  import Searchbar from './HomeView/Searchbar'
  import Items from './HomeView/Items'
  export default {
    components: {
      Searchbar,
      Items
    },
    name: 'home'
  }
</script>

<style>
  #main {
    height: 100vh;
  }
</style>
