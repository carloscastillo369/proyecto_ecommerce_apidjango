import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { db, auth } from './../firebase' 

let urlProgramas = 'https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/programas'
let urlPostulantes = 'https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/postulantes'
let urlUsuarios = 'https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/matriculas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    carrito: [],
    curso: {
      nombre:'',
      descripcion:'',
      precio:null,
      imagen:''
    },
    usuario: null,
    error: null,
    loginUser: null,
    loginError: null
  },

  mutations: {
    getCursosMutation(state, payload){
      state.cursos = payload
    },

    getCursoMutation(state, payload){
      state.curso = payload
    },

    addCarritoMutation(state, payload) {
      state.carrito.push(payload)
      console.log(state.carrito)
    },

    nuevoUsuarioMutation(state, payload){
      state.usuario = payload
    },

    nuevoUsuarioMutationError(state, payload){
      state.error = payload
    },

    loginUserMutation(state, payload){
      state.loginUser = payload
    },

    loginUserMutationError(state, payload){
      state.loginError = payload
    }
  },

  actions: {
    /* OBTENER LOS CURSOS DESDE DJANGO REST FRAMEWORK */
    async getCursosAction({commit}) {
      fetch(urlProgramas, {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          commit('getCursosMutation', data);
      })
    },
    
    /* OBTENER UN CURSO DESDE DJANGO REST FRAMEWORK */
    async getCursoAction({commit}, id) {
      fetch(`https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/programas/${id}`, {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          commit('getCursoMutation', data);
      })
    },

    /*AGREGAR CURSOS AL CARRITO */
    addCarritoAction({commit}, curso) {
      commit('addCarritoMutation', curso)
    },

    /*
    CREAR UN NUEVO USUARIO EN FIREBASE
    nuevoUsuarioAction({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          }

          commit('nuevoUsuarioMutation', usuario)
          router.push('/login')
        })
        
        .catch(error => {
          commit('nuevoUsuarioMutationError', error.message)
        })
    },
    */

    /*
    INICIAR SESION CON FIREBASE
    loginUserAction({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
        .then(res => {
          commit('loginUserMutation', {email:res.user.email, uid:res.user.uid})
          router.push('/miscompras')
        })

        .catch(error => {
          commit('loginUserMutationError', error.message)
        })
    },
    */
    
  },

  modules: {
  }
})
