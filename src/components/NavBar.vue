<template>
  <section>
    <header>
      <div class="text-start ps-4 container p-2">
        <img
          alt="Logo marca da loja bololand."
          src="../assets/logo.marca2.png"
          class="altura"
        />
      </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-light grad sticky-sm-top">
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
            <!-- <li class="nav-item"><router-link to="/">Inicio</router-link> |</li> -->
            <li class="nav-item">
              <a class="nav-link" href="/">Inicio</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#compras">Produtos</a>
            </li>
            <li class="nav-item"></li>
            <li class="nav-item">
              <!-- <router-link to="/logon">login</router-link> | -->
              <a class="nav-link" href="/logon">Login</a>
            </li>

            <li class="nav-item"></li>
            <li class="nav-item">
              <!-- <router-link to="/usuario_add">cadastrar</router-link> | -->
              <a class="nav-link" href="/usuario_add">Cadastrar</a>
            </li>

            <li class="nav-item"></li>
            <li class="nav-item">
              <!-- <router-link to="/usuario_listar">Listar</router-link> | -->
              <a class="nav-link" href="/usuario_listar">Listar</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/usuario_carrinho">Carrinho</a>
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
  color: white;
  text-decoration: none;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;

  /* padding 15px 25px */
}
nav ul li a:hover {
  color: rgb(255, 255, 255);
  background-color: white;
}
.altura {
  height: 300px;
}
header {
  background-image: url(../assets/capa2.png);
  background-position: center;
  background-size: cover;
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