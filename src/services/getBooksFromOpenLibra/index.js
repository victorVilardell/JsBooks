import axios from "axios";

export default () =>
  axios
    .get(`https://www.etnassoft.com/api/v1/get/?keyword=javascript`)
    .catch((error) => {
      throw error;
    });
