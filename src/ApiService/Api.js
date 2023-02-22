import axios from "axios";
axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyBbwbcKT-RSKIB2oJ8hpYcuh6rHJ342lVo"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;


export  const RegisterApi = (inputs) => {
    let data = {email : inputs.email , username : inputs.username , password : inputs.password }
    return axios.post(REGISTER_URL,data)
}

export const LoginApi = (inputs) => {
    let data = {email : inputs.email, password : inputs.password }
    return axios.post(LOGIN_URL,data)
}
