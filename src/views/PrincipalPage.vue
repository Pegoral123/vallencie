<template>
  <NavBar />
  <section id="divulgacao" class="bg-rosa py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6">
          <a href="#compras" target="_self">
            <img
              src="@/assets/produto9.jpg"
              alt="demonstracao "
              class="img-fluid p-4 imgSocial rounded-circle"
            />
          </a>
        </div>

        <div class="col-md-3 col-6">
          <a href="#compras" target="_self">
            <img
              src="@/assets/produto8.jpg"
              alt="demonstracao "
              class="img-fluid p-4 imgSocial rounded-circle"
            />
          </a>
        </div>

        <div class="col-md-3 col-6">
          <a href="#compras" target="_self">
            <img
              src="@/assets/produto10.jpg"
              alt="demonstracao"
              class="img-fluid p-4 imgSocial rounded-circle"
            />
          </a>
        </div>

        <div class="col-md-3 col-6">
          <a href="#compras" target="_self">
            <img
              src="@/assets/produto12.jpg"
              alt="demonstracao"
              class="img-fluid p-4 imgSocial rounded-circle"
            />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="centro sair propaganda py-5"></section> -->

  <section id="compras" class="bg-amarelo-claro py-5">
    <div class="container">
      <h1 class="text-center titulo pb-3">Loja de Amigurumis</h1>
      <div class="row">
        <div class="col-md-4 col-12">
          <div class="card" style="width: 18rem">
            <img
              src="@/assets/produto5.jpeg"
              alt="demonstracao"
              class="img-fluid p-4 imgSocial rounded-circle"
            />

            <div class="card-body">
              <h4 class="card-title pb-2 titulo tamanho">
                Chaveiro de Melancia
              </h4>
              <p class="card-text frases tamanho2">
                Crochê feita com muito amor e atenção!
              </p>
              <h5 class="card-text">Preço:$100,00</h5>
              <div class="col-md-12 col-12 p-2">
                <div class="row">
                  <div class="col-md-6 col-12 p-2">
                    <div class="">
                      <router-link
                        to="/usuario_carrinho"
                        class="btn bg-amarelo-claro mx-1"
                      >
                        Comprar
                      </router-link>
                    </div>
                  </div>

                  <div class="col-md-6 col-12 p-2">
                    <div class="">
                      <router-link to="/pruduto_perso" class="btn bg-rosa mx-1">
                        Personalizar
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5>Deixe seu comentario!</h5>
                <input type="email" class="rounded-pill roxo" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-12">
          <div class="card" style="width: 18rem">
            <img
              src="@/assets/produto12.jpg"
              alt="demonstracao"
              class="img-fluid p-4 imgSocial rounded-circle"
            />

            <div class="card-body">
              <h4 class="card-title pb-2 titulo tamanho">Yoda</h4>
              <p class="card-text frases tamanho2">
                Melhor programador que vai passar por esse mundo
              </p>
              <h5 class="card-text">Preço:$100,00</h5>
              <div class="col-md-12 col-12 p-2">
                <div class="row">
                  <div class="col-md-6 col-12 p-2">
                    <div class="">
                      <router-link
                        to="/usuario_carrinho"
                        class="btn bg-amarelo-claro mx-1"
                      >
                        Comprar
                      </router-link>
                    </div>
                  </div>

                  <div class="col-md-6 col-12 p-2">
                    <div class="">
                      <router-link to="/pruduto_perso" class="btn bg-rosa mx-1">
                        Personalizar
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5>Deixe seu comentario!</h5>
                <input type="email" class="rounded-pill roxo" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-12">
          <div class="card" style="width: 18rem">
            <img
              src="@/assets/produto7.jpeg"
              alt="demonstracao"
              class="img-fluid p-4 imgSocial rounded-circle"
            />

            <div class="card-body">
              <h4 class="card-title pb-2 titulo tamanho">Bonequinha</h4>
              <p class="card-text frases tamanho2">
                Crochê feita com muito amor e atenção!
              </p>
              <h5 class="card-text">Preço:$100,00</h5>
              <div class="col-md-12 col-12 p-2">
                <div class="row">
                  <div class="col-md-6 col-12 p-2">
                    <div class="">
                      <router-link
                        to="/usuario_carrinho"
                        class="btn bg-amarelo-claro mx-1"
                      >
                        Comprar
                      </router-link>
                    </div>
                  </div>

                  <div class="col-md-6 col-12 p-2">
                    <div class="">
                      <router-link to="/pruduto_perso" class="btn bg-rosa mx-1">
                        Personalizar
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5>Deixe seu comentario!</h5>
                <input type="email" class="rounded-pill roxo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="propaganda2 centro sair py-5"></section> -->

  <section id="promocoes" class="bg-whithe py-5 bg-rosa">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2 class="text-center titulo">
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
          <h1 class="titulo">Tutorial gratis de Croche</h1>
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

  <section id="social" class="bg-amarelo-claro py-5">
    <div class="container">
      <div class="row">
        <div>
          <h1 class="pb=3 titulo">Comentarios</h1>
        </div>

        <div class="col-md-6 col-12 px-5">
          <div class="row produtos p-2 border-circle">
            <div class="col-md-4 col-12 text-center my-auto">
              <img
                src="https://picsum.photos/200/200"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="col-md-8 col-12 pt-4">
              <div class="border-bottom">
                <h3 class="text-start frases">Pegoral</h3>
                <p class="text-center pt-2 titulo tamanho">
                  O programador é brabo de mais, Tem que contratar ele!
                </p>
              </div>
              <div class="p-2 text-end fs-3">
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-chat-dots px-1"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-12 px-5">
          <div class="row produtos p-2 border-circle">
            <div class="col-md-4 col-12 text-center my-auto">
              <img
                src="https://picsum.photos/200/200"
                class="img-fluid rounded-circle"
              />
            </div>
            <div class="col-md-8 col-12 pt-4">
              <div class="border-bottom">
                <h3 class="text-start frases">Marina</h3>
                <p class="text-center pt-2 titulo tamanho">
                  Amei o site, Produtos maravilhosos e facil de mexer!
                </p>
              </div>
              <div class="p-2 text-end fs-3">
                <i class="bi bi-heart px-1"></i>
                <i class="bi bi-chat-dots px-1"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- <div id="propaganda3" class="sair col-4">
          <img src="@/assets/propaganda.jpeg" class="img-fluid" />
        </div> -->
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
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Baloo+2&family=DM+Sans:ital,wght@1,500&family=Mukta:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&family=DM+Sans:ital,wght@1,500&family=Mukta:wght@200&display=swap");

.tamanho {
  font-size: 30px;
}
.tamanho2 {
  font-size: 20px;
}

.titulo {
  font-family: "Amatic SC", cursive;
}

.frases {
  font-family: "Baloo 2", cursive;
}

.borda {
  border-color: #c7eff7;
}

.roxo {
  background-color: #eac0ed;
}

.bg-rosa {
  background-color: #f8cfdf;
}

.bg-amarelo-claro {
  background-color: #fff393;
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
