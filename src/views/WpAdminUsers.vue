<template>
       <div class="animate__animated animate__fadeInDown">

        <article class="int">
                        <h4 class="grtids">WordPress Admin Usernames Scanner</h4>
            <p>Wordpres site url:</p>
            <input  type="text" v-model="wpdns" id="wpdns" name="wpdns" placeholder="https://domain.com" required>
            <p v-if="waperor!=null">{{ this.waperor}}</p>
            <button type="submit"  v-if="click" @click="wpAdminChecker()">Scan</button>
            <button aria-busy="true" v-if="!click">Please wait..</button>
        </article>

    </div>
<div>
<article class="int animate__animated animate__fadeInDown" v-if="isDataAvb">
<table>

  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Users</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in wpusersdata" v-bind:key="index" >
      <th scope="row">{{index+1}}</th>
      <td>{{item}}</td>

    </tr>

  </tbody>
</table>
</article>
<br>
    <details style="width: 25%;display: inline-block; text-align: left;" open >
  <summary style="font-size: 22px;">Tool description</summary>
    <p style="font-size: 17px;">A WordPress Admin Username Scanner is a tool that allows you to scan a WordPress website for usernames of users with administrative privileges</p>
</details>

</div>
        <FuturComp/><br>
</template>


<style >
.int{
    width: 50%;
    display: inline-block;
}

.grtids{
      background: linear-gradient(90deg, #4bb4ff, #79e885 55%, #c9e136);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}

</style>


<script>
import FuturComp from "@/components/Futur.vue";
import axios from "axios";
import  isUrl from "is-valid-http-url";

export default ({

components:{
    FuturComp,

},
 data(){
        return{
            wpdns: null,
            wpusersdata:null,
            waperor:null,
            isDataAvb:false,
            click: true,
            

        }
    },
methods:{
    async wpAdminChecker(){
        this.click=false;
        const dejta = {
            domain: this.wpdns
          }


          let portdata =  await axios.post("https://analyzeme.dev/scan-wp-users", dejta);
            if (portdata.data == "Data is not available on this wp site"){
                            var isthisvailid = isUrl(this.wpdns)
                            if(isthisvailid){
                            this.isDataAvb=false;
                            this.waperor=portdata.data;
                            this.click=true;
                            }else{
                                this.isDataAvb=false;
                                this.waperor="Invalid Url!"
                                this.click=true;
                            }


            }else{
            this.isDataAvb=true;
            this.waperor=null;
            this.wpusersdata = portdata.data;
            this.click=true;
            }

        }
        
}


})
</script>