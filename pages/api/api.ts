import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'health.token': token } = parseCookies();

export const api = axios.create({
  baseURL: 'http://localhost:3000'
})

//Caso exista o token ele e inserido no header da requisicao
if(token){
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}
