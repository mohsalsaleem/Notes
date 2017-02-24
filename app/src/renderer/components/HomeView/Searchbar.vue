<template>
  <md-layout md-flex="15" md-align="center" id="searchbar">
    <md-whiteframe md-elevation="2">
      <form novalidate @submit.stop.prevent="submit">
        <md-input-container>
          <md-icon class="md-primary">search</md-icon>
          <label>Search</label>
          <md-input type="text"></md-input>
        </md-input-container>
      </form>
    </md-whiteframe>
  </md-layout>  
</template>

<style>
  #searchbar .md-whiteframe {
    margin-top: 15px;
  }

  #searchbar form {
    width: 300px;
    margin: 0px 10px;
  }
</style>
