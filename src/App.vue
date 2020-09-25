<template>
  <a-config-provider>
    <div id="app">
      <Navbar/>      
    </div>
  </a-config-provider>
</template>

<script>
//Components
import Navbar from "@/app/shared-componets/navbar/navbar"

export default {
  components: {Navbar},
}
</script>

<style>
#app {
  font-family: 'Glyphicons Halflings';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 500;
  letter-spacing: 1.2px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
