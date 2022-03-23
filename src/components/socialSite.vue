<template>
  <section id="social" class=" container bg-whithe">
        <div class="row">
            <h1 class="pb=3">Comentarios</h1>
            <div class="col-md-8 col-12">
                <div class=" row border border-dark ps-2 py-3 px-3">
                    <div class="row col-md-4 col-12 pb-3 fotoSocial">
                        <img src="https://picsum.photos/200/200" class="img-fluid rounded-circle text-center">
                    </div>
                    <div class="col-md-8 col-12 border border-dark">
                        <div class="row">
                            <h2>Usuario:Marina</h2>
                            <h4>Maravilhoso,amei fazer minhas compras nesse site, seguro e confiavel</h4>
                            <i class="bi bi-award-fill "></i>
                        </div>
                    </div>
                </div>
            </div>

            <div id="propaganda3" class="sair col-4 ">
                <img src="../assets/propaganda.jpeg" class="img-fluid">
            </div>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>




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