<template>
  <div id="app">
    <CategoriesSelector
      :categories="categories"
      v-on:category-selected="getBooks"
    />
    <BuilderList v-if="hasBooks" :categoryInit="category" :books="books" />
    <Loader v-else />
    <pre v-if="errors.length">
      {{ JSON.stringify(errors, null, 2) }}
    </pre>
  </div>
</template>

<script>
import BuilderList from "./components/BuilderList";
import getBooksFromAllLibreries from "./services/getBooksFromAllLibreries";
import getCategories from "./services/getCategories/factory";
import CategoriesSelector from "./components/CategoriesSelector";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    BuilderList,
    Loader,
    CategoriesSelector,
  },
  data() {
    return {
      category: "",
      books: [],
      errors: [],
      categories: [],
    };
  },
  watch: {
    books(newValue) {
      this.books = newValue;
    },
  },
  computed: {
    hasBooks() {
      return this.books.length > 0;
    },
  },
  async created() {
    await this.getBooks();
    const respondeCategories = await getCategories();
    console.log(respondeCategories);
    this.categories = respondeCategories.data;
  },
  methods: {
    async getBooks(category = { name: "all", nicename: "all" }) {
      this.category = category.name;
      const { data, errors } = await getBooksFromAllLibreries(
        category.nicename
      );
      if (data) {
        this.books = data;
      }
      this.errors = errors;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;
  margin-top: 60px;
}
</style>
