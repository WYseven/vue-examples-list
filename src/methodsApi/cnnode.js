
import axios from 'axios'

var conode = axios.create({
  baseURL: 'http://localhost:3002/cnnode/api/',
  responseType: "json",
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    
    if(!data.success){
      throw new Error('请求数据有问题')
      return {}
    }
    return data;
  }]
});

export  function getTopics (params) {
  return conode.get('topics',{params})
}
