<template>
    <div class="curso">
        <Banner :bgcurso="curso"/>
        <div class="section">
            <div class="contain"> 
                <div class="navegador">
                    <router-link to="/">Pachaqtec</router-link> <b-icon icon="chevron-right"></b-icon> <span>{{curso.nombre_programa}}</span>
                </div>

                <div class="contain-desktop">
                    <h2>¿En qué consiste el programa de {{curso.nombre_programa}}?</h2>
                    <p>"Un desarrollador front end tiene que dominar HTML, CSS y JavaScript para darle vida a los diseños. Es responsable del desarrollo front-end de la interfaz gráfica de la aplicación web. El dinamismo de la tecnología front - end se encuentra principalmente en los frameworks, que son bibliotecas optimizadas para el desarrollo web"</p>

                    <h2>Beneficios</h2>

                    <div class="beneficios">
                        <div class="bene">
                            <img class="bene-img" src="@/assets/bene1.png" alt=""> 
                            <p>Aprende de Expertos</p>  
                        </div>

                        <div class="bene">
                            <img class="bene-img" src="@/assets/bene2.png" alt="">
                            <p>Clases Virtuales</p>
                        </div>

                        <div class="bene">
                            <img class="bene-img" src="@/assets/bene3.png" alt="">
                            <p>Empleabilidad</p>
                        </div>
                    </div>

                    <h3>Idat otorga:</h3>
                    <p>Tu certificado indicará que has cursado el programa de especialización en {{curso.nombre_programa}} y estará a nombre de Idat.</p>

                    <h2>Horarios</h2>
                    <Horario/>
                </div>

                <div class="contain-mobile">
                    <div class="accordion" role="tablist">
                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-1 variant="info">¿En qué consiste el programa de {{curso.nombre_programa}}?</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                  <b-card-text>"Un desarrollador front end tiene que dominar HTML, CSS y JavaScript para darle vida a los diseños. Es responsable del desarrollo front-end de la interfaz gráfica de la aplicación web. El dinamismo de la tecnología front - end se encuentra principalmente en los frameworks, que son bibliotecas optimizadas para el desarrollo web"</b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-2 variant="info">Beneficios</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>
                                        <div class="beneficios">
                                            <div class="bene">
                                                <img class="bene-img" src="@/assets/bene1.png" alt=""> 
                                                <p>Aprende de Expertos</p>  
                                            </div>

                                            <div class="bene">
                                                <img class="bene-img" src="@/assets/bene2.png" alt="">
                                                <p>Clases Virtuales</p>
                                            </div>

                                            <div class="bene">
                                                <img class="bene-img" src="@/assets/bene3.png" alt="">
                                                <p>Empleabilidad</p>
                                            </div>
                                        </div>

                                        <h3>Idat otorga:</h3>
                                        <p>Tu certificado indicará que has cursado el programa de especialización en {{curso.nombre_programa}} y estará a nombre de Idat.</p>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>

                        <b-card id="formulario" no-body class="mb-1">
                            <b-card-header header-tag="header" class="p-1" role="tab">
                                <b-button block v-b-toggle.accordion-3 variant="info">Horarios</b-button>
                            </b-card-header>
                            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <b-card-text>
                                        <Horario/>
                                    </b-card-text>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </div>

                <MallaCurricular/>
            </div>
            <FormPostula widthCurso="width-60"/>            
        </div>
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue"
import FormPostula from "@/components/FormPostula.vue"
import Horario from "@/components/Horario.vue"
import MallaCurricular from "@/components/MallaCurricular.vue"
import { mapActions, mapState } from "vuex";

export default {
    name:'Curso',
    components: {
        Banner,
        FormPostula,
        Horario,
        MallaCurricular
    },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getCursoAction'])
    },
    computed: {
        ...mapState(['curso'])
    },
    mounted(){
        this.getCursoAction(this.id);
    }
}
</script>

<style scoped>
    .curso {
        width: 100%;
    }

    .contain {
        width: 100%;
        background: var(--bgbody);
    }

    .navegador {
        height: 60px;
        padding-left: 2.5%;
        display: flex;
        align-items: center;
    }

    .contain-desktop {
        display: none;
    }

    .contain-mobile {
        width: 100%;
        height: 190px;
        margin: 0 auto;
        padding: 0 10px;
        text-align: justify;
    }

    .beneficios {
        display: flex;
        justify-content: space-around;
    }

    .bene {
        width: 90px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        font-size: 14px;
    }

    .bene-img {
        width: 40px;
        height: 40px;
    }

    h3 {
        margin-top: 15px;
        font-size: 16px;
        font-weight: bold;
    }

    h3 + p {
        font-size: 14px;
        margin-bottom: 0;
    }

    @media screen and (min-device-width:780px){
        .contain-mobile {
            display: none;
        }   

        .contain-desktop {
            display: block;
            width: 100%;
            padding: 0 7%;
            text-align: justify;
        }

        .navegador {
            padding-left: 7%;
        }

        h2 {
            margin-top: 40px;
            margin-bottom: 10px;
        }

        h2 + p {
            text-align: justify;
            font-size: 16px;
            margin-bottom: 30px;
        }

        h3 {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
        }

        h3 + p {
            font-size: 16px;
            margin-bottom: 0;
        }
    }

    @media screen and (min-device-width:950px){
        .contain-desktop {
            width: 85%;
        }
    }

    @media screen and (min-device-width:1200px){
        .section {
            width: 100%;
            display: flex;
            margin: 0 auto;
        }

        .contain {
            width: 100%;
        }

        .navegador {
            padding-left: 12%;
        }

        .contain-desktop {
            width: 100%;
            padding: 0;
            padding-left: 12%;
        }

        .bene-img {
            width: 60px;
            height: 60px;
        }
    }

    @media screen and (min-device-width:1366px){
        .section {
            width: 1366px;
        }
    }
</style>