<template>
  <div>
              <h4 class="grtids">Directory Listing Scanner</h4>
    <form @submit.prevent="postData">
      <label for="dns">Site url:</label>
      <input type="text" id="dns" v-model="domain.dns" required />
      <button type="submit" v-if="click">Check</button>
      <button aria-busy="true" v-if="!click">Scaning... please don't close tab</button><br>
    </form>

      <progress v-if="!click" v-bind:value="counter" max="964" style=" width: 70%; display: inline-block;"></progress>
    <article class="int animate__animated animate__fadeInDown">
<table>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Site Url</th>
       <th scope="col">Directory</th>
      <th scope="col">Status code</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(result, index) in results" :key="index" >
      <th scope="row">{{index+1}}</th>
      <td >{{ this.statusdomain }}</td>
      <td >/{{ result.item }}</td>
      <td style="color:green">{{ result.status }}</td>

    </tr>

  </tbody>
</table>
</article>
<br>
    <details style="width: 25%;display: inline-block; text-align: left;" open>
  <summary style="font-size: 22px;">Tool description</summary>
    <p style="font-size: 17px;">Directory Listing Scanner is a tool used to scan a website or server for  directories and files present on the server. 
      It is a type of vulnerability scanner that helps identify any misconfigured servers or files that may be exposed to attackers.</p>
</details>
  </div>
          <FuturComp/>
</template>


<style>
.grtids{
      background: linear-gradient(90deg, #4bb4ff, #79e885 70%, #c9e136);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
</style>
<script>
import { Service, Auth } from '@/services'
import io from "socket.io-client";
import FuturComp from "@/components/Futur.vue";

export default {
  components:{
    FuturComp,

},
  data() {
    return {
      domain: { dns: "" },
      statusdomain:"",
      results: [],
      endOfSearch:false,
      click:true,
      sockeMyId: "",
      counter: null,
    };
  },
  methods: {
    async postData() {
      this.click=false;
      this.statusdomain = this.domain.dns;

      try {
        const response = await Service.post(
          "https://analyzeme.dev/api/dir",
          this.domain,
          {
            headers: {
              "X-Socketio-Id": this.sockeMyId,
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    const socket = io("https://analyzeme.dev",{ path: "/api/socket.io"});
    let myemail = Auth.getUser().email;

    socket.on(myemail, (data) => {
      if (data.item =="SVRTLUVORC1PRi1TQ0FOLUFORC1JVC1XSUxMLVNUT1A="){
        this.endOfSearch=true;
        this.click=true;
      }else{
        this.results.push(data);
        console.log(data);
      }

    });
    

        socket.on(myemail+"interaction", (data) => {
      if (data){
            this.counter= data.numberofinteraction
      }
      

    });

    socket.on("connect", () => {
      console.log(`Connected to server with ID ${socket.id}`);
      this.sockeMyId = socket.id;
    });

    socket.on("disconnect", () => {
      console.log(`Disconnected from server with ID ${socket.id}`);
    });
  },
};
</script>