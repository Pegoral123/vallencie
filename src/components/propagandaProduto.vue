<template>
  <section  class="centro sair propaganda ">

     
  </section> 
</template>

<script>
export default {
   name:"propagandaProduto",
}
</script>

<style>
 .propaganda{
    background-image: url(../assets/foto_propagada.jpeg);background-size: cover ;background-position: center ; background-color: black;
} 

.bg-whithe {
    background-color: #ffffff;
}

.whithe {
    color: #ffffff;
}
section {
    background-color: white;
    min-height: 250px;
    max-height: 100%;
    padding: 50px 0;
}

@media screen and (max-width:768px){

    .sair{display: none; }

    nav ul{        
        width: 100%;
}
  nav ul li{
      width: 100%;
  }  
  nav ul l a{
      text-align: center;
      
  } 
  
 .imgSocial{
    padding: 20px;
}
.tamanho{
    padding-top: 40px;
}
.fotoSocial{
    max-height: 200px;max-width: 200px;
    text-align: center;
}
.spacing{
    padding-top: 20px;
    text-align: center;
    
 
}
.spacing1{
  padding-right: 100px;
  
}
.padding{
    padding-right: 30px;
}
.padding-left{
    padding-left: 30px;
}
 }
</style>