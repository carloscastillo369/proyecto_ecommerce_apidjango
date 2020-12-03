<template>
    <div class="footer">
        <div class="contain">
            <img src="@/assets/footer.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer {
        width: 100vw;
        height: 100px;
        background: var(--bgfooter);
    }

    .contain {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    @media screen and (min-device-width:780px){
        .contain {
            padding-left: 6%;
        }
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            margin: 0 auto;
            padding-left: 86px;
        }
    }
</style>