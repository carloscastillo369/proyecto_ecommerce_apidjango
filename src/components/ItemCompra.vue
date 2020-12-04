<template>
        <tr id="listadecompras" class="fila">
            <td><img :src="curso.portada" alt=""></td>
            <td>{{curso.nombre_programa}}</td>
            <td>S/. {{curso.precio}}</td>
            <td>
                <button
                    class="borrar-curso" 
                    @click="deleteCursoCarritoAction(curso)"
                >
                    X
                </button>
            </td>
        </tr>
</template>

<script>
import { mapActions } from "vuex"

export default {
    name: 'ItemCompra',
    props: {
        curso: {}
    },
    methods: {
        ...mapActions(['deleteCursoCarritoAction'])
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

    .borrar-curso {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: unset;
        background: var(--button3);
        color: var(--colorText1);
        outline: none;;
    }

</style>