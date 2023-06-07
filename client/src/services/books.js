import axios from "axios";

const baseUrl = "/books"

const getAll = async (s) => {
  const res = await axios.get(`${baseUrl}?filter=${s}`)
  return res.data
}

const create = async book => {
  const res = await axios.post(baseUrl, book)
  return res.data
}

const save = async book => {
  const res = await axios.put(`${baseUrl}/${book.id}`, book)
  return res.data
}

export default {
  getAll,
  create,
  save
};