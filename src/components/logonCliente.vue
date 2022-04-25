<template>
  <NavBar />
  <section id="login " class="container">
    <div class="text-center pt-4">
      <h1>Login do cliente</h1>
      <div>
        <form action="" class="col-12 col-md-6 m-auto bg-whithe p-5">
          <div class="form-group">
            <label class="float-start"> E-mail </label>
            <input
              type="email"
              id="email"
              v-model="dadosUsuario.usuario"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <span class="d-flex justify-content-between"
              ><label>Senha</label> <i>Esqueceu a senha?</i></span
            >
            <input
              type="password"
              id="senha"
              v-model="dadosUsuario.senha"
              class="form-control"
            />
          </div>
        </form>
      </div>
      <div class="">
        <button
          type="button"
          onclick="mainlogin.enviar()"
          class="btn btn-danger"
        >
          Continuar
        </button>
      </div>

      <div class="pt-4">
        <h4>Cadastre-se no Vallencie croches</h4>
      </div>
      <a>Ao continuar com acesso você cooncorda com a nossa</a>
      <a class="col-12">Politica de Privacidade</a>
    </div>
  </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import UsuarioService from "@/services/usuario";
export default {
  components: {
    NavBar,
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
    loganUsuario() {
      UsuarioService.login(this.dadosUsuario)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
</style>