import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://solrachix-json-api.herokuapp.com/v1/mateushenrique-dev/podcastr/'
})