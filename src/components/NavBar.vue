<template>
  <section>
    <header>
      <div class="text-start ps-4 container p-2">
        <img
          alt="Logo marca da loja bololand."
          src="../assets/logo.marca3.png"
          class="altura"
        />
      </div>
    </header>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-blue">
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
              <router-link
                to="/"
                class="nav-link frases tamanho"
                aria-current="page"
                >Inicio</router-link
              >
            </li>
          </ul>

          <div v-if="usuario == null">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/logon" class="nav-link frases tamanho"
                  >Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/usuario_add" class="nav-link frases tamanho"
                  >Cadastrar</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link frases tamanho" href="#compras">
                  Amigurumis</a
                >
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/usuario_perfil" class="nav-link">
                  {{ usuario.nome }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link frases tamanho" @click="logoffUsuario()"
                  >Sair</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link frases tamanho" href="#compras">
                  Amigurumis</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>


<script >
import { Usuario } from "@/models/usuario.js";
import router from "@/router";

var usuario = new Usuario();
export default {
  nome: "NavBar",
  data() {
    return {
      usuario,
    };
  },
  methods: {
    getUsuario() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.usuario = typeof user === undefined ? null : user;
    },
    logoffUsuario() {
      localStorage.clear();
      this.usuario = null;
      router.push("/");
    },
  },
  mounted() {
    this.getUsuario();
  },
  // watch: {
  //   usuario: function () {},
  // },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Baloo+2&family=DM+Sans:ital,wght@1,500&family=Mukta:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&family=DM+Sans:ital,wght@1,500&family=Mukta:wght@200&display=swap");

.tamanho {
  font-size: 25px;
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

nav {
  max-height: 50px;
  min-height: 30px;
  background-color: #eac0ed;
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