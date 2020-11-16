<template>
  <div id="app">
    <CategoriesSelector :categories="this.categories" />
    <BuilderList v-if="hasBooks" :books="books" />
    <Loader v-else />
    <pre v-if="errors.length">
      {{ JSON.stringify(errors, null, 2) }}
    </pre>
  </div>
</template>

<script>
import BuilderList from "./components/BuilderList";
import getBooksFromAllLibreries from "./services/getBooksFromAllLibreries";
import getCategories from "./services/getCategories";
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
    this.categories = respondeCategories.data;
    console.log(this.categories);
  },
  methods: {
    async getBooks() {
      const { data, errors } = await getBooksFromAllLibreries();
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
