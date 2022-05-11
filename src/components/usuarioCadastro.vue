<template>
  <NavBar />
  <section class="container py-4">
    <div class="text-center pt-4 border border-3 borda rounded-pill bg-rosa">
      <h1>Cadasatro do cliente</h1>
      <div>
        <form action="" class="col-12 col-md-6 m-auto bg-whithe p-5">
          <div class="form-group">
            <label class="float-start"> Usuario </label>
            <input
              type="text"
              name="nome"
              class="form-control rounded-pill"
              v-model="usuario.nome"
            />
          </div>

          <div class="form-group py-2">
            <label class="float-start"> E-mail </label>
            <input
              type="email"
              name="email"
              class="form-control rounded-pill"
              v-model="usuario.email"
            />
          </div>

          <div class="form-group py-2">
            <span class="d-flex justify-content-between" />
            <label class="float-start"> Senha </label>
            <input
              type="password"
              name="senha"
              class="form-control rounded-pill"
              v-model="usuario.senha"
            />
          </div>

          <div class="form-group py-2">
            <label class="float-start"> Data de Nascimento </label>
            <input
              type="text"
              name="senha "
              class="form-control rounded-pill"
              v-model="usuario.data_nasc"
            />
          </div>

          <div class="form-group py-2">
            <label class="float-start"> Telefone </label>
            <input
              type="text"
              name="tel"
              v-model="usuario.tel"
              class="form-control rounded-pill"
            />
          </div>

          <div class="form-group pt-2">
            <label class="float-start"> CPF </label>
            <input
              type="text"
              name="cpf"
              v-model="usuario.cpf"
              class="form-control rounded-pill"
            />
          </div>
        </form>
      </div>
      <div class="pb-4 pe-5">
        <button
          type="button"
          class="btn btn-dark rounded-pill"
          @click="cadastrar()"
        >
          Cadastrar Usuario
        </button>

        <button
          type="button"
          class="btn btn-danger rounded-pill"
          @click="$router.push('/')"
        >
          Sair
        </button>
      </div>
    </div>
  </section>
  <rodapeSite />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import rodapeSite from "@/components/rodapeSite.vue";
import UsuarioService from "@/services/usuarioService";
import { Usuario } from "@/models/usuario.js";
var usuario = new Usuario();
export default {
  components: {
    NavBar,
    rodapeSite,
  },
  data() {
    return {
      usuario,
    };
  },
  methods: {
    cadastrar() {
      UsuarioService.add(this.usuario)
        .then((res) => {
          // console.log(res);
          alert("Cadastrado!", res);
        })
        .catch((err) => {
          console.error(err);
          alert("Erro ao cadastrar!");
        });
    },
    async sendFile() {
      let dataForm = new FormData();
      for (let file of this.$refs.files.files) {
        dataForm.append(`file`, file);
      }
      let res = await fetch(`http://localhost/api/upload`, {
        method: "POST",
        body: dataForm,
      });
      let data = await res.json();
      console.log(data);
    },
  },
};
</script>

<style>
.borda {
  border-color: #ecc661;
}
</style>