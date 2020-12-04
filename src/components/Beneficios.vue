<template>
    <div class="contain">
        <h3>Beneficios</h3>

        <div class="card">
            <img src="@/assets/bene1.png" alt="">
            <div>
                <h4>Aprende de Expertos</h4>
                <p>Aprende directamente de expertos del mercado a través del análisis y solución de 
                problemas de programación. Utilizando los frameworks y herramientas de mayor 
                relevancia dentro del mundo del coding.</p>
            </div>
        </div>
        
        <div class="card">
            <img src="@/assets/bene2.png" alt="">
            <div>
                <h4>Clases Virtuales</h4>
                <p>Aprovecha tu tiempo al máximo en nuestras clases virtuales y participa 
                presencialmente de nuestras hackathones semanales para conocer y participar de la 
                comunidad profesional que liderará la transformación tecnológica del Perú.</p>   
            </div>

        </div>
                
        <div  class="card">
            <img src="@/assets/bene3.png" alt="">
            <div>
                <h4>Empleabilidad</h4>
                <p>Al finalizar el programa y certificarte a nombre de IDAT, podrás acceder a ofertas 
                laborales especialmente identificadas para la comunidad PachaQTec, a través de 
                nuestra plataforma de empleabilidad IDAT JOB.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Beneficios'
}
</script>

<style scoped>
    .contain {
        width: 100%;
        height: 470px;
        background: var(--bgbody);
        margin: 0 auto;
        padding: 0 2.5%;
    }

    .card {
        width: 100%;
        height: 108px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background: var(--bgbeneficio);
        border: unset;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 29px 45px;
    }

    h3 {
        color: var(--colorText4);
        font-size: 16px;
        font-weight: bold;
        padding-top: 40px;
        margin-bottom: 26px;
    }

    h4 {
        color: var(--colorText4);
        font-size: 16px;
    }

    img {
        margin-right: 50px;
    }

    p {
        display: none;
    }

    @media screen and (min-device-width:780px){
        .contain {
            height: 730px;
            padding: 0 7%;
            padding-top: 30px;
        }

        .card {
            height: 180px;
        }

        p {
            display: initial;
        }
    }

    @media screen and (min-device-width:950px){
        .contain {
            height: 660px;
        }

        .card {
            height: 160px;
        }
    }

    @media screen and (min-device-width:1200px){
        .contain {
            height: 690px;
            padding: 0;
            padding-left: 10%;
            padding-top: 30px;
        }
    }
</style>