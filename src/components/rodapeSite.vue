<template>
  <section id="rodape" class="grad">
        <div class="container">
            <div class="row">
                <div class=" col-md-3 col-0 ">
                </div>
                <div class="col-md-2 col-6 text-center ps-4">
                    <h3 class="black">Formas de Pagamento</h3>
                    <div class="whithe">
                        <h4>
                            Cartão
                        </h4>
                        <h4>
                            Pix
                        </h4>
                        <h4>
                            Boleto
                        </h4>             
                    </div>
                
                </div>
                <div class="col-md-2 col-6 text-center pe-2 spacing1">

                    <h3 class="black">Sobre-nos</h3>
                    <div class="whithe">
                        <h4>Informações da empresa</h4>
                        <h4>Contatos</h4>
                        <h4>Blog</h4>
                    </div>
                </div>

                <div class="col-md-2 col-12 spacing pt-2 text-center">
                    <a href="https://www.facebook.com/maryh.oliveira.180" target="_self" class="nolink">
                        <i class="bi bi-facebook ps-1 icone"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?l=pt-BR&phone=5521981766143&text=Oi" class="nolink"><i 
                                class="bi bi-whatsapp icon icone ps-3"></i></a>
                    <a href="tel:+55 (21)99739-5202" class="nolink"></a>

                        <a href="https://instagram.com/vollencie?utm_medium=copy_link" target="_self" class="nolink">
                            <i class="bi bi-instagram ps-3 icone"></i>
                        </a>
                        <div class="pt-3 text-center pe-2 ps-2">
                            <button type="button" class="btn btn-danger btn-lg">Contatar</button>
                        </div>

                </div>
                <div clas="col-md-3 col-0">

                </div>
            </div>
        </div>
    </section>
    <div class="bg-black  ">
        <a href="https://github.com/Pegoral123" target="_self" class="nolink">
            <p class="text-end whithe ">Programador: Jhonathan</p>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-rosa {
    background-color: #d7949d;
}
.bg-black {
    background-color: black;
}
.icone{
  font-size: 30px;
}
.black {
    color: black;
}
.whithe {
    color: #ffffff;
}
.grad {
    height: auto;
    background-color: #d7949d;
    /* For browsers that do not support gradients */
    background-image: linear-gradient(#d7949d, #ecc661);
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