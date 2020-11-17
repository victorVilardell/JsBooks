<template>
  <section>
    <input v-model="selectedCategory" />
    <ul v-if="hasFilteredCategories">
      <li v-for="category in this.categoryFiltered" :key="category.category_id">
        {{ category.name }}
      </li>
    </ul>
    <select name="categories">
      <option
        v-for="category in categories"
        :key="category.category_id"
        :value="category.category_id"
      >
        {{ category.name }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: "CategoriesSelector",
  props: {
    categories: Array,
  },
  data() {
    return {
      selectedCategory: "",
      categoryFiltered: [],
    };
  },
  watch: {
    selectedCategory(newValue) {
      this.filterInCategories(newValue);
    },
  },
  computed: {
    hasFilteredCategories() {
      return this.categoryFiltered.length > 0;
    },
  },
  methods: {
    filterInCategories(input) {
      if (input.length > 0) {
        this.categoryFiltered = this.categories.filter((category) =>
          category.name.toLowerCase().includes(input.toLowerCase())
        );
      } else {
        this.categoryFiltered = [];
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
