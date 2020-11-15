import axios from "axios";

export default (shouldFail) =>
  !shouldFail
    ? axios.get(`https://api.itbook.store/1.0/search/js`).catch((error) => {
        throw error;
      })
    : Promise.reject(new Error("Ha fallat"));
