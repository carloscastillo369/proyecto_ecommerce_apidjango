<template>
    <div :class="[ carrito.length === 0 ? 'd-none' : 'card-cupon']">
        <div class="datos-curso">
            <h2>Subtotal</h2>
            <h2>S/ {{sumaTotal}}</h2>
        </div>
        <div class="input-cupon">
            <input type="text" placeholder="Agregar un código de descuento">
        </div>
        <router-link class="button" to="/pasareladepagos">
            Continuar
        </router-link>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: 'CardCupon',
    computed: {
        ...mapState(['carrito','sumaTotal'])
    },
}
</script>

<style scoped>
    .card-cupon {
        width: 330px;
        height: 283px;
        padding: 20px;
        margin: 0 auto;
        background: var(--bgbeneficio);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }

    .datos-curso {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        font-size: 22px;
        font-weight: bold;
        color: var(--colorText5);
    }

    input {
        width: 100%;
        height: 50px;
        border: unset;
        border: 1px solid var(--colorText3);
        border-radius: 5px;
        outline: unset;
        padding-left: 10px;
    }

    input::placeholder {
        font-size: 12px;
    }

    .button {
        width: 100%;
        display: block;
        height: 50px;
        border: unset;
        border-radius: 10px;
        background: var(--button1);
        color: var(--colorText1);
        outline: unset;
        text-align: center;
        padding-top: 14px;
    }

    a {
        text-decoration: none;
    }

    @media screen and (min-device-width:780px){
        .card-cupon {
            margin: 0;
        }
    }
</style>