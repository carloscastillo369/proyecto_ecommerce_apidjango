<template>
    <div class="contain">
        <div class="image">
             <img src="@/assets/Chinita.png" alt="">
        </div>

        <h3>Sé parte de la comunidad</h3>
        
        <p>Programas semi-presenciales para el desarrollo de 
        habilidades de programación a lo largo 
        de todo el Stack tecnológico.</p>          
        <p> Al finalizar sabrás cómo crear una página web y 
        desarrollar la lógica detrás del 
        funcionamiento de una aplicación, así como formar 
        parte de una gran comunidad de 
        desarrolladores.</p>
    </div>
</template>

<script>
export default {
    name: 'Comunidad'
}
</script>

<style scoped>
    .contain {
        width: 100%;
        margin: 0 auto; 
        padding-bottom: 40px;
        background: var(--bgcomunidad);
        position: relative;
        color: var(--colorText1); 
    }

    h3 {
        font-size: 16px; 
        font-weight: bold;
        padding-left: 2.5%;
        padding-top: 250px;
        margin-bottom: 33px;
    }

    p {
        font-size: 14px;
        padding-left: 2.5%;
        padding-right: 3%;
        margin-bottom: 22px;
        text-align: justify;
    }

    .image {
        width: 100%;
        position: absolute;
        top: -110px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-device-width:780px){
        .contain {
            width: 100%;
            height: 282px;
            margin-bottom: 0;
        }

        h3 {
            font-size: 20px; 
            padding-left: 242px;
            padding-top: 60px;
            margin-bottom: 20px;
        }

        p {
            font-size: 14px;
            padding-left: 242px;
            padding-right: 86px;
            margin-bottom: 20px;
        }

        img {
            position: absolute;
            top: 25px;
            left: -120px;
            z-index: 10;
            height: 450px;
        }
    }
</style>