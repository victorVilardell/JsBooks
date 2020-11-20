import getBooksFromOpenLibra from "../getBooksFromOpenLibra/factory";
import getBooksFromItBooks from "../getBooksFromItBooks/factory";
import bookMapper from "../../utils/bookMapper";
import resultsFormatData from "../../utils/resultsFormatData";

export default (category = "javascript") => {
  return Promise.allSettled([
    getBooksFromOpenLibra(category),
    getBooksFromItBooks(category)
  ])
    .then(resultsFormatData)
    .then(({ data, errors }) => ({
      errors,
      data: data.map(bookMapper)
    }))
    .catch((e) => e);
};
