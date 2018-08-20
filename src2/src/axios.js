import axios from 'axios'

axios.defaults.headers.common['authorization'] = localStorage.getItem('token') || ''

export default axios 