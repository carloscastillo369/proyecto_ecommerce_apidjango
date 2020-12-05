<template>
    <!--CAMBIO V-MODEL USUARIO POR FIRST_NAME Y PREVENT REGISTER-->
    <div>
        <div class="col-sm-4-body">
           <p class="text">Si ya tienes una cuenta, ve a la pestaña <router-link class="link" to="/login"><span>Iniciar sesión.</span></router-link></p>
            <form @submit.prevent="register">
                <div>
                    <input 
                        class="col-sm-4-body-input-1" 
                        type="text" 
                        placeholder="Nombres y apellidos"
                        v-model="first_name"
                        required
                    >
                </div>

                <div>
                    <input 
                        class="col-sm-4-body-input-2" 
                        type="email" 
                        placeholder="Correo electrónico"
                        v-model="email" 
                        required
                    >
                </div>

                <div>
                    <input 
                        class="col-sm-4-body-input-3 input-password" 
                        type="password" 
                        placeholder="Contraseña"
                        v-model="password" 
                        required
                    >
                </div>

                <div>
                    <input 
                        class="col-sm-4-body-input-4 input-password" 
                        type="password" 
                        placeholder="Repite contraseña"
                        v-model="pass2"
                        required
                    >
                </div>
                           
                <div>
                    <input 
                        class="col-sm-4-body-input-5"
                        required 
                        type="checkbox"> 
                        <span v-b-modal.modal-1 class="spantext"> Aceptar términos y condiciones.</span> 
                        <b-modal id="modal-1" title="Términos y condiciones">
                        <p class="my-4" >Los términos y condiciones de uso describen todos los términos y condiciones de carácter general que resultan aplicables al uso de aquellos contenidos o servicios disponibles bajo el dominio y subdominios de www.idat.edu.pe.
Cuando el usuario accede a esta página web o cuando consulta la información que se encuentra contenida en ella, reconoce no solo que ha leído, sino que también ha entendido y aceptado, los términos y condiciones generales que se desarrollan.
En caso de no aceptarlos, se le solicita que no haga uso, ni acceda, ni manipule la información de los servicios ofrecidos por el sitio web, ya que en condición de usuario estaría haciendo un uso inadecuado de este.</p>
                        </b-modal>

                </div>

                <div> <!--CAMBIO DE TEXTO ERROR-->
                    <p v-if="error" class="error">Las contraseñas no coinciden.</p>
                </div>

                <div>
                    <button 
                        class="btn-login"
                        type="submit">Registrarse
                        
                    </button>
                </div>
            </form>

            <a href="/" class="salir">Salir del registro</a>
        </div>
    </div>  

          
</template>

<script>
import { mapActions, mapState } from "vuex"

/**** CÓDIGO CON AXIOS ****/

import auth from "@/logic/auth";

export default {
    
    name: 'Registro',
    data: () => ({
        first_name: "",
        email: "",
        password: "",
        pass2: "",
        error: false
  }),

    methods: {
    async register() {
      try {
        await auth.register(this.first_name, this.email, this.password);
        this.$router.push("/login")
      } catch (error) {
        console.log(error);
      }
    },

    ...mapActions(['nuevoUsuarioAction']),
        register() {
            if(this.password === this.pass2){
                this.nuevoUsuarioAction({
                    first_name: this.first_name,
                    email: this.email,
                    password: this.pass2,
                })
            } else {
                return alert('Repita la misma contraseña')
            }
        },

    },
    
    

     computed: {
        ...mapState(['error'])
    }
    
};


</script>

<style scoped>
/*Versión celular*/
    .col-sm-4-header {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-around;
    }

    .text {
        font-size: 14px;
        margin-bottom: 60px;
        color: #8B9099;
        text-decoration: none;
    }

    span {
        color: #5640FF;
        font-weight: bold;
    }

    .col-sm-4-header-text-session, .col-sm-4-header-text-register {
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #222222;
        cursor: pointer;
        border: 2px solid gray;
    }

    .col-sm-4-body {
        width: 100%;
        height: 100%;
        margin-top: 25px;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #F8F8FA;
    }

    .col-sm-4-body-input-1,.col-sm-4-body-input-2, .col-sm-4-body-input-3, .col-sm-4-body-input-4 {
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
    }

    .salir {
        border: unset;
        border-radius: 5px;
        background: #5640FF;
        padding: 5px 10px;
        margin-top: 40px;
        margin-left: 200px;
        color: #FFFFFF;
        text-decoration: none;
        font-size: 12px;
        
    }

    .spantext {
        color: #8B9099;
        font-weight: lighter;
        font-size: 12px;
    }
    
    .spantext:hover {
        font-weight: bold;
        cursor: pointer;
        
    }

    .link {
        text-decoration: none;
    }

    @media screen and (min-device-width:1366px){
        .col-sm-4-header {
            border-bottom: 2px solid gray;
        }

        .text {
            margin-bottom: 50px;
        }

        .col-sm-4-header-text-session, .col-sm-4-header-text-register {
            border: none;
        }

        .col-sm-4-body {
            margin-top: 50px;
        }

        .col-sm-4-body-input-1,.col-sm-4-body-input-2, .col-sm-4-body-input-3, .col-sm-4-body-input-4 {
            width: 350px;
        }

        .btn-login {
            width: 350px;
            margin: 50px 0px 0px 0px;
        }

        .salir {
            margin-left: 210px;
        }
    }
</style>