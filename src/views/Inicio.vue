<template>
    <div class="body">
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
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import Respaldo from "@/components/Respaldo.vue"
import ListCursos from "@/components/ListCursos.vue"
import Comunidad from "@/components/Comunidad.vue"
import Beneficios from "@/components/Beneficios.vue"
import FormPostula from "@/components/FormPostula.vue"

export default {
    name: 'Inicio',
    components: {
        Banner,
        Respaldo,
        ListCursos,
        Comunidad,
        Beneficios,
        FormPostula,
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