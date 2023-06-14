<template>
  <div id="app">
    <!--<header>-->
      <!-- Header content -->
      <!-- <h1>Welcome to Bookster</h1>-->
    <!-- </header>-->

    <main>
      <!-- Main content -->
      <router-view></router-view>
    </main>

    <!--<footer>-->
      <!-- Footer content -->
      <!--<p>&copy; 2023 Bookster. All rights reserved.</p>-->
    <!--</footer>-->
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

main {
  
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>