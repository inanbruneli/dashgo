import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://dashgo-inanbruneli.vercel.app/api'
})