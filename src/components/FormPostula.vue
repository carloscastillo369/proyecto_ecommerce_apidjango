<template>
    <div :class="['formulario', widthHome, widthCurso]">
        <div class="contain">
            <img src="@/assets/mobile-form.png" alt="">
            <h3>Postula y obtén un 10% de descuento en el programa</h3>
            <form>
                <b-form-input 
                    id="input-1"
                    v-model="form.nombre"
                    type="text" 
                    placeholder="NOMBRE"

                >
                </b-form-input>

                <b-form-input 
                    id="input-2"
                    v-model="form.telefono"
                    type="number" 
                    placeholder="TELEFONO / CELULAR"
                >
                </b-form-input>

                <b-form-input 
                    id="input-3"
                    v-model="form.email"
                    type="email" 
                    placeholder="CORREO ELECTRÓNICO"
                >
                </b-form-input>

                <b-form-select
                    id="input-4"
                    v-model="form.programa"
                    :options="programas"
                >
                </b-form-select>

                <b-form-checkbox
                    id="checkbox-1"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                >
                <p>Acepto las <a href="">Políticas de privacidad</a> </p> 
                <p>{{form.nombre}} {{form.telefono}} {{form.email}} {{form.programa}}</p>
                </b-form-checkbox>

                <b-button type="submit">Quiero Postular</b-button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormPostula',
    props: {
        widthHome: '',
        widthCurso: ''
    },
    data() {
        return {
            form: {
                nombre:'',
                telefono:'',
                email:'',
                programa: null
            },
            programas: [
                { text: 'PROGRAMA', value: null }, 
                'Front-End', 
                'Back-end', 
                'Desarrollo de Aplicativos Móviles', 
                'Diseño de Experiencia de Usuario',
                'Desarrollo de Videojuegos'
            ]
        }
    },
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
            width: 370px;
            position: sticky;
            top: 60px;
            padding: 95px 75px;
            background: var(--bgbody);
        }

        img {
            display: initial;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
        }
    }
</style>