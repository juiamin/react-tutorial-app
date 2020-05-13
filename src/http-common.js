import axios from "axios";

export default axios.create({
  baseURL: "https://mighty-mesa-44546.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
