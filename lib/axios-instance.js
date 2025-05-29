import axios from "axios";
import { HOST_URL } from "@/config";

const axiosInstance = axios.create({
  baseURL: `${HOST_URL}/api/v1`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Authorization,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
  },
});

export default axiosInstance;
