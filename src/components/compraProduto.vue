<template>
   <section id="compras" class="  bg-rosa ">
        <div class="container">
            <div class="row">
                <div class=" col-md-6 col-12">
                    <div class=" produtos row">
                        <div class="col-6 img-fluid pt-2">
                            <img src="../assets/produto2.jpg" class="img-fluid">
                        </div>
                        <div class="py-3  col-6">
                            <h1>Produtos</h1>
                            <p class="whithe"> Eu amo esse site,deveras maravilhoso o produto e o programador</p>
                            <p class="fs-4">Preço: R$200,00</p>
                        </div>
                        <div class=" ps-3 pb-3  col-12 pt-3 ">
                            <div class="row">
                                <div class="col-4 text-center padding-left">
                                    <input type="number" step="1" min="0" max="10" value="0" class="form-control">
                                </div>
                                <div class="col-4 text-center">
                                    <a href="carrinho.html" target="_self">
                                        <button type="button" class="btn btn-danger" >Encomendar</button>
                                    </a>
                                </div>
                                <div class="col-4 padding">
                                    <a href="/git.vallenciee/personalizar.html" target="_self">
                                        <button type="button" class="btn btn-danger" >Personalizar</button>
                                    </a>
                                </div>
                            </div>
                        </div>
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
.produtos {
    border-radius: 5%;
    border: solid 1px #888
}
</style>