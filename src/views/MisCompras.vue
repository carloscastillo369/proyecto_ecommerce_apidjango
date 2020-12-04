<template>
    <div class="miscompras">
        <div class="bgdarkblue"></div>
        <div class="contain">
            <h2 class="title">
                <router-link to="/">
                    <b-icon icon="arrow-left"></b-icon> 
                </router-link>  
                CARRITO DE COMPRAS
            </h2>

            <div class="carrito">
                <div 
                    v-for="curso in carrito" :key="curso.id"
                    class="item"
                >
                    <div class="imagen">
                        <img :src="curso.portada" alt="">
                    </div>
                    <div class="texto">
                        <h3>{{curso.nombre_programa}}</h3>
                        <button class="eliminar">Eliminar</button>
                    </div>
                    <div class="precio">
                        <h4>S/. {{curso.precio}}</h4>
                    </div>
                </div>
            </div>
            <div class="monto"></div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import ItemCompra from "@/components/ItemCompra.vue"
import { mapState } from "vuex"

export default {
    name: 'MisCompras',
    components: {
        Header,
        ItemCompra
    },
    computed: {
        ...mapState(['carrito'])
    },

}
</script>

<style scoped>
    .miscompras {
        width: 100vw;
    }

    .bgdarkblue {
        width: 100vw;
        height: 60px;
        background: var(--bgfooter);
    }
    
    .contain {
        width: 100%;
        min-height: 420px;
        padding: 10px 2.5%;
    }

    .title {
        font-size: 16px;
        padding-bottom: 20px;
    }

    .carrito {
        display: flex;
        flex-direction: column;
    }
    
    .item {
        margin-bottom: 20px;
        display: flex;
    }

    .imagen {
        width: 20%;
    }

    img {
        width: 50px;
        height: 50px;
    }

    .texto {
        width: 60%;
    }

    h3 {
        font-size: 12px;
    }

    .eliminar {
        font-size: 10px;
    }

    .precio {
        width: 20%;
        text-align: center;
    }

    h4 {
        font-size: 12px;
    }
</style>