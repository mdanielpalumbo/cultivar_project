import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.43:5000'
})


export default instance;