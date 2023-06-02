import axios from "axios";

const baseUrl = "/authors"

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default {getAll}
