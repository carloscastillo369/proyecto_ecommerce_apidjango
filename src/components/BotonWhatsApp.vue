<template>
    <a href="https://wa.link/0mqo75" target="blank" class="whatsapp">
        <img src="@/assets/whatsapp.png" alt="">
    </a>
</template>

<script>
export default {
    name: 'BotonWhatsApp'
}
</script>

<style scoped>
    .whatsapp {
        position: fixed;
        top: 300px;
        right: 2.5%;
    }
        
    img {
        width: 60px;
        height: 60px;
    }

     @media screen and (min-device-width:950px){
         .whatsapp {
             right: 6%;
         }
     }

    @media screen and (min-device-width:1200px){
        .whatsapp {
            position: relative;
            top: -480px;
            right: -270px;
        }

        img {
            width: 80px;
            height: 80px;
        }
    }

</style>