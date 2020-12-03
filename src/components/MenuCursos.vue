<template>
    <div :class="['contenedor', menuCursosm, menuCursomd]">
        <div class="columna">
            <p> <b-icon icon="code-square"></b-icon> Desarrollo Front-End</p>
            <p> <b-icon icon="code-square"></b-icon> Desarrollo Back-End</p>
            <p> <b-icon icon="code-square"></b-icon> Desarrollo de Videojuegos</p>
            <p> <b-icon icon="code-square"></b-icon> Diseño de UI/UX</p>
            <p> <b-icon icon="code-square"></b-icon> Desarrollo de Apps</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuCursos',
    props: {
        menuCursosm: '',
        menuCursomd: ''
    }
}
</script>

<style scoped>
    .contenedor {
        color: var(--colorText3);
        background: var(--bgbeneficio);
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 5px;
    }

    .columna {
        font-size: 12px;
        display: flex;
        flex-wrap: wrap;
    }

    p {
        margin-bottom: 5px;
        padding-right: 4px;
        width: 50%;
    }

    @media screen and (min-device-width:520px){
        p {
            width: 33%;
        }
    }

    @media screen and (min-device-width:780px){
        .contenedor {
            position: absolute;
            width: 80%;
            left: 10%;
            right: 10%;
            padding: 20px;
        }

        p {
            width: 50%;
            font-size: 18px;
        }
    }

    @media screen and (min-device-width:950px){
        .contenedor {
            width: 700px;
            left: 20%;
            right: 50%;
        }

    }

     @media screen and (min-device-width:1200px){
        .contenedor {
            left: 22%;
        }
     }
</style>