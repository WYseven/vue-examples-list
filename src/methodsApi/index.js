
import axios from 'axios'

axios.defaults.withCredentials = true

const baseUrl = 'http://localhost:3001/'

const url = require('url');

function resolve(path){
  return url.resolve(baseUrl,path)
}


export  function loginMethod (data) {
  return axios(resolve('/login'),{
    method: "post",
    data: data,
    credentials: 'same-origin',
    withCredentials: true
  })
}
export  function getUsersAll () {
  return axios.get(resolve('/usersAll'))
}
