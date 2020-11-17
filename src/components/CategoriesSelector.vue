<template>
  <section>
    <input
      v-model="selectedCategory"
      @focus="isFocused = !isFocused"
      @blur="isFocused = !isFocused"
    />
    <ul v-if="isFocused">
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
      categoryFiltered: this.categories,
      isFocused: false,
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
      console.log(input);
      if (input.length > 0) {
        this.categoryFiltered = this.categories.filter((category) =>
          category.name.toLowerCase().includes(input.toLowerCase())
        );
      } else {
        this.categoryFiltered = this.categories;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
