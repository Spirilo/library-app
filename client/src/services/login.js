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

const createUser = () => {
  
}

export default {
  login,
  logOut,
  getUser,
  createUser
}