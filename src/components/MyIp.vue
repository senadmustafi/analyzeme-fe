<template>
        <article >
            <h5 class=" animate__animated animate__fadeInUp">Your IP: <span class="spanWebIp">{{ip.ip}}</span> </h5>
        </article>
</template>



<script>
import axios from "axios";


export default ({
     name:"MyIpis",

     
    data(){
        return{
            ip: '',
        }
    },
    methods:{
      async getMyIp(){
          let myip =  await axios.get("https://analyzeme.dev/api/my-ip");
          this.ip = myip.data;
        }
    },
created: function () {
        this.getMyIp();

}
})
</script>