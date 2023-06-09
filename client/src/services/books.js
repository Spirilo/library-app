import axios from "axios";

const baseUrl = "/books"

const getAll = async s => {
  const res = await axios.get(`${baseUrl}?filter=${s}`)
  return res.data
}

const getUserBooks = async id => {
  const res = await axios.get(`${baseUrl}/${id}/loans`)
  return res.data
}

const getTopList = async () => {
  const res = await axios.get(`${baseUrl}/toplist`)
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

const dlt = async id => {
  const res = await axios.delete(`${baseUrl}/${id}`)
  return res.data
}

export default {
  getAll,
  getUserBooks,
  getTopList,
  create,
  save,
  dlt
};