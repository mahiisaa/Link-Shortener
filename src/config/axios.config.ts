import axios from "axios";

export const baseAppURL = "https://wewink.ir/api/";
export const AXIOS = axios.create({
  baseURL: baseAppURL,
  timeout:20000
});