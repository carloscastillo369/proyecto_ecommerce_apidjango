<template>
  <div id="app">
    <Header/>
    <div class="body">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import BotonWhatsApp from "@/components/BotonWhatsApp.vue"
import Footer from "@/components/Footer.vue"

export default {
    components: {
        Header,
        BotonWhatsApp,
        Footer
    }
}
</script>


<style>

:root{
    /*COLORES FONDO*/
    --bgheader: #3B00FF;
    --bgfooter:#000D29;
    --bgbody: #F2F3F5;
    --bgimgcursos: linear-gradient(#00042500, #000425);
    --bgportadacursos: linear-gradient(#00042533, #000425);
    --bgcomunidad: linear-gradient(#3015FD, #5640FF);
    --bgbeneficio: #FFFFFF;
    --bghorario: #5640FF;
    --bghorarioheader: #000000;
    --bghorariobody: #87CEEB4D;
    --bgregistro: #F8F8FA;

    /*COLORES TEXTO*/
    --colorText1: #FFFFFF;
    --colorText2: #222222;
    --colorText3: #8B9099;
    --colorText4: #000425;
    --colorText5: #5640FF;

    /*COLORES BOTONES*/
    --button1: #5640FF;
    --button2: #FF1558;
    --button3: #0DA00D;
}

*,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: var(--bgregistro);
}

</style>
