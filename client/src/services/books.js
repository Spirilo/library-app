import axios from "axios";

const baseUrl = "/books"

const getAll = async (s) => {
  const b = await axios.get(`${baseUrl}?title=${s}`)
  return b.data
}

export default {getAll};