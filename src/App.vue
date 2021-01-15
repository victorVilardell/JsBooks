<template>
  <div id="app" class="grid-container">
    <Header />
    <Filters :categories="categories" v-on:category-selected="getBooks">
    </Filters>

    <BuilderList v-if="hasBooks" :categoryInit="category" :books="books" />
    <Loader v-else />
    <!--<pre v-if="errors.length">
      {{ JSON.stringify(errors, null, 2) }}
    </pre>-->
  </div>
</template>

<script>
import BuilderList from "./components/BuilderList";
import getBooksFromAllLibreries from "./services/getBooksFromAllLibreries";
import getCategories from "./services/getCategories/factory";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Filters from "./components/Filters";

export default {
  name: "App",
  components: {
    BuilderList,
    Loader,
    Header,
    Filters,
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
    stateCategory() {
      return this.$store.state.category;
    },
  },
  async created() {
    await this.getBooks();
    const respondeCategories = await getCategories();
    this.categories = respondeCategories.data;

    this.categoriesWatch = this.$store.watch(
      (state, getters) => getters.category,
      (newValue, oldValue) => {
        newValue !== oldValue && this.getBooks(newValue);
      }
    );
  },
  beforeDestroy() {
    this.categoriesWatch();
  },
  methods: {
    async getBooks(category = { name: "all", nicename: "all" }) {
      this.books = [];
      const { data, errors } = await getBooksFromAllLibreries(
        category.nicename
      );
      if (data) {
        this.books = data;
        this.category = category.name;
      }
      this.errors = errors;
    },
  },
};
</script>

<style>
.grid-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #999;
  margin-top: 60px;
}
.header {
  background-color: red;
  grid-column: 2 / 12;
  grid-row: 1 / 2;
}
.filters {
  grid-column: 2 / 12;
  grid-row: 2 / 3;
}
.main {
  background-color: blue;
  grid-column: 2 / 9;
  grid-row: 3 / 4;
}
.aside {
  background-color: purple;
  grid-column: 9 /12;
  grid-row: 3 /4;
}
.footer {
  background-color: orange;
  grid-column: 2 / 12;
  grid-row: 4 / 5;
}
</style>
