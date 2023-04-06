
<template>

   <main class="container">

   
<nav>
  <ul>
    <li><router-link to="/"><img src="~@/assets/logo.png" width="150" /></router-link> </li>
  </ul>
  <ul>
    <li><router-link to="/">Home</router-link></li> 
        <li><router-link to="/about">About</router-link></li>
        <li v-if="authdata.authenticated"><a @click="logout()">Logout</a></li>
        

  </ul>
</nav>
    </main>

  <router-view/>
</template>

<style lang="scss">


#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #f8f8f8;
  }
}
</style>
<script>
import { Auth } from "@/services"

export default {
  data(){
    return{
      authdata:Auth.state,
    }
  },
  methods:{
    logout(){
      Auth.logout();
      this.$router.push({path: "/"}).then(() => location.reload())
    }
  },
  created(){
      console
  }
}
</script>
