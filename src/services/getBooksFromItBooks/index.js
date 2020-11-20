export default (fetcher, category) =>
  fetcher.get(`https://api.itbook.store/1.0/search/${category}`);
