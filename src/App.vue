<template>
  <div id="app">    
      <router-view />     
  </div>
</template>

<script>

  export default {
    name: 'App',
  }

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
    font-weight: 400;
    min-height: 100vh;
    display: flex;
  }

  body, html, #app, #root {
    width: 100%;
    height: 100%;
  }

</style>
