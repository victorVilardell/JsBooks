import getBooksFromOpenLibra from "../getBooksFromOpenLibra";
import getBooksFromItBooks from "../getBooksFromItBooks";
import bookMapper from "../../utils/bookMapper";
import resultsFormatData from "../../utils/resultsFormatData";

export default (category) => {
  return Promise.allSettled([
    getBooksFromOpenLibra(category),
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
