import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { db, auth } from './../firebase' 
import Swal from 'sweetalert2'
import createPersistedState from "vuex-persistedstate";

let urlProgramas = 'https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/programas'
let urlPostulantes = 'https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/postulantes'
let urlUsuarios = 'https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/matriculas'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    carrito: [],
    curso: {},
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
      const filtrar = state.carrito.filter(curso => curso.id === payload.id)
      if(filtrar.length === 0) {
        state.carrito.push(payload);
      }
    },

    deleteCursoCarritoMutation(state, payload){
      state.carrito = state.carrito.filter(item => item.id !== payload.id)
    },

    vaciarCarritoMutation(state){
      state.carrito = []
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

    /*BORRAR UN CURSO DEL CARRITO */
    deleteCursoCarritoAction({commit}, curso) {
      Swal.fire({
        title: '¿Estas seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          commit('deleteCursoCarritoMutation', curso)
          Swal.fire(
            'Eliminado!',
            'El curso ha sido eliminado del carrito.',
            'success'
          )
        }
      })

    },

    /*VACIAR EL CARRITO */
    vaciarCarritoAction({commit}){
      Swal.fire({
        title: '¿Estas seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, vaciar el carrito!',
        cancelButtonText: 'No, cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {
          commit('vaciarCarritoMutation')
          Swal.fire(
            'Carrito vacío!',
            '',
            'success'
          )
        }
      })
    },

    /*CREAR UN NUEVO USUARIO EN FIREBASE
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
  },

  plugins: [createPersistedState()],
})
