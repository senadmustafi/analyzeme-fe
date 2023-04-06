<template>
       <div class="animate__animated animate__fadeInDown">

        <article class="int">
                        <h4 class="grtids" id="header">Web Status and Vulnerabilities Scanner</h4>
            <p>IP of webiste:</p>
            <input  type="text" v-model="wsv" id="wsv" name="wsv" placeholder="123.456.78.9" required>
            <p v-if="wsverror!=null">{{ this.wsverror}}</p>
            <button type="submit"  v-if="click" @click="wns()">Scan</button>
            <button aria-busy="true" v-if="!click">Please wait..</button>
        </article>

    </div>
<div>

<article class="int animate__animated animate__fadeInDown" v-if="isDataAvb">
  <h6 class="grtids">Web status result:</h6>

<table id="info-table">
  <thead>
    <tr>
      <th scope="col">IP</th>
      <th scope="col">Ports</th>
      <th scope="col" v-if="wsvuserdata.shodan_pass_data.os != null">OS</th>
      <th scope="col">City</th>
      <th scope="col">Contry Name</th>
      <th scope="col">ISP</th>
    </tr>
  </thead>
  <tbody>


    <tr>

      <td>{{wsvuserdata.shodan_pass_data.ip}}</td>
      <td>{{wsvuserdata.shodan_pass_data.ports}}</td>
      <td v-if="wsvuserdata.shodan_pass_data.os != null">{{wsvuserdata.shodan_pass_data.os}}</td>
      <td>{{wsvuserdata.shodan_pass_data.city}}</td>
      <td >{{wsvuserdata.shodan_pass_data.country_name}}</td>
      <td>{{wsvuserdata.shodan_pass_data.isp}}</td>
    </tr>
    
  </tbody>
</table>
</article><br>

<article class="int animate__animated animate__fadeInDown" v-if="isDataAvb">
  <h6 class="grtids">Vulnerabilities scaner result:</h6>

<table id="vulns-table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" v-if="wsvuserdata.shodan_pass_data.vulns != null">Vulnerabilities </th>
      <th scope="col" v-if="wsvuserdata.shodan_pass_data.vulns == null">Vulnerabilities not found!</th>
    </tr>
  </thead>
   <tbody v-if="wsvuserdata.shodan_pass_data.vulns != null">
    <tr v-for="(item, index) in wsvuserdata.shodan_pass_data.vulns" v-bind:key="index" >
      <th scope="row">{{index+1}}</th>
      <td><a v-bind:href="'https://nvd.nist.gov/vuln/detail/'+item" target="_blank">{{item}}</a></td>

    </tr>

  </tbody>
</table>
</article>
<br>
<button type="submit" @click="downpdf()" style="width: 25%; display: inline-block;" class="contrast outline" v-if="isDataAvb"><img src="~@/assets/pdficn.png" width="25" height="25"/> Download PDF Report..</button>
<br><br>
    <details style="width: 25%;display: inline-block; text-align: left;" open >
  <summary style="font-size: 22px;">Tool description</summary>
    <p style="font-size: 17px;">A web vulnerabilities scanner checks a website  for weaknesses and security issues that 
    attackers can exploit, and provides a report on the overall security of the site</p>
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
      background: linear-gradient(90deg, #4bb4ff, #79e885 87%, #c9e136);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}

</style>


<script>
import FuturComp from "@/components/Futur.vue";
import { Service } from '@/services';
import  jspdf  from 'jspdf';
import autoTable from 'jspdf-autotable'


export default ({

components:{
    FuturComp,

},
 data(){
        return{
            wsv: null,
            wsvuserdata:null,
            wsverror:null,
            isDataAvb:false,
            click: true,
            

        }
    },
methods:{
    async wns(){
        this.click=false;
        const dejta = {
            ip: this.wsv
          }


          let portdata =  await Service.post("https://analyzeme.dev/webstatus", dejta);
            if (portdata.data == "Data is not available on this wp site"){
                            
                                this.isDataAvb=false;
                                this.wsverror="Invalid Url!"
                                this.click=true;
                            


            }else{
            this.isDataAvb=true;
            this.wsverror=null;
            this.wsvuserdata = portdata.data;
            console.log(this.wsvuserdata);
            this.click=true;
            }

        },
        downpdf(){
            const doc = new jspdf();
            doc.text("Web Status and Vulnerabilities Scanner Report\n",50,9);
            autoTable(doc, { html: '#info-table' });
            autoTable(doc, { html: '#vulns-table' });

          doc.save('table.pdf')

        }
        
}


})
</script>