<template>
  <NavBar />

  <section id="login " class="container py-4">
    <div class="text-center pt-4 border border-3 rounded-pill bg-rosa">
      <h1 class="titulo">Login do cliente</h1>
      <div>
        <form action="" class="col-12 col-md-6 m-auto bg-whithe p-5">
          <div class="form-group">
            <label class="float-start"> E-mail </label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control rounded-pill"
              v-model="dadosUsuario.usuario"
            />
          </div>

          <div class="form-group">
            <span class="d-flex justify-content-between"
              ><label>Senha</label> <i>Esqueceu a senha?</i></span
            >
            <input
              type="password"
              name="senha"
              id="senha"
              class="form-control rounded-pill"
              v-model="dadosUsuario.senha"
            />
          </div>
        </form>
      </div>
      <div class="">
        <button
          type="button"
          class="btn btn-danger rounded-pill"
          @click="logonUsuario()"
        >
          Continuar
        </button>
        <button
          type="button"
          class="btn btn-dark rounded-pill ps-2"
          @click="logoffUsuario()"
        >
          Sair
        </button>
      </div>

      <div class="py-3">
        <router-link to="/usuario_add" class="btn btn-outline-warning mx-1">
          Cadastra-se no Vallencie Croches
        </router-link>
      </div>
    </div>
  </section>
  <rodapeSite />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import rodapeSite from "@/components/rodapeSite.vue";
import UsuarioService from "@/services/usuarioService";
import router from "@/router";
export default {
  components: {
    NavBar,
    rodapeSite,
  },
  data() {
    return {
      dadosUsuario: {
        usuario: "",
        senha: "",
      },
    };
  },
  mounted() {
    //this.loadDoc("http://localhost/api/usuario/list", myFunction);
    this.listarUsuarios();
  },
  methods: {
    // function loadDoc(url, xFunction) {
    //   const xhttp = new XMLHttpRequest();
    //   xhttp.onload = function () {
    //     xFunction(this);
    //   };
    //   xhttp.open("GET", url);
    //   xhttp.send();
    // }
    // function myFunction(xhttp) {
    //   console.log(xhttp.responseText);
    // }

    listarUsuarios() {
      UsuarioService.list().then((res) => {
        console.log(res);
      });
    },
    logonUsuario() {
      UsuarioService.login(this.dadosUsuario)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.result.token);
          localStorage.setItem("user", JSON.stringify(res.data.result));
          alert("Usuario logado!");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao fazer o login!");
        });
    },
    logoffUsuario() {
      localStorage.clear();
      router.push("/");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&family=Baloo+2&family=DM+Sans:ital,wght@1,500&family=Mukta:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&family=DM+Sans:ital,wght@1,500&family=Mukta:wght@200&display=swap");
.titulo {
  font-family: "Amatic SC", cursive;
}

.frases {
  font-family: "Baloo 2", cursive;
}
</style>