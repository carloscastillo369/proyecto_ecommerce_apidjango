<template>
    <div class="item">
        <img class="imagen" :src="curso.portada" :alt="curso.slug">
        <div v-if="curso.estado == true" class="bgcursos">
            <h3>{{curso.nombre_programa}}</h3>
            <p>S/. {{curso.precio}}</p>
            <div class="enlaces">
                <button @click="addCarritoAction(curso)">Agregar al carrito</button>
                <router-link 
                    :to="{name: 'Curso', params: {id: curso.slug}}">
                    <img class="verMas" src="@/assets/vermas.png" alt="">
                    Ver más
                </router-link>
            </div>
        </div>

        <div v-else class="bgcursos">
            <h3 class="proximo-curso">{{curso.nombre_programa}}</h3>
            <p class="proximamente">PROXIMAMENTE</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: 'ItemCurso',
    props: {
        curso:{}
    },
    methods: {
        ...mapActions(['addCarritoAction'])
    } 
}
</script>

<style scoped>
    .item {
        width: 100%;
        height: 222px;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imagen {
        width: 355px;
        height: 222px;
        border-radius: 10px;
    }
    
    .bgcursos {
        width: 355px;
        height: 222px;
        border-radius: 10px;
        position: absolute;
        color: var(--colorText1);
        z-index: 9;
        background: var(--bgimgcursos);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 20px;
    }

    p {
        font-size: 20px;
        font-weight: bold;
    }

    .enlaces {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    button {
        width: 150px;
        height: 40px;
        border: unset;
        border-radius: 5px;
        outline: none;
        background: var(--button3);
        color: var(--colorText1);
    }

    button:hover {
        cursor: pointer;
        background: var(--button1);
        transition: 0.8s;
    }

    .verMas {
        margin-right: 2px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .proximamente {
        margin-top: 30px;
        font-size: 16px;
        position: relative;
        text-align: right;
        color: var(--colorText3);
    }

    @media screen and (min-device-width:780px){
        .item {
            width: 355px;
        }
    }

    @media screen and (min-device-width:1200px){
        .item {
            width: 344px;
            height: 320px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .imagen {
            width: 344px;
            height: 320px;
        }

        .bgcursos {
            width: 344px;
            height: 320px;
        }     
    }
</style>