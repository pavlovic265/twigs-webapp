import axios from "axios";
import storage from "utils/storage";
import env from "utils/env";

const request = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  headers: {
    code: storage.getItem("code") || "",
  },
});

export function setRequestHeader(code: string) {
  request.defaults.headers.code = code;
}

export default request;
