<template>
    <div class="miscompras">
        <div class="bgdarkblue"></div>
        <div class="contain">
            <div class="title">
                <router-link to="/">
                    <!--imagen flecha-->
                </router-link> 
                <h2>CARRITO DE COMPRAS</h2> 
            </div>

            <div class="carrito">
                <div 
                    v-for="curso in carrito" :key="curso.id"
                    class="item"
                >
                    <div class="imagen-item">
                        <img :src="curso.portada" alt="">
                    </div>
                    <div class="contain-item">
                        <div class="contain-up">
                            <h3>{{curso.nombre_programa}}</h3>
                        </div>
                        <div class="contain-down">
                            <b-button variant="danger" class="eliminar">Eliminar</b-button>
                            <h4>S/. {{curso.precio}}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <CardCupon/>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import ItemCompra from "@/components/ItemCompra.vue"
import CardCupon from "@/components/CardCupon.vue"
import { mapState } from "vuex"

export default {
    name: 'MisCompras',
    components: {
        Header,
        ItemCompra,
        CardCupon
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
        padding: 10px 15px;
    }

    .title {
        padding-bottom: 20px;
        display: flex;
    }

    h2 {
        font-size: 16px;
    }

    .carrito {
        width: 330px;
        margin: 0 auto;
    }
    
    .item {
        margin-bottom: 10px;
        display: flex;
    }

    .imagen-item {
        width: 46%;
    }

    img {
        width: 133px;
        height: 100px;
        border-radius: 5px;
    }

    .contain-item {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    h3 {
        font-size: 14px;
    }

    .contain-down {
        display: flex;
        justify-content: space-between;
        padding-right:20px;
    }

    .btn {
        width: 60px;
        height: 20px;
        font-size: 10px;
        padding: 0;
    }

    h4 {
        font-size: 18px;
    }

    a {
        text-decoration: none;
        color: var(--colorText5);
        margin-right: 10px;
    }
</style>