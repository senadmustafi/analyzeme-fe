<template>
    <div class="MainPage">
             <MyIpis/>
        <article>
            <div class="links">
                            <details open>
  <summary role="button" class="sccolor">Scanners</summary>
  <div class="allButtons">
  <router-link to="/WebsVulns"><div role="button" class="secondary redirectButton animate__animated animate__flipInX "><img src="~@/assets/webstatus.png" width="25" height="25"/> Web Status and Vulnerabilities Scanner</div></router-link>
  <router-link to="/WpAdminUsers"><div role="button" class="secondary redirectButton animate__animated animate__flipInX"><img src="~@/assets/wp-admin.png" width="25" height="25"/> WordPress Admin Usernames Scanner</div></router-link>
  <router-link to="/SingIn"><div role="button" class="secondary redirectButton animate__animated animate__flipInX"><img src="~@/assets/webtech.png" width="25" height="25"/> Web Technologys Identifyer </div></router-link>
  <router-link to="/DirScan"><div role="button" class="secondary redirectButton animate__animated animate__flipInX"><img src="~@/assets/dic.png" width="25" height="25"/> Directory Listing Scanner</div></router-link>
</div>
  </details>
<details open>
  <summary role="button" class="sccolor1">Other Tools</summary>
   <div class="allButtons">
  <router-link to="/SubDomain"><div role="button" class="buton2 redirectButton animate__animated animate__flipInX animate__slow"><img src="~@/assets/subdomain.png" width="25" height="25"/> Subdomain Finder </div></router-link>
  <router-link to="/DnsLookup"><div role="button" class="buton2 redirectButton animate__animated animate__flipInX animate__slow"><img src="~@/assets/dns_look.png" width="25" height="25"/> DNS Lookup </div></router-link>
  <router-link to="/PortScan"><div role="button" class="buton2 redirectButton animate__animated animate__flipInX animate__slow"><img src="~@/assets/port_scan.png" width="25" height="25"/> Port Scan </div></router-link>
</div>

</details>
    
            </div>

        </article>
    </div>
    <FuturComp/>
</template>

<style>

.MainPage{
margin: 0;
}

.redirectButton{
margin-right: 25px;
margin-top: 15px;
padding:10px;
}
.sccolor{
  background-color: #0C79A1;
  border-color: #0C79A1; 
}
.sccolor1{
  background-color: #085570;
  border-color: #085570; 
}
.buton2{
  background-color: #3A4650;
  border-color: #3A4650;
}
.buton2:hover{
  background-color: #4A5864;
  border-color: #4A5864;
}
</style>


<script>
import MyIpis from "@/components/MyIp.vue";
import FuturComp from "@/components/Futur.vue"



export default ({
    components:{
    MyIpis,
    FuturComp,
}
})
</script>
