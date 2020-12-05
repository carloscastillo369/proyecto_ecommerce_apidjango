<template>
    <div id="formulario" :class="['formulario', widthHome, widthCurso]">
        <div class="contain">
            <img src="@/assets/mobile-form.png" alt="">
            <h3>Postula y obtén un 10% de descuento en el programa</h3>
            <form @submit.prevent="formPostulante">
                <b-form-input 
                    id="input-1"
                    v-model="nombre_postulante"
                    type="text" 
                    placeholder="NOMBRE"
                    required

                >
                </b-form-input>

                <b-form-input 
                    id="input-2"
                    v-model="celular"
                    type="number" 
                    placeholder="TELEFONO / CELULAR"
                    required
                >
                </b-form-input>

                <b-form-input 
                    id="input-3"
                    v-model="correo"
                    type="email" 
                    placeholder="CORREO ELECTRÓNICO"
                    required
                >
                </b-form-input>

                <b-form-select
                    id="input-4"
                    v-model="programa"
                    :options="programas"
                    required
                >
                </b-form-select>

                <div class="input-checkbox">
                    <input class="checkbox" type="checkbox" :checked="checked">
                    <p> Acepto las <a href="">Políticas de privacidad</a></p> 
                </div>

                <b-button type="submit">Quiero Postular</b-button>
            </form>
            <BotonWhatsApp/>
        </div>
    </div>
</template>

<script>
import BotonWhatsApp from "@/components/BotonWhatsApp.vue"
import auth from "@/logic/auth";
import Swal from 'sweetalert2'
import { mapActions } from "vuex"

export default {
    name: 'FormPostula',
    props: {
        widthHome: '',
        widthCurso: ''
    },
    components: {
        BotonWhatsApp
    },
    data() {
        return {
            nombre_postulante:'',
            celular:'',
            correo:'',
            programa: null,
            programas: [
                { text: 'PROGRAMA', value: null }, 
                'Front-End', 
                'Back-end', 
                'Desarrollo de Aplicativos Móviles', 
                'Diseño de Experiencia de Usuario',
                'Desarrollo de Videojuegos'
            ],
            numero: 0,
            error: false,
            checked: false
        }
    },

    methods: {
        ...mapActions(['formPostulaAction']),
        async formPostulante() {
            try {
                await auth.formPostulante(this.nombre_postulante, this.celular, this.correo, this.numeroPrograma);
                Swal.fire({
                  icon: 'success',
                  title: 'Postulación exitosa',
                  showConfirmButton: false,
                  timer: 3000
                })
                this.nombre_postulante = ''
                this.celular = '',
                this.correo = '',
                this.programa = null
                this.checked = null
                
            } catch (error) {
                console.log(error);
            }
        }, 
    },

    computed: {
        numeroPrograma(){
            if(this.programa === 'Front-End'){
                this.numero = 1
            }; 
            if(this.programa === 'Back-end'){
                this.numero = 2
            }; 
            if(this.programa === 'Desarrollo de Aplicativos Móviles'){
                this.numero = 3
            }; 
            if(this.programa === 'Diseño de Experiencia de Usuario'){
                this.numero = 4
            }; 
            if(this.programa === 'Desarrollo de Videojuegos'){
                this.numero = 5
            }; 

            return this.numero
        }
    }
}
</script>

<style scoped>
    .formulario {
        width: 100%;
        padding: 30px 0;
        position: relative;
        z-index: 50;
        background: var(--bgbody);
    }

    .contain {
        width: 360px;
        background: var(--bgbeneficio);
        margin: 0 auto;
        padding: 30px 2.5%;
    }

    img {
        display: none;
    }

    h3 {
        color: var(--colorText4);
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    input, select {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        margin-bottom: 15px;
        padding-left: 10px;
        border: unset;
        border: 1px solid var(--colorText3);
    }

    input::placeholder, .custom-select {
        font-size: 12px;
        color: var(--colorText3);
    }

    button {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        background: var(--button1);
        font-size: 14px;
        font-weight: bold;
        color: var(--colorText1);
    }

    .input-checkbox {
        display: flex;
        align-items: center;
        height: 40px;
    }

    .checkbox {
        width: 14px;
        margin-right: 8px;
    }

    p {
        font-size: 12px;
    }

    a {
        text-decoration: underline;
    }

    @media screen and (min-device-width:1200px){
        .width-80 {
            width: 80%;
        }

        .width-60 {
            width: 60%;
        }

        .contain {
            width: 300px;
            position: sticky;
            top: 60px;
            padding: 95px 75px;
            padding-left: 0;
            padding-right: 75px;
            background: var(--bgbody);
        }

        img {
            display: initial;
            position: absolute;
            z-index: -1;
            top: 0;
            left: -72px;
        }
    }
</style>