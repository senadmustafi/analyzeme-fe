<template>
    <div class="grid animate__animated animate__fadeInDown">
        <article>
            <h4 class="grtids">Port Scaner - Tests if TCP port is opened on specified IP</h4>
             <div class="grid">

    <!-- Markup example 1: input is inside label -->
    <label for="Ip">
      Ip
      <input type="text"  v-model="ip" id="ip" name="ip" placeholder="192.168.1.1" required>
    </label>
        <label for="PortScaner">
      Port
      <input type="number" min="0" v-model="port" id="port" name="port" placeholder="443" required>
    </label>
  </div>
   <h5 class="return200" v-if="portdata200!=null">{{this.portdata200}}</h5>
   <h5 class="return303" v-if="portdata303!=null">{{this.portdata303}}</h5>
   <button type="submit"  v-bind:disabled="expression" @click="getMyIp()">Check</button>
        </article>
    </div>
    <FuturComp />
    
</template>

<style>
button{
    width: 50%;
}

.return200{
    color: green;
    }
.return303{
    color: brown;
}
</style>

<script>
import axios from "axios";

import FuturComp from "@/components/Futur.vue"


export default ({

components:{
    FuturComp,
},
    data(){
        return{
            ip: null,
            port:null,
            portdata200:null,
            portdata303:null,
            expression:true,
            

        }
    },
      watch: {
    ip(value){
      this.ip = value;
      this.expression = false;
    }
  },

    methods:{


      async getMyIp(){

          const dejta = {
    ip: this.ip,
    ports: this.port
          }
          let portdata =  await axios.post("https://analyzeme.dev/openport", dejta);
           if(portdata.data.open.length >=1){
               this.portdata303=null;
               this.portdata200="Port is Open"
           }else{
                this.portdata200=null;
               this.portdata303="Port is Closed"
           }
        }
    },

})

</script>