import axios from "axios";
import { URL_API } from "./URL";

export default axios.create({
  baseURL: URL_API,
  headers: {
    "Content-type": "application/json",
  },
});
