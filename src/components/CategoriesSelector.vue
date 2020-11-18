<template>
  <div>
    <input
      v-model="selectedCategory"
      @focus="isFocused = !isFocused"
      @blur="isFocused = !isFocused"
    />
    <ul v-if="isFocused">
      <li
        v-for="category in this.categoryFiltered"
        :key="category.category_id"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </li>
    </ul>
  </div>
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
    selectCategory(category) {
      this.selectedCategory = category.name;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  position: relative;
  z-index: 1;
  width: 20%;
}
ul {
  position: absolute;
  background-color: #eee;
  margin: 0;
  padding: 0;
  width: 100%;
}
li {
  color: #666;
  list-style-type: none;
  padding: 5px 15px;
  margin: 0;
  font-size: 12px;
}
li:hover {
  background-color: #ccc;
  cursor: pointer;
}
</style>
