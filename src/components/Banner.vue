<template>
    <div> 
        <div v-if="bgcurso == undefined" class="banner">
            <img class="banner-img" src="@/assets/banner.png" alt="">
            <div class="contain">
                <h1>!Explota todo tu potencial <br> tecnológico!</h1>
                <p>Con nuestro programas de especialización</p>
                <a href="#formulario"><b-icon icon="pencil"></b-icon><span>Inscríbite</span></a>
            </div>
        </div>

        <div v-else class="banner">    
            <img class="banner-img" :src="bgcurso.portada" alt="">
            <div class="bgcursos">
                <div class="texto">
                    <h1 class="nombre-curso">{{bgcurso.nombre_programa}}</h1>
                    <a href="#formulario"><b-icon icon="pencil"></b-icon><span>Inscríbite</span></a>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        bgcurso: {}
    }
}
</script>

<style scoped>
    .banner {
        width: 100vw;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner-img {
        width: 100vw;
        height: 100%;
        position: relative;
    }

    .contain {
        width: 100%;
        margin: 0 auto;
        padding-top: 40px;
        padding-left: 2.5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--colorText1);
        position: absolute;
        z-index: 10;
    }

    .bgcursos {
        width: 100vw;
        height: 300px;
        position: absolute;
        color: var(--colorText1);
        z-index: 10;
        background: var(--bgimgcursos);
        display: flex;
        align-items: flex-end;
        padding-left: 2.5%;
    }

    h1 {
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    p {
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: var(--colorText1);
        width: 130px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:var(--button2);
        position: fixed;
        top: 230px;
        right: 2.5%;
        z-index: 100;
    }

    span {
        margin-left: 10px;
    }

    .nombre-curso {
        margin-bottom: 100px;
    }

    @media screen and (min-device-width:780px){
        .contain, .bgcursos {
            padding-left: 7%;
        }
    }

    @media screen and (min-device-width:950px){
        .contain, .bgcursos {
            padding-left: 50px;
        }

        a {
            right: 3%;
            left: 83%;
        }
    }

    @media screen and (min-device-width:1200px){
        .contain, .bgcursos {
            padding-left: 6%;
        }

        .bgcursos {
            height: 500px;
        }

        .banner {
            height: 500px;
        }

        .banner-img {
            width: 100vw;
            height: 500px;
        }
        .contain {
            padding-top: 204px;
        }

        h1 {
            font-size: 54px;
            margin-bottom: 40px;
        }

        p {
            font-size: 20px;
        }

        a {
            display: none;
        }
    }

     @media screen and (min-device-width:1366px){
        .contain .bgcursos {
            width: 1366px;
            padding-left: 86px;
        }

        .texto {
            width: 1366px;
            margin: 0 auto;
        }
     }
</style>