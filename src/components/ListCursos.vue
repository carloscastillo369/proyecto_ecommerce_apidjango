<template>
    <div class="list">
        <h2>Conoce nuestros Programas de Especialización</h2>
        <div class="items" >
            <ItemCurso 
                v-for="curso in cursos" 
                :key="curso.id"
                :curso="curso"
            />
        </div>
    </div>
</template>

<script>
import ItemCurso from "@/components/ItemCurso.vue"
import { mapActions, mapState } from "vuex";

export default {
    name: 'ListCursos',
    components: {
        ItemCurso
    },
    methods: {
        ...mapActions(['getCursosAction'])
    },
    computed: {
        ...mapState(['cursos'])
    },
    mounted() {
        this.getCursosAction()
    }
}
</script>

<style scoped>
    .list {
        width: 100%;
        margin: 0 auto;
        padding-bottom: 100px;
        background: var(--bgbody);
    }

    .items {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    h2 {
        margin-bottom: 30px;
        padding-left: 2.5%;
        color: var(--colorText2);
        font-size: 20px;
        font-weight: bold;
    }

    ul {
        list-style: none;
    }

    @media screen and (min-device-width:780px){
        .items {
            padding: 0 2.5%;
            justify-content: space-around;
        }

        h2 {
            padding-left: 4%;
        }
    }

    @media screen and (min-device-width:950px){
        .list {
            padding-bottom: 50px;
        }

        .items {
            padding: 0;
            padding-left: 4%;
            width: 82%;
            justify-content: space-around;
        }
    }

    @media screen and (min-device-width:1200px){
        .list {
            width: 100%;
            padding-left: 10%;
            padding-bottom: 70px;
            background: var(--bgbody);
        }

        .items {
            padding: 0;
            width: 100%;
            justify-content: space-between;
        }

        h2 {
            padding: 0;
        }
    }
</style>