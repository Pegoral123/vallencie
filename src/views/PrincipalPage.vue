<template>
  <NavBar />
  <section id="divulgacao" class="container bg-whithe py-5">
    <div class="row">
      <div class="col-md-3 col-6">
        <a href="#compras" target="_self">
          <img
            src="@/assets/produto1.jpg"
            alt="demonstracao "
            class="img-fluid p-5 imgSocial rounded-circle"
          />
        </a>
      </div>

      <div class="col-md-3 col-6">
        <a href="#compras" target="_self">
          <img
            src="@/assets/produto1.jpg"
            alt="demonstracao "
            class="img-fluid p-5 imgSocial rounded-circle"
          />
        </a>
      </div>

      <div class="col-md-3 col-6">
        <a href="#compras" target="_self">
          <img
            src="@/assets/produto1.jpg"
            alt="demonstracao"
            class="img-fluid p-5 imgSocial rounded-circle"
          />
        </a>
      </div>

      <div class="col-md-3 col-6">
        <a href="#compras" target="_self">
          <img
            src="@/assets/produto1.jpg"
            alt="demonstracao"
            class="img-fluid p-5 imgSocial rounded-circle"
          />
        </a>
      </div>
    </div>
  </section>

  <section class="centro sair propaganda py-5"></section>

  <section id="compras" class="bg-rosa py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="produtos row">
            <div class="col-6 img-fluid pt-2">
              <img src="../assets/produto2.jpg" class="img-fluid" />
            </div>
            <div class="py-3 col-6">
              <h1>Produtos</h1>
              <p class="frases">
                Eu amo esse site,deveras maravilhoso o produto e o programador
              </p>
              <p class="fs-4">Preço: R$200,00</p>
            </div>
            <div class="ps-3 pb-3 col-12 pt-3">
              <div class="row">
                <div class="col-4 text-center padding-left">
                  <input
                    type="number"
                    step="1"
                    min="0"
                    max="10"
                    value="0"
                    class="form-control"
                  />
                </div>
                <div class="col-4 text-center">
                  <a href="carrinho.html" target="_self">
                    <button type="button" class="btn btn-danger">
                      Encomendar
                    </button>
                  </a>
                </div>
                <div class="col-4 padding">
                  <a href="/git.vallenciee/personalizar.html" target="_self">
                    <button type="button" class="btn btn-danger">
                      Personalizar
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="propaganda2 centro sair py-5"></section>

  <section id="promocoes" class="bg-whithe py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2 class="text-center">
            Inscreva-se e Receba nossas promoções no e-mail ou direto no celular
          </h2>
          <form>
            <div class="form-group">
              <label for="" class="form-label"></label>
              <input type="text" class="form-control" placeholder="Nome" />
            </div>
            <div class="row pt-4">
              <div class="form-group col-8">
                <!-- <label for="" class="form-label"></label> -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="E-mail ou telefone"
                />
              </div>

              <div class="form-group col-4">
                <!-- <label for="" class="form-label"></label> -->
                <button type="button" class="btn btn-danger form-control">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-6 col-12 text-center tamanho">
          <h1 class="">Tutorial gratis de Croche</h1>
          <div>
            <iframe
              width="98%"
              height="315"
              src="https://www.youtube.com/embed/ZQM1GS3uDz8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="social" class="bg-rosa py-5">
    <div class="container">
      <div class="row">
        <div>
          <h1 class="pb=3">Comentarios</h1>
        </div>
        <div class="col-md-8 col-12">
          <div class="row border border-dark ps-2 py-3 px-3">
            <div class="row col-md-4 col-12 pb-3 fotoSocial">
              <img
                src="https://picsum.photos/200/200"
                class="img-fluid rounded-circle text-center"
              />
            </div>
            <div class="col-md-8 col-12 border border-dark">
              <div class="row">
                <h2>Usuario:Marina</h2>
                <h4>
                  Maravilhoso,amei fazer minhas compras nesse site, seguro e
                  confiavel
                </h4>
                <i class="bi bi-award-fill"></i>
              </div>
            </div>
          </div>
        </div>

        <div id="propaganda3" class="sair col-4">
          <img src="@/assets/propaganda.jpeg" class="img-fluid" />
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
.bg-rosa {
  background-color: #f8cfdf;
}
.bg-black {
  background-color: black;
}
.icone {
  font-size: 30px;
}
.black {
  color: black;
}
.whithe {
  color: #ffffff;
}

.produtos {
  border-radius: 5%;
  border: solid 1px #888;
}
section {
  background-color: white;
  min-height: 250px;
  max-height: 100%;
  padding: 0;
}

.propaganda2 {
  background-image: url(../assets/foto_propagada.jpeg);
  background-size: cover;
  background-position: center;
  background-color: black;
}
.propaganda {
  background-image: url(../assets/foto_propaganda2.jpeg);
  background-size: cover;
  background-position: center;
  background-color: black;
}
</style>
