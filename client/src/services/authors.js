import axios from "axios";

const baseUrl = "/author"

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const get = async id => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const create = async author => {
  const res = await axios.post(baseUrl, author)
  return res.data
}

export default {
    getAll,
    get,
    create
}
