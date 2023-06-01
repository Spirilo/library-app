import axios from "axios";

const baseUrl = "/books"

const getAll = () => {
  axios.get(baseUrl).then(r => r.data);
}