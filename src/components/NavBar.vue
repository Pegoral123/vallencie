<template>
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
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"
              >Inicio</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#divulgacao1">Demostração</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#compras">Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="logon.html">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="carrinho.html">Carrinho</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  nome: "NavBar",
};
</script>

<style>
</style>