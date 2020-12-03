<template>
        <tr class="fila">
            <td><img src="" alt=""></td>
            <td>Front End</td>
            <td>S/. 600</td>
            <td>
                <button>X</button>
            </td>
        </tr>
</template>

<script>

export default {
    name: 'ItemCompra',
    props: {
        curso: {}
    }
}
</script>

<style scoped>
    img {
        width: 40px; 
        height: 40px;
    }

    td {
        vertical-align: middle;
        font-size: 12px;
        padding: 7px 0;
        border: 0;
    }

    button {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: unset;
        background: var(--button3);
        color: white;
    }

</style>