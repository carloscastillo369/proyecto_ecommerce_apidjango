<template>
    <div id="header" :class="['header', background]">
        <div class="contain">
            <router-link to="/">
                <img style="height:25px;" src="@/assets/logo.png" alt="">
            </router-link>

            <div
                class="cart" 
                @click="desplagarCarrito"
            >
                <b-icon style="cursor: pointer;" icon="cart3"></b-icon><span>{{carrito.length}}</span>
                <Carrito id="menu-carrito" :clase="carritoDesplegado"/>
            </div>
            
            <div
                class="menu-sm"
                @click="desplegarMenu" 
            >
                <b-icon icon="list"></b-icon>
            </div>
            <div class="menu-md">
                <p
                    class="curso"
                    @click="desplegarCursosmd"
                >
                    CURSOS
                </p>
                <router-link to="/login">
                    <p>INICIAR SESION</p>
                </router-link>
                <router-link to="/register">
                    <p>REGISTRARSE</p>
                </router-link>
            </div>
        </div>
        <div :class="['contain-collapse', menuDesplegado]">
            <div class="cursos">
                <p 
                    @click="desplegarCursossm"
                    class="menu-title"
                >
                    CURSOS
                </p>
                <MenuCursos :class="cursoDesplegadosm"/>
            </div>
            
            <router-link to="/login">
                <p class="menu-title">INICIAR SESION</p>
            </router-link>
            <router-link to="/register">
                <p class="menu-title">REGISTRARSE</p>
            </router-link>
        </div>
        <MenuCursos :class="cursoDesplegadomd"/>
    </div>
</template>

<script>
import Carrito  from "@/components/Carrito.vue"
import MenuCursos from "@/components/MenuCursos.vue"
import { mapState } from "vuex"

export default {
    name: 'NavBar',
    components: {
        Carrito,
        MenuCursos
    },
    data() {
        return {
            menuDesplegado: 'desactive',
            carritoDesplegado: 'desactive',
            cursoDesplegadosm: 'desactive',
            cursoDesplegadomd: 'desactive',
            background:'transparente'
        }
    },
    computed: {
        ...mapState(['carrito'])
    },
    methods: {
        desplegarMenu(){
            if(this.menuDesplegado === 'desactive'){
                this.menuDesplegado = 'active'
                this.carritoDesplegado = 'desactive'
                this.background = 'darkblue'
            } else {
                this.menuDesplegado = 'desactive'
                this.cursoDesplegadosm = 'desactive'
                this.background = 'transparente'
            }
        },
        desplagarCarrito(){
            if(this.carritoDesplegado === 'desactive'){
                this.carritoDesplegado = 'active'
                this.menuDesplegado = 'desactive'
                this.cursoDesplegadosm = 'desactive'
                this.cursoDesplegadomd = 'desactive'
            } else {
                this.carritoDesplegado = 'desactive'
            }
        },
        desplegarCursossm(){
            if(this.cursoDesplegadosm === 'desactive'){
                this.cursoDesplegadosm = 'active'
            } else {
                this.cursoDesplegadosm = 'desactive'
            }
        },

        desplegarCursosmd(){
            if(this.cursoDesplegadomd === 'desactive'){
                this.cursoDesplegadomd = 'active'
                this.carritoDesplegado = 'desactive'
            } else {
                this.cursoDesplegadomd = 'desactive'
            }
        },

        scroll() {
            if (window.scrollY > 80) {
                this.background = 'darkblue'
            } else {
                this.background = 'transparente'
            }
        }
    },
    mounted(){
        window.addEventListener("scroll", this.scroll);
    }
}
</script>

<style scoped>
    .header {
        width: 100vw;
        min-height: 60px;
        position: fixed;
        z-index: 100;
        background-color: transparent;
    }

    .contain {
        width: 100%;
        height: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2.5%;
    }

    .cart {
        font-size: 25px; 
        padding-bottom: 5px; 
        position: relative;
        padding-left: 30%;
        display: flex;
        justify-content: flex-end;
        color: var(--colorText1);
    }

    span {
      position: absolute;
      text-align: center;
      top: -2px;
      right: -8px;
      border-radius: 100%;
      color: var(--colorText1);
      background: var(--button2);
      box-sizing: border-box;
      padding: 2px;
      width: 20px;
      height: 20px;
      font-size: 11px;
      font-weight: bold;
      cursor: pointer;
    }

    .menu-sm {
        width: 30px;
        color: var(--colorText1); 
        font-size: 30px;
        display: flex;
        justify-content: flex-end;
        margin-right: 9px;
    }

    .menu-md {
        display: none;
    }

    .contain-collapse {
        color: var(--colorText1);
        padding: 0 10px 2.5%;
        background: var(--bgfooter);
    }

    .menu-title {
        font-size: 12px;
        font-weight: bold;
    }

    .desactive {
        display: none;
    }

    .active {
        display: block;
    }

    .transparente {
        background: transparent;
    }

    .darkblue {
        background: var(--bgfooter);
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        text-decoration: none;
        color: var(--colorText3);
    }

    @media screen and (min-device-width:780px){
        .header {
            height: 80px;
        }

        .contain {
            padding: 0 7%;
            height: 80px;
        }

        .menu-sm {
            display: none;
        }

        .menu-md {
            display: flex;
            justify-content: space-around;
            color: var(--colorText1);
        }
        
        .menu-md p {
            width: fit-content;
            margin-left: 10px;
            margin-bottom: 0;
        }

        .cart {
            padding-left: 25%;
        }

        .curso:hover {
            cursor: pointer;
            color: var(--colorText3);
        }
    }
    
    @media screen and (min-device-width:950px){
        .contain {
            padding-left: 50px;
            padding-right: 50px;
        }

        .cart {
            padding-left: 38%;
        }

        .menu-md {
            width: 400px;
            margin-left: 15px;
        }
    }

    @media screen and (min-device-width:1200px){
        .cart:hover #menu-carrito {
            display: block;
        }

        .cart {
            padding-left: 46%;
        }
    }

    @media screen and (min-device-width:1366px){
        .contain {
            width: 1366px;
            padding-left: 86px;
            padding-right: 86px;
        }
    }
</style>