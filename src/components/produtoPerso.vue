 <template>
  <NavBar />
  <section class="bg-rosa">
    <div class="container">
      <div class="py-4">
        <h1 class="titulo tamanho22">Persolização do Produto</h1>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4 text-center">
          <img
            src="@/assets/produto12.jpg"
            class="img-fluid produtos border-circle"
          />
        </div>
        <div class="col-4"></div>
        <div class="py-4"><h2 class="titulo">Escolhar Cor Principal</h2></div>
        <div class="py-4 produtos border-circle">
          <input
            type="checkbox"
            class="px-2"
            name="opc2"
            value="1"
            checked
          />Azul
          <input type="checkbox" class="px-2" name="opc2" value="2" />Rosa
          <input type="checkbox" class="px-2" name="opc2" value="3" />Amarelo
          <input type="checkbox" class="px-2" name="opc2" value="4" />Verde
        </div>

        <div class="py-4"><h2 class="titulo">Escolhar Cor Secundaria</h2></div>
        <div class="py-4 produtos border-circle">
          <input
            type="checkbox"
            class="px-2"
            name="opc2"
            value="1"
            checked
          />Azul
          <input type="checkbox" class="px-2" name="opc2" value="2" />Preto
          <input type="checkbox" class="px-2" name="opc2" value="3" />Branco
          <input type="checkbox" class="px-2" name="opc2" value="4" />Roxo
        </div>

        <div class="py-4">
          <router-link to="/usuario_carrinho" class="btn bg-amarelo-claro">
            Finalizar Personalização
          </router-link>
        </div>
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
 <style scoped>
.tamanho {
  font-size: 150px;
}
</style>