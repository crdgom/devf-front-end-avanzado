import axios from 'axios'

const BASE_URI = 'http://localhost:3000'

const registerUserService = (data) => axios.post(`${BASE_URI}/register`, data)

const loginUserService = (data) => axios.post(`${BASE_URI}/login`, data)

const getSingleUserService = (id) => axios.get(`${BASE_URI}/users/${id}`)

export {
  registerUserService,
  loginUserService,
  getSingleUserService
}
