<template>
    <div class="body">
        <Header/>
        <Banner/>
        <div class="section">
            <div class="main">
                <Respaldo/>
                <ListCursos/>
                <Comunidad/>
                <Beneficios/>
            </div>
            <FormPostula widthHome="width-80"/>        
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Banner from "@/components/Banner.vue"
import Respaldo from "@/components/Respaldo.vue"
import ListCursos from "@/components/ListCursos.vue"
import Comunidad from "@/components/Comunidad.vue"
import Beneficios from "@/components/Beneficios.vue"
import FormPostula from "@/components/FormPostula.vue"
import Footer from "@/components/Footer.vue"

export default {
    name: 'Inicio',
    components: {
        Header,
        Banner,
        Respaldo,
        ListCursos,
        Comunidad,
        Beneficios,
        FormPostula,
        Footer
    }
}
</script>

<style scoped>
    .body {
        width: 100%;
    }

    @media screen and (min-device-width:1200px){
        .section {
            width: 100%;
            display: flex;
            margin: 0 auto;
        }
    }

    @media screen and (min-device-width:1366px){
        .section {
            width: 1366px;
        }
    }
</style>