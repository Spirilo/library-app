import axios from "axios";

const baseUrl = "/login"

const login = async user => {
  const res = await axios.put(baseUrl, user)
  return res.data
}

const logOut = async () => {
  const res = await axios.delete(baseUrl)
  return res.data
}

const getUser = async () => {
  const res = await axios.get(baseUrl)
  return res.data
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