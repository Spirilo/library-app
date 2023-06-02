import axios from "axios";

const baseUrl = "/author"

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const get = async (id) => {
  const res = await axios.get(`${baseUrl}/books/${id}`)
  return res.data
}

export default {
    getAll,
    get
}
