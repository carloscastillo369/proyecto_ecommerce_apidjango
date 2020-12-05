import axios from "axios";

const ENDPOINT_PATH = `https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/`;

export default {

  register(first_name, email, password) {
    const user = { first_name, email, password};
    return axios.post(ENDPOINT_PATH + "register", user);
  },

  login(username, password) {
    const user = { username, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },

  formPostulante(nombre_postulante, celular, correo, programa){
    const postulante = { nombre_postulante, celular, correo, programa };
    return axios.post(ENDPOINT_PATH + "postulantes", postulante);
  }

  
};
