export default (book) => ({
  id: book.ID,
  title: book.title || "",
  author: book.author,
  content: book.content || "",
  pubblisher_date: book.pubblisher_date || "",
  language: book.language,
  pages: book.pages,
  cover: book.cover,
  tags: book.tags || [],
  categories: book.categories || []
});
