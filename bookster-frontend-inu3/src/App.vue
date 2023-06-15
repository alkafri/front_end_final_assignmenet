<template>
  <div id="app">

    <main>
      <!-- Main content -->
      <router-view :key="$route.fullPath"></router-view>
    </main>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
/* CSS styles for the App component */
#app {
  font-family: Arial, sans-serif;
  margin: 0 auto;
}

header {
  background-color: #f1f1f1;
  
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>