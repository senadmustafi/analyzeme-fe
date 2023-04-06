<template>
       <div class="animate__animated animate__fadeInDown">

        <article class="int">
                        <h4 class="grtids">Subdomain finder</h4>
            <p>Enter Domain:</p>
            <input  type="text" v-model="mydomain" id="mydomain" name="mydomain" placeholder="domain.com" required>
            <p v-if="subdomainerror!=null">{{ this.subdomainerror}}</p>
            <button type="submit"  v-if="click" @click="checkDomain()">Scan</button>
            <button aria-busy="true" v-if="!click">Scanning {{this.mydomain}}...</button>
        </article>

    </div>
<div>
<article class="int animate__animated animate__fadeInDown" v-if="isDataAvb">
<table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Subdomains</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in subdomainsData" v-bind:key="index" >
      <th scope="row">{{index+1}}</th>
            <td><a v-bind:href="'https://'+item" target="_blank">{{item}}</a></td>

    </tr>

  </tbody>
</table>
</article>
</div>

        <FuturComp/>
</template>


<style >
.int{
    width: 50%;
    display: inline-block;
}
.grtids{
      background: linear-gradient(90deg, #4bb4ff, #79e885 65%, #c9e136);
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
            mydomain: null,
            subdomainsData:null,
            subdomainerror:null,
            isDataAvb:false,
            click:true,

        }
    },
methods:{
    async checkDomain(){
             this.click=false;
        const dejta = {
            mydomain: this.mydomain
          }
            if ( this.mydomain == null ||this.mydomain.length <= 1 ){
                this.subdomainerror="Please enter domain!"
                this.click=true;
            }else{
                let datasub =  await axios.post("https://analyzeme.dev/api/subdomain", dejta);
                if(datasub == "Subdomain not found" ){
                    this.subdomainerror="Subdomain not found";
                }else{
                this.subdomainerror=null;
                this.subdomainsData = datasub.data
                this.isDataAvb=true
                this.click=true}
            }

    }

}           


})
</script>