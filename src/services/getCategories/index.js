import axios from "axios";

export default () =>
  axios
    .get(`https://www.etnassoft.com/api/v1/get/?get_categories=all`)
    .catch((error) => {
      throw error;
    });
