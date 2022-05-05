<template>
  <NavBar />
  <section id="carrinho" class="container py-3">
    <div class="row">
      <h1 class="pb-2 ps-4">Carrinho de compra</h1>
      <div class="col-md-8 col-12">
        <div class="border border-dark">
          <div class="row">
            <div class="col-md-4 col-6">
              <img src="@/assets/produto6.jpeg" class="img-fluid pt-2 ps-2" />
            </div>
            <div class="col-md-8 col-6">
              <h2>Croche Detalhada</h2>
              <p>Vendido por Vallencie Croches</p>
              <p class="fs-4">Preço</p>
              <p class="fs-4">R$300,00</p>
              <p class="fs-4">em ate 10x de R$300,00</p>
              <div class="py-2">
                <button type="button" class="btn btn-danger">
                  Remover Produto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4 col-12">
        <p class="fs-3 ps-4">Subtotal(1 Item):R$300,00</p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-success" type="button">Fechar pedido</button>
        </div>
        <div class="py-3 text-center">
          <div class="border border-dark r">
            <h4 class="py-4">Os Itens mais vendidos do site</h4>

            <div class="">
              <img src="@/assets/produto8.jpeg" class="img-fluid" />
              <p class="fs-2 ps-3 pt-2">Preço:R$100,00</p>
            </div>
            <div class="">
              <img src="@/assets/produto7.jpeg" class="img-fluid" />
              <p class="fs-2 ps-3 pt-2">Preço:R$200,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <rodapeSite />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import rodapeSite from "@/components/rodapeSite.vue";
export default {
  components: {
    NavBar,
    rodapeSite,
  },
};
</script>

<style>
</style>