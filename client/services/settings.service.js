import axios from 'axios'

export const settingsService = ()=>{
    const {data: data} =  axios.get(process.env.apiEndPoint + '/v1/settings/list') // 1 hours
  return data;
}