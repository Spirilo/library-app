import axios from "axios";

const baseUrl = "/books"

const getAll = async () => {
  const b = await axios.get(baseUrl)
  return b.data
}

export default {getAll};