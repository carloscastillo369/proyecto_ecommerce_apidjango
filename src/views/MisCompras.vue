<template>
<<<<<<< HEAD
    <div :class="[ carrito.length === 0 ? 'heightVW' : 'miscompras' ]">
        <Header/>
        <div class="bgdarkblue"></div>
        <div class="contain">
            <div class="title">
                <h2 class="title-text"> 
                    <router-link to="/">
                        <b-icon icon="arrow-left"></b-icon> 
                    </router-link>
                    CARRITO DE COMPRAS
                </h2> 
            </div>

            <div class="compras">
                <div v-if="carrito.length === 0" class="mensaje">
                    <h5>Carrito vacío, vuelve al <a style="display:inline" href="/">Inicio</a>para agregar tus cursos!</h5>
                    <b-icon class="icono-vacio" icon="cart-x"></b-icon>
                </div>
                <div v-else class="carrito">
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
                                <b-button 
                                    @click="deleteCursoCarritoAction(curso)"
                                    variant="danger" 
                                    class="eliminar"
                                >
                                    Eliminar
                                </b-button>
                                <h4>S/. {{curso.precio}}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <CardCupon/>
            </div>
        </div>
=======
    <div>
        <Header bgblue="bgblue"/>
        <p style="padding-top:200px;"></p>

        
 
>>>>>>> 988fff368c1cd09297d6834740844a9b8ec9fbdd
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import ItemCompra from "@/components/ItemCompra.vue"
import CardCupon from "@/components/CardCupon.vue"
import { mapActions, mapState } from "vuex"


export default {
    name: 'MisCompras',
    components: {
        Header,
        ItemCompra,
        CardCupon
    },
    methods: {
        ...mapActions(['deleteCursoCarritoAction'])
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

    .heightVW {
        height: calc(100vh - 100px);
        background: var(--bgbody);
    }

    .bgdarkblue {
        width: 100vw;
        height: 60px;
        background: var(--bgfooter);
    }
    
    .contain {
        width: 100%;
        padding: 10px 15px;
        background: var(--bgbody);
    }

    .title {
        padding-bottom: 20px;
        display: flex;
    }

    .title-text {
        color: var(--colorText5);
    }

    h2 {
        font-size: 16px;
        color: var(--colorText2);
    }

    .mensaje {
        font-size: 30px;
        padding-bottom: 40px;
        text-align: center;
        color: var(--colorText3);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 270px;
        margin-top: 50px;
    }

    .icono-vacio {
        display: block;
        font-size: 100px;
    }

    .carrito {
        width: 330px;
        margin: 0 auto;
        margin-bottom: 30px;
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
        width: 54%;
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
        outline: unset;
    }

    h4 {
        font-size: 18px;
    }

    a {
        text-decoration: none;
        color: var(--colorText5);
        margin-right: 10px;
    }

     @media screen and (min-device-width:780px){
        .bgdarkblue {
            height: 80px;
        }

        .contain {
            padding: 10px 35px;
        }

        h2 {
            font-size: 26px;
        }

        .compras {
            display: flex;
            justify-content: space-around;
        }

        .carrito {
            width: 350px;
            margin: 0;
            padding-bottom: 30px;
        }
     }

     @media screen and (min-device-width:950px){
         .carrito {
             width: 400px;
         }

        .imagen-item {
            width: 40%;
        }

        .contain-item {
            width: 60%;
        }
     }

     @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            margin: 0 auto;
            min-height: calc(100vh - 80px)
        }
     }
</style>