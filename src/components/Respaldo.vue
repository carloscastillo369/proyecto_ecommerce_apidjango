<template>
    <div class="contain">
        <img src="@/assets/respaldo-dark.png" alt="">
    </div>
</template>

<script>
export default {
    name: 'Respaldo'
}
</script>

<style scoped>
    .contain {
        width: 100%;
        height: 150px;
        margin: 0 auto; 
        padding-top: 40px;
        padding-left: 1.4%;
        background: var(--bgbody);
    }

    @media screen and (min-device-width:760px){
        .contain {
            padding-left: 3%;
        }
    }

    @media screen and (min-device-width:950px){
        .contain {
            padding-left: 40px;
        }
    }

    @media screen and (min-device-width:1200px){
        .contain {
           padding-left: 9%;
        }
    }
</style>