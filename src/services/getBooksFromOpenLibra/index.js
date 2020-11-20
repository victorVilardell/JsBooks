export default (category, fetcher) =>
  fetcher.get(`https://www.etnassoft.com/api/v1/get/?keyword=${category}`);
