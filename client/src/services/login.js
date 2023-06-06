import axios from "axios";

const baseUrl = "/login"

const login = async user => {
  const res = await axios.put(baseUrl, user)
  return res.data
}

const logOut = () => {

}

const getUser = () => {
  
}

const createUser = async user => {
  const res = await axios.post(baseUrl, user)
  return res.data
}

export default {
  login,
  logOut,
  getUser,
  createUser
}