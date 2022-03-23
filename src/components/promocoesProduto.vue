<template>
  <section id="promocoes" class=" bg-rosa">
        <div class="container">
            <div class="row ">
                <div class="col-md-6 col-12">
                    <h2 class="text-center ">Inscreva-se e Receba nossas promoções no e-mail ou direto no celular</h2>
                    <form>
                        <div class="form-group">
                            <label for="" class="form-label"></label>
                            <input type="text" class="form-control" placeholder="Nome">
                        </div>
                        <div class="row pt-4">
                            <div class="form-group col-8">
                                <!-- <label for="" class="form-label"></label> -->
                                <input type="text" class="form-control" placeholder="E-mail ou telefone">
                            </div>

                            <div class="form-group col-4">
                                <!-- <label for="" class="form-label"></label> -->
                                <button type="button" class="btn btn-danger form-control">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-md-6 col-12 text-center tamanho">
                    <h1 class="">Tutorial gratis de Croche</h1>
                    <div>
                        <iframe width="98%" height="315" src="https://www.youtube.com/embed/ZQM1GS3uDz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.bg-rosa {
    background-color: #d7949d;
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