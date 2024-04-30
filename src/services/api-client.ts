import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c699ed68c2c43b28af16c3056b2a552",
  },
});
