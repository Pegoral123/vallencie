<template>
  <pricipalPage />
</template>

<script>
import pricipalPage from "./components/principalPage.vue";
export default {
  name: "App",
  components: {
    pricipalPage,
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
