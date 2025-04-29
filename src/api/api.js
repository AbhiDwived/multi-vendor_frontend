import axios from 'axios'
import { api_url } from '../utils/config'
const api = axios.create({
     baseURL: 'https://multi-vendor-backend-l3yd.onrender.com/api'
})
export default api