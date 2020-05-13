import axios from "axios";

export default axios.create({
  baseURL: "https://pure-tor-10295.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
