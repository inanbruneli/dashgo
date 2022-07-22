import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dashgo-inanbruneli.vercel.app/api'
})