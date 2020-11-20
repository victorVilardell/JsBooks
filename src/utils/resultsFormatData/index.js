export default (results) => {
  console.log(results);
  return results.reduce(
    (response, result) => {
      if (result.status === "fulfilled") {
        return {
          data: response.data
            ? response.data.concat(result.value.data)
            : [].concat(result.value.data),
          errors: response.errors
        };
      }
      return {
        data: response.data,
        errors: response.errors
          ? response.errors.concat(result.reason.message)
          : [].concat(result.reason.message)
      };
    },
    { data: null, errors: null }
  );
};
