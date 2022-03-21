<template>
  <NavBar />
  <divulgacaoProdutos/>
  <propagandaProduto/>
  <compraProduto/>
  <propagandaProduto2/>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import divulgacaoProdutos from "./components/divulgacaoProdutos.vue";
import propagandaProduto from "./components/propagandaProduto.vue";
import compraProduto from "./components/compraProduto.vue";
import propagandaProduto2 from "./components/propagandaProduto.vue";



export default {
  name: "App",
  components: {
    NavBar,
    divulgacaoProdutos,
    propagandaProduto,
    compraProduto,
    propagandaProduto2,
   
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
