import getBooksFromOpenLibra from "../getBooksFromOpenLibra";
import getBooksFromItBooks from "../getBooksFromItBooks";
import bookMapper from "../../utils/bookMapper";
import resultsFormatData from "../../utils/resultsFormatData";

export default () => {
  return Promise.allSettled([
    getBooksFromOpenLibra(),
    getBooksFromItBooks(),
    getBooksFromItBooks(true)
  ])
    .then(resultsFormatData)
    .then(({ data, errors }) => ({
      errors,
      data: data.map(bookMapper)
    }))
    .catch((e) => e);
};
