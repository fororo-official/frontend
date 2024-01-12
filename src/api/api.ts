import axios from "axios";
import Cookies from "js-cookie";
const api = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_AXIOS_BASEURL}/v1/`,
  headers: {
    Authorization: Cookies.get("ramperIdToken"),
  },
});

export default api;
