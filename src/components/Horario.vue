<template>
    <div>
        <div
            v-for="horarios in curso.horarios" :key="horarios.id" 
            class="horario"
        >
            <div class="inicio-clases">
                <h4>Inicio de clases: <br> 7 de diciembre</h4>
            </div>
            <div class="horario-body">
                <div class="horario-col1">
                    <div class="horario-header">
                        <h4>Frecuencia</h4>
                    </div>
                    <div class="dias">
                        <h5>{{horarios.dias}}</h5>
                    </div>
                </div>
                <div class="horario-col2">
                    <div class="horario-header">
                        <h4>Horario</h4>
                    </div>
                    <div>
                        <h5 class="horas">
                            {{horarios.horario}}
                        </h5>    
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapState } from "vuex"
export default {
    name: 'Horario',
    computed: {
        ...mapState(['curso'])
    }
}
</script>

<style scoped>
   .horario {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .inicio-clases {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--bghorario);
        color: var(--colorText1);
        border-radius: 0 50px 0 0;
    }

    .horario-body {
        width: 100%;
        display: flex;
        background: var(--bghorariobody);
        border-radius: 0 0 0 50px;
    }

    .horario-header {
        height: 40px;
        background: var(--bghorarioheader);
        color: var(--colorText1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .horario-col1 {
        width: 100%;
        color: var(--colorText2);
        background: var(--bghorariobody);
        border-radius: 0 0 0 50px;
    }
     
    .horario-col2 {
        width: 70%;
        color: var(--colorText2);
        background: var(--bghorariobody);
        border-left: 1px solid var(--bgbody);
    }

    .dias, .horas {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 10px;
    }

    h4 {
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        text-align: center;
        margin-bottom: 0;
    }

    h5 {
        font-size: 14px;
        font-weight: normal;
        margin: 0;
    }


    @media screen and (min-device-width:780px){
        .inicio-clases {
            height: 80px;
        }

        h4 {
            font-size: 18px;
            line-height: 30px;
        }

        h5 {
            font-size: 18px;
        }
    }

    @media screen and (min-device-width:780px){
        .horario {
            padding-bottom: 40px;
        }
    }
</style>