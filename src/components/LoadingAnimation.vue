<template >

<span class="loader"><span class="loader-inner"></span></span><br><br>
<span>Loading..</span><br><br>
</template> 

<style lang="scss">

.loader {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: relative;
  border: 4px solid hsl(205deg 16% 77%);
  top: 50%;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: hsl(205deg 16% 77%);
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  
  25% {
    transform: rotate(180deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  75% {
    transform: rotate(360deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }
  
  25% {
    height: 0%;
  }
  
  50% {
    height: 100%;
  }
  
  75% {
    height: 100%;
  }
  
  100% {
    height: 0%;
  }
}

</style>
<script>
export default{
    name:"LoadingAnimation",
}

</script>