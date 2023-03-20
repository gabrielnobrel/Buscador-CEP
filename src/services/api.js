//https://viacep.com.br/ws/62770000/json/
import axios from "axios";

const api = axios.create({
  baseURL: "https://viacep.com.br/ws",
});

export default api;
