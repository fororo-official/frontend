import axios from "axios";
import Cookies from "js-cookie";
const api = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_AXIOS_BASEURL}:${process.env.NEXT_PUBLIC_AXIOS_BASEPORT}`,
  headers: {
    Authorization: Cookies.get("ramperIdToken"),
  },
});

export default api;
