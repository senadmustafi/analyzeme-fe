<template>
    <div class="animate__animated animate__fadeIn">
        <article>
        <article class="s">

            <input type="text"  v-model="email" name="login" placeholder="Email" aria-label="Login" autocomplete="nickname" required="">
            <input type="password"  v-model="password" name="password" placeholder="Password" aria-label="Password" autocomplete="current-password" required="">
            
            <button type="submit"  @click="login()">Login</button>
            <p class="sign">Don't have an account?<router-link to="/SingIn">Sing Up</router-link></p>
        </article>
        </article>
    </div>


</template>
    <style>
        .s{
            width: 50%;
            display: inline-block;
        } 
        .sign{
  font-size: 16px;
}   
    </style>

  <script>
import { Auth } from "@/services"

    export default{
        data(){
            return{
                email:'',
                password:''
            };
            
        },
        methods:{
            async login(){
              let success = await Auth.login(this.email, this.password);
              
              if (success == true){
                this.$router.push({path: "/MainPage"}).then(() => location.reload())

              }
              else{
                  console.log(success)
              }
            }
        }
    };
        
    
    </script>