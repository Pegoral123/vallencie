<template>
       <NavBar/>
            <section id="login " class="container">
               <div class="text-center pt-4">
                     <h1>Login do cliente</h1>
                  <div>
                     <form action="" class="col-12 col-md-6 m-auto bg-whithe p-5">
                        <div class="form-group ">
                          <label class="float-start"> E-mail </label>
                          <input type="email" id="email" class="form-control">
                        </div> 

                        <div class="form-group">
                           <span class="d-flex justify-content-between"><label>Senha</label>
                           <i>Esqueceu a senha?</i></span>
                           <input type="password" id="senha" class="form-control">
                        </div> 

                     </form>
                  </div>
                     <div class="">
                        <button type="button" onclick="mainlogin.enviar()" class="btn btn-danger ">Continuar</button>
                     </div>
                     
                     <div class="pt-4">
                        <h4>Cadastre-se no Vallencie croches</h4>
                     </div>  
                        <a >Ao continuar com acesso você cooncorda com a nossa</a>
                        <a class="col-12">Politica de Privacidade</a>      
                  </div>

              
            </section>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
components:{
    NavBar,
}
}
</script>

<style>

</style>