
import axios from 'axios'

const baseUrl = 'http://localhost:3001/'

const url = require('url');

function resolve(path){
  return url.resolve(baseUrl,path)
}

export  function loginMethod (data) {
  return axios.post(resolve('/login'),data)
}
export  function getUsersAll () {
  return axios.get(resolve('/usersAll'))
}
