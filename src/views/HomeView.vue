<template>

<article class="wraper">
	<div class="container">
		<div class="luminary"></div>
		<div class="luminary"></div>
		<div class="luminary"></div>
	</div>
  <div>
    <div class="typewriter">
    <h1 class="maintxt">Welcome to AnalyzeMe, <br>your one-stop source for <span class="spanWebIp">website</span> and <span class="spanWebIp">ip</span > analysis</h1><br>
    <p > Our cutting-edge technology allows you to identify the technologies and tools used to build and run any website. <br>
    Get access to a wealth of information, including website frameworks, hosting providers, analytics tools, and much more.<br>
    Keep up with the latest trends and advancements in website technology with AnalyzeMe.dev
   </p>

   <h4 class="ident">Identify: <span id="spin"></span></h4>
  <div class="buttonsHome">
   <router-link to="/MainPage"><button>Try it now free<br></button></router-link>
   <p class="sign" v-if="!authdata.authenticated">or  <router-link to="/SingIn">Sign in</router-link></p>
</div>
    </div>
  </div>
  </article>
<FuturComp />
</template>

<style>

.wraper{


}





.home{
  padding: 130px;
}
.buttonsHome{
white-space: nowrap; 
  padding: 140px;
}
.spanWebIp{
      background: linear-gradient(90deg, #4bb4ff, #79e885 55%, #c9e136);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* DEMO-SPECIFIC STYLES */
.typewriter .maintxt {
  color: rgb(255, 255, 255);
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #103847 }
}
button{
  width: 80%;
  display: inline-block;
  margin: 0;
}

.ident{
margin: 0; display: inline-block;
}
#spin {
        background: linear-gradient(90deg, #4bb4ff, #79e885 55%, #c9e136);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
#spin:after {
  content:"";
  animation: spin 5s linear infinite;
}
@keyframes spin {
  0% { content:"Programing languages";}
  20% { content: "Frameworks"; }
  40% { content: "Web servers"; }
  60% { content: "Databases"; }
  80% { content: "CMS"; }
  100% { content: "Vurnelabilities"; }
}

.sign{
  font-size: 16px;
}



</style>


<script>

import FuturComp from "@/components/Futur.vue"

import { Auth } from "@/services"
export default ({
          data(){
            return{
                    authdata:Auth.state,
            };
            
        },

components:{
    FuturComp,
},
created(){
}
})
</script>
