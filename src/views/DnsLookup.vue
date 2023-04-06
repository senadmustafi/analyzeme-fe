<template>
    <div class="animate__animated animate__fadeInDown">

        <article class="int">
                        <h4 class="grtids">DNS lookup - Look up DNS record</h4>
            <p>Host name:</p>
            <input  type="text" v-model="DNS" id="DNS" name="DNS" placeholder="domain.com" required>
            <h5 class="return200">{{this.dnsdata}}</h5>
            <button type="submit"  @click="GetDNS()">Check</button>
        </article>
        
    </div>
    <FuturComp />
</template>


<style >
.int{
    width: 50%;
    display: inline-block;
}
.grtids{
      background: linear-gradient(90deg, #4bb4ff, #79e885 70%, #c9e136);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
</style>

<script>
import FuturComp from "@/components/Futur.vue"
import axios from "axios";

export default ({

components:{
    FuturComp,
},
 data(){
        return{
            DNS: null,
            dnsdata:null,
            

        }
    },
methods:{
    async GetDNS(){

        const dejta = {
            DNS: this.DNS
          }


          let portdata =  await axios.post("https://analyzeme.dev/api/dnslookup", dejta);
            this.dnsdata = portdata.data.address
            console.log(portdata.data)
        }
}


})
</script>