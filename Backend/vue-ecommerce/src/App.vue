<template>

  <div id="app">
      
    
    <router-view></router-view>

  </div>
  
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
  @import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  } */
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import axios from "axios"
export default {
  created (){
    axios.interceptors.response.use(undefined, function (err) {
    return new Promise(function () {
      if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
      // if you ever get an unauthorized, logout the user
         localStorage.removeItem("user");
         delete axios.defaults.headers.common['Authorization']
      // you can also redirect to /login if needed !
      }
      throw err;
    });
  });
  }
   
}
</script>
