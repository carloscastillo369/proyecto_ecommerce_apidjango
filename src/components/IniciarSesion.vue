<template>
    <!--CAMBIO DE EMAIL POR USERNAME EN V-MODEL Y PREVENT LOGIN-->
    <div>
        <div class="col-sm-4-body">
           
            <p class="text">Si aún no tienes cuenta, ve a la pestaña <router-link class="link" to="/register"><span>Registrarse.</span></router-link></p>
            <form @submit.prevent="login">
                <div>
                <input 
                        class="col-sm-4-body-input-1" 
                        type="email" 
                        placeholder="Correo electrónico" 
                        v-model="username"
                        required
                    >
                </div>
                
                <div class="input-constraseña">
                    <img @click="mostrarPassword" class="img-eye" :src="`/img/${eye}.png`" alt="">
                    <input 
                        class="col-sm-4-body-input-2" 
                        :type="tipoInput" 
                        placeholder="Contraseña"
                        v-model="password"
                        required
                    >
                </div>
                
                <div>
                    <button 
                        class="btn-login" 
                        value="Login"
                        type="submit">Ingresar
                    </button>
                </div>
             </form> 
                <div class="col-sm-4-body-secondtext">
                    <a>¿Olvidaste tu contraseña?</a>
                </div>
           
            <a href="/" class="salir">Salir del registro</a>

            

        </div>
    </div>        
</template>

<script>
//import firebase from 'firebase/app'
import { mapActions, mapState } from "vuex"


/***** CÓDIGO CON AXIOS *****/

import auth from "@/logic/auth";
import Swal from 'sweetalert2'

export default {
    name: 'IniciarSesion',
    data: () => ({
                username: "",
                password: "",
                error: false,
                eye: 'eye-close.3254d7e6',
  }),

    methods: {
        async login() {
          try {
            await auth.login(this.username, this.password);
            Swal.fire('Bienvenido ahora puedes realizar tus compras')
            this.$router.push("/miscompras");
          } catch (error) {
            this.error = true;
            Swal.fire('Usurio y/o contraseña incorrectos')

          }
        },

        mostrarPassword(){
            if(this.eye == 'eye-close.3254d7e6'){
                this.eye = 'eye-open.362298e0'
                this.tipoInput = 'text'
            } else {
                this.eye = 'eye-close.3254d7e6'
                this.tipoInput = 'password'
            }
        },
  },

  
}


</script>

<style scoped>
/*Versión celular*/
    .text {
        font-size: 14px;
        margin-bottom: 60px;
        color: #8B9099;
        text-decoration: none;
        
    }

    .error {
        color: red;
        font-size: 12px;
    }

    span {
        color: #5640FF;
        font-weight: bold;
    }

    .col-sm-4-body {
        width: 100%;
        height: 100%;
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #F8F8FA;
    }

    .col-sm-4-body-input-1,.col-sm-4-body-input-2 {
        width: 335px;
        height: 50px;
        border: 1px solid #8B9099;
        border-radius: 5px;
        margin-bottom: 20px;
        padding-left: 15px;
    }

    .btn-login {
        width: 335px;
        height: 50px;
        background-color: #5640FF;
        border-radius: 10px;
        border: unset;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        margin: 60px 0px 0px 0px;
        outline: unset;
    }

    .col-sm-4-body-secondtext {
        font-size: 12px;
        padding-top: 20px;
        font-weight: bold;
        color: #2c16d8;
        text-decoration: underline;
        margin: 10px 0px 0px 0px;
        cursor: pointer;
    }

    .salir {
        border: unset;
        border-radius: 5px;
        background: #5640FF;
        padding: 5px 10px;
        margin-top: 80px;
        margin-left: 200px;
        color: #FFFFFF;
        text-decoration: none;
        font-size: 12px;
    }

    .link {
        text-decoration: none;
    }

    .input-constraseña {
        position: relative;
    }

    .img-eye {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 20px;
        top: 12px;
        cursor: pointer;
    }

    @media screen and (min-device-width:1366px){
        .text {
            margin-bottom: 70px;
        }

        .col-sm-4-body {
            margin-top: 50px;
        }

        .col-sm-4-body-input-1,.col-sm-4-body-input-2 {
            width: 350px;
        }

        .btn-login {
            width: 350px;
            margin: 100px 0px 0px 0px;
        }

        .salir {
            margin-left: 210px;
        }
    }
</style>