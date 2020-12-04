import axios from "axios";

const ENDPOINT_PATH = `https://cors-anywhere.herokuapp.com/https://pure-caverns-90685.herokuapp.com/api/`;


export default {

  login(username, password) {
    const user = { username, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },

};
