import axios from "axios";

const api = axios.create({baseURL: 'http://192.168.0.116:3001'})

export const endPoints = {
  get: '/select',
  post: '/insert',
  put: '/update',
  delete: (id) => `/delete/${id}`
}

export default api