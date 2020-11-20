import axios from "axios";

export default (category) =>
  axios
    .get(`https://www.etnassoft.com/api/v1/get/?keyword=${category}`)
    .catch((error) => {
      throw error;
    });
