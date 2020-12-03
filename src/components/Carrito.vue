<template>
    <div :class="['carrito', clase]">
        <table id="lista-carrito" class="table">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="body">
                <ItemCompra/>
            </tbody>
            <tfoot>
                
                <th class="text-cartvacio" scope="row" colspan="5">Carrito vacío - Empieze a comprar!</th>
                <!-- 
                <th scope="row" colspan="5"> 
                    <button class="vaciar-carrito">Vaciar Carrito</button> 
                    <router-link to="/miscompras">
                        <button class="comprar-carrito">Ir a pagar</button>
                    </router-link> 
                </th> -->
            </tfoot>
        </table>
    </div>
</template>

<script>
import ItemCompra from "@/components/ItemCompra.vue"
import { mapState } from "vuex"

export default {
    name: 'Carrito',
    props: {
        clase: ''
    },
    components: {
        ItemCompra
    },
    computed: {
        ...mapState(['carrito'])
    },
}
</script>

<style scoped>
    .carrito {
        background: var(--bgbeneficio);
        padding: 0 10px;
        width: 340px;
        margin: 0 auto;
        position: absolute;
        top: 51px;
        right: -52px;
        border: 1px solid var(--colorText3);
        border-radius: 5px;
    }   

    .lista-carrito {
        font-size: 12px;
    }   

    th {
        font-size: 12px;
        padding: 3px 0;
        color: var(--colorText2);
    }   

    tbody {
        color: var(--colorText4);
    }   

    button {
        width: 100%;
        height: 40px;
        margin-top: 10px;
        border: unset;
        border-radius: 5px;
        color: var(--colorText1);
    }   

    .vaciar-carrito {
        background: var(--button2);
    }   

    .comprar-carrito {
        background: var(--button1);
    }   

    .text-cartvacio {
        color: var(--colorText5);
        padding-top: 20px;
    }   

    .desactive {
        display: none;
    }   

    .active {
        display: block;
    }

    @media screen and (min-device-width:780px){
        .carrito {
            top: 55px;
        }
    }
</style>