<template>
  <section id="rodape" class="bg-rosa">
    <div class="container text-center">
      <div></div>
      <div class="text-center ps-1">
        <div class="pt-4"><p>Siga-nos nas Redes Sociais:</p></div>
        <a
          href="https://www.facebook.com/maryh.oliveira.180"
          target="_self"
          class="nolink font ps-1"
        >
          <i class="bi bi-facebook icone"></i>
        </a>

        <a
          href="https://api.whatsapp.com/send?l=pt-BR&phone=5521981766143&text=Oi"
          class="nolink font ps-1"
          ><i class="bi bi-whatsapp icon icone"></i
        ></a>
        <a href="tel:+55 (21)99739-5202" class="nolink"></a>

        <a
          href="https://instagram.com/vollencie?utm_medium=copy_link"
          target="_self"
          class="nolink font ps-1"
        >
          <i class="bi bi-instagram icone"></i>
        </a>
      </div>
    </div>
  </section>
  <div class="bg-black">
    <a href="https://github.com/Pegoral123" target="_self" class="nolink">
      <p class="text-end whithe">Programador: Jhonathan</p>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-rosa {
  background-color: #f8cfdf;
}
.bg-black {
  background-color: black;
}
.icone {
  font-size: 30px;
}
.black {
  color: black;
}
.whithe {
  color: #ffffff;
}
.font {
  font-size: 100px;
  color: black;
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