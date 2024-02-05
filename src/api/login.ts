import api from "./api";
const Login = async () => {
  const res = await api.post("/login");
  return res;
};

export default Login;
