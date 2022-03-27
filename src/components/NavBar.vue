<template>
  <section>
    <header>
      <img
        alt="Logo marca da loja bololand."
        src="../assets/logo.marca.png"
        class="altura"
      />
    </header>
    <nav class="navbar navbar-expand-lg navbar-dark grad sticky-sm-top">
      <div class="container">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
          <!--Icone no Menu Celular-->
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><router-link to="/">Inicio</router-link> |</li>
            <li class="nav-item">
              <a class="nav-link" href="#compras">Produtos</a>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <router-link to="/logon">login</router-link> |
            </li>

            <li class="nav-item">
              <a class="nav-link" href="carrinho.html">Carrinho</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script >
export default {
  nome: "NavBar",
};
</script>

<style scoped>
nav {
  max-height: 50px;
  min-height: 30px;
  background-color: palevioletred;
}
nav ul {
  display: block;
  float: left;
}
nav ul li {
  display: inline-block;
  line-height: 25px;
  color: black;
  font-size: 15pt;
  font-family: Arial, Helvetica, sans-serif;
}
nav ul li a {
  color: black;
  text-decoration: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;

  /* padding 15px 25px */
}
nav ul li a:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 0, 0);
}
.altura {
  height: 300px;
}
header {
  background-image: url(../assets/capa.jpg);
  background-position: center;
}

@media screen and (max-width: 768px) {
  .sair {
    display: none;
  }

  nav ul {
    width: 100%;
  }
  nav ul li {
    width: 100%;
  }
  nav ul l a {
    text-align: center;
  }

  .imgSocial {
    padding: 20px;
  }
  .tamanho {
    padding-top: 40px;
  }
  .fotoSocial {
    max-height: 200px;
    max-width: 200px;
    text-align: center;
  }
  .spacing {
    padding-top: 20px;
    text-align: center;
  }
  .spacing1 {
    padding-right: 100px;
  }
  .padding {
    padding-right: 30px;
  }
  .padding-left {
    padding-left: 30px;
  }
}
</style>