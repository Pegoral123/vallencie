<template>
  <section class="container">
    <NavBar />
    <div class="text-center pt-4">
      <h1>Cadasatro cliente</h1>
      <div>
        <form action="" class="col-12 col-md-6 m-auto bg-whithe p-5">

           <div class="form-group">
            <label class="float-start"> Usuaraio </label>
            <input type="text" name="nome" v-model="user.nome" class="form-control" />
              
          </div>

          <div class="form-group">
            <label class="float-start"> E-mail </label>
            <input type="email" name="email" v-model="user.email" class="form-control" />
          </div>

          <div class="form-group">
            <span class="d-flex justify-content-between"
            
            >
            <input type="password" name="senha" v-model="user.senha" class="form-control" />
          </div>

           <div class="form-group">
            <label class="float-start"> Data de Nascimento </label>
            <input type="text" name="senha " v-model="user.data_nasc" class="form-control" />
          </div>

           <div class="form-group">
            <label class="float-start"> Telefone </label>
            <input type="text"  name="tel" v-model="user.tel" class="form-control" />
          </div>

           <div class="form-group">
            <label class="float-start"> CPF </label>
            <input type="text" name="cpf" v-model="user.cpf" class="form-control" />
          </div>

        </form>
      </div>
      <div class="">
        <button
          type="button"
          onclick="mainlogin.enviar()"
          class="btn btn-danger"
        >
          Cadastra
        </button>
      </div>

     <div>
      <a>Ao continuar com acesso você cooncorda com a nossa</a>
      <a class="col-12">Politica de Privacidade</a>
    </div>
  </section>
</template>

<script>
import {Usuario} from "@/models/Usuario";
import NavBar from "@/components/NavBar.vue";

var user = new Usuario();

export default {
  components: {
    NavBar,
  },

  data(){
      return{
          usuario = user
      }

  }
};
</script>

<style>
</style>