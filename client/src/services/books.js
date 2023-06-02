import axios from "axios";

const baseUrl = "/books"

const getAll = async (s) => {
  const res = await axios.get(`${baseUrl}?filter=${s}`)
  return res.data
}

export default {getAll};