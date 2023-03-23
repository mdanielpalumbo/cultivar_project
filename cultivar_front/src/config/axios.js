import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://172.30.146.251:5000'
})

export default instance;