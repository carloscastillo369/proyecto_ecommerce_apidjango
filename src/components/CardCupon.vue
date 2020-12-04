<template>
    <div class="card-cupon">
        <div class="datos-curso">
            <h2>Subtotal</h2>
            <h2>S/ 1000</h2>
        </div>
        <div class="input-cupon">
            <input type="text" placeholder="Agregar un código de descuento">
        </div>
        <button>Continuar</button>
    </div>
</template>

<script>
export default {
    name: 'CardCupon'
}
</script>

<style scoped>
    .card-cupon {
        width: 330px;
        height: 283px;
        padding: 20px;
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
    }

    input::placeholder {
        font-size: 12px;
        padding-left: 20px;
    }

    button {
        display: block;
        height: 50px;
        border: unset;
        border-radius: 10px;
        background: var(--button1);
        color: var(--colorText1);
    }
</style>