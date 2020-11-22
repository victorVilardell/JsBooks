export default (book) => ({
  id: book.ID,
  title: book.title || "",
  author: book.author,
  content: book.content || "",
  publisher_date: book.publisher_date || "",
  language: book.language,
  pages: book.pages,
  cover: book.cover,
  tags: book.tags || [],
  categories: book.categories || []
});
