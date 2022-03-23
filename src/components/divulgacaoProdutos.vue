<template>

    <section class="container bg-whithe">
        <div class="row">

            <div class="col-md-3 col-6">
                <a href="#compras" target="_self">
                    <img src="../assets/produto1.jpg" alt="demonstracao " class="img-fluid p-5 imgSocial rounded-circle">
                </a>
            </div>

            <div class="col-md-3 col-6">
                <a href="#compras" target="_self">
                    <img src="../assets/produto1.jpg" alt="demonstracao " class="img-fluid p-5  imgSocial rounded-circle">
                </a>
            </div>

            <div class="col-md-3 col-6 ">
                <a href="#compras" target="_self">
                    <img src="../assets/produto1.jpg" alt="demonstracao" class="img-fluid p-5  imgSocial rounded-circle ">
                </a>
            </div>

            <div class="col-md-3 col-6">
                <a href="#compras" target="_self">
                    <img src="../assets/produto1.jpg" alt="demonstracao" class="img-fluid p-5  imgSocial rounded-circle ">
                </a>
            </div>
        </div>

        
    </section>

   </template>

<script>
export default {
   name:"divulgacaoProdutos",
}
</script>

<style>
.bg-whithe {
    background-color: #ffffff;
}

.whithe {
    color: #ffffff;
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